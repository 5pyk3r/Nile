package pl.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.server.model.OrderProduct;
import pl.server.repository.OrderProductRepository;

import java.util.List;

@Service
public class OrderProductService {

    @Autowired
    private OrderProductRepository orderProductRepository;

    public List<OrderProduct> findOrderProductsById(Long id){
        return orderProductRepository.findOrderProducts(id);
    }
}
