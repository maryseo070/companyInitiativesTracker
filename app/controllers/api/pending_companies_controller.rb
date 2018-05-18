class Api::PendingCompaniesController < ApplicationController
  def index
    @pending_companies = Company.all
  end

  def show
    @pending_company = Company.find(params[:id])
    @initiative = @pending_company.initiative.category
  end

  def destroy
  end

  def edit
  end

  def update
  end

  private
  def pending_company_params
    params
    .require(:company)
    .permit(:name, :location, :description, :website, :job_postings, :initiative_id)
  end



end