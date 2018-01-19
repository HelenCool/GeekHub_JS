import Thing from './Thing.js';

export default class Empty extends Thing {
    constructor() {
        super();
        this.elem = `__`;
        this.className = `empty`;
    }
}
