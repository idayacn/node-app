// const multer = require('multer');
const sharp = require("sharp");
const db = require("../models");
const Student = db.students;
const Product = db.products;


async function findAll(req,res){
  try {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    const user= await Student.find(condition);
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error")
  }
}

async function findUser(req,res){
  const id = req.id;
  Student.findById(id, function (err, docs) {
      if (err){
        console.log(err);
      }
      else{
        console.log("Result : ", docs);
        // res.send(docs);
        return docs;
      }
  });
}
module.exports = { findAll,findUser};

// exports.findAll = (req, res) => {


//   Student.find(condition)
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err => {
//     res.status(500).send({
//       message:
//       err.message || "Some error occurred while retrieving students."
//     });
//   });
// };





// module.exports = {findUser}
// // exports.findUser = (req,res) => {
// // async findUser (req, res) => {
// //   try {
// //       userId= req.id;
// //       const user= await Student.findById(userId);
// //       res.send(user);
// //   } catch (error) {
// //       console.error(error.message);
// //       res.status(500).send("Internal server error")
// //   }
// // }
//   // Student.findById(id)
//   // .then(data => {
//   //   if (!data)
//   //     res.status(404).send({ message: "Not found Student with id " + id });
//   //   else res.send(data);
//   // })
//   // .catch(err => {
//   //   res.status(500).send({ message: "Error retrieving Student with id=" + id });
//   // });
// // };


// exports.create = (req, res) => {

//   if (!req.query.first_name) {
//     res.status(400).send({ message: "Content can not be empty!" });
//     return;
//   }

//   const student = new Student({
//     first_name: req.query.first_name,
//     last_name: req.query.last_name,
//     email: req.query.email,
//     password: req.query.password,
//     pin_number: req.query.pin_number,
//     skills: req.query.skills.split(","),
//     phone_number: JSON.parse(req.query.phone_number),
//     medium: req.query.medium,
//     courses: req.query.courses.split(","),
//   });

//   student
//   .save(student)
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err => {
//     res.status(500).send({
//       message:
//       err.message || "Some error occurred while creating the Student."
//     });
//   });
// };

// exports.findAll = (req, res) => {
//   const title = req.query.title;
//   var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

//   Student.find(condition)
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err => {
//     res.status(500).send({
//       message:
//       err.message || "Some error occurred while retrieving students."
//     });
//   });
// };

// exports.findOne = (req, res) => {
//   const id = req.query.id;
//   // console.log(req.query);

//   Student.findById(id)
//   .then(data => {
//     if (!data)
//       res.status(404).send({ message: "Not found Student with id " + id });
//     else res.send(data);
//   })
//   .catch(err => {
//     res
//     .status(500)
//     .send({ message: "Error retrieving Student with id=" + id });
//   });
// };

// exports.update = (req, res) => {
//   console.log(req.body);
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Data to update can not be empty!"
//     });
//   }

//   const id = req.params.id;
//   Student.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//   .then(data => {
//     if (!data) {
//       res.status(404).send({
//         message: `Cannot update Student with id=${id}. Maybe Student was not found!`
//       });
//     } else res.send({ message: "Student was updated successfully." });
//   })
//   .catch(err => {
//     res.status(500).send({
//       message: "Error updating Student with id=" + id
//     });
//   });
// };

// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Student.findByIdAndRemove(id, { useFindAndModify: false })
//   .then(data => {
//     if (!data) {
//       res.status(404).send({
//         message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
//       });
//     } else {
//       res.send({
//         message: "Student was deleted successfully!"
//       });
//     }
//   })
//   .catch(err => {
//     res.status(500).send({
//       message: "Could not delete Student with id=" + id
//     });
//   });
// };

// exports.deleteAll = (req, res) => {
//   Student.deleteMany({})
//   .then(data => {
//     res.send({
//       message: `${data.deletedCount} Students were deleted successfully!`
//     });
//   })
//   .catch(err => {
//     res.status(500).send({
//       message:
//       err.message || "Some error occurred while removing all students."
//     });
//   });
// };

// exports.findAllPublished = (req, res) => {
//   Student.find({ published: true })
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err => {
//     res.status(500).send({
//       message:
//       err.message || "Some error occurred while retrieving students."
//     });
//   });
// };

// // const multerStorage = multer.diskStorage({

// //   destination: function(req, file, cb) {
// //     cb(null, './images/uploads/');
// //   },
// //   filename: function(req, file, cb) {
// //     cb(null, new Date().toISOString() + file.originalname);
// //   }
// // });

// const multerFilter = (req, file, cb) => {   
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }    
// };

// async function resizeImage(filename) {
//   try {
//     await sharp(filname)
//       .resize(400, 400, {
//         fit: sharp.fit.inside,
//         withoutEnlargement: true,
//         quality:50
//       })
//       .toFormat("jpg", { mozjpeg: true })
//       .toFile("sammy-resized-compressed.jpg");
//   } catch (error) {
//     console.log(error);
//   }
// }

// // exports.upload = multer({
// //   storage: multerStorage,
// //   fileFilter: multerFilter
// // });


// exports.uploadFile = async (req, res, next) => {

//   const product = new Product({
//     name: req.query.name,
//     price: req.query.price,
//     productImage: req.file.path 
//   });
  
//   product
//   .save()
//   .then(result => {
//     console.log(result);
//     res.status(201).json({
//       message: "Created product successfully",
//       createdProduct: {
//         name: result.name,
//         price: result.price,
//         _id: result._id,
//         request: {
//           type: 'GET',
//           url: "http://localhost:3000/products/" + result._id
//         }
//       }
//     });
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error: err
//     });
//   });
// }

