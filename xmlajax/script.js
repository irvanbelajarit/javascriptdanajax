
  
    var xmlHTTP;
    xmlHTTP = new XMLHttpRequest();
  
    xmlHTTP.open('GET','data.txt');
    xmlHTTP.onreadystatechange = function(){
        if ((xmlHTTP.readyState === 4) && (xmlHTTP.status === 200)){

           var update = document.getElementsByTagName('li');
           for (var i =0; i<update.length; i++){
            update[i].innerHTML = xmlHTTP.responseText;
           }
          
           
            }

    }
    xmlHTTP.send();

    




