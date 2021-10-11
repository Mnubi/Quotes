export class Proverbs {
    showauthor:boolean; 
    constructor(public name: string, public title: string, public saying: string, public date: string) {
        this.showauthor = false;
    }
}
