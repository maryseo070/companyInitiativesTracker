class CreateInitiatives < ActiveRecord::Migration[5.1]
  def change
    create_table :initiatives do |t|
      t.string :category, null: false
      t.integer :company_id
      t.timestamps
    end
    add_index :initiatives, :category, unique: true
  end
end
