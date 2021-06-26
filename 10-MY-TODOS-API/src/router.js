const { Router} = require("express");
const { index, create,findById , updateById, deleteById} = require("./controllers/todos");
const router = Router();

router.route('/api/v1/todos').get(index);
router.route('/api/v1/todos/:id').get(findById);
router.route('/api/v1/todos/:id').put(updateById);
router.route('/api/v1/todos/:id').delete(deleteById);
router.route('/api/v1/todos').post(create);
module.exports = router;