class UsersController < ApplicationController
    # before_action :verify_auth, only: [:check_login_status]

    # def create
    #     user = User.create(user_params)
    #     if user.valid?
    #         token = encode(user.id, user.email, user.role)
    #         app_response(message:'Registration was successful', status:200, data:{user: user, token: token})
    #     else
    #         app_response(message:'failed', status:400, data:{info: 'Invalid credentials'})
    #     end
    # end

  

    # def login
        
    #     sql = "username = :username"
    #     user = User.where(sql, {username: user_params[:username]}).first

    #     if user && user.authenticate(user_params[:password])
    #         token = encode(user.id, user.email, user.role)
    #         app_response(message:'Login was successful', status:200, data:{user: user, token: token})
    #     else
    #         app_response(message:'failed', status: :unauthorized, data:{info: 'Invalid credentials'})
    #     end
    # end
    
    # # Logging out the user

    # def logout
    #     remove_user
    # end
    
    # def check_login_status
    #     app_response(message:'You are logged in', status: :ok)
    # end
    


          rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response


     # GET /users
    def index
        #get users
        render json: User.all, status: :ok
    end 
    
    

     # keep user login
     def show

        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end


    #putch
    def update
        user = find_user
        if user.valid?
            user.update(user_params)
            render json: user
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

  
    #post user
    def create
        user = User.create!(user_params)
        if user.valid?
          render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end


     # keep user login
    #  def login
    #             sql = "username = :username OR email = :email"
    #             user = User.where(sql, { username: user_params[:username], email: user_params[:email] }).first
    #             if user&.authenticate(user_params[:password])
                 
    #                 app_response(message: 'Login was successful', status: :ok, data: {user: user})
    #             else
    #                 app_response(message: 'Invalid username/email or password', status: :unauthorized)
    #             end
    #         end
    def login
        sql = "username = :username OR email = :email"
        user = User.where(sql, { username: user_params[:username], email: user_params[:email] }).first
        if user&.authenticate(user_params[:password])
          app_response(message: 'Login was successful', status: :ok, data: { user: user, role: user.role })
        else
          app_response(message: 'Invalid username/email or password', status: :unauthorized)
        end
      end
      
      
        

   # DELETE
   def destroy
    # check whether the task exists
    user = User.find_by(id:params[:id])
   
   #  delete the task
   if user
       user.destroy
       head :no_content
   #  return a not found user
   else 
       render json: {error: 'User not found'}, status: not_found
   end
   end


    
    private


    def find_user
        User.find(params[:id])
    end

    def record_not_found_response(exception)
        render json: { error: "User not found" }, status: :not_found
    end

    def user_params
        params[:role] ||= "normal_user"
        params.permit(:email, :username, :password, :role, :phone_number)
    end

end

