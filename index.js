// Nur bei StackBlitz notwendig. Nicht löschen
import './style.css';

// Eigenes JavaScript unten drunter :)

// wenn submit geklickt wird
var kommentarBereich = document.getElementById('kommentarBereich')
console.log(kommentarBereich)

var submitKnopf = document.getElementById('kommentar-form-submit')
console.log(submitKnopf)
submitKnopf.addEventListener('click', function(event){
  var name = document.getElementById('kommentar-form-name')
  var beschreibung  = document.getElementById('kommentar-form-beschreibung')
  var alter = document.getElementById('kommentar-form-alter')
  console.log(name.value, beschreibung.value, alter.vale)
  var kommentar = ''

  kommentar += '<section class = "kommentar"'
  kommentar += '<span>' + name.value + '</span>'
  kommentar += '<p>' + beschreibung.value + ' - Jahr(e)' + alter.vale + '</p>'


  kommentar += '</section>'

  console.log(kommentar)

  kommentarBereich.innerHTML += kommentar
})

// 