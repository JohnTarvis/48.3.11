function createAccount(pin, amount) {

    let _pin = pin;
    let _amount = amount;
    const invalid = "I'm sorry, you've entered the wrong pin";

    return {
        checkBalance(pin){
            if(pin === _pin){
                return `You have ${_amount} dollars`;
            } else {
                return invalid;
            }
        },
        deposit(pin,amount){
            if(pin === _pin){
                _amount += amount;
                return `Successfully deposited ${amount} dollars.  You have ${_amount} total`;
            } else {
                return invalid;
            }
        },
        withdraw(pin,amount){
            if(pin === _pin){
                if(amount <= _amount){
                    return `Successfully withdrew ${amount} dollars.  You have ${_amount} remaining`;
                } else {
                    return `You do not have enough funds`;
                }
            } else {
                return invalid;
            }
        },
        changePin(pin,newPin){
            if(pin === _pin){
                _pin = newPin;
                return `Pin changed to ${pin}`
            } else {
                return invalid;
            }
        }
        
    }

}

module.exports = { createAccount };
