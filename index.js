const http = require('http');
const path = require('path');
// const fs = require('fs');
const express = require('express');
const ejs = require("ejs");
const ProductService = require("./ProductService.js");

const products = ProductService.getProducts();

const app = express();

app.set("view engine", "ejs");

function app_routing (res, extention){
  
  switch (extention) {
    case '.css':
      res.setHeader("Content-Type", "text/css");
      break;
    case '.html':
      res.setHeader("Content-Type", "text/html; charset=utf-8");      
      break;
    case '.jpg':
      res.setHeader("Content-Type", "image/jpeg");
      break;
  }
    res.statusCode = 200;
}

app.use("/product", function(req, res){

  const filename = path.basename(req.url);
  const extention = path.extname(filename);
  app_routing(res, extention);
  const key = filename.replace("/product/","").split("-")[0]

  const product = ProductService.getProductByKey(key);
    console.log(product);
  res.render('product', {product: product});
});

app.use("/", function(req, res){

  const filename = path.basename(req.url) ? path.basename(req.url) : "index.ejs";
  const extention = path.extname(filename);
  app_routing(res, extention);
  res.render('index', {products: products});
});



ProductService.init();

app.listen(process.env.PORT);



// function serveIndex(req,res){
  // const filename = "index.ejs";
  // const extention = path.extname(filename);
  
  // switch (extention) {
  //   case '.css':
  //     res.setHeader("Content-Type", "text/css");
  //     break;
  //   case '.html':
  //     res.setHeader("Content-Type", "text/html; charset=utf-8");      
  //     break;
  //   case '.jpg':
  //     res.setHeader("Content-Type", "image/jpeg");
  //     break;
  // }
    // res.statusCode = 200;
    
    // const content = fs.readFileSync("static/index.ejs").toString();
    // const template = ejs.compile(content)
    //     // console.log(template);

    // template({products: products})
    // const html = template(scope);
   
    // res.write(content);
    // res.end();
// }

// function serveStatic(req, res){
//   const filename = path.basename(req.url) ? path.basename(req.url) : "index.ejs";
//   const extention = path.extname(filename);
 
 
//   switch (extention) {
//     case '.css':
//       res.setHeader("Content-Type", "text/css");
//       break;
//     case '.html':
//       res.setHeader("Content-Type", "text/html; charset=utf-8");      
//       break;
//     case '.jpg':
//       res.setHeader("Content-Type", "image/jpeg");
//       break;
//   }
//     res.statusCode = 200;
//     console.log(filename);
    
//     const content = fs.readFileSync("static/" + filename).toString();
//     // const template = ejs.compile(content);
   
//     // template({products: products});
//     // ejs.render(content, {products: products});
//     res.write(content);
//     res.end();
// }
