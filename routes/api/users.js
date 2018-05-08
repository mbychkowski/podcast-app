const router = require("express").Router();
const userController = require("../../controllers/userController")
const oktaClient = require("../../lib/oktaClient");

/* Create a new User (register). */
router.post('/', (req, res, next) => {
  if (!req.body) return res.sendStatus(400);
  const newUser = {
    profile: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      login: req.body.email
    },
    credentials: {
      password: {
        value: req.body.password
      }
    }
  };
  oktaClient.createUser(newUser)
    .then(user => {
      res.status(201);
      res.send(user);
    })
    .catch(err => {
      res.status(400);
      res.send(err);
    })
});

// Matches with "/api/user/:id"
router.route("/db")
  .post(userController.createUser)

  // .get(userController.findById)
  // .put(userController.updateUser)
  // .delete(userController.removeUser)

  // router.get('/', (req, res) => {
  //   res.json({"hello":"world"})
  // });

module.exports = router;
