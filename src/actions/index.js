export function createDeck (deck) {
    return {
        type: 'DECK_CREATED',
        payload: deck
    };
}