class UsersController < ApplicationController

    def create
        user = User.create(userParams)
        if user
            save_user(user.id)
            render json: user, status: :created
        else
            render json: {error: user.error}, status: :unprocessible_entity
        end
    end

  

    def login
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: {message: "WELCOME"}, status: :ok
        else
            render json: { error: "UNAUTHORIZED" }, status: :not_found
        end
    end
      
    private

    def userParams
        params[:role] ||= "normal_user"
        params.permit(:username,:email,:password, :role, :phone_number)
    end

end

