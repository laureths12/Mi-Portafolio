var idp=1;
var long=0;
    const url = "https://laureths12.github.io/My_json/libros.json";

    function buscar(){
    
        fetch(url)
        .then(function(response){
            return response.json();    
        })
    
        .then(function(data){
            console.log(data.figures);
            long=data.figures.length;
            console.log("lenght:"+ long);
        
            var res= data.figures.filter(item=>item.id===idp);
            console.log(res);
            var imagen=document.getElementById('lib-img');
            imagen.src=res[0].figure;
            var p1=document.getElementById('name');
            p1.innerHTML="<b>Nombre: </b>"+res[0].name;
            var p2=document.getElementById('date');
            p2.innerHTML="<b>Fecha: </b>"+res[0].date;
            var p3=document.getElementById('author');
            p3.innerHTML="<b>Autor: </b>"+res[0].author;
            var p4=document.getElementById('des');
            p4.innerHTML="<b>Descripción: </b>"+res[0].des;
        })

        .catch(function(error){
            console.log(error);           
        });

        if (idp >= long){
            idp=1;
        }else{
            idp++;
        }
        
    }   