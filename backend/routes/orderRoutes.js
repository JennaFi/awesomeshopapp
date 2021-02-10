import express from 'express'

const router = express.Router()
import {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    getMyOrders,
    getOrders,
    updateOrderToDelivered
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById) //always need to be at the end
router.route('/:id/pay').put(protect, updateOrderToPaid) //always need to be at the end
router.route('/:id/deliver').put(protect, updateOrderToDelivered) //always need to be at the end 

    
    


export default router