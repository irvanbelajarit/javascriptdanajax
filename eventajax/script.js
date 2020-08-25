
  function loadAjax(){

  
    var xmlHTTP;
    xmlHTTP = new XMLHttpRequest();
  
    xmlHTTP.open('GET','data.json');
    xmlHTTP.onreadystatechange = function(){
        if ((xmlHTTP.readyState === 4) && (xmlHTTP.status === 200)){

          var items = JSON.parse(xmlHTTP.responseText);
         
          var output = '<ul>';
          for (var key in items){
            output += '<li>' + items[key].nama + '</li>';
          }

          output +='</ul>';
           document.getElementById('update').innerHTML = output;
            }

    }
    xmlHTTP.send();

  }




