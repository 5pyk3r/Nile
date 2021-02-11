package pl.server.services;

import pl.server.dto.AddressDto;
import pl.server.dto.UserDto;
import pl.server.models.Role;

import java.util.Set;

public interface UserService {

    void save(UserDto user, AddressDto addressDto, Set<Role> roles);
}
