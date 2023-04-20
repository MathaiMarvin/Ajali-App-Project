require 'test/unit'
require_relative 'geolocation'
require_relative 'incident'

class GeolocationTest < Test::Unit::TestCase
  def setup
    @incident = Incident.create(title: "Test incident")
    @geolocation = Geolocation.create(latitude: 37.7749, longitude: -122.4194, incident: @incident)
  end

  def teardown
    Incident.destroy_all
    Geolocation.destroy_all
  end

  def test_should_have_latitude_and_longitude
    assert_equal 37.7749, @geolocation.latitude, "Latitude was not set correctly"
    assert_equal(-122.4194, @geolocation.longitude, "Longitude was not set correctly")
  end

  def test_should_belong_to_an_incident
    assert_instance_of Incident, @geolocation.incident, "Geolocation does not belong to an Incident"
    assert_equal @incident, @geolocation.incident, "Geolocation belongs to the wrong Incident"
  end
end

