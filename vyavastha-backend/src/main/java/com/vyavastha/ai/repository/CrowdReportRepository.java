package com.vyavastha.ai.repository;

import com.vyavastha.ai.entity.CrowdReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CrowdReportRepository extends JpaRepository<CrowdReport, Long> {
}