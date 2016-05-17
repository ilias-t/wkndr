class CampsitesController < ApplicationController
  def index
    #TODO: respond to html requests with page & json requests with data
    if is_xrh_request # inherited from application controller
      binding.pry
      campsite_name = params[:campsite]
      render json: campsite_name
    else
      render :index
    end
  end

end
