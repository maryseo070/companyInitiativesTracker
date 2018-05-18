class PendingCompany < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true

  belongs_to :initiative,
    foreign_key: :initiative_id,
    class_name: "Initiative"
end
