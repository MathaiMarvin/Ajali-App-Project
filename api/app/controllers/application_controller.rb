class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session
    rescue_from StandardError, with: :standard_error
    def app_response(message: 'success', status:200, data:nil)
        render json: {
            message: message,
            status: status,
            data: data
        }
    end
    def user 
        user = User.find_by(id: session[:user_id])
    end

    def save_user(id)
        session[:uid] = id
    end 
    
    def authorize
        render json: { error: "Not authorized" }, status: 401 unless session.include? :user_id
    end
    # rescue all common errors
    def standard_error(exception)
        app_response(message: 'failed', data: { info: exception.message }, status: :unprocessable_entity)
    end
end
