class User < ApplicationRecord
    has_secure_password
    validates :email, {
        uniqueness: true,
        presence: true
      }
      validates :password, presence: true
      # validates :role, presence: true
      enum role: [:normal_user, :admin]
      after_initialize :set_default_role, :if => :new_record?
      def set_default_role
        self.role ||= :normal_user
      end

        has_many :incidents, dependent: :destroy
end
