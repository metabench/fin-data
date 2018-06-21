const lang = require('lang-mini');
const each = lang.each;
const tof = lang.tof;

// Will have 7 byte timestamp encoding.
//  Maybe will have Timestamp data type
//  7 byte time

// time7 perhaps
//  Not sure how standard I want to make time7 right now. I'll use it at least.
//   Can store very large +ve and -ve ints that sort in order of their binary representation.




const assign = (target, source, property_names) => {



    // A time offset could be useful, set by table.
    //  'database properties'
    //  'table properties'
    //   timestamp fields could possibly have an offset.

    // Write as 32 bit number. That would be nicest.
    //  Specific parsing in Binary_Encoding?

    // Starting int datetime offset.
    //  Time offsets by fields would be cool.
    //  Define it by DB
    //   Gets overridden by definition for table
    //    Gets overridden by definition for the field
    //     (No row specific properties so far)

    // Having the DB itself deal with these time offsets by itself would be cool.

    // For the moment, encoding as 32 bit positive integer seems best.







    // synonyms

    // word with the underscores removed...


    let map_property_maps = {
        'timestamp': (ts) => {
            let res;
            if (ts instanceof String) {

            }
        }
    }


    each(property_names, property_name => {
        // 
        let synonyms = {
            'timestamp': 'time_stamp'
        }
        let no_ = property_name.replace(/_/g, '');

        // Timestamp is not a string!
        //  Timestamp must be recorded as a time value / number of ms.
        //  Will need to parse this.

        // Maybe will need to work on importing data in a different format.
        //  Then the data will be much smaller too. Keys will be much shorter.
        //  Number of milliseconds since unix time.

        // New DB with
        // DB Variables table
        // Constraints table
        //  (Locks table)
        //   Though locks may be better in RAM, needing less db lookups?
        //    Though in db makes for better restoration.
        // System Reserved 1, 2, 3, 4.

        // Then get it running on data13.
        //  Be able to change values as well.

        // Active record update could work for changing types.
        //  Would need of course to successfully delete indexes.

        // Could have further maintanance to check the types on a table.
        //  Timestamp property - need to do transformation on it.

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

        if (typeof target[property_name] === 'string' && property_name === 'timestamp') {
            // Do think a specific type of encoding would work best in Binary_Encoding.
            //  However, we need to specifically tell it to encode in that way.
            // Field_Value?
            //  Where that is used to contain all values, and it can have specific encoding types?

            // just parse it to a date here.
            /// the part where it gets encoded would need more flexibility
            //  or this will be the default way of handling JS date objects.
            // parse it as Date

            target[property_name] = new Date(target[property_name]);
            //target[property_name] = Date.parse(target[property_name]);

            //console.log('target[property_name]', target[property_name]);
            //console.log('typeof target[property_name]', typeof target[property_name]);
            //console.log('tof target[property_name]', tof(target[property_name]));
            // And upgrade Binary_Encoding's date system.
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