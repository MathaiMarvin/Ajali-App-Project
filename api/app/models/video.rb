class Video < ApplicationRecord
    belongs_to :incidents
    has_one_attached :video
end
