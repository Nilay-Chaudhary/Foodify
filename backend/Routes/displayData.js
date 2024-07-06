const express = require('express');
const router = express.Router();

router.post("/fooddata", (req, res) => {
    try {
        if(global.food_items != null && global.foodCategory != null) res.send([global.food_items, global.foodCategory])
        else res.send([]);
    } catch (error) {
        console.error("Error fetching data: " + error);
        res.status(500).send("Server error")
    }
})

module.exports = router;