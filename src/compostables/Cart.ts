import { ref } from "vue"
import ZoomFoodAPI from "../api/ZoomFoodAPI"
import { AxiosResponse } from "axios"

import { MenuItem } from "../interfaces"

export default class Cart {

    static async createCart() {

        const cartItems = ref<MenuItem[]>([])

        async function getCartItems() {
            console.log("fetching cart items")
            cartItems.value = await ZoomFoodAPI.getCart()
          }

        async function deleteCartItem(item: MenuItem): Promise<AxiosResponse> {
            console.log(`Removing item: ${item.name}`)
            return ZoomFoodAPI.removeCartItem(item)
        }

        return {
            cartItems,
            getCartItems,
            deleteCartItem

        }
    }

}