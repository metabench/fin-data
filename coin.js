// Also called asset. Will hold other types of data too.

const lang = require('lang-mini');
const each = lang.each;

const assign = (target, source, property_names) => {
    each(property_names, property_name => {
        if (typeof source[property_name] !== 'undefined') {
            target[property_name] = source[property_name];
        }
    })
}


// Then a class for Coin_On_Exchange
//  Makes sense, that's how the data is.
//  From coin, we could load values of the coin on different exchanges.

class Coin {
    // name, code

    // old codes?

    // let coin = new Coin(coin_used.decoded_no_kp);
    //console.log('coin', coin);

    // [ [ 216 ], [ 'LRC', 'Loopring' ] ]
    //  if the spec is an array...


    constructor(spec) {


        if (Array.isArray(spec)) {
            // Should have an id...
            [[this.id], [this.code, this.name]] = spec;
        } else {
            assign(this, spec, ['code', 'name']);
        }


    }

    // want to be able to get a coin as a B_Record?
    //  Maybe don't want that dependency here.

    // Just getting it as a kv, giving it a table as well.


    // turning it into a record means getting a new id.
    //  Easiest just to use Coin to hold the data for the moment.

    // a mapping function?
    //  where we give it its own id as well


    to_kv(table, id) {
        return [[table.kp, id], [this.code, this.name]];
    }




}

module.exports = Coin;