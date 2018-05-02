class Api::InitiativesController < ApplicationController
  def index
    @initiatives = Initiative.all
  end
  
end
