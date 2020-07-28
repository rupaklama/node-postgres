// True constant - global value that don't change

const TRAITS = require('../data/traits');

const DEFAULT_PROPERTIES = {
    nickname: 'unnamed',
    // birthdate: new Date()

    // get is keyword, getter func to return new value
    get birthdate() {
        return new Date()
    },

    get randomTraits() {
        const traits = []

        TRAITS.forEach(trait => {
            const traitType = trait.type
            const traitValues = trait.values

            const traitValue = traitValues[
                Math.floor(Math.random() * traitValues.length)
            ]

            // push to array
            traits.push({ traitType, traitValue })
        })

        return traits;
    }
}

class Dragon {
    // params as keys to fix order issues - destructuring object
    constructor({ birthdate, nickname, traits } = {})  { // set to object's default args if args are not defined
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
    }
}

// In node js, we can share objects using module.exports construct.
// exporting Dragon class
module.exports = Dragon;