# Streamlined Approval Flow

![Ready](https://img.shields.io/badge/Status-ReadyForReview-yellow)

### Feature: Two-Way Approval for Coach-Academy Affiliations

**As an** academy owner or coach,  
**I want** a clear, two-way approval process when associating a coach with an academy,  
**So that** both parties can confirm their partnership, maintain data privacy, and ensure legitimate affiliations on the platform.

---

### User Flow & Detailed Steps

1. **Coach Indicates Academy Affiliation**

    - **Scenario**: A coach is already on the FanToPark platform and wants to join or declare membership with a particular academy.
    - **Steps**:
        1. The coach navigates to **Profile Settings** and selects “I am part of an academy.”
        2. The coach enters the **academy owner’s phone number** or a unique **Academy ID**.
        3. A confirmation request is triggered to the academy.
    - **Outcome**: The coach’s request is visible in the academy’s “Pending Requests,” awaiting approval or rejection.

2. **Academy Invites a Coach**

    - **Scenario**: The academy has identified a coach (possibly through references or external conversation) and wants to officially add them to its roster.
    - **Steps**:
        1. The academy admin visits **Coaches** -> **Invite Coach**.
        2. The academy enters the coach’s phone number or email address.
        3. An invitation is sent to the coach via the FanToPark system (in-app notification, email, or SMS).
        4. The coach must accept or decline the invitation by checking the i consent box with tnc.
    - **Outcome**: If the coach accepts, the affiliation is created, pending final academy approval if needed.

3. **Two-Way Approval Mechanism**

    - **Scenario**: Either the coach initiates affiliation, or the academy sends an invite. In both cases, final approval is required from the receiving party.
    - **Steps**:
        1. If a **coach** initiated, the academy owner/admin sees the request in “Coach Requests.” They choose **Approve** or **Reject**.
        2. If an **academy** initiated, the coach receives an in-app prompt or email. They choose **Accept** or **Decline**.
        3. Upon acceptance from both sides, the system finalizes the coach-academy link.
    - **Outcome**: This **dual consent** ensures that no affiliation is forced, and both the coach and the academy agree to the terms of the relationship.

4. **Assigning Roles and Permissions**

    - **Scenario**: Once the coach-academy relationship is confirmed, the academy admin sets the coach’s role (e.g., Restricted Coach, Assistant Coach) and associated permissions.
    - **Steps**:
        1. The admin opens the newly added coach’s profile under the academy’s **Coach Management** area.
        2. Selects a role or customizes access privileges (e.g., view schedules, mark attendance, restricted fee access).
        3. Saves the settings, which take effect immediately in the coach’s interface.
    - **Outcome**: The coach now operates under the academy’s structure, with privacy safeguards in place as configured by the academy.

5. **Review & Audit of Approved Affiliations**

    - **Scenario**: The academy wants to review all affiliated coaches periodically to maintain accurate records.
    - **Steps**:
        1. The academy admin accesses **Affiliations** or **Coaches** to see a list of everyone linked.
        2. From here, the admin can **revoke** or **update** a coach’s role if needed (e.g., if the coach transitions to a different position or leaves).
        3. The system logs these changes, providing an audit trail for reference.
    - **Outcome**: Academy affiliations remain current, with clear records of who approved each relationship and when.

---

### Streamlined Approval Flow Table

| **Step**                                    | **Description**                                                                                                      | **Outcome**                                                                                       |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Coach Indicates Academy Affiliation**     | Coach enters the owner’s phone number or Academy ID to request membership in that academy.                           | Request awaits academy’s review and approval.                                                     |
| **Academy Invites a Coach**                 | Academy admin sends an invitation to a known coach via phone number or email.                                        | Coach decides to accept or reject the invite.                                                     |
| **Two-Way Approval Mechanism**              | The receiving party (coach or academy) must approve or decline. Upon mutual consent, the affiliation is established. | Ensures no unauthorized or forced affiliations.                                                   |
| **Assigning Roles and Permissions**         | Once approved, the academy admin sets the coach’s access level (Restricted Coach, etc.).                             | Coach operates under the academy’s specified constraints for fees and guardian information.       |
| **Review & Audit of Approved Affiliations** | Academy admin reviews all affiliated coaches, updating roles or revoking access as necessary.                        | Keeps the coach list accurate and maintains a clear record of approvals and relationship changes. |

Through this **two-way approval flow**, **FanToPark** safeguards the **integrity** of coach-academy relationships by ensuring **both parties** acknowledge and **consent** to the affiliation before it becomes active.
