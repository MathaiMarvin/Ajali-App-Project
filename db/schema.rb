# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_12_112105) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "geolocations", force: :cascade do |t|
    t.bigint "incidents_id", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["incidents_id"], name: "index_geolocations_on_incidents_id"
  end

  create_table "images", force: :cascade do |t|
    t.string "image"
    t.bigint "incidents_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["incidents_id"], name: "index_images_on_incidents_id"
  end

  create_table "incidents", force: :cascade do |t|
    t.string "title", null: false
    t.string "description", null: false
    t.string "status", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_incidents_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "role", default: "0", null: false
    t.integer "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "videos", force: :cascade do |t|
    t.string "video"
    t.bigint "incidents_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["incidents_id"], name: "index_videos_on_incidents_id"
  end

  add_foreign_key "geolocations", "incidents", column: "incidents_id"
  add_foreign_key "images", "incidents", column: "incidents_id"
  add_foreign_key "incidents", "users"
  add_foreign_key "videos", "incidents", column: "incidents_id"
end
