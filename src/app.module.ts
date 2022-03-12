import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { ProductosModule } from './productos/productos.module';
import { DatabaseModule } from './database/database.module';
import { ProductosController } from './productos/productos.controller';
import { ProductosService } from './productos/productos.service';
import { ConfigModule } from '@nestjs/config';
import { ProveedoresController } from './proveedores/proveedores.controller';
import { ProveedoresModule } from './proveedores/proveedores.module';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private connection: Connection){
  // }
}
