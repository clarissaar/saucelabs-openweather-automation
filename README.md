## Sauce Labs (UI) / Open Weather (API) automation ##

### Setup
1. Install dependencies:
```npm install```
2. Run tests via command-line (headless browser):
```cy:run```
3. If you want, you can open Cypress application to visualize tests running in UI using 
```cy:open```. You can also run individual tests using ```npx cypress run --spec <spec-path>```

### Automation Architecture

This project was designed using following concepts:
1. *package.json* containing all node.js dependencies;
2. *cypress.json* containing global Cypress configurations;
3. *fixtures/user.json* containing user data;
4. *fixtures/user.json* containing user data;
5. *pages* package using Page Objects concept, being easy to mantain elements;
6. *integration* package splitted by *ui* and *api* tests, keeping those in the same project (the main goal is keeping easy to run tests either via UI or via API).

### Continuous Integration

Setup through github actions, for each pull requested merged in *master* branch. Once all tests had passed, application is good to go to production in a Continuous Deployment environment. 






