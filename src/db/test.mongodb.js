use("CrudDB");
console.log(db);
db.createCollection("test");
db.test.insertOne({
  name: "sanskar",
  email: "sanskar@gamil.com",
  password: "abcd",
});
