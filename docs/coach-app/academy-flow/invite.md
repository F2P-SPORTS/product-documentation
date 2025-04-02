# Inviting and Managing Coaches  
![Ready](https://img.shields.io/badge/Status-ReadyForReview-yellow)

### Feature: Coach Invitation and Management

**As an** academy owner or administrator,  
**I want** to invite new or existing FanToPark coaches to join my academy, manage their access levels, and approve incoming requests,  
**So that** I can ensure only authorized coaches can view limited information under my academy while maintaining overall data privacy.

---

### User Flow & Detailed Steps

1. **Inviting a Coach via the Academy**

    - **Scenario**: The academy wants to bring a specific coach onto its platform.  
    - **Steps**:  
        1. The academy owner/admin opens the “Coaches” section within the FanToPark app.  
        2. Clicks on “Invite Coach” and enters the coach’s phone number or email address.  
        3. The system sends an in-app and/or email notification to the coach, prompting them to register or confirm affiliation with the academy.  
        4. If the coach is new to FanToPark, they complete the signup and KYC verification.  
        5. The coach is automatically linked to the academy upon acceptance of the invite.  
    - **Outcome**: The invited coach appears under the academy’s “Coaches” list with default or specified access privileges.

2. **Coach-Initiated Request to Join an Academy**

    - **Scenario**: A coach already using FanToPark wishes to affiliate with a particular academy.  
    - **Steps**:  
        1. The coach navigates to their profile settings and chooses “Join an Academy.”  
        2. The coach enters the academy owner/admin’s phone number or a unique academy ID.  
        3. The academy receives a “Coach Affiliation Request” in its notification center.  
        4. The academy admin reviews the request and either approves or rejects it.  
    - **Outcome**: If approved, the coach gains access to the academy’s environment, subject to the assigned role (e.g., Restricted Coach).

3. **Setting Roles and Permissions**

    - **Scenario**: The academy needs to control the coach’s level of access to sensitive information (fees, guardian contacts).  
    - **Steps**:  
        1. Once the coach is added, the academy admin edits the coach’s profile under “Coaches” management.  
        2. The admin assigns the coach a role (e.g., Restricted Coach, Head Coach, etc.) with predefined permissions.  
        3. Permissions can include:  
            - View batch schedules only  
            - Limited or no access to student fees  
            - No direct contact details of guardians (messages are relayed by the system (via whatsapp or message on fantopark DL))  
        4. Changes are saved, and the coach’s view and capabilities update immediately.  
    - **Outcome**: Only the level of data the academy deems necessary is visible to the coach, ensuring privacy and security.

4. **Updating Coach Information**

    - **Scenario**: The academy wants to modify a coach’s role or remove a coach from the system entirely.  
    - **Steps**:  
        1. The academy admin opens the coach’s profile in the “Coaches” section.  
        2. The admin updates the role (e.g., from Restricted Coach to Assistant Coach with a slightly broader access).  
        3. If the academy no longer needs the coach, the admin can “Deactivate” or “Remove” them from the system.  
    - **Outcome**: Roles and permissions remain dynamic, reflecting real-time organizational needs.

5. **Viewing Coach Activity and Performance**

    - **Scenario**: The academy wants to monitor how actively a coach is managing batches or contributing to sessions.  
    - **Steps**:  
        1. The academy admin clicks on the coach’s profile and selects “Activity Logs” or “Performance.”  
        2. The system displays key metrics such as:  
            - Number of batches handled  
            - Attendance records updated  
            - Session feedback from students/parents  
        3. If needed, the admin can address issues or provide support/training.  
    - **Outcome**: The academy maintains oversight, ensuring coaches are effectively managing their assigned responsibilities.

---

### Inviting and Managing Coaches Table

| **Step**                                            | **Description**                                                                                                                                               | **Outcome**                                                                                                  |
|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| **Inviting a Coach via the Academy**                | Academy sends an invitation to a coach’s phone or email. The coach accepts and is linked to the academy on approval.                                         | Coach is added under the academy with default or custom roles.                                                |
| **Coach-Initiated Request to Join an Academy**      | Coach enters the academy owner’s phone number or academy ID. The academy reviews and approves (or denies) the affiliation request.                            | Streamlined affiliation for coaches already on FanToPark; academy retains control over who gets approved.      |
| **Setting Roles and Permissions**                   | Admin assigns the coach a role (e.g., Restricted Coach) with specified data access levels (no direct guardian contacts, limited fee visibility, etc.).        | Privacy is upheld; coaches only see relevant data needed for training tasks.                                   |
| **Updating Coach Information**                      | Admin modifies a coach’s role to grant or restrict access; coaches can also be deactivated or removed if they leave.                                         | Dynamic management of coach access and responsibilities, ensuring real-time alignment with academy needs.      |
| **Viewing Coach Activity and Performance**          | Admin reviews how coaches are managing their batches (updates attendance, performance logs).                                                                  | Academy can identify top performers or address issues quickly to maintain training quality and consistency.     |

By providing a secure two-way **invitation and approval** process, academies maintain tight control over who represents them on the **FanToPark Coach App**, ensuring proper assignment of roles and strict adherence to privacy requirements around fees and guardian contacts.