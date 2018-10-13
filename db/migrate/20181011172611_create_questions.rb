class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.integer :user_id, null: false
      t.integer :category_id
      t.string :title, null: false
      t.text :body

      t.timestamps
    end

    add_index :questions, :user_id
    add_index :questions, :category_id
    add_index :questions, :title, unique: true

  end
end
