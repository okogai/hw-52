import Card from './Card';

class PokerHand {
    hand: Card[];

    constructor(hand: Card[]) {
        this.hand = hand;
    }

    sortCards() {
        const rankOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        return this.hand.sort((a, b) => rankOrder.indexOf(a.rank) - rankOrder.indexOf(b.rank));
    }

    isStraight(): boolean {
        const sortedRanks = this.sortCards().map(card => card.rank);
        const rankOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const startIndex = rankOrder.indexOf(sortedRanks[0]);
        for (let i = 0; i < 5; i++) {
            if (rankOrder[startIndex + i] !== sortedRanks[i]) return false;
        }
        return true;
    }

    isFlush(): boolean {
        for (let i = 1; i < this.hand.length; i++) {
            if (this.hand[i].suit !== this.hand[0].suit || this.hand.length < 5) {
                return false;
            }
        }
        return true;
    }

    countRanks(): { [key: string]: number } {
        const rankCounts: { [key: string]: number } = {};
        for (const card of this.hand) {
            if (!rankCounts[card.rank]) {
                rankCounts[card.rank] = 1;
            } else {
                rankCounts[card.rank] += 1;
            }
        }
        return rankCounts;
    }

    getOutcome(): string {
        const isFlush = this.isFlush();
        const isStraight = this.isStraight();
        const rankCounts = this.countRanks();
        const counts = Object.values(rankCounts).sort((a, b) => b - a);

        if (isFlush && isStraight) {
            return this.hand[0].rank === '10' ? 'Royal Flush' : 'Straight Flush';
        }
        if (counts[0] === 4) {
            return 'Four of a Kind';
        }
        if (counts[0] === 3 && counts[1] === 2) {
            return 'Full House';
        }
        if (isFlush) {
            return 'Flush';
        }
        if (isStraight) {
            return 'Straight';
        }
        if (counts[0] === 3) {
            return 'Three of a Kind';
        }
        if (counts[0] === 2 && counts[1] === 2) {
            return 'Two Pairs';
        }
        if (counts[0] === 2) {
            return 'One Pair';
        }
        return 'High Card' ;
    }
}

export default PokerHand;