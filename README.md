1/ What is the difference between var, let, and const?
   Ans:var, let, and const all declare variables in JavaScript, but differ in scope, hoisting, and reassignability.
  var is function-scoped, can be reassigned and redeclared, and is subject to hoisting. let and const are block-scoped
  (limited to the curly braces {} they are in). let allows reassignment and cannot be redeclared, while const variables must be initialized and cannot be reassigned or redeclared

2/  What is the difference between map(), forEach(), and filter()?
   Ans: The map(), forEach(), and filter() methods in JavaScript are all used to iterate over arrays, but they serve distinct purposes and have different return values. 
  *forEach():
    Purpose: Iterates over each element in an array and executes a provided callback function for each element.
    Return Value: forEach() does not return a new array or any value; it always returns undefined. It is primarily used for side effects, such as logging elements,
    modifying elements in place (if the elements are objects), or performing other operations that don't require a new array as output.
 *map():
  Purpose: Transforms each element in an array based on a provided callback function and creates a new array containing the results of that transformation.
  Return Value: Returns a new array with the same length as the original array,
  where each element is the result of applying the callback function to the corresponding element of the original array. The original array remains unchanged.

  *filter():
   Purpose: Creates a new array containing only the elements from the original array that satisfy a specified condition (i.e., for which the provided callback function returns true).
   Return Value: Returns a new array containing a subset of the original array's elements, based on the condition defined in the callback function. If no elements satisfy the condition,
  an empty array is returned. The original array remains unchanged.

3/What are arrow functions in ES6? 
  Ans:Arrow functions are a concise, modern way to write functions in JavaScript introduced in ES6, 
  featuring a shorter syntax by removing the function keyword and using the => (fat arrow) operator. 
  Key features include optional omission of parentheses and return keywords for single-line functions,
  and a unique behavior where the this keyword is lexically bound to the surrounding scope, unlike traditional functions. 

  4/How does destructuring assignment work in ES6?
      Ans:The destructuring syntax is a JavaScript syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
      It can be used in locations that receive data (such as the left-hand side of an assignment or anywhere that creates new identifier bindings).

  5/ Explain template literals in ES6. How are they different from string concatenation?
      Ans:Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.
     Template literals are sometimes informally called template strings, 
     because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders). 
     However, a tagged template literal may not result in a string; it can be used with a custom tag function to perform whatever operations you want on the different parts of the template literal.
