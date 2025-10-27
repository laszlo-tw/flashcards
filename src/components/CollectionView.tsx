// just a stub so far so that I can implement routing

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Collection } from "../types";
import EditCell from './EditCell';

const CollectionView: React.FC<Collection> = ({decks}) => {

    // maybe when importing decks in from database, read their name and cards from database, and then assign an id to be used locally
    // and create the Deck objects here

    const navigate = useNavigate();

    const openDeck = (deckID: number) => {
        navigate(`/deck/${deckID}`); // why does directly calling useNavigate not work here?
    }

    return (
        <div className="collection-view">
            {/* <Header title={name}/> */}
            <header>
                <h1>My Decks</h1>
            </header>
            {/* should support create/edit deck, delete deck, select decks to practice */}
            {/* also add some ordering scheme eventually */}
            <div className="collection-view-layout">
                <table className = "collection-table">
                    <thead>
                        <tr>
                            <th>Name:</th>
                            <th>Size:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {decks.map(deck => 
                            (
                                <tr key={deck.id}>
                                   <td
                                    onClick={() => openDeck(deck.id)}
                                   >{deck.name}</td>
                                   <td>{deck.cards.length}</td> 
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CollectionView