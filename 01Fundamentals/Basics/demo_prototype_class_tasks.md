# Prototype System Tasks

Use the provided JavaScript demo file for all tasks.

For each task, **predict the result before running the code**. Then execute it and explain the observed behavior.

## Task 1 – Inspect the Prototype Chain

Use the existing `cat` and `supercat` objects.

Add suitable `console.log()` statements to inspect:

```js
Object.getPrototypeOf(cat);
Object.getPrototypeOf(supercat);
Object.getPrototypeOf(Object.getPrototypeOf(supercat));
```

Also check:

```js
cat.hasOwnProperty("name");
cat.hasOwnProperty("meow");

supercat.hasOwnProperty("name");
supercat.hasOwnProperty("meow");
```

Find out where the following properties or methods are defined:

- `name`
- `superpower`
- `meow`

Explain what happens when JavaScript evaluates:

```js
cat.meow();
```

In which order are the object and its prototypes searched?

## Task 2 – Shared Methods Through the Prototype

Create two cats:

```js
let cat1 = new Cat("Garfield");
let cat2 = new Cat("Lucy");
```

Check:

```js
console.log(cat1.meow === cat2.meow);
```

Then remove the method from the shared prototype:

```js
delete Cat.prototype.meow;
```

Try calling:

```js
cat1.meow();
cat2.meow();
supercat.meow();
```

Predict what will happen before running the code.

Explain:

- Why does changing `Cat.prototype` affect objects that were already created?
- Why is `meow` not copied into every `Cat` object?

Restore the method afterwards so that the remaining examples still work.

## Task 3 – Classes, Inheritance, and Static Methods

Experiment with `SuperCat`.

Run:

```js
supercat.meow();
SuperCat.MegaMeow();
```

Then try:

```js
supercat.MegaMeow();
```

Add a new method to `Cat.prototype` after `supercat` has already been created:

```js
Cat.prototype.sleep = function () {
    console.log(this.name + " sleeps");
};
```

Now run:

```js
cat.sleep();
supercat.sleep();
```

Finally inspect:

```js
supercat instanceof SuperCat;
supercat instanceof Cat;

cat instanceof SuperCat;
cat instanceof Cat;
```

Explain:

- How does `extends Cat` affect the prototype chain?
- Why can `SuperCat` instances access methods from `Cat.prototype`?
- Why can `MegaMeow()` only be called on the class itself?
