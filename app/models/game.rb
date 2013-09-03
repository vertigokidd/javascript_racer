class Game < ActiveRecord::Base
  # Remember to create a migration!
  validates_length_of :winner, :minimum => 3, :maximum => 3
  
end
