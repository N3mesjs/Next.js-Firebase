export default function ListinoPrimi() {
    return (
        <>
            <main className="flex p-6 gap-[20px] mb-[20px]">
                <div id="antipasti" className="w-[50%]">
                    <h1 className="text-5xl font-bold text-center mb-[40px]"><u>ANTIPASTI</u></h1>
                    <h2 className="font-bold text-3xl mb-5"><i><u>Fish based</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>MIXED SEAFOOD STARTER</b></p>
                        <p><b>€ 18.00</b></p>
                    </div>
                    ( boiled mixed seafood, <b>shellfish</b>, and <b>crustaceans</b>, parsley, <b>sulfites, mayonnaise</b> )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>CREAMED SALT COD WITH CROSTINI</b></p>
                        <p><b>€ 12.00</b></p>
                    </div>
                    ( <b>milk</b> allergen )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>MIXED FISH BRUSCHETTAS</b> ( shellfish, crustaceans, sulfites )</p>
                        <p><b>€ 10.50</b></p>
                    </div>
                    ( smoked salmon, <b>creamed salt cod with shrimp and marinated anchovies, sulfites</b> )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>MIXED CLAM SOUP</b> ( shellfish )</p>
                        <p><b>€ 15.00</b></p>
                    </div>
                    ( <b>clams and mussels</b>, garlic, pepper, parsley, and tomato )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>MUSSEL PEPPER POT</b> ( shellfish )</p>
                        <p><b>€ 11.00</b></p>
                    </div>
                    ( garlic, pepper, <b>mussels</b>, and parsley )
                    <div className="mb-8"></div>

                    {/* MEAT */}

                    <h2 className="font-bold text-3xl mb-5"><i><u>Meat based</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>RAW HAM AND BURRATA STARTER</b></p>
                        <p><b>€ 13.00</b></p>
                    </div>
                    ( Prosciutto crudo with <b>burrata</b> )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>OLIVE ASCOLANE</b> ( <b>eggs, flour</b> )</p>
                        <p><b>€ 5.50</b></p>
                    </div>
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>FRITTO NAPOLI</b> ( <b>eggs, flour, milk</b> ) ( all pieces are bite-sized )</p>
                        <p><b>€ 7.50</b></p>
                    </div>
                    ( <b>croquettes, arancino, mini calzones</b> with ham and <b>ricotta</b>, sausage with broccoli rabe, French fries )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>BRUSCHETTAS ( 2 pieces )</b></p>
                        <p><b>€ 6.00</b></p>
                    </div>
                    ( fresh tomatoes, garlic, basil, oregano, and chili pepper )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>BRESAOLA WITH ARUGULA AND GRANA STARTER</b></p>
                        <p><b>€ 12.00</b></p>
                    </div>
                    ( bresaola, arugula, <b>Grana cheese</b> )
                    <div className="mb-3"></div>
                </div>

                {/* PRIMI */}

                <div id="primi" className="w-[50%]">
                    <h1 className="text-5xl font-bold text-center mb-[40px]"><u>PRIMI PIATTI</u></h1>
                    {/* FISH */}
                    <h2 className="font-bold text-3xl mb-5"><i><u>Fish based</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>SPAGHETTI AL CARTOCCIO</b> ( shellfish and crustaceans )</p>
                        <p><b>€ 16.00</b></p>
                    </div>
                    ( garlic, parsley, pepper, tomatoes, mussels and clams, scampi and king prawns )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>SPAGHETTI ALLO SCOGLIO</b> ( shellfish and crustaceans ) </p>
                        <p><b>€ 17.00</b></p>
                    </div>
                    ( garlic, parsley, pepper, onion, tomatoes, calamari, shrimp tails, mussels, and clams )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>SCIALATIELLI ALLA PESCATORA</b></p>
                        <p><b>€ 13.00</b></p>
                    </div>
                    ( garlic, peeled mixed fish, shellfish and crustaceans with tomatoes )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>CHEF’S GNOCCHI</b> ( crustaceans )</p>
                        <p><b>€ 11.00</b></p>
                    </div>
                    ( garlic, pepper, tomatoes, shrimp tails, and parsley )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>SPAGHETTI WITH CLAMS</b> ( shellfish )</p>
                        <p><b>€ 16.00</b></p>
                    </div>
                    ( garlic, parsley, pepper, and clams )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>SPAGHETTI ALLA BUSERA</b> ( crustaceans )</p>
                        <p><b>€ 14.00</b></p>
                    </div>
                    ( scampi, garlic, pepper, parsley, basil, and tomato purée )
                    <div className="mb-8"></div>

                    {/* MEAT */}

                    <h2 className="font-bold text-3xl mb-5"><i><u>Meat based</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>GNOCCHI ALLA SORRENTINA AL FORNO A LEGNA</b></p>
                        <p><b>€ 8.50</b></p>
                    </div>
                    ( garlic, pepper, oregano, tomato, basil, and mozzarella )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>PENNETTE A RAGÙ</b></p>
                        <p><b>€ 7.00</b></p>
                    </div>
                    ( onion, celery, carrots, beef, tomato )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>SPAGHETTI ALLA CARBONARA</b></p>
                        <p><b>€ 9.50</b></p>
                    </div>
                    ( pancetta, guanciale, with a little cream, egg, pepper )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>GNOCCHI SPECK GORGONZOLA E NOCI</b></p>
                        <p><b>€ 9.00</b></p>
                    </div>
                    ( speck, gorgonzola, walnuts, cream, and pepper )
                    <div className="mb-3"></div>
                </div>
            </main>
            <footer className="text-center text-[20px] font-bold">
                <p>( the allergenic ingredients are highlighted in bold )</p>
                <p>COVER CHARGE € 2.20</p>
            </footer>
        </>
    )
}