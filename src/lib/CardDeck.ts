import Card from './Card';

export default class CardDeck {
    deck: Card[];

    constructor() {
        this.deck = [];
        const suits: ('diams' | 'hearts' | 'clubs' | 'spades')[] = ['diams', 'hearts', 'clubs', 'spades'];
        const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        for (const suit of suits) {
            for (const rank of ranks) {
                this.deck.push(new Card(rank, suit));
            }
        }
    }

    getCard(): Card {
        const randomIndex = Math.floor(Math.random() * this.deck.length);
        return this.deck.splice(randomIndex, 1)[0];
    }

    getCards(howMany: number): Card[] {
        const drawnCards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            if (this.isEmpty()) {
                break;
            }
            drawnCards.push(this.getCard());
        }
        return drawnCards;
    }

    isEmpty(): boolean {
        return this.deck.length === 0;
    }

    getRemainingCount(): number {
        return this.deck.length;
    }
}