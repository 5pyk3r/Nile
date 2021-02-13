package pl.server.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.server.model.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
}
