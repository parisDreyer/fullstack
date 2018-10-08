# `Backend Routes`  
## `HTML`  
`GET / StaticPagesController#root`

## `API Endpoints`  

## `users`  
`GET /api/users/:id` - `returns the user information of asked questions, answered questions, and comments for a given user_id`  
`POST /api/users` - `sign up`  
`PATCH /api/users/:id` - `edit user description or profile picture`  
`DELETE /api/users/:id` - `delete an account`

## `session`  
`POST /api/session` - `log in`  

`DELETE /api/session` - `log out`  

## `questions`  
`NB: Once finished with basic site will optionally nest questions in a category route`  
`GET /api/questions` - `returns relevant questions (filtered by data/params)`  
`GET /api/questions/:id` - `returns question`  
`POST /api/questions` - `creates a question`  
`PATCH /api/questions/:id` - `edit a question`  
`DELETE /api/questions/:id` - `remove a question`  

## `answers`  
`GET /api/questions/question_id/answers` - `returns relevant answers (filtered by data/params)`  
`GET /api/questions/:question_id/answers/:id` - `returns an answer`  
`POST /api/questions/:question_id/answers` - `creates an answer`  
`PATCH /api/questions/:question_id/answers/:id` - `edit an answer`  
`DELETE /api/questions/:question_id/answers/:id` - `remove an answer`  

## `comments`  
`GET /api/questions/question_id/answers/:answer_id/comments/` - `returns relevant comments (filtered by data/params)`  
`GET /api/questions/:question_id/answers/:answer_id/comments/:id` - `returns a comment`  
`POST /api/questions/:question_id/answers/:answer_id/comments/` - `creates a comment`  
`PATCH /api/questions/:question_id/answers/:answer_id/comments/:id` - `edit a comment`  
`DELETE /api/questions/:question_id/answers/:answer_id/comments/:id` - `remove a comment`

`GET /api/questions/question_id/comments/` - `returns relevant comments (filtered by data/params)`  
`GET /api/questions/:question_id/comments/:id` - `returns a comment`  
`POST /api/questions/:question_id/comments/` - `creates a comment`  
`PATCH /api/questions/:question_id/comments/:id` - `edit a comment`  
`DELETE /api/questions/:question_id/comments/:id` - `remove a comment`


## `votes`  
`POST /api/questions/:question_id/votes` - `upvote a questions`  
`DELETE /api/questions/:question_id/votes` - `downvote a question`  
`POST /api/questions/:answer_id/votes` - `upvote an answer`  
`DELETE /api/questions/:answer_id/votes` - `downvote a answer`


## `code_snippets`  
`GET /api/questions/question_id/answers/:answer_id/code_snippets/` - `returns relevant code_snippets (filtered by data/params)`  
`GET /api/questions/:question_id/answers/:answer_id/code_snippets/:id` - `returns a code_snippet`  
`POST /api/questions/:question_id/answers/:answer_id/code_snippets/` - `creates a code_snippet`  
`PATCH /api/questions/:question_id/answers/:answer_id/code_snippets/:id` - `edit a code_snippet`  
`DELETE /api/questions/:question_id/answers/:answer_id/code_snippets/:id` - `remove a code_snippet`

`GET /api/questions/question_id/code_snippets/` - `returns relevant code_snippets (filtered by data/params)`  
`GET /api/questions/:question_id/code_snippets/:id` - `returns a code_snippet`  
`POST /api/questions/:question_id/code_snippets/` - `creates a code_snippet`  
`PATCH /api/questions/:question_id/code_snippets/:id` - `edit a code_snippet`  
`DELETE /api/questions/:question_id/code_snippets/:id` - `remove a code_snippet`
