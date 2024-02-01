import { productAxios } from "./http";

const http = productAxios();

const url = "/product-questions";

async function getQnAList(params: {
    page: number;
    size: number;
    "product-id": number;
}) {
    return await http.get(url + "/list", { params });
}

export { getQnAList };
