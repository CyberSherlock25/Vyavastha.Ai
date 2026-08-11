# System Architecture - 

                         ANUMATI AI
                              │
             ┌────────────────┼────────────────┐
             │                │                │
             ▼                ▼                ▼
       EVENT HOST       GOVT AUTHORITY       ADMIN
             │                │                │
             └────────────────┼────────────────┘
                              │
                              ▼
                       REACT FRONTEND
                              │
                              ▼
                     SPRING BOOT BACKEND
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
    Authentication      Application Service    AI Service
          │                   │                   │
          │                   ▼                   ▼
          │              PostgreSQL          Python AI
          │                                       │
          │                                       ▼
          │                                  RAG + LLM
          │                                       │
          │                                       ▼
          │                                 Knowledge Base
          │
          ▼
     Role Based Access
        Control

# Host - Citizen/org
Register / Login
      ↓
Create Event
      ↓
Enter Event Details
      ↓
AI checks requirements
      ↓
Upload Documents
      ↓
Submit Application
      ↓
Track Status
      ↓
Receive Decision

# Govt. Authority
Login
  ↓
Authority Dashboard
  ↓
View Assigned Applications
  ↓
Open Application
  ↓
Review Details
  ↓
Review Documents
  ↓
View AI Analysis
  ↓
Approve / Reject / Request Information
  ↓
Decision Recorded
  ↓
Event Host Notified

# Admin 
Login
  ↓
Admin Dashboard
  ↓
Platform Overview
  │
  ├── Event Hosts
  ├── Government Authorities
  ├── Applications
  ├── Approvals
  ├── Rejections
  ├── Pending Applications
  └── System Activity

# Core Life Cycle
                 EVENT HOST
                     │
                     ▼
              Create Application
                     │
                     ▼
              AI Requirement Check
                     │
                     ▼
               Upload Documents
                     │
                     ▼
                  SUBMIT
                     │
                     ▼
              ┌──────────────┐
              │   PENDING    │
              └──────┬───────┘
                     │
                     ▼
             GOVT AUTHORITY
                     │
              ┌──────┼──────┐
              │      │      │
              ▼      ▼      ▼
           APPROVE REJECT  MORE INFO
              │      │      │
              │      │      └──────► Event Host
              │      │
              └──────┴──────────────► Final Status
                                         │
                                         ▼
                                   Event Host
                                         │
                                         ▼
                                       ADMIN
                                supervises everything