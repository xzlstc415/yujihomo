require 'twitch'

::TWITCH = Twitch.new({
  client_id: ENV['TWITCH_CLIENT_ID'],
  secret_key: ENV['TWITCH_CLIENT_SECRET'],
  redirect_uri: 'http://japanesekoreanug.com',
  scope: ['user_read']
})

TWITCH.link
