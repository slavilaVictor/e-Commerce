package eu.victor.ro.springbootecommerce.repo;

import eu.victor.ro.springbootecommerce.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product,Long> {
    // add a query method
    Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);

    // !! Spring Data REST automatically exposes the endpoint : "http://localhost:8080/api/products/search/findByCategoryId" !!
    // To verify : http://localhost:8080/api/products/search/findByCategoryId?id=1
}
