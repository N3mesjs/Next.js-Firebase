export default function BeverageMenu() {
    return (
        <>
            <main className="flex flex-wrap gap-10 p-6">
                {/* WINES ON TAP */}
                <div id="wine" className="w-[30%]">
                    <h1 className="text-5xl font-bold text-center mb-[40px]"><u>WINES ON TAP</u></h1>

                    {/* RED WINE */}
                    <h2 className="font-bold text-3xl mb-5"><i><u>Red Wine</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>Cabernet Red ¼ L</b></p>
                        <p><b>€ 3.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Cabernet Red ½ L</b></p>
                        <p><b>€ 5.50</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Cabernet Red 1 L</b></p>
                        <p><b>€ 10.50</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Sparkling Raboso ¼ L</b></p>
                        <p><b>€ 3.50</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Sparkling Raboso ½ L</b></p>
                        <p><b>€ 6.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Sparkling Raboso 1 L</b></p>
                        <p><b>€ 11.00</b></p>
                    </div>

                    {/* WHITE WINE */}
                    <h2 className="font-bold text-3xl mb-5 mt-8"><i><u>White Wine</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>Chardonnay White ¼ L</b></p>
                        <p><b>€ 3.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Chardonnay White ½ L</b></p>
                        <p><b>€ 5.50</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Chardonnay White 1 L</b></p>
                        <p><b>€ 10.50</b></p>
                    </div>

                    {/* SPARKLING WHITE WINE */}
                    <h2 className="font-bold text-3xl mb-5 mt-8"><i><u>Sparkling White Wine (Glera)</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>Sparkling White ¼ L</b></p>
                        <p><b>€ 3.50</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Sparkling White ½ L</b></p>
                        <p><b>€ 6.50</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Sparkling White 1 L</b></p>
                        <p><b>€ 12.00</b></p>
                    </div>

                    {/* BOTTLED WHITE WINES */}
                    <h2 className="font-bold text-3xl mb-5 mt-8"><i><u>Bottled White Wines</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>Pinot Grigio 12%</b></p>
                        <p><b>€ 14.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Manzoni White 13% (Conte Loredana Gasparini Winery)</b></p>
                        <p><b>€ 15.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Chardonnay White 11.5%</b></p>
                        <p><b>€ 14.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Bortolomiol (Valdobbiadene Prosecco Superiore Prior Brut)</b></p>
                        <p><b>€ 18.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Bortolomiol (Valdobbiadene di Treviso Winery) (Extra Dry)</b></p>
                        <p><b>€ 16.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Cabernet Sauvignon Red</b></p>
                        <p><b>€ 13.50</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Cabernet Franc Red 12.5%</b></p>
                        <p><b>€ 14.00</b></p>
                    </div>
                </div>

                {/* BEVERAGES */}
                <div id="drinks" className="w-[30%]">
                    <h1 className="text-5xl font-bold text-center mb-[40px]"><u>BEVERAGES</u></h1>

                    {/* WATER */}
                    <h2 className="font-bold text-3xl mb-5"><i><u>Water</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>½ L</b></p>
                        <p><b>€ 2.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>75 cl</b></p>
                        <p><b>€ 2.80</b></p>
                    </div>

                    {/* ON TAP */}
                    <h2 className="font-bold text-3xl mb-5 mt-8"><i><u>ON TAP</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>Krombacher Pils (vol 4.8%)</b></p>
                        <p><b>cl 20: € 3.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p></p>
                        <p><b>cl 40: € 5.50</b></p>
                    </div>
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>La Rossa Moretti (vol 7.2%)</b></p>
                        <p><b>cl 20: € 3.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p></p>
                        <p><b>cl 40: € 6.00</b></p>
                    </div>
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>Coca Cola</b></p>
                        <p><b>cl 33: € 3.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p></p>
                        <p><b>cl 50: € 4.50</b></p>
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
                        <p><b>Pedavena Special (vol 5.9%)</b></p>
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

                {/* LIQUEURS & DESSERTS */}
                <div id="liqueurs" className="w-[30%]">
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

                    {/* COFFEES */}
                    <h2 className="font-bold text-3xl mb-5 mt-8"><i><u>Coffees</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>Coffee</b></p>
                        <p><b>€ 1.40</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Decaffeinated</b></p>
                        <p><b>€ 1.40</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Barley Coffee</b></p>
                        <p><b>€ 1.40</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Corrected Coffee</b></p>
                        <p><b>€ 1.60</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Cappuccino</b></p>
                        <p><b>€ 1.60</b></p>
                    </div>
                    <div className="mb-3"></div>

                    {/* SWEETS */}
                    <h2 className="font-bold text-3xl mb-5 mt-8"><i><u>Sweets</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>Desserts</b></p>
                        <p><b>€ 4.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Truffle</b></p>
                        <p><b>€ 5.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Truffle Drowned in Coffee</b></p>
                        <p><b>€ 6.00</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Truffle Drowned in Amaro or Grand Marnier</b></p>
                        <p><b>€ 6.50</b></p>
                    </div>
                    <div className="mb-3"></div>

                    {/* HOUSE DESSERTS */}
                    <h2 className="font-bold text-3xl mb-5 mt-8"><i><u>House Desserts</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>Tiramisù</b></p>
                        <p><b>€ 4.50</b></p>
                    </div>
                    (<b>allergens:</b> <b>eggs, alcohol, lactose, mascarpone</b>)
                    <div className="flex justify-between">
                        <p><b>Homemade Desserts (vary every week)</b></p>
                        <p><b>€ N/A</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Catalan Cream with Caramel</b></p>
                        <p><b>€ 4.50</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Panna Cotta (with caramel or berries)</b></p>
                        <p><b>€ 4.50</b></p>
                    </div>
                    <div className="flex justify-between">
                        <p><b>Chantilly Cream (with puff pastry, berries or chocolate)</b></p>
                        <p><b>€ 5.00</b></p>
                    </div>
                    (<b>allergens:</b> <b>flour, milk, eggs, fruit</b>)
                </div>
            </main>
            <footer className="text-center text-[20px] font-bold">
                <p>(<b>Allergenic ingredients are highlighted in bold</b>)</p>
                <p>COVER CHARGE € 2.20</p>
            </footer>
        </>
    );
}