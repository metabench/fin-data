const lang = require('lang-mini');
const each = lang.each;

const assign = (target, source, property_names) => {
    each(property_names, property_name => {
        if (typeof source[property_name] !== 'undefined') {
            target[property_name] = source[property_name];
        }
    })
}

// This could (maybe) have mapping info for changing from the exchange API's data to the OO data format here.
// Then change the OO data to the DB format easily.


class Exchange {
    constructor(spec) {
        assign(this, spec, ['id', 'name']);
    }
    toString() {
        return '{EXCHANGE: ' + this.name + '}';
    }
}

module.exports = Exchange;