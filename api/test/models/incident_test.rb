require "test_helper"

class IncidentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
require 'test_helper'

class IncidentTest < ActiveSupport::TestCase
  test "should belong to a user" do
    incident = Incident.new
    assert_not incident.save, "Saved the incident without a user"
    
    user = User.new
    user.incidents << incident
    assert incident.user == user, "Incident does not belong to the user"
  end
  
  test "should have many images, videos and geolocations" do
    incident = Incident.new
    incident.save
    
    image = Image.new
    incident.images << image
    assert incident.images.include?(image), "Incident does not have the image"
    
    video = Video.new
    incident.videos << video
    assert incident.videos.include?(video), "Incident does not have the video"
    
    geolocation = Geolocation.new
    incident.geolocations << geolocation
    assert incident.geolocations.include?(geolocation), "Incident does not have the geolocation"
  end
  
  test "should have a status" do
    incident = Incident.new
    assert_not incident.save, "Saved the incident without a status"
    
    incident.status = :under_investigation
    assert incident.valid?, "Incident status is not valid"
    
    incident.status = :rejected
    assert incident.valid?, "Incident status is not valid"
    
    incident.status = :resolved
    assert incident.valid?, "Incident status is not valid"
    
    incident.status = :invalid
    assert_not incident.valid?, "Incident status is not invalid"
  end
end
