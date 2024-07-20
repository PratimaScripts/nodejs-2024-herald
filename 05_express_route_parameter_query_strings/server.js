const express = require("express");
const products = require("./data/data");
const app = express();

// get sample product list, just the id, name and category information
app.get("/api/v1/products", (req, res) => {
  const sampleProducts = products.map((product) => {
    const { id, name, category } = product;
    return { id, name, category };
  });
  return res.json({ success: true, data: sampleProducts });
});

// route parameter for a specific product (dynamic routing)
app.get("/api/v1/products/:id", (req, res) => {
  const { id } = req.params;
  const singleProduct = products.find((product) => product.id === Number(id));
  if (!singleProduct) {
    return res
      .status(404)
      .json({ success: false, msg: `No product with id ${id} found` });
  }
  // while sending response, you can include the number of data returned back
  return res.status(200).json({ success: true, data: singleProduct });
});

//query string
// all products that matches the category electronics
app.get("/api/v1/search/", (req, res) => {
  const category = req.query.category;
  const limit = req.query.limit;
  console.log(`Client send a search for ${category} category`);

  let filteredProducts = [...products];

  if (category) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.category.toLowerCase().startsWith(category.toLowerCase());
    });
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, Number(limit));
  }

  //if no products found for electronics category
  if (filteredProducts.length === 0) {
    return res
      .status(404)
      .json({ success: true, msg: "No products matched your query" });
  }

  return res.status(200).json({ success: true, data: filteredProducts });
});

app.listen(4000, () => {
  console.log(`Server running in port 4000`);
});
