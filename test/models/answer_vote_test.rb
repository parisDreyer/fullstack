# == Schema Information
#
# Table name: answer_votes
#
#  id        :bigint(8)        not null, primary key
#  answer_id :integer          not null
#  user_id   :integer          not null
#  vote      :integer          not null
#

require 'test_helper'

class AnswerVoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
