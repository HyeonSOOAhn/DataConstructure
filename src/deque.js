export default class Deque{

    constructor(){
        this._storage = {};
        this._front = 0;
        this._rear = 0;
    }

    size() {
        return this._rear - this._front;
    }

    push(e) {
        this._storage[this._rear] = e;
        this._rear++;
    }

    pop() {
        return this._storage[this._front];
    }
}