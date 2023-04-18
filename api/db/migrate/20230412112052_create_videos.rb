class CreateVideos < ActiveRecord::Migration[7.0]
  def change
    create_table :videos do |t|
      t.string :video
      t.belongs_to :incidents, null:false, foreign_key:true
      t.timestamps
    end
  end
end
