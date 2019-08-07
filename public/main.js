const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds']
const values = [
  'Ace',
  'King',
  'Queen',
  'Jack',
  '10',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2'
]

const deck = []

const makeDeck = () => {
  // Make a deck
  for (let suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
    for (let valueIndex = 0; valueIndex < values.length; valueIndex++) {
      const suit = suits[suitsIndex]
      const value = values[valueIndex]
      deck.push(`${value} of ${suit}`)
    }
  }
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
  console.log(deck)
  return deck
}

// Shuffle Deck
const shuffleCards = () => {
  console.log(deck.pop())
}
// Drawing a Card
const drawCard = () => {
  const dealtCard = deck.pop()
  console.log(dealtCard)
  // Display Card
  document.querySelector('.drawn-card').textContent = dealtCard
}
document.querySelector('.shuffle-cards').addEventListener('click', makeDeck)
document.querySelector('.shuffle-cards').addEventListener('click', shuffleCards)
document.querySelector('.draw-card').addEventListener('click', drawCard)
