package com.example.demo.web;


import com.example.demo.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/api/Reservation")
public class Reservation {
    @Autowired
    private ReservationService reservationService;

    @GetMapping("/all")
    public List<com.example.demo.model.Reservation> getReservation(){
        return reservationService.getAll();
    }

    @GetMapping("/{id}")
    public List<Reservation> getReservation(@PathVariable("id") Integer idReservation){
        return reservationService.getReservation(idReservation);
    }
}
