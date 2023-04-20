class UsersController < ApplicationController
    protect_from_forgery with: :null_session
    def index 
        users = User.all
        render json: users, status: :ok
    end

    def create
        user = User.create(userParams)
        if user.valid?
            token = encode(user.id, user.email, user.role)
            app_response(message:'Registration was successful', status:200, data:{user: user, token: token})
        else
            app_response(message:'failed', status:400, data:{info: 'Invalid credentials'})
        end
    end

    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user, status: :ok
        else
            render json: {message: "user not found"},status: :not_found
        end

    end


    def login
        sql = "username = :username OR email = :email"
        user = User.where(sql, {username: userParams[:username], email: userParams[:email]}).first
        if user && user.authenticate(userParams[:password])
            token = encode(user.id, user.email, user.role)
            app_response(message:'Login was successful', status:200, data:{user: user, token: token})
        else
            app_response(message:'failed', status:400, data:{info: 'Invalid credentials'})
        end
    end

    def userParams
        params[:role] || "normal_user"
        params.permit(:email, :username, :password, :role, :phone_number)
    end

end
