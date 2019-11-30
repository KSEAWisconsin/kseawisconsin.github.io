function get_browser() {
  var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
  if(/trident/i.test(M[1])){
      tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
      return {name:'IE',version:(tem[1]||'')};
      }   
  if(M[1]==='Chrome'){
      tem=ua.match(/\bOPR|Edge\/(\d+)/)
      if(tem[0].indexOf('Edge') != -1) { return{name:'Edge', version:tem[1]};}
      if(tem!=null)   {return {name:'Opera', version:tem[1]};}
    }   
  M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
  return {
    name: M[0],
    version: M[1]
  };
}

var browser = get_browser();
if(browser.name.match('IE')) {
  alert("Internet Explorer Not Supported. Use the Edge of the other browser");
} else if(browser.name.match('Edge')) {
  if(parseFloat(browser.version) < 16) {
    alert("This Edge version is not supported. Please update your browser");
  }
} else if(browser.name.match('Firefox')) {
  if(parseFloat(browser.version) < 59) {
    alert("This Firefox version is not supported. Please update your browser");
  }
} else if(browser.name.match('Chrome')) {
  if(parseFloat(browser.version) < 66) {
    alert("This Chrome version is not supported. Please update your browser");
  }
} else if(browser.name.match('Safari')) {
  if(parseFloat(browser.version) < 10.1) {
    alert("This Safari version is not supported. Please update your browser");
  }
} else if(browser.name.match('Opera')) {
  if(parseFloat(browser.version) < 53) {
    alert("This Opera version is not supported. Please update your browser");
  }
} else {
  alert("Cannot detect browser version.");
}