# Sample Javascript App - Vue.js Front-End

[![CircleCI Build Status](https://circleci.com/gh/dsayling/sample-flask.svg?style=shield)](https://circleci.com/gh/dsayling/sample-flask) [![Software License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/dsayling/sample-flask/main/LICENSE)

## Description

This Sample Vue.js front-end project demonstrates what a typical JavaScript (or node) CI workflow may look on CircleCI.com

In this sample config, we have a single workflow `build-and-test` which will install and cache our node packages, and run `npm run test` within a node-based executor. This config makes use of the [Node orb](https://circleci.com/developer/orbs/orb/circleci/node), a package for CircleCI's config language, which makes writing our config shorter, and easier.

## Getting Started

You can preview the live CI workflow for this application [on CircleCI](https://app.circleci.com/pipelines/github/dsayling/sample-flask?branch=main).

The [CircleCI configuration](https://circleci.com/docs/2.0/configuration-reference/) file can be found at [.circleci/config.yml](https://github.com/dsayling/sample-flask/blob/main/.circleci/config.yml).

## About This App

This sample application is a _Single Page Application_ written in [Vue.js](https://github.com/vuejs/vue), a popular front-end JavaScript framework, and utilizes the [Ionic Framework](https://ionicframework.com/) which will allow us to deploy our application to mobile devices.

_Both [Vue.js](https://github.com/vuejs/vue) and [Ionic Framework](https://ionicframework.com/) are also users of CircleCI 🎉, and you can view the CI configs they use in their respective repositories_

### Continuous Food Delivery

When you load up the app, you will be presented with a menu from the _Continuous Food Delivery_ service, and a cart for items you wish to order. Click on items from the menu to have them added to your cart in real-time and the order total will automatically calculate.

![Preview Gif of Continuous Food Delivery app](./.github/img/preview.gif)

### API Server

CFD(Continuous Food Delivery) is a sample application which relies on an API server to both fetch menu items, as well as add them to your cart. If you would like to run this project locally, you must supply a valid CFD API service, such as one of the following sample projects for back-end languages:

| Language |  GitHub | Description |
|---|---|---|
|  Python | [Link]()  | A Python-Flask CFD API server  |

## Run and Test Locally

If you would like to try this application out locally, you can find runtime instructions below.

### Requirements

Node v13.11+

### Run Local Dev Server

Start the local development server with the following command:

```
ionic serve
```

### Tests

Multiple types of testing are available for this sample application. View the `package.json` file for all available scripts.

```json
"test:unit": "vue-cli-service test:unit",
"test:e2e": "vue-cli-service test:e2e",
"test": "echo \"Error: no test specified. Did you mean 'test:unit' \" && exit 0"
"lint": "vue-cli-service lint",
```

## Additional Resources

* [CircleCI Docs](https://circleci.com/docs/) - The official CircleCI Documentation website.
* [CircleCI Configuration Reference](https://circleci.com/docs/2.0/configuration-reference/#section=configuration) - From CircleCI Docs, the configuration reference page is one of the most useful pages we have.


## License

This repository is licensed under the MIT license.
The license can be found [here](./LICENSE).

