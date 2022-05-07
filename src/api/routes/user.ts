import express from "express";

const router: express.IRouter = express.Router();

// ROUTE - Get all user animes
router.get("/:userId/animes", (req, res) => {
  const { userId } = req.params;
  res.send(`User ${userId} fetching animes`);
});

// ROUTE - Get all user animes by Date
router.get("/:userId/animes/:date", (req, res) => {
  const { userId, date } = req.params;
  // Add date as query paramter
  res.send(`User ${userId} fetching animes from date ${date}`);
});

// ROUTE - Create new anime
router.post("/:userId/animes/:id", (req, res) => {
  const { userId } = req.params;
  // Add anime ID as query paramter
  res.send(`User ${userId} creating new anime`);
});

export default router;
