# == Schema Information
#
# Table name: answers
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  question_id :integer          not null
#  body        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Answer < ApplicationRecord

  validates :user_id, :question_id, :body, presence: true
  validates :body, length: { minimum: 1}

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :question,
  primary_key: :id,
  foreign_key: :question_id,
  class_name: :Question

  def self.in_bounds(bounds)
    user_id = bounds[:user_id]
    question_id = bounds[:question_id]
    if user_id
      self.where("user_id == ?", user_id).order(:updated_at)
    elsif question_id
      self.where("question_id == ?", question_id).order(:updated_at)
    else
      "incomplete arguments error in Answer request"
    end
  end

end
