const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

const Product = require("./models/product");
const User = require("./models/user");
const Category = require("./models/category");
const router = express.Router();

//---------------------------------------------------------------
// Api for Products

// Get all products
router.get("/products", async (req, res) => {
  console.log(req);
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one product
router.get("/products/:id", async (req, res) => {
  console.log(req);
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create one product
router.post("/products", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    discount: req.body.discount,
    brand: req.body.brand,
    status: req.body.status,
    category: req.body.category,
    image: req.body.image,
    description: req.body.description,
  });
  console.log("data store");

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one product
router.put("/products/:id", async (req, res) => {
  console.log(req);
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete one product
router.delete("/products/:id", async (req, res) => {
  console.log(req);
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// router.patch('/products/:id', async (req, res) => {
//   if (req.body.name != null) {
//     res.product.name = req.body.name;
//   }

//   if (req.body.price != null) {
//     res.product.price = req.body.price;
//   }

//   if (req.body.category != null) {
//     res.product.category = req.body.category;
//   }

//   if (req.body.description != null) {
//     res.product.description = req.body.description;
//   }

//   try {
//     const updatedProduct = await res.product.save();
//     res.json(updatedProduct);
//   } catch (err) {
//     res.status(400).json({ message: err.message});
//   }
// });

//---------------------------------------------------------------
// Api for Users

// Register User

//----- Add User with Password Encrypted ------\\

// router.post("/users", async (req, res) => {
//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.email,
//   });
//   console.log("User Added");
//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

//---- Add User with Password Encrypted ----\\

router.post("/users", async (req, res) => {
  const { name, number, email, password } = req.body;

  try {
    // // check if user already exists in the database
    // const existingUser = await User.findOne({ email });
    // if (existingUser) {
    //   return res.status(400).json({ message: "User already exists" });
    // }

    // generate a salt and hash the password
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      number,
      email,
      password: hashedPassword,
    });

    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


  // Get Users 
  router.get('/users', async (req, res) => {
    try {
      const users = await User.find(); // retrieve all users from the database
      res.status(200).json(users); // return the users as JSON
    } catch (err) {
      res.status(500).json({ message: err.message }); // return an error message if something goes wrong
    }
  });

  //Delete User
  router.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const user = await User.findByIdAndDelete(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  

//-------------Login-------------
const auth = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, "my-secret-key");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: "Token is not valid" });
  }
};

// router.get("/users", auth, async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Protected API endpoint
// router.get('/api/users', (req, res) => {
//   // Access the authenticated user via req.user
//   const user = req.user;

//   // Send the response
//   res.json({ message: 'Protected API endpoint', user });
// });

//-----------------Login

router.get("/users", async (req, res) => {
  console.log(req);
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Find a single User
router.post("/users", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(401).send("ivalid Password");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//---------------------------------------------------------------
// Api for Categories

// Add Category
router.post("/categories", async (req, res) => {
  const category = new Category({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
  });
  console.log("category Added");
  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Get Categories
router.get("/categories", async (req, res) => {
  console.log(req);
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Delete Categories
router.delete("/categories/:id", async (req, res) => {
  console.log(req);
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// router.delete("/categories/:id", async (req, res) => {
//   try {
//     const deletedCategory = await Category.findByIdAndDelete(req.params.id);
//     if (!deletedCategory) {
//       return res.status(404).json({ message: "Category not found" });
//     }
//     await Product.deleteMany({ category: deletedCategory._id });
//     res.json({ message: "Category and associated products deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

//////////////////////////////////////

module.exports = router;
