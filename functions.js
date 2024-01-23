// Speichere das Feedback und Farben
let messageGood = "Vielen Dank, das freut mich sehr!"
let messageBad = "Oh nein, das ist aber schade!";
let colorGood = "green";
let colorBad = "red";

// Speichere das Feedback-Element
let feedback = document.getElementById('feedback');

// TODO: Ersetze inner HTML durch neue Smileys


// Kommentar zu good
function good() {
  feedback.innerHTML = messageGood;
  // aus W3schools eingefügt
  feedback.style.color = colorGood;
  // TODO: hier ersetzen
  document.getElementById('wrapper').innerHTML = '<i class="bi bi-emoji-heart-eyes" id="smiley"></i>';
  document.getElementById('smiley').style.color = colorGood;
}

// Copy Paste
function bad() {
  console.log("bad");
  feedback.innerHTML = messageBad;
  feedback.style.color = colorBad;
  document.getElementById('wrapper').innerHTML = '<i class="bi bi-emoji-dizzy id="smiley"></i>';
  document.getElementById('smiley').style.color = colorBad; // noch ein Fehler
}