# == Schema Information
#
# Table name: questions
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  category_id :integer
#  title       :string           not null
#  body        :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Question < ApplicationRecord
  validates :user_id, :title, presence: true
  validates :title, length: { minimum: 1 }

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  def self.in_bound(bounds)
    user_id = bounds[:user_id]
    lim = bounds[:limit]
    if user_id
      if lim
        self.where("user_id == ?", user_id).limit(lim)
      else
        self.where("user_id == ?", user_id)
      end
    elsif lim
      self.limit(lim)
    end
  end





end
