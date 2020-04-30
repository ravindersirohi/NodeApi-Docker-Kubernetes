const express = require('express');
const testData = require('../data/testdata')
const router = express.Router();

router.get('/', (req, resp, next) => {
        const data = testData.productTypes();
        resp.status(200).json(
                {
                        Products: data,
                        Total:testData.totalPrice()

                })
})

module.exports = router;