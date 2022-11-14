import { Injectable } from '@nestjs/common';
import { totalmem } from 'os';
import BaseResponse from 'src/response/BaseResponse';
import ResponseCode from 'src/response/ResponseCode';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
    constructor(public orderRepo: OrderRepository) { }

    async listOrders() {
        const orders = await this.orderRepo.listOrders()

        return new BaseResponse(ResponseCode.SUCCESS, true, orders, ResponseCode.SUCCESS.message)
    }


    async spesificOrder(name: any) {
        const order = await this.orderRepo.findByName(name)
        const orderItems = order.items.reduce(function (res, item) {
            return res + (item.price * item.qty)
        }, 0)

        const discount = (order.discount / 100) * orderItems;
        const priceAfterDiscount = orderItems - discount

        let response = {
            orders: order,
            totalProduct: orderItems,
            discountProduct: priceAfterDiscount
        }

        return new BaseResponse(ResponseCode.SUCCESS, true, response, ResponseCode.SUCCESS.message)
    }
}
