class Calc {
    constructor(number1, number2, operator) {
        this._number1 = number1;
        this._number2 = number2;
        this._operator = operator;
    }

    plus(number1, number2) {
        return number1 + number2;
    }
    minus(number1, number2) {
        return number1 - number2;
    }

    result() {
        if (this._operator == "plus")
            return this.plus(this._number1, this._number2);
        else if (this._operator == "minus")
            return this.minus(this._number1, this._number2);
    }
}