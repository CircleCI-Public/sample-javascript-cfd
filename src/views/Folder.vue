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
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">FoodZoom</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <menu-item-card v-for="item in menuItems" :key="item.id" :menuItem="item"></menu-item-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref, onMounted } from "vue"
import { MenuItem } from "../interfaces"
import Axios from "axios"

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
  setup() {
    const menuItems = ref<MenuItem[]>([])

    function getMenuItems() {
      console.log("fetching menu items")
      Axios.get<MenuItem[]>('http://localhost:3333/dsayling8/ZoomFoodToo/1.0.0/menu').then(response => {
        menuItems.value = response.data
      })

    }

    onMounted(() => {
      console.log("mounted")
      getMenuItems()
    })

    return {
      menuItems
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