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

  def self.find_by_params(params)
    return nil unless params[:answer_vote]
    user_id = params[:answer_vote][:user_id].to_i
    answer_id = params[:answer_vote][:answer_id].to_i
    self.where("answer_votes.user_id = ? AND answer_votes.answer_id = ?", user_id, answer_id)
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
