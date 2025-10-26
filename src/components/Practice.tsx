import { useState } from 'react';
import { Flashcard, Deck } from "../types";
// import Header from "./Header";
// import Card from "./Card";

const Practice: React.FC<Deck> = ({name, cards}) => {
    // const [side, setSide] = useState<boolean>(true);
    const [index, setIndex] = useState<number>(0);
    const [faceUp, setFaceUp] = useState<boolean>(true);

    const flip = () => {
        setFaceUp(!faceUp);
    };
    
    const previous = () => {
        if (index == 0) {
            setIndex(cards.length - 1);
        } else {
            setIndex(index - 1);
        }
        setFaceUp(true); // display front
    };

    const next = () => {
        setIndex((index+1)%cards.length)
        setFaceUp(true); // display front
    };
    
    return (
        <div className="practice">
            {/* <Header title={name}/> */}
            <header>
                <h1>{name}</h1>
            </header>
            <div className='practice-layout'>
                <div className="practice-side-panel" onClick={previous}><h2>⟨</h2></div>
                <div className="practice-center-panel">
                    {/* <Card card={cards[index]} side={true}/> */}
                    <div className="card" onClick={() => flip()}>
                        <p className='card-text'>{faceUp ? cards[index].front : cards[index].back }</p>
                    </div>
                </div>
                <div className="practice-side-panel" onClick={next}><h2>⟩</h2></div>
            </div>
        </div>
    );
};

export default Practice;