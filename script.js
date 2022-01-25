class Traveler{
    constructor(name){
        this._name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt(){
        return this.food += 2
    }

    eat(){
        if(this.food > 0){
            return this.food -= 1
        } else{
            return this.isHealthy = false
        }
    }
}

const travele1 = new Traveler("Renan")
// travele1.hunt()
travele1.eat()
travele1.eat()
// console.log(travele1)

class Wagon{
    constructor(capacity){
        this._capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount(){
        return this._capacity - this.passengers.length
    }

    join(traveler){
        if(this.getAvailableSeatCount() > 0){
            return this.passengers.push(traveler)
        } else{
            this.passengers.push()
        }
    }
    shouldQuarantine(){
        let result = 0
        const find = this.passengers.find(function(current){
            if(current.isHealthy == false){
                return result = true
            } else{
                return result = false
            }
        })
        return result
    }
    totalFood(){
        let result = 0
        const filter = this.passengers.filter(function(current){
            return result += current.food
        })
        return result
    }
}


// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);