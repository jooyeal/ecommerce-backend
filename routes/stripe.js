const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51JacFCC36kIWegtxmXC0TpUm7UKC8BjnK0mKOToTcu4tQ53EwZz41EoSc5jqkgBTR7dU04uMc4kwObT9hkK8hoxt00Y5JHGD3m"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "JPY",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
