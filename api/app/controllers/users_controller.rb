class UsersController < ApplicationController
    before_action :verify_auth, only: [:check_login_status]

    def create
        user = User.create(user_params)
        if user.valid?
            token = encode(user.id, user.email, user.role)
            app_response(message:'Registration was successful', status:200, data:{user: user, token: token})
        else
            app_response(message:'failed', status:400, data:{info: 'Invalid credentials'})
        end
    end

  

    def login
        
        sql = "username = :username"
        user = User.where(sql, {username: user_params[:username]}).first

        if user && user.authenticate(user_params[:password])
            token = encode(user.id, user.email, user.role)
            app_response(message:'Login was successful', status:200, data:{user: user, token: token})
        else
            app_response(message:'failed', status: :unauthorized, data:{info: 'Invalid credentials'})
        end
    end
    
    # Logging out the user

    def logout
        remove_user
    end
    
    def check_login_status
        app_response(message:'You are logged in', status: :ok)
    end
    
      
    private

    def user_params
        params[:role] ||= "normal_user"
        params.permit(:email, :username, :password, :role, :phone_number)
    end

end

