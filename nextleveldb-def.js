// May well need a way to add fields to records.
//  For example more info on specific coins as new info becmes available
//  Coin type
//   Different exchanges have different ways of expressing that.

// Snapshots
// Streaming history
// Get recent trades


// Kucoin - no streaming
//  Combining snapshots with get recent trades.
//   Get recent trades is just for one exchange
//  "_comment": "arr[0]   Timestamp arr[1]   Order Type arr[2]   Price arr[3]   Amount arr[4]   Volume",
//  

// Snapshot every second?

// Snapshot from a number of different exchanges (2 for the moment)

// Could have standardised OO trade data.
//  Or subclasses of an Active_Record or Active_Table.

// OO classes would definitely help to structure the data.
//  Convert data from the exchanges to the format for the DB. Holding in an intermediate format too.
//   Would possibly create/output the DB records for the trades / snapshot data.


// kucoin, bittrex, binance

// then trades
//  some exchanges will provide more data about individual trades
//   trade_id
//   we may need to make a new hash key for each trade
//    that would ensure uniqueness.
//   We get trades as an array, just presume each trade sent by the exchange is unique.

// Then streamed trades - a different way to get the trades.
//  All all trade info is to be deemed to be 


// Assets db

// .info could often be unstructured data in a JS obj.

// exchange_trade object
//  makes sense to have one.


// Should be able to get the snapshots, and the trades.
//  Snapshots provide some info about the last trade, but its not the trading history.

// Need data strucures to hold the assets data.
//  When there is no exchange-supplied ID, for trades, it will need to generate one.
//   Could look out for identical trades together, but for the moment, ignore it. Could apply batch number variables.


//  have them all in the key, but they can be null. Need at least one of them?
// exchange market trade id?
// exchange trade id?
// hash (generated) id?

// Exchange market and timestamp should be fine.

// exchange_trade_id
//  exchange_market_trade_id ~(seems like this on bittrex)
//   if the exchanges have trade ids per market.

// just a trade id field.
//  one will be fine.
//  we get that from the server, combined with exchange_market it will be unique

// fill_type
//  partial fill, fill
//  

// Could even store the means to translate the data from exchanges to our format.
//  However, making the asset classes capable of accepting the raw crypto data would be fine.


// Need to be able to store candlestick data.
// Economic data - readings at times.
//  Could be relatively simple time series.
//  just a time-series class would be cool. Time, then a value.
//  Or multiple values for each of them. Can be flexible.
//  Worth having a timeserieses table
//   

// then info field
//  begin timestamp
//  end timestamp

// This almost looks fine to be the basis on which a lot of data can be collected.

// Getting the fields definition more like SQL will be helpful.

// Possibility of storing HTTP requests / responses / domains here?
//  Not worth it, just stick with the time serieses and timed value data from exchanges


// Candlesticks though

// look at bittrex candlesticks.



// candlestick data
//  exchange_market, start_time, (timespan), end_time



//  exchange_market, timespan, start_time, (end_time), open, low, high, close, volume
//  exchange_market, timespan, start_time, open, low, high, close, volume




//  index by exchange_market, timespan


// Possibly tagging data flaws
//  eg if data was estimated / interpolated?

// Probably best for the moment to make this a capable logging system, be sure to log all of the data.
//  May still need to do some error correction on data from some servers.
//  Would be worth putting that data into a db of this structure.


// Estimated / indirectly sourced data?
//  Would definitely be worth thinking of how this could be incorporated.
//  Different layer would likely be best.

// probably move to just the financial data module?
//  Want it so that the 


// From here, this will be usable both on the client and server.
// Making a financial data server could be quite useful.
//  It could have its own interfaces for access over the web, specialised for financial data.
//  Could have a fairly simple REST API or something similar

// nextleveldb-fin-server
//  comes with the setup for financial data pre-loaded
//  not sure what other functionality it will have, but there may be some queries which could better be done on the server.
//   will be worth writing the queries in an isomorphic way, so they can be done from the server.
// Probably best not to do this immediately, can make it a bit later.


