import { AddItemInterface } from "../types/DataTypes";
import { itemAxios } from "./http";
import { AxiosHeaders } from "axios";

const http = itemAxios();
const headers = new AxiosHeaders();
headers.set("Content-Type", "application/json;charset=utf-8");

async function ItemListDetailFetch(data: { id: number }) {
    const response = await http.get(`products/${data.id}`);
    return response;
}

async function ItemAddFunction(data: AddItemInterface) {
    try {
        const response = await http.post("/products", data);
        return response;
    } catch (error) {
        console.error(error);
        
    }
}

async function ItemListFetch(data: { page: number; size: number }) {
    const response = await http.get("/products/list", {
        params: { page: data.page, size: data.size },
    });
    return response.data.data;
}

async function ItemDetailDelete(id: number) {
    await http.delete(`/products/${id}`);
}

async function ItemDetailFetch(id: number) {
    const response = await http.get(`/products/${id}`);
    return response.data.data;
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
    SellerBroadcastFetch,
};
