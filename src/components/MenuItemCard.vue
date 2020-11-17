<template>
    <ion-card class="menuCard">
        <img :src="imageURL" />
        <ion-card-header>
            <ion-card-subtitle>{{ price }}</ion-card-subtitle>
            <ion-card-title>{{ name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            {{ description }}
        </ion-card-content>
    </ion-card>
</template>

<style scoped>

.menuCard {
    max-width: 320px;
    height: 350px;
}

.menuCard img {
    height: 220px;
    width: 100%;
    object-fit: cover;
}
</style>

<script lang="ts">
import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle } from '@ionic/vue'
import { defineComponent } from "vue"

export default defineComponent ({
    components: {
        IonCard, IonCardContent, IonCardSubtitle, IonCardTitle
    },
    props: {
        id: Number,
        description: String,
        name: String,
        price: Number,
        imageURL: String
    }
})
</script>