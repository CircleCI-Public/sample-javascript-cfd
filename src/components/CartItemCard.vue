<template>
    <ion-card class="cartCard">
        <img :src="imageUrl" class="cartImage"/>
        <div class="cartCardNameContainer"> {{ menuItem.name }} </div>
        <div>{{ menuItem.price }}</div>
        <div><ion-button><ion-icon :icon="trashOutline"></ion-icon></ion-button></div>
        <ion-card-content >

        </ion-card-content>
        <ion-card-content>

        </ion-card-content>
        <ion-card-content class="cartCardDeleteContainer">

        </ion-card-content>
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
        flex: 1;
        text-align: center;
    }
</style>

<script lang="ts">
import ZoomFoodAPI from '@/api/ZoomFoodAPI'
import { IonCard, IonCardContent, IonIcon, IonButton} from '@ionic/vue'
import { defineComponent, onMounted, ref } from "vue"
import { trashOutline } from 'ionicons/icons';

import { MenuItem } from "../interfaces"

export default defineComponent ({
    name: "CartItemCard",
    components: {
        IonCard, IonCardContent, IonIcon, IonButton
    },
    props: {
        menuItem: {
            type: Object as () => MenuItem,
            required: true
        }
    },
    setup(props) {
        const imageUrl = ref("/assets/img/eggPreview.jpg")

        onMounted(async () => {
            imageUrl.value = ZoomFoodAPI.getImageUrl(props.menuItem.imageId)
        })
        return {
            imageUrl,
            trashOutline
        }
    }
})
</script>