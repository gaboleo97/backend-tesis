import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ProductEntity } from 'src/entity/product-entity';
import { ProductosModule } from '../productos/productos.module';


@Module({
	imports:[
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: '',
			database: 'backend-gabo-tesis', 
			entities:[
				ProductEntity
			 ],
			 synchronize:true
		}),
	ProductosModule
		
	]
	
})
export class DatabaseModule {
	constructor( private readonly connection: Connection){
	}
}
