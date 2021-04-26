import ins from "./request";

export default {
    getAllProducts(params) {
        return ins.get("/products/all", { params });
    },
    deleteProduct(params) {
        return ins.delete("/products/" + params.id);
    },
    editProduct(params) {
        return ins.put("/products/edit", params);
    },
    addProduct(params) {
        return ins.post("/products/add", params)
    }
}