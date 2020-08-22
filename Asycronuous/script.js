
  
    var xmlHTTP;
    xmlHTTP = new XMLHttpRequest();
  
    xmlHTTP.open('GET','data.txt');
    xmlHTTP.onreadystatechange = function(){
        if ((xmlHTTP.readyState === 4) && (xmlHTTP.status === 200)){
            console.log(xmlHTTP);
            document.writeln(xmlHTTP.responseText);
            }

    }
    xmlHTTP.send();

    

   


