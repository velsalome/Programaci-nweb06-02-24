package com.unac.crudProgramacion.services.impl;

import com.unac.crudProgramacion.dao.UserDAO;
import com.unac.crudProgramacion.dto.UserDTO;
import com.unac.crudProgramacion.entity.UserEntity;
import com.unac.crudProgramacion.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServicesimpl implements UserServices {

    @Autowired
    private UserDAO userDAO;

    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        UserEntity userEntity= UserEntity.builder()
                .idUser(userDTO.getIdUser())
                .name(userDTO.getName())
                .email(userDTO.getEmail())
                .birthdate(userDTO.getBirthdate())
                .build();

        UserEntity saveUser = userDAO.save(userEntity);
        return UserDTO.builder()
                .idUser(userDTO.getIdUser())
                .name(userDTO.getName())
                .email(userDTO.getEmail())
                .birthdate(userDTO.getBirthdate())
                .build();

    }

    @Override
    public List<UserDTO> getUser() {
        List<UserEntity> userEntities = userDAO.findAll();
        return userEntities.stream() Stream<UserEntity>
        .map(userEntities.stream())
                .idUser(userDTO.getIdUser())
                .name(userDTO.getName())
                .email(userDTO.getEmail())
                .birthdate(userDTO.getBirthdate())
                .build()
        .toList();
    }
}
