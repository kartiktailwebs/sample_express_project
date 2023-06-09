import express from 'express'
import indexCnt from '../controllers/index/indexController.js'
const router = express.Router()

/* GET home page. */
router.get('/', indexCnt)

export default router
