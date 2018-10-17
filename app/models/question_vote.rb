# == Schema Information
#
# Table name: question_votes
#
#  id          :bigint(8)        not null, primary key
#  question_id :integer          not null
#  user_id     :integer          not null
#  vote        :integer          not null
#

class QuestionVote < ApplicationRecord
  validates :question_id, :user_id, presence: true
  validates :vote, inclusion => -1..1


  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :question,
  primary_key: :id,
  foreign_key: :question_id,
  class_name: :Question
end
