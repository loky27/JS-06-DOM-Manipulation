function clicks(event){
    var contar = document.getElementsByTagName("a");
    alert("son " + contar.length + " links los que hay "+" \n El primer enlace de la página"
    +(contar[0])
    +" \n El último enlace de la página."+(contar[contar.length-1])
    );
    console.log(contar)
}