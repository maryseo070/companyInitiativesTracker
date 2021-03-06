class Initiative < ApplicationRecord

  validates :category, presence: true

  has_many :companies,
    foreign_key: :initiative_id,
    class_name: "Company"
end
