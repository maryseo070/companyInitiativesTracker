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
  category: "buy and give"
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
  initiative_id: media.id
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

company15 = Company.create(
  name: "Andela",
  location: "East Africa",
  description: "Andela’s mission is to advance human potential by powering today’s teams and investing in tomorrow’s leaders. Founded in 2014, Andela's goal has been to build a network of technology leaders on the African continent and bridge the divide between the U.S and African tech sectors. Leveraging a proven, data-driven approach, they build high-performing engineering teams with Africa’s top developers to help companies overcome the tech talent shortage and build better products, faster.",
  website: "https://andela.com/",
  job_postings: "https://andela.com/join/",
  initiative_id: accessibility.id
)

company16 = Company.create(
  name: "Toms",
  location: "Los Angeles, California",
  description: "Sales of TOMS Shoes, Eyewear, Coffee and Bags drive Giving through the TOMS One for One® model. Every time a TOMS product is purchased, a person in need is helped.",
  website: "https://www.toms.com/",
  job_postings: "https://www.toms.com/jobs",
  initiative_id: philanthropy.id
)

company17 = Company.create(
  name: "Pigeonly",
  location: "Las Vegas, Nevada",
  description: "Pigeonly's mission is to improve communities by building products that reduce the destructive impact of incarceration. In addition to their low-cost jail calls, the provide a way to easily share photos, letters, and more, providing a more affordable and easier way to keep in touch with your inmate.",
  website: "https://pigeonly.com/",
  job_postings: "https://pigeonly.com/about/#careers",
  initiative_id: accessibility.id
)

company18 = Company.create(
  name: "Code.org",
  location: "Seattle, Washington",
  description: "Code.org is a nonprofit dedicated to expanding access to computer science in schools and increasing partiicpation by women and underrepresented miniorities. Their vision is that every student in every school has the opportunity to learn computer science.",
  website: "https://code.org/",
  job_postings: "https://code.org/about/jobs",
  initiative_id: education.id
)

company19 = Company.create(
  name: "Khan Academy",
  location: "Mountain View, California",
  description: "Khan Academy is a non-profit educational organization created in 2006 with the goal of creating a set of online tools that help educate students. They offer practice exercises, instructional videos, and a personalized learning dashboard that empower learners to study at their own pace in and outside the classroom.",
  website: "https://www.khanacademy.org/",
  job_postings: "https://www.khanacademy.org/careers",
  initiative_id: education.id
)

company20 = Company.create(
  name: "Raise.me",
  location: "San Francisco, California",
  description: "RaiseMe is a social enterprise focused on expanding access to higher education, especially among low income and first generation students. Rather than waiting until the end of high school to earn scholarships, which is often too late to impact a student's college ambitions or choices, RaiseMe enables students to earn scholarships throughout high school, starting as early as 9th grade, for doing all the things that best prepare them to succeed, whether that’s getting good grades, volunteering in the community or joining an extracurricular.",
  website: "https://www.raise.me/",
  job_postings: "https://www.raise.me/jobs#open-positions",
  initiative_id: philanthropy.id
)

company21 = Company.create(
  name: "OkHi",
  location: "Nairobi, Kenya",
  description: "Without a physical address, you are not included in the world. Why? Because you do not have access to the same services as people who do have an address. It is OkHi's mission to enable the 4 billion people in the world without a physical address to have access to the same services as everyone else.",
  website: "http://www.okhi.com/",
  job_postings: "https://okhi.recruiterbox.com/",
  initiative_id: accessibility.id
)

company22 = Company.create(
  name: "Healthify",
  location: "New York, New York",
  description: "Healthify helps health plans, hospitals, and provider networks work better in low-income communities by making quick and accurate referrals for patients who need additional help from social services.",
  website: "https://www.healthify.us/",
  job_postings: "https://healthify.workable.com/",
  initiative_id: healthcare.id
)

company23 = Company.create(
  name: "TriggerHealth",
  location: "New York, New York",
  description: "Aimed at dramatically reducing recidivism rates for those in early substance abuse recovery, TriggerHealth's platform utilizes phone sensors and phone data to predict the state of somebody’s recovery in real-time, enabling the right care to be delivered proactively when it is needed most.",
  website: "https://triggrhealth.com/",
  job_postings: "https://angel.co/triggr-health/jobs",
  initiative_id: healthcare.id
)

company24 = Company.create(
  name: "Exygy",
  location: "San Francisco, California",
  description: "Exygy provides design, engineering and social impact consulting for mission-driven organizations including Google.org, the Skoll Foundation, Unicef, USAID and the city and county of San Francisco. Traditional design & engineering consultancies take world-class tech talent and hire them out to the highest business bidders, which means that those businesses make better products but the world doesn’t necessarily become a more just place. Exygy is filled with world-class talent, but only applies that talent to solving world-bettering problems.",
  website: "https://exygy.com/",
  job_postings: "https://exygy.com/careers/",
  initiative_id: healthcare.id
)
