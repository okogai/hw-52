import React from 'react';

type Suit = 'diams' | 'hearts' | 'clubs' | 'spades';
type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';

interface CardProps {
    rank: Rank;
    suit: Suit;
}

const suitSymbols: Record<Suit, string> = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠'
};

const Card: React.FC<CardProps> = ({ rank, suit }) => {
    return (
        <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
          <span className="rank">{rank}</span>
          <span className="suit">{suitSymbols[suit]}</span>
        </span>
    );
};

export default Card;
