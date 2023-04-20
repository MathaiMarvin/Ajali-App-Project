require "test_helper"

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @existing_user = User.create(email: "test@example.com", password: "password")
  end

  def teardown
    User.destroy_all
  end

  def test_should_not_save_user_without_email
    user = User.new
    assert_not user.save, "Saved the user without an email"
  end

  def test_should_not_save_user_with_non_unique_email
    user = User.new(email: "test@example.com", password: "password")
    assert_not user.save, "Saved the user with a non-unique email"
  end

  def test_should_not_save_user_without_password
    user = User.new(email: "test@example.com")
    assert_not user.save, "Saved the user without a password"
  end

  def test_should_have_a_default_role_of_normal_user
    user = User.new(email: "test@example.com", password: "password")
    assert_equal "normal_user", user.role, "Role was not set to default value of normal_user"
  end

  def test_should_set_default_role_if_role_is_not_specified
    user = User.new(email: "test@example.com", password: "password")
    user.save
    assert_equal "normal_user", user.role, "Role was not set to default value of normal_user"
  end

  def test_should_have_many_incidents
    user = User.new(email: "test@example.com", password: "password")
    assert_respond_to user, :incidents, "User does not have many incidents"
  end
end
