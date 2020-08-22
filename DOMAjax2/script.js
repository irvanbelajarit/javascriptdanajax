
  
    var xmlHTTP;
    xmlHTTP = new XMLHttpRequest();
  
    xmlHTTP.open('GET','data.txt');
    xmlHTTP.onreadystatechange = function(){
        if ((xmlHTTP.readyState === 4) && (xmlHTTP.status === 200)){

           var update = document.getElementsByTagName('ul')[1].getElementsByTagName('li');
           update[2].innerHTML = xmlHTTP.responseText;
           
            }

    }
    xmlHTTP.send();

    

   


