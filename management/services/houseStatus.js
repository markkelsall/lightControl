var Promise = require('Promise');

export let house = {
    id: '123',
    documentType: 'house',
    address: {
        street: '123 street name',
        area: 'street area',
        city: 'city in country',
        postcode: 'some postcode'
    },
    locked: false
};

export function get () {
    //query db to get status of house for documentType 'house'
    //for now just return house
    //TODO query CB when installed
    return new Promise(function (resolve, reject) {
        resolve(house);
    });
}

export function setStatus (status) {
    //write to db to set status as true or false
    //for now just set house
    //TODO query CB when installed
    return new Promise(function (resolve, reject) {
        house.locked = status;
        resolve(house);
    });
    house.locked = status;
}
