require 'faker'

FactoryGirl.define do
  factory :youtube_video do
    sequence(:api_title) { |n| "youtube_video_#{n}" }
    api_description 'youtube video'
    sequence(:api_id) { |n| "API_ID_#{n}"}
    api_thumbnail_url Faker::Internet.url
    api_privacy_status 'public'
    api_duration 1800
    api_embed_html 'embed html'
    api_processed true
  end
end
