# `Frontend Routes`  

________________________________________________
`Our components are organized as follows:`  

`Root`  
- `App`  
- `NavBar`  
- `(main component goes here)`  
- `Footer`  

__________________________________________________________
`The following routes, defined in App, will render components between NavBar and Footer.`  

#### Main
- `/`  
  - `Splash`  
- `/login`  
  - `SessionForm`  
- `/signup`  
  - `SessionForm`

#### `User`
- `/users/:userId`
  - `ProfileComponent`
  - `QuestionsIndex`
  - `CommentsIndex`

#### Questions
- `/questions`
  - `QuestionsIndex`  
    - `QuestionsIndexItem`  
  - `CreateQuestionForm`
- `/questions/:questionId`
  - `QuestionShow`
  - `CommentsIndex`
      - `CommentsIndexItem`
      - `CreateCommentsForm`
      - `/questions/:questionId/comments/:commentId/edit`
        - `EditCommentsForm`
- `/questions/:questionId/edit`
  - `EditQuestionForm`
