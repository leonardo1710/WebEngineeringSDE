# Call Stack and Hoisting Tasks

Use the provided JavaScript demo file for all tasks.

For each task, **predict the result before running the code**. Then execute it and explain any differences between your prediction and the actual behavior.

## Task 1 – Global Scope and `window`

Use the first example with `myName` and `greetUser()`.

1. Uncomment the example.
2. Add `console.log(myName)` and `console.log(window.myName)` in the global scope and inside `greetUser()`.
3. Run the code and compare the values.
4. Replace `var myName = "Jane"` with `let myName = "Jane"` and run it again.

Explain why `window.myName` behaves differently with `var` and `let`.

## Task 2 – Hoisting with `var` and `let`

Use the first hoisting example.

1. Add `console.log(myVar)` immediately before `var myVar = "A"`.
2. Add another `console.log(myVar)` inside the IIFE immediately before `var myVar = "B"`.
3. Predict and then run the code.
4. Replace both `var` declarations with `let`.

Explain the difference between hoisting with `var` and `let`, including the Temporal Dead Zone.

## Task 3 – Inspect the Call Stack

Use the `greetInEnglish2()` / `greetInSpanish2()` example.

Set breakpoints in both functions and step through the program.

Record or sketch the call stack:

1. Before `greetInEnglish2()` is called.
2. While `greetInEnglish2()` is running.
3. While `greetInSpanish2()` is running.
4. After `greetInSpanish2()` returns.

Explain why function execution contexts are added to and removed from the stack.

## Task 4 – Variable Scope Across Function Calls

Use the same `greetInEnglish2()` example.

Compare these three versions inside `greetInEnglish2()`:

```js
name = "Polo";
```

```js
var name = "Polo";
```

```js
let name = "Polo";
```

For each version, predict the output before running it.

Explain which `name` variable is accessed by `greetInSpanish2()` and why.

## Task 5 – `this` and Function Execution Context

Use the `greetInFrench()` example.

First run:

```js
frenchMessage.greetInFrench();
```

Then create another object:

```js
const anotherMessage = {
    name: "Pierre",
    greetInFrench
};

anotherMessage.greetInFrench();
```

Finally run:

```js
const standaloneGreeting = frenchMessage.greetInFrench;
standaloneGreeting();
```

Compare the value of `this` in all three calls.

As an additional experiment, replace `greetInFrench` with an arrow function and observe what changes.
