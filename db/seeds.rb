# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Company.destroy_all
Initiative.destroy_all


initiative1 = Initiative.create(
  category: "youth"
)

company1 = Company.create(
  name: "DoSomething",
  location: "New York, New York",
  description: "DoSomething is a community-focused organization that helps young people engage in their communities. The organization guides students in running campaigns, finding and doing volunteer work, and advocating for positive change. Their goal is to empower youth to fight for justice, engage with their passions, and make the world a better place",
  website: "https://www.dosomething.org/us",
  job_postings: "https://www.dosomething.org/us/about/join-our-team",
  size: 50,
  initiative_id: initiative1.id
)
