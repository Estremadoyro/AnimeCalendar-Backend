import express from "express";

const router: express.IRouter = express.Router();

router.get("/animes", (_req, res) => {
  res.send("Fetching animes");
});

router.get("/animes/:search", (req, res) => {
  const { search } = req.params;

  res.send(`Searching anime: ${search}`);
});

export default router;
