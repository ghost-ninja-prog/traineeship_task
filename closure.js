
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


function createRandomGenerator(min, max) {
    return function() {
        return Math.floor(Math.random() * (max - min) + min)
    }
}

const randomNumber = createRandomGenerator(7, 130)

console.log(randomNumber())
console.log(randomNumber())
console.log(randomNumber())
