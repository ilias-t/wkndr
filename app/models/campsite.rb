class Campsite < ActiveRecord::Base
  def self.search(query)
    # register for API keys: http://developer.active.com/apps/myapps
    base_domain = "http://api.amp.active.com/camping/campgrounds"
    end_point = URI(base_domain + "?pstate=CA&pname=#{query}&api_key=#{ENV['CAMPGROUND_API_KEY']}")
    response = Hash.from_xml(Net::HTTP.get(end_point))
    campsites = response["resultset"]["result"]
  end
end
