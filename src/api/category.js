import ins from "./request";
export default {
    getAllCategory(params) {
        return ins.get("/category/all", { params })
    }
}