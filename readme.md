# replace-diacritics

Replaces the latin characters with accents and other diacritical marks (for example `À`) in a string, converting them to their most similar plain ascii latin characters (in the example, A).

## diacritics

The diacritical marks include the grave `` acute ´ and circumflex ^ accents, the dieresis ¨ , the macron − , the tilde ~ , the cedilla ¸ , the breve ˘ and some other marks.

the actual characters replaced are the ones in the unicode table block from 00c0 to 017f
      
       ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ   ÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞß
       àáâãäåæçèéêëìíîï   ðñòóôõö÷øùúûüýþÿ
       ĀāĂăĄąĆćĈĉĊċČčĎď   ĐđĒēĔĕĖėĘęĚěĜĝĞğ
       ĠġĢģĤĥĦħĨĩĪīĬĭĮį   İıĲĳĴĵĶķĸĹĺĻļĽľĿ
       ŀŁłŃńŅņŇňŉŊŋŌōŎŏ   ŐőŒœŔŕŖŗŘřŚśŜŝŞş
       ŠšŢţŤťŦŧŨũŪūŬŭŮů   ŰűŲųŴŵŶŷŸŹźŻżŽžſ
       
## installation

    npm install replace-diacritics
    
## use

   const replaceDiacritics = require('replace-diacritics');
   
   let test = 'Tàkë á sad song and mäke it bétter';
   console.log(replaceDiacritics(test)); // 
   
   