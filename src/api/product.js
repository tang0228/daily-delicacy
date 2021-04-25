import ins from "./request";

export default {
    getAllProducts(params) {
        return ins.get("/products/all", { params });
    },
    deleteProduct(params) {
        return ins.delete("/products/" + params.id);
    }
}