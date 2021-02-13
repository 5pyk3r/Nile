package pl.server.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.server.model.Category;
import pl.server.service.CategoryService;

import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RestController()
@RequestMapping("/categories")
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping(value = "")
    public List<Category> getAllCategories(){
        return categoryService.getAllCategories();
    }
}
