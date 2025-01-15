const gameNumber = () => {
    const number = Math.floor((Math.random()*100))
    console.log(`компьютер 1 загадал число ${number}`)

    let comp2 = 50
    let interval = 100

    

    while (comp2 !== number) {
        console.log(`Компьютер 1: пробую число ${comp2}`)

        if (comp2 < number) {
            console.log('Компьютер 2: больше')
            if(number - comp2 === 1) {
                comp2 = comp2 + 1
            } else {
                interval = Math.floor(interval / 2)
                comp2 = comp2 + Math.floor(interval / 2)
            }

        } else if (comp2 > number) {
            console.log('Компьютер 2: меньше')
            if(comp2 - number === 1) {
                comp2 = comp2 - 1
            } else {
                interval = Math.floor(interval / 2)
                comp2 = comp2 - Math.floor((interval / 2))
            }
        }
        
    }
    
    if (comp2 === number) {
        console.log(`Компьютер 1: пробую число ${comp2}`)
        console.log('Компьбтер 2: Угадал')
    }

    
}
gameNumber()