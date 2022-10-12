//Q1 Write a procedure, called dot_product which calculates in the variable ps,
// the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
//Object declaration containing vectors
let IR = {
  k1:['0','6'],
  k2:['0','2']
}



//algorithm for calculating dot products
let dot_product = (v1,v2) => {
  let product1 = v1[0]*v1[1]
  let product2 = v2[0]*v2[1]
  let ps = product1 + product2

  return ps;
}


//algorithm to check if two given vectors are orthogonal
//Orthogonal means "perpendicular",two products are said to be orthogonal to each other, if and only their product is zero.
function orthogonalCheck(){
  var checkVal = dot_product(IR.k1, IR.k2);

  if(checkVal==0){
      console.log(`The vectors above are orthogonal`)
  }
  else if(checkVal!=0){
      console.log(`The vectors above are NOT orthogonal`)
  }
}




console.log(`The dot product of [${IR.k1}] and [${IR.k2}] is: ${dot_product(IR.k1, IR.k2)}`)


orthogonalCheck()