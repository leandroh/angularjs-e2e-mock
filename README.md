# AngularJS end-to-end test

How to mock a real backend http request. Follow the below steps:

***

### 1. Installing

Clone the repository:

```bash
https://github.com/leandroh/angularjs-e2e-mock
```

Install dependencies:

```bash
npm install
```

### 2. Running AngularJS application test

Start a static web server to run the test application:


```bash
npm start
```

### 3. Selenium Server

Open a new terminal window and start up the Selenium Server:

```bash
./node_modules/.bin/webdriver-manager start
```

### 4. Protractor tests

Run the tests against the sample application in a new terminal window:

```bash
npm test
```
