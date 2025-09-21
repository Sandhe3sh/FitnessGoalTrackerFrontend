package com.example.FitnessGoalTracker.controller;

import com.example.FitnessGoalTracker.model.FitnessEntry;
import com.example.FitnessGoalTracker.service.FitnessService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fitness")
@CrossOrigin(origins = "*")
public class FitnessController {

    private final FitnessService fitnessService;

    public FitnessController(FitnessService fitnessService) {
        this.fitnessService = fitnessService;
    }

    @GetMapping
    public List<FitnessEntry> getAllEntries() {
        return fitnessService.getAllEntries();
    }

    @GetMapping("/{id}")
    public ResponseEntity<FitnessEntry> getEntryById(@PathVariable Long id) {
        return fitnessService.getEntryById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public FitnessEntry createEntry(@RequestBody FitnessEntry entry) {
        return fitnessService.saveEntry(entry);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FitnessEntry> updateEntry(@PathVariable Long id, @RequestBody FitnessEntry entry) {
        return fitnessService.getEntryById(id)
                .map(existing -> {
                    existing.setActivity(entry.getActivity());
                    existing.setDuration(entry.getDuration());
                    existing.setDate(entry.getDate());
                    existing.setCaloriesBurned(entry.getCaloriesBurned());
                    return ResponseEntity.ok(fitnessService.saveEntry(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEntry(@PathVariable Long id) {
        if (fitnessService.getEntryById(id).isPresent()) {
            fitnessService.deleteEntry(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
