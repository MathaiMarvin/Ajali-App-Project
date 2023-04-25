class CreateBlacklist < ActiveRecord::Migration[7.0]
  def change
    create_table :blacklists do |t|
      t.string :token
      t.timestamps
    end
    add_index :blacklists, :token
  end
end
