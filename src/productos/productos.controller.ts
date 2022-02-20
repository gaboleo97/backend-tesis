import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ProductEntity } from '../entity/product-entity';
import { ProductosRequestDto } from './dto/productos-requets.dto';
import { ProductosResponseDto } from './dto/productos-response.dto';
import { ProductosService } from './productos.service';


@Controller('productos')
export class ProductosController {

    constructor(private product: ProductosService){}


    @Post('nuevoproducto')
    async postNewProducto(@Body() req: ProductosRequestDto): Promise<ProductosResponseDto> {
        return await this.product.postNewProducto(req)
      }




      

}
