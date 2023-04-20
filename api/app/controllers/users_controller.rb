class UsersController < ApplicationController
    def create
        user = User.create!(userParams)
        if user
            save_user(user.id)
            render json: user, status: :created
        else
            render json: {error: user.error}, status: :unprocessible_entity
        end
    end

    def login
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: {message: "WELCOME"}, status: :ok
        else
            render json: { error: "UNAUTHORIZED" }, status: :not_found
        end
    end

    def userParams
        params.permit(:username,:email,:password,:phone_number)
    end

end
