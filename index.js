const fs = require("fs");
const crypto = require("crypto");

const data = JSON.parse(fs.readFileSync("./assets/car.json", "utf-8"));

const priceList = [2999.95, 8499.0, 12295.0, 19500, 22345.25, 32000.0];

const result = data.map((x) => ({
  id: crypto.randomUUID(),
  SalePrice: priceList[Math.floor(Math.random() * priceList.length)],
  ...x,
}));

const output = {
  car: result,
};

fs.writeFileSync("./db.json", JSON.stringify(output));
