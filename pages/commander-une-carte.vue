<template>
    <main>
        <div class="presentation">

            <h1>Nos différents produits</h1>
            <span></span>

            <div>
                <select name="products" id="products">
                    <option value="opt-1"> <span> Trier par : </span> Meilleures ventes</option>
                    <option value="opt-2"> Par ordre alphabétique, A-Z</option>
                    <option value="opt-3"> Par ordre alphabétique, Z-A</option>
                    <option value="opt-4"> Prix, du plus bas au plus élevé</option>
                    <option value="opt-5"> Prix, du plus élevé au plus bas </option>
                    <option value="opt-6"> Date, ancien à nouveau</option>
                    <option value="opt-7"> Date, nouveau à ancien</option>
                </select>
            </div>


        </div>

        <div class="products">
            <div>
                <img src="~/assets/images/card-1.webp">
                <h4>Carte personnalisée tapni</h4>
                <p>39,90€</p>
            </div>
            <div>
                <img src="~/assets/images/card-1.webp">
                <h4>Carte personnalisée tapni</h4>
                <p>19,90€</p>
            </div>

            <div>
                <img src="~/assets/images/card-2.webp">
                <h4>Carte personnalisée tapni</h4>
                <p>24,90€</p>
            </div>
            <div>
                <img src="~/assets/images/card-1.webp">
                <h4>Carte personnalisée tapni</h4>
                <p>39,90€</p>
            </div>
        </div>
    </main>
</template>