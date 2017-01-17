import Promise from 'bluebird';
import Score from '../models/score.model';
import UtilService from '../services/util.service';
import User from '../models/user.model';

// getScoreForUser (user, timestamp): int
function getUserScore(user, timestamp) {
  return new Promise((resolve, reject) => {
    const timespans = UtilService.getTimespanForTimestamp(timestamp);
    Score.find({
      user: user,
      createdAt: {
        '$gt': timespans.start,
        '$lt': timespans.end
      }
    }).then((res) => {
      const sum = res.reduce((a, b) => a + b.counted, 0)
      resolve(sum);
    }).catch((err) => {
      reject(err);
    })
  })
}

// getMaxTeamScore (user, timestamp): int
function getMaxTeamScore(user, timestamp) {
  return new Promise((resolve, reject) => {
    const timespans = UtilService.getTimespanForTimestamp(timestamp);
    User.find({
      team: user.team
    }).then((users) => {
      let promises = [];
      users.forEach((u) => {
        promises.push(
          Score.find({
            user: u,
            createdAt: {
              '$gt': timespans.start,
              '$lt': timespans.end
            }
          })
        )
      })
      Promise.all(promises).then((results) => {
        const max = results.reduce((a, b) => {
          const sum = b.reduce((c, d) => c + d.counted, 0);
          return sum > a ? sum : a;
        }, 0)
        resolve(max);
      })
      
    }).catch((error) => {

      reject(error);
    })
  })
}
// createScore (user, submitted): void
// getScoreForUser() + submitted >= getMaxTeamScore

function createScore(user, submitted) {
  return new Promise((resolve, reject) => {

    let promises = [];

    promises.push(getMaxTeamScore(user, new Date()));
    promises.push(getUserScore(user, new Date()));
    Promise.all(promises).then((results) => {
      // results[0] = maxTeamScore
      // results[1] = userScore

      console.log(results[1]);

      const score = new Score({
        user: user,
        submitted: submitted,
        counted: results[0] < results[1] + submitted ? submitted : Math.floor(submitted / 2)
      });

      score.save().then((savedScore) => {
        resolve(savedScore);
      })

    }).catch((error) => {
      reject(error);
    })

  })
}

export default {
  createScore
}
