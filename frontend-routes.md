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
`/`  
`Splash`  
`/login`  
`SessionForm`  
`/signup`  
`SessionForm`  

#### Questions
`QuestionIndex`  
`QuestionIndexItem`  
`/users/:userId/questions/`  
`ProfileComponent`  
`QuestionIndex`  
`QuestionIndexItem`  
`/questions/new`  
`QuestionForm`  
`/questions/:questionId`  
`QuestionShow`  
`/questions/:questionId/edit`  
`QuestionForm`  

#### Comments
`CommentsIndex`  
`CommentsIndexItem`  
`/users/:userId/questions`  
`ProfileComponent`  
`CommentsIndex`  
`CommentsIndexItem`  
`questions/:questionId/comments/new`  
`CommentsForm`  
`questions/:questionId/comments/:commentsId`  
`CommentsShow`  
`questions/:questionId/comments/:commentsId/edit`  
`CommentsForm`  
