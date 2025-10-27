import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Flashcard, Deck } from "../types";
import my_decks from '../data/My_Decks';
// import Header from "./Header";
// import Card from "./Card";

// const Practice: React.FC<Deck> = ({name, cards}) => {
const Practice: React.FC = () => {
    // routing:
    const { deckID } = useParams();
    const deck = my_decks.decks.find(d => d.id === Number(deckID));
    // if (!deck) return <div>Deck not found.</div> // need to improve


    // everything else:

    // const [side, setSide] = useState<boolean>(true);
    const [index, setIndex] = useState<number>(0);
    const [faceUp, setFaceUp] = useState<boolean>(true);

    const flip = () => {
        setFaceUp(!faceUp);
    };
    
    const previous = () => {
        if (index == 0) {
            setIndex(deck ? deck.cards.length - 1 : 0);
        } else {
            setIndex(index - 1);
        }
        setFaceUp(true); // display front
    };

    const next = () => {
        setIndex(deck? (index+1)%deck.cards.length : 0)
        setFaceUp(true); // display front
    };
    
    return (
        deck ?
            <div className="practice">
                {/* <Header title={name}/> */}
                <header>
                    <h1>{deck.name}</h1>
                </header>
                <div className='practice-layout'>
                    <div className="practice-side-panel" onClick={previous}><h2>⟨</h2></div>
                    <div className="practice-center-panel">
                        {/* <Card card={cards[index]} side={true}/> */}
                        <div className="card" onClick={() => flip()}>
                            <p className='card-text'>{faceUp ? deck.cards[index].front : deck.cards[index].back }</p>
                        </div>
                    </div>
                    <div className="practice-side-panel" onClick={next}><h2>⟩</h2></div>
                </div>
            </div>
        : <div>Deck not found.</div>
    );
};

export default Practice;