class Api::QuestionVotesController < ApplicationController

  def index
    @question_id = params[:question_id] || question_vote_params[:question_id]

    @question_sum = QuestionVote.where('question_id = ?', @question_id).sum(:vote)
    render :index
  end

  def create
    question = QuestionVote.find_by_params(params).first
    if question
      update(question)
    else
      @question = QuestionVote.new(question_vote_params)
      if @question.save
        render :index
      else
        render json: @question, status: :unprocessable_entity
      end
    end
  end

  def destroy
    # not tracking individual questions on frontend just tracking who is making the request for change condition
    @question = QuestionVote.find_by_params(params)
    if @question
      @question.destroy
      render :index
    end
  end

  def update(question)
    question ||= QuestionVote.find_by_params(params)
    update_params = question_vote_params
    if update_params[:vote]
      update_params[:vote] = QuestionVote.vote_in_range(
        update_params[:vote].to_i + question[:vote].to_i)
    end
    if question && question.update_attributes(update_params)
      render :index
    end
  end


  private

  def question_vote_params
    params.require(:question_vote).permit(:user_id, :vote, :question_id)
  end

end
