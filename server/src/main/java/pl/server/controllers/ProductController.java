package pl.server.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import pl.server.models.Product;
import pl.server.repository.ProductRepository;
import pl.server.services.AmazonS3BucketService;

import java.io.IOException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController()
@RequestMapping("/menu")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private AmazonS3BucketService amazonS3BucketService;

    @PostMapping(path = "/newProduct", consumes = "multipart/form-data")
    public String savePizza(@RequestParam("product") String data, @RequestPart("file") MultipartFile file) throws IOException {
        Product product = new ObjectMapper().readValue(data, Product.class);

        productRepository.save(product);
//        ingredientRepository.saveAll(product.getIngredients());
        return this.amazonS3BucketService.uploadFile(file);
    }

    @GetMapping("")
    public Iterable<Product> getAllProducts(){
        return productRepository.findAll();
    }

    @GetMapping(path = "", params = "name")
    public Boolean isProductByNameExists(@RequestParam(value="name") String name){
        return productRepository.existsByName(name);
    }

    @GetMapping(path = "", params = "id")
    public Product getPizzaById(@RequestParam(value="id") Long id){
        return productRepository.findProductById(id);
    }


    @PutMapping(path = "/update/{id}", consumes = "multipart/form-data")
    public Product updateProduct(@RequestParam("product") String data, @RequestBody MultipartFile file) throws IOException {
        Product product  = new ObjectMapper().readValue(data, Product.class);

        if(file != null){
            amazonS3BucketService.uploadFile(file);
        }

        return productRepository.save(product);
    }

    @DeleteMapping("/{id}")
    public void deleteRecipeById(@PathVariable("id") Long id){
        Product product = productRepository.findProductById(id);
        amazonS3BucketService.deleteFileFromBucket(product.getFileName());
        productRepository.delete(product);
    }
}
