/* eslint-disable no-console */
import moment from 'moment';

class Logger {
  log(data) {
    if (typeof data === 'object') {
      data = JSON.stringify(data);
    }

    console.log(moment().toString(), data);
  }
}

export default new Logger();
