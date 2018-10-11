```js
{
	entities: {

		questions: {
			1: {
				id: 1,
				categoryId: 7,
				title: "Who wrote Jane Eyre"
				body: "I can't remember... does anyone know the answer?"
			}
		},
		answers: {
			1: {
				id: 1,
				categoryId: 5,
				questionId: 4,
				userId: 1,
				body: "Einstein wrote particle physique in 1922"
			}
		},
		comments: {
			5: {
				body: "this is a correctly formatted comment"
			},
		},
		votes: {
			30: {
				id: 30,
				count: 2,
				userId: 10,
				answerId: 1,
				questionId: null
			}
			37: {
				id: 37,
				count: -1,
				userId: 10,
				answerId: null,
				questionId: 1
			}
		},
		codeSnippets: {
			4: {
				answer_id: null,
				question_id: 1,
				user_id: 1,
				body: `x + z = b; xzb!;`
			}
		},
		userBadges: {
			15: {
				id: 15,
				userId: 1,
				badgeId: 4
			}
		},
		userJobs: {
			12: {
				id: 12,
				userId: 1,
				badgeId: 136
			}
		},
		userTags: {
			17: {
				id: 17,
				categoryId: 5,
				userId: 1
			}
		},
	},
	ui: {
		loading: true
	},
	errors: {
		userErrors: ["error in answer field. see answer errors"],
		sessionErrors: [],
		questionErrors: ["cannot answer own question"],
		commentErrors: [],
		answerErrors: ["cannot answer own question. Please post as comment instead"]
	},
	session: { userId: 34 }
}
```
