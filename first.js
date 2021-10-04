function rot13(str) {
  var charcode = [];
  var words = [];
  
  for(let i = 0; i < str.length; i++){
    
    var asc = str.charCodeAt(i)
    
    charcode.push(asc)
  }
  var converted = charcode.map(function(a){
    return a-13
  })
  console.log(converted)
  converted.forEach((letter)=>{
   if(letter >= 65){
    var final =String.fromCharCode(letter)
    words.push(final)
   }
   else if(letter>=52){
     final = String.fromCharCode(letter+26)
     words.push(final)
   }
   else {
     final = String.fromCharCode(letter+13)
     words.push(final)
   }
   
  })
  return words.join("")
  }
  
  console.log(rot13("SERR YBIR?"));