const express = require('express');
const router = express.Router();
const PaymentController = require("../controllers/payment.controller.js");
    
    router.get("/", PaymentController.findAll);    
    // router.get("/:id", PaymentController.findOne);
    // router.put("/:id", PaymentController.update);
    // router.delete("/:id", PaymentController.delete);
    // router.delete("/", PaymentController.deleteAll);
    router.post("/", PaymentController.createPayment);

module.exports = router;