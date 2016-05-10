Rails.application.routes.draw do

  get 'pages/home'

  root "pages#home"

  resources :campsites, only: [:index, :create, :destroy]

  resources :users, except: [:index]

  get "/login", to: "sessions#new"

  post "/login", to: "sessions#create"

  delete "/login", to: "sessions#destroy"

end
