# Academy Onboarding and Setup  
![Ready](https://img.shields.io/badge/Status-ReadyForReview-yellow)

### Feature: Academy Onboarding and Setup

**As an** academy owner or administrator,  
**I want** to create a verified academy account, define organizational roles, and configure operations,  
**So that** I can maintain control over fees, guardian contact details, and effectively manage coaches and batches under my academy.

---

### User Flow & Detailed Steps

1. **Discovery and Registration**

    - **Scenario**: The academy representative (owner, manager) decides to use the FanToPark Coach App.
    - **Steps**:
        1. The representative downloads the FanToPark Coach App or visits the website.
        2. They click on “Sign Up as an Academy,” providing basic details:
            - Academy name, location
            - Valid phone number (for OTP verification)
        3. The system sends an OTP to the provided phone number; the user enters it to confirm authenticity.
    - **Outcome**: A preliminary academy account is created, and the phone number is verified.

2. **Account Creation and KYC Verification**

    - **Scenario**: To ensure credibility, the academy must complete KYC verification.
    - **Steps**:
        1. After initial signup, the user is prompted to upload:
            - Identification proof (for the representative)
            - Relevant documents (academy registration, business license, etc.)
        2. FanToPark’s team reviews these documents.
        3. Upon approval, the academy account is marked “Verified,” granting full access to the platform.
    - **Outcome**: The academy is recognized as a trusted entity, boosting credibility for coaches, students, and parents.

3. **Choosing a Subscription Plan**

    - **Scenario**: Different academies have different needs based on their size and scope.
    - **Steps**:
        1. The academy owner views available subscription tiers (e.g., Basic, Premium).
        2. The owner selects a tier,based on:
            - Number of coaches and students
            - Advanced analytics
            - Custom branding capabilities
        3. The chosen plan can be upgraded or downgraded later if required for next month cycle.
    - **Outcome**: The academy has a suitable subscription aligned with its operational needs.

4. **Academy Profile Setup**

    - **Scenario**: The academy finalizes its public and operational profile on the platform.
    - **Steps**:
        1. The academy owner/administrator uploads the academy logo and branding materials or we can provide support based on the subscription.
        2. They add official contact information (phone, email) and academy address.
        3. They specify sports/programs offered and typical fee structures (e.g., monthly, quarterly).
        4. Payment methods are configured (linked accounts razorpay, route integration etc). **To be picked up with student app**
    - **Outcome**: A complete, professional academy profile is established, making it easier for coaches and parents to identify and trust the academy.

5. **Defining Administrative Roles**

    - **Scenario**: The academy wants to ensure privacy and controlled access among staff.
    - **Steps**:
        1. The owner sets up roles (e.g., Admin, Manager, Support) with varying privileges.
        2. **Admin**: Full access (can view fees, guardian contact info, and system configurations).
        3. **Manager**: Can create/manage batches, view attendance, but may have limited fee or contact info access.
        4. **Coach**: Marking attendance, Performance review, limited fee or contact info access, etc  or sending bulk messages without viewing sensitive data.
        5. **Support**: Focuses on day-to-day tasks like marking attendance or sending bulk messages without viewing sensitive data.
    - **Outcome**: Sensitive academy data is protected, while allowing different staff members to perform their jobs efficiently.

6. **Establishing Operational Settings**

    - **Scenario**: The academy wants to manage how training sessions, holidays, and fee collections operate.
    - **Steps**:
        1. The admin configures default batch durations (e.g., 60-minute sessions, 5 days/week).
        2. They specify holidays and off-days, preventing any scheduling conflicts.
        3. Fee collection policies are defined (late fee rules, reminders, payment deadlines).
    - **Outcome**: The academy has a consistent, automated framework for running its daily operations.

7. **Preparing to Invite or Approve Coaches**

    - **Scenario**: The academy wants to add coaches to its setup or approve existing coaches requesting affiliation.
    - **Steps**:
        1. The academy sends an in-app invite link to a coach, or a coach enters the academy owner’s phone number to request affiliation.
        2. The administrator reviews and approves or rejects the request.
        3. Approved coaches automatically appear under the academy’s “Coaches” list, with “Restricted” or custom permissions.
        4. Coach's academy profile will be created, which will be different from his/her personal coaching profile. 
    - **Outcome**: Coaches are seamlessly integrated into the academy framework, respecting privacy boundaries around fees and guardian contacts.

8. **Launch and Ongoing Support**

    - **Scenario**: The academy is fully set up and ready to operate within the FanToPark ecosystem.
    - **Steps**:
        1. The owner/administrator monitors an analytics dashboard showing attendance, fee payments, and student progress.
        2. Support requests (technical or operational) can be addressed via FanToPark’s help center or customer service.
        3. As the academy grows, they can scale the plan, invite more coaches, and unlock advanced features.
    - **Outcome**: The academy runs smoothly, benefiting from a centralized system that manages all coaching operations while preserving data privacy.

---

### Academy Onboarding and Setup Table

| **Step**                                   | **Description**                                                                                                                | **Outcome**                                                                   |
|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| **Discovery and Registration**            | Academy rep signs up by providing basic details and verifying phone number via OTP.                                          | Preliminary account is created, phone number is verified.                     |
| **Account Creation & KYC Verification**   | Academy rep uploads identification and registration documents. FanToPark reviews and approves.                               | Academy gains “Verified” status, boosting trust for coaches, parents, and students. |
| **Choosing a Subscription Plan**          | Academy selects a plan (Basic, Premium) suited to their size and feature needs.                                              | Flexible usage, with the option to scale or change as operations grow.        |
| **Academy Profile Setup**                 | Academy sets up its logo, contact info, sports offered, and fee structures.                                                 | A professional profile is established, ready for interactions.               |
| **Defining Administrative Roles**         | Owner creates roles (Admin, Manager, Coach, Support) with set permissions.                                                         | Sensitive data is safeguarded while staff can perform their respective duties.|
| **Establishing Operational Settings**     | Admin configures batch durations, schedules, holidays, and fee collection policies.                                         | Streamlined day-to-day operations with clarity on deadlines and reminders.   |
| **Preparing to Invite or Approve Coaches**| Academy invites coaches or approves requests from coaches who enter the academy’s owner number.                             | Coaches are integrated under the academy with appropriate access privileges.  |
| **Launch and Ongoing Support**            | Academy uses analytics, expands subscription, and contacts FanToPark support as needed.                                     | Efficient, scalable operations with centralized control over all activities.  |
