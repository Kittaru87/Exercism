class Matrix

  attr_reader :string, :rows, :columns

  def initialize(string)
    @string = string.split("\n").map { |x| x.split }
  end

  def rows
    string.map{|row| row.map(&:to_i)}
  end

  def columns
    rows.transpose
  end

end
