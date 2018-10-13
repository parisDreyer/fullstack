# if @user
#   json.extract! @user, :username, :email, :description
# end


json.partial! "api/users/user", user: @user
