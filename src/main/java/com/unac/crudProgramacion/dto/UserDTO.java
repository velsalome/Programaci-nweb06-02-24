package com.unac.crudProgramacion.dto;

import jakarta.persistence.TemporalType;
import lombok.*;

import java.io.Serializable;
import java.util.Date;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class UserDTO {
        private Long idUser;
        private String name;
        private String email;
        private Date birthdate;
}
