
// DB table:
// ['exchange markets', ['!market_exchange_coin fk=> exchange coins', '!base_exchange_coin fk=> exchange coins', 'min trade size', 'name', 'is active', 'logo_url']],

const lang = require('lang-mini');
const each = lang.each;

const assign = (target, source, property_names) => {
    each(property_names, property_name => {
        if (typeof source[property_name] !== 'undefined') {
            target[property_name] = source[property_name];
        }
    })
}

class Exchange_Market {
    constructor(spec) {
        assign(this, spec, ['exchange', 'market_exchange_coin', 'base_exchange_coin', 'min_trade_size', 'name', 'is_active', 'logo_url']);
    }

    get key() {
        //return this.exchange.key.concat(this.market_exchange_coin.key, this.base_exchange_coin.key);
        return [this.exchange.id, this.market_exchange_coin.key, this.base_exchange_coin.key];
    }

    // Then to turn it to a db row.
    //  Should probably take a reference to the nextleveldb model table, or even active table. Get its table kp

    // get the buffer backed record?
    // market_exchange_coin.key
    // Seems like a bit needs to be re-done.

    /*
    Not sure this is correct anyway.
    get arr_row() {
        let res = [[this.market_exchange_coin.id, this.base_exchange_coin.id], [this.min_trade_size, this.name, this.is_active, this.logo_url]];
        return res;
    }
    */

}

module.exports = Exchange_Market;