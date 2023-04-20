require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  test "should belong to an incident" do
    image = Image.new
    assert_not image.save, "Saved the image without an incident"
    
    incident = Incident.new
    incident.images << image
    assert image.incident == incident, "Image does not belong to the incident"
  end
  
  test "should have an attached image" do
    image = Image.new
    assert_not image.save, "Saved the image without an attached image"
    
    image.image.attach(io: File.open(Rails.root.join('test', 'fixtures', 'files', 'test-image.jpg')), filename: 'test-image.jpg', content_type: 'image/jpg')
    assert image.image.attached?, "Image does not have an attached image"
  end
end
