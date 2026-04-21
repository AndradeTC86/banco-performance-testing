# Banco Performance Testing

# Automation Performance Testing K6

This is the repository for automation of performance tests, developed to work with K6.

## Table of Contents

1. [Goal](#goal)
2. [Project Structure](#project-structure)
3. [Tests](#tests)
4. [Initial Setup](#initial-setup)
5. [Run Tests](#run-tests)

## Goal

The goal of this repository is to be easy to understand focused on developing automated performance tests for API, using [K6](https://k6.io), an open-source load testing tool that makes performance testing easy and productive for engineering teams.

## Project Structure

```
|--- config
|--- fixtures
|--- helpers
|--- tests 
|--- utils
```

## Tests

The tests were written using the JavaScript language with Supertest, Mocha and Chai.

## Run tests

### Initial Setup

1. Requires K6. To install, download [K6](https://k6.io)
2. Requires the [Banco API](https://github.com/juliodelimas/banco-api) up and running in the localhost to execute the tests 

### Run Tests

- Run one of the commands below to run the tests.
  Examples:
- To run the tests, execute `k6.exe run ./tests/login.test.js` or `k6.exe run ./tests/transferencias.test.js`
- To run the tests generating reports, execute `K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run ./tests/login.test.js` or `K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run ./tests/transferencias.test.js`
<p>