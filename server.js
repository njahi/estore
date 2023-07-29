const express = require("express");
const debug = require("debug")("server");
const app = express();
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "POST, GET, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
  })
);

// Add a new product
app.post("/api/product", async (req, res) => {
  const { name, imageUrl, price } = req.body;

  try {
    const product = await prisma.product.create({
      data: {
        name: name,
        imageUrl: imageUrl,
        price: price,
      },
    });
    debug("AddedProduct:", product);

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/product/:id", async (req, res) => {
  const productId = parseInt(req.params.id);

  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(3005, () => {
  console.log("Server is running on port 3005");
});
