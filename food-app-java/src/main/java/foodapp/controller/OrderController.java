package foodapp.controller;

import foodapp.model.Orders;
import foodapp.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "shipping")
public class OrderController {
    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @CrossOrigin
    @PostMapping
    public void registerOrder(@RequestBody Orders orders){
        orderService.registerOrder(orders);
    }
}
