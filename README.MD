# Jobster API

Available in https://jobster-mhs.herokuapp.com/landing
User: testUser@test.com
Password: secret

#### Starter

The starter is a copy of jobs-api final project, just with additional data.

#### Setup

- navigate to 06.5-jobster-api/starter
- install dependencies

```sh
npm install
```

- create .env and provide correct values
- you can copy from previous project (just change the DB name)

.env

```js
MONGO_URI=
JWT_SECRET=
JWT_LIFETIME=
```

- start the project

```sh
npm start
```
```Pre Requisite, install heroku command line
```https://www.heroku.com
How to public in Heroku
```Login in heroku
# heroku login
```Create  app in heroku
# heroku create <NAME_APP>
```Deploy app in Heroku
# git push heroku

```Configure Heroku Variables
MONGO_URI
JWT_SECRET
PORT
