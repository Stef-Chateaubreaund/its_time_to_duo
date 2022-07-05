class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}


class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name,cost,power,res);
        this.res = res;
        this.power = power;
        
    }

    attack(target) {
        target.res -= this.power;
        
        console.log(`${this.name} attacked ${target.name} for ${this.power}`)
    }

}

class Effect extends Card {
    constructor(name,text,cost, stat, magnitude){
        super(name,cost, text, stat, magnitude);
        this.text = text;
        this.magnitude = magnitude;
        this.stat = stat;
   
    }

    play(target) {
        if (target instanceof Unit) {
            if (this.stat === "resilience") {
                target.res += this.magnitude;
            }
            if(this.stat === "power"){
                target.power += this.magnitude;
            }
        } else {
            throw new Error("the target must be an effect?");
        }
    }
}


const redbelt = new Unit("redbelt ninja",3,3,4);
const blackbelt = new Unit("blackbelt ninja",4,5,4);
// Effect Cards
const hardAlgo= new Effect("hard algorithim",2,"increase resilience of the target  by 3","resilience",+3);
const promrejection= new Effect("unhandled promise rejection",1,"reduce resilience of the target by 2","resilience",-2);
const pairprogram= new Effect("pair programming",3,"increase  power of target  by 2","power",+2);

console.log(redbelt);
hardAlgo.play(redbelt);
console.log(redbelt);
console.log("-------------------------")
console.log(redbelt);
promrejection.play(redbelt);
console.log(redbelt);
console.log("-------------------------")
console.log(redbelt);
pairprogram.play(redbelt);
console.log(redbelt);
