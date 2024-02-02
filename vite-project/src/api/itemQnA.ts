import { productsAxios } from "./http";

const http = productsAxios();

const url = "/product-questions";

async function getQnAList(params: {
    page: number;
    size: number;
    "product-id": number;
}) {
    return await http.get(url + "/list", { params });
}

export { getQnAList };
