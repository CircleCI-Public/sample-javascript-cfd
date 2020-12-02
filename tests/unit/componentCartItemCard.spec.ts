import { shallowMount } from "@vue/test-utils"
import CartItemCard from "@/components/CartItemCard.vue"

describe('CartItemCard.vue', () => {
    it('renders the menuItem prop data', () => {
        const menuItem = {
            id: 1,
            name: "French Fries",
            description: "Fried potato rectangles",
            price: "4.99",
            imageId: '1'
        }
        const wrapper = shallowMount(CartItemCard, {
            props: {menuItem}
        })
        expect(wrapper.text()).toContain('4.99')
    })

})