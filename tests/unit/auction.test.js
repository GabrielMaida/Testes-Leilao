const { createAuction, getAuctionById, placeBid, getBidsForAuction, clearAuctions } = require('../../src/auction');

describe('Auction', () => {

    beforeEach(() => {
        clearAuctions();
        jest.clearAllMocks();
    });

    it('should create an auction', () => {
        const auction = { id: 1, name: 'Leilão de arte', startingPrice: 100 };
        const createdAuction = createAuction(auction);

        expect(createdAuction[0]).toHaveProperty('id');
        expect(createdAuction[0]).toHaveProperty('name');
        expect(createdAuction[0]).toHaveProperty('startingPrice');
        expect(createdAuction).toContainEqual(auction);
    });

    it('should get an auction by id', () => {
        jest.spyOn(require('../../src/auction'), 'createAuction').mockImplementation(() => {
            auctions = [{ id: 2, name: 'Leilão 2', startingPrice: 300 }];
            return auctions;
        });

        const auction = { id: 2, name: 'Leilão 2', startingPrice: 300 };
        createAuction(auction);

        const auctionReturned = getAuctionById(2);

        expect(auctionReturned).toEqual(auction);
    });
});
