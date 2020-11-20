import axios, {AxiosResponse, AxiosPromise} from 'axios'
import { MenuItem } from "../interfaces"

const BASEURL = "http://localhost:3333/dsayling8/ZoomFoodToo/1.0.0"

export default class ZoomFoodAPI {

static async getMenu(): Promise<MenuItem[]> {
    try {
        const menuData = await axios.get<Promise<MenuItem[]>>(BASEURL + "/menu")
        return menuData.data
    } catch (error) {
        console.log(error)
        return error
    }
}

static getImageUrl(imageID: number): string {
    return `${BASEURL}/image/${imageID}`
}

static async getCart(): Promise<MenuItem[]> {
    try {
        const cartData = await axios.get<Promise<MenuItem[]>>(BASEURL + "/cart")
        return cartData.data
    } catch (error) {
        return error
    }
}

static async addCartItem(item: MenuItem): Promise<AxiosResponse> {
    try {
        return axios.post(`${BASEURL}/cart`, item)
    } catch (error) {
        return error
    }
}

static async removeCartItem(item: MenuItem): Promise<AxiosResponse> {
    try {
        return axios.delete(`${BASEURL}/cart/${item.id}`)
    } catch (error) {
        return error
    }
}

}