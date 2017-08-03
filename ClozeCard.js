/*
 * Created: 7-29-2017
 * Edited: 7-29-2017
 */

function ClozeCard(text, cloze) {
    if (this instanceof ClozeCard) {
        this.removeCloze = function() {
            console.log(cloze);
            if (text.indexOf(cloze) !== -1) {
                return text.replace(cloze, '...');
            } else {
                return;
            }
        }

        if (text.indexOf(cloze) !== -1) {
            this.cloze = cloze;
            this.partial = this.removeCloze();
            this.fullText = text;
        } else {
            console.log('ERROR: \"%s\" does not appear in \"%s\"', cloze, text);
        }
    } else {
        return new ClozeCard(text, cloze);
    }
}

module.exports = ClozeCard;
