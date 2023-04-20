class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from StandardError, with: :standard_error
    # protect_from_forgery with: :null_session
    def app_response(message: 'success', status: 200, data: nil)
        render json: {
            message: message,
            data: data
        }, status: status
    end

    def user 
        user = User.find_by(id: session[:uid])
    end

    def save_user(id)
        session[:uid] = id
    end 
    
    def authorize
        render json: { error: "Not authorized" }, status: 401 unless session.include? :uid
    end
    # rescue all common errors
    def standard_error(exception)
        app_response(message: 'failed', data: { info: exception.message }, status: :unprocessable_entity)
    end
end