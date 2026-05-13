const userModel = require('../models/userModel');

const createuser = (req, res) => {
    // Aqui, dados de usuário seriam processados e salvos
    const newUser = req.body; // simula salvar os dados
    res.send('Usuário ${newUser.nam} criado com sucesso!');
};

Meodule.exports = { createUser };
