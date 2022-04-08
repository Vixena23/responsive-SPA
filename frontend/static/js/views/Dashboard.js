import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml(){
        return `
            <main >
                
            <section class="home">
            
                <div class="container text-light">
                    
                    <h1>Strona główna</h1>
                    <p>
                        In progress.
                    </p>
                        
                </div>
            </section>
            
            </main>
        `;
    }
}