<template>
  <ion-page>
    <ion-header translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <template v-slot:start>
            <ion-menu-button></ion-menu-button>
          </template>
        </ion-buttons>
        <ion-title>Continuous Food Delivery</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Continuous Food Delivery</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <menu-item-card
          v-for="item in menuItems"
          :key="item.id"
          :menuItem="item"
        ></menu-item-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { ref, onMounted } from "vue";
import { MenuItem } from "../interfaces";
import MenuItemCard from "../components/MenuItemCard.vue";
import ZoomFoodAPI from "../api/ZoomFoodAPI";

export default {
  name: "MainMenu",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    MenuItemCard,
  },
  setup() {
    const menuItems = ref<MenuItem[]>([]);

    onMounted(async () => {
      menuItems.value = await ZoomFoodAPI.getMenu();
    });

    return {
      menuItems,
    };
  },
};
</script>

<style scoped>
ion-menu-button {
  color: var(--ion-color-primary);
}

#container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
</style>
