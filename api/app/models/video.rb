class Video < ApplicationRecord
    belongs_to :incidents
    has_one_attached :video_file, dependent: :destroy

    # Use Amazon S3 for storage
    if Rails.env.production?
      has_one_attached :video_file, dependent: :destroy, service: :amazon
    end
end
