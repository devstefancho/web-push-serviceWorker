const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Set Static path
app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json());

const publicVapidKey =
  "BHNKTW5TJsHyhDKdQhU5nsitaAijzwrtINPipr6ck_NbosrB--yVbPKDg8G_gnICmLcwLBjUKpjf6ev5vsZO1XM";
const privateVapidKey = "Kopp9V2pxiH39u6QHfXHhv8hcj5XhNlRDIYRZelZQuk";

webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);

app.post("/subscribe", (req, res) => {
  //Get pushSubscription object
  const subscription = req.body;

  //Sen 201 - resource created
  res.status(201).json({});

  //Create payload
  const payload = JSON.stringify({ title: "Push test" });

  // Pass Object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch((err) => console.error(err));
});

const port = 5000;
app.listen(port, () => {
  console.log(`server is running on Port ${port}`);
});
