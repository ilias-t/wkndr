class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  private
  def is_xrh_request
    if request.xhr? == 0
      #is an xhr request
      true
    else
      false
    end
  end
end
