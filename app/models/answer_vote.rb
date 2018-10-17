# == Schema Information
#
# Table name: answer_votes
#
#  id        :bigint(8)        not null, primary key
#  answer_id :integer          not null
#  user_id   :integer          not null
#  vote      :integer          not null
#

class AnswerVote < ApplicationRecord
  validates :answer_id, :user_id, presence: true
  validates :vote, inclusion: -1..1

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :answer,
  primary_key: :id,
  foreign_key: :answer_id,
  class_name: :Answer
end
