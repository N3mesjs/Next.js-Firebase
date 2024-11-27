export default function BeverageMenu() {
    return (
        <>
            <main className="flex flex-wrap gap-10 p-6">
                <div id="wine" className="w-[30%]">
                    <h1 className="text-5xl font-bold text-center mb-[40px]"><u>WINES ON TAP</u></h1>

                    {/* RED WINE */}
                    <h2 className="font-bold text-3xl mb-5"><i><u>Red Wine</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>Cabernet Red ¼ L</b></p>
                        <p><b>€ 2.50</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Cabernet Red ½ L</b></p>
                        <p><b>€ 5.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Cabernet Red 1 L</b></p>
                        <p><b>€ 9.50</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Sparkling Raboso ¼ L</b></p>
                        <p><b>€ 2.50</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Sparkling Raboso ½ L</b></p>
                        <p><b>€ 5.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Sparkling Raboso 1 L</b></p>
                        <p><b>€ 10.00</b></p>
                    </div>

                    {/* WHITE WINE */}
                    <h2 className="font-bold text-3xl mb-5 mt-8"><i><u>White Wine</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>Chardonnay White ¼ L</b></p>
                        <p><b>€ 2.50</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Chardonnay White ½ L</b></p>
                        <p><b>€ 5.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Chardonnay White 1 L</b></p>
                        <p><b>€ 9.50</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Sparkling White Glera ¼ L</b></p>
                        <p><b>€ 3.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Sparkling White Glera ½ L</b></p>
                        <p><b>€ 6.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Sparkling White Glera 1 L</b></p>
                        <p><b>€ 11.00</b></p>
                    </div>

                    {/* BOTTLED WHITE WINES */}
                    <h2 className="font-bold text-3xl mb-5 mt-8"><i><u>Bottled White Wines</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>Pinot Grigio 12%</b></p>
                        <p><b>€ 13.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Manzoni White 13% (Cantina Conte Loredana Gasparini)</b></p>
                        <p><b>€ 14.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Chardonnay White 11.5%</b></p>
                        <p><b>€ 12.50</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Pinot Grigio 12%</b></p>
                        <p><b>€ 12.50</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Bortolomiol  (cantina valdobbiadene di treviso) (extra dry)</b></p>
                        <p><b>€ 14.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Cabernet Sauvignon Red</b></p>
                        <p><b>€ 12.50</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Cabernet Franc Red 12.5%</b></p>
                        <p><b>€ 13.00</b></p>
                    </div>
                </div>

                <div id="drinks" className="w-[30%]">
                    <h1 className="text-5xl font-bold text-center mb-[40px]"><u>BEVERAGES</u></h1>

                    {/* WATER */}
                    <h2 className="font-bold text-3xl mb-5"><i><u>Water</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>½ lt</b></p>
                        <p><b>€ 2.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>75 cl</b></p>
                        <p><b>€ 2.80</b></p>
                    </div>

                    {/* TAP */}
                    <h2 className="font-bold text-3xl mb-5 mt-8"><i><u>ON TAP</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>Krombacher Pils (vol 4.8%)</b></p>
                        <p><b>cl 20: € 2.80</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b></b></p>
                        <p><b>cl 40: € 4.80</b></p>
                    </div>
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>La Rossa Moretti (vol 7.2%)</b></p>
                        <p><b>cl 20: € 3.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b></b></p>
                        <p><b>cl 40: € 5.00</b></p>
                    </div>
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>Coca Cola</b></p>
                        <p><b>cl 33: € 3.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b></b></p>
                        <p><b>cl 50: € 4.00</b></p>
                    </div>
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>Fanta</b></p>
                        <p><b>cl 33: € 3.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b></b></p>
                        <p><b>cl 50: € 4.00</b></p>
                    </div>
                    <div className="mb-3"></div>


                    {/* BOTTLED */}
                    <h2 className="font-bold text-3xl mb-5 mt-8"><i><u>BOTTLED</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>Birra Moretti Non-Alcoholic (cl 33)</b></p>
                        <p><b>€ 3.50</b></p>
                    </div>

                    <div className="flex justify-between">
                        <p><b>Birra Moretti (vol 4.6%) (cl 66)</b></p>
                        <p><b>€ 4.00</b></p>
                    </div>

                    <div className="flex justify-between">
                        <p><b>Weisse Franziskaner (vol 5%) (cl 50)</b></p>
                        <p><b>€ 4.50</b></p>
                    </div>

                    <div className="flex justify-between">
                        <p><b>Pedavena Special (vol 5.9%) (cl 66)</b></p>
                        <p><b>€ 4.50</b></p>
                    </div>

                    <div className="flex justify-between">
                        <p><b>Ichnusa (vol 4.9%) (cl 66)</b></p>
                        <p><b>€ 4.00</b></p>
                    </div>

                    <div className="flex justify-between">
                        <p><b>Ichnusa Unfiltered (vol 4.9%) (cl 50)</b></p>
                        <p><b>€ 4.50</b></p>
                    </div>

                    <div className="flex justify-between">
                        <p><b>Messina (vol 5%) (cl 50)</b></p>
                        <p><b>€ 4.50</b></p>
                    </div>

                    {/* SOFT DRINKS */}
                    <h2 className="font-bold text-3xl mb-5 mt-8"><i><u>CANS</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>Coca Cola</b></p>
                        <p><b>€ 3.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Fanta</b></p>
                        <p><b>€ 3.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Sprite</b></p>
                        <p><b>€ 3.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Peach or Lemon Iced Tea</b></p>
                        <p><b>€ 3.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Lemonsoda</b></p>
                        <p><b>€ 3.00</b></p>
                    </div>
                </div>

                <div id="drinks" className="w-[30%]">
                        <h1 className="text-5xl font-bold text-center mb-[40px]"><u>Liqueurs & Desserts</u></h1>
                        {/* LIQUEURS */}
                        <h2 className="font-bold text-3xl mb-5 mt-8"><i><u>Liqueurs</u></i></h2>
                        <div className="flex justify-between">
                            <p><b>Amari</b></p>
                            <p><b>€ 3.00</b></p>
                        </div>
                        <div className="flex justify-between">
                            <p><b>Grappa</b></p>
                            <p><b>€ 3.50 - € 4.50</b></p>
                        </div>
                        <div className="flex justify-between">
                            <p><b>Whisky</b></p>
                            <p><b>€ 4.00 - € 5.00</b></p>
                        </div>
                        <div className="mb-3"></div>

                        <h2 className="font-bold text-3xl mb-5 mt-8"><i><u>Coffees</u></i></h2>
                        <div className="flex justify-between">
                            <p><b>COFFEE</b></p>
                            <p><b>€ 1.40</b></p>
                        </div>

                        <div className="flex justify-between">
                            <p><b>DECAFFEINATED</b></p>
                            <p><b>€ 1.40</b></p>
                        </div>

                        <div className="flex justify-between">
                            <p><b>BARLEY COFFEE</b></p>
                            <p><b>€ 1.40</b></p>
                        </div>
                        
                        <div className="flex justify-between">
                            <p><b>CORRECTED COFFEE</b></p>
                            <p><b>€ 1.60</b></p>
                        </div>

                        <div className="flex justify-between">
                            <p><b>CAPPUCCINO</b></p>
                            <p><b>€ 1.60</b></p>
                        </div>
                        <div className="mb-3"></div>

                        <h2 className="font-bold text-3xl mb-5 mt-8"><i><u>Sweets</u></i></h2>
                        <div className="flex justify-between">
                            <p><b>DESSERTS</b></p>
                            <p><b>€ 3.50</b></p>
                        </div>

                        <div className="flex justify-between">
                            <p><b>TRUFFLE</b></p>
                            <p><b>€ 4.00</b></p>
                        </div>

                        <div className="flex justify-between">
                            <p><b>TRUFFLE DROWNED IN COFFEE</b></p>
                            <p><b>€ 5.00</b></p>
                        </div>

                        <div className="flex justify-between">
                            <p><b>TRUFFLE DROWNED IN WHISKY</b></p>
                            <p><b>€ 5.50</b></p>
                        </div>
                        <div className="mb-3"></div>

                        <h2 className="font-bold text-3xl mb-5 mt-8"><i><u>HOUSE DESSERTS</u></i></h2>
                        <div className="flex justify-between">
                            <p><b>TIRAMISÙ</b></p>
                            <p><b>€ 4.50</b></p>
                        </div>
                        ( allergens: <b>eggs, alcohol, lactose, mascarpone</b> )

                        <div className="flex justify-between">
                            <p><b>HOMEMADE DESSERTS (vary every week)</b></p>
                            <p><b>€ N/A</b></p>
                        </div>

                        <div className="flex justify-between">
                            <p><b>CATALAN CREAM WITH CARAMEL</b></p>
                            <p><b>€ 4.00</b></p>
                        </div>

                        <div className="flex justify-between">
                            <p><b>PANNA COTTA ( with caramel ) or ( with berries )</b></p>
                            <p><b>€ 4.00</b></p>
                        </div>

                        <div className="flex justify-between">
                            <p><b>CHANTILLY CREAM (with puff pastry)</b></p>
                            <p><b>€ 4.50</b></p>
                        </div>
                        ( allergens: <b>flour, milk, eggs, fruit</b> )
                    </div>
            </main>
            <footer className="text-center text-[20px] font-bold">
                <p>( the allergenic ingredients are highlighted in bold )</p>
                <p>COVER CHARGE € 2.20</p>
            </footer>
        </>
    );
}
