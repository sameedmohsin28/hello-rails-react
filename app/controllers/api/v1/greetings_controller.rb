class Api::V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.order(created_at: :desc)
    @random_greeting = @greetings.sample

    render json: {greeting_message: @random_greeting.message}
  end
end
