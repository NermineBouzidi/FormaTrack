package com.example.backend.Repository;

import com.example.backend.Model.Participant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantRepository extends JpaRepository<Participant ,Long> {
}
