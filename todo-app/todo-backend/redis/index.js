const redis = require("redis");
const { REDIS_URL } = require("../util/config");
const { Todo } = require("../mongo");

const fn = {
  get: () => console.log("no redis client"),
  set: () => console.log("no redis client"),
};

const initCache = (client) => {
  Todo.find({}).then((todos) => {
    client.set("added_todos", todos.length);
  });
};

(async () => {
  if (!REDIS_URL) return;

  const client = await redis
    .createClient({
      url: REDIS_URL,
    })
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();

  fn.get = client.get.bind(client);
  fn.set = client.set.bind(client);

  initCache(client);
})();

module.exports = fn;
