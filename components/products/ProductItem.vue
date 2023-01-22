<template>
    <div>
        
            <div>
                <img :src="require(`~/assets/images/${media}`)">
                <h4>Carte personnalisée tapni</h4>
                <p> {{ price }} CFA</p>
            </div>
       
    </div>
</template>

<script>
export default {

    props: {
        media: String,
        price: String,
    }
}

</script>