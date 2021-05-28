// Tableau de gauche
var listD = listNom0;
var listD2 = listNom1; //Entrée doit etre sous forme "e.toString()+e.getId()" où e = item 
//Tableau de droite
var listR = listBdd0;
var listR2 = listBdd1; //Sortie
//Variable temporaire





//Fonction de chargement initial
function charge(){
    
    

    listD.forEach(e => {
		str = e.replace(/\d+/, "");
        document.getElementById("D").innerHTML += '<span onClick="insert(\'' + e + '\', \'listR\')">'+ str + '</span>';
    });
    
    listD2.forEach(e => {
		str = e.replace(/\d+/, "");
        document.getElementById("D2").innerHTML += '<span onClick="insert(\'' + e + '\', \'listR2\')">'+ str + '</span>';
    });
    
}


//Rechargement du tableau de droite
function reload(){
    console.log(disable);
    document.getElementById("R").innerHTML = "";
    listR.forEach(e => {
        document.getElementById("R").innerHTML += '<span  value="'+ e.replace(/(\D+)/,"") +(disable ? "" :'" onClick="drop(\''+e+'\', \'listR\')')+'">'+e.replace(/\d+/, "")+'</span>';
    });
    document.getElementById("R2").innerHTML = "";
    listR2.forEach(e => {
        document.getElementById("R2").innerHTML += '<span  value="'+ e.replace(/(\D+)/,"") +(disable ? "" :'" onClick="drop(\''+e+'\', \'listR2\')')+'">'+e.replace(/\d+/, "")+'</span>';
    });
}


//Insert la valeur séléctionné de gauche à droite et tri par ordre alphabétique avant de le recharger l'affichage'
function insert(i, l){	
    var pane = (  (l == 'listR2') ? listR2 : listR ) ;
    
    if (!(pane.includes(i))){
        pane.push(i);
        pane.sort();
        reload();
    }
}


//Retire la valeur sélectionné à gauche
function drop(i, l){
    var pane = (  (l == 'listR2') ? listR2 : listR ) ;
    delete pane[pane.indexOf(i)];
    reload();
}


//Submit "manuel" après avoir traité la liste.
function submitForm(){

    var str = "";
    var first = true;
    listR.forEach(e => {
        if(first){
            str += e.replace(/\D+/,"");
            first = false;
        }else{
            str += "," + e.replace(/\D+/,"");
        }
    });
    document.getElementById("listOut0").innerHTML += "<option value='"+str+"' selected></option>";
    
    str = "";
    first = true;
    listR2.forEach(e => {
        if(first){
            str += e.replace(/\D+/,"");
            first = false;
        }else{
            str += "," + e.replace(/\D+/,"");
        }
    });
    document.getElementById("listOut1").innerHTML += "<option value='"+str+"' selected></option>";
    

    
    document.forms["formulaire"].submit();
}

if(!disable){
    charge();

}

reload();

