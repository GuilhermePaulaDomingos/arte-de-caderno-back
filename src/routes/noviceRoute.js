import express from "express";
import Novice from "../controllers/NoviceController";

const noticeRouter = express.Router();

// Rota para criar um novo Novice
noticeRouter.post("/novices", async (req, res) => {
  try {
    const { id, date_initial, date_final } = req.body;
    const novice = new Novice({ id, date_initial, date_final });
    await novice.save();
    res.status(201).json(novice);
  } catch (error) {
    res.status(400).json({ error: "Não foi possível criar um novo Novice" });
  }
});

// Rota para buscar todos os Novices
noticeRouter.get("/novices", async (req, res) => {
  try {
    const novices = await Novice.find();
    res.status(200).json(novices);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Novices" });
  }
});

// Rota para buscar um Novice pelo ID
noticeRouter.get("/novices/:id", async (req, res) => {
  try {
    const novice = await Novice.findById(req.params.id);
    if (!novice) {
      return res.status(404).json({ error: "Novice não encontrado" });
    }
    res.status(200).json(novice);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Novice" });
  }
});

// Rota para atualizar um Novice pelo ID
noticeRouter.put("/novices/:id", async (req, res) => {
  try {
    const { id, date_initial, date_final } = req.body;
    const novice = await Novice.findByIdAndUpdate(
      req.params.id,
      { id, date_initial, date_final },
      { new: true }
    );
    if (!novice) {
      return res.status(404).json({ error: "Novice não encontrado" });
    }
    res.status(200).json(novice);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar Novice" });
  }
});

// Rota para deletar um Novice pelo ID
noticeRouter.delete("/novices/:id", async (req, res) => {
  try {
    const novice = await Novice.findByIdAndDelete(req.params.id);
    if (!novice) {
      return res.status(404).json({ error: "Novice não encontrado" });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar Novice" });
  }
});

export default noticeRouter;