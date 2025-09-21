package com.example.FitnessGoalTracker.service;

import com.example.FitnessGoalTracker.model.FitnessEntry;
import com.example.FitnessGoalTracker.repository.FitnessRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FitnessService {

    private final FitnessRepository fitnessRepository;

    public FitnessService(FitnessRepository fitnessRepository) {
        this.fitnessRepository = fitnessRepository;
    }

    public List<FitnessEntry> getAllEntries() {
        return fitnessRepository.findAll();
    }

    public Optional<FitnessEntry> getEntryById(Long id) {
        return fitnessRepository.findById(id);
    }

    public FitnessEntry saveEntry(FitnessEntry entry) {
        return fitnessRepository.save(entry);
    }

    public void deleteEntry(Long id) {
        fitnessRepository.deleteById(id);
    }
}
