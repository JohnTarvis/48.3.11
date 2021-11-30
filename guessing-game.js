function guessingGame() {
    const number = Math.floor(Math.random() * 100);
    let win = false;
    return function(n){
        if(win)return "you already won";
        else {
            if(n > number)return "too high";
            else if (n < number)return "too low";
            else {
                win = true;
                return "you win"; 
            }
        }
    }
}

module.exports = { guessingGame };
