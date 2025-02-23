# Unexpected NaN Behavior in JavaScript Subtraction

This repository demonstrates an uncommon error in JavaScript involving the subtraction operator (-) and NaN (Not a Number) values.

## The Problem

JavaScript's subtraction operator doesn't always behave as expected when one or both operands are NaN.  This can lead to unexpected results and make debugging more challenging.

The `bug.js` file shows example demonstrating this behavior.  The subtraction of a number and NaN will always result in NaN. 

## The Solution

The `bugSolution.js` file offers a robust solution that uses a function to handle the NaN case, ensuring more predictable behavior.  This involves checking for NaN before performing the subtraction.

## How to Use

1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Open `bugSolution.js` to see the improved code.
4. Run both files using a JavaScript environment (e.g., Node.js, browser's console).