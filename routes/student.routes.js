const express = require('express');
const router = express.Router();
const StudentController = require("../controllers/student.controller.js");
    
    router.get("/", StudentController.findAll);    
    // router.get("/:id", StudentController.findOne);
    // router.get("/published", StudentController.findAllPublished);

    // router.put("/:id", StudentController.update);

    // router.delete("/:id", StudentController.delete);
    // router.delete("/", StudentController.deleteAll);

    // router.post("/create", StudentController.create);
    // router.post("/uploads", StudentController.upload.single('productImage'),StudentController.uploadFile);

module.exports = router;