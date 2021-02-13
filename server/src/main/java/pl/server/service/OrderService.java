package pl.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import pl.server.model.Order;
import pl.server.model.OrderProduct;
import pl.server.repository.OrderRepository;


import java.math.BigDecimal;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Transactional
    public ResponseEntity<String> createOrder(Order order) {
        try {


            Order newOrder = new Order();

            List<OrderProduct> orderProducts = order.getProducts();
            int id = order.getUserId();
            BigDecimal totalPrice = order.getTotalPrice();

            newOrder.setUserId(id);
            newOrder.setTotalPrice(totalPrice);
            newOrder.setProducts(orderProducts);
            orderRepository.save(newOrder);

            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body("Order has been created!(" + HttpStatus.CREATED + ")");
        } catch (Exception e) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "This order cannot be created!", e);
        }
    }


    public List<Order> findAll() {
        return orderRepository.findAll();
    }

    public List<Order> findAllByUserId(Long id){
        return orderRepository.findAllByUserId(id);
    }


    public Order updateOrder(Order order){
        return orderRepository.save(order);
    }
}