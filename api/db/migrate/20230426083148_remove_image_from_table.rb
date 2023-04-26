class RemoveImageFromTable < ActiveRecord::Migration[7.0]
  def change
    remove_column :incidents, :image
  end
end
