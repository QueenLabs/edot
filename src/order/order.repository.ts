import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class OrderRepository {
    async listOrders() {
        const orders = await readFile('database/order.json', 'utf-8');
        const content = JSON.parse(orders);
        return content;
    }

    async findByName(name: string) {
        const order = await readFile('database/order.json', 'utf-8');
        const content = JSON.parse(order);
        return content[name]
    }


}
