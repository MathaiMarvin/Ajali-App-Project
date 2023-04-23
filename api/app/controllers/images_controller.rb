
class ImagesController < ApplicationController
    def post_params
        params.require(:post).permit(:image)
    end
end
