class CreatePendingTable < ActiveRecord::Migration[5.1]
  def change
    create_table :pending_tables do |t|
    end
  end
end
