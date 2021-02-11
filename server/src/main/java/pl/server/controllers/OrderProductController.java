package pl.server.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.server.models.OrderProduct;
import pl.server.repository.OrderProductRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/orderProduct")
public class OrderProductController {

    @Autowired
    private OrderProductRepository orderProductRepository;

    @GetMapping("/{id}")
    public Iterable<OrderProduct> findAllByOrderId(@PathVariable Long id){
        return this.orderProductRepository.findOrderProducts(id);
    }
}
