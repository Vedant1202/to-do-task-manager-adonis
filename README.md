# TO-DO TASK MANAGER

A to-do task manager application based on [AdonisJS](https://adonisjs.com/) backend with functions to add, update, remove tasks. User login functionality has been implemented.
Login sessions based on [JWT (JSON Web Token)](https://jwt.io/) authentication strategy. Tokens are encrypted using RSA based private-public key mechanism.

## Features

 - Frontend static file server based on [express](https://expressjs.com/)
 - Server API based on [node.js](https://nodejs.org/en/) and [AdonisJS](https://adonisjs.com/) Framework
 - Database based on [MySQL](https://www.mysql.com/) and accessed through [Lucid Models](https://adonisjs.com/docs/4.0/lucid)
 - JWT based authentication based on [AdonisJS Auth](https://adonisjs.com/docs/4.0/authentication)
 - Server monitoring based on [nodemon](https://nodemon.io/)
 - Code linting and styling based on [eslint](https://eslint.org/) and [prettier](https://prettier.io/)

## Installation

Use the package manager [yarn](https://classic.yarnpkg.com/en/) (preferred) or [npm](https://www.npmjs.com/) to install the
required dependencies.

Clone the repository
```bash
git clone https://github.com/Vedant1202/to-do-task-manager-adonis.git
cd to-do-task-manager-adonis
```

#### For backend setup

To generate private-public keys:

- On a Linux/Mac:
You can choose to use [ssh-keygen](https://www.ssh.com/ssh/keygen/).

- For all OS:
You can use an online key pair generator like [this](https://travistidwell.com/jsencrypt/demo/).

- After generating keys, name then as `public.key` and `private.key` and copy the files in `to-do-api/keys/`.
- For easy installation sample keys have been provided in `to-do-api/keys/`. Rename them as `public.key` and `private.key` respectively.

To install backend dependencies

- Using yarn
```bash
cd to-do-api
yarn install
```

- Using npm
```bash
cd to-do-api
npm install
```

#### To setup and configure database

- Install and configure MySQL database from [here](https://www.mysql.com/downloads/) (recommended although other databases could also be used)
- Copy the `to-do-api/.env.example` to `to-do-api/.env`
- Edit the database variables in `to-do-api/.env`
- Create a database in named `to-do`

#### For frontend setup

To install frontend dependencies

 - Using yarn

```bash
cd frontend
yarn install
```

 - Using npm

```bash
cd frontend
npm install
```

## Usage

To start backend API

 - Using yarn

```bash
cd to-do-api
yarn start
```

 - Using npm

```bash
cd to-do-api
npm start
```

 - API is live on `http://localhost:3333/`


To start frontend static server

 - Using yarn

```bash
cd frontend
yarn start
```

 - Using npm

```bash
cd frontend
npm start
```

 - Go to `http://localhost:3000/login`


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update documentation as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)