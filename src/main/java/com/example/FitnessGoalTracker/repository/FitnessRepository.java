package com.example.FitnessGoalTracker.repository;

import com.example.FitnessGoalTracker.model.FitnessEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FitnessRepository extends JpaRepository<FitnessEntry, Long> {
}
	