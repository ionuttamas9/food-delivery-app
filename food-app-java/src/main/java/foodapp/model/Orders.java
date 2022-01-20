package foodapp.model;

import javax.persistence.*;

@Entity
@Table
public class Orders {
    @Id
    @SequenceGenerator(
            name = "order_sequence",
            sequenceName = "order_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "order_sequence"
    )
    private long id;
    private String username;
    private String country;
    private String county;
    private String locality;
    private String address;
    private String theOrder;
    private double price;

    public Orders() {
    }

    public Orders(String username, String country, String county, String locality, String address, String order, double price) {
        this.username = username;
        this.country = country;
        this.county = county;
        this.locality = locality;
        this.address = address;
        this.theOrder = order;
        this.price = price;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCounty() {
        return county;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public String getLocality() {
        return locality;
    }

    public void setLocality(String locality) {
        this.locality = locality;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTheOrder() {
        return theOrder;
    }

    public void setTheOrder(String order) {
        this.theOrder = order;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
