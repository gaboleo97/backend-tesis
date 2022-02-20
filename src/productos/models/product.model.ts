export interface ProductModel {
    id: number
    name: string
    price: string | number
    cantidad: string | number
    create_dt: Date
    update_dt: Date
    stock: boolean
    price_dist: string | number
    replace_update_dt: Date
    exp_dt: Date
}
