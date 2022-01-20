package foodapp.controller;

import foodapp.model.Menu;
import foodapp.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/menu")
public class MenuController {
    private MenuService menuService;

    @Autowired
    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @CrossOrigin
    @RequestMapping(path = "/KFC")
    @GetMapping
    public List<Menu> getKFCMenu(){
        return menuService.getKFCMenu();
    }

    @CrossOrigin
    @RequestMapping(path = "/McDonald's")
    @GetMapping
    public List<Menu> getMCMenu(){
        return menuService.getMCMenu();
    }

    @CrossOrigin
    @RequestMapping(path = "/Mama Manu")
    @GetMapping
    public List<Menu> getMamaManuMenu(){
        return menuService.getMamaManuMenu();
    }

    @CrossOrigin
    @RequestMapping(path = "/Spartan")
    @GetMapping
    public List<Menu> getSpartanMenu(){
        return menuService.getSpartanMenu();
    }

}
