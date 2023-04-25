class Incident < ApplicationRecord

    belongs_to :user
    has_one_attached :image, dependent: :destroy
    has_one_attached :video, dependent: :destroy
    
    enum status: { under_investigation: 0, rejected: 1, resolved: 2 }
end
