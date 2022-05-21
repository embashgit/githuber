# Githuber
 is a Web app. built with REACT as an SPA for fetching user/Contributors in a git repository.
A Web Application that shows a report of customer feedbacks showing all list of customers and their individual feedbacks
## Summary
​
  - [Getting Started](#getting-started)
  - [Runing the tests](#running-the-tests-[qa])
  - [Deployment](#deployment-[devops])
  - [Versioning](#versioning-[dev])
  - [Repo Structure](#repo-structure)
  - [Authors](#authors-[dev])
  - [License](#license)
  - [Acknowledgments](#acknowledgments)
​
## Getting Started
- clone the repo using `git clone https://github.com/embashgit/githuber.git`
- install the dependencies using `npm install`
- start the development server using `npm run dev`
- visit `http://localhost:5002` on your browser and you will be presented with the Main page
### Screen Record(s)

### Dependencies
- Node v12.19.0
- TypeScript
- TailwindCss
- Redux


### Prerequisites
The following are required to run the app
- [node v12](https://nodejs.org)

### Setup
- clone the repo using `git clone https://github.com/embashgit/githuber.git`
- install the dependencies using `npm install`
- start the development server using `npm run dev`
- visit `http://localhost:5002` on your browser and you will be presented with the Main page
​- run `npm run lint` to lint code
- run `npm run format` to format your code with prettier for a better developer experience

## Running the tests [QA]
- To run the tests simply use `npm test` ​However this isnt covered on this project

## Deployment [DevOps]​
To deploy this app follow the steps below:
- Run `npm run build` and a production optimized version of the app will be built
- Start the app using `npm run dev`.

A `Dockerfile` is also provided for container creation.
​
## Versioning [Dev]
```

```
- N/A​
​
## Repo Structure
```
├── README.md
├── node_modules
├── .eslintrc.js
├── .prettierrc.js
├── package.json
├── postcss.config.js
├── src
│   ├── App.tsx
│   ├── assets
│   │   └── Solvemate-Favicon.png
│   ├── components
│   │   ├── ActionButton.tsx
│   │   ├── ConponentLoader.tsx
│   │   ├── Form.tsx
│   │   ├── Highligted.tsx
│   │   ├── InfoComponent.tsx
│   │   ├── List.tsx
│   │   ├── Navtitle.tsx
│   │   ├── PageLoader.tsx
│   │   ├── SearchInput.tsx
│   │   └── TopNav.tsx
│   ├── declarations.d.ts
│   ├── helpers
│   │   ├── Constants.ts
│   │   ├── customer
│   │   │   └── customer.helper.ts
│   │   ├── feedback
│   │   │   └── feedback.helpers.ts
│   │   ├── hooks.ts
│   │   └── index.ts
│   ├── index.html
│   ├── index.tsx
│   ├── interfaces
│   │   ├── button.interface.ts
│   │   ├── customer.interface.ts
│   │   ├── feedback.interface.ts
│   │   ├── form.interface.ts
│   │   ├── nav.interface.ts
│   │   └── store.interface.ts
│   ├── redux
│   │   ├── actions
│   │   │   ├── customer
│   │   │   │   ├── customer.actionCreator.ts
│   │   │   │   └── customer.actionTypes.ts
│   │   │   └── feedbacks
│   │   │       ├── feedbacks.actionCreator.ts
│   │   │       ├── feedbacks.actionTypes.ts
│   │   │       └── index.ts
│   │   ├── reducer
│   │   │   ├── customer.reducer.ts
│   │   │   ├── feedbacks.reducer.ts
│   │   │   └── index.ts
│   │   └── store
│   │       └── index.ts
│   ├── styles.css
│   └── views
│       ├── Customer.tsx
│       ├── CustomerFeeds.tsx
│       ├── CustomerList.tsx
│       ├── FeedbackDashboard.tsx
│       └── FeedbackLists.tsx
├── tailwind.config.js
├── tsconfig.json
├── webpack
│   ├── webpack.common.js
│   ├── webpack.config.js
│   ├── webpack.dev.js
│   ├── webpack.developmentserver.js
│   ├── webpack.prod.js
│   └── webpack.qa.js
├── yarn-error.log
└── yarn.lock
```
## Authors [Dev]
-  **Ibrahim Bashir**
​
## License
​
This project is licensed under the [GNU General Public License v3.0](LICENSE.md)
License - see the [LICENSE.md](LICENSE.md) file for
details
​
## Acknowledgments
- Flexiana <https://flexiana.com>

