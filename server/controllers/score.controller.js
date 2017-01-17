import Score from '../models/score.model';
import ScoreService from '../services/score.service';

// Method to get sum of scores of current week



// Method to create a new score entry
function create(req, res) {
    
    ScoreService.createScore(req.user, parseInt(req.body.submitted)).then((result) => {
        // on success, send result
        res.status(200).send(result);
    }).catch((error) => {
        // on error, send error
        res.status(400).send(error)
    })

}
 
export default {
    create
}