class Api::AnswerVotesController < ApplicationController

  def index
    @answer_id = params[:answer_id] || answer_params[:answer_id]

    @answer_sum = AnswerVote.where('answer_id = ?', @answer_id).sum(:vote)
    render :index
  end

  def create
    answer = AnswerVote.new(answer_params)
    if(answer.save)
      render :index
    else
      render json: @answer, status: :unprocessable_entity
    end
  end

  def destroy
    # not tracking individual answers on frontend just tracking who is making the request for change condition
    answer = AnswerVote.find_by_params(params)
    if answer
      @answer.destroy
      render :index
    end
  end

  def update
    answer = AnswerVote.find_by_params(params)
    if answer && answer.update_attributes(answer_params)
      render :index
    end
  end


  private

  def answer_params
    params.require(:answer_vote).permit(:user_id, :vote, :answer_id)
  end

end
