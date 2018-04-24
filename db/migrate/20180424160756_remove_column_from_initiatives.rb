class RemoveColumnFromInitiatives < ActiveRecord::Migration[5.1]
  def change
    remove_column :initiatives, :company_id
    add_column :companies, :initiative_id, :integer
  end
end
