const lang = require('lang-mini');
const each = lang.each;

const assign = (target, source, property_names) => {


    // synonyms

    // word with the underscores removed...


    each(property_names, property_name => {

        // 

        let synonyms = {
            'timestamp': 'time_stamp'
        }

        let no_ = property_name.replace(/_/g, '');

        //console.log('no_', no_);
        //console.log('property_name', property_name);

        if (typeof source[property_name] !== 'undefined') {
            target[property_name] = source[property_name];
        } else {
            // check the synonym in the source

            if (typeof source[synonyms[property_name]] !== 'undefined') {
                target[property_name] = source[synonyms[property_name]];
            }

        }


    })

    // Could say some are required.

    // ['exchange market summary snapshots', ['!exchange_market_id fk=> exchange markets', '!timestamp', 'last', 'bid', 'ask', 'volume', 'base_volume', 'open_buy_orders', 'open_sell_orders']],

    let map_required = {
        'exchange_market': true,
        'timestamp': true,
        'last': true,
        'bid': true,
        'ask': true,
        'volume': true,
        'base_volume': true,
        'open_buy_orders': true,
        'open_sell_orders': true
    }


    // could have transformers...
    //  ie, for every property in the transformer list, we run a function on it first.
    //  could be validation, or verification, or ensuring the type of the data. dt_listed could be in different formats.
}

// Probably best to change time/date encoding later on.

class Market_Snapshot {
    constructor(spec) {

        assign(this, spec, ['exchange_market', 'timestamp', 'last', 'bid', 'ask', 'volume', 'base_volume', 'open_buy_orders', 'open_sell_orders']);


        // Keep the numbers in a Typed Array

        // Don't know if different data / time representation in the DB will help.
        //  Could have a time offset declared at the beginning.
        //  Could set up time offsets for specific fields.

        // Think timestamps are currently being stored with too many bits.
        //  May take some work on the encoding / decoding level.

        // May need a bit more care over exactly how it is encoded.

        // exchange_market


        // timestamp

        // last, volume, base_volume,


        //  could be smaller number types here.
        //   16 or 32 bit int would be OK.
        //   32 bit to be safest.


        //  xas2
        // open_buy_orders, open_sell_orders

        // assign these values.

        // Timestamp is an integer which will get encoded as XAS2.

        // Best not to do much to change encoding right now.



    }
}


module.exports = Market_Snapshot;