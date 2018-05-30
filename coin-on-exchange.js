const lang = require('lang-mini');
const each = lang.each;

const assign = (target, source, property_names) => {
    each(property_names, property_name => {
        if (typeof source[property_name] !== 'undefined') {
            target[property_name] = source[property_name];
        }
    })

    // Could say some are required.

    let map_required = {
        'coin': true,
        'exchange': true

    }
    // could have transformers...
    //  ie, for every property in the transformer list, we run a function on it first.
    //  could be validation, or verification, or ensuring the type of the data. dt_listed could be in different formats.
}

// Then a class for Coin_On_Exchange
//  Makes sense, that's how the data is.
//  From coin, we could load values of the coin on different exchanges.

// Then it could have a price / trade history.
// The trade would refer to a market.

class Coin_On_Exchange {
    // name, code

    // old codes?

    // start_timestamp
    // started
    // listing_date
    // dt_listed

    // name on the exchange? Exchanges could give them different names, eg it could say its bitcoin, with code BTC, but it's Bitcoin Cash, or BCash is used for Bitcoin Cash.
    //  Could use synonyms in various cases.

    constructor(spec) {
        assign(this, spec, ['coin', 'exchange', 'code_on_exchange', 'name', 'dt_listed', 'min_confirmations', 'tx_fee', 'is_active', 'base_address', 'coin_type', 'notice']);
    }

}

module.exports = Coin_On_Exchange;