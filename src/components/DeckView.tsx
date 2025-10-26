import { useState } from 'react';
import { Flashcard, Deck } from "../types";
import EditCell from './EditCell';
// import Header from "./Header";
// import Card from "./Card";

const DeckView: React.FC<Deck> = ({name, cards}) => {
    const [updateCards, setUpdateCards] = useState<Flashcard[]>(cards);

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
        <div className="deck-view">
            {/* <Header title={name}/> */}
            <header>
                <h1>{name}</h1>
            </header>
            {/* should support create element, edit element, delete element, reorder list */}
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
                <button>Begin Practice</button>
            </div>
        </div>
    );
};

export default DeckView;