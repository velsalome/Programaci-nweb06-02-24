package com.unac.crudProgramacion.controllers;

import com.unac.crudProgramacion.dto.UserDTO;
import com.unac.crudProgramacion.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.swing.text.html.parser.Entity;
import java.util.List;

@RequestMapping
@RestController
public class UserController {

    @Autowired
    private UserServices userServices;
    public ResponseEntity<UserDTO> saveUserController(UserDTO obj){
        return ResponseEntity.ok(userServices.saveUser(obj));

    }
    public ResponseEntity<List<UserDTO>> getAll
}
