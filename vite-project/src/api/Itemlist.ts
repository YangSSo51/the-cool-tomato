import { itemAxios } from "./http";
import { AxiosHeaders } from "axios";

const http = itemAxios();
const headers = new AxiosHeaders();
headers.set("Content-Type", "application/json;charset=utf-8");

const URL = "/products";

async function ItemListDetailFetch(data: { id: number }) {
    const response = await http.get(`${URL}/${data.id}`);
    return response;
}

async function ItemAddFunction(data, at: string) {
    for (const [key, value] of data.entries()) {
        console.log(value)
    }
    try {
        headers.set("Authorization", `Bearer ${at}`);
        headers.set("Content-Type", "multipart/form-data");
        const response = await http.post(`${URL}`, data, { headers: headers });
        
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

async function ItemDetailDelete(id: number, at: string) {
    headers.set("Authorization", `Bearer ${at}`);
    await http.delete(`${URL}/${id}`, { headers: headers });
}

async function ItemDetailFetch(id: number) {
    const response = await http.get(`${URL}/${id}`);
    return response.data.data;
}

async function sellersMyproductsAPI(page: number, size: number, at: string) {
    headers.set("Authorization", `Bearer ${at}`);
    try {
        const response = await http.get(`${URL}/my/list`, {
            params: {
                page: page,
                size: size,
            }, headers:headers
        }, );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function SellerBroadcastFetch(data: { page: number; size: number }) {
    const response = await http.get("products/my/list", {
        params: { page: data.page, size: data.size, },
    });
    return response.data.data.list;
}

// async function ItemDetailEdit() {}

export {
    ItemListDetailFetch,
    ItemAddFunction,
    ItemListFetch,
    ItemDetailDelete,
    ItemDetailFetch,
    sellersMyproductsAPI,
    SellerBroadcastFetch,
};
