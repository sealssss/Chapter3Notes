//Create an object of key-value pairs
let contacts = {
    bff: 1234567,
    mom: 5555555,
    bro: 9876543
}

//log all
console.log(contacts);

//access a specific entry by its key
console.log(contacts.bff);

//Cant access if key doesn't exist
console.log(contacts.myself);

//add a new entry
contacts.sis = 3456677;
console.log(contacts);

//update an entry
contacts.bff = 1111111;
console.log(contacts);

//delete an entry
delete contacts.mom;
console.log(contacts);

//is there a key called __ in there?
console.log("bff" in contacts);
console.log("myself" in contacts);

//objectives are like arrays, passed by reference not by value
//notice the following

let a = {
    value: 20
};
let b = a;
let c = {
    value: 20
};

console.log(a == b);
console.log(a == c);
console.log(b == c);

console.log(a.value == c.value);

let dog = {
    dogName: 'Zelda',
    breed: 'Terrier',
    age: 9,
    size: 'medium',
    barks: true
}
console.log(dog);

let cat = {
    catName: 'Tiger',
    breed: 'Tabby',
    age: 1,
    size: 'small',
    meows: true
}
console.log(cat);

let clothes = {
    clothingBrand: 'Shein',
    location: 'website',
    type: 'soft',
    size: 'all sizes',
    fitsall: true
}
console.log(clothes);

let kitten = {
    catName: 'Chonky',
    breed: 'Ginger',
    age: '4 weeks old',
    size: 'tiny',
    hiss: 'true',
}
console.log(kitten);

let person = {
    name: 'Kim',
    age: 24,
    height: '5,8',
    weight: '116 pounds',
    hobby: 'video gamer',
}
console.log(person);