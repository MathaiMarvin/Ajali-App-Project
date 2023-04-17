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
    # Defining encoding action for JSON token (hashed string)
    # Hash data into web token
    def encode(uid, email, role)
        # Everything stored should be in property called data we also need secret key to decode and we set it ourselves
        payload = {
            data: {
                uid: uid,
                email: email,
                role: role
            },
            exp: (48.hours.from_now).to_i
        }
        begin
        JWT.encode(payload, ENV['crb_key'], 'HS256')
        rescue JWT::EncodeError => e
            app_response(message:'failed', status:400, data:{info: 'Something went wrong please try again'})
        end
    end
    # The environment variable is stored on the os as opposed to the code
    # DEcoding to get back values
    # UNhashing token
    def decode(token)
        # begin
            puts "THis is lit"
            puts ENV['crb_key'] # Output the value of the crb_key environment variable
            JWT.decode(token, ENV['crb_key'], true, { algorithm: 'HS256' })
        # Rescuing if anything goes wrong
        # rescue JWT::DecodeError => e
        #     app_response(message:'failed', status:401, data:{info: 'Your Session has expired Kindly Login to continue'})
        # end
    end
    # Token is usually placed in a header called authorization
    def verify_auth
        # get headers (authentication)
        auth_headers = request.headers['Authorization']
        # check if headers is present
        if !auth_headers
            app_response(message:'failed', status:401, data:{info: 'Your request is not authorized'})
        else
            # get token from headers
            token = auth_headers.split(' ')[1]
            save_user_id(token)
            # render json: {
            #     data: decode(token)
            # }
        end
    end
        # save user's id
     def save_user_id(token)
         @uid = decode(token)[0]["data"]["uid"].to_i
     end
     #Logging out a user
    def remove_user
        # get token from headers
        token = request.headers['Authorization'].split(' ').last
        # add token to blacklist
        if Blacklist.exists?(token: token)
          render json: { message: 'failed', status: 401, data: { info: 'Invalid token' } }
        else
          Blacklist.create(token: token)
          render json: { message: 'success', status: 200, data: { info: 'Logged out successfully' } }
        end
    end
    # Check if token is blacklisted do to logout
     def check_blacklist
        # Get the token from the request headers
        auth_headers = request.headers['Authorization']
        token = auth_headers.split(' ').last
        # Check the blacklist for the token
        if Blacklist.exists?(token: token)
          render json: { message: "Invalid token." }, status: :unauthorized
        end
      end
     # Finding the user that is logged in using uid
     def user
        User.find(@uid)
     end
    # rescue all common errors
    def standard_error(exception)
        app_response(message: 'failed', data: { info: exception.message }, status: :unprocessable_entity)
    end
end
