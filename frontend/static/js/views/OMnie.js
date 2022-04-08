import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("O mnie");
    }

    async getHtml(){
        return `
            <main >
            
            <section class="glossary">
            
                <div class="container text-light">
                    
                    <h1>O mnie</h1>
                    <p>
                        In progress.
                    </p>
                        
                </div>
            </section>
            
            </main>
        `;
    }
}