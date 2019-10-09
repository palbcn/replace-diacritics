/* 
  replace diacritics

  PAL BCN <palbcn@yahoo.com>
  
*/
(function ndNS() {
  /**
    replace characters with diacritics "`´^¨~,º" (for example À) 
    with the equivalent letter without diacritics (in the example, A)    
  */  
  function replaceDiacritics(str) {
    /*
    NO_DIACRITICS is the mirror of the unicode table 
    from 00c0 to 017f without diacritics.  
    
    for (let i=0x00c0, a=[]; i<=0x17f; i++) a.push(i);
    let s=String.fromCharCode(...a);
    
     ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ   ÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞß
     àáâãäåæçèéêëìíîï   ðñòóôõö÷øùúûüýþÿ
     ĀāĂăĄąĆćĈĉĊċČčĎď   ĐđĒēĔĕĖėĘęĚěĜĝĞğ
     ĠġĢģĤĥĦħĨĩĪīĬĭĮį   İıĲĳĴĵĶķĸĹĺĻļĽľĿ
     ŀŁłŃńŅņŇňŉŊŋŌōŎŏ   ŐőŒœŔŕŖŗŘřŚśŜŝŞş
     ŠšŢţŤťŦŧŨũŪūŬŭŮů   ŰűŲųŴŵŶŷŸŹźŻżŽžſ
     
     */
    const NO_DIACRITICS_00C0_017F = 
      "AAAAAAACEEEEIIII" +  "DNOOOOOxOUUUUYIs" +  //00C0-00Df
      "aaaaaaaceeeeiiii" +  "dnooooo/ouuuuyby" +  //00E0
      "AaAaAaCcCcCcCcDd" +  "DdEeEeEeEeEeGgGg" +  //0100
      "GgGgHhHhIiIiIiIi" +  "IiJjJjKkkLlLlLlL" +  //0120
      "lLlNnNnNnnNnOoOo" +  "OoOoRrRrRrSsSsSs" +  //0140
      "SsTtTtTtUuUuUuUu" +  "UuUuWwYyYZzZzZzF";   //0160-017f
    
    let chars=str.split('');
    for (let i=0; i<str.length; i++) {
      let c = str.charCodeAt(i);
      if (c>=0x00c0 && c<=0x0017f) 
        chars[i] = NO_DIACRITICS_00C0_017F[ c-0x00c0 ];
    }
    return chars.join('');    
  };  
  
  /* if it's invoked from command line, perform some elementary examples */
  if (require.main === module) {
    (function main(){
      let dichars=[];
      for (let i=0x00c0; i<=0x17f; i++) dichars.push(i);
      let allchars=String.fromCharCode(...dichars);
      console.log(allchars,"->",replaceDiacritics(allchars));
      let test="Çón cïèn cañönès pôr bándà";              
      console.log(test,"->",replaceDiacritics(test));              
    })();
   
  /*  the module exports just a single function */     
  } else {
    module.exports = replaceDiacritics;
  }
})();
