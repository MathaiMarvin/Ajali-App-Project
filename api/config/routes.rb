Rails.application.routes.draw do
  resources :geolocations
  resources :videos
  resources :images
  resources :incidents
  resources :users
  post "/login", to: "users#login"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/incidents', to: 'incidents#index'
  post '/incidents', to: 'incidents#create'
  delete '/incidents', to: 'incidents#destroy'
    get '/incidents/:id', to: 'incidents#show'
    patch '/incidents/:id', to: 'incidents#update'

end
