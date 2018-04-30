function validatePhonenUmber(num){
  num = num.replace(/((-)|(()|())|( )|(.))/g,"")
  if(!(/^[0-9]+$/).test(num)){
    return false;
  }

  if(num.length!==10){
    return false;
  }

  return num;
}

module.exports = {
  validatePhonenUmber
}
