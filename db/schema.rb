# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180518160004) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string "name", null: false
    t.string "location"
    t.text "description"
    t.string "website"
    t.string "job_postings"
    t.integer "size"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "initiative_id"
    t.index ["name"], name: "index_companies_on_name", unique: true
  end

  create_table "initiatives", force: :cascade do |t|
    t.string "category", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category"], name: "index_initiatives_on_category", unique: true
  end

  create_table "pending_companies", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "location"
    t.string "website"
    t.string "job_postings"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "initiative_id"
    t.index ["name"], name: "index_pending_companies_on_name"
  end

end
