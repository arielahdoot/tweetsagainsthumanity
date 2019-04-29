const router = require('express').Router();
const { blackCard } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const nextQ = await blackCard.findOne({
      where: {
        used: false
      }
    });
    console.log(nextQ);
    res.json(nextQ);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    await blackCard.update(
      {
        used: true
      },
      {
        where: { id }
      }
    );
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});
