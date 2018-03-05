# oneflow-tech-test

A refactoring exercise in Vue.js. The task was to take source code for a simple todo app (https://github.com/vuejs/vue/tree/dev/examples/todomvc) and provide a tested/modernised version.

### Tech

The project was built by copying the original source code into a new build using Vue CLI. All unit tests are run using karma/mocha/chai
with all UI tests run using nightwatch.

### Setup

#### Prerequisites

Node - v8.9.4
Npm - v5.6.0

#### Getting the Repo

```
$ git clone https://github.com/rskyte/oneflow-tech-test
$ cd oneflow-tech-test
$ npm install
```

#### Running Tests

All tests:
```
npm run test
```

Unit Tests:
```
npm run unit
```

UI Tests:
```
npm run e2e
```

### Challenges

The main challenge faced was learning the mechanics of the Vue.js framework in order to be able to write tests and make meaningful edits to the codebase. The second major challenge was deciding on/getting/configuring the various testing frameworks needed to test the application and then learning their practices.

### Todo List

- Incorporate unencapsulated variables in App.vue into vue component
- Improve unit test coverage
- Improve routing (use vue-router?)
- Use Vuex to improve data flow?
- Improve readability of UI tests using Cucumber.js
- Separate App.vue component into smaller components
