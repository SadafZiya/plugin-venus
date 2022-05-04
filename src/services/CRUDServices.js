import http from "./HttpService";

export function getPluginList() {
    return http.get()
}
export function getPluginById(params) {
    return http.get(`/${params}`)
}
export function patchOnePlugin(id, updatedItem) {
    return http.patch(`/${id}`, updatedItem)
}