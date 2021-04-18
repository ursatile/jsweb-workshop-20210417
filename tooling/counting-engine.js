export default class CountingEngine {    
    constructor(count) {
        this.count = parseInt(count) || 0;
    }
    increment() {
        this.count++;
    }
    decrement() {
        this.count--;
    }    
}