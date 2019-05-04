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

## 2. React vs React Native
### 2.1 Intro
In this lesson, we'll look at how the web, iOS, and Android all differ from one another from both a user interface perspective and a user experience perspective.

We'll look at the components that React Native comes with, and last, we'll add Redux into a React Native application.

### 2.2 Web vs. Native
From a technological standpoint, React Native does a great job of letting you take your experiences on the web to build native applications.

What's critical to understand is that the experiences you're developing for on mobile are fundamentally different than on the web.

Not only are native apps different than web apps, but iOS apps are different than Android apps. If you took an Android Style app and put it on iOS, it would just feel weird.

In this lesson, we're going to cover the subtle differences you need to watch out for when building for the web, iOS and Android.

#### 2.2.1 Additional differences
Native applications look and "feel" different because they are fundamentally different. Even though we're using the same React principles that you've learned throughout this program, keep in mind that this is no longer the web! While some of these distinctions are more apparent (e.g., the development process, access to native features, how users get updates, etc.), there are some key differences that we'll be taking a deep dive into during this course.

For one, native apps often leverage **animations** to help create a great user experience. Animations such as button effects, screen transitions, and other visual feedback may be subtle, but they support continuity and guidance in the apps you build. They all function to dynamically tell a story about how your application works. Without animations, an application can feel like just a collection of static screens. For now, stay tuned; we'll be checking out animations in-depth during Lesson 5.

Another key difference between native and web applications is in **navigation**. Recall that React Router's `Route` component allows us to map a URL to a specific UI component. In React Native, routers function as a stack; that is, individual screens are "pushed" and "popped" as needed. We'll look at routing more closely later in Lesson 4.

