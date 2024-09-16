import React, { useState } from 'react';
import Card from './components/Card';
import CardDeck from './lib/CardDeck';
import './App.css';

const App: React.FC = () => {
    // Состояния для текущих карт и текущей колоды
    const [cards, setCards] = useState<Card[]>([]);
    const [deck, setDeck] = useState<CardDeck>(new CardDeck());
    const [remainingCards, setRemainingCards] = useState<number>(52);

    const dealCards = () => {
        if (deck.isEmpty()) {
            const newDeck = new CardDeck();
            setDeck(newDeck);
            setRemainingCards(newDeck.getRemainingCount());
        }

        const newCards = deck.getCards(5);
        setCards(newCards);
        setRemainingCards(deck.getRemainingCount());
    };

    return (
        <div>
            <button onClick={dealCards}>Раздать карты</button>
            <div>Осталось карт: {remainingCards}</div>
            {cards.length > 0 && (
                <div className="playingCards faceImages">
                    {cards.map((card, index) => (
                        <Card key={index} rank={card.rank} suit={card.suit} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;
