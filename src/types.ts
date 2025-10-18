// TypeScript type definitions

export interface Flashcard {
    front: string;
    back: string;
}

export interface Deck {
    // id: number;
    name: string;
    cards: Flashcard[];
}

// Props
export interface CardProps {
    card: Flashcard;
    side: boolean;
}