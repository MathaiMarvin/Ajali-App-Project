class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email, null:false 
      t.string :username, null:false
      t.string :password_digest, null:false
      t.string :role, null:false, default:0
      t.integer :phone_number

      t.timestamps
    end
  end
end
