const express = require('express'),
    router = express.Router();
const categoriesService = require('../BL/categories.service.js')
router.get('/get-categories', async (req, res) => {
    try {
        console.log("------------------- ROUTER IN  ----------------------");
        const result = await categoriesService.getCategories()
        console.log(result);
        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.msg || err.message || "wrong")
    }

})

module.exports = router;