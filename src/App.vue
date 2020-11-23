<template>
  <IonApp>
    <IonSplitPane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-header>
          <ion-toolbar translucent>
            <ion-title>Cart</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <CartItemCard v-for="item in cartItems" :key="item.id" :menuItem="item"/>
        </ion-content>
        <ion-footer>
          <ion-toolbar translucent>
            <div class="orderSummary">
              <h2>Order</h2>
              <div id="cartTotal">${{cartTotal}}</div>
            </div>
          </ion-toolbar>
        </ion-footer>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </IonSplitPane>
  </IonApp>
</template>

<script lang="ts">
import { IonApp, IonContent, IonFooter, IonMenu, IonToolbar, IonHeader, IonTitle, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { defineComponent, onMounted } from 'vue';
import CartItemCard from "./components/CartItemCard.vue"
import useCart from "./compostables/Cart"


export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonContent,
    IonSplitPane,
    IonFooter,
    IonMenu,
    IonRouterOutlet,
    IonToolbar,
    IonHeader,
    IonTitle,
    CartItemCard
  },
  setup() {
    const { cartItems, load, cartTotal } = useCart()

    onMounted(async () => {
      await load()
    })
    return {
      cartItems, load, cartTotal
    }
  }
});
</script>

<style scoped>

.orderSummary {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 0 20px;
}

#cartTotal {
  flex: 1;
  text-align: right;
}

ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>