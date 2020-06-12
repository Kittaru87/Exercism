=begin
Write your code for the 'Resistor Color Duo' exercise in this file. Make the tests in
`resistor_color_duo_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/resistor-color-duo` directory.
=end

module ResistorColorDuo
  
  RESISTOR_VALUE = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
  
  def self.value(color_array)
   
    color_array.map{|color| RESISTOR_VALUE.index(color)}.slice(0, 2).join.to_i

  end
  
end
