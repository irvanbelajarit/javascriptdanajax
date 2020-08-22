for(var i = 0;i<100;i++){
  
    var xmlHTTP;
    xmlHTTP = new XMLHttpRequest();
  
    xmlHTTP.open('GET','data.txt',false);
    xmlHTTP.send();

    if (xmlHTTP.status === 200){
    console.log(xmlHTTP);
    document.writeln(xmlHTTP.responseText);
    }

}
   


