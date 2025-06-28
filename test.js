const { add } = require("./index");

if (add(2, 3) !== 5) {
  console.error("Test failed: add(2, 3) should be 5");
  process.exit(1); // exit with error   
} else {
  console.log("Test passed");
}
