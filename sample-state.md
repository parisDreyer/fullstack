```js
{
	entities: {
		
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
	      id: 1,
	      category_id: 5,
	      question_id: 4,
	      user_id: 1,
	      body: "Einstein wrote particle physique in 1922"
	    }
	  },
		comments: {

		},
		votes: {
			30: {
				id: 30,
				count: 2,
				user_id: 10,
				answer_id: 1,
				question_id: null
			}
			37: {
				id: 37,
				count: -1,
				user_id: 10,
				answer_id: null,
				question_id: 1
			}
		},
		code_snippets: {
			4: {
				answer_id: null,
				question_id: 1,
				user_id: 1,
				body: `x + z = b; xzb!;`
			}
		},
		user_badges: {
			15: {
				id: 15,
				user_id: 1,
				badge_id: 4
			}
		},
		user_jobs: {
			12: {
				id: 12,
				user_id: 1,
				badge_id: 136
			}
		},
		user_tags: {
			17: {
				id: 17,
				category_id: 5,
				user_id: 1
			}
		},
		errors: {
			userErrors: [],
			sessionErrors: [],
			questionErrors: [],
	    commentErrors: [],
	    answerErrors: ["cannot answer own question. Please post as comment instead"]
		}
	}
}
```
