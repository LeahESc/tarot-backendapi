#config/initializers/session_store.rb
if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: 'tarot-backendapi', domain: 'tarot-backendapi-json-api'
else
    Rails.application.config.session_store :cookie_store, key: 'tarot-backendapi'
end 