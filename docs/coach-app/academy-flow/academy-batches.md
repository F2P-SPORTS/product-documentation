# Academy Controls Batch and Player Details  
![Ready](https://img.shields.io/badge/Status-ReadyForReview-yellow)

### Feature: Academy-Controlled Batch & Player Information

**As an** academy owner or administrator,  
**I want** to fully control the creation and management of batches, player details, and fee structures,  
**So that** I can maintain strict privacy around student fees and guardian contacts, while allowing coaches the necessary access to manage training.

---

### User Flow & Detailed Steps

1. **Creating a New Batch**

    - **Scenario**: The academy admin wants to organize a new training group.  
    - **Steps**:  
        - Same flow as coach batch creation and assign a coach
    - **Outcome**: A new batch is established with the academy’s defined schedule and fee structure.

2. **Editing Batch Information**

    - **Scenario**: The academy needs to adjust a batch’s schedule or other details (e.g., rename or change timing).  
    - **Steps**:  
        1. The admin selects an existing batch from the list.  
        2. Clicks on “Edit Batch” to modify details (name, schedule, capacity, default fees).  
        3. Updates are saved; any coaches assigned to this batch see the new schedule but do not see fee changes if they lack financial access.  
    - **Outcome**: The academy maintains accurate, up-to-date batch information without exposing fee or guardian data to unauthorized personnel.

3. **Adding and Removing Players**

    - **Scenario**: The academy wants to add new players (or remove players who are no longer enrolled).  
    - **Steps**:  
        1. The admin opens the batch and clicks “Manage Players.”  
        2. To add a player, the admin enters or selects from existing player profiles (if the student is already in the system).  
        3. If a player is leaving, the admin removes them from the roster, updating attendance records and fee status automatically.  
        4. Guardian contact details, payments, and any personal info remain accessible only to the admin (and any designated manager role).  
    - **Outcome**: The academy accurately reflects current enrollments, and coaches see updated rosters without full financial or guardian details.

4. **Controlling Player Details**

    - **Scenario**: The academy needs to ensure only authorized personnel can edit sensitive player information, including guardian contacts and payment statuses.  
    - **Steps**:  
        1. The admin navigates to the player’s profile.  
        2. Any changes to contact info or guardian details can only be saved by the admin (or assigned manager role).  
        3. Coaches can view limited info (e.g., name, skill level, attendance history) but not fees or guardian phone numbers if they are on restricted access.  
    - **Outcome**: Student and guardian data remain private, protecting the academy’s policies and maintaining data security.

5. **Tracking Fees and Payment Status**

    - **Scenario**: The academy uses the platform to handle payment tracking and reminders.  
    - **Steps**:  
        1. The admin opens “Payment Management” within a batch or player profile.  
        2. Fee status (paid, pending, overdue) is displayed, along with an option to send payment reminders to guardians.  
        3. Coaches on restricted access do not see these statuses; they only see that a player is active in training.  
    - **Outcome**: The academy can manage financial operations within the system, ensuring coaches focus on coaching without accessing sensitive fee details.

6. **Reviewing and Approving Player Enrollments(Lead Management)**

    - **Scenario**: Parents or players might request enrollment in a specific batch, requiring admin approval.  
    - **Steps**:  
        1. The admin checks enrollment requests under “Pending Approvals.”  
        2. The admin reviews each request, verifying the player’s details, and if needed, clarifies fee-related questions with the parent.  
        3. Approved players are added to the batch roster, and coaches see them as new participants.  
    - **Outcome**: The academy maintains control over admissions, ensuring only authorized players join.

---

### Academy Controls Batch and Player Details Table

| **Step**                                | **Description**                                                                                                                  | **Outcome**                                                                                                 |
|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| **Creating a New Batch**               | Admin defines the batch name, schedule, capacity, and links to the academy’s fee structure.                                      | A structured training group is set up, fully controlled by the academy.                                     |
| **Editing Batch Information**          | Admin updates batch details (name, schedule, capacity, fees) as needed.                                                          | Coaches see the new schedule; fees remain hidden for restricted roles.                                      |
| **Adding and Removing Players**         | Admin adds new or existing players, or removes those who have left, adjusting fee status if needed.                              | Current rosters remain accurate; coaches remain up-to-date without seeing sensitive financial info.         |
| **Controlling Player Details**         | Admin or authorized managers can edit personal and guardian contact information.                                                 | Data privacy is maintained; only relevant personnel have access to confidential details.                    |
| **Tracking Fees and Payment Status**   | Admin tracks fee payments, sends reminders, and updates statuses (paid, overdue, etc.).                                          | Coaches focus on training; financial data remains secure with the academy.                                  |
| **Reviewing & Approving Enrollments**  | Admin reviews requests from parents/players and approves or denies them.                                                         | Maintains controlled admissions, with coaches automatically updated about new players.                      |

By centralizing **batch creation** and **player management** under the academy’s control, the **FanToPark Coach App** ensures **privacy**, **consistent data**, and **security** around fee details and guardian information, while still enabling coaches to effectively manage training sessions.