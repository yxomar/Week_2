import { person } from "./person";
export class contacts{
    public people:person[]
    constructor(){
      this.people = []
}
public printcalendar(){
    return this.people
}
}