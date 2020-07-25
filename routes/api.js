const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/api/transaction", async ({ body }, res) => {
  try {
    const dbTransaction = await Transaction.create(body)
    res.json(dbTransaction);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/api/transaction/bulk", async ({ body }, res) => {
  try {
    const dbTransaction = await Transaction.insertMany(body)
    res.json(dbTransaction);
  } catch (err) {
    res.status(400).json(err);
  };
});

router.get("/api/transaction", async (req, res) => {
  try {
    const dbTransaction = await Transaction.find({}).sort({ date: -1 })
    res.json(dbTransaction);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;