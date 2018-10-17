# == Schema Information
#
# Table name: question_votes
#
#  id          :bigint(8)        not null, primary key
#  question_id :integer          not null
#  user_id     :integer          not null
#  vote        :integer          not null
#

require 'test_helper'

class QuestionVoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
