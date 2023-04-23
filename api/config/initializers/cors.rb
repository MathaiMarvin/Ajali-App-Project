Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'https://ajali-app-project.vercel.app' # replace with your domain name
      resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end
  end
  