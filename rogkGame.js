


let winCounter = 0
let loseCounter = 0
let tieCounter = 0

let computerChoice = ''
let computerImgPath = ''
let userImgPath = ''
let userChoice = ''

let gameResult = ''

let gameList = [{rock:'img/rock-emoji.png'}, {paper:'img/paper-emoji.png'}, {scissors:'img/scissors-emoji.png'}]

const randomChoice = () =>{
    let randomChoice =  Object.entries(gameList[Math.floor(Math.random() * 3)])[0]
    computerChoice = randomChoice[0]
    computerImgPath = randomChoice[1]
}


const reset = () =>{
    winCounter=0
    loseCounter=0
    tieCounter=0
    document.getElementById('counter').textContent = `Wins: ${winCounter}, Losses: ${loseCounter}, Ties: ${tieCounter}`
}

const checker = ()=>{
    if (userChoice === 'paper' && computerChoice ==='rock') {
        winCounter++
        gameResult = 'You win!'
    }else if (userChoice === 'rock' && computerChoice === 'scissors') {
        winCounter++
        gameResult = 'You win!'
    }else if (userChoice === 'scissors' && computerChoice === 'paper') {
        winCounter++
        gameResult = 'You win!'
    }else if (userChoice === computerChoice){
        tieCounter++
        gameResult = 'Tie!'
    }else{
        loseCounter++
        gameResult = 'You lose!'
    }

    document.getElementById('result-text').textContent = gameResult
    document.getElementById('users-choise').innerHTML = `You: <img src=${userImgPath}> Computer: <img src=${computerImgPath}>`
    document.getElementById('counter').textContent = `Wins: ${winCounter}, Losses: ${loseCounter}, Ties: ${tieCounter}`
}

document.getElementById('rock').addEventListener('click', () => {
    
    // call the random funttion
    randomChoice()
    let choice = Object.entries(gameList[0])
    userChoice =  choice[0][0]
    userImgPath = choice[0][1]

    // compair for the user choice and computer choice
    checker()

})

document.getElementById('paper').addEventListener('click', () => {
    
    // call the random funttion
    randomChoice()

    let choice = Object.entries(gameList[1])
    userChoice =  choice[0][0]
    userImgPath = choice[0][1]
    
    // compair for the user choice and computer choice
    checker()
})

document.getElementById('seasor').addEventListener('click', () => {
    
    // call the random funttion
    randomChoice()

    let choice = Object.entries(gameList[2])
    userChoice =  choice[0][0]
    userImgPath = choice[0][1]

        // compair for the user choice and computer choice
        checker()
})