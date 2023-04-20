class Incident < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
    belongs_to :user
    has_many :images, dependent: :destroy
    has_many :videos, dependent: :destroy
    has_many :geolocations, dependent: :destroy
    enum status: { under_investigation: 0, rejected: 1, resolved: 2 }
end
