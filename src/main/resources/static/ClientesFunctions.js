
function leerClientes(){
    $.ajax({
        url:'http://localhost:8080/api/Client/all',
        type:'GET',
        dataType:'json',

        success: function(cliente){  //funcion guarda la get data en variable client
            console.log(cliente)
            $("#listaClientes").empty();
            for(i=0;i<cliente.length;i++){
                $("#listaClientes").append("<b>"+cliente[i].idClient +' '+cliente[i].name+"</b> "+cliente[i].email+"</br>")}
        },
        error: function(xhr, status){
            console.log('hay un problema');
        },
        complete: function (xhr, status){
            console.log('peticion realizada');
        }
    });
}

function guardarCliente(){
    //POST function
    let idCliente = $("#idCliente").val();
    let nombreCliente = $("#nombreCliente").val();
    let emailCliente = $("#emailCliente").val();
    let edadCLiente = $("#edadCliente").val();

    let Cliente = {
        id : idCliente,
        name: nombreCliente,
        email: emailCliente,
        age:  edadCLiente
    }
    const req = new XMLHttpRequest();
    req.open('POST', 'http://localhost:8080/api/Client/save');
    req.setRequestHeader('Content-Type','application/json')
    req.addEventListener('load', function(){
        if(req.status == 201 && req.readyState == 4){
            const res = JSON.parse(req.responseText);
            console.log(res);
        }else{
            throw new Error("Bad POST Request");
        }
    })
    req.send(JSON.stringify(Cliente));
}

function updateCliente(){
    //PUT function
    let idCliente = $("#idCliente").val();
    let nombreCliente = $("#nombreCliente").val();
    let emailCliente = $("#emailCliente").val();
    let edadCLiente = $("#edadCliente").val();

    let Cliente = {
        id : idCliente,
        name: nombreCliente,
        email: emailCliente,
        age:  edadCLiente
    }

    console.log(Cliente)
    // create a new httpxml request object
    const req = new XMLHttpRequest();
    req.open('PUT', 'http://localhost:8080/api/Client/update');
    req.setRequestHeader('content-type','application/json')
    req.addEventListener('load', function(){
        if(req.status == 200){
            const res = JSON.parse(req.responseText);
            console.log(res);
        }else{
            console.log(req.status);
        }
    })
    req.send(JSON.stringify(Cliente));
}

function deleteCliente(){    //DELETE DEBE SER REESTRUCTURADO
    //DELETE function
    let idCliente = $("#idCliente").val();
    let myData = {
        id: idCliente
    };
    let dataToSend = JSON.stringify(myData);
    console.log(dataToSend)
    $.ajax({
        url: 'api/Client/{id}',
        type: 'DELETE',
        data: dataToSend,
        contentType: 'application/JSON',
        dataType: 'JSON',
        success: function(respuesta){
            leerClientes();      // es necesario volver a llamar a l a funcion GET para obtener los datos y borrarlos
            alert("se ha eliminado");  //ordenar los resultados en una lista
        }

    })
};