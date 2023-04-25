class CreateIncidents < ActiveRecord::Migration[7.0]
  def change
    create_table :incidents do |t|
      t.string :title, null:false 
      t.string :description, null:false
      t.string :status, null:false
      t.date :date, null:false
      t.string :location, null:false
      t.float :latitude, null:false
      t.float :longitude, null:false 
      t.string :image
      t.string :video
      t.belongs_to :user, null:false, foreign_key: true
      
      t.timestamps
    end
  end
end
