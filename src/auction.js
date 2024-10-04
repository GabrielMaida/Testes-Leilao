let auctions = [];
let bids = [];

function createAuction(auction) {
    auctions.push(auction);
    return auctions;
}

function getAuctionById(id) {
    return auctions.find(auction => auction.id === id);
}

function clearAuctions(){
    auctions = [];
    return auctions;
}

function getBidsForAuction(auctionId) {
    return bids.filter(bid => bid.auctionId === auctionId);
}


function placeBid(auctionId, userId, amount) {
    const auction = getAuctionById(auctionId);
    if (!auction) {
        throw new Error('Leilão não encontrado.');
    }

    if (amount <= auction.startingPrice) {
        throw new Error('O valor do lance deve ser maior do que o preço inicial.');
    }

    bids.push({ auctionId, userId, amount });
    return bids;
}

module.exports = {
    createAuction,
    getAuctionById,
    placeBid,
    getBidsForAuction,
    clearAuctions
};