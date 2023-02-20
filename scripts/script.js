// In version 2: translate p1 - p3 into objects... allow for different types of quotes

const numGen = (partNum) => {
    return senToUse = Math.floor(Math.random() * partNum.length); // senToUse will become the index that picks the sentence out
}; 

const motivation = {
    p1: [
        'Hello',
        'How are you today',
        'Top of the morning to you!'
    ],
    p2: [
        'if you are feeling down today, use that as motivation to be better',
        'we shine bright, so that others may shine brighter',
        'find your peace and live in it'
    ],
    p3: [
        'just because your life flickers doesn\'t mean it \'s about to go out',
        'the simplist answer is usually the correct one',
        'Allow Time And Circumstance Not Ego And Vanity To Reveal Your Wisdom'.toLowerCase()
    ],
    get sentence() {
        if(this.p1 && this.p2 && this.p3) {
            let sen = `${this.p1[numGen(this.p1)]}, ${this.p2[numGen(this.p2)]}, ${this.p3[numGen(this.p3)]}!`;
            return sen;
        }
    }
}

console.log(motivation.sentence)
