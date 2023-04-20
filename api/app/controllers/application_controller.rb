class ApplicationController < ActionController::API
    include ActionController::Cookies
    # protect_from_forgery with: :null_session
    def user 
        user = User.find_by(id: session[:uid])
    end

    def save_user(id)
        session[:uid] = id
    end 
    
    def authorize
        render json: { error: "Not authorized" }, status: 401 unless session.include? :uid
    end
end