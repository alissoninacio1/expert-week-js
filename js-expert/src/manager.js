const Employee = require("./employee");
const Util = require("./util");


class Manager extends Employee {
    #bonuses = 2000
    get bonus () {
        return Util.formatCurrency(this.#bonuses)
    }
}

module.exports = Manager