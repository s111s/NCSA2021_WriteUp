if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' flag.txt');
  process.exit(1);
}

let fs = require('fs')
let filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  //console.log(data) 
  result = data.split(/\r?\n/);
  for(let i=0;i<result.length;i++){
    if (result[i].charAt(12) == 'c' && result[i].charAt(20) == 'a' && result[i].charAt(28) == 'f'){
      console.log("Flag Number: ", i);
      console.log(result[i], "<-- Answer");
      console.log("NCSA{???????c???????a???????f???????e}", "<-- Compare");
    }
  }
});