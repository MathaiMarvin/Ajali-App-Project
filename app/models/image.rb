class Image < ApplicationRecord
    belongs_to :incidents
    has_one_attached :image
end
