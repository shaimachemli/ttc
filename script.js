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

  // Fonction pour transférer les données
function transferDataToVoirPanier() {

// Récupérer l'élément du tableau
  const myTable = document.getElementById('myTable');

          // Créer une structure pour stocker les données du tableau
  const myTableData = [];

          // Parcourir les lignes du tableau
  for (let i = 0; i < myTable.rows.length; i++) {
      const row = myTable.rows[i];

              // Obtenir les données de chaque cellule dans la ligne
      const rowData = [];
      for (let j = 0; j < row.cells.length; j++) {
          const cell = row.cells[j];
          rowData.push(cell.textContent.trim());
      }

              // Ajouter les données de la ligne à la structure
      myTableData.push(rowData);
  }

          // Convertir le tableau en une chaîne JSON directement
  const myTableDataString = JSON.stringify(myTableData);


          // Construire l'URL avec les données
  const url = `voirpanier.html?tableData=${encodeURIComponent(myTableDataString)}`;

          // Rediriger vers la page "Voir Panier"
  window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function() {
 
  // Vérifier si la page actuelle est la page "Récap panier"
  if (document.title === 'Récap panier') {
    alert("je suis dans la page voir panier");

    document.write('<h1 style="color:green; font-size: 50px;"></h1>');

    var prenom=prompt('Entrez votre prénom :');
    var nom =prompt('Entrez votre nom :');
    
    document.write('Voici le panier de mr/mme ' +prenom+' ' + nom +'<br>');
    RecupererData();
  }
});

function RecupererData(){
// Récupérer les paramètres d'URL
  const params = new URLSearchParams(window.location.search);

// Exemple d'accès aux paramètres
  const tableDataString = params.get('tableData');

// Convertir la chaîne JSON en tableau JavaScript
  const myTableData = JSON.parse(decodeURIComponent(tableDataString));
// Afficher les données dans la console
console.log('Données du tableau :', myTableData);
RemplirListe(myTableData);

}
function RemplirListe(myTableData){
 
// Obtenir l'élément ul
var ul = document.createElement('ul');

// Parcourir les données et créer des éléments li pour chaque élément dans myTableData
myTableData.forEach(function(data) {
    // Créer un élément li
    var li = document.createElement('li');

    // Ajouter le texte de la donnée à l'élément li
    li.textContent = data;

    // Ajouter l'élément li à l'élément ul
    ul.appendChild(li);
});

// Ajouter l'élément ul au body du document
document.body.appendChild(ul);

}
