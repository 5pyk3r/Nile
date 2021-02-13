package pl.server.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.server.model.OrderProduct;
import pl.server.service.OrderProductService;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/orderProduct")
//                      |
//was not wthis bellow _\/
@RequiredArgsConstructor
public class OrderProductController {

    private final OrderProductService orderProductService;

    @GetMapping("/{id}")
    public List<OrderProduct> findAllByOrderId(@PathVariable Long id){
        return orderProductService.findOrderProductsById(id);
    }
}