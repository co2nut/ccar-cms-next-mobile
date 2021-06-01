import _ from 'lodash';
import { numberToFixed } from './common-function';


function generateDummyInt(min = 0, max = 10, fixedPoint = 0) {

    if (_.isNumber(min) && !_.isNumber(max)) {
        max = min;
        min = 0;
    }
    return parseFloat(numberToFixed(Math.random() * (max - min) + min, true, fixedPoint));
}

function generateDummyString(length = 100) {
    var verbs, nouns, adjectives, adverbs, preposition;
    nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
    verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
    adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
    adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
    preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

    function sentence() {
        var rand1 = Math.floor(Math.random() * 10);
        var rand2 = Math.floor(Math.random() * 10);
        var rand3 = Math.floor(Math.random() * 10);
        var rand4 = Math.floor(Math.random() * 10);
        var rand5 = Math.floor(Math.random() * 10);
        var rand6 = Math.floor(Math.random() * 10);
        var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";


        return content;
    }

    if (_.isNumber(length)) {
        return sentence().slice(0, length)
    } else {
        return sentence();
    }
}

function generateDummyObj() {
    return {
        dummyInt: generateDummyInt(0, 1000),
        dummyStr: generateDummyString(),
    }
}

function generateDummyArrayObj(length = 10) {
    if (!_.isNumber(length)) {
        length = 10;
    }

    return [...Array(length)].map(() => {
        return generateDummyObj();
    })
}

function generateDummyArrayInt(length = 10) {
    if (!_.isNumber(length)) {
        length = 10;
    }

    return [...Array(length)].map(() => {
        return generateDummyInt(0, 10, 0);
    })
}

function generateDummyArrayStr(length = 10) {
    if (!_.isNumber(length)) {
        length = 10;
    }

    return [...Array(length)].map(() => {
        return generateDummyString();
    })
}
export {
    generateDummyInt,
    generateDummyString,
    generateDummyArrayObj,
    generateDummyArrayInt,
    generateDummyArrayStr,
}