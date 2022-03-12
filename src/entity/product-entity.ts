import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';


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

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
	create_dt: Date

    @CreateDateColumn({ name: 'update_at', type: 'timestamp' })
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

