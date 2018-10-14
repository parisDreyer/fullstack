# Table name: questions
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  category_id :integer
#  title       :string           not null
#  body        :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null

class Api::QuestionsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def index
    @questions = bounds ? Question.in_bounds(bounds) : Question.all

    render :index
  end

  def create
    @question = current_user.questions.new(question_params)

    if @question.save
      render :show
    else
      render json: @question, status: :unprocessable_entity
    end
  end

  def show
    @question = Question.find(params[:id])
  end

  def update
    @question = current_user.questions.find(params[:question][:id])

    if @question && @question.update_attributes(question_params)
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy
    render :index
  end


  private

  def question_params
    params.require(:question).permit(:user_id, :category_id, :title, :body)
  end

  def bounds
    params[:bounds]
  end

end
