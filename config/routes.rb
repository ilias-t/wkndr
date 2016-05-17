Rails.application.routes.draw do

  root "pages#home"

  resources :campsites, only: :index

  resources :users, except: [:index]

  get "/login", to: "sessions#new"

  post "/login", to: "sessions#create"

  delete "/login", to: "sessions#destroy"

end
