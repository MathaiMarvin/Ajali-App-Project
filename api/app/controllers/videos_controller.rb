class VideosController < ApplicationController
end
class VideosController < ApplicationController
    def video_params
        params.require(:video).permit(:video)
    end
      
end
