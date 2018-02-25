const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (request, response) => {
  response.send('api works');
});

module.exports = router;