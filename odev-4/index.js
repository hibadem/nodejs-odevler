const fs = require("fs");

//Create
fs.writeFile(
  "employee.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  (err, data) => {
    if (err) console.log(err);
    console.log("Json dosyası oluşturuldu. Çalışan bilgileri girildi.");
  }
);

// Read
fs.readFile("employee.json", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

// Update
fs.readFile("employee.json", "utf8", (err, data) => {
  let json = JSON.parse(data);
  json = '{"name":"Employee 1 Name","salary":4000}';
  fs.writeFile("employee.json", json, (err) => {
    if (err) console.log(err);
    console.log("Çalışan maaşı güncellendi");
  });
});

// Delete
fs.unlink("employee.json", (err) => {
  if (err) console.log(err);
  console.log("Json dosyası silindi.");
});
