<template>
    <div>
        
            <div>
                <img :src="require(`~/assets/images/${media}`)">
                <h4>{{ title }}</h4>
                <p> {{ price }} </p>
            </div>
       
    </div>
</template>

<script>
export default {

    props: {
        media: String,
        price: String,
        title:String,
    }
}

</script>