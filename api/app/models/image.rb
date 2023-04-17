class Image < ApplicationRecord
    belongs_to :incidents 
    has_one_attached :image, dependent: :destroy

    # Use Amazon S3 for storage
    if Rails.env.production?
      has_one_attached :image, dependent: :destroy, service: :amazon
    end
end
