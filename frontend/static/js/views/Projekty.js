import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("Projekty");
    }

    async getHtml(){
        return `
            <main >
                
            <section class="projects">
            
                <div class="container text-light">
                    
                    <h1>Projekty</h1>
                    <p>
                        In progress.
                    </p>
                        
                </div>
            </section>
            
            </main>
        `;
    }
}