import {houseStatus} from '../management/services/houseStatus';
import toggleLight from './toggleLight';
import moment from 'moment';

//need to know which room it is
export default function (room) {
  if (room !== undefined) {
    let houseStatus = houseStatus.get().then(houseStatus, {
        
      if (houseStatus.status === houseStatuses.unlocked) {
        //check the time
        let date = new moment();
        if (date.timeIsGreaterThan("16:00:00") || date.timeIsLessThan("05:00:00")) {
          //turn on light
          toggleLight(room, true);
        }
      } else {
        //must be locked, turn the light on regardless but do something else
      }

    }).then(error, {
      console.log('what should it do if not able to access db?');
    });
  } else {
    console.log('no point running log if no room').
  }
};
