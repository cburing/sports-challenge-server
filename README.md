## Prerequisites

## Setup (before first run)

go to your project root folder via command line
```
cd path/to/workspace/sports-challenge-server
```

**install node dependencies**

```
npm install
```

**set up your database**

* create a new directory where your database will be stored (it's a good idea to separate data and business logic - the data directory should be on a different place than your app)
* start the database server
```
mongod --dbpath relative/path/to/database
```

## running

start the web server

```
node server.js
```
