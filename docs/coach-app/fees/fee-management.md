# Fee Management User Story
![Ready](https://img.shields.io/badge/Status-Ready-brightgreen)
### Feature: Fee Management  
**As a** coach,  
**I want** to have an efficient way to manage and track fee payments from students,  
**So that** I can ensure timely payments, send reminders, and keep accurate financial records.

---

### User Flow & Detailed Steps

1. **Navigating to Fee Management:**
    - **Scenario**: The coach logs into the app and selects the "Fee Management" section from the main dashboard.
    - **Steps**:
        1. The coach clicks on the "Fee Management" tab.
        2. The coach is presented with an overview of all batches, showing outstanding fees, due dates, and paid status for each student.
    - **Outcome**: The coach has a clear overview of the financial status of each batch and student.

2. **Setting Up Fee Structure:**
    - **Scenario**: The coach wants to set up a fee structure for a batch.
    - **Steps**:
        1. The coach clicks on "Set Fee Structure" for a specific batch.
        2. The coach defines:
            - Fee amount per student (applicable to all students of batch)
            - Payment frequency (e.g., monthly, quarterly)
            - Due date for each payment cycle
        3. The coach can add any discounts or special offers for students, if applicable.
        4. The coach saves the fee structure, which is then applied to all students in the batch.
    - **Outcome**: The fee structure is set, and students/parents receive notifications about the payment schedule and details.

3. **Tracking Fee Payments:**
    - **Scenario**: The coach wants to track which students have paid their fees and which payments are overdue.
    - **Steps**:
        1. The coach selects a batch and views the list of students, each with their payment status (Paid, Due, or Overdue).
        2. The coach can click on a student’s name to see a detailed payment history, including:
            - Date of each payment
            - Amount paid
            - Outstanding balance
            - Notes on any special arrangements or agreements
        3. If a payment has been received manually (e.g., in cash), the coach can update the status in the system.
    - **Outcome**: The coach has an up-to-date record of fee payments and outstanding balances for each student.

4. **Sending Fee Reminders:**
    - **Scenario**: The coach wants to remind students/parents about upcoming or overdue payments.
    - **Steps**:
        1. The coach selects students with outstanding fees and clicks "Send Reminder."
        2. The coach can customize the reminder message, including:
            - Payment amount due
            - Due date
            - Instructions for making the payment
        3. The system sends reminders via email, SMS, or in-app notifications.
    - **Outcome**: Students/parents are reminded to pay their fees, helping to ensure timely payments.

5. **Recording Payments Manually:**
    - **Scenario**: The coach receives a payment in cash or through a method not integrated with the app.
    - **Steps**:
        1. The coach clicks on the student’s name in the fee tracking list.
        2. The coach selects "Record Payment" and enters details such as:
            - Amount received
            - Date of payment
            - Payment method (e.g., cash, bank transfer)
            - Any additional notes (e.g., "Paid by parent at the training session")
        3. The coach saves the record.
        4. No option for partial payment.
    - **Outcome**: The payment status is updated, and the student’s outstanding balance is adjusted accordingly.

6. **Generating Fee Reports:**
    - **Scenario**: The coach wants to generate a report of all fee transactions for a batch or for individual students.
    - **Steps**:
        1. The coach clicks on "Generate Fee Report."
        2. The coach selects the desired date range and filters, such as:
            - Paid fees
            - Outstanding fees
            - Overdue payments
        3. The report is generated and can be downloaded as a PDF or CSV for accounting purposes.
    - **Outcome**: The coach has a comprehensive financial report for review, sharing, or record-keeping.

7. **Automated Payment Reminders & Notifications:**
    - **Scenario**: The system needs to send automated reminders to parents/students about fee due dates and overdue payments.
    - **Steps**:
        1. The system checks for upcoming or overdue payments.
        2. Automatic reminders are sent out, including:
            - Notification of the amount due
            - Due date
            - Instructions on how to pay
        3. The coach receives a summary of notifications sent.
    - **Outcome**: Parents/students are consistently informed about their payment obligations, reducing the risk of missed payments.

---

### Fee Management Table


| **Step**                      | **Description**                                                                                                                                     |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Navigating to Fee Management** | The coach accesses the Fee Management section to view an overview of all batches, showing payment statuses and outstanding fees.                    |
| **Setting Up Fee Structure**  | The coach defines fee amounts, payment frequency, due dates, and any discounts, which are applied to all students in the batch.                     |
| **Tracking Fee Payments**     | The coach views payment statuses for each student and can review detailed payment histories, including paid, due, and overdue amounts.              |
| **Sending Fee Reminders**     | The coach selects students with outstanding fees and sends customized reminders via email, SMS, or in-app notifications.                           |
| **Recording Payments Manually** | The coach records payments received outside the app (e.g., cash) and updates the student’s payment status in the system.                             |
| **Generating Fee Reports**    | The coach generates detailed fee reports for batches or individual students, available for download or sharing.                                     |
| **Automated Notifications**   | The system automatically sends reminders about due and overdue payments, keeping parents and students informed of their obligations.               |
