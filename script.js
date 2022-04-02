'use strict';

///////////////////// 128: DEFAULT PARAMETERS //////////////////////////////
/*
const booking = [];

const createBooking = function (flightNum, numPassengers=1, prices=900*numPassengers) {
    /// default values setting...
    // numPassengers ||= 1;
    // prices ||= 1;

    const bookings = {
        flightNum,
        numPassengers,
        prices
    }
    console.log(bookings);
    booking.push(bookings)
};
createBooking('B6123', '9');

//////////////////////// 129: VALUES VS REFRENCES ///////////////////////////////

const passenger = {
    pessengerName: 'Muhammad Usman',
    passpord: 1234567890
}

const chekiIn = function (name, paspordNo) {
    if (passenger.passpord === 1234567890) {
        alert('checked in')
    } else {
        alert('Wrong Passpord');
    }
}

console.log(chekiIn(passenger));


/////////////////////// 130: FIRST-CLASS AND HIGHER-ORDER FUNCTIONS//////////////////////////////////

alert('---JUST A THEORY LECTURE---');

/////////////////////// 131: FUNCTIONS ACCEPTING CALLBACK FUNCTIONS /////////////////////////////////

const delSPaces = function (word) {
    return word.replaceAll(/ /g, '').toLowerCase();
}

const w1Upper = function (word) {
    const [first, ...others] = word.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (word, f) {
    console.log(`originalstring: ${word}`);

    console.log(`transformed string: ${f(word)}`);

    console.log(`transformed by: ${f.name}`);
}

transformer('love your family.', w1Upper);
transformer('love your family.', delSPaces);


////////////////////// 132: FUNCTIONS RETURNING FUNCTIONS ///////////////////////////////


const greetings =message=>to=>console.log(`${message} dear ${to}.`);
    


const result = greetings('Asalam o Alaikum');
result('usman');

greetings('take care')('of your parents')


/////////////////// 133: THE CALL NAD APPLY METHODS /////////////////////////////////////


const laufthansa = {
    airline: 'PIA',
    code: 'Lh',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} ${this.code}${flightNum}... `
        );
    }
}

laufthansa.book('5471','usman')

///////////////////// 134: THE BIND METHOD ///////////////////////////////////
*/
