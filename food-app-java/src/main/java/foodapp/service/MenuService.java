package foodapp.service;

import foodapp.model.Menu;
import foodapp.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {

    private MenuRepository menuRepository;

    @Autowired
    public MenuService(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    public List<Menu> getKFCMenu() {
        return menuRepository.findAllByRestaurant("KFC");
    }

    public List<Menu> getMCMenu() {
        return menuRepository.findAllByRestaurant("McDonald's");
    }

    public List<Menu> getMamaManuMenu() {
        return menuRepository.findAllByRestaurant("Mama Manu");
    }

    public List<Menu> getSpartanMenu() {
        return menuRepository.findAllByRestaurant("Spartan");
    }
}
