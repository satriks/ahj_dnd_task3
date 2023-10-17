export class Book {
    constructor(file){
        this.dataUrl = file.toDataURL('pdf')
        this.title = null
        this.size = null
    }
    

}