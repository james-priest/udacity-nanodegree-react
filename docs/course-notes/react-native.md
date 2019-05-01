---
title: Udacity React Native
description: Notes by James Priest
---
<!-- markdownlint-disable MD022 MD024 MD025 MD032 MD033 -->
# React Native

[<-- back to React Nanodegree homepage](../index.html)

<!-- 
### Links
#### Resources
- [Create Amazing Forms by Pete LePage](https://goo.gl/i0vY1M) - input types, datalist, labels, autocomplete attributes, autofill pitfalls, real-time validation

#### Samples
- [Slider sample](../exercises/wf4-9/index.html) - Uses both mouse and touch events
-->

---

## 1. React Native

[![rn2](../assets/images/rn2-small.jpg)](../assets/images/rn2.jpg)<br>
<span class="center bold">React Native</span>

### 1.1 Course Intro
Welcome! This course covers the React Native framework. Here's a quick breakdown of what the course looks like:

#### 1.1.1 Course Map

- **Lesson 1** illustrates the benefits of using React Native to build native applications, as well as how to set up an effective dev environment.
- **Lesson 2** compares the main ideological and API differences between React and React Native.
- **Lesson 3** details styling and layout patterns for React Native applications.
- **Lesson 4** examines routing patterns and strategies.
- **Lesson 5** introduces native functionality (e.g., geolocation, notifications, etc.) and preparation of applications for the app store.

#### 1.1.2 In-Class Project
During this course, you'll follow along and create a daily fitness-tracking application, [UdaciFitness](https://github.com/udacity/reactnd-UdaciFitness-complete). You'll tie in what you've learned from React Fundamentals as well as React & Redux, then leverage React Native to create a fully functional mobile application!

### 1.2 What is React Native

[![rn3](../assets/images/rn3-small.jpg)](../assets/images/rn3.jpg)<br>
<span class="center bold">React Native code</span>

React Native allows you to use React to build native iOS and Android applications. Companies like Walmart, Airbnb, and Tesla are all using React Native in some capacity on their mobile applications.

In my opinion though, React Native is even more beneficial to smaller startups.

Instead of having a web team, an iOS team, and an Android team, with React Native, you can just have a single UI team. This not only saves the organization a lot of money but also developer hours as well.

You may have heard the phrase, "Write Once, Run Anywhere". The idea of this is that it would be nice if you could use a single code base on the web,
on iOS, and on Android.

In practice though, this is pretty difficult. This is because each of those platforms have such a unique experience.

Unlike write once, run anywhere, React Native's motto is, "Learn Once, Write Anywhere."

Once you learn React, you should be able to take those same principles and not only build UI for the web, but also for native platforms like iOS and Android.

So instead of sharing the same codebase amongst all the different platforms, we're sharing the same principles. Things like component composition and declarative UI.

#### 1.2.1 React Native under the Hood
When React was first introduced, a big selling point was the [Virtual DOM](https://reactjs.org/docs/faq-internals.html). The idea is pretty standard in most UI libraries now, but when it first came out, it was groundbreaking! We can look at what exactly the Virtual DOM is by breaking down the process of what happens when you call `setState()`.

The first thing React does when `setState()` is called is merge the object passed to `setState()` into the current state of the component. This will kick off a process called [reconciliation](https://reactjs.org/docs/reconciliation.html). The end goal of reconciliation is to update the UI based on this new state in the most efficient way possible. To do this, React will construct a new tree of React elements (which you can think of as an object representation of your UI). Once it has this new tree, React will "diff" it against the previous element tree in order to figure out how the UI should change in response to the new state. By doing this, React will then know the exact changes which occurred, and by knowing exactly what changes occurred, it will able to minimize its footprint on the UI by only making updates where absolutely necessary.

This process of creating an object representation of the DOM is the whole idea behind the "Virtual DOM". Now, what if instead of targeting and rendering to the DOM, we need to target and render to another platform -- say iOS or Android. Theoretically, the DOM is just an implementation detail. Besides the name itself (which, in my opinion, was more of a marketing ploy than anything), there's nothing that couples the idea of the Virtual DOM to the actual DOM. This is the exact idea behind React Native. Instead of rendering to the web's DOM, React Native renders to native iOS or Android views. This allows us to build native iOS and Android applications just by using React Native.

#### 1.2.2 Quiz Question
How does the **learn once, write anywhere** approach influence development?

- [x] Learning React allows us to use the same principles to develop for both web and native platforms
- [ ] React development more closely follows "write once, run anywhere," so we don't need to develop distinct apps for each platform
- [ ] React Native development shares exactly the same codebase as other React platforms
- [x] The same set of engineers should be able to develop for whichever platform they choose without needing to learn fundamentally different technologies

#### 1.2.3 Summary
React Native's "learn once, write anywhere" approach allows us to use the same principles that we know to develop for both web and native platforms. After all, under the hood, many of the same principles of the Virtual DOM, reconciliation, and diffing algorithm apply whether it's a web application built with React or a mobile application built with React Native.

Further Research
- [Bridging in React Native](https://tadeuzagallo.com/blog/react-native-bridge/)
- [12 Common Questions from Working with React Native](https://medium.com/dailyjs/12-common-questions-about-react-native-74fc9ba49b17)

### 1.3 Dev Environment Setup
When we build our app throughout this course, we'll be building it for both Android and iOS. One of the puzzles at hand is that we'll need to support two separate development environments: iOS uses [Xcode](https://developer.apple.com/xcode/), and Android uses [Android Studio](https://developer.android.com/studio/index.html). This introduces a lot of complexity into this course; after all, both Xcode and Android Studio could probably each be their own set of courses!

#### 1.3.1 Expo-CLI
Luckily for us, there's a tool we can use that will allow us to develop for both Android and iOS without ever opening up Android Studio or Xcode. It was called Create React Native App but is now called [Expo CLI](https://expo.io/learn). It's similar to Create React App in that all you have to do is install the CLI via NPM. Then, via the CLI, you can easily scaffold a brand new React Native project.

Just like Create React App, there are pros and cons to using Expo. First, the pros.

##### Expo Pros
The obvious one is that Expo minimizes the amount of time it takes to create a "hello world" application. The fact that you can run a command in your terminal and 15 seconds later have a project that run on both Android and iOS using JavaScript is pretty incredible. Next, and we'll look deeper into this one later on, Expo allows you to easily develop on your own device. This way, any changes you make in your text editor will instantly show on the app running on your local phone. Next, and this is something I mentioned earlier, with Expo you just need one build tool. You don't have to worry about Xcode or Android Studio. Lastly, there's no lock in. Just like Create React App, you can "eject" at anytime.

Recap of pros:

- Less time to create an app
- Easily develop on your own device
- One build tool for both iOS and Android

##### Expo Cons
Now, there are some cons, and granted they're pretty minor, but they're good to be aware of. First, if you're building an app that's going to be added to an existing native iOS or Android application, Expo won't work. Second, if you need to build your own bridge between React Native and some native API that Expo doesn't expose (which is pretty rare), Expo won't work.

Isn't suitable for:

- Adding onto existing native iOS or Android app
- Using native os/device APIs that Expo doesn't already expose

#### 1.3.2 Install Expo
We can get started by installing Expo CLI globally.

```bash
npm install -g expo-cli
```

Expo is a set of tools, libraries and services you can use to build native iOS and Android apps without the need to use Android Studio or Xcode.

What's more: it even allows us to develop for iOS with Windows (or even Linux)!

With Expo, you can load and run projects with the same JavaScript you already know. There's no need to compile any native code. And much like Create React App, using Expo lets us get an application up and running with almost no configuration.

We'll be relying on Expo heavily in this course. First things first: you need to install Expo. Head to the app store and install the Expo mobile app for your device:

- [Expo on Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent) (Android)
- [Expo on the App Store](https://itunes.apple.com/us/app/expo-client/id982107779) (iOS)

#### 1.3.3 Quiz Question
What is true about Expo?

- [x] Expo is a set of tools and services that allow use to build native (iOS and Android) applications with JavaScript
- [ ] Using Expo requires compiling native code
- [x] Much like Create React App, Expo allows us to quickly build and scaffold a starter application
- [x] Expo makes it easy to build mobile applications without having to write native code (e.g. Swift, Objective C, Java)

#### 1.3.4 Expo Snack
[Expo Snack](https://snack.expo.io/) is a browser-based dev environment similar to CodePen or CodeSandbox. It allows you to develop and test right in the browser.

[![rn1](../assets/images/rn1-small.jpg)](../assets/images/rn1.jpg)<br>
<span class="center bold">Expo Snack UI</span>

#### 1.3.5 Installing Simulators
A Mac is needed to develop iOS apps but Android apps can be developed on Mac, Linux, & Windows.

In order to install iPhone or Android simulators we can refer to the
following React Native docs.

- [React Native - Getting Started](https://facebook.github.io/react-native/docs/getting-started) - "React Native CLU Quickstart" tab

#### 1.3.6 The Environment
When creating an app with Expo, what type of support should you expect?

- ES5 and ES6 support
- Object Spread Operator
- Asynchronous functions
- JSX
- Flow
- Fetch API

#### 1.3.7 Create Expo App
In order to start a new app we issue the following command

```bash
expo init reactnd-udacifitness
```

Then to run the app we do the following:

```bash
cd reactnd-udacifitness
npm start
```

In order to run this with an Android emulator we need to:

- Open Android Studio
- Open Virtual Device Manager
- Create & Start a device
- Turn on Developer mode & USB Debugging in the device's Settings

> #### Expo on Windows 10 with WSL
>
> There seems to be an error on Windows 10 with running expo on WSL. This causes the network to loose connectivity.
>
> The workaround was to run Expo in Cmd Console.
>
> - [GitHub Fix #1](https://github.com/expo/expo-cli/issues/99#issuecomment-472591763)
> - [GitHub Fix #2](https://github.com/Microsoft/WSL/issues/2913#issuecomment-471277845)

#### 1.3.8 Summary
Expo is similar to Create React App in that it scaffolds and builds a starter application with minimal configuration. This allows us to have an app up and running without the need for Xcode or Android Studio! Some of the benefits include:

- Minimal "time to 'Hello World'"
- Development on your own device via Expo
- A single build tool
- No lock-in (i.e., ejection at any time)

You can also set up simulators to aid in development as well. But regardless of which platform we choose to develop for (iOS, Android), and which environment we're in (Mac, Windows, Linux) -- we're just building with the same old JavaScript that we're used to!

### 1.4 Using the Debugger
#### 1.4.1 How to Debug
As we've mentioned before, perhaps one of the best things about React Native is that it takes the development experience you're used to on the web, and brings it all to native development.

Things like live reloading and debugging just work out of the box. Let's take a deeper dive into some of these features -- first with debugging!

Once Android emulator is installed properly and running we can start our Expo project.

```bash
npm start
```

That will open Expo Developer Tools.

[![rn4](../assets/images/rn4-small.jpg)](../assets/images/rn4.jpg)<br>
<span class="center bold">Expo Developer Tools</span>

Next we click "Run on Android device/emulator". This will open up the app in the emulator.

We can then open the Developer Debug Menu and select from the following options

- **Reload** - reloads app
- **Start Remote JS Debugging** - enables debugging in Chrome DevTools
- **Enable Live Reload** - reloads on code save
- **Enable Hot Reloading** - preserves state on reload
- **Toggle Inspector** - shows element inspector
- **Show Perf Monitor** - perf monitor
- **Start/Stop Sampling Profiler** - profiler

[![rn5](../assets/images/rn5-small.jpg)](../assets/images/rn5.jpg)<br>
<span class="center bold">Developer Debug Menu in Android</span>

The debug items we'll use the most are:

- Reload
- Start Remote JS Debugging
- Toggle Inspector

Here are some links to additional info

- [Expo Docs - Debugging](https://docs.expo.io/versions/v32.0.0/workflow/debugging/) - Debugging JavaScript, HTTP, Redux, etc.
- [React DevTools](https://github.com/facebook/react-devtools/tree/master/packages/react-devtools) - Standalone DevTools app for React & React Native
- [React Native Debugger](https://github.com/jhen0409/react-native-debugger) - Includes
  - Remote JS Debugger
  - React Inspector
  - Redux DevTools

If we need to Reload the app we can just type R key twice.

#### 1.4.2 Quiz Question
How should you access the in-app developer menu? Select all that apply:

- [ ] Change a setting in the Expo mobile app
- [ ] Choose **Debug** from the notification drawer
- [x] Shake your phone
- [x] Select **Shake Gesture** in the simulator
- [x] Press Cmd+D in iOS simulator or Cmd+M in Android emulator

#### 1.4.3 Summary
What's great about React Native development is that it takes much of what you're used to from web development and takes it to native development. Accessing the in-app developer menu allows you to reload your JavaScript code, debug remotely via Developer Tools, and even display an in-app inspector.

##### To Debug
All you have to do is shake your phone, or press:

- ⌘D in the iOS simulator
- ⌘M in the Android simulator

##### To Refresh
To refresh the app, just:

- Double-tap “R” on your keyboard (if using the simulator)
- Shake the phone, then select “Refresh”
