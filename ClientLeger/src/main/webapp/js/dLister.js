// Tableau de gauche
var listD = listNom; //Entrée doit etre sous forme "e.toString()+e.getId()" où e = item 
//Tableau de droite
var listR = listBdd; //Sortie
//Variable temporaire
var str;



//Fonction de chargement initial
function charge(){
    listD.forEach(e => {
		str = e.replace(/\d+/, "");
        document.getElementById("D").innerHTML += '<span onClick="insert(\'' + e + '\')">'+ str + '</span>';
    });
}


//Rechargement du tableau de droite
function reload(){
    document.getElementById("R").innerHTML = "";
    listR.forEach(e => {
        document.getElementById("R").innerHTML += '<span  value="'+ e.replace(/(\D+)/,"") +'" onClick="drop(\''+e+'\')">'+e.replace(/\d+/, "")+'</span>';
    });
}


//Insert la valeur séléctionné de gauche à droite et tri par ordre alphabétique avant de le recharger l'affichage'
function insert(i){		
    if (!(listR.includes(i))){
        listR.push(i);
        listR.sort();
        reload();
    }
}


//Retire la valeur sélectionné à gauche
function drop(i){
    delete listR[listR.indexOf(i)];
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
        document.getElementById("listOut").innerHTML += "<option value='"+str+"' selected></option>";
    
    
    document.forms["formulaire"].submit();
}


charge();
reload();