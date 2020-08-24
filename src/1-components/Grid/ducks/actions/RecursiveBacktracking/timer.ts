// var startTime, endTime;

// function start() {
//   startTime = performance.now();
// };

// function end() {
//   endTime = performance.now();
//   var timeDiff = endTime - startTime; //in ms
//   // strip the ms
//   timeDiff /= 1000;

//   // get seconds
//   var seconds = Math.round(timeDiff);
//   console.log(seconds + " seconds");
// }

// ///////////

export interface CustomTimer {
  stop: Function;
  start: Function;
}

function generateTimer(): CustomTimer {
  let startTime: number;
  let endTime: number;

  return {
    start: () => {
      startTime = performance.now();
    },
    stop: () => {
      endTime = performance.now();
      let timeDiff = endTime - startTime; //in ms

      // get seconds
      var seconds = Math.round(timeDiff);
      console.log('time: ' + timeDiff);
    },
  };
}

export default generateTimer();
