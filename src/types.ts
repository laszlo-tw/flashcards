// TypeScript type definitions

export interface Flashcard {
    id: number;
    front: string;
    back: string;
}

export interface Deck {
    id: number;
    name: string;
    cards: Flashcard[];
    // front-label string e.g. "english"
    // back-label string e.g. "korean"
}

export interface Collection {
    decks: Deck[];
}

// Props
// export interface CardProps {
//     card: Flashcard;
//     side: boolean;
// }

export interface EditCellProps {
    value: string;
    onSave: (newValue: string) => void;
}