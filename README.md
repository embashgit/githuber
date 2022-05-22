# Githuber
 is a Web app. built with REACT as an SPA for fetching user/Contributors in a git repository.
## Summary
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
- Get Developer [Github token](https://github.com/settings/tokens) and update the .env file,
- Check .env.example for guide.
- start the development server using `npm run dev`
- visit `http://localhost:5002` on your browser and you will be presented with the Main page
### Screen shots or Record(s)

<img width="1728" alt="Screenshot 2022-05-21 at 04 09 55" src="https://user-images.githubusercontent.com/29065413/169630428-a6890055-aecb-4e8f-a2f0-134016b3b1fb.png">


https://user-images.githubusercontent.com/29065413/169630394-90d221a9-2b0b-4c86-a7ff-0572891cdb8b.mov

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
|   |
|   ├── API
│   └── repositories.services.ts
|   ├── App.tsx
├── components
│   ├── Alert.tsx
│   ├── Button.tsx
│   ├── FilterComponent.tsx
│   ├── Modal.tsx
│   ├── Navbar.tsx
│   ├── PageLoader.tsx
│   ├── Pagination.tsx
│   ├── SearchInput.tsx
│   ├── SkeletonCard.tsx
│   ├── Table.tsx
│   ├── TableHeader.tsx
│   └── TableRow.tsx
├── declarations.d.ts
├── index.html
├── index.tsx
├── interfaces
│   ├── components.interfaces.ts
│   ├── repositories.interfaces.ts
│   ├── store.interfaces.ts
│   └── user.interface.ts
├── redux
│   ├── actions
│   │   ├── constants
│   │   │   ├── Repositories.action.ts
│   │   │   └── User.action.ts
│   │   └── helper.ts
│   ├── index.ts
│   └── reducer
│       ├── index.ts
│       ├── repositories.reducer.ts
│       └── user.reducer.ts
├── routes
│   ├── index.tsx
│   └── routes.ts
├── styles.css
└── views
|   ├── landingPage
|   │   └── LandingPage.tsx
|   ├── layouts
|   │   └── MainLayout.tsx
|   └── repositories
|       └── Repositories.tsx
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

