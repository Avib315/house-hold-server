const express = require('express');
const router = express.Router();
const userItemService = require('../BL/userItems.service.js')
router.post('/get-items', async (req, res) => {
    try {
        const categoryId = req.body.categoryId || null;
        const itemsId = req.body.itemsId || null;
        const itemName = req.body.itemName || null;
        const items = await userItemService.getUserItems(req.body.userId, categoryId, itemsId, itemName);
        res.send(items)
    } catch (err) {
        console.error(err);
    }
});
router.post('/add-item', async (req, res) => {
    try {
        const items = await userItemService.addToUserItem(req.body.userId, req.body.item);
        res.send(items)
    } catch (err) {
        console.error(err); 
    }
});

module.exports = router;