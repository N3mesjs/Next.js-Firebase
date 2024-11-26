export default function ListinoSecondi() {
    return (
        <>
            <main className="flex p-6 gap-[20px] mb-[20px]">
                <div id="secondi" className="w-[50%]">
                    <h1 className="text-5xl font-bold text-center mb-[40px]"><u>SECOND COURSES</u></h1>
                    <h2 className="font-bold text-3xl mb-5"><i><u>Meat based</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>SLICED BEEF ( approx. 350 g )</b></p>
                        <p><b>€ 16.00</b></p>
                    </div>
                    ( With a bed of mixed salad, <b>Grana cheese</b> and gluten-free polenta )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>SLICED CHICKEN BREAST</b></p>
                        <p><b>€ 12.00</b></p>
                    </div>
                    ( With a bed of mixed salad, cherry tomatoes, and gluten-free polenta )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>XL CHICKEN CUTLET WITH FRIES</b></p>
                        <p><b>€ 11.00</b></p>
                    </div>
                    ( bread crumbs, eggs, flour, salt, pepper, and chicken meat )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>ROAST BEEF STEAK with gluten-free polenta</b></p>
                        <p><b>€ 13.00</b></p>
                    </div>
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>XL PORK CUTLET WITH FRIES</b></p>
                        <p><b>€ 12.00</b></p>
                    </div>
                    ( bread crumbs, eggs, flour, salt, pepper, and pork meat )
                    <div className="mb-8"></div>

                    {/* FISH */}

                    <h2 className="font-bold text-3xl mb-5"><i><u>Fish based</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>MIXED GRILLED FISH</b></p>
                        <p><b>€ 18.00</b></p>
                    </div>
                    ( mixed fish and <b>shellfish and crustaceans</b> )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>GRILLED PRAWNS AND SCAMPI</b></p>
                        <p><b>€ 16.00</b></p>
                    </div>
                    ( <b>crustaceans</b> )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>GRILLED SEA BASS</b></p>
                        <p><b>€ 13.00</b></p>
                    </div>
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>MIXED FRIED FISH</b></p>
                        <p><b>€ 17.00</b></p>
                    </div>
                    ( <b>mollusks, crustaceans, flour</b> - calamari, cuttlefish, gobies, and polenta )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>SLICED SWORDFISH</b></p>
                        <p><b>€ 16.00</b></p>
                    </div>
                    ( swordfish, laid on a bed of salad, arugula, and tomato, with <b>balsamic vinegar</b> allergen )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>GRILLED SWORDFISH</b></p>
                        <p><b>€ 14.00</b></p>
                    </div>
                    <div className="mb-8"></div>
                </div>

                {/* SIDE DISHES */}
                <div>
                    <div id="contorni">
                        <h1 className="text-5xl font-bold text-center mb-[40px]"><u>SIDE DISHES</u></h1>
                        <div className="flex justify-between">
                            <p><b>FRENCH FRIES</b></p>
                            <p><b>€ 3.00</b></p>
                        </div>
                        <div className="mb-3"></div>

                        <div className="flex justify-between">
                            <p><b>GRILLED VEGETABLES</b></p>
                            <p><b>€ 4.50</b></p>
                        </div>
                        ( zucchini, eggplants, bell peppers )
                        <div className="mb-3"></div>

                        <div className="flex justify-between">
                            <p><b>MIXED SALAD</b></p>
                            <p><b>€ 3.00</b></p>
                        </div>
                        ( lettuce, carrots, radicchio, cherry tomatoes, corn )
                        <div className="mb-8"></div>
                    </div>

                    {/* SALAD */}

                    <div id="insalatone">
                        <h1 className="text-5xl font-bold text-center mb-[40px]"><u>SALADS</u></h1>
                        <div className="flex justify-between">
                            <p><b>CAESAR SALAD</b></p>
                            <p><b>€ 9.00</b></p>
                        </div>
                        ( romaine lettuce, <b>Grana cheese</b>, croutons, grilled chicken, Caesar dressing )
                        <div className="mb-3"></div>

                        <div className="flex justify-between">
                            <p><b>GREEK SALAD</b></p>
                            <p><b>€ 8.50</b></p>
                        </div>
                        ( mixed salad, cucumbers, tomatoes, red onions, olives, <b>feta cheese</b>, oregano, olive oil )
                        <div className="mb-3"></div>

                        <div className="flex justify-between">
                            <p><b>MEDITERRANEAN SALAD</b></p>
                            <p><b>€ 9.50</b></p>
                        </div>
                        ( mixed salad, cherry tomatoes, olives, tuna, <b>mozzarella cheese</b>, oregano, olive oil )
                        <div className="mb-3"></div>
                    </div>
                </div>
            </main>
            <footer className="text-center text-[20px] font-bold">
                <p>( the allergenic ingredients are highlighted in bold )</p>
                <p>COVER CHARGE € 2.20</p>
            </footer>
        </>
    )
}
