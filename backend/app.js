// import fs from "node:fs/promises";
// import bodyParser from "body-parser";
// import express from "express";
// import path from "path";

// const app = express();
// const __dirname = path.resolve();

// app.use(bodyParser.json());
// app.use(express.static("public"));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

// // ---------------- Fashion -------------
// app.get("/fits", async (req, res) => {
//   try {
//     const fits = await fs.readFile(path.join(__dirname, "data/available-fashion.json"), "utf8");
//     res.json(JSON.parse(fits));
//   } catch (error) {
//     console.error("Error reading fashion data:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // ---------------- Gadgets -------------
// app.get("/gadgets", async (req, res) => {
//   try {
//     const gadgets = await fs.readFile(path.join(__dirname, "data/available-gadget.json"), "utf8");
//     res.json(JSON.parse(gadgets));
//   } catch (error) {
//     console.error("Error reading gadgets data:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // ---------------- Unique Gadget & Fashion -------------
// app.get("/uniqueItem", async (req, res) => {
//   try {
//     const uniqueItem = await fs.readFile(path.join(__dirname, "data/available-unique-items.json"), "utf8");
//     res.json(JSON.parse(uniqueItem));
//   } catch (error) {
//     console.error("Error reading unique items data:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // ---------------- Orders -------------
// app.post("/orders", async (req, res) => {
//   const orderData = req.body.order;

//   if (!orderData || !orderData.items || orderData.items.length === 0) {
//     return res.status(400).json({ message: "Missing data." });
//   }

//   if (
//     !orderData.customer.email.includes("@") ||
//     !orderData.customer.name.trim() ||
//     !orderData.customer.street.trim() ||
//     !orderData.customer["postal-code"].trim() ||
//     !orderData.customer.city.trim()
//   ) {
//     return res.status(400).json({
//       message: "Missing data: Email, name, street, postal code or city is missing.",
//     });
//   }

//   const newOrder = {
//     ...orderData,
//     id: (Math.random() * 1000).toString(),
//   };
//   try {
//     const orders = await fs.readFile(path.join(__dirname, "data/orders.json"), "utf8");
//     const allOrders = JSON.parse(orders);
//     allOrders.push(newOrder);
//     await fs.writeFile(path.join(__dirname, "data/orders.json"), JSON.stringify(allOrders));
//     res.status(201).json({ message: "Order created!" });
//   } catch (error) {
//     console.error("Error handling order data:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// app.use((req, res) => {
//   if (req.method === "OPTIONS") {
//     return res.sendStatus(200);
//   }

//   res.status(404).json({ message: "Not found" });
// });

// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




import fs from "node:fs/promises";

import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
// app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// ---------------- Fashion-------------

app.get("/fits", async (req, res) => {
  const fits = await fs.readFile("./data/available-fashion.json", "utf8");
  res.json(JSON.parse(fits));
});

// ---------------- Fashion-------------

// ---------------- Gadgets-------------
app.get("/gadgets", async (req, res) => {
  const gadgets = await fs.readFile("./data/available-gadget.json", "utf8");
  res.json(JSON.parse(gadgets));
});
//  ---------------- Gadgets-------------

// ---------------- Unique Gadget & Fashion-------------
app.get("/uniqueItem", async (req, res) => {
  const uniqueItem = await fs.readFile(
    "./data/available-unique-items.json",
    "utf8"
  );
  res.json(JSON.parse(uniqueItem));
});
//  ---------------- Unique Gadget & Fashion-------------

app.post("/orders", async (req, res) => {
  const orderData = req.body.order;

  if (
    orderData === null ||
    orderData.items === null ||
    orderData.items === []
  ) {
    return res.status(400).json({ message: "Missing data." });
  }

  if (
    orderData.customer.email === null ||
    !orderData.customer.email.includes("@") ||
    orderData.customer.name === null ||
    orderData.customer.name.trim() === "" ||
    orderData.customer.street === null ||
    orderData.customer.street.trim() === "" ||
    orderData.customer["postal-code"] === null ||
    orderData.customer["postal-code"].trim() === "" ||
    orderData.customer.city === null ||
    orderData.customer.city.trim() === ""
  ) {
    return res.status(400).json({
      message:
        "Missing data: Email, name, street, postal code or city is missing.",
    });
  }

  const newOrder = {
    ...orderData,
    id: (Math.random() * 1000).toString(),
  };
  const orders = await fs.readFile("./data/orders.json", "utf8");
  const allOrders = JSON.parse(orders);
  allOrders.push(newOrder);
  await fs.writeFile("./data/orders.json", JSON.stringify(allOrders));
  res.status(201).json({ message: "Order created!" });
});

app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: "Not found" });
});

// app.listen(3000);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// import fs from "node:fs/promises";
// import bodyParser from "body-parser";
// import express from "express";
// import path from "path";

// const app = express();
// const __dirname = path.resolve();

// app.use(bodyParser.json());
// app.use(express.static("public"));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "https://earls-shopsphere.vercel.app/");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

// app.options("*", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "https://earls-shopsphere.vercel.app/");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   res.send();
// });

// // ---------------- Fashion -------------
// app.get("/fits", async (req, res) => {
//   try {
//     const fits = await fs.readFile(path.join(__dirname, "data/available-fashion.json"), "utf8");
//     res.json(JSON.parse(fits));
//   } catch (error) {
//     console.error("Error reading fashion data:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // ---------------- Gadgets -------------
// app.get("/gadgets", async (req, res) => {
//   try {
//     const gadgets = await fs.readFile(path.join(__dirname, "data/available-gadget.json"), "utf8");
//     res.json(JSON.parse(gadgets));
//   } catch (error) {
//     console.error("Error reading gadgets data:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // ---------------- Unique Gadget & Fashion -------------
// app.get("/uniqueItem", async (req, res) => {
//   try {
//     const uniqueItem = await fs.readFile(path.join(__dirname, "data/available-unique-items.json"), "utf8");
//     res.json(JSON.parse(uniqueItem));
//   } catch (error) {
//     console.error("Error reading unique items data:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // ---------------- Orders -------------
// app.post("/orders", async (req, res) => {
//   const orderData = req.body.order;

//   if (!orderData || !orderData.items || orderData.items.length === 0) {
//     return res.status(400).json({ message: "Missing data." });
//   }

//   if (
//     !orderData.customer.email.includes("@") ||
//     !orderData.customer.name.trim() ||
//     !orderData.customer.street.trim() ||
//     !orderData.customer["postal-code"].trim() ||
//     !orderData.customer.city.trim()
//   ) {
//     return res.status(400).json({
//       message: "Missing data: Email, name, street, postal code or city is missing.",
//     });
//   }

//   const newOrder = {
//     ...orderData,
//     id: (Math.random() * 1000).toString(),
//   };
//   try {
//     const orders = await fs.readFile(path.join(__dirname, "data/orders.json"), "utf8");
//     const allOrders = JSON.parse(orders);
//     allOrders.push(newOrder);
//     await fs.writeFile(path.join(__dirname, "data/orders.json"), JSON.stringify(allOrders));
//     res.status(201).json({ message: "Order created!" });
//   } catch (error) {
//     console.error("Error handling order data:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// app.use((req, res) => {
//   if (req.method === "OPTIONS") {
//     return res.sendStatus(200);
//   }

//   res.status(404).json({ message: "Not found" });
// });

// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });