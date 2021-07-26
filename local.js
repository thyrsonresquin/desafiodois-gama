function salvarForm(){
    if(typeof(Storage) !== "undefined") {
        if(localStorage.cont){
            localStorage.cont = Number(localStorage.cont) + 1;
        } else {   
            localStorage.cont = 1;
        }

        cad = document.getElementById('name').value + ';' + document.getElementById('CPF').value + ';' + document.getElementById('email').value + ';' + document.getElementById('telefone').value + ';' + document.getElementById('endereço').value;
        localStorage.setItem("cad_" + localStorage.cont, cad);
    } else {

    }
}