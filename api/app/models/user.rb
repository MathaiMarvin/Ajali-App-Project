class User < ApplicationRecord
    has_secure_password
    
    validates :username, { 
        uniqueness: true,
      
    } 

    validates :email, {
        uniqueness: true,
        
    }
    validates :password, presence: true

      enum role: [:normal_user, :admin]
      after_initialize :set_default_role, :if => :new_record?
      def set_default_role
        self.role ||= :normal_user
      end

      has_many :incidents, dependent: :destroy
end
