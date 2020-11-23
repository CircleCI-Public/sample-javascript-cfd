import { ref, computed } from "vue"
import ZoomFoodAPI from "../api/ZoomFoodAPI"
import { MenuItem } from "../interfaces"

const cartItems = ref<MenuItem[]>([])

export default function newuseCart() {
    const load = async () => {
        console.log("Reloading the cart")
        cartItems.value = await ZoomFoodAPI.getCart()
    }

    const cartTotal = computed(() => {
        const reducer = (acc: number, item: MenuItem) => {
            return acc + item.price
        }
        return cartItems.value.reduce(reducer, 0)
    })

    const deleteCartItem = async (item: MenuItem): Promise<void> => {
        console.log(`Removing item: ${item.name}`)
        await ZoomFoodAPI.removeCartItem(item)
        load()
    }

    return {
        cartItems, load, deleteCartItem, cartTotal
    }
}