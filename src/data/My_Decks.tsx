// sample data

import {Deck, Collection} from '../types'

// a function that takes a csv file

let countries_deck : Deck = {
    id: 1,
    name: "Countries",
    cards: [  
        {id: 1, front: "America", back: "미국"},
        {id: 2, front: "Korea", back: "한국"},
        {id: 3, front: "China", back: "중국"},
        {id: 4, front: "Thailand", back: "태국"},
        {id: 5, front: "Japan", back: "일번"},
        {id: 6, front: "Vietnam", back: "베트남"},
        {id: 7, front: "France", back: "프랑스"},
        {id: 8, front: "Mongolia", back: "몽골"},
        {id: 9, front: "Brazil", back: "브라질"},
            ]
}

let occupations_deck : Deck = {
    id: 2,
    name: "Occupations",
    cards: [  
        {id: 1, front: "student", back: "학생"},
        {id: 2, front: "teacher", back: "선생님"},
        {id: 3, front: "office worker", back: "회사원"},
        {id: 4, front: "doctor", back: "의사"},
        {id: 5, front: "nurse", back: "간호사"},
        {id: 6, front: "chef", back: "요리사"},
        {id: 7, front: "singer", back: "가수"},
        {id: 8, front: "actor", back: "배우"},
        {id: 9, front: "writer", back: "작가"},
        {id: 10, front: "fashion designer", back: "패션 디자이너"},
        {id: 11, front: "army man", back: "군인"},
        {id: 12, front: "police", back: "경찰"},
        {id: 13, front: "tour guide", back: "가이드"},
        {id: 14, front: "programmer", back: "프로그래머"},
            ]
}

let office_supplies_deck : Deck = {
    id: 3,
    name: "Office Supplies",
    cards: [  
        {id: 1, front: "book", back: "책"},
        {id: 2, front: "notebook", back: "공책"},
        {id: 3, front: "pencil pouch", back: "필통"},
        {id: 4, front: "pencil", back: "연필"},
        {id: 5, front: "mechanical pencil", back: "샤프"},
        {id: 6, front: "pen", back: "볼펜"},
        {id: 7, front: "eraser", back: "지우개"},
        {id: 8, front: "correction tape", back: "수정테이프"},
        {id: 9, front: "scissors", back: "가위"},
        {id: 10, front: "backpack", back: "가방"},
        {id: 11, front: "umbrella", back: "우산"},
        {id: 12, front: "calendar", back: "달력"},
        {id: 13, front: "desk", back: "책상"},
        {id: 14, front: "chair", back: "의자"},
        {id: 15, front: "clock", back: "시계"},
        {id: 16, front: "laptop", back: "노트북"},
        {id: 17, front: "television", back: "텔레비전"},
        {id: 18, front: "air conditioner", back: "에어컨"},
        {id: 19, front: "charger", back: "충전기"},
        {id: 20, front: "cell phone", back: "핸드폰"},
            ]
}

let my_decks : Collection = {
    decks: [countries_deck, occupations_deck, office_supplies_deck]
}

// let my_decks : Deck[] = [countries_deck, occupations_deck, office_supplies_deck];

export default my_decks;