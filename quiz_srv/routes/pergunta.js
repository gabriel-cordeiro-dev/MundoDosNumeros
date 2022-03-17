const router = require("express").Router();
const Pergunta = require("../models/Pergunta");

router.get("/", (req, res) => {
  Pergunta.findAll()

    .then((pergunta) => {
      if (pergunta) {
        console.log("pergunta", pergunta);
        res.json(pergunta);
      } else {
        console.log("Questões não encontradas");
        return res.status(400).json({
          err: "Questões não econtradas",
        });
      }
    })
    .catch((err) => {
      console.log("Erro", err);
      return res.json({ err: err });
    });
});

router.post("/", (req, res) => {
  Pergunta.create({
    pergunta: req.body.pergunta,
    resposta: req.body.resposta,
    alternativa_um: req.body.alternativa_um,
    alternativa_dois: req.body.alternativa_dois,
    alternativa_tres: req.body.alternativa_tres,
  })
    .then((pergunta) => {
      return res.json({
        data: pergunta,
      });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({
        err: err,
      });
    });
});

module.exports = router;
