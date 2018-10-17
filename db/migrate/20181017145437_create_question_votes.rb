class CreateQuestionVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :question_votes do |t|
      t.integer :question_id, null: false
      t.integer :user_id, null: false
      t.integer :vote, null: false
    end
    add_index :question_votes, :question_id
    add_index :question_votes, :user_id
  end
end
