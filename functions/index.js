const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JbnQUFHT7uPJt4y0kZWUlFFAlUyKHyKzngjtKrsgCQdc9cYzRhEg5kxx0TATQkDWEBbTY6e6itkdO7N4Oi0xM3R00NovDQQig"
);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({ ClientSecret: paymentIntent.client_secret });
});

exports.api = functions.https.onRequest(app);
