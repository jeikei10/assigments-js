Assignment
   // 1. What is Short circuiting and What is it used for?
         Short circuit evaluation  works with the && and || logical operators. The expressions are evaluated left to right.
         So, if the condition is met and the rest of the conditions won’t affect the already evaluated result, the expression          will short-circuit and return that result.

   // 2. Demonstrate use of the Logical AND using the following comparison operators
   / // i. ===, >,>=,<,<=,!==

     AND with === and <
     const x = 10;
     const y = 15;
     console.log((x === 2) && (y < 10)); // false

     AND with > and <=
     
      const x = 10;
      const y = 15;
      console.log((x > 2) && (y <= 15)); // true

      AND with === and !==
      
     const x = 10;
     const y = 15;
     console.log((x === 10) && (y !== 15)); // false