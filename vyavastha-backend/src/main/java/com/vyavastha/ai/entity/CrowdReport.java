package com.vyavastha.ai.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

@Entity
@Table(name = "crowd_reports")
public class CrowdReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String locationName;

    @Column(nullable = false)
    private Integer estimatedPeopleCount;

    @Column(nullable = false)
    private String densityLevel;

    private String remarks;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    public CrowdReport() {
    }

    public CrowdReport(String locationName, Integer estimatedPeopleCount,
                       String densityLevel, String remarks) {
        this.locationName = locationName;
        this.estimatedPeopleCount = estimatedPeopleCount;
        this.densityLevel = densityLevel;
        this.remarks = remarks;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getLocationName() { return locationName; }
    public void setLocationName(String locationName) { this.locationName = locationName; }

    public Integer getEstimatedPeopleCount() { return estimatedPeopleCount; }
    public void setEstimatedPeopleCount(Integer estimatedPeopleCount) {
        this.estimatedPeopleCount = estimatedPeopleCount;
    }

    public String getDensityLevel() { return densityLevel; }
    public void setDensityLevel(String densityLevel) { this.densityLevel = densityLevel; }

    public String getRemarks() { return remarks; }
    public void setRemarks(String remarks) { this.remarks = remarks; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}