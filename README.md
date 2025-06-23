# Overview

This is a simple react application that contains one component: `src/App.tsx`. 

Fork this repository and complete the tasks listed below. Complete each task before moving on to the next.

## Task 1: Review the code

1. Review the code within the App component and identify:
   - Any bugs that could cause the application to break
   - Poor coding practices that affect maintainability
   - Any anti-patterns
   - Accessibility concerns

2. For each issue you identify:
   - Explain why it's problematic
   - Propose a solution (you do not have to implement the fix, you can just suggest changes neccessary)
   - Describe the benefits of your suggested improvement

3. Additionally, suggest general improvements to the code to make it more readable and maintainable.


## Task 2: Extend functionality

Within the root of this repository, you will find a file called `db.json`. This is a mock database that contains the `authors` found in the `App` component. Your task is as follows:

1. Start the mock [json-server](https://www.npmjs.com/package/json-server) by running `npx json-server db.json`
2. Replace the hardcoded `authors` elements with the data from `db.json` by making an HTTP request to the `/authors` endpoint


## Bonus: Style the application

If you still have some time, you may choose to improve the styling of the application to make it more visually appealing.

