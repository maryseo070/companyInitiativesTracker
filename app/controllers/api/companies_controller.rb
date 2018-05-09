class Api::CompaniesController < ApplicationController

  def index
    @companies = Company.all
  end

  def show
    @company = Company.find(params[:id])
    @initiative = @company.initiative.category
  end

  def create
    debugger
    @company = Company.new(company_params)
    @company.initiative_id = @company.initiative.id
    debugger
    if @company.save
      debugger
      render template: "api/companies/index.json.jbuilder"
    else
      debugger
      render json: ["ERRORRRRRRRR"], status: 403
    end
    debugger
  end

  private
  def company_params
    params.require(:company).permit(:name, :location, :description, :website, :job_postings)
  end
end
