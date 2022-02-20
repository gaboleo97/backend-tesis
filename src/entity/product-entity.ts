import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('product')
export class ProductEntity {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
	name: string

    @Column()
	price: number

    @Column()
	cantidad: number

    @Column()
	create_dt: Date

    @Column()
	update_dt: Date

    @Column()
    stock: boolean;

    @Column()
	price_dist: number

    @Column()
	replace_update_dt: Date

    @Column()
	exp_dt: Date

}

