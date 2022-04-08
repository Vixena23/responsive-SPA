import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("Kółko i Krzyżyk");
    }

    async getHtml(){
        return `
            <main >
                
            <section class="tictactoe">
            
                <div class="container text-light">
                    
                    <h1>Kółko i krzyżyk</h1>
                    <p>
                        Trwa przerabianie tictactoe na stronę responsywną.
                    </p>
                    <p>
                        In progress..
                    </p>
                        
                </div>
            </section>
            
            </main>
        `;
    }
}