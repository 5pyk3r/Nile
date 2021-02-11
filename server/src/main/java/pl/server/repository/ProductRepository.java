package pl.server.repository;

import org.springframework.data.repository.CrudRepository;
import pl.server.models.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {

    Boolean existsByName(String name);
    Product findProductById(Long id);

}
