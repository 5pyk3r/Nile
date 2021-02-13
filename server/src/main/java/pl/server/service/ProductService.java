package pl.server.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.server.model.Product;
import pl.server.repository.ProductRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public void save(Product product){
        productRepository.save(product);
    }
    public void delete(Product product){
        productRepository.delete(product);
    }
    public List<Product> findAll(){
        return productRepository.findAll();
    }
    public List<Product> findAllByCategoryName(String name){
        return productRepository.findByCategory_Name(name);
    }
    public Product findProductById(Long id){
        return productRepository.findProductById(id);
    }
    public boolean existsByName(String name){
        return productRepository.existsByName(name);
    }

}
