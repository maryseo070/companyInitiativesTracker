# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Company.destroy_all
Initiative.destroy_all


youth = Initiative.create(
  category: "youth"
)

sustainability = Initiative.create(
  category: "sustainability"
)

philanthropy = Initiative.create(
  category: "philanthropy"
)
health = Initiative.create(
  category: "health/food"
)

healthcare = Initiative.create(
  category: "healthcare"
)
media = Initiative.create(
  category: "media"
)
accessibility = Initiative.create(
  category: "accessibility & technology"
)

buyAndGive = Initiative.create(
  category: "buyAndGive"
)
education = Initiative.create(
  category: "education"
)

company1 = Company.create(
  name: "DoSomething",
  location: "New York, New York",
  description: "DoSomething is a community-focused organization that helps young people engage in their communities. The organization guides students in running campaigns, finding and doing volunteer work, and advocating for positive change. Their goal is to empower youth to fight for justice, engage with their passions, and make the world a better place.",
  website: "https://www.dosomething.org/us",
  job_postings: "https://www.dosomething.org/us/about/join-our-team",
  size: 50,
  initiative_id: youth.id
)

company2 = Company.create(
  name: "Patagonia",
  location: "Ventura, California",
  description: "Patagonia is an outdoor apparel and lifestyle brand that emphasizes simplicity and utility. It aims to build the best product, cause no unneccsary harm, and use business to inspire and implement solutions to the environmental crisis. They are constantly seeking new ways to minimize their impact on the environment and are passionate about connecting people with nature.",
  website: "http://www.patagonia.com/home/",
  job_postings: "http://www.patagonia.com/careers/",
  initiative_id: sustainability.id
)

company3 = Company.create(
  name: "Tesla",
  location: "Palo Alto, California",
  description: "Tesla is dedicated to designing and producing the world’s best electric cars and energy storage systems. They focus on sustainable transportation strategies and high quality design. Their vehicles are not only among the most efficient, but are also some of the safest in the world.",
  website: "https://www.tesla.com/",
  job_postings: "https://www.tesla.com/careers",
  initiative_id: sustainability.id
)

company4 = Company.create(
  name: "Fluxx",
  location: "San Francisco, California",
  description: "Fluxx is committed to the development of a wholly comprehensive, connected ecosystem for funders and investors. Their practice is based on transparency and accessibility. As a team, they are passionately developing grants management software that is entirely innovative.",
  website: "https://www.fluxx.io/",
  job_postings: "https://boards.greenhouse.io/fluxx?__hstc=5512620.22ebe1b42abfd779a3f086cc8e89f9b6.1524164169636.1524164169636.1524164169636.1&__hssc=5512620.1.1524523119029&__hsfp=3695274672&hsCtaTracking=3262ac03-12bb-41b5-8632-e62fd8cb7574%7C1ef08b92-a012-4ae5-a041-a269175f061f#.Wt5gcNPwZTY",
  initiative_id: philanthropy.id
)

company5 = Company.create(
  name: "StormSensor",
  location: "Seattle, Washington",
  description: "StormSensor monitors storm water in real time using waterproof hardware and cloud-based software, helping to prevent problems such as water contamination in urban areas.",
  website: "https://www.stormsensor.io/",
  job_postings: "https://angel.co/stormsensor-1/jobs",
  initiative_id: sustainability.id
)

company6 = Company.create(
  name: "Thrive Market",
  location: "Los Angeles, California",
  description: "Thrive market is a membership-based e-commerce site that sells and delivers organic groceries upt o 50% off retail, making healthy food accessible to low-income families",
  website: "https://thrivemarket.com/landing/tmhome/",
  job_postings: "http://thrivemarketjobs.com/",
  initiative_id: health.id
)
