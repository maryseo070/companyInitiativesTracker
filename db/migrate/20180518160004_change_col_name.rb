class ChangeColName < ActiveRecord::Migration[5.1]
  def change
    rename_column :pending_companies, :job_posting, :job_postings
  end
end
