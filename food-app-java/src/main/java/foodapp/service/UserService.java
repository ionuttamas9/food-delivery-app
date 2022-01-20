package foodapp.service;

import foodapp.exceptions.UserAlreadyExistsException;
import foodapp.repository.UserRepository;
import foodapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Boolean getLoginData(User user){
        List<User> users = userRepository.findAll();
        for(User u : users){
            if (u.equals(user)){
                return true;
            }
        }
        return false;
    }

    public String registerUser(User user) throws UserAlreadyExistsException {
        if(userRepository.findAllByEmail(user.getEmail()).size() != 0 ) {
            throw new UserAlreadyExistsException("Email already used.");
        }else if(userRepository.findAllByUsername(user.getUsername()).size() != 0){
            throw new UserAlreadyExistsException("Username already used.");
        }else{
            userRepository.save(user);
        }
        return "Success";
    }

}
