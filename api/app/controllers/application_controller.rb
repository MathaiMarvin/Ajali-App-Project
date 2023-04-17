class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session
    def app_response(message: 'success', status: 200, data: nil)
        render json: {
            message: message,
            data: data
        }, status: status
    end
end
