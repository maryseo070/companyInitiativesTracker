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
company7 = Company.create(
  name: "Watsi",
  location: "San Francisco, California",
  description: "Watsi is a nonprofit that crowdfunds medical treatment for folks in need around the world. They use technology to help create a world where everyone has access to care. 100% of donations go to patient care",
  website: "https://watsi.org/about",
  job_postings: "https://angel.co/watsi/jobs",
  initiative_id: healthcare.id
)
company8 = Company.create(
  name: "Omaze",
  location: "Culver City, California",
  description: "Omaze is an online fundraising platform. Their model democratizes traditional auction-giving by offering everyone the chance to have a once-in-a-lifetime experience for as little as $10. Through the Omaze platform, people from more than 170 countries have donated to over 150 charities, driving new levels of awareness and raising more money for charities.",
  website: "https://www.omaze.com/",
  job_postings: "https://boards.greenhouse.io/omaze#.Wt8lm9PwZTa",
  initiative_id: philanthropy.id
)
company9 = Company.create(
  name: "Classy",
  location: "San Diego, California",
  description: "Classy is an online fundraising platform designed for nonprofit organizations. It powers charity sites with a built-in donation option (rather than using say, PayPal). Classy has helped fundraising efforts jump an average of 225%.",
  website: "https://www.classy.org/",
  job_postings: "https://www.classy.org/careers",
  initiative_id: philanthropy.id
)

company10 = Company.create(
  name: "Oncora Medical",
  location: "Philadelphia, Pennsylvania",
  description: "Oncora Medical offers a software product that enables precision radiation oncology. Precision medicine is the practice of designing personalized treatments for each patient based on their specific characteristics and medical history. Precision radiation oncology is the practice of designing personalized radiation treatments for each individual patient seen by a radiation oncology department.",
  website: "https://oncoramedical.com/",
  job_postings: "https://oncoramedical.com/careers/",
  initiative_id: health.id
)

company11 = Company.create(
  name: "Oncora Medical",
  location: "Philadelphia, Pennsylvania",
  description: "Oncora Medical offers a software product that enables precision radiation oncology. Precision medicine is the practice of designing personalized treatments for each patient based on their specific characteristics and medical history. Precision radiation oncology is the practice of designing personalized radiation treatments for each individual patient seen by a radiation oncology department.",
  website: "https://oncoramedical.com/",
  job_postings: "https://oncoramedical.com/careers/",
  initiative_id: health.id
)

company12 = Company.create(
  name: "RYOT",
  location: "Los Angeles, California",
  description: "RYOT was founded by the former humanitarian worker Bryn Mooser. Moved by the tragedies he witnessed around the world from Haiti to Nepal, in 2012 he formed a company to create a unique immersive experience around news, that meant putting the viewer at the heart of the news experience through mixed media.",
  website: "https://www.ryot.org/",
  job_postings: "https://www.oath.com/careers/job-openings?jobFamily=Engineering%20and%20Technology",
  initiative_id: health.id
)
company13 = Company.create(
  name: "Bulb",
  location: "London, England",
  description: "On a mission to bring clean energy to the world, this startup based out of East London already has the major energy market in its sights. Bulb is helping to supply 100% green energy to customers across the UK and to boot it’s cheaper than fossil fuels. They are one company that provides an alternative energy platform for those in desperate need of a cleaner conscience.",
  website: "https://bulb.co.uk/",
  job_postings: "https://bulb.co.uk/careers/",
  initiative_id: sustainability.id
)

company14 = Company.create(
  name: "Project Loon",
  location: "London, England",
  description: "A little-known startup from the brains of Rich DeVeau the senior technical leader at X, formerly Google[x], this is a project that aims to explore delivering Internet access via high-altitude balloons to the 4.8 billion people who don’t have connectivity. While it may seem that the digital world has been an inevitable part of life for some time, it remains that more than half of the world’s inhabitants don’t have Internet access. This startup could lift us all into the 21st century and beyond.",
  website: "https://x.company/loon/",
  job_postings: "https://careers.google.com/jobs#t=sq&q=j&li=20&l=false&jlo=en-US&jl=37.3860517%3A-122.0838511%3AMountain+View%2C+CA%2C+USA%3AUS%3AUnited+States%3A9.901223692706639%3ALOCALITY&jld=20&jcoid=7143c4f4-17a1-4061-a066-69aafca4467b&j=loon&",
  initiative_id: accessibility.id
)
