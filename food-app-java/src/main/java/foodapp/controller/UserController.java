package foodapp.controller;

import foodapp.exceptions.UserAlreadyExistsException;
import foodapp.model.User;
import foodapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "user")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin
    @PostMapping
    @RequestMapping(path = "/login")
    public ResponseEntity<Boolean> getLoginData(@RequestBody User user){
        boolean res = userService.getLoginData(user);
        if(res) {
            return new ResponseEntity<>(res, HttpStatus.OK);
        }else {
            return new ResponseEntity<>(res, HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @PostMapping
    @RequestMapping(path = "/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        try{
            return new ResponseEntity<>(userService.registerUser(user), HttpStatus.CREATED);
        }catch(UserAlreadyExistsException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }

    }
}
