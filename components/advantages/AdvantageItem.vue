<template>
    <div>
        <div class="advantages__child">
            <i :class="icon"></i>
            <p>
               {{ description }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        description :  String,
        icon: String, 
    }
}

</script>