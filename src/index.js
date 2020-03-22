module.exports = function check(str, bracketsConfig) {
  let result;
  for (let i = 0; i < bracketsConfig.length; i++) {
    let brackets = bracketsConfig[i].join('');
    if (str.includes(brackets)) {
      str = str.replace(brackets, '');
      i = -1;
    }
  }
    
  if (str.length != 0) {
    result = false;
  }
  else {
    result = true;
  }
  return result;
}
