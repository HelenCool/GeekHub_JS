export default class Animal {
    constructor (name, health, type, isHunter){
        this.name = name;
        this.health = health;
        this.type = type;
        this.isHunter = isHunter || false;

        if (this.isHunter) {
            this.points = (Math.round(Math.random() * 100));
        } else {
            this.points = (Math.round(Math.random() * 10));
        }
    }
}
