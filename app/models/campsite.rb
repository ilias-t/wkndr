class Campsite < ActiveRecord::Base
  def self.search(query)
    # register for API keys: http://developer.active.com/apps/myapps
    p "http://api.amp.active.com/camping/campgrounds?pstate=CA&pname=#{query}&api_key=#{ENV['CAMPGROUND_API_KEY']}"
  end
end
