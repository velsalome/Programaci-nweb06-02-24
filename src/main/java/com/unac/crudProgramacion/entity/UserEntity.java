package com.unac.crudProgramacion.entity;

import jakarta.persistence.*;
import lombok.*;

import javax.naming.Name;
import java.io.Serializable;
import java.util.Date;

@Table(name = "users")
@Entity
@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity implements Serializable {
    @Id
    @Column(name = "id_user")
    private Long idUser;
    private String name;
    private String email;
    @Temporal(TemporalType.DATE)
    private Date birthdate;
}
