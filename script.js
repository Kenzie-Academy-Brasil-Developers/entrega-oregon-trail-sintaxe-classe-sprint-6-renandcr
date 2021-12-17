class Traveler{
    constructor(nome){
        this.nome = nome
        this.food = 1
        this.isHealthy = true

    }
    
    hunt(){
        if(this.hunt){
            this.food += 2
        }    
    }

    eat(){
        if(this.food > 0){
            this.food -= 1
        } else{
            this.isHealthy = false
        }
    }
}

class Wagon{
    constructor(capacity){
        this.capacity = capacity
        this.travelersList = []
        this.emptySeats = 0
    }

    getAvailableSeatCount(){
        return this.capacity - this.travelersList.length 
    }

    join(passenger){
        if(this.getAvailableSeatCount() > 0){
            this.travelersList.push(passenger)
        } else{
            this.travelersList.push()
        }
    }

    shouldQuarantine(){
        let result = 0
        for(let i = 0; i < this.travelersList.length; i++){
            if(this.travelersList[i].isHealthy === false){
                result = true
            }
        }
        return result
    }

    totalFood(){
        let result = 0
        for(let i = 0; i < this.travelersList.length; i++){
            if(this.travelersList[i].food){
                result += this.travelersList[i].food
            }
        }
        return result
    }
    
}




////////////////////////////////////

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