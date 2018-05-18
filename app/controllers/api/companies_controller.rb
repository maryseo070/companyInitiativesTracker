class Api::CompaniesController < ApplicationController
  def index
    @companies = Company.all
  end

  def show
    @company = Company.find(params[:id])
    @initiative = @company.initiative.category
  end

  def create
    @company = Company.new(company_params)

    if @company.save

      render template: "api/companies/show.json.jbuilder"
    else

      render json: ["ERRORRRRRRRR"], status: 403
    end

  end

  private
  def company_params
    params
    .require(:company)
    .permit(:name, :location, :description, :website, :job_postings, :initiative_id)
  end

end
