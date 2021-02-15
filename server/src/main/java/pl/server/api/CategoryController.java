package pl.server.api;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.server.model.Category;
import pl.server.service.CategoryService;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/categories")
public class CategoryController {

    private final CategoryService categoryService;

    @PostMapping(path = "", consumes = "multipart/form-data")
    public void saveCategory(@RequestParam("category") String data) throws JsonProcessingException {
        Category category = new ObjectMapper().readValue(data, Category.class);
        categoryService.save(category);
    }

    @GetMapping(path= "")
    public List<Category> getAllCategories(){
        return categoryService.getAllCategories();
    }

    @GetMapping(path = "", params = "id")
    public Category getProductById(@RequestParam(value="id") Long id){
        return categoryService.findCategoryById(id);
    }

    @GetMapping(path = "", params = "name")
    public Boolean isProductExists(@RequestParam(value="name") String name){
        return categoryService.existsByName(name);
    }

    @PutMapping(path = "/{id}", consumes = "multipart/form-data")
    public void updateCategory(@RequestParam("category") String data) throws IOException {
        Category category  = new ObjectMapper().readValue(data, Category.class);
        categoryService.save(category);
    }

    @DeleteMapping("/{id}")
    public void deleteCategoryById(@PathVariable("id") Long id){
        Category category = categoryService.findCategoryById(id);
        categoryService.removeCategory(category);
    }
}
