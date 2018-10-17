class CreateAnswerVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :answer_votes do |t|
      t.integer :answer_id, null: false
      t.integer :user_id, null: false
      t.integer :vote, null: false
    end
    add_index :answer_votes, :answer_id
    add_index :answer_votes, :user_id
  end
end
