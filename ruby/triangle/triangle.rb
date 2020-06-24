class Triangle

  attr_reader :array

  def initialize(array)
    @array = array
  end
  
  def equilateral?
    triangle? && equal_sides? ? true : false
  end
  
  def isosceles?
    triangle? && (array[1] == array.last || array.first == array[1] || array.first == array.last) ? true : false
  end
  
  def scalene?
    triangle? && !equilateral? && !isosceles? ? true : false
  end

  private
  
  def triangle?
    (array.first + array[1]) < array.last || (array.last + array.first) < array[1] || (array.last + array[1]) < array.first || (array.first == 0 && array[1] == 0 && array.last == 0) ? false : true
  end

  def equal_sides?
    array.sort.min == array.sort.max
  end
  
end

