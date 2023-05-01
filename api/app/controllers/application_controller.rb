class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from StandardError, with: :standard_error
    
    def app_response(message: 'success', status: 200, data: nil)
        render json: {
            message: message,
            data: data
        }, status: status
    end

            # store user id in session
            def save_user(id)
                session[:user_id] = id
                session[:expiry] = 6.hours.from_now
            end
        
            # delete user id in session
            def remove_user
                session.delete(:user_id)
                session[:expiry] = Time.now
            end
        
            # check for session expiry
            def session_expired?
                session[:expiry] ||= Time.now
                time_diff = (Time.parse(session[:expiry]) - Time.now).to_i
                unless time_diff > 0
                    app_response(message: 'failed', status: 401, data: { info: 'Your session has expired. Please login again to continue' })
                end
            end

                    # # get logged in user
        def user
            User.find(@user_id) 
        end
    
        #save user's id
        # def save_user_id(token)
        #     @uid = decode(token)[0]["data"]["uid"].to_i
        # end
    
        # get logged in user (session)
        def user_session
            user_id = session[:user_id]
            puts "session[:user_id] = #{user_id.inspect}"
            User.find(user_id.to_i) 
        end

    # rescue all common errors
    def standard_error(exception)
        app_response(message: 'failed', data: { info: exception.message }, status: :unprocessable_entity)
    end
end

