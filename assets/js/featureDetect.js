/**
 * Check whether the client browser supports grid or not
 * @author Hyecheol (Jerry) Jang
 */

 // Check only if the browser is not set previously
if(sessionStorage.getItem('supported') == undefined) {
  const testElem = document.createElement('div'); // dummy div class to check the browser supports gird or not
  if (testElem.style.grid !== undefined) { // Supported
    sessionStorage.setItem('supported', true);
  } else { // Not supported
    // Prompt Message
    if(confirm('This browser is not supported.\nUse Latest Chrome/Firefox/Edge/Safari for better experience.')) {
      // If user confirms the message, does not check for the support anymore for current session
      sessionStorage.setItem('supported', false);
    }
  }
}