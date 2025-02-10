
function createLogger() {
    let arrLogs = []

    return {
        log: function(log) {
            arrLogs.push(log)
        },
        getLogs: function() {
            arrLogs.forEach((log, i) => console.log(`log № ${i + 1}: ${log}`))
        }
    }
}

const logger = createLogger()

logger.log('Hello')
logger.log('World')
logger.log('!!!')


logger.getLogs()

function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  console.log( counter2() ); // ?
  console.log( counter2() ); // ?