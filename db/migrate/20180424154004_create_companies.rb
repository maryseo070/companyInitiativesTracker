class CreateCompanies < ActiveRecord::Migration[5.1]
  def change
    create_table :companies do |t|
      t.string :name, null: false
      t.string :location
      t.text :description
      t.string :website
      t.string :job_postings
      t.integer :size

      t.timestamps
    end
    add_index :companies, :name, unique: true
  end
end
