require 'test_helper'

class VideoTest < ActiveSupport::TestCase
  test "should be valid with an incident and attached video" do
    incident = incidents(:one)
    video = Video.new(incident: incident, video: fixture_file_upload('videos/sample.mp4'))
    assert video.valid?
  end

  test "should not be valid without an incident" do
    video = Video.new(video: fixture_file_upload('videos/sample.mp4'))
    assert_not video.valid?
    assert_equal ["must exist"], video.errors[:incident]
  end

  test "should not be valid without an attached video" do
    incident = incidents(:one)
    video = Video.new(incident: incident)
    assert_not video.valid?
    assert_equal ["must be attached"], video.errors[:video]
  end

  test "should have a maximum file size of 100MB" do
    incident = incidents(:one)
    video = Video.new(incident: incident, video: fixture_file_upload('videos/large.mp4'))
    assert_not video.valid?
    assert_equal ["is too big (maximum is 100MB)"], video.errors[:video]
  end
end

