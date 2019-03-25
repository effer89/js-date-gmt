var nDateGmt = function getTodayDate(gmt){
  var t = new Date().toUTCString();
  t = t.replace(/(?=GMT).*$/g, gmt);
  t = new Date(t);
  return t.toISOString().replace(/T/, ' ').replace(/\..+/, '');
}

console.log(nDateGmt('GMT+0300')); // Brazil GMT