<template>
  <ion-page>
    <ion-header translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>FoodZoom</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      Not actually sure where this secondary header is used/shown,
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">FoodZoom</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <menu-item-card v-for="item in menuItems" v-bind:key="item.id" :name="item.name" :price="item.price" :description="item.description" :imageURL="item.imageURL"></menu-item-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

import MenuItemCard from '../components/MenuItemCard.vue'

export default {
  name: 'Menu',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    MenuItemCard
  },
   data() {
     return {
       menuItems: [
            {
                id: 1,
                description: "A tasty food item",
                name: "Chicken Wrap",
                price: 14.99,
                imageURL: "assets/menuPictures/burger-1830702_1920.jpg"
            },
            {
                id: 2,
                description: "That one from Pokemon Snap",
                name: "Stew",
                price: 14.99,
                imageURL: "assets/menuPictures/stew-2067152_1280.jpg"
            },
            {
                id: 3,
                description: "It looks good in the menu picture",
                name: "Tomato Soup",
                price: 14.99,
                imageURL: "assets/menuPictures/soup-1429806_1920.jpg"
            },
            {
                id: 4,
                description: "A single slice of pizza",
                name: "Slice of pizza",
                price: 14.99,
                imageURL: "assets/menuPictures/pizza-3047604_1920.jpg"
            },
            {
                id: 5,
                description: "Every kind of salad",
                name: "Salad",
                price: 14.99,
                imageURL: "assets/menuPictures/salad-2150548_1280.jpg"
            }
        ]
     }
    },
  setup() {
    return {
    }
  }
}
</script>

<style scoped>
ion-menu-button {
  color: var(--ion-color-primary);
}

#container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>