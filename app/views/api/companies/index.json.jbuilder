json.set! "companies" do
  @companies.each do |company|
    json.set! company.id do
      json.partial! 'company', company: company
    end
  end
end
