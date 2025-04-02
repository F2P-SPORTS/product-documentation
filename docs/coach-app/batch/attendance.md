# Attendance Tracking User Story
![Ready](https://img.shields.io/badge/Status-Ready-brightgreen)

### Feature: Attendance Tracking  
**As a** coach,  
**I want** to have a seamless way to record and review attendance for each training session,  
**So that** I can maintain accurate records, inform parents and students about attendance status, and analyze participation trends over time.

---

### User Flow & Detailed Steps

1. **Navigating to Attendance Tracking:**
    - **Scenario**: The coach logs into the app and selects the desired batch from the Batch Management dashboard.
    - **Steps**:
        1. The coach clicks on the batch they want to manage.
        2. The batch details page opens, and the coach selects the "Attendance" tab or option.
    - **Outcome**: The coach is directed to the attendance tracking section, showing past attendance records and the option to mark new attendance.

2. **Marking Attendance for a Session:**
    - **Scenario**: The coach is ready to mark attendance for a current or past session.
    - **Steps**:
        1. The coach clicks on "Mark Attendance."
        2. The app displays a form or table listing all the students enrolled in the batch.
        3. Next to each student's name, the coach can select from:
            - **Present**: The student attended the session.
            - **Absent**: The student did not attend.
            - **Late**: with optional notes
        4. The coach can also add notes for specific students (e.g., "Was late due to traffic," "Missed class due to illness," etc.).
        5. Once all attendance entries are complete, the coach clicks "Submit" to save the records.
    - **Outcome**: Attendance data for the session is saved in the system, and notifications are automatically sent to parents and students if necessary.

3. **Reviewing Past Attendance Records:**
    - **Scenario**: The coach wants to review past attendance to check student participation trends.
    - **Steps**:
        1. The coach selects a date from the calendar or a session from the attendance history.
        2. The app displays the recorded attendance for that session, including:
            - The number of students present, absent, or late
            - Notes associated with specific attendance records
        3. The coach can view individual attendance histories by selecting a student's name.
    - **Outcome**: The coach can analyze attendance data, identify patterns, and address any issues with consistent absenteeism or lateness.

4. **Editing Attendance Records:**
    - **Scenario**: The coach realizes that an error was made in recording attendance for a past session.
    - **Steps**:
        1. The coach navigates to the attendance history and selects the session they want to edit.
        2. The coach clicks on "Edit Attendance," which unlocks the form for changes.
        3. Corrections are made (e.g., changing a student's status from "Absent" to "Present" or updating a note).
        4. The coach submits the updated records.
    - **Outcome**: The attendance records are updated, and affected students or parents are notified of the change if necessary.

5. **Attendance Summary & Reports:**
    - **Scenario**: The coach wants to generate a summary of attendance for a specific period or student.
    - **Steps**:
        1. The coach clicks on "Generate Attendance Report."
        2. The coach selects the type of report needed:
            - **Batch Attendance Summary**: An overview of attendance for the entire batch over a selected date range.
            - **Individual Student Report**: Detailed attendance data for a single student, showing present, absent, and late counts, along with any notes.
        3. The report is generated and can be downloaded as a PDF or shared via email with students and parents.
    - **Outcome**: The coach has a clear and organized record of attendance, which can be used for performance reviews or to address attendance-related concerns.

6. **Automated Notifications:**
    - **Scenario**: After marking attendance, parents and students need to be informed about their attendance status.
    - **Steps**:
        1. Upon submission of attendance, the app automatically sends notifications to parents and students.
            - **Present Notification**: A message confirming the student attended the session.
            - **Absent Notification**: An alert notifying parents and students of the absence, possibly with a note added by the coach.
            - **Late Notification**: An update about the student arriving late, including any associated notes.
    - **Outcome**: Parents and students are kept informed in real time, ensuring transparency and accountability.

---

### Attendance Tracking Table

| **Step**                          | **Description**                                                                                                                                     |
|-----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Navigating to Attendance**      | The coach accesses the Batch Management dashboard, selects a batch, and clicks on the "Attendance" tab to begin tracking attendance.               |
| **Marking Attendance**            | The coach selects "Mark Attendance," chooses attendance status for each student, adds optional notes, and submits the records.                     |
| **Reviewing Past Records**        | The coach can view historical attendance data, analyze trends, and view individual student attendance histories.                                    |
| **Editing Records**               | The coach can update attendance for past sessions if errors are found, ensuring accurate records.                                                  |
| **Attendance Summary Reports**    | The coach can generate detailed attendance reports for a batch or individual student, available for download or sharing.                           |
| **Automated Notifications**       | Notifications are sent to parents and students about attendance status (present, absent, late) along with any coach notes.                        |
