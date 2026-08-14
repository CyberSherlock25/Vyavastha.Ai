package com.anumati.ai.repository;

import com.anumati.ai.entity.CrowdReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CrowdReportRepository extends JpaRepository<CrowdReport, Long> {
}