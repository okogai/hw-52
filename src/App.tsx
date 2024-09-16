import React, { useState } from 'react';
import Card from './components/Card';
import CardDeck from './lib/CardDeck';
import PokerHand from './lib/PokerHand';
import './App.css';

const App: React.FC = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [deck, setDeck] = useState<CardDeck>(new CardDeck());
    const [remainingCards, setRemainingCards] = useState<number>(52);
    const [handOutcome, setHandOutcome] = useState<string>('');

    const dealCards = () => {
        if (deck.isEmpty()) {
            const newDeck = new CardDeck();
            setDeck(newDeck);
            setRemainingCards(newDeck.getRemainingCount());
        }

        const newCards = deck.getCards(5);
        setCards(newCards);
        setRemainingCards(deck.getRemainingCount());

        const pokerHand = new PokerHand(newCards);
        setHandOutcome(pokerHand.getOutcome());
    };

    return (
        <div>
            <button onClick={dealCards}>Deal cards</button>
            <div>Cards remaining: {remainingCards}</div>
            {cards.length > 0 && (
                <div className="playingCards faceImages">
                    {cards.map((card, index) => (
                        <Card key={index} rank={card.rank} suit={card.suit}/>
                    ))}
                    <div>
                        <strong>Hand: {handOutcome}</strong>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
