=begin
Write your code for the 'Rna Transcription' exercise in this file. Make the tests in
`rna_transcription_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/rna-transcription` directory.
=end

module Complement
  
  RNA = {
    "C" => "G",
    "G" => "C",
    "T" => "A",
    "A" => "U",
    "" => ""
  }

  def self.of_dna(dna_strand)
    
    dna_strand.split("").map{ |dna| RNA[dna] }.join

  end

end