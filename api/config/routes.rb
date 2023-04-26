Rails.application.routes.draw do
  post "/users/login", to: "sessions#create"
  post "/users/register", to:"users#create"
  delete "/users/logout", to: "session#destroy"
  get 'users/check', to: "session#check"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/incidents', to: 'incidents#index'
  post '/incidents/create', to: 'incidents#create'
  delete '/incidents/:id', to: 'incidents#destroy'
  get '/incidents/:id', to: 'incidents#show'
  patch '/incidents/:id', to: 'incidents#update'

end
