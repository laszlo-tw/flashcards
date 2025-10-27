import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import { Flashcard, Deck, Collection } from './types';
import my_decks from './data/My_Decks';

// import Header from './components/Header';
// import Card from './components/Card';
import Practice from './components/Practice';
import DeckView from './components/DeckView';
import CollectionView from './components/CollectionView';

function App() {
  // const [deck, setDeck] = useState<Deck>({
  //   name: "sample deck",
  //   cards: [  {front: "front-0", back: "back-0"},
  //             {front: "front-1", back: "back-1"},
  //             {front: "front-2", back: "back-2"} ]
  //   })

  const [deck, setDeck] = useState<Deck>(my_decks.decks[0])

  // const [flashcard, setFlashcard] = useState<Flashcard>(
  //   {front: "front", back: "back"}
  // )

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element ={<CollectionView decks={my_decks.decks} />} />
          <Route path="/deck" element ={<DeckView name={deck.name} cards={deck.cards}/>} />
          <Route path="/practice" element ={<Practice name={deck.name} cards={deck.cards}/>} />
        </Routes> */}
        <Routes>
          <Route path="/" element ={<CollectionView decks={my_decks.decks} />} />
          <Route path="/deck/:deckID" element ={<DeckView />} />
          <Route path="/practice/:deckID" element ={<Practice />} />
        </Routes>
      </BrowserRouter>
      {/* <DeckView name={deck.name} cards={deck.cards}/> */}
      {/* <Practice name={deck.name} cards={deck.cards}/> */}
      {/* <CollectionView decks={my_decks.decks} /> */}
    </div>
  );
}

export default App;
