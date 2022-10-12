const button = document.querySelector('button')
const numberOfCards = document.querySelector('#card-number')
const cardsSection = document.querySelector('.cards')
const randomInfo = [
    "Truth and Method, by Hans-Georg Gadamer",
    "The Territories of Science and Religion, by Peter Harrison",
    "The Tacit Dimension, by Michael Polanyi",
    "The Limits of Critique, by Rita Felski",
    "Aspects of Truth, by Catherine Pickstock",
    "Saving the Appearances, by Owen Barfield",
    "The Master and His Emissary, by Iain McGilchrist",
    "Philosopher of the Heart, by Clare Carlisle",
    "Dominion, by Tom Holland",
    "Silence, by Shusako Endo"
]

numberOfCards.addEventListener('input', () => {
    createCards(numberOfCards)
})

function createCard(cardNumber){
    const card = document.createElement('div')
    card.classList.add("card", cardNumber)

    const cardText = document.createElement('p')
    cardText.append(cardNumber.toString())
    card.append(cardText)

    card.addEventListener('click', () => {
        let text = card.firstChild.innerText !== card.classList[1] ? card.classList[1] : randomInfo[Math.floor(Math.random()*10)]
        cardText.replaceChildren(text)
        card.replaceChildren(cardText)
    })
    
    cardsSection.append(card)
}

function createCards(numberOfCards) {
    cardsSection.replaceChildren()

    for (let index = numberOfCards.min; index <= numberOfCards.value; index++) {
        createCard(index)
    }
}


