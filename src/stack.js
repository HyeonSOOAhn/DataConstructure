export default class Stack{
    constructor() {
        this._storage = {};
        this._nextIndex = 0;
    }

    size() {
        return this._nextIndex + 1;
    }

    push(e) {
        this._storage[this._nextIndex++] = e;
    }

    pop() {
        if (this._nextIndex <= 0) return null;
        return this._storage[this._nextIndex--];
    }

}