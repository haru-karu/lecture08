function n123(){
  return [];
}
function succ(a){
  return true;
 }
function n(expectedLength){
var a = zero();
while(a.length < expectedLength){
  a = succ(a)
}
return a;
}
