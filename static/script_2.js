document.addEventListener('DOMContentLoaded', function() {
    var pridatButton = document.getElementById('pridat');
    pridatButton.addEventListener('click', function() {
        var textValue = document.getElementById('text').value;
        if (textValue.trim() !== "") {
            var vystupDiv = document.getElementById('vystup');
            var newParagraph = document.createElement('p');
            newParagraph.innerText = textValue;
            vystupDiv.appendChild(newParagraph);
            document.getElementById('text').value = ""; // Vymaže textové pole
        }
    });
});