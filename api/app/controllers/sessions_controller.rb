class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        if session[:user_id].present?
            render json: { user_id: session[:user_id] }
          else
            render json: { error: 'Invalid session' }, status: :unauthorized
          end

        # user = User.find_by(email: params[:email])
        # if user && user.valid_password?(params[:password])
        #   sign_in(user)
        #   render json: { user_id: user.id }, status: :ok
        # else
        #   render json: { error: 'Invalid email or password' }, status: :unprocessable_entity
        # end
      end
  
        # user = User.find_by(email: params[:email])
        # session[:user_id] = user.id
        # if session[:user_id].present?
        #     render json: { user_id: session[:user_id] }
        #   else
        #     render json: { error: 'Invalid session' }, status: :unauthorized
        #   end
   

    def destroy
        session.delete :user_id
        head :no_content
      end

      def check
         if session[:user_id].present?
        # if current_user
          render json: { isLoggedIn: true }
        else
          render json: { isLoggedIn: false }
        end
      
        # if session[:user_id].present?
        #   render json: { user_id: session[:user_id] }
        # else
        #   render json: { error: 'Invalid session' }, status: :unauthorized
        # end
      end
      
end
