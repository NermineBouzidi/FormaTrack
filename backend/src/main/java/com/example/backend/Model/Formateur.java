package com.example.backend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Formateur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;
    private String email;
    private int tel;
    private String type;
    @ManyToOne
    @JoinColumn(name = "idEmployeur")
    private Employeur employeur;

    @OneToMany(mappedBy = "formateur")
    private Set<Formation> formations;
}
