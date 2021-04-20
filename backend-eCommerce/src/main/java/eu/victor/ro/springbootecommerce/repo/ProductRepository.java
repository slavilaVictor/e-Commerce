package eu.victor.ro.springbootecommerce.repo;

import eu.victor.ro.springbootecommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
