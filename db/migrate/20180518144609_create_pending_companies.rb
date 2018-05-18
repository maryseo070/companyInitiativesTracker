class CreatePendingCompanies < ActiveRecord::Migration[5.1]
  def change
    create_table :pending_companies do |t|
      t.string :name
      t.text :description
      t.string :location
      t.string :website
      t.string :job_posting

      t.timestamps
    end
    add_index :pending_companies, :name
  end
end
