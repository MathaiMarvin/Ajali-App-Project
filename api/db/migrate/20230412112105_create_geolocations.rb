class CreateGeolocations < ActiveRecord::Migration[7.0]
  def change
    create_table :geolocations do |t|
      t.belongs_to :incidents, null:false, foreign_key:true
      t.float :latitude, null:false
      t.float :longitude, null:false 

      t.timestamps
    end
  end
end
