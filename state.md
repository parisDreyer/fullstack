```js
{
	entities: {
		users: {},
		posts: {}
	},
	session: {
		currentUser: 1
	},
  questions: {
    1: {
      id: 1,
      category_id: 7,
      title: "Who wrote Jane Eyre"
      body: "I can't remember... does anyone know the answer?"
    }
  },
  answers: {
    1: {
      id: 2,
      category_id: 5,
      question_id: 4,
      user_id: 1,
      body: "Einstein wrote particle physique in 1922"
    }
  },
	errors: {
		userErrors: [],
		sessionErrors: [],
		questionErrors: [],
    commentErrors: [],
    answerErrors: []
	}
}
```
