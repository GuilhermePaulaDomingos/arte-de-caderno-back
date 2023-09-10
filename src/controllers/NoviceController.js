import Novice from '../models/novice.js';

// Controlador para criar um novo registro Novice
const createNovice = async (req, res) => {
  try {
    const novice = new Novice(req.body);
    const savedNovice = await novice.save();
    res.status(201).json(savedNovice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para obter todos os registros Novice
const getAllNovices = async (req, res) => {
  try {
    const novices = await Novice.find();
    res.status(200).json(novices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obter um registro Novice por ID
const getNoviceById = async (req, res) => {
  const { id } = req.params;

  try {
    const novice = await Novice.findById(id);
    if (!novice) {
      res.status(404).json({ message: 'Novice não encontrado' });
      return;
    }
    res.status(200).json(novice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para atualizar um registro Novice por ID
const updateNoviceById = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedNovice = await Novice.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedNovice) {
      res.status(404).json({ message: 'Novice não encontrado' });
      return;
    }
    res.status(200).json(updatedNovice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para excluir um registro Novice por ID
const deleteNoviceById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedNovice = await Novice.findByIdAndRemove(id);
    if (!deletedNovice) {
      res.status(404).json({ message: 'Novice não encontrado' });
      return;
    }
    res.status(200).json({ message: 'Novice excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  createNovice,
  getAllNovices,
  getNoviceById,
  updateNoviceById,
  deleteNoviceById,
};