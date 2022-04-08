import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("Kontakt");
    }

    async getHtml(){
        return `
            <main >
                
            <section class="contact">
            
                <div class="container text-light">
                    
                    <h1>Kontakt</h1>
                    <p>
                        In progress.
                    </p>
                        
                </div>
            </section>
            
            </main>
        `;
    }
}