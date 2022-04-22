javascript: (() => {
  const HTMLelement = document.getElementById('env-var-linux');
  const AWSvariables = HTMLelement.textContent;
  AWSvariables.replace(/[\r\n]/gm, '');
  
  function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  };
  copyToClipboard(AWSvariables);
})();
