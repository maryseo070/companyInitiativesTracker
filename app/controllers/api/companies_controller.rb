class Api::CompaniesController < ApplicationController
  def index
    @companies = Company.all
  end

  def show
    @company = Company.find(params[:id])
    @initiative = @company.initiative.category
  end

  private
  def company_params
    params.require(:company).permit(:name, :location, :description, :website, :job_postings, :size)
  end
end
