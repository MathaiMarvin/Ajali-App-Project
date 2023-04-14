class VideosController < ApplicationController
    def video_params
        params.require(:video).permit(:video_file)
    end
      
end
