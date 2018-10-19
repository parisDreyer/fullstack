# README

This README would normally document whatever steps are necessary to get the
application up and running.

## `Setup`

git clone the repo with the url:  `https://github.com/parisDreyer/fullstack.git`  
`gem install`  
`bundle install`  
`npm install`  
`bundle exec rails db:setup` -to create database files and seed the database
`npm run start`

The project should then be available at the address `localhost:3000` in your browser


## `Dependencies`

* `Ruby version 5.1`, `NodeJS`, and `PostgreSQL version 10` installed on your machine

* Requires Install of NodeJS for node-package-manager

* The frontend is compiled with webpack that generates a `dist/bundle.js` file from the entrypoint file `./frontend/stack_inferno.jsx`.  
  - The routes for this webpack configuration can be fount in the `webpack.config.js` file


## Functionality

* Services (job queues, cache servers, search engines, etc.)
