package com.example.demo.model;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Reservation")
public class Reseration implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer IdReservation;
    @Column(name = "startDate")
    private String startDale;
    @Column(name = "devolutionDate")

}
