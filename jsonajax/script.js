
  
    var xmlHTTP;
    xmlHTTP = new XMLHttpRequest();
  
    xmlHTTP.open('GET','data.xml');
    xmlHTTP.onreadystatechange = function(){
        if ((xmlHTTP.readyState === 4) && (xmlHTTP.status === 200)){

          console.log(xmlHTTP.responseXML.getElementsByTagName('nama')[1].childNodes[0].nodeValue);
          
           
            }

    }
    xmlHTTP.send();

    




