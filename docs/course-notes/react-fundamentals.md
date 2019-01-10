---
title: Udacity React Fundamentals
description: Notes by James Priest
---
<!-- markdownlint-disable MD022 MD032 -->
<!-- # React Nanodegree -->
# React Fundamentals

[<-- back to React Nanodegree homepage](../index.html)

<!-- ### Links
#### Resources
- [Create Amazing Forms by Pete LePage](https://goo.gl/i0vY1M) - input types, datalist, labels, autocomplete attributes, autofill pitfalls, real-time validation

#### Samples
- [Slider sample](../exercises/wf4-9/index.html) - Uses both mouse and touch events -->

---

## 1. Why React
### 1.1 Introduction
[![rf1](../assets/images/rf1-small.jpg)](../assets/images/rf1.jpg)

Before we actually dive into the syntax of React, let's take a step back and talk about what makes React special.

- It's compositional model
- It's declarative nature
- The way data flows through a Component
- That React is really just JavaScript

### 1.2 What is Composition
#### Benefits of Composition
Because the concept of composition is such a large part of what makes React awesome and incredible to work with, let's dig into it a little bit. Remember that composition is just combining simple functions together to create complex functions. There are a couple of key ingredients here that we don't want to lose track of. These ingredients are:

- simple functions
- combined to create another function

Composition is built from simple functions. Let's look at an example:

```js
function getProfileLink (username) {
 return 'https://github.com/' + username
}
```

This function is ridiculously simple, isn't it? It's just one line! Similarly, the `getProfilePic` function is also just a single line:

```js
function getProfilePic (username) {
 return 'https://github.com/' + username + '.png?size=200'
}
```

These are definitely simple functions, so to compose them, we'd just *combine* them together inside another function:

```js
function getProfileData (username) {
 return {
   pic: getProfilePic(username),
   link: getProfileLink(username)
 }
}
```

Now we *could* have written `getProfileData` *without* composition by providing the data directly:

```js
function getProfileData (username) {
 return {
 pic: 'https://github.com/' + username + '.png?size=200',
 link: 'https://github.com/' + username
 }
}
```

There's nothing technically wrong with this at all; this is entirely accurate JavaScript code. But this *isn't* composition. There are also a couple of potential issues with this version which  isn't using composition. If the user's link to GitHub is needed somewhere else, then duplicate code would be needed. A good function should follow the "DOT" rule:

> *Do One Thing*

This function is doing a couple of different (however minor) things; it's creating two different URLs, storing them as properties on an object, and then returning that object. In the composed version, each function just does one thing:

- `getProfileLink` – just builds up a string of the user's GitHub profile link
- `getProfilePic` – just builds up a string the user's GitHub profile picture
- `getProfileData` – returns a new object

#### React & Composition
React makes use of the power of composition, heavily! React builds up pieces of a UI using **components**. Let's take a look at some pseudo code for an example. Here are three different components:

```html
<Page />
<Article />
<Sidebar />
```

Now let's take these *simple* components, combine them together, and create a more complex component (aka, composition in action!):

```html
<Page>
 <Article />
 <Sidebar />
</Page>
```

Now the Page component has the Article and Sidebar components inside. This is just like the earlier example where getProfileData had getProfileLink and getProfilePic inside it.

We'll dig into components soon, but just know that composition plays a huge part in building React components.

#### Composition Recap
Composition occurs when simple functions are combined together to create more complex functions. Think of each function as a single building block that does one thing (DOT). When you combine these simple functions together to form a more complex function, this is **composition**.

##### Further Research
- [Compose me That: Function Composition in JavaScript](https://www.linkedin.com/pulse/compose-me-function-composition-javascript-kevin-greene)
- [Functional JavaScript: Function Composition For Every Day Use](https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10)

### 1.3 Declarative Code
#### Imperative Code
A lot of JavaScript is **imperative code**. If you don't know what "imperative" means here, then you might be scratching your head a bit. According to the dictionary, "imperative" means:

> *expressing a command; commanding*

When JavaScript code is written *imperatively*, we tell JavaScript **how** we want something done. Think of it as if we're giving JavaScript commands on exactly what steps it should take. For example, I give you the humble `for` loop:

```js
const people = ['Amanda', 'Farrin', 'Geoff', 'Karen', 'Richard', 'Tyler']
const excitedPeople = []

for (let i = 0; i < people.length; i++) {
 excitedPeople[i] = people[i] + '!'
}
```

If you've worked with JavaScript any length of time, then this should be pretty straightforward. We're looping through each item in the `people` array, adding an exclamation mark to their name, and storing the new string in the `excitedPeople` array. Pretty simple, right?

This is imperative code, though. We're commanding JavaScript what to do at every single step. We have to give it commands to:

- set an initial value for the iterator - (`let i = 0`)
- tell the `for` loop when it needs to stop - (`i < people.length`)
- get the person at the current position and add an exclamation mark - (`people[i] + '!'`)
- store the data in the `i`th position in the other array - (`excitedPeople[i]`)
- increment the `i` variable by one - (`i++`)

Remember the example of keeping the air temperature at 71º? In my old car, I would turn the knob to get the cold air flowing. But if it got too cold, then I'd turn the knob up higher. Eventually, it would get too warm, and I'd have to turn the knob down a bit, again. I'd have to manage the temperature myself with every little change. Doesn't this sound like an imperative situation to you? I have to manually do multiple steps. It's not ideal, so let's improve things!

#### Declarative Code
In contrast to imperative code, we've got **declarative** code. With declarative code, we don't code up all of the steps to get us to the end result. Instead, we *declare* what we want done, and JavaScript will take care of doing it. We tell JavaScript **what** we want done. This explanation is a bit abstract, so let's look at an example. Let's take the imperative `for` loop code we were just looking at and refactor it to be more declarative.

With the imperative code we were performing all of the steps to get to the end result. What _is_ the end result that we actually want, though? Well, our starting point was just an array of names:

```js
const people = ['Amanda', 'Farrin', 'Geoff', 'Karen', 'Richard', 'Tyler']
```

The end goal that we want is an array of the same names but where each name ends with an exclamation mark:

```js
["Amanda!", "Farrin!", "Geoff!", "Karen!", "Richard!", "Tyler!"]
```

To get us from the starting point to the end, we'll just use JavaScript's .map() function to declare what we want done.

```js
const excitedPeople = people.map(name => name + '!')
```

That's it! Notice that with this code we haven't:

- created an iterator object
- told the code when it should stop running
- used the iterator to access a specific item in the `people` array
- stored each new string in the `excitedPeople` array

...all of those steps are taken care of by JavaScript's `.map()` Array method.

> .map() and .filter()
>
> A bit rusty on JavaScript's .map() and .filter() Array methods? Or perhaps they're brand new to you. In either case, we'll be diving into them in the React is "just JavaScript" section. Hold tight!

#### React is Declarative
We'll get to writing React code very soon, but let's take another glimpse at it to show how it's declarative.

```jsx
<button onClick={activateTeleporter}>Activate Teleporter</button>
```

It might seem odd, but this is valid React code and should be pretty easy to understand. Notice that there's just an `onClick` attribute on the button...we aren't using `.addEventListener()` to set up event handling with all of the steps involved to set it up. Instead, we're just declaring that we want the `activateTeleporter` function to run when the button is clicked.

#### Declarative Code Recap
*Imperative* code instructs JavaScript on **how** it should perform each step. With *declarative* code, we tell JavaScript **what** we want to be done, and let JavaScript take care of performing the steps.

React is declarative because we write the code that we want, and React is in charge of taking our declared code and performing all of the JavaScript/DOM steps to get us to our desired result.

##### Further Research

- Tyler's [Imperative vs Declarative Programming](https://tylermcginnis.com/imperative-vs-declarative-programming/) blog post
- [Difference between declarative and imperative in React.js?](https://stackoverflow.com/questions/33655534/difference-between-declarative-and-imperative-in-react-js) from StackOverflow