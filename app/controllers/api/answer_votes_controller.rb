class Api::AnswerVotesController < ApplicationController

  def index
    @answer_id = params[:answer_id] || answer_vote_params[:answer_id]

    @answer_sum = AnswerVote.where('answer_id = ?', @answer_id).sum(:vote)
    render :index
  end

  def create
    answer = AnswerVote.find_by_params(params).first
    if answer
      update(answer)
    else
      @answer = AnswerVote.new(answer_vote_params)
      if @answer.save
        render :index
      else
        render json: @answer, status: :unprocessable_entity
      end
    end
  end

  def destroy
    # not tracking individual answers on frontend just tracking who is making the request for change condition
    @answer = AnswerVote.find_by_params(params)
    if @answer
      @answer.destroy
      render :index
    end
  end

  def update(answer)
    answer ||= AnswerVote.find_by_params(params)
    update_params = answer_vote_params
    if update_params[:vote]
      update_params[:vote] = AnswerVote.vote_in_range(
        update_params[:vote].to_i + answer[:vote].to_i)
    end
    if answer && answer.update_attributes(update_params)
      render :index
    end
  end


  private

  def answer_vote_params

    params.require(:answer_vote).permit(:user_id, :vote, :answer_id)
  end

end
