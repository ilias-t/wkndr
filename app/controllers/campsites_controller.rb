class CampsitesController < ApplicationController
  def index
    #TODO: respond to html requests with page & json requests with data
    if is_xrh_request # inherited from application controller
      binding.pry
      campsites = Campsite.search(params[:campsite])
      render json: campsites
    else
      render :index
    end
  end

end
