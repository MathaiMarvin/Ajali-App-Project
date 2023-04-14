Rails.application.routes.draw do
  resources :geolocations
  resources :videos
  resources :images
  resources :incidents
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/incidents', to: 'incidents#create'
end
