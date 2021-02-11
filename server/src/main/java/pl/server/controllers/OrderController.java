package pl.server.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.server.models.Order;
import pl.server.repository.OrderRepository;
import pl.server.services.OrderService;

import java.io.IOException;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<String> createUserRequest(@RequestParam("order") String data) throws IOException {
        Order order = new ObjectMapper().readValue(data, Order.class);
        return orderService.createOrder(order);
    }
    @PutMapping(path = "/update/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Order updateOrder(@RequestBody Order order){
        return orderService.updateOrder(order);
    }
    @GetMapping(value = "/{id}")
    public Iterable<Order> getOrders(@PathVariable int id){
        return orderRepository.findAllByUserId(id);
    }
    @GetMapping(value = "")
    public Iterable<Order> getOrders(){
        return orderRepository.findAll();
    }
}
