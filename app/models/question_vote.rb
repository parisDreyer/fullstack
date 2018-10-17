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
  validates :vote, inclusion: -1..1


  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :question,
  primary_key: :id,
  foreign_key: :question_id,
  class_name: :Question


  def self.find_by_params(params)
    return nil unless params[:question_vote]
    user_id = params[:question_vote][:user_id].to_i
    question_id = params[:question_vote][:question_id].to_i
    self.where("question_votes.user_id = ? AND question_votes.question_id = ?", user_id, question_id)
  end

  def self.vote_in_range(vote)
    vote = vote.to_i
    if vote < -1
      vote = -1
    elsif vote > 1
      vote = 1
    end
    vote
  end
end
