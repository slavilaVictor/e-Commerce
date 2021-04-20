package eu.victor.ro.springbootecommerce.repo;

import eu.victor.ro.springbootecommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product,Long> {
}
