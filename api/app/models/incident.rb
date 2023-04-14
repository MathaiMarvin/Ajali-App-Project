class Incident < ApplicationRecord
    belongs_to :user
    has_many :images
    has_many :videos
    has_many :geolocations
    enum status: { under_investigation: 0, rejected: 1, resolved: 2 }
end
