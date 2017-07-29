/*
 * Created: 7-29-2017
 * Edited: 7-29-2017
 */

function ClozeCard(text, cloze) {
    this.cloze = cloze;
    this.partial = removeCloze(text, cloze);
    this.fullText = text;
}

//Cloze.prototype.removeCloze = function(text, cloze) {
var removeCloze = function(text, cloze) {
    console.log(cloze);
    if (text.indexOf(cloze) > -1) {
        return text.replace(cloze, '...');
    } else {
        return;
    }
}

module.exports = ClozeCard;
