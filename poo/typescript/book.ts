export class Book{
    private title:string
    private nPages:number
    private isbn:string
    private author:string
    private editorial:string
    constructor(title:string,nPages:number,isbn:string,author:string,editorial:string){
        this.title = title
        this.nPages = nPages
        this.isbn = isbn
        this.author = author
        this.editorial = editorial
    }

public getTitle():string{
    return this.title
}
public setTitle(title : string):void{
     this.title = title
 }
 public printTitle(){
    return `El titulo del libro es: ${this.title}`
}
public getnPages():number{
    return this.nPages
 }
 public setnPages(nPages:number):number{
    return this.nPages = nPages
 }
 public printnPages(){
     return `El num de paginas del libro es: ${this.nPages}`
 }
 public getlsbn():string{
    return this.isbn
}
public setlsbn(isbn:string):string{
    return this.isbn = isbn
}
public printlsbn(){
    return `El ISBN es: ${this.isbn}`
}
public getAuthor():string{
    return this.author
}
public setAuthor(author:string):string{
    return this.author = author
}
public printAuthor(){
    return this.author
}
public getEditorial(): string{
    return this.editorial
}
public setEditorial(editorial:string):string{
    return this.editorial = editorial
}
public printEditorial(){
    return `La editorial del libro es: ${this.editorial}`
}
public tostring():string{
  return `
    Title - ${this.title} 
    Number of Pages - ${this.nPages} 
    ISBN - ${this.isbn}
    Author - ${this.author}
    Editorial - ${this.editorial} `
    }
}
