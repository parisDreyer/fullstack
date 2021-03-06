# `README`


## Live
[Stack Inferno Live](https://stack-infierno.herokuapp.com/#/)


## Technologies

* React
* Redux
* Rails
* Postgresql
* Babel
* Webpack
* HTML
* CSS
* Ruby
* Javascript






## `Setup`
- `This README documents the steps necessary to get the
application up and running.`
- `Welcome to Stack Inferno. Stack Inferno is a clone of StackOverflow that uses text from 14th Century Italian Epic Poet Dante Alighieri's Divine Comedy as sample data.`

- Main Page
![Site Index Page](/main_site.png?raw=true "Main Site Page")


- `git clone the repo with the url:` https://github.com/parisDreyer/fullstack.git
- `gem install`  
- `bundle install`  
- `npm install`  
- `bundle exec rails db:setup` -to create database files and seed the database
- `npm run start`

The project should then be available at the address `localhost:3000` in your browser


## `Dependencies`

* `Ruby version 2.5.1`, `NodeJS`, and `PostgreSQL version 10` installed on your machine

* Requires Install of `NodeJS` for node-package-manager (`npm`)

* The frontend is compiled with `webpack` that generates a `dist/bundle.js` file from the entrypoint file `./frontend/stack_inferno.jsx`.  
  - The routes for this webpack configuration can be fount in the `webpack.config.js` file


## `Functionality`

* Users can `Search` for `questions` by `title`, `Ask Questions`, `Answer Questions`, and `Vote` on `Questions` and `Answers`.

- Ask Questions and Post Answers
![Ask Questions and Answer Questions](/QandA.png?raw=true "Question And Answer Page")

- Edit Answers
![Edit Answer Form](/editAnswer.png?raw=true "Edit Answer Form")
