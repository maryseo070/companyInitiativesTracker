Rails.application.routes.draw do


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :pending_companies, only: [:index, :create, :edit, :update, :destroy]
    resources :companies, only: [:create, :index, :show]
    resources :initiatives, only: [:index]
  end
end
