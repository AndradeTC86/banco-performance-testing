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
|--- fixtures
|--- helpers
|--- test 
|--- package-lock.json
|--- package.json
```

## Tests

The tests were written using the JavaScript language with Supertest, Mocha and Chai.

## Run tests

### Initial Setup

1. Requires node. To install, execute `npm install node` or download [Node](https://nodejs.org/en/download/)
2. Run the command `npm install` to install dependencies
3. Requires the [Banco API](https://github.com/juliodelimas/banco-api) up and running in the localhost to execute the tests 

### Run Tests

- Run one of the commands below to run the tests.
  Examples:
- To run the tests, execute `npm run test`
<p>