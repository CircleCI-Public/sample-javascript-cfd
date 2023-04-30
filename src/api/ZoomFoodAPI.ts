import axios, { AxiosResponse } from "axios";
import { MenuItem } from "../interfaces";

const BASEURL = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_NAME}/${process.env.VUE_APP_VERSION}`;

export default class ZoomFoodAPI {
  static async getMenu(): Promise<MenuItem[]> {
    const menuData = await axios.get<Promise<MenuItem[]>>(BASEURL + "/menu");
    return menuData.data;
  }

  static getImageUrl(imageID: number): string {
    return `${BASEURL}/image/${imageID}`;
  }

  static async getCart(): Promise<MenuItem[]> {
    const cartData = await axios.get<Promise<MenuItem[]>>(BASEURL + "/cart");
    return cartData.data;
  }

  static async addCartItem(item: MenuItem): Promise<AxiosResponse> {
    return axios.post(`${BASEURL}/cart`, item);
  }

  static async removeCartItem(item: MenuItem): Promise<AxiosResponse> {
    return axios.delete(`${BASEURL}/cart/${item.id}`);
  }
}
