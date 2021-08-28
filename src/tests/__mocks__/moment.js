// jest.mock('moment');
const moment = require('moment');

export default (timestapm = 0) => {
  return moment(timestapm);
};
