import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("Pizzeria");
    }

    async getHtml(){
        return `
        <main >
		
		<section class="glossary">
		
			<div class="container text-light">
				
				<div class="row">
					<aside class="col-12 text-center my-5 text-cite fst-italic fs-5">
                        <p class="my-0">„Życie nie zawsze układa się tak, jak chcemy. Ale zawsze jest pizza”</p>
                        <p>Rachel Hauck, „Suknia ślubna”</p>                    
                    </aside>
                    <header class="text-center">
					
                        <h1>Pizzerie w Polsce</h1>
                        <p>W tej sekcji specjalnie dla Was prezentujemy subiektywne oceny poszczególnych dań z pizzeri, które znamy i z których korzystamy.</p>
                            
                    </header>
                    <div class="col-12 pizza_hut">
                        <p class="d-grid">
                            <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#pizzaHut" >
                                <span class=""><img src="./static/img/pizzaHut.png" alt="" width="30" height="30"/>
                                    Pizza Hut
                                </span>
                            </button>    
                        </p>
                        <div class="row collapse" id="pizzaHut">
                            <div class="row pizza">
                                <div class="col-10">Pizza</div>
                                <div class="col-2">Ocena</div>
                            </div>
                            <div class="row pizza">
                                <div class="col-10">1.</div>
                                <div class="col-2">...</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 pizza_na_wypasie mt-2">
                        <p class="d-grid">
                            <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#pizzaNaWypasie" >
                                <span class=""><img src="./static/img/pizzaNaWypasie.png" alt="" width="50" height="30"/>
                                    Pizza Na Wypasie
                                </span>
                            </button>    
                        </p>
                        <div class="row collapse" id="pizzaNaWypasie">
                            <div class="row pizza">
                                <div class="col-10">Pizza</div>
                                <div class="col-2">Ocena</div>
                            </div>
                            <div class="row pizza">
                                <div class="col-10">1.</div>
                                <div class="col-2">...</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 pizza_dominos mt-2">
                        <p class="d-grid">
                            <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#pizzaDominos" >
                                <span class=""><img src="./static/img/pizzaDominos.svg" alt="" width="30" height="30"/>
                                    Pizza Domino's
                                </span>
                            </button>    
                        </p>
                        <div class="row collapse" id="pizzaDominos">
                            <div class="row pizza">
                                <div class="col-10">Pizza</div>
                                <div class="col-2">Ocena</div>
                            </div>
                            <div class="row pizza">
                                <div class="col-10">1.</div>
                                <div class="col-2">...</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 pizza_da_grasso mt-2">
                        <p class="d-grid">
                            <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#pizzaDaGrasso" >
                                <span class=""><img src="./static/img/pizzaDaGrasso.png" alt="" width="45" height="30"/>
                                    Da Grasso
                                </span>
                            </button>    
                        </p>
                        <div class="row collapse" id="pizzaDaGrasso">
                            <div class="row pizza">
                                <div class="col-10">Pizza</div>
                                <div class="col-2">Ocena</div>
                            </div>
                            <div class="row pizza">
                                <div class="col-10">1.</div>
                                <div class="col-2">...</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 pizza_biesiadowo mt-2">
                        <p class="d-grid">
                            <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#pizzaBiesiadowo" >
                                <span class=""><img src="./static/img/pizzaBiesiadowo.png" alt="" width="55" height="30"/>
                                    Biesiadowo
                                </span>
                            </button>    
                        </p>
                        <div class="row collapse" id="pizzaBiesiadowo">
                            <div class="row pizza">
                                <div class="col-10">Pizza</div>
                                <div class="col-2">Ocena</div>
                            </div>
                            <div class="row pizza">
                                <div class="col-10">1.</div>
                                <div class="col-2">...</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 mt-2">
                        <p class="d-grid">
                            <button class="btn btn-dark py-2 disabled" type="button">
                                <span class="">
                                    Wkrótce...
                                </span>
                            </button>    
                        </p>
                    </div>

                    <aside class="col-12 text-center my-4 text-cite fst-italic">
                        <p class="my-0">„Don't be yourself, be a pizza. Everyone loves pizza”</p>
                        <p>Felix Kjellberg, „Ta książka cię kocha”</p>                         
                    </aside>
				</div>

					
            </div>
		</section>
		
	</main>
        `;
        
    }
}