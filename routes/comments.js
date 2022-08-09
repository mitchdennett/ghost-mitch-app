var express = require('express');
var router = express.Router();
const comments = require('../services/comments');


/* GET users listing. */
router.get('/', function(req, res, next) {
  try {
    res.json(comments.all());
  } catch(err) {
    console.error(`Error while getting comments `, err.message);
    next(err);
  }
});

router.post('/', function(req, res, next) {
  try {
    const comment = req.body.comment
    console.log(req.body);
    res.json(comments.create(comment));
  } catch(err) {
    console.error(`Error while saving comments `, err.message);
    next(err);
  }
});

module.exports = router;
