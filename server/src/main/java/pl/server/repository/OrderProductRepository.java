package pl.server.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.server.models.OrderProduct;

import java.util.Collection;

@Repository
public interface OrderProductRepository extends CrudRepository<OrderProduct, Long> {

    Iterable<OrderProduct> findAllByOrderId(Long id);

    @Query("select op.id, op.quantity, p.name from OrderProduct as op inner join Product as p on op.id = p.id where op.order = :id")
    Collection<OrderProduct> findOrderProducts(Long id);
}
