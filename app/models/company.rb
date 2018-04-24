class Company < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true

  belongs_to :intiative,
    foreign_key: :initiative_id,
    class_name: "Initiative"
end
