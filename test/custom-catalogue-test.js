const Catalogue = require("../src/productCatalogue");
const Product = require("../src/product");
// Setup
let cat = new Catalogue("Test Catalogue");
const p123 = new Product("A123", "Product 1", 100, 9, 10.0);
const p124 = new Product("A124", "Widget 1", 100, 10, 8.0);
const p125 = new Product("A125", "A Product 2", 100, 7, 10.0);
const p126 = new Product("A126", "A Widget 2", 100, 10, 10.0);
const p127 = new Product("A127", "Bracket 1", 100, 5, 10.0)
const p128 = new Product("A128", "Another Product 3", 100, 11, 10.0);
let response

console.log('Test addProduct')
console.log("\tWhen we add a product, then it will return true")
response = cat.addProduct(p123);
// Expectation
if (response === true)
  console.log('\tPassed')
else
  console.log('\tfailed')

console.log("\tWhen we add a product whose id matches an existinf one, then it will return false")
response = cat.addProduct(new Product("A123", "Product X", 100, 10, 10.0));
// Expectation
if (response === false)
  console.log('\tPassed')
else
  console.log('failed')
//================================

cat = new Catalogue("Test Catalogue");
console.log('Test findProductByNameLike')

cat.addProduct(p123);
cat.addProduct(p124);
cat.addProduct(p125);
cat.addProduct(p126);
cat.addProduct(p127);
cat.addProduct(p128);

let substring = "Product";
console.log("\tGiven the catalogue has some products, when we provide a substring that has matches, then it returns the correct products")
let matches = cat.findProductsByNameLike(substring);
// Expectation
if (matches.length !== 3)
  console.log('\tFailed')
if (matches[0].name === p123.name && matches[1].name === p125.name && matches[2].name === p128.name)
  console.log('\tPassed')
else
  console.log('\tFailed')

substring = "No match";
console.log("\tGiven the catalogue has some products, when we provide a substring that has no matches, then it returns an empty array")
matches = cat.findProductsByNameLike(substring);
// Expectation
if (matches.length === 0)
  console.log('\tPassed')
else
  console.log('\tFailed')

cat = new Catalogue("Test Catalogue");
substring = "Product";
console.log("\tGiven the catalogue is empty, when we provide a substring, then it returns an empty array")
matches = cat.findProductsByNameLike(substring);
if (matches.length === 0)
  console.log('\tPassed')
else
  console.log('\tFailed')

// ================================
cat = new Catalogue("Test Catalogue")
console.log('Test removeProductById')

cat.addProduct(p123);
cat.addProduct(p124);
cat.addProduct(p125);
cat.addProduct(p126);
cat.addProduct(p127);
cat.addProduct(p128);

let subId = 'A123'
console.log("\tGiven the catalogue has some products, when we enter the id has matches, then it returns the true")
let result = cat.removeProductById(subId)
// Exepectation
if (result == true)
    console.log('\tPassed')
else
    console.log('\tFailed')

subId = 'a123'
console.log("\tGiven the catalogue has some products, when we enter the id has no matches, then it returns the false")
result = cat.removeProductById(subId)
// Exepectation
if (result == false)
    console.log('\tPassed')
else
    console.log('\tFailed')

// ================================
console.log('Test checkReorder')

cat = new Catalogue("Test Catalogue")
cat.addProduct(p123);
cat.addProduct(p124);
cat.addProduct(p125);
cat.addProduct(p126);
cat.addProduct(p127);
cat.addProduct(p128);

console.log("\tWhen the quantityInStock is less than or equal to their reorder level, then it returns an object structure")
let products = cat.checkReorder(newQuality)
// Exepectation
if (products.type == 'Reorder' && products.productIds.length === 4)
    console.log('\tPassed')
else
    console.log('\tFailed')

console.log("\tWhen nothing needs reordering, then the array will be empty")
cat = new Catalogue("Test Catalogue")
products = cat.checkReorder(subId)
// Exepectation
if (products.type == 'Reorder' && products.productIds.length === 0)
    console.log('\tPassed')
else
    console.log('\tFailed')
