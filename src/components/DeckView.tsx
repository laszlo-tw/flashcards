import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Flashcard, Deck } from "../types";
import EditCell from './EditCell';
// import Header from "./Header";
// import Card from "./Card";

import my_decks from '../data/My_Decks';
// is there a better way to do this??? 
// have it depend on which user is logged in?
// have it passed in somehow? but the routing in App.tsx prevents props from being allowed?

// const DeckView: React.FC<Deck> = ({name, cards}) => { // before routing
const DeckView: React.FC = () => {

    // handling routing
    const navigate = useNavigate();
    const { deckID } = useParams();

    const deck = my_decks.decks.find(d => d.id === Number(deckID));

    // if (!deck) return <div>Deck not found.</div>; // improve this

    const practiceDeck = (deckID: number) => {
        navigate(`/practice/${deckID}`); // why does directly calling useNavigate not work here?
    }

    // everything else
    const [updateCards, setUpdateCards] = useState<Flashcard[]>(deck? deck.cards : []);

    const handleUpdateCard = (cardID: number, field: 'front' | 'back', newValue: string) => {
        setUpdateCards(oldCards => 
            oldCards.map(oldCard =>
                oldCard.id === cardID
                    ? {...oldCard, [field]: newValue}
                    : oldCard
            )
        );
    };
  
    return (
        deck ?
            <div className="deck-view">
                {/* <Header title={name}/> */}
                <header>
                    <h1>{deck.name}</h1>
                </header>
                {/* should support create deck, edit deck, delete deck, reorder list */}
                <div className="deck-view-layout">
                    <table className = "deck-table">
                        <thead>
                            <tr>
                                <th>Front:</th>
                                <th>Back:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {updateCards.map(card => 
                                (
                                    <tr key={card.id}>
                                        <EditCell value={card.front} onSave={(newValue) => handleUpdateCard(card.id, 'front', newValue)}/>
                                        <EditCell value={card.back} onSave={(newValue) => handleUpdateCard(card.id, 'back', newValue)}/>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                    <button onClick={() => practiceDeck(deck.id)}>Begin Practice</button>
                </div>
            </div>
         : <div>Deck not found.</div>
    );
};

export default DeckView;