import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ mensagem: "API funcionando! 🚀" });
});

export default router;
