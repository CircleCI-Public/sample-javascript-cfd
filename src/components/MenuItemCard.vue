<template>
    <ion-card class="menuCard" @click="addToCart">
        <img :src="imageUrl" />
        <ion-card-header>
            <ion-card-subtitle>{{ menuItem.price }}</ion-card-subtitle>
            <ion-card-title>{{ menuItem.name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            {{ menuItem.description }}
        </ion-card-content>
    </ion-card>
</template>

<style scoped>

.menuCard {
    max-width: 320px;
    height: 325px;
    cursor: pointer;
}

.menuCard img {
    height: 200px;
    width: 100%;
    object-fit: cover;
}
</style>

<script lang="ts">
import ZoomFoodAPI from '@/api/ZoomFoodAPI'
import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader } from '@ionic/vue'
import { defineComponent, ref, onMounted } from "vue"
import { MenuItem } from "../interfaces"

import useCart from "../compostables/Cart"

export default defineComponent ({
    components: {
        IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader
    },
    props: {
        menuItem: {
            type: Object as () => MenuItem,
            required: true
        }
    },
    setup(props) {
        const imageUrl = ref("/assets/img/eggPreview.jpg")
        const { load } = useCart()

        function addToCart() {
            console.log(`${props.menuItem.name} being added to cart`)
            ZoomFoodAPI.addCartItem(props.menuItem).then(() => {
                // app.vue will need to reset the cart data now.
                load()
            })
        }

        onMounted(async () => {
            imageUrl.value = ZoomFoodAPI.getImageUrl(props.menuItem.imageId)
        })
        return {
            imageUrl,
            addToCart
        }
    }
})
</script>