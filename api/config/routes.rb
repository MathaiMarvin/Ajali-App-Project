Rails.application.routes.draw do
  post "/users/login", to: "sessions#create"
  post "/users/register", to:"users#create"
  delete "/users/logout", to: "sessions#destroy"
  get '/check', to: "sessions#check"
  get'users', to:"users#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/incidents', to: 'incidents#index'
  post '/incidents/create', to: 'incidents#create'
  delete '/incidents/:id', to: 'incidents#destroy'
  get '/incidents/:id', to: 'incidents#show'
  patch '/incidents/:id', to: 'incidents#update'

end
