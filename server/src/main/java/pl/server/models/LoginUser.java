package pl.server.models;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class LoginUser {

    @NotBlank
    private String email;

    @NotBlank
    private String password;

}
