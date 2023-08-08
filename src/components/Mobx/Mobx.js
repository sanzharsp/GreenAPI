import { makeAutoObservable } from "mobx" 

class Counter{

    bool = '';

    constructor(){
        makeAutoObservable(this)
    }

    trigger(data){
        this.bool=data
    }

}

export default new Counter();