

export class ProductosRequestDto {
    id: number;
    name: string
    price:  number
    cantidad:  number
    create_dt?: Date
    update_dt?: Date
    stock: boolean;
    price_dist:  number
    replace_update_dt?: Date
    exp_dt?: Date
}
