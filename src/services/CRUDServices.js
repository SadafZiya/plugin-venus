import http from "./HttpService";

export function getAllData() {
    return http.get()
}
export function patchOneData(id, updatedItem) {
    return http.patch(`/${id}`, updatedItem)
}