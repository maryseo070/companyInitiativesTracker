class DropPending < ActiveRecord::Migration[5.1]
  def change
    drop_table(:pending_tables)
  end
end
