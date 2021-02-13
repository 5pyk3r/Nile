package pl.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import pl.server.model.Product;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    Boolean existsByName(String name);
    Product findProductById(Long id);

//    @Query("select * from product where product.category.name = ")
    List<Product> findByCategory_Name(String name);

}
