const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
// const { resolve } = require('path');
// require('dotenv').config({ path: './.env' });

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

// Ensure environment variables are set.
// checkEnv();

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: '2020-08-27',
//   appInfo: { 
//     name: "stripe-samples/accept-a-payment/prebuilt-checkout-page",
//     version: "0.0.1",
//     url: "https://www.manmiya.art"
//   }
// });

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

server.applyMiddleware({ app });

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(express.urlencoded({ extended: false }));
// app.use(
//   express.json(
    // We need the raw body to verify webhook signatures.
    // Let's compute it only when hitting the Stripe webhook endpoint.
//     verify, function (req, res, buf) {
//       if (req.originalUrl.startsWith('/webhook')) {
//         req.rawBody = buf.toString();
//       }
//     },
// ));

// app.get('/', (req, res) => {
//   const path = resolve(process.env.STATIC_DIR + '/index.html');
//   res.sendFile(path);
// });

// Fetch the Checkout Session to display the JSON result on the success page
// app.get('/checkout-session', async (req, res) => {
//   const { sessionId } = req.query;
//   const session = await stripe.checkout.sessions.retrieve(sessionId);
//   res.send(session);
// });

// app.post('/create-checkout-session', async (req, res) => {
//   const domainURL = process.env.DOMAIN;

    // Create new Checkout Session for the order
  // Other optional params include:
  // For full details see https://stripe.com/docs/api/checkout/sessions/create
  // const session = await stripe.checkout.sessions.create({
  //   mode: 'payment',
  //   line_items: [{
  //     price: process.env.PRICE,
  //     quantity: 1,
  //   }],
    // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
    // success_url: `${domainURL}/success.html?session_id={CHECKOUT_SESSION_ID}`,
    // cancel_url: `${domainURL}/canceled.html`,
    // automatic_tax: { enabled: true }
//   });

//   return res.redirect(303, session.url);
// });

// Webhook handler for asynchronous events.
// app.post('/webhook', async (req, res) => {
//   let event;

  // Check if webhook signing is configured.
  // if (process.env.STRIPE_WEBHOOK_SECRET) {
    // Retrieve the event by verifying the signature using the raw body and secret.
  //   let signature = req.headers['stripe-signature'];

  //   try {
  //     event = stripe.webhooks.constructEvent(
  //       req.rawBody,
  //       signature,
  //       process.env.STRIPE_WEBHOOK_SECRET
  //     );
  //   } catch (err) {
  //     console.log(`⚠️  Webhook signature verification failed.`);
  //     return res.sendStatus(400);
  //   }
  // } else {
    // Webhook signing is recommended, but if the secret is not configured in `.env`,
    // retrieve the event data directly from the request body.
  //   event = req.body;
  // }

  // if (event.type === 'checkout.session.completed') {
  //   console.log(`🔔  Payment received!`);

    // Note: If you need access to the line items, for instance to
    // automate fullfillment based on the the ID of the Price, you'll
    // need to refetch the Checkout Session here, and expand the line items:
    //
//     const session = await stripe.checkout.sessions.retrieve(
//       'cs_test_KdjLtDPfAjT1gq374DMZ3rHmZ9OoSlGRhyz8yTypH76KpN4JXkQpD2G0',
//       {
//         expand: ['line_items'],
//       }
//     );
    
//     const lineItems = session.line_items;
//   }

//   res.sendStatus(200);
// });

// app.listen(PORT, () => console.log(`Node server listening on port ${PORT}!`));


// function checkEnv() {
//   const price = process.env.PRICE;
//   if(price === "price_12345" || !price) {
//     console.log("You must set a Price ID in the environment variables. Please see the README.");
//     process.exit(0);
//   }
// }

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
