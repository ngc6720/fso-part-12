const express = require("express");
const { Todo } = require("../mongo");
const router = express.Router();
const redis = require("../redis");

/* GET todos listing. */
router.get("/", async (_, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

/* POST todo to listing. */
router.post("/", async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  });
  const count = +(await redis.get("added_todos")) || 0;
  await redis.set("added_todos", count + 1);
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  req.todo = await Todo.findById(id);
  if (!req.todo) return res.sendStatus(404);

  next();
};

/* DELETE todo. */
singleRouter.delete("/", async (req, res) => {
  if (req.todo) await Todo.deleteOne(req.todo);
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get("/", async (req, res) => {
  if (req.todo) res.send(req.todo);
  else res.sendStatus(400);
});

/* PUT todo. */
singleRouter.put("/", async (req, res) => {
  if (req.todo && req.body) {
    const updated = await Todo.findByIdAndUpdate(req.todo.id, req.body, {
      new: true,
      runValidators: true,
      context: "query",
    });
    res.send(updated);
  } else {
    res.sendStatus(400);
  }
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
