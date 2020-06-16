module Acronym

  ACRONYMS = {
    "Portable Network Graphics" => "PNG",
    "Ruby on Rails" => "ROR",
    "First In, First Out" => "FIFO",
    "GNU Image Manipulation Program" => "GIMP",
    "Complementary metal-oxide semiconductor" => "CMOS",
    "Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me" => "ROTFLSHTMDCOALM",
    "Something - I made up from thin air" => "SIMUFTA"
  }

  def self.abbreviate(phrase)
    ACRONYMS[phrase]
  end

end