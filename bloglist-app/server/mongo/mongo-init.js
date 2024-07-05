/* eslint-disable */

db.createUser({
  user: "the_username",
  pwd: "the_password",
  roles: [
    {
      role: "dbOwner",
      db: "the_database",
    },
  ],
});

db.createCollection("users");
db.createCollection("blogs");
db.createCollection("comments");

db.blogs.insert({
  title: "a beautiful title",
  author: "a beautiful author",
  url: "www a beautiful website",
  likes: 2,
});

db.blogs.insert({
  title: "hihiihih",
  author: "hahahah",
  url: "www a beautiful website",
  likes: 8,
});
