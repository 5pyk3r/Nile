package pl.server.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.server.models.Address;

@Repository
public interface AddressRepository extends CrudRepository<Address, Long> {
}
