import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(public orderService: OrderService) { }

    @Get()
    listOrders() {
        return this.orderService.listOrders();
    }

    @Get('/:name')
    async spesificOrder(@Param('name') name: string) {

        const data = await this.orderService.spesificOrder(name)

        if (!data) {
            throw new NotFoundException("Name not found")
        }

        return data
    }
}
