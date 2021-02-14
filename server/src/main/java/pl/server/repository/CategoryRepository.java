package pl.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.server.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    Category findCategoryById(Long id);
    Category findCategoryByName(String name);
    boolean existsByName(String name);
}
