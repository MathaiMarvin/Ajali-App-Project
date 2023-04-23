Rails.application.routes.draw do

 
  post "users/login", to: "users#login"
  post "/users/register", to:"users#create"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
<<<<<<<<< Temporary merge branch 1
=========
  get '/incidents', to: 'incidents#index'
  post '/incidents/create', to: 'incidents#create'
  delete '/incidents/:id', to: 'incidents#destroy'
    get '/incidents/:id', to: 'incidents#show'
    patch '/incidents/:id', to: 'incidents#update'

>>>>>>>>> Temporary merge branch 2
end
