package pl.server.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.server.model.Category;
import pl.server.repository.CategoryRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {


    private final CategoryRepository categoryRepository;

    public void save(Category category){
        categoryRepository.save(category);
    }
    public List<Category> findAll(){
        return categoryRepository.findAll();
    }
    public Category findCategoryByName(String name){
        return categoryRepository.findCategoryByName(name);
    }
    public Category findCategoryById(Long id){
        return categoryRepository.findCategoryById(id);
    }
    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }

    public Boolean existsByName(String name) {
        return categoryRepository.existsByName(name);
    }
    public void removeCategory(Category category){
        categoryRepository.delete(category);
    }
}
