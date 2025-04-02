# Batch Management User Story
![Ready](https://img.shields.io/badge/Status-Ready-brightgreen)
### Feature: Batch Management

**As a** coach,  
**I want** to have the ability to create, manage, and organize batches effectively,  
**So that** I can streamline my coaching schedule and track student performance efficiently.

---

## User Flow & Detailed Steps

1. **Accessing Batch Management:**

    - **Scenario**: The coach logs into the app and navigates to the Batch Management section.
    - **Outcome**: The coach sees a dashboard listing all active and past batches along with options to create a new batch.

2. **Creating a New Batch:**

    - **Trigger**: The coach clicks on the "Create Batch" button.
    - **Steps**:
        1. The coach enters batch details, including:
            - Batch name
            - Sport type
            - Training level (e.g., Beginner, Intermediate, Advanced)
            - Maximum number of students
        2. The coach sets the training schedule:
            - Days and time slots
            - Duration of each class/session
            - start and end date (optional)
        3. The coach selects additional preferences, like:
            - Skill focus areas
            - Notes for students or parents
        4. The coach confirms and saves the batch.
            - **Outcome**: A new batch is created and listed on the dashboard.

3. **Viewing Batch Details:**

    - **Scenario**: The coach wants to see details of an existing batch.
    - **Steps**:
        1. The coach selects a batch from the dashboard.
        2. A detailed view opens, showing:
            - Batch name and sport type
            - Current student list and their details
            - Scheduled class times
            - Attendance records
            - Performance progress metrics
            - start and end date (optional)
        3. The coach can scroll through or search for specific student records.
    - **Outcome**: The coach can easily review all relevant details for effective management.

4. **Modifying a Batch:**

    - **Scenario**: The coach needs to update batch details.
    - **Steps**:
        1. The coach clicks on the "Edit" option for a specific batch.
        2. The coach can modify:
            - Schedule (change class days/times or update class duration)
            - Maximum number of students
            - Add or remove students from the batch
            - start and end date (optional)
        3. The coach confirms changes, which are then updated in the system.
    - **Outcome**: The batch details are updated, and all affected members receive notifications.

5. **Tracking Attendance:**

    - **Scenario**: The coach wants to mark attendance for a session.
    - **Steps**:
        1. The coach selects a batch and clicks on the "Mark Attendance" option for a particular date.
        2. The attendance form shows all students, and the coach can mark each student as:
            - Present
            - Absent
            - Late (with optional notes)
        3. The coach submits the attendance record.
    - **Outcome**: Attendance data is saved, and parents/students receive notifications about their attendance status.

6. **Performance Review:**

    - **Scenario**: The coach wants to review and update student performance metrics.
    - **Steps**:
        1. The coach clicks on a student's profile in the batch.
        2. The coach can view:
            - Past performance history
            - Current skill assessments
            - Notes and feedback from previous sessions
        3. The coach adds new observations and skill progress updates.
    - **Outcome**: Performance metrics are saved, providing insights into student development.

7. **Class Cancellation/Rescheduling:**

    - **Scenario**: The coach needs to cancel or reschedule a class.
    - **Steps**:
        1. The coach selects a scheduled class and chooses to either:
        - Cancel the class (with an optional reason)
        - Reschedule (with a new date and time)
        2. The coach confirms the change.
        3. The system sends notifications to all batch members about the update.
    - **Outcome**: The class status is updated, and notifications are sent accordingly.

8. **Generating Reports:**
    - **Scenario**: The coach needs to generate a report for review or sharing.
    - **Steps**:
        1. The coach selects a batch and clicks "Generate Report."
        2. The coach chooses the type of report:
            - Attendance summary
            - Performance progress
            - Overall batch review
        3. The report is generated and available for download or sharing.
    - **Outcome**: The coach can easily share reports with students, parents, or for internal review.

---

## Batch Management Table

| **Feature**             | **Description**                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Dashboard View**      | Overview of all active and past batches with key details and options to create, view, or modify batches.     |
| **Create Batch**        | Form to create a new batch with fields for name, sport type, skill level, and schedule.                      |
| **Batch Details**       | Detailed view of batch information, student list, and attendance/performance records.                        |
| **Edit Batch**          | Update batch details, modify the schedule, or add/remove students from the batch.                            |
| **Attendance Tracking** | Mark and save attendance records for each class session.                                                     |
| **Performance Review**  | View and update individual student skill metrics and performance history.                                    |
| **Class Cancellation**  | Option to cancel or reschedule classes, with automated notifications for affected members.                   |
| **Notifications**       | Alerts for students and parents about schedule changes, attendance updates, and important announcements.     |
| **Report Generation**   | Generate and download detailed reports on attendance, performance, or batch overview for review and sharing. |
