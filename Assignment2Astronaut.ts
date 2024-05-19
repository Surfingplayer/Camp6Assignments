        interface Payload{
            masskg:number

        }
        class Astronaut implements Payload{
            name:string
            masskg: number

            constructor(_name:string,_masskg:number){
                this.name=_name,
                this.masskg=_masskg
            }
        }
        class Cargo implements Payload{
            material:string
            masskg: number

            constructor(_material:string,_masskg:number){
                this.material=_material,
                this.masskg=_masskg
            }
        }
        class Rocket{
            name:string
            totalCapacityKg: number
            cargoItems:Cargo[]
            astronauts:Astronaut[]

            constructor(_name:string,_totalCapacityKg:number,_cargoItems:Cargo[], _astronauts:Astronaut[]){
                this.name=_name,
                this.totalCapacityKg=_totalCapacityKg
                this.cargoItems=_cargoItems
                this.astronauts=_astronauts
            }

            sumMass(items: Payload[]): number {
                let acc:number=0;
                let i:number=0
                while(i<=items.length){
                    acc=acc+items[i].masskg;
                    i++;
                }
               return acc;
            }
            currentMassKg(): number {
                return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
            }
            canAdd(item: Payload): boolean {
                return this.currentMassKg() + item.masskg <= this.totalCapacityKg;
            }
        
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}