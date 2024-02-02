import { ItemAxios } from "./http";
import { AxiosHeaders } from "axios";

const http = ItemAxios();
const headers = new AxiosHeaders();
headers.set("Content-Type", "application/json;charset=utf-8");

async function Category() {
    return http.get("/categories");
}

async function ItemListDetailFetch(data: { id: number }) {
    try {
        const response = await http.get(`products/${data.id}`);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

async function ItemAddFunction(data: {
    categoryId: number;
    productName: string;
    productContent: string;
    paymentLink: string;
    price: number;
    deliveryCharge: number;
    quantity: number;
}) {
    try {
        const response = await http.post("/products", data);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function ItemListFetch(data: { page: number; size: number }) {
    const response = await http.get("/products/list", {
        params: { page: data.page, size: data.size },
    });
    return response.data.data.list;
}

async function ItemDetailDelete(id : number) {
    const response = await http.delete(`/products/${id}`)
    console.log(response)
}

export { Category, ItemListDetailFetch, ItemAddFunction, ItemListFetch, ItemDetailDelete };
