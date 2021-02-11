package pl.server.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.server.models.Order;

import java.util.List;

@Repository
public interface OrderRepository extends CrudRepository<Order, Long> {

//    List<Order> getOrdersByUserEmail(@Param("userEmail") String userEmail);


//        @Query("select id from product ")
//        String getSumOfTodayEarnings(@Param("dateFrom") Date dateFrom, @Param("dateTo") Date dateTo);
/*
select op.id, op.quantity, op.order_id, p.name from order_product as op inner join Product as p on op.product_id = p.id where op.order_id = 2
SELECT SUM(TOTAL_PRICE) from orders where date between '2020-12-31 10:31:23.998' and '2021-01-07 10:43:22.511'
*/
    List<Order> findAllByUserId(int id);
}
