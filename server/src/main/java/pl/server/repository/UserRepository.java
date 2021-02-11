package pl.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.server.models.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    boolean existsByUserName(String name);

    boolean existsByEmail(String email);

    Optional<User> findByEmail(String email);
    User findUserByEmail(String email);

    User findUserById(Long id);



}
