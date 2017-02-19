var express = require('express');
var router = express.Router();

const memoController = require('../controller/memo_controller');

/* TODOs */
router.get('/memo', memoController.get_all_memos);
router.post('/memo', memoController.create_memos);
router.delete('/memo', memoController.delete_memos);
router.put('/memo', memoController.update_memos);

module.exports = router;
