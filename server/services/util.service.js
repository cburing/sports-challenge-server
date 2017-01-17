// getTimespanForTimestamp (timestamp): {start, end}
function getTimespanForTimestamp(timestamp) {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return {
    start: new Date(today.setDate(today.getDate() - today.getDay())),
    end: new Date(today.setDate(today.getDate() + (7 - today.getDay())))
  };

}

export default {
  getTimespanForTimestamp
}
