//Ul qui affiche toutes les tâches
let list =  document.querySelector('#toDoList');
            //document.getElementById('ToDoList');

/// Stockage des tâches dans un tableau
let listeTasc = [];
// chaque tâche est un objet avec 2 attributs 
//    libellé et statut = S(saisi) ou C(en cours) ou T(fini)
//let laTache = {lib:"Tâche New", statut:"S"};


//1 - Ajouter une Tâche  => sur le clic sur btn ajouter
let ajout = document.querySelector('#btnAjout');
ajout.addEventListener('click',()=>{
    //  1.1 - Lire l'input et récupérer sa valeur
    let saisie = document.querySelector('#saisie').value;
    //console.log(saisie);

    if (saisie==""){
        alert("Il faut Saisir une tâche");
    }else{
        // puis create la li  --------
        let newLi=document.createElement('li');
        newLi.className= "listeElt";
        //newLi.textContent=saisie;
        list.appendChild(newLi);    
        // checkbox
        let newInput=document.createElement('input');
        newInput.type="checkbox";
        newLi.appendChild(newInput);
        // libellé dans un p
        let newP=document.createElement('p');
        newP.className="task";
        newP.textContent=saisie;
        newLi.appendChild(newP);
        // les 2 boutons
        let newBtnMaj=document.createElement('button');
        newBtnMaj.className="btnLi btnMaj";
        newBtnMaj.textContent="Modif";
        newLi.appendChild(newBtnMaj);
        
        newBtnMaj.addEventListener('click',()=>{
            console.log("Maj")
        });

        let newBtnDel=document.createElement('button');
        newBtnDel.className="btnLi btnDel";
        newBtnDel.textContent="Suppr";
        newLi.appendChild(newBtnDel);
        newBtnDel.addEventListener('click',()=>{
            newLi.remove();
        });

        //  1.2 - Ajout d'un élément dans le tableau
        let newTache = {lib:saisie, statut:"S"};
        listeTasc.push(newTache);
        // Vider la zone saisie
        document.querySelector('#saisie').value="";
//        for (i= 0;i<listeTasc.length;i++){
//            console.log(listeTasc[i]);
//        }

    }
});


//2- Modifier le libellé d'une tâche => sur le bouton Modif
//let majAction=list.querySelectorAll(".btnMaj");
function majLibTask(){
    console.log("majLibTask  /  " + event.target.previousSibling.textContent);
    //2.1 Sélectionner la tâche correspondant au sélecteur, récupérer le libellé


    //2.2 Afficher un prompt qui demande de modifier le lib


    //2.3 A la validation du prompt mettre à jour la balise html


    //2.4 Maj de l'élément du tableau

}


function delTask(){
    console.log("delTask  /  " + event.target.previousSibling.textContent);
    let noeudParent= node.parentElement;
    console.log(noeudParent);






}



    
    

////



// 








