package pl.server.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import pl.server.model.Category;
import pl.server.model.Product;
import pl.server.repository.ProductRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    private final CategoryService categoryService;

    @Transactional
    public ResponseEntity<String> save(Product productObject) {
        try {
//            Category category = categoryService.findCategoryByName(productObject.getCategory().getName());

            Product product = Product.builder().
                    id(productObject.getId())
                    .name(productObject.getName())
                    .price(productObject.getPrice())
                    .fileName(productObject.getFileName())
                    .description(productObject.getDescription())
                    .category(productObject.getCategory())
                    .build();

//            product.setId(productObject.getId());
//            product.setName(productObject.getName());
//            product.setPrice(productObject.getPrice());
//            product.setFileName(productObject.getFileName());
//            product.setDescription(productObject.getDescription());
//            product.setCategory(product.getCategory());

            productRepository.save(product);
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body("Order has been created!(" + HttpStatus.CREATED + ")");
        } catch (Exception e) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "This order cannot be created!", e);
        }
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
