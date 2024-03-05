import express, { Request, Response } from 'express';
import { ongoingAuctions, artworkDetails, artworkBids, creatingBids } from '../controller/wishlist'
import { auth } from '../middlewares/auth';


const router = express.Router();

router.get('/ongoing-auctions', ongoingAuctions);
router.get('/list-bids/:id', artworkBids); 
router.get('/:id', artworkDetails);
router.post('/create-bids/:auctionId' ,auth, creatingBids); 



export default router;