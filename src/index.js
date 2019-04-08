class MobileConsole{
    constructor(){
        this.list = {}
    }
    set(key,value){
        this.list[key] = value
    }
    get(key){
        return this.list[key]
    }
    clesr(){
        this.list = {}
    }
}
window.MobileConsole = MobileConsole