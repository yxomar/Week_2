export class person{
    public name:string
    public age: number
    private address: string
    constructor(name:string,age:number,address:string){
        this.name = name
        this.age = age
        this.address = address
    }
    printname():string{
        return this.name
    }
    yearofbirth(currentyear:number):number{
        return currentyear - this.age
    }
    setaddress(newaddress:string):void{
        this.address=newaddress
    }
    getaddress():string{
        return this.address
    }
}