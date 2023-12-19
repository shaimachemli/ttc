function mon_compte(){
    window.open("mon_compte.html","width=200","height=200","top=200","left=200");
}

function ajouterLigne(element) {
 
    // id du tableau
    var table = document.getElementById("myTable");

    // Ajout d'une ligne à la fin du tableau
    var newRow = table.insertRow();

    // Ajouter des cellules à la nouvelle ligne
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Ajouter du contenu aux cellules 

 // Accédez aux éléments à l'intérieur de l'article parent donnée en paramètre element
 var titleElement = element.parentElement.querySelector('.cardtitle');
 var priceElement = element.parentElement.querySelector('.cardpx');

 // Obtenez le texte à partir des éléments
 var title = titleElement.textContent;
 var price = priceElement.textContent;

 // Affichez les données dans la console à des fins de vérification
 console.log('Titre : ', title);
 console.log('Prix : ', price);

    cell1.innerHTML = title;
    cell2.innerHTML = price;
    var total=calculerSomme();
     
  }

  //fonction de calcul de total des prix ndes articles selectionnes
  function calculerSomme() {
    // id tableau
    var tableau = document.getElementById('myTable');
    var somme = 0;
  
    // Parcourir le tableau (index i=1 pour eviter l'entete)
    for (var i = 1; i < tableau.rows.length; i++) {
      
      var cellule = tableau.rows[i].cells[1];
      
      // Convertir le contenu de la cell en nbr 
      somme += parseFloat(cellule.innerHTML);
    }
    //console.log(somme);
  return somme;

    
  }
 
  //window.onload = calculerSomme();
