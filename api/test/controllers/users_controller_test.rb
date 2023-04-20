require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
end
require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
  end

  test "should get index" do
    get users_url
    assert_response :success
  end

  test "should create user" do
    assert_difference('User.count') do
      post users_url, params: { user: { email: 'test@example.com', username: 'testuser', password: 'password', phone_number: '1234567890' } }
    end

    assert_response :success
  end

  test "should show user" do
    get user_url(@user)
    assert_response :success
  end

  test "should login user" do
    post login_url, params: { user: { username: @user.username, password: 'password' } }
    assert_response :success
  end

  test "should not login invalid user" do
    post login_url, params: { user: { username: 'invalid', password: 'password' } }
    assert_response :bad_request
  end
end
