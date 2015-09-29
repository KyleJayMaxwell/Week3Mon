Kyle Maxwell
# Outline for Monday, September 28th
- Review Wednesday's exercises
- Functions

## Defining a function

```javascript
var greeting = function() {
  console.log("Hello World");
};

greeting();

```

## Defining a function with a parameter

```javascript
var greeting = function(firstName) {
  // anything inside of here will execute when the function is called
  console.log("Good morning " + firstName);
};

var name = "Otis";
var name2 = "Bodhi";
greeting(name);
greeting(name2);
```

## Defining a function with two parameters

```javascript
var greeting = function (name, question) {
  // anything inside of here will execute when called
  console.log("Good morning", name, question);
  console.log("name:", name);
  console.log("question:", question);
};

greeting('Jenny', 'how was your weekend?');

var name = "Bernie";
var question = "how is the campaign?";
greeting(name, question);

```

## Why use functions?

Functions are the bread and butter of JavaScript programming. The concept of wrapping a piece of program in a value has many uses. Functions are used to structure larger programs, to reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other.

### Let's greet some instructors

```javascript
var instructor = "Caleb";
console.log("Hello " + instructor); // Hello Caleb

var instructor = "Jenny";
console.log("Hello " + instructor); // Hello Jenny

// let's greet some students too

var student = "Nathan";
console.log("Hello " + student);  // Hello Nathan

var student = "Rachel";
console.log("Hello " + student); // Hello Rachel
```

## So what does this have to do with functions?

The questions we should be asking are:

  1. Did we repeat ourselves in our code?
  2. Can we make our program simpler?
  3. Can we make our program easier to maintain?

![](http://www.buyog.com/talks/utahjs/bart-dry.png)

```javascript
var greeting = function(person) {
  // We can avoid re-writing the same code by placing the repeated code inside of a function
  console.log("Hello " + person);
};

// Now let's greet some instructors...
greeting("Caleb");
greeting("Jenny");

// ... and some cats.
greeting("Otis");
greeting("Bodhi");
```

###Functions make our code easier to maintain

```javascript
var greeting = function(person) {
  // With just 1 change, we can adjust our program output
  console.log("Hola " + person);
};

// Now let's greet some people...
greeting("Bernie Sanders");
greeting("Donald Trump");
```

## Returning values
The keyword `return` halts the execution of the function and returns the desired value for use in the rest of your code.

```javascript

var sum = function(x,y) {
  return x + y;
}

var summedNumber = sum(3,4);
var yourNumber = 3;

var newNumber = yourNumber + summedNumber;

console.log(newNumber);

```

##Putting the 'fun' in function()
You know the drill...open main.js and begin!!
