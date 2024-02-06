import { AddItemInterface } from "../types/DataTypes";
import { itemAxios } from "./http";
import { AxiosHeaders } from "axios";

const http = itemAxios();
const headers = new AxiosHeaders();
headers.set("Content-Type", "application/json;charset=utf-8");

const URL = '/products';

async function ItemListDetailFetch(data: { id: number }) {
    const response = await http.get(`${URL}/${data.id}`);
    return response;
}

async function ItemAddFunction(data: AddItemInterface) {
    try {
        const response = await http.post(`${URL}`, data);
        return response;
    } catch (error) {
        console.error(error);
        
    }
}

async function ItemListFetch(data: { page: number; size: number }) {
    const response = await http.get(`${URL}/list`, {
        params: { page: data.page, size: data.size },
    });
    return response.data.data;
}

async function ItemDetailDelete(id: number) {
    await http.delete(`${URL}/${id}`);
}

async function ItemDetailFetch(id: number) {
    const response = await http.get(`${URL}/${id}`);
    return response.data.data;
}

async function sellersMyproductsAPI() {
    try {
        const response = await http.get(`${URL}/my/list`, {
            params: {
                page: 0,
                size: 10
            }
        })
        const responseData = response.data;
        console.log(responseData)
        if (responseData.status === 200) {
            return responseData;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function SellerBroadcastFetch(data : {page: number; size: number}) {
    const response = await http.get('products/my/list', {
        params: {page: data.page, size: data.size}
})
    return response.data.data.list
}


export {
    ItemListDetailFetch,
    ItemAddFunction,
    ItemListFetch,
    ItemDetailDelete,
    ItemDetailFetch,
    sellersMyproductsAPI,
    SellerBroadcastFetch
};
