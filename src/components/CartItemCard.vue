<template>
    <ion-card class="cartCard" @click="deleteCartItem(menuItem)">
        <img :src="imageUrl" class="cartImage"/>
        <div class="cartCardNameContainer"> {{ menuItem.name }} </div>
        <div>{{ menuItem.price }}</div>
        <div><ion-button><ion-icon :icon="trashOutline"></ion-icon></ion-button></div>
    </ion-card>
</template>

<style scoped>
    .cartCard {
        display: flex;
        flex-direction: row;
        height: 50px;
    }

    .cartCard div {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
    }
    .cartCard img {
        height: 100%;
        width: 65px;
        object-fit: cover;
        border-radius: 8px;
    }
    .cartCardNameContainer {
        flex: 3;
        text-align: center;
    }
</style>

<script lang="ts">
import ZoomFoodAPI from "@/api/ZoomFoodAPI"
import { defineComponent, onMounted, ref } from "vue"
import { trashOutline } from 'ionicons/icons'
import { IonCard, IonIcon, IonButton } from "@ionic/vue"
import useCart from "../compostables/Cart"
import { MenuItem } from "../interfaces"

export default defineComponent ({
    name: "CartItemCard",
    components: {
        IonCard, IonIcon, IonButton
    },
    props: {
        menuItem: {
            type: Object as () => MenuItem,
            required: true
        }
    },
    setup(props) {
        const imageUrl = ref("/assets/img/eggPreview.jpg")

        const { deleteCartItem } = useCart()

        onMounted(async () => {
            imageUrl.value = ZoomFoodAPI.getImageUrl(props.menuItem.imageId)
        })
        return {
            imageUrl,
            deleteCartItem,
            trashOutline
        }
    }
})
</script>