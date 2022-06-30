function botChoicefunction() {
    let botNum = Math.floor(Math.random() * 3)
    let botarray = ["rock", "paper", "scissors"]
    let botChoice = botarray[botNum]
    return botChoice
}

function resultfunction(humanChoice, botChoice) {
    let message;
    if (humanChoice === botChoice) {
        message = {
            result: "You Tied",
            color: "Yellow"
        }
    }
    if (humanChoice == "rock" && botChoice == "scissors") {
        message = {
            result: "You Win!!",
            color: "green"
        }
    }
    if (humanChoice == "rock" && botChoice == "paper") {
        message = {
            result: "You Lose",
            color: "red"
        }
    }
    if (humanChoice == "paper" && botChoice == "rock") {
        message = {
            result: "You Win!!",
            color: "green"
        }
    }
    if (humanChoice == "paper" && botChoice == "scissors") {
        message = {
            result: "You Lose",
            color: "red"
        }
    }
    if (humanChoice == "scissors" && botChoice == "papar") {
        message = {
            result: "You Win!!",
            color: "green"
        }
    }
    if (humanChoice == "scissors" && botChoice == "rock") {
        message = {
            result: "You Lose",
            color: "red"
        }
    }
    return message
}

function rpsgame(humanPick) {
    let humanChoice = humanPick.id
    let botChoice = botChoicefunction()
    let result = resultfunction(humanChoice, botChoice)
    let content = document.getElementById("content")
    content.remove()
    let content1 = document.getElementById("content1")
    content1.setAttribute("class", "rps")
    //content1.appendChild(humanPick)
    let humanimage = document.createElement("img")
    humanimage.src = "./RPS/" + humanChoice + ".png"
    humanimage.alt = humanChoice
    humanimage.style.boxShadow = "0px 5px 15px 0px rgb(0, 0, 225)"
    content1.appendChild(humanimage)

    let text = document.createElement("h1")
    text.textContent = result.result
    text.style.color = result.color
    text.style.margin = "auto"
    content1.appendChild(text)

    let botimage = document.createElement("img")
    botimage.src = "./RPS/" + botChoice + ".png"
    botimage.alt = botChoice
    botimage.style.boxShadow = "0px 5px 15px 0px rgb(225, 0, 0)"
    content1.appendChild(botimage)



    console.log(result)
    console.log(humanPick)
    console.log(text)
}

function reload() {
    pagelink = document.location.href
    document.location = pagelink
}