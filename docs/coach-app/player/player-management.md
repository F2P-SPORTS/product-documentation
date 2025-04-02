# Student (Player) Management User Story
![Ready](https://img.shields.io/badge/Status-Ready-brightgreen)

### Feature: Student (Player) Management

**As a** coach,  
**I want** to manage and reuse student details across multiple batches,  
**So that** I can efficiently assign students to new batches without re-entering their information, ensuring a streamlined experience.

---

### User Flow & Detailed Steps

1. **Accessing Student Management:**

    - **Scenario**: The coach logs into the app and navigates to the "Batch Management" section.
    - **Steps**:
        1. The coach selects a specific batch to view the list of students.
        2. The app displays all students within the selected batch, with options to view detailed profiles or assign students to additional batches.
    - **Outcome**: The coach has a batch-specific view and can manage students easily.

2. **Adding a New Student to a Batch:**

    - **Scenario**: The coach wants to add a new student to a batch.
    - **Steps**:
        1. The coach clicks on "Add Student" within the batch details.
        2. The coach enters the student’s details, such as:
            - Full name
            - Date of birth and age
            - Contact information (phone number, email)
            - Parent/guardian details
            - Health conditions or notes (e.g., allergies)
        3. The student is saved and assigned to the selected batch.
    - **Outcome**: The student is now part of the batch, and their details are stored for future use.

3. **Assigning an Existing Student to a New Batch:**

    - **Scenario**: The coach wants to assign a student who is already in the system to another batch.
    - **Steps**:
        1. The coach clicks on "Assign Existing Student" in the new batch’s details.
        2. The app provides a searchable list of all existing students.
        3. The coach selects the student, and the system automatically pulls their details and adds them to the new batch.
    - **Outcome**: The student is assigned to the new batch without re-entering any details, saving time and ensuring data consistency.

4. **Viewing and Editing Student Profiles:**

    - **Scenario**: The coach wants to view or update a student’s information.
    - **Steps**:
        1. The coach selects a student’s name from the batch list to open their profile.
        2. The profile includes:
            - Personal details (name, age, contact info)
            - Health and emergency information
            - Attendance history across all batches
            - Performance metrics
        3. The coach can update any necessary details, and changes are reflected in all batches the student is part of.
    - **Outcome**: The student’s profile is kept accurate and consistent across all batches.

5. **Tracking Performance Metrics Across Batches:**

    - **Scenario**: The coach wants to track a student’s performance in multiple batches.
    - **Steps**:
        1. The coach opens the "Performance" tab in the student’s profile.
        2. The app shows metrics for each batch the student is part of, with separate progress graphs or tables.
        3. The coach can update performance data specific to each batch.
    - **Outcome**: The coach has a comprehensive view of the student’s performance across different training groups.

6. **Monitoring Attendance:**

    - **Scenario**: The coach wants to review a student’s attendance history.
    - **Steps**:
        1. The coach clicks on the "Attendance" tab in the student’s profile.
        2. The app shows attendance records for all batches, with options to filter by batch or date range.
        3. The coach can add or update attendance notes for specific sessions.
    - **Outcome**: The coach can easily track a student’s attendance and address any concerns.

7. **Communicating with Students and Parents:**

    - **Scenario**: The coach needs to send updates to students or parents.
    - **Steps**:
        1. The coach selects the student and clicks "Send Message."
        2. The app offers communication options, such as:
            - Email
            - SMS
            - In-app notifications
        3. The coach writes the message, which may include:
            - Performance updates
            - Schedule changes for one or more batches
            - Health or safety reminders
    - **Outcome**: Effective communication ensures everyone stays informed.

8. **Generating Student Reports:**
    - **Scenario**: The coach wants a report summarizing a student’s progress across batches.
    - **Steps**:
        1. The coach clicks "Generate Report" in the student’s profile.
        2. The coach selects the type of report and chooses which batches to include.
        3. The report is generated and can be downloaded or shared.
    - **Outcome**: The coach has a detailed report that covers the student’s performance and attendance in all relevant batches.

---

### Student (Player) Management Table

| **Step**                            | **Description**                                                                                                                                 |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Accessing Student Management**    | The coach navigates to Batch Management and selects a batch to view and manage student profiles.                                                |
| **Adding a New Student to a Batch** | The coach inputs student details and assigns the student to a batch. The student’s information is saved for future use.                         |
| **Assigning Existing Student**      | The coach assigns a student who is already in the system to a new batch without re-entering their details, ensuring efficiency and consistency. |
| **Viewing and Editing Profiles**    | The coach views and updates student profiles, with changes reflected across all batches the student is part of.                                 |
| **Tracking Performance Metrics**    | The coach tracks and updates performance metrics for students across multiple batches, reviewing batch-specific data.                           |
| **Monitoring Attendance**           | The coach reviews attendance history for students, with records from all batches, and can filter or add notes as needed.                        |
| **Communicating with Parents**      | The coach sends messages about performance, schedule updates, or health reminders to students and parents through various channels.             |
| **Generating Student Reports**      | The coach generates comprehensive reports on a student’s progress and attendance across one or more batches, available for download or sharing. |
