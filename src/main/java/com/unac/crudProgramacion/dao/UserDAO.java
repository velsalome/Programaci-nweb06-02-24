package com.unac.crudProgramacion.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unac.crudProgramacion.entity.UserEntity;

public interface UserDAO extends JpaRepository <UserEntity, Integer>{
}
