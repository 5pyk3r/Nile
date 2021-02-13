package pl.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.server.model.OrderProduct;

import java.util.Collection;
import java.util.List;

@Repository
public interface OrderProductRepository extends JpaRepository<OrderProduct, Long> {

    List<OrderProduct> findAllByOrderId(Long id);

    @Query("select op.id, op.quantity, p.name from OrderProduct as op inner join Product as p on op.id = p.id where op.order = :id")
    List<OrderProduct> findOrderProducts(Long id);
}
