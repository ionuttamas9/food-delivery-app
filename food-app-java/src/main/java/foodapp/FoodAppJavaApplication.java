package foodapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {"foodapp.*"})
@EnableJpaRepositories("foodapp.*")

public class FoodAppJavaApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodAppJavaApplication.class, args);
	}

}