// nextleveldb-fin-queries
//  queries done in an isomorphic way.

// nextleveldb-assets-client




const tables = [
    // standard info on the coin types.
    // Coins being renamed would have multiple records.


    // Code and name should all be unique, individually

    ['coins', ['+id', '!code', '!name']],
    ['exchanges', ['+id', '!name']],

    // cointype?

    // unstructures further info about the coin.
    //  an object for info would be a plain JS object with fields and values. Not compressed or normalised here.
    //  will help to keep the data, then view that data as obj.

    // May need to define records differently.
    //  [k, v]
    //   [[], []]
    //   Do this way to define the key which is not autoincrementing.
    //    They can also have indexes on them too
    //     Need to clarify if ! is the syntax for unique indexes
    //     If there is to be some other syntax for indexes, such as | or &
    //      & is more visually distinct.
    //      & means it is indexed by that field, but is not unique.
    //     ! for field must be unique by itself
    //      but & could mean together they make a unique key / pk
    //     # for together must be unique
    //     or, if it's only ! and no other PK is defined, that's the PK.
    //     

    // Want a quick and intuitive syntax for the fields, quicker than [[],[]]

    // now:
    //  ! for that field is indexed
    //  + field is autoincrementing pk

    // future
    //  [unknown]    for field is indexed
    //               for field is unique
    //               for field is in the PK
    //               
    //  !            field is part of the PK, milti ! makes the pk

    // ! here denoting that some of these are parts of the key?
    //  More like indicating that together they

    // Can just say each of them are the primary key.


    ['exchange coins', [['exchange_id fk=> exchanges', 'coin_id fk=> coins'], ['info']]],

    //['exchange coins', ['!exchange_id fk=> exchanges', '!coin_id fk=> coins', 'info']],
    // keep reference to the coins on that exchange
    // Putting the name in the key?
    //  No, the key would be too big that way.
    //  Having a unique constraint and index for the name would help.

    // ! fields together make the PK.
    //['exchange markets', ['!market_exchange_coin fk=> exchange coins', '!base_exchange_coin fk=> exchange coins', 'min trade size', 'name', 'is active', 'logo_url']],
    // Seems to be not much more than putting the snapshot records together and storing them now.


    // Seems a problem here...
    //  market_exchange_coin_id
    //  base_exchange_coin_id

    //  The 'id' of exchange coins is actually the key.
    //   It's not just a single ID field.

    // Data has been stored wrong in the DB. So it seems.

    // 'exchange markets' records need more in their keys.
    //  makes records longer overall. 

    // Is it a problem with Active_Record?


    // Though the exchange id gets put into the key 3 times.
    //  A bit inefficient there.
    //  The way it was already is more efficient in that it skipped out the exchange id from the exchange coins.
    //   Makes lookups harder if we don't have the full keys.

    // Maybe something for skipping fields in keys if we already have defined them.

    //['exchange markets', [['exchange_id fk=> exchanges', 'market_exchange_coin_id fk=> exchange coins', 'base_exchange_coin_id fk=> exchange coins'], ['min trade size', '&name', 'is active', 'logo_url']]],
    ['exchange markets', [['exchange_id fk=> exchanges', 'market_exchange_coin_key fk=> exchange coins', 'base_exchange_coin_key fk=> exchange coins'], ['min trade size', '&name', 'is active', 'logo_url']]],

    // Index the market names, but don't enforce uniqueness
    // & index would make sense here.
    // & means index by that field, for lookup, but don't assume or enforce unique fields there.
    // 

    // IsActive, Created (from bittrex)
    // summary snapshots
    // timestamp has to be unique?
    //  or combined, they are unique, part of the key.

    // timestamp is part of the pk

    // The whole key of exchange markets...
    //  It is a bit of a tricky thing to refer to the full key of another record.
    //  Possibly call it 'key' instead.



    // exchange_market_key fk=>
    //  They don't have an ID field.
    //  ID makes most sense when it's a single field.
    //   Have not defined composite field aliases

    ['exchange market summary snapshots', [['exchange_market_key fk=> exchange markets', 'timestamp'], ['last', 'bid', 'ask', 'volume', 'base_volume', 'open_buy_orders', 'open_sell_orders']]],

    // different types of volume
    //  volume in that currency (amount) and volume in the base currency
    //   do want to index by trade id too (somehow)
    //   The ids have their own context, which could vary. Not sure how globally unique they are.
    //   Want to be able to quickly lookup trades by ID.

    // Index by id, then exchange_market_id
    //  or the other way around?

    // also enforce unique in that scope

    // unique constraint could involve multiple fields.
    //  compund unique constraint?

    // So make it so that a unique constraint itself has an array of fields which it together enforces as unique.
    //  it will have a corresponding index.

    // , ['unique(id, exchange_market_id)']
    //  a list of constraints in the definition would be useful.
    //  that way there can be more fields with constraints.

    // Next coding work is to get the 

    ['exchange trades', [['exchange_market_key fk=> exchange markets', 'timestamp'], ['id', 'price', 'amount', 'volume', 'is_buy', 'is_partial_fill']]],

    // 
    //['exchange trades', ['!exchange_market_id fk=> exchange markets', '!timestamp', 'id', 'price', 'amount', 'volume', 'is_buy', 'is_partial_fill']],


    // Timespan in milliseconds. There will be a variety of values, but not all that many will be used, eg 60000 for 1 minute, 5! for one day.
    //['exchange candlesticks', ['!exchange_market_id fk=> exchange markets', 'timespan', 'start_time'], ['open', 'low', 'high', 'close', 'volume']],

    // base_volume too?
    ['exchange candlesticks', [['exchange_market_key fk=> exchange markets', 'timelength', 'start_time'], ['open', 'low', 'high', 'close', 'volume']]],


    // Maybe these could be the more generic time series values.
    // Heirachical browsing of data without indexes.
    // index(exchange_market_id, start_time)


    // and data from indexes could just go into timeserieses.
    //  more meant for misc timeseries data

    // name, begin, end all in the PK?
    //  Then there would be no need for id I presume.
    //   Would mean we could always get by the autogenerated id.

    // name, 

    // A timeseries having measurements of different lengths.
    //  Not sure about begin and end as properties of the timeseries like this... it depends on the records.
    //  Possibly a defined timeseries beginning. End can be left null if it's ongoing. Both can be null
    //   Each timeseries having an unique name makes sense.
    //    But name is different to ID, the PK.

    // Unique fields in combination being

    //['timeserieses', ['+id', 'name', 'begin', 'end'], ['info']],
    // Name also could / should be unique
    //  Just not sure that more than ID needs to go in the PK, then we could have an index composed of name, begin, end.


    // Name unique, with index   (!)
    //  Indexed by begin and length

    // Indicating name is unique
    //  A unique field
    //  A unique field constraint that applies to the table?
    //  A constraint as a property of the field?

    // Constraints should definitely be in a table of their own.
    //  Field constraints really, they will generally all apply to just one field.


    // | symbol for index
    // &! could mean unique together
    //  and not in the PK
    // &!1 could be a grouping number for the unique group.

    // Should modify Model DB to load and save constraints or Table_Constraints, Table_Record_Constraints


    // begin, length etc could even be in the info object.
    //  worth leaving them here for the moment
    //  could have an end field to help indexing
    ['timeserieses', [['+id'], ['!name', 'begin', 'length', 'info']]],
    // Meaning the name is unique


    // want to index by name though.
    // No fields specified by default, can have any fields that are relevant to the time series.
    ['timeseries values', [['!timeserieses_id fk=> timeserieses', '!timestamp'], []]]

    // General timeseries values will be discrete with their own timestamps.
    //  However, its possible they could account for a period of time.
    //  Can use the general info field to give more params.
    //   Explanation of what the timestamp actually means.
    //   Beginning of period, end of period, instance in time, instance when the data was published and it applies to a preceeding range.

    // Then the values depend on the time series.
    //  Have already expressed details about the time series in the 


];

module.exports = tables;