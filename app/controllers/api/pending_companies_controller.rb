class Api::PendingCompaniesController < ApplicationController
  def index
    @pending_companies = PendingCompany.all
    render template: "api/pending_companies/index.json.jbuilder"
  end

  def create
    @company = PendingCompany.new(pending_company_params)
    if @company.save
      @pending_companies = PendingCompany.all
      render template: "api/pending_companies/index.json.jbuilder"
    else

      render json: ["ERRORRRRRRRR"], status: 403
    end

  end

  def show
    @pending_company = PendingCompany.find(params[:id])
    @initiative = @pending_company.initiative.category
  end

  def destroy
    @pending_company = PendingCompany.find(params[:id])
    @pending_company.destroy!
    @pending_companies = PendingCompany.all
    render template: 'api/pending_companies/index.json.jbuilder'
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
