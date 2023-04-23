class ChangeStatusToIntegerInIncidents < ActiveRecord::Migration[7.0]
  def change
    remove_column :incidents, :status, :string
    add_column :incidents, :status, :integer, default: 0, null: false
  end
end
