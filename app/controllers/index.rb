get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/high_scores' do
  erb :high_scores
end

# POST ==========================

post '/high_scores' do
  initials = params[:initials].upcase
  puts params
  Game.create(:winner => initials,:track_time => params[:track_time].to_i)
  redirect to('/high_scores')
end
