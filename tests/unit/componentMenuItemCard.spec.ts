import { shallowMount } from "@vue/test-utils"
import MenuItemCard from "@/components/MenuItemCard.vue"

describe('CartItemCard.vue', () => {
    it('renders the menuItem prop data', () => {
        const menuItem = {
            id: 1,
            name: "French Fries",
            description: "Fried potato rectangles",
            price: "4.99",
            imageId: '1'
        }
        const wrapper = shallowMount(MenuItemCard, {
            props: {menuItem}
        } as any)
        expect(wrapper.text()).toContain('French Fries')
    })

})