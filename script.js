function mon_compte(){
    window.open("mon_compte.html","width=200","height=200","top=200","left=200");
}

function ajouterLigne() {

    // id du tableau
    var table = document.getElementById("myTable");

    // Ajout d'une ligne à la fin du tableau
    var newRow = table.insertRow();

    // Ajouter des cellules à la nouvelle ligne
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Ajouter du contenu aux cellules 
    var carte=document.getElementById("card")
    carte
    var art=document.getElementById("cardtitle");
    var px=document.getElementById("cardpx");
    cell1.innerHTML = art;
    cell2.innerHTML = px;
    alert(calculerSomme());
  }

  //fonction de calcul de total des prix
  function calculerSomme() {
    // id tableau
    var tableau = document.getElementById('tableau');
    var somme = 0;
  
    // Parcourir les lignes du tableau (index 1 pour eviter l'entete)
    for (var i = 1; i < tableau.rows.length; i++) {
      
      var cellule = tableau.rows[i].cells[1];
      
      // Convertir le contenu de la cell en nbr 
      somme += parseFloat(cellule.innerHTML);
    }
  return somme;

    console.log("Somme des prix:", somme);
  }
  
  //window.onload = calculerSomme();
  function alerte(){
    alert("bonj");
  }