"use strict"

// Variable Declarations
const sideNavItems = document.querySelectorAll(".nav-item")
const submitChatBtn = document.getElementById("chat-submit-btn")
const chatInput = document.getElementById("chat-input")
const chatLog = document.getElementById("chat-log")

// Time
const getTimeStamp = () => {
  const date = new Date()
  return `${date.getHours()}:${date.getMinutes()}`
}

// Game Functions

const onNavClick = (target_id) => {
  const allCards = document.querySelectorAll(".card")
  allCards.forEach((card) => card.classList.add("d-none"))
  const navCategory = `.${target_id.split("-")[0]}Card`

  getCurrentCards(navCategory).forEach((card) => {
    card.classList.toggle("d-none")
  })
}

const getCurrentCards = (category) => {
  return document.querySelectorAll(category)
}

sideNavItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    onNavClick(e.target.id)
  })
})

// Chat
chatInput.value = ""
submitChatBtn.addEventListener("click", (e) => {
  submitChat(chatInput.value)
  chatInput.value = ""
})

const submitChat = (chatValue) => {
  const submission = `${getTimeStamp()} Username: ${chatValue.trim()}`
  chatLog.insertAdjacentHTML("afterbegin", `<br><p>${submission}</p>`)
}
