var xmlHttp;
function PilihMhs(str){
    xmlHttp=GetXmlHttpObject()
    if (xmlHttp == null){
        alert ("Browser tidak mendukung AJAX");
        return;
    } 
    var url = "getmhs.php";
    url=url+"?q="+str;
    
    xmlHttp.open("GET",url,true);
    xmlHttp.onreadystatechange=function(){
        if ((xmlHttp.readyState === 4) && (xmlHttp.status === 200)){

            var Hasil = document.getElementById('hasil');
            Hasil.innerHTML = xmlHttp.responseText;
           
             }
    };
   
    
    xmlHttp.send();
}


function GetXmlHttpObject(){
    var xmlHttp = null;
   
    try{
        // chrome, safari, Mozilla
        xmlHttp = new XMLHttpRequest();
    }catch(e){
        // IE
        try{
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        }catch(e){
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        return xmlHttp;
}

