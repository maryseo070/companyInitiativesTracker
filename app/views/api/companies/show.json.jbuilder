json.set! "company" do |company|
  json.partial! 'company', company: @company
end
