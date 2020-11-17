<template>
    <ion-card class="cartCard">
        <img :src="imageURL" />
        <ion-card-content class="cartCardNameContainer">
            {{ name }}
        </ion-card-content>
        <ion-card-content>
            {{ price}}
        </ion-card-content>
        <ion-card-content class="cartCardDeleteContainer">
            <ion-icon :icon="trashOutline"></ion-icon>
        </ion-card-content>
    </ion-card>
</template>

<style scoped>
    .cartCard {
        display: flex;
        flex-direction: row;
        height: 50px;
    }
    .cartCard img {
        height: 100%;
        width: auto;
    }
    .cartCardNameContainer {
        flex: 1;
        text-align: center;
    }
</style>

<script lang="ts">
import { IonCard, IonCardContent, IonIcon } from '@ionic/vue'
import { defineComponent } from "vue"
import { trashOutline } from 'ionicons/icons';

export default defineComponent ({
    name: "CartItemCard",
    components: {
        IonCard, IonCardContent, IonIcon
    },
    props: {
        id: Number,
        description: String,
        name: String,
        price: Number,
        imageURL: String
    },
    setup() {
        return {
            trashOutline
        }
    }
})
</script>