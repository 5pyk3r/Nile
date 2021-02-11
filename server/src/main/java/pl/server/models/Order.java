package pl.server.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name ="orders")
@JsonIdentityInfo(
        property = "id",
        generator = ObjectIdGenerators.PropertyGenerator.class
)
public class Order{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    private BigDecimal totalPrice;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    private List<OrderProduct> products = new ArrayList<>();

    private int userId;

    @DateTimeFormat(pattern="dd/MM/yyyy")
    private Date date = new Date();

    @DateTimeFormat(pattern="dd/MM/yyyy")
    private Date deliveryDate;

}
