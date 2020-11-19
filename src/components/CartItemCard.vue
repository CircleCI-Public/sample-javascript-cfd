<template>
    <ion-card class="cartCard">
        <img :src="menuItem.imageUrl" />
        <ion-card-content class="cartCardNameContainer">
            {{ menuItem.name }}
        </ion-card-content>
        <ion-card-content>
            {{ menuItem.price }}
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

import { MenuItem } from "../interfaces"

export default defineComponent ({
    name: "CartItemCard",
    components: {
        IonCard, IonCardContent, IonIcon
    },
    props: {
        menuItem: {
            type: Object as () => MenuItem,
            required: true
        }
    },
    setup() {
        return {
            trashOutline
        }
    }
})
</script>