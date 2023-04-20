class UsersController < ApplicationController
    def create
        user = User.create(userParams)
        if user.valid?
            save_user(user.id)
            app_response(message: 'Registration was successful', status: :created, data: user)
        else
            app_response(message: 'Something went wrong during registration', status: :unprocessable_entity, data: user.errors)
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
      
    private

    def userParams
        params.require(:user).permit(:username,:email,:password, :role, :phone_number)
    end

end
