json.set! "initiatives" do
  @initiatives.each do |init|
    json.set! init.id do
      json.partial! 'initiative', init: init
      # json.companies init.companies
    end
  end
end
