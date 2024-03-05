import express from 'express';
import { auth } from "../middlewares/auth";
import { getUserAddresses, addAddressToUser } from "../controller/delveryServices";

const router = express.Router();

router.get('/:userId/address', getUserAddresses);
router.post('/:userId/add-address', addAddressToUser);

export default router;