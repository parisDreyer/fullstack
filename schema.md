# `Database Schema`
_____________________________________________
## `users`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`username  `      | string    | not null, indexed, unique
`email     `      | string    | not null, unique
`description `    | text      | brief description
`photo_id    `    | integer   | indexed, foreign key
`rank     `       | integer   | default 0
`password_digest` | string    | not null
`session_token`   | string    | not null, indexed, unique
`timestamps     ` | timestamp | not null

- `index on username, unique: true`
- `index on session_token, unique: true`
- `index on email, unique: true`
---

## `moderators`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`user_id  `       | integer   | not null, indexed
`category_id   `  | integer   | optional, indexed
`question_id   `  | integer   | not null, indexed
`timestamps     ` | timestamp | not null

- `user_id references the user table`
- `index on user_id, not null`
- `category_id references the categories table`
- `index on category_id`
- `question_id references the questions table`
- `index on question_id, not null`

---

## `votes`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`count  `         | integer   | default 0
`answer_id     `  | integer   | not null, indexed
`question_id   `  | integer   | indexed
`user_id     `    | integer   | indexed
`timestamps     ` | timestamp | not null

- `enforces uniqueness on [:user_id, :question_id], or [:user_id, :answer_id]`
- `user_id references the user table`
- `index on user_id, not null`
- `question_id references the questions table`
- `index on question_id, not null`
- `answer_id references the answers table`
- `index on answer_id, not null`
---
## `questions`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`user_id  `       | integer   | not null, indexed
`category_id   `  | integer   | indexed
`title    `       | string    | not null
`body  `          | text      | the question
`timestamps     ` | timestamp | not null

- `user_id references the user table`
- `index on user_id, not null`
- `category_id references the categories table`
- `index on category_id`
---

## `answers`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`user_id  `       | integer   | not null, indexed
`question_id   `  | integer   | not null, indexed, unique
`body  `          | text      | the answer
`timestamps     ` | timestamp | not null

- `user_id references the user table`
- `index on user_id, not null`
- `question_id references the questions table`
- `index on question_id, not null`
---

## `comments`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`user_id  `       | integer   | not null, indexed
`question_id   `  | integer   | indexed
`answer_id   `    | integer   | indexed
`body  `          | text      | the comment
`timestamps     ` | timestamp | not null

- `user_id references the user table`
- `index on user_id, not null`
- `question_id references the questions table`
- `index on question_id, not null`
- `answer_id references the answers table`
- `index on answer_id, not null`
---

## `code_snippets`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`answer_id  `     | integer   | indexed
`question_id   `  | integer   | indexed
`user_id   `      | integer   | not null, indexed
`body  `          | text      | not null, the code
`timestamps     ` | timestamp | not null

- `user_id references the user table`
- `index on user_id, not null`
- `question_id references the questions table`
- `index on question_id, not null`
---

## `categories`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`name  `          | string    | not null, indexed
`moderator_id  `  | integer   | not null, indexed
`description  `   | text      | the category details
`timestamps     ` | timestamp | not null

- `moderator_id references the user table`
- `index on user_id, not null`
---

# `User Details`

## `user_jobs`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`user_id  `       | integer   | not null, indexed
`job_id   `       | integer   | indexed
`timestamps     ` | timestamp | not null

- `user_id references the user table`
- `index on user_id, not null`
- `job_id references the jobs table`
- `index on job_id, not null`
---

## `user_badges`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`user_id  `       | integer   | not null, indexed
`badge_id   `     | integer   | indexed
`timestamps     ` | timestamp | not null

- `user_id references the user table`
- `index on user_id, not null`
- `badge_id references the badges table`
- `index on badge_id, not null`
---

## `jobs`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`title  `         | string    | not null, indexed
`description   `  | text      |
`timestamps     ` | timestamp | not null

---

## `badges`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`title  `         | string    | not null, indexed
`description   `  | text      |
`timestamps     ` | timestamp | not null

---

## `user_tags`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`category_id  `   | integer   | indexed
`user_id   `      | integer   | not null, indexed
`timestamps     ` | timestamp | not null

- `user_id references the users table`
- `index on user_id, not null`
- `category_id references the categories table`
- `index on category_id`
---


# `Messaging`


## `thread_recipients`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`thread_id  `     | integer   | not null, indexed
`user_id   `      | integer   | not null, indexed
`timestamps     ` | timestamp | not null

- `user_id references the user table`
- `index on user_id, not null`
- `thread_id references the threads table`
- `index on thread_id, not null`
---

## `message_threads`
column name     | data type | details
----------------|-----------|-----------------------
`id `               | integer   | not null, primary key
`initial_poster_id` | integer   | not null, indexed
`last_update_time ` | string    |
`last_message_id`   | integer   | not null, indexed
`timestamps     ` | timestamp | not null

---

## `messages`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`thread_id  `     | integer   | not null, indexed
`user_id   `      | integer   | not null, indexed
`body   `         | text      | not null
`timestamps     ` | timestamp | not null

- `user_id references the user table`
- `index on user_id, not null`
- `thread_id references the threads table`
- `index on thread_id, not null`
---
