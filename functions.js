// Speichere das Feedback und Farben
let messageGood = "Vielen Dank, das freut mich sehr!"
let messageBad = "Oh nein, das ist aber schade!";
let colorGood = "green";
let colorBad = "red";

// Speichere das Feedback-Element
let feedback = document.getElementById('feedback');
// und das Emoji-Element
let smiley = document.getElementById('smiley');

// TODO: Ersetze inner Text/HTML durch neue Smileys
let innerNeu = "<i class="bi bi-emoji-heart-eyes" id="smiley"></i>";


// Kommentar zu good
function good() {
  feedback.innerHTML = messageGood;
  // TODO: hier ersetzen

  // aus W3schools eingefügt
  feedback.style.color = colorGood;
  smiley.style.color = colorGood;
}

// Copy Paste
function bad() {
  console.log("bad");
  feedback.innerHTML = messageBad;
  feedback.style.color = colorBad;
  smiley.style.color = colorBad;
}
