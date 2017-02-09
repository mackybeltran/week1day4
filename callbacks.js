var words = ["ground", "control", "to", "major", "tom"];

function map(array, callback ){
  var output = [];
  for (i = 0; i < array.length; i++){
    output.push(callback(array[i]));
  } console.log(output)
}

map(words, function(word) {
  return word.length;
});


