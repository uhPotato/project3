const router = require("express").Router();
const messesController = require("../../controllers/messesController");

// Matches with "/api/messes"
router.route("/")
  .get(messesController.findAll)
  .post(messesController.create);

// Matches with "/api/messes/:id"
router
  .route("/:id")
  .get(messesController.findById)
  .put(messesController.update)
  .delete(messesController.remove);

module.exports = router;