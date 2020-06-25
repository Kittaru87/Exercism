class Matrix

  attr_reader :string

  def initialize(string)
    @string = string
  end

  def split_string
   string.split("\n").map { |x| x.split }
  end 

  def rows
    split_string.map{|row| row.map(&:to_i)}
  end

  def columns
    rows.transpose
  end

end
