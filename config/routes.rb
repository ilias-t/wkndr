Rails.application.routes.draw do

  root "campsites#index"

  resources :campsites, only: [:index, :create, :delete]

end
