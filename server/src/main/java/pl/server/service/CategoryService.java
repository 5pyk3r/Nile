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

    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }
}
