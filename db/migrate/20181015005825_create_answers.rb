class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.integer :user_id, null: false
      t.integer :question_id, null: false
      t.text :body, null: false

      t.timestamps
    end
    add_index :answers, :question_id
    add_index :answers, :user_id
  end
end
