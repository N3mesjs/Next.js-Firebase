export default function ListinoPrimi() {
    return (
        <>
            <main className="flex flex-row gap-16 px-12 py-8 mb-4 w-full max-w-[1800px] mx-auto">
                <div id="antipasti" className="w-1/2 px-6">
                    <h1 className="text-5xl font-bold text-center mb-12 underline">STARTERS</h1>
                    <h2 className="font-bold text-3xl mb-8 italic underline">Fish based</h2>
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">MIXED SEAFOOD STARTER – Antipasto misto mare</p>
                        <p className="text-xl font-bold">€ 18.00</p>
                    </div>
                    <p className="text-lg mb-6">
                        (boiled mixed seafood, <b>shellfish</b>, and <b>crustaceans</b>, parsley, <b>sulfites, mayonnaise</b>)
                    </p>

                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">CREAMED SALT COD WITH CROSTINI – Baccalà mantecato con crostini</p>
                        <p className="text-xl font-bold">€ 12.00</p>
                    </div>
                    <p className="text-lg mb-6">
                        (<b>milk</b> allergen)
                    </p>

                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">MIXED FISH BRUSCHETTAS – Bruschette miste di pesce <span className="text-base font-normal">(shellfish, crustaceans, sulfites)</span></p>
                        <p className="text-xl font-bold">€ 10.50</p>
                    </div>
                    <p className="text-lg mb-6">
                        (smoked salmon, <b>creamed salt cod with shrimp and marinated anchovies, sulfites</b>)
                    </p>

                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">MIXED CLAM SOUP – Zuppetta di cappe miste <span className="text-base font-normal">(shellfish)</span></p>
                        <p className="text-xl font-bold">€ 15.00</p>
                    </div>
                    <p className="text-lg mb-6">
                        (<b>clams and mussels</b>, garlic, pepper, parsley, and tomato)
                    </p>

                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">MUSSEL PEPPER POT – Pepata di cozze <span className="text-base font-normal">(shellfish)</span></p>
                        <p className="text-xl font-bold">€ 11.00</p>
                    </div>
                    <p className="text-lg mb-10">
                        (garlic, pepper, <b>mussels</b>, and parsley)
                    </p>

                    <h2 className="font-bold text-3xl mb-8 italic underline">Meat based</h2>
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">RAW HAM AND BURRATA STARTER – Antipasto all’italiana</p>
                        <p className="text-xl font-bold">€ 13.00</p>
                    </div>
                    <p className="text-lg mb-6">
                        (Prosciutto crudo with <b>burrata</b>)
                    </p>

                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">OLIVE ASCOLANE – Olive ascolane <span className="text-base font-normal">(<b>eggs, flour</b>)</span></p>
                        <p className="text-xl font-bold">€ 5.50</p>
                    </div>
                    <p className="text-lg mb-6"></p>

                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">FRITTO NAPOLI – Fritto Napoli <span className="text-base font-normal">(<b>eggs, flour, milk</b>) (all pieces are bite-sized)</span></p>
                        <p className="text-xl font-bold">€ 7.50</p>
                    </div>
                    <p className="text-lg mb-6">
                        (<b>croquettes, arancino, mini calzones</b> with ham and <b>ricotta</b>, sausage with broccoli rabe, French fries)
                    </p>

                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">BRUSCHETTAS (2 pieces) – Bruschette (2 pezzi)</p>
                        <p className="text-xl font-bold">€ 6.00</p>
                    </div>
                    <p className="text-lg mb-6">
                        (fresh tomatoes, garlic, basil, oregano, and chili pepper)
                    </p>

                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">BRESAOLA WITH ARUGULA AND GRANA STARTER – Bresaola con rucola e grana</p>
                        <p className="text-xl font-bold">€ 12.00</p>
                    </div>
                    <p className="text-lg mb-6">
                        (bresaola, arugula, <b>Grana cheese</b>)
                    </p>
                </div>

                <div id="primi" className="w-1/2 px-6">
                    <h1 className="text-5xl font-bold text-center mb-12 underline">FIRST COURSES</h1>
                    <h2 className="font-bold text-3xl mb-8 italic underline">Fish based</h2>
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">SPAGHETTI AL CARTOCCIO – Spaghetti al cartoccio <span className="text-base font-normal">(shellfish and crustaceans)</span></p>
                        <p className="text-xl font-bold">€ 16.00</p>
                    </div>
                    <p className="text-lg mb-6">
                        (garlic, parsley, pepper, tomatoes, <b>mussels and clams, scampi and king prawns</b>)
                    </p>

                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">SPAGHETTI ALLO SCOGLIO – Spaghetti allo scoglio <span className="text-base font-normal">(shellfish and crustaceans)</span></p>
                        <p className="text-xl font-bold">€ 17.00</p>
                    </div>
                    <p className="text-lg mb-6">
                        (garlic, parsley, pepper, onion, tomatoes, <b>calamari, shrimp tails, mussels, and clams</b>)
                    </p>

                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">SCIALATIELLI ALLA PESCATORA – Scialatielli alla pescatora</p>
                        <p className="text-xl font-bold">€ 13.00</p>
                    </div>
                    <p className="text-lg mb-6">
                        (garlic, <b>peeled mixed fish</b>, <b>shellfish and crustaceans</b> with tomatoes)
                    </p>

                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">CHEF’S GNOCCHI – Gnocchi dello chef <span className="text-base font-normal">(crustaceans)</span></p>
                        <p className="text-xl font-bold">€ 11.00</p>
                    </div>
                    <p className="text-lg mb-6">
                        (garlic, pepper, tomatoes, <b>shrimp tails</b>, and parsley)
                    </p>

                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">SPAGHETTI WITH CLAMS – Spaghetti alle vongole <span className="text-base font-normal">(shellfish)</span></p>
                        <p className="text-xl font-bold">€ 16.00</p>
                    </div>
                    <p className="text-lg mb-6">
                        (garlic, parsley, pepper, and <b>clams</b>)
                    </p>

                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">SPAGHETTI ALLA BUSERA – Spaghetti alla busera <span className="text-base font-normal">(crustaceans)</span></p>
                        <p className="text-xl font-bold">€ 14.00</p>
                    </div>
                    <p className="text-lg mb-10">
                        (<b>scampi</b>, garlic, pepper, parsley, basil, and tomato purée)
                    </p>

                    <h2 className="font-bold text-3xl mb-8 italic underline">Meat based</h2>
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">GNOCCHI ALLA SORRENTINA AL FORNO A LEGNA – Gnocchi alla sorrentina al forno a legna</p>
                        <p className="text-xl font-bold">€ 8.50</p>
                    </div>
                    <p className="text-lg mb-6">
                        (garlic, pepper, oregano, tomato, basil, and <b>mozzarella</b>)
                    </p>

                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">PENNETTE A RAGÙ – Pennette al ragù</p>
                        <p className="text-xl font-bold">€ 7.00</p>
                    </div>
                    <p className="text-lg mb-6">
                        (onion, celery, carrots, beef, tomato)
                    </p>

                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">SPAGHETTI ALLA CARBONARA – Spaghetti alla carbonara</p>
                        <p className="text-xl font-bold">€ 9.50</p>
                    </div>
                    <p className="text-lg mb-6">
                        (pancetta, guanciale, <b>with a little cream, egg</b>, pepper)
                    </p>

                    <div className="flex justify-between items-start mb-4">
                        <p className="text-xl font-bold">GNOCCHI SPECK GORGONZOLA E NOCI – Gnocchi speck gorgonzola e noci</p>
                        <p className="text-xl font-bold">€ 9.00</p>
                    </div>
                    <p className="text-lg mb-6">
                        (speck, <b>gorgonzola, walnuts, cream</b>, and pepper)
                    </p>
                </div>
            </main>
            <footer className="text-center text-2xl font-bold leading-tight px-4 py-4 max-w-[1800px] mx-auto">
                <p>( the allergenic ingredients are highlighted in bold )</p>
                <p>COVER CHARGE € 2.20</p>
            </footer>
        </>
    )
}