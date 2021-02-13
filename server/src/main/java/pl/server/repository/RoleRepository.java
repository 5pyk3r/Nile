package pl.server.repository;

import org.springframework.data.repository.CrudRepository;
import pl.server.model.Role;

public interface RoleRepository extends CrudRepository<Role, Long> {

    Role findByName(String name);
}
