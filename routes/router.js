const express=require('express');
const router = express.Router();
const rm =require('../controller/RmController.js');
router.get('/index',rm.index );
router.get('/about',rm.about );
router.get('/photos',rm.photos );
router.get('/records',rm.records );
router.get('/contacts',rm.contacts );

module.exports = router;