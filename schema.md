## `users`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`username  `      | string    | not null, indexed, unique
`email     `      | string    | not null, unique
`description `    | text      | brief description
`photo_id    `    | integer   | indexed, foreign key to photo table
`rank     `       | integer   | default 0
`password_digest` | string    | not null
`session_token`   | string    | not null, indexed, unique

---

## `moderators`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`user_id  `       | integer   | not null, indexed
`category_id   `  | integer   | not null, indexed
`question_id   `  | integer   | not null, indexed

---

## `votes`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`count  `         | integer   | default 0
`answer_id     `  | integer   | not null, indexed, unique
`question_id   `  | integer   | not null, indexed, unique

---
## `questions`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`user_id  `       | integer   | not null, indexed
`category_id   `  | integer   | not null, indexed
`title    `       | string    | not null
`body  `          | text      | the question

---

## `answers`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`user_id  `       | integer   | not null, indexed
`question_id   `  | integer   | not null, indexed, unique
`body  `          | text      | the answer

---

## `comments`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`user_id  `       | integer   | not null, indexed
`question_id   `  | integer   | indexed
`answer_id   `    | integer   | indexed
`body  `          | text      | the comment

---

## `code_snippets`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`answer_id  `     | integer   | indexed
`question_id   `  | integer   | not null, indexed
`body  `          | text      | the code

---

## `categories`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`name  `          | string    | not null, indexed
`moderator_id  `  | integer   | not null, indexed
`description  `   | text      | the category details

---

# `User Details`

## `user_jobs`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`user_id  `       | integer   | not null, indexed
`job_id   `       | integer   | indexed

---

## `user_badges`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`user_id  `       | integer   | not null, indexed
`job_id   `       | integer   | indexed

---

## `jobs`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`title  `         | string    | not null, indexed
`description   `  | text      |

---

## `badges`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`title  `         | string    | not null, indexed
`description   `  | text      |

---

## `user_tags`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`category_id  `   | integer   | not null, indexed
`user_id   `      | integer   | not null, indexed

---


# `Messaging`


## `thread_recipients`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`thread_id  `     | integer   | not null, indexed
`user_id   `      | integer   | not null, indexed

---

## `message_threads`
column name     | data type | details
----------------|-----------|-----------------------
`id `               | integer   | not null, primary key
`initial_poster_id` | integer   | not null, indexed
`last_update_time ` | string    |
`last_message_id`   | integer   | not null, indexed

---

## `messages`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`thread_id  `     | integer   | not null, indexed
`user_id   `      | integer   | not null, indexed
`body   `         | text      | not null

---
