class RemoveVideoFromTable < ActiveRecord::Migration[7.0]
  def change
    remove_column :incidents, :video
  end
end
