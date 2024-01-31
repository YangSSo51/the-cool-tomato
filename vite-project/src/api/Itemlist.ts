import { ItemAxios } from "./http";
import { AxiosHeaders } from "axios";

const http = ItemAxios();
const headers = new AxiosHeaders();
headers.set("Content-Type", "application/json;charset=utf-8");

async function Category() {
    return http.get('/categories')
}

async function ItemListDetailFetch(data : {id : number}) {
    try {
        const response = await http.post(`products/${data.id}`)
        console.log(response.data)
    }
    catch (error) {
        console.log(error)
    }
}

export {Category, ItemListDetailFetch}