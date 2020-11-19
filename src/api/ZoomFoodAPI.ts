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

}