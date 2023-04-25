class ChangeDateToStringInIncidents < ActiveRecord::Migration[7.0]
  def change
    change_column :incidents, :date, :string
  end
end
