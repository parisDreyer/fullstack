class Api::AnswerVotesController < ApplicationController

  def index
    @answer_sum = Answer.where('answer_id = ?', answer.answer_id).sum(:vote)
    render :index
  end

  def create
    answer = Answer.new(answer_params)
    if(answer.save)
      render :index
    else
      render json: @answer, status: :unprocessable_entity
    end
  end

  def destroy
    # not tracking individual answers on frontend just tracking who is making the request for change condition
    answer = Answer.find_by(user_id: params[:answer][:user_id])
    if answer
      @answer.destroy
      render :index
    end
  end

  def update
    answer = Answer.find_by(user_id: params[:answer][:user_id])
    if answer && answer.update_attributes(answer_params)
      render :index
    end
  end


  private

  def answer_params
    params.require(:answer_vote).permit(:user_id, :vote)
  end

end
