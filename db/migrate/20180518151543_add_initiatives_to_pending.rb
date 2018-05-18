class AddInitiativesToPending < ActiveRecord::Migration[5.1]
  def change
    add_column :pending_companies, :initiative_id, :integer
  end
end
