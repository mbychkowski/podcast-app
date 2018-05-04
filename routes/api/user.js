const router =  require("express").Router();
const userController = "../../controllers/userController.js"

// Matches with "/api/user/:id"
router
    .route("/:id")
    .get(userController.findById)
    .put(userController.updateUser)
    .delete(userController.removeUser)
    .post(userController.createUser)
