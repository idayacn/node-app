const stripe = require('stripe')(process.env.STRIPE_KEY);
const StudentController = require("../controllers/student.controller.js");

async function findAll(req,res){
  try {
    const customers = await stripe.customers.list({
      limit: 3,
    });    
    res.send(customers);
  } catch (err) {
    console.error(err)
  } 
  finally {    
    console.log("customers info retrieved successfully");
  }  
}

async function subscription(req,res){
  try {
    const customers = await stripe.customers.list({
      limit: 3,
    });    
    res.send(customers);
  } catch (err) {
    console.error(err)
  } 
  finally {    
    console.log("customers info retrieved successfully");
  }  
}
async function createPayment(req,res){  
  try {
    const studentData = StudentController.findUser({ id: req.query.id });
    if(studentData){
      const paymentMethod = await stripe.paymentMethods.create({
        type: 'card',
        card: {
          number: '4242424242424242',
          exp_month: 7,
          exp_year: 2028,
          cvc: '314',
        },
      }); 

      res.send(paymentMethod);
    }    
    // console.log(paymentMethod);
    
  } catch (err) {
    console.error(err)
  } 
  finally {
    // console.log(paymentMethod);
  }  
}

// async function createCustomer(req,res){

//   try {
//     const customer = await stripe.customers.create({
//       description: 'My First Test Customer (created for API docs at https://www.stripe.com/docs/api)',
//     });  
//     customer = await stripe.customers.retrieve(
//       'cus_M0QCQ3SrMRIbO0'
//     );
//     res.send(customer);
//   } catch (err) {
//     console.error(err)
//   } 
//   finally {
//   }  
// }

module.exports = { findAll,createPayment };

// $paymentMethod = $this->createPaymentMethod($requestData);
// $user = $this->createCustomer($requestData,$paymentMethod->id);
// $setupIntent = $this->createSetupIntent($user->id);
// $confirm = $this->confirmSetupIntent($setupIntent->id,$paymentMethod->id);
// $subscription = $this->createSubscription($user->id,$paymentMethod->id,$requestData,$promotion);
