/*
 * Title: Flashcard-Generator
 * Purpose: Homework
 * Creator: Jeremy He
 *
 * Created: 7-29-2017
 * Edited: 7-29-2017
 */

var BasicCard = function(front, back) {
    if (this instanceof BasicCard) {
        this.front = front;
        this.back = back;
    } else {
        return new BasicCard(front, back);
    }
}

module.exports = BasicCard;
