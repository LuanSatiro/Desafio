const { Router } = require('express');
const { Users } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
    const users = await Users.findAll();
    res.status(200).json(users);
   
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const users = await Users.findByPk(id);
    res.status(200).json(users);
});

router.post('/create', async (req, res) => {
    const { name, email} = req.body;
    const users = await Users.findAll();
    try{
        const newUser = await Users.create({ name, email });
        res.status(200).json({ message: 'cadastrado com sucesso' });
    } catch (error) {
       if (error.parent.code === 'ER_DUP_ENTRY') {
            res.sendStatus(500);
       }
    }
  });

router.delete('/delete/:id', async (req, res) => {
    await Users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: 'excluido com sucesso' });
  });

router.put('/put/:id', async (req, res) => {
    const { name, email } = req.body;
    try{
        await Users.update(
        { name, email },
        {
            where: { id: req.params.id },
        }
        );
        res.status(200).json({ message: 'atualizado com sucesso' });
        }catch (error) {
            if (error.parent.code === 'ER_DUP_ENTRY') {
                 res.sendStatus(500);
            }
         }
    });
    

module.exports = router;
