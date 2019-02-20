---
title: Udacity React & Redux
description: Notes by James Priest
---
<!-- markdownlint-disable MD022 MD024 MD032 MD033 -->
<!-- # React Nanodegree -->
# React & Redux

[<-- back to React Nanodegree homepage](../index.html)

<!--
### Links
#### Resources
- [Create Amazing Forms by Pete LePage](https://goo.gl/i0vY1M) - input types, datalist, labels, autocomplete attributes, autofill pitfalls, real-time validation

#### Samples
- [Slider sample](../exercises/wf4-9/index.html) - Uses both mouse and touch events -->

---

## 1. Managing State
### 1.1 Introduction
Welcome to Udacity's Redux course. The goal of this course is to help you learn how to more
effectively manage state in your applications. As a byproduct of that, you'll have to learn Redux along the way.

[![rr2](../assets/images/rr2-small.jpg)](../assets/images/rr2.jpg)

Now, you may find this course a little slow. That's on purpose. The reason we're going to take it slow is because historically Redux is pretty difficult to learn.

The problem isn't necessarily Redux itself, but everything else that you typically pair with Redux.

What happens is traditionally when you learn Redux, you also learn it alongside

- React
- React-Router
- React-Redux bindings
- and a few other helper libraries

[![rr1](../assets/images/rr1-small.jpg)](../assets/images/rr1.jpg)

This causes all sorts of issues because your brain has a hard time separating what's what.

To fix this, we're going to take a slow gradual approach.

1. We'll start off by looking at just Redux, nothing else.
2. Once you've mastered Redux itself, we'll add in some basic UI with just HTML and JavaScript.
3. Then, when you're feeling comfortable with hooking up Redux to a simple UI, we'll swap out that UI for React, and you'll learn how the two work together.
4. We'll then look at some common pain points when combining React and Redux, and we'll learn how the React-Redux bindings help solve these pain points.
5. Finally, we'll use Create React App to see how a real-world React and Redux app is built.

[![rr3](../assets/images/rr3-small.jpg)](../assets/images/rr3.jpg)

Now, we're covering quite a lot, but remember we're going to take it slow and go step-by-step.

#### 1.1 Lesson Roadmap
Since Redux is not a topic for beginners and can be a daunting area to break into. We've broken down your path to learning Redux into the following lessons:

- Lesson 1 - Managing State
- Lesson 2 - UI + Redux
- Lesson 3 - Redux Middleware
- Lesson 4 - Redux with React
- Lesson 5 - Asynchronous Redux
- Lesson 6 - react-redux
- Lesson 7 - Real World Redux

##### Lesson 1 - Managing State
You’ll learn techniques to make your state more predictable by moving your state to a central location and establishing strict rules for getting, listening, and updating that state.

##### Lesson 2 - UI + Redux
You’ll learn to move away from having state live in the DOM by creating a vanilla JavaScript application whose state is managed entirely by Redux.

##### Lesson 3 - Redux Middleware
You’ll learn to create custom middleware and add it to your Redux store. This middleware will allow you to enhance your store by hooking into and intercepting actions before they reach any reducers.

##### Lesson 4 - Redux with React
You’ll learn how to add React to a Redux application and have the state of that application be managed by Redux.

##### Lesson 5 - Asynchronous Redux
You’ll learn to better abstract asynchronous events by creating your own custom Thunk middleware and adding it to your store.

##### Lesson 6 - react-redux
You’ll learn to leverage the react-redux bindings in order to leverage the benefits of a UI library like React and a state management library like Redux.

##### Lesson 7 - Real World Redux
You’ll take your knowledge of Redux and utilize it by building a real world Redux application. You’ll also learn advanced Redux topics like reducer composition and normalization.

### 1.2 The Store
Think about any application you've ever made. Most likely that app was composed of two things, UI and state.

Now, think of any bug you've ever had. Odds are that bug was caused by state mismanagement.
Your application was expecting the state to be one thing, but it was actually something else.

When your computer freezes and you have to restart it, that's because some state inside of your computer got to a weird place. By restarting it, you reset that state. When a website says you have a new notification, but you click on that and there's nothing new, that's because the state of the app was mismanaged.

As was said previously, the goal of this course is to make state management, on any app you build, more predictable. One of the best ways to improve the quality of the apps you build is to improve the predictability of the state in an application.

#### 1.2 App Data
A traditional app might look something like this:

[![rr4](../assets/images/rr4-small.jpg)](../assets/images/rr4.jpg)<br>
App data is sprinkled throughout the app.

Notice in the image above, that this simple application has a lot of state:

- There are the images in the sidebar on the left.
- There are rows of tracks in the main area.
- Each Track will have its own information that it's maintaining.
- There's the search field at the top that introduces new state to the app (the searched for artist/track information).

And this is just one, simple page of this application. In most sites you use, there is information littered throughout every single page of the entire app.

Remember that the main goal of Redux is to make the state management of an application more predictable. Let's see what that might look like:

[![rr5](../assets/images/rr5-small.jpg)](../assets/images/rr5.jpg)<br>
Application data is just referenced by the app.

In this example, the app appears exactly the same to the end user, however, it's functioning quite differently under the hood. All of the data is stored *outside of the UI code* and is just *referenced* from the UI code.

With a change like this, if the data needs to be modified at all, then all of the data is located in one place and needs to be only changed once. Then the areas of the app that are referencing pieces of data, will be updated since the source they're pulling from has changed.

#### 1.2 State Tree
One of the key points of Redux is that all of the data is stored in a single object called the state tree. But what does a state tree actually look like? Good question! Here's an example:

```text
{
  recipes: [
    { … },
    { … },
    { … }
  ],
  ingredients: [
    { … },
    { … },
    { … },
    { … },
    { … },
    { … }
  ],
  products: [
    { … },
    { … },
    { … },
    { … }
  ]
}
```

See how all of the data for this imaginary cooking site is stored in a single object? So all of the state (or "application data") for this site is stored in one, single location. This is what we mean when we say "state tree"...it's just all of the data stored in a single object.

Throughout this course, whenever we refer to an application's "state tree", we'll use a triangle to convey this concept.

[![rr7](../assets/images/rr7-small.jpg)](../assets/images/rr7.jpg)

Now that we've decided we're going to put all of our state into a single location called the state tree, the next thing we need to figure out, is how we'll actually interact with it.

If we're actually going to build a real application with our state tree, there are three ways in which we'll need to interface with it.

- First, we'll need a way of getting the state.
- Second, we'll need a way to listen for when the state changes.
- Third, we'll need a way to update the state.

Let's go ahead and wrap all of these things together into a single concept called the store.

[![rr6](../assets/images/rr6-small.jpg)](../assets/images/rr6.jpg)

So, when we talk about the store, we're talking about the state tree as well as three ways in which we'll interact with it

- Getting the state
- Listening for updates to the state
- Updating the state

#### 1.2 Quiz Question
What are the ways we can interact with the state tree?

- [x] Getting changes from the state
- [x] Listening for changes from the state
- [x] Updating the state

#### 1.2 Summary
Summary
In this lesson, we looked at the data in an application. We saw that in traditional apps, the data is mixed in with the UI and markup. This can lead to hard-to-find bugs where updating the state in one location doesn't update it in every location.

We learned that the main goal that Redux is trying to offer is predictable state management. The way that Redux tries to accomplish this is through having a *single state tree*. This state tree is an object that stores the entire state for an application. Now that all state is stored in one location, we discovered three ways to interact with it:

1. getting the state
2. listening for changes to the state
3. updating the state

Then we combine the three items above and the state tree object itself into one unit which we called *the store*. We'll look at creating this store in the next lesson.

### 1.3 Create Store: Getting & Listening
In this section, we'll be building the store. If you remember from the previous section, the store has the following information:

- the state tree
- a way to get the state tree
- a way to listen and respond to the state changing
- a way to update the state

[![rr6](../assets/images/rr6-small.jpg)](../assets/images/rr6.jpg)

#### 1.3 Create Store from Scratch
So this is what we're going to do in this lesson - we're going to actually create the store code ourselves, from scratch.

In the following video, we'll start with a blank `index.js` file and create a factory function that creates store objects. Then we'll have the store keep track of the state, and we'll write the method to get the state from the store.

Pop open your code editor, and let's get started!

```js
function createStore() {
  // The store should have four parts
  // 1. The state
  // 2. Get the state
  // 3. Listen to changes on the state
  // 4. Update the state

  let state

  const getState = () => state;

  return {
    getState
  }
}
```

We started building out the `createStore` function. Currently, this factory function:

- takes in no arguments
- sets up a local (private) variable to hold the state
- sets up a `getState()` function
- returns an object that publicly exposes the `getState()` function

Let's take a look at the `getState()` function

> #### 1.3 Question 1 of 5
> Thinking about the code we just wrote, what does the `getState()` function do?
>
> - [ ] It modifies the existing state variable.
> - [ ] It logs who access the state variable.
> - [x] It returns the existing state variable
> - [ ] It formats the state object for easy parsing.

Our list of things we need to build for the store is shrinking:

- <strike>the state tree</strike>
- <strike>a way to get the state tree</strike>
- a way to listen and respond to the state changing
- a way to update the state

Our next task on the list is to make a way to listen for changes to the state.

```js
function createStore() {
  // The store should have four parts
  // 1. The state
  // 2. Get the state
  // 3. Listen to changes on the state
  // 4. Update the state

  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = listener => {
    listeners.push(listener);
  };

  return {
    getState,
    subscribe
  };
}
```

Here's an example of how we would use our `createStore()` function by creating two listeners.

```js
// Sample implementation
const store = createStore();
store.subscribe(() => {
  console.log('The new state is: ', store.getState());
})
store.subscribe(() => {
  console.log('The store changed');
})
```

Next we want to provide the user a way to unsubscribe for changes. We do this by returning a function that when invoked, filters out the listener from our array of listeners.

```js
function createStore() {
  // The store should have four parts
  // 1. The state
  // 2. Get the state
  // 3. Listen to changes on the state
  // 4. Update the state

  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  return {
    getState,
    subscribe
  };
}
```

Here's an example of how we would use our updated `createStore()` function with the same two listeners except now the second one is assigned to an `unsubscribe` constant that when invoked, removes the listener from the store.

```js
// Sample implementation
const store = createStore();
store.subscribe(() => {
  console.log('The new state is: ', store.getState());
})
const unsubscribe = store.subscribe(() => {
  console.log('The store changed');
})

unsubscribe();
```

> #### 1.3 Question 2 of 5
>
> Which of the following is true about `store.subscribe()`?
>
> - [x] It is a function.
> - [x] When called, it is passed a single function.
> - [ ] When called, it is passed multiple functions.
> - [ ] It modifies the internal state tree variable.
> - [ ] It invokes the function that was passed to it.
> - [ ] It returns an Array of listener functions.
> - [x] It returns a function.

let's review the functionality has so far.

- First, it contains the state,
- next, it has a `getState()` function, which just returns us the state,
- and finally,it has a subscribe function, which will let each of the listeners know whenever the state changes.

If you remember back to when we first talked about our store, there were four parts.

- [x] The state
- [x] getting the state
- [x] listening to changes on the state
- [ ] updating the state

As of right now, we have three of the four.

[![rr8](../assets/images/rr8-small.jpg)](../assets/images/rr8.jpg)

So let's add in that fourth piece updating the state.

Now remember, the whole goal here is to increase the predictability of the state in our application. We can't just allow anything or anyone to update the state. If we did, that would drastically decrease predictability.

In fact, the only way in which we can increase predictability in terms of updating the state, is by establishing a strict set of rules for how updates can be made.

> #### NFL Ana`logy
> Let's look at an NFL team for example. In order for a team to maximize their chances of winning, they always have to be on the same page. They need to operate as one cohesive unit. Every miscommunication can and will lead to negative consequences.
>
> So in a sense, NFL teams have the same goals that we do. Increasing predictability. But how do they go about accomplishing this?
>
> Well, they create a Playbook, and each player must know it by heart. This way, when the team runs a play from the playbook, players will know exactly what each member of the team will be doing. Maximizing predictability.
>
> Can we take the same idea and apply it to our applications? Well, we can, and it's so fundamental that we'll call it rule number one to increasing predictability. Just like NFL teams have a collection of plays, we too can have a collection of events that can occur in our app which will change the state of our store.

We've got our first rule!

> Rule #1 - *Only an event can change the state of the store.*

Ok...well, without knowing what an "event" is, this rule is less than helpful :-\ Fear not, because we're going to look at what events are next:

#### 1.3 TO-DO Example
Previously, you were introduced to Rule #1 for increasing the predictability of state within the store: Have a collection of events that can occur in the application which will change the state of the store.

Now, what does this actually look like? Let's say we were building a to-do list app. One event that would change the state of the store would be when the user adds a new item to their to-do list.

[![rr10](../assets/images/rr10-small.jpg)](../assets/images/rr10.jpg)

How might we go about representing that as an event? What if we just use an object with a type property that describes the event taking place? So in our example, that object might look like this.

[![rr9](../assets/images/rr9-small.jpg)](../assets/images/rr9.jpg)

It's just a plain object with a type property that indicates what type of event occurred.

Now, we could add any information we want into the event just by adding an additional property to the object. The add to-do event took place but what was the to-do that was actually added?

We can add a to-do property and include the to-do's name and information.

[![rr11](../assets/images/rr11-small.jpg)](../assets/images/rr11.jpg)

If I delete that to do, what event might this be?

Well, I would probably label it a REMOVE_TODO event.

And how do we know which to do was removed?

We'll pass along the to-do items id.

[![rr12](../assets/images/rr12-small.jpg)](../assets/images/rr12.jpg)

Similarly, marking an item as "completed" would toggle its state. This event of toggling the state might include an id property along with the type property.

So, we have these objects that record the events that have happened. Let's give a name to these objects,
we'll call them "actions" because they're the type of actions which can occur in the app which will change the application state.

[![rr13](../assets/images/rr13-small.jpg)](../assets/images/rr13.jpg)

Now, what if we wanted to add another feature to our app?

Let's say instead of just adding short-term to-do items, we also wanted the user to be able to add long-term goals.

The action for adding a goal might look something like this.

[![rr14](../assets/images/rr14-small.jpg)](../assets/images/rr14.jpg)

Notice that the type property is ADD_GOAL, and a goal property is being passed along.

And just like deleting a to-do, we need an action to represent the event of deleting a goal.

[![rr15](../assets/images/rr15-small.jpg)](../assets/images/rr15.jpg)

See how descriptive that is? We will never be able to confuse this action with the removed to do actions.

All actions must have a type property. Now, what we've done is we've created a collection of all of the actions which can change the state of our app.

[![rr16](../assets/images/rr16-small.jpg)](../assets/images/rr16.jpg)

If the state of our app changes, we'll know that one of those actions occurred.

#### 1.3 Shopping Cart Example
When an event takes place in a Redux application, we use a plain JavaScript object to keep track of what the specific event was. This object is called an **Action**.

Let's take another look at an Action:

```js
{
  type: "ADD_PRODUCT_TO_CART"
}
```

As you can see, an Action is clearly just a **plain JavaScript object**.

What makes this plain JavaScript object special in Redux, is that every Action must have a `type` property.

The purpose of the `type` property is to let our app (Redux) know *exactly* what event just took place. This Action tells us that a product was added to the cart. That's incredibly descriptive and quite helpful, isn't it?

Now, since an Action is just a regular object, we can include extra data about the event that took place:

```js
{
  type: "ADD_PRODUCT_TO_CART",
  productId: 17
}
```

In this Action, we're including the `productId` field. Now we know exactly which product was added to the store!

One more note to keep in mind as you build your Action objects: it's better practice to pass as little data as possible in each action. That is, prefer passing the index or ID of a product rather than the *entire product object* itself.

**Action Creators** are functions that create/return action objects. For example:

```js
// ES6
const addItem = item => ({
  type: ADD_ITEM,
  item
});
```

```js
// ES5
var addItem = function addItem(item) {
  return {
    type: ADD_ITEM,
    item: item
  };
};
```

> #### 1.3 Question 3 of 5
>
> Is it true that *every* Action must have a `type` property?
>
> - [x] Yes - Redux will throw an error if missing
> - [ ] No

> #### 1.3 Question 4 of 5
>
> Can an Action have three or more fields?
>
> - [x] Yes - There's no limit but it's best to keep objects as light as possible
> - [ ] No

> #### 1.3 Question 5 of 5
> Consider each
>
> ```js
> // A
> const receivePost = post => ({
>   type: RECEIVE_POST,
>   post
> });
> ```
>
> ```js
> // B
> const receivePost = post => ({
>   type: RECEIVE_POST,
>   post: post
> }); 
> ```
>
> ```js
> // C
> const clearErrors = {
>   type: CLEAR_ERRORS
> };
> ```
>
> ```js
> // D
> const addSeven = {
>   type: 'ADD_NUMBER',
>   number: 7
> };
> ```
>
> ```js
> // E
> const removeComments = {
>   comments: null
> };
> ```
>
> Which of the above are valid actions?
>
> - [x] A
> - [x] B
> - [ ] C
> - [ ] D
> - [ ] E

#### 1.3 Summary
In this section, we started creating our store by building out a `createStore()` function. So far, this function keeps track of the state, and provides a method to get the state and one to keep track of listener functions that will be run whenever the state changes.

In the next section, we'll add a method to handle updating the state.
