package pl.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import pl.server.dto.AddressDto;
import pl.server.dto.UserDto;
import pl.server.models.Role;
import pl.server.repository.UserRepository;

import java.util.Set;

public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public void save(UserDto user, AddressDto addressDto, Set<Role> roles) {
    }
}
