// all views will inherit from this
export default class {
    constructor(){

    }

    setTitle(title){
        document.title = title;
    }

    async getHtml(){
        return "";
    }
}