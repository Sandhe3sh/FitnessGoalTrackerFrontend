package com.example.FitnessGoalTracker.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
					
@Entity
@Table(name = "fitness_entry")   // 👈 explicitly map to DB table
public class FitnessEntry {

    @Id
    	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)   // 👈 matches activity VARCHAR(100) NOT NULL
    private String activity;

    @Column(nullable = false)
    private int duration;

    @Column(nullable = false)
    private LocalDate date;

    @Column(name = "calories_burned", nullable = false)  // 👈 maps camelCase -> snake_case column
    private int caloriesBurned;

    // ✅ Default constructor
    public FitnessEntry() {}

    // ✅ All-args constructor
    public FitnessEntry(String activity, int duration, LocalDate date, int caloriesBurned) {
        this.activity = activity;
        this.duration = duration;
        this.date = date;
        this.caloriesBurned = caloriesBurned;
    }

    // ✅ Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getActivity() { return activity; }
    public void setActivity(String activity) { this.activity = activity; }

    public int getDuration() { return duration; }
    public void setDuration(int duration) { this.duration = duration; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }

    public int getCaloriesBurned() { return caloriesBurned; }
    public void setCaloriesBurned(int caloriesBurned) { this.caloriesBurned = caloriesBurned; }
}
