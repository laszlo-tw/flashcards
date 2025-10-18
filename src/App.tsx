import { useState } from 'react';
import './App.css';

import { Flashcard, Deck } from './types';
// import Header from './components/Header';
// import Card from './components/Card';
import Practice from './components/Practice';

function App() {
  const [deck, setDeck] = useState<Deck>({
    name: "sample deck",
    cards: [  {front: "front-0", back: "back-0"},
              {front: "front-1", back: "back-1"},
              {front: "front-2", back: "back-2"} ]
    })

  // const [flashcard, setFlashcard] = useState<Flashcard>(
  //   {front: "front", back: "back"}
  // )

  return (
    <div className="App">
      <Practice name={deck.name} cards={deck.cards}/>
    </div>
  );
}

export default App;
