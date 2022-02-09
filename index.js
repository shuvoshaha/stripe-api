const express = require("express");
const cors = require("cors")
const stripePayment  = require("stripe")("sk_test_51KQrpHAa5Sa6DckacUrIpbOBLaSsZYSOZ0Ptv5QFfqfJsaQ4S2eirePIH4xMRb0lS2mLrSfdaPCdMRL10exDBMm7007aTjrMsL")


// init app
const app = express();
const port = 3000;

// ejs
// app.set("view engine", "ejs");
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())


app.post("/payment", async (req, res) =>{
    console.log("body",req.body)
    try{

        // const paymentMethod = await stripe.paymentMethods.retrieve(
        //     'pm_1KNPtU2eZvKYlo2CU8lSLtkE'
        //   );


    //   const res =   await stripePayment.paymentIntents.create({

    //         amount: 100,
    //         currency: "usd",
    //         payment_method_types: ['card'],
    //         confirm: true, 
    //         // customer: "",
    //         // payment_method: "pm_1KRCBeAa5Sa6DckaiExHsidC"
    //   })

      res.status(200).json({ name: "Shuvo" })

    } catch(err){
      res.status(500).json({ message: err.message })

    }
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});