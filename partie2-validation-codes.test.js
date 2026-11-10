import { isValidProductCode } from "./partie2-validation-codes.js";

console.assert(isValidProductCode("=A1B9"), "=A1B9");
console.assert(!isValidProductCode("=A1B8"), "=A1B8");
console.assert(!isValidProductCode("A1B9"), "A1B9");
console.assert(!isValidProductCode("=A1B"), "=A1B");
console.assert(!isValidProductCode("=A-B9"), "=A-B9");
console.assert(!isValidProductCode("=a1b9"), "=a1b9");

console.log("ok");