#### 2.2.2 Android vs. iOS
Not only are there fundamental differences between native apps and web apps, you'll also find differences between how native platforms (iOS and Android) look and feel as well. Perhaps the most apparent are the distinct design philosophies on each platform: Android apps utilize Google's [Material Design](https://material.io/guidelines/material-design/introduction.html), while iOS apps take advantage of Apple's [Human Interface Design](https://developer.apple.com/ios/human-interface-guidelines/overview/themes/). When designing mobile applications, it's important to your users that an iOS app feels like an iOS app, and an Android app feels like an Android app.

Navigation between screens feels distinct between Android and iOS as well. Android devices have access to a **navigation bar** at the bottom of the screen, which allows users to go back to the previous screen (among other features). On iOS, the approach is different: there is no such universal navigation bar! When building the UI for an iOS application, it is important to include a back button (perhaps on a custom [navigation bar](https://developer.apple.com/ios/human-interface-guidelines/bars/navigation-bars/)) to help guide users through your app.

One more key difference between Android and iOS involves tab navigation. iOS apps include [tab bars](https://developer.apple.com/ios/human-interface-guidelines/bars/tab-bars/) at the bottom of the app's screen, allowing for convenient access to different portions of the app. Likewise, Android apps include them as well; however tabs are distinctly located [at the top of the screen](https://material.io/guidelines/components/tabs.html). Both allow access to high-level content, and we'll explore React Native's **TabNavigator** in closer detail in Lesson 4.

#### 2.2.3 Quiz Question
What is true about web applications or native applications? Select all that apply:

- [ ] Web applications tend to be characterized by more animations than in native applications
- [x] Tabs in native iOS applications are generally expected to be found at the bottom of the device screen
- [ ] Each screen in a native application is actually just a URL mapped to a UI component
- [ ] Native iOS applications can leverage a universal "back" button

#### 2.2.4 Summary
When developing your React Native projects, keep in mind that you're designing for a different experience than that of web applications. Mobile applications look and feel different due to fundamental differences, such as subtle animations that build a sense of continuity for your users. Differences exist between Android and iOS as well, especially in their design philosophies and navigation. We'll look at some fundamental components that make up React Natives apps in the next section!

- [iOS  Interface Essentials](https://developer.apple.com/ios/human-interface-guidelines/overview/interface-essentials/)
- [Material Design Navigation](https://material.io/design/navigation/understanding-navigation.html)

### 2.3 Common RN Components
When you're developing for the web, you automatically have access to every element in the HTML specification. This includes elements like `div` and `span`.

In React Native, it is similar, except instead of using elements provided by the HTML spec, you'll use components provided by React Native. Components like `view` and `text`.

In this lesson, we'll be covering some of the most common React Native components you might come across. Some of these we'll use in the Udacity fitness project, others we won't. But they're all good to know.

When writing HTML, we're used to using `<div>` and `<span>` tags to define sections or to contain other elements on the page. In React Native, a similar principle applies, but this time we're using React Native's `<View>` component to build the application UI. Just like HTML's `<div>`, `<View>` components can accommodate several props (e.g. style), and can even be nested inside other `<View>` components!

`<Text>` works just how you'd expect, as well. Its main objective is to, by no surprise, render text in the application. Just like `<View>`, styling and nesting capabilities apply to `<Text>` components, as well.

The two most common components in RN are

- `<View>`
- `<Text>`

### 2.4 Triathlon Tracker Project
This is the project we will be building as we learn React Native.

[![rn6](../assets/images/rn6-small.jpg)](../assets/images/rn6.jpg)<br>
<span class="center bold">Triathlon Tracker</span>

### 2.5 Icons
Right out of the box, Expo offers support for thousands of vector icons to use in your applications. Check out the link for a complete list.

- [Expo vector icon directory](https://expo.github.io/vector-icons)

Whichever icon set you choose, just be sure that it fits the overall look and feel of your application (e.g., using platform-specific icons).

[![rn7](../assets/images/rn7-small.jpg)](../assets/images/rn7.jpg)<br>
<span class="center bold">Icon</span>

```jsx
// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class App extends React.Component {
  componentDidMount() {
    console.log('begin');
    debugger;
    console.log('end');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text style={styles.redText}>My red text works</Text>
        <MaterialCommunityIcons name="emoticon-devil" color="red" size={100} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  redText: {
    color: 'red',
    fontSize: 20
  }
});
```

### 2.6 AddEntry Component
The next step is to create the AddEntry component and add it to App.js.  We also update our helpers.js component with a `getMetricMetaInfo()` method.

This will begin to scaffold our app. For now we will just render a bike icon to our screen.

[![rn8](../assets/images/rn8-small.jpg)](../assets/images/rn8.jpg)<br>
<span class="center bold">AddEntry Component</span>

#### 2.6.1 AddEntry Component
This file is located at '/components/AddEntry.js'.

```jsx
// AddEntry.js
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getMetricMetaInfo } from '../utils/helpers';

export default class AddEntry extends Component {
  render() {
    return <View>{getMetricMetaInfo('bike').getIcon()}</View>;
  }
}
```

#### 2.6.2 Helper Method
This file is located at '/utils/helper.js'.

```jsx
// helper.js
...
export const getMetricMetaInfo = metric => {
  const info = {
    run: {
      displayName: 'Run',
      max: 50,
      unit: 'miles',
      step: 1,
      type: 'steppers',
      getIcon() {
        return (
          <View>
            <MaterialIcons name="directions-run" color={'green'} size={65} />
          </View>
        );
      }
    },
    bike: {
      displayName: 'Bike',
      max: 100,
      unit: 'miles',
      step: 1,
      type: 'steppers',
      getIcon() {
        return (
          <View>
            <MaterialCommunityIcons name="bike" color={'red'} size={65} />
          </View>
        );
      }
    },
    swim: {
      displayName: 'Swim',
      max: 9900,
      unit: 'meters',
      step: 100,
      type: 'steppers',
      getIcon() {
        return (
          <View>
            <MaterialCommunityIcons name="swim" color={'blue'} size={65} />
          </View>
        );
      }
    },
    sleep: {
      displayName: 'Sleep',
      max: 24,
      unit: 'hours',
      step: 1,
      type: 'slider',
      getIcon() {
        return (
          <View>
            <FontAwesome name="bed" color={'black'} size={65} />
          </View>
        );
      }
    },
    eat: {
      displayName: 'Eat',
      max: 10,
      unit: 'rating',
      step: 1,
      type: 'slider',
      getIcon() {
        return (
          <View>
            <MaterialCommunityIcons name="food" color={'orange'} size={65} />
          </View>
        );
      }
    }
  };

  return typeof metric === 'undefined' ? info : info[metric];
};
```

#### 2.6.3 App Component
This file is located at '/App.js'.

```jsx
// App.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddEntry from './components/AddEntry';

export default class App extends React.Component {
  componentDidMount() {
    console.log('begin');
    debugger;
    console.log('end');
  }
  render() {
    return (
      <View style={styles.container}>
        <AddEntry />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
```

### 2.7 Stepper & Slider Stubs
Next we add two control components to AddEntry. These are the UdaciSlider and UdaciStepper components.

For now each will be a stub that we bring into AddEntry.

[![rn9](../assets/images/rn9-small.jpg)](../assets/images/rn9.jpg)<br>
<span class="center bold">AddEntry with Slider & Stepper Components</span>

#### 2.7.1 UdaciSlider Component
Located in '/components/UdaciSlider.js'.

```jsx
// UdaciSlider.js
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class UdaciSlider extends Component {
  render() {
    return (
      <View>
        <Text> UdaciSlider </Text>
      </View>
    );
  }
}
```

#### 2.7.2 UdaciStepper Component
Located in '/components/UdaciStepper.js'.

```jsx
// UdaciStepper.js
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class UdaciStepper extends Component {
  render() {
    return (
      <View>
        <Text> UdaciStepper </Text>
      </View>
    );
  }
}
```

#### 2.7.3 AddEntry Component
Located in '/components/AddEntry.js'.

```jsx
// AddEntry.js
...
import UdaciSlider from './UdaciSlider';
import UdaciStepper from './UdaciStepper';

export default class AddEntry extends Component {
  ...
  render() {
    const metaInfo = getMetricMetaInfo();

    return (
      <View>
        {Object.keys(metaInfo).map(key => {
          const { getIcon, type, ...rest } = metaInfo[key];
          const value = this.state[key];

          return (
            <View key={key}>
              {getIcon()}
              {type === 'slider' ? (
                <UdaciSlider
                  value={value}
                  onChange={value => this.slide(key, value)}
                  {...rest}
                />
              ) : (
                <UdaciStepper
                  value={value}
                  onIncrement={() => this.increment(key)}
                  onDecrement={() => this.decrement(key)}
                  {...rest}
                />
              )}
            </View>
          );
        })}
      </View>
    );
  }
}
```

### 2.8 DateHeader Component
Next we add the DateHeader component which will be included in a few different places.

[![rn10](../assets/images/rn10-small.jpg)](../assets/images/rn10.jpg)<br>
<span class="center bold">DateHeader component</span>

#### 2.8.1 DateHeader
Located in '/components/DateHeader.js'.

```jsx
// DateHeader.js
import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

const DateHeader = ({ date }) => {
  return <Text style={styles.dateText}>{date}</Text>;
};

DateHeader.propTypes = {
  date: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  dateText: {
    fontSize: 30
  }
});

export default DateHeader;
```

#### 3.8.2 AddEntry.js
Located in '/components/AddEntry.js'.

```jsx
// AddEntry.js
import DateHeader from './DateHeader';

export default class AddEntry extends Component {
  render() {
    const metaInfo = getMetricMetaInfo();

    return (
      <View>
        <DateHeader date={new Date().toLocaleDateString()} />
        ...
      </View>
    );
  }
}
```

### 2.9 Touchables
Users mainly interact with web apps with clicks. In the world of mobile apps, however, several different touch gestures are used to navigate through the app: tapping a button, swiping to scroll through a list, and so on.

React Native offers a number of components to handle "tapping gestures," or what is called **Touchables**. Let's take a look at them in detail in the following video:

- `Button`
- `TouchableHighlight`
- `TouchableOpacity`
- `TouchableNativeFeedback`
- `TouchableWithoutFeedback`

#### 2.9.1 TouchableHighlight

```jsx
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import AddEntry from './components/AddEntry';

export default class App extends React.Component {
  handlePress = () => {
    alert('hello!');
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.btn}
          onPress={this.handlePress}
          underlayColor="#d4271b"
        >
          <Text style={styles.btnText}>Touchable Highlight</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  btnText: {
    color: '#fff'
  }
});
```

#### 2.9.2 TouchableOpacity

```jsx
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import AddEntry from './components/AddEntry';

export default class App extends React.Component {
  handlePress = () => {
    alert('hello!');
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={this.handlePress}>
          <Text style={styles.btnText}>Touchable Highlight</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
...
```

#### 2.9.3 TouchableWithoutFeedback

```jsx
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import AddEntry from './components/AddEntry';

export default class App extends React.Component {
  handlePress = () => {
    alert('hello!');
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Touchable Highlight</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
...
```

#### 2.9.4 TouchableNativeFeedback

```jsx
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import AddEntry from './components/AddEntry';

export default class App extends React.Component {
  handlePress = () => {
    alert('hello!');
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          onPress={this.handlePress}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Touchable Highlight</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
...
```

### 2.10 Update Components
Next we add in the Submit button and submit method.

#### 2.10.1 AddEntry SubmitBtn
Located in '/components/AddEntry.js'.

[![rn11](../assets/images/rn11-small.jpg)](../assets/images/rn11.jpg)<br>
<span class="center bold">Submit Button</span>

```jsx
// AddEntry.js
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { getMetricMetaInfo, timeToString } from '../utils/helpers';

const SubmitBtn = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  );
};
SubmitBtn.propTypes = {
  onPress: PropTypes.func.isRequired
};

export default class AddEntry extends Component {
  ...
  submit = () => {
    const key = timeToString();
    const entry = this.state;

    // Update Redux

    this.setState({
      run: 0,
      bike: 0,
      swim: 0,
      sleep: 0,
      eat: 0
    });

    // Navigate to home

    // Save to DB

    // Clear local notification
  };
  render() {
    ...
    return (
      <View>
      ...
      <SubmitBtn onPress={this.submit} />
      </View>
    );
  }
}
```

#### 2.10.2 Quiz Question
What is true about handling touches in React Native apps? Select all that apply:

- [ ] Unlike Buttons, Touchables already include some basic default styling
- [ ] Buttons look the same on iOS as they do on Android
- [x] Both Buttons and Touchables have access to an `onPress` prop
- [x] Touchables can be nested within Views, and Views can be nested within Touchables

#### 2.10.3 Slider Component
Now we'll work on the Slider component located in '/components/Slider.js'

[![rn12](../assets/images/rn12-small.jpg)](../assets/images/rn12.jpg)<br>
<span class="center bold">Slider components</span>

```jsx
// UdaciSlider.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Slider } from 'react-native';

export default function UdaciSlider({ max, unit, step, value, onChange }) {
  return (
    <View>
      <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={onChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
}

UdaciSlider.propTypes = {
  max: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
```

#### 2.10.4 Stepper Component
Now we'll work on the Stepper component located in '/components/Stepper.js'

[![rn13](../assets/images/rn13-small.jpg)](../assets/images/rn13.jpg)<br>
<span class="center bold">Stepper components</span>

```jsx
// UdaciStepper.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

export default function UdaciStepper({
  max,
  unit,
  step,
  value,
  onIncrement,
  onDecrement
}) {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={onDecrement}>
          <FontAwesome name="minus" size={30} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onIncrement}>
          <FontAwesome name="plus" size={30} color={'black'} />
        </TouchableOpacity>
      </View>
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
}

UdaciStepper.propTypes = {
  max: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};
```

#### 2.10.5 Update Icon in AddEntry
This will show a message when items are already logged for that day.

[![rn14](../assets/images/rn14-small.jpg)](../assets/images/rn14.jpg)<br>
<span class="center bold">AddEntry Icon</span>

We start with '/components/TextButton.js'.

```jsx
// TextButton.js
import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

export default function TextButton({ children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}

TextButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};
```

Next we incorporate this in AddEntry which is located in 'components/AddEntry.js'.

```jsx
// AddEntry.js
import { Ionicons } from '@expo/vector-icons';
import TextButton from './TextButton';

export default class AddEntry extends Component {
  static propTypes = {
    alreadyLogged: PropTypes.bool
  };
  ...
  reset = () => {
    const key = timeToString();

    // Update Redux

    // Route to Home

    // Update DB
  };
  render() {
    const metaInfo = getMetricMetaInfo();

    if (this.props.alreadyLogged) {
      return (
        <View>
          <Ionicons name="ios-happy" size={100} />
          <Text>You already logged your information for today.</Text>
          <TextButton onPress={this.reset}>Reset</TextButton>
        </View>
      );
    }

    return (
      ...
    )
  }
}
```

<!-- 
### 2.11 Lists -->
