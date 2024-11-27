export default function ListinoSecondi() {
    return (
        <>
            <main className="flex p-6 gap-[20px] mb-[20px]">
                <div id="secondi-piatti" className="w-[50%]">
                    <h1 className="text-5xl font-bold text-center mb-[40px]"><u>MAIN COURSES</u></h1>
                    
                    {/* MEAT */}
                    <h2 className="font-bold text-3xl mb-5"><i><u>Meat</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>SLICED BEEF (approx. 350g)</b></p>
                        <p><b>€ 16.00</b></p>
                    </div>
                    ( on a bed of mixed salad, <b>Grana cheese</b>, and gluten-free polenta )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>SLICED CHICKEN BREAST</b></p>
                        <p><b>€ 12.00</b></p>
                    </div>
                    ( on a bed of mixed salad, cherry tomatoes, and gluten-free polenta )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>XL CHICKEN CUTLET WITH FRIES</b></p>
                        <p><b>€ 11.00</b></p>
                    </div>
                    ( bread crumbs, eggs, flour, salt, pepper, and chicken meat )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>ROAST BEEF STEAK WITH GLUTEN-FREE POLENTA</b></p>
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
                    <h2 className="font-bold text-3xl mb-5"><i><u>Fish</u></i></h2>
                    <div className="flex justify-between">
                        <p><b>MIXED GRILLED FISH</b></p>
                        <p><b>€ 18.00</b></p>
                    </div>
                    ( mixed fish, <b>shellfish</b>, and <b>crustaceans</b> )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>GRILLED PRAWNS AND SCAMPI</b></p>
                        <p><b>€ 16.00</b></p>
                    </div>
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>GRILLED SEABASS</b></p>
                        <p><b>€ 13.00</b></p>
                    </div>
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>MIXED FRIED SEAFOOD</b></p>
                        <p><b>€ 17.00</b></p>
                    </div>
                    ( mollusks, crustaceans, and flour )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>SLICED SWORDFISH</b></p>
                        <p><b>€ 16.00</b></p>
                    </div>
                    ( on a bed of salad, arugula, and cherry tomatoes, with <b>balsamic vinegar allergen</b> )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>GRILLED SWORDFISH</b></p>
                        <p><b>€ 14.00</b></p>
                    </div>
                    <div className="mb-8"></div>
                </div>

                {/* SIDE DISHES */}
                <div id="contorni" className="w-[50%]">
                    <h1 className="text-5xl font-bold text-center mb-[40px]"><u>SIDES</u></h1>
                    <div className="flex justify-between">
                        <p><b>FRIED POTATOES</b></p>
                        <p><b>€ 4.50</b></p>
                    </div>
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>MIXED SALAD</b></p>
                        <p><b>€ 4.00</b></p>
                    </div>
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>NAPLES-STYLE BROCCOLI RABE</b></p>
                        <p><b>€ 4.50</b></p>
                    </div>
                    ( garlic, chili pepper, broccoli rabe )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>SAUTÉED SPINACH</b></p>
                        <p><b>€ 4.00</b></p>
                    </div>
                    ( with garlic and chili pepper )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>GRILLED VEGETABLES</b></p>
                        <p><b>€ 5.00</b></p>
                    </div>
                    ( eggplant, zucchini, and bell peppers )
                    <div className="mb-8"></div>

                    {/* SALADS */}
                    <h1 className="text-4xl font-bold text-center mb-[40px]"><u>BIG SALADS</u></h1>
                    <div className="flex justify-between">
                        <p><b>MEDITERRANEAN SALAD</b></p>
                        <p><b>€ 8.00</b></p>
                    </div>
                    ( <b>buffalo mozzarella</b>, green salad, tomatoes, corn, and tuna )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>CHARLIE SALAD</b></p>
                        <p><b>€ 8.00</b></p>
                    </div>
                    ( green salad, arugula, tomatoes, <b>buffalo mozzarella</b>, and shrimp )
                    <div className="mb-3"></div>

                    <div className="flex justify-between">
                        <p><b>CHICKEN SALAD</b></p>
                        <p><b>€ 8.00</b></p>
                    </div>
                    ( green salad, arugula, cherry tomatoes, and crispy chicken )
                    <div className="mb-3"></div>
                </div>
            </main>
            <footer className="text-center text-[20px] font-bold">
                <p>( the allergenic ingredients are highlighted in bold )</p>
            </footer>
        </>
    )
}
