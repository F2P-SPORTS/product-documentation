### Feature: Subscription Management with Student Limit Blocks  
![Draft](https://img.shields.io/badge/Status-Draft-yellow)
**As a** coach,  
**I want** to manage up to 5 students for free and purchase additional student blocks when needed,  
**So that** I can scale my coaching business without upfront financial commitments and only pay for what I use.  

---

### User Flow & Detailed Steps  

1. **Free Plan Onboarding:**  
    - **Scenario**: The coach signs up and starts using the app with the free plan (up to 5 students).  
    - **Steps**:  
        1. The coach signs up on the app.  
        2. The app automatically activates the free plan, allowing the coach to manage up to 5 students.  
        3. A notification explains that additional blocks are available for purchase once the student limit is reached.  
    - **Outcome**: The coach begins using the app for free, understanding the option to upgrade later.  

2. **Tracking Student Limit Usage:**  
    - **Scenario**: The coach adds students to the system and approaches the free plan limit.  
    - **Steps**:  
        1. The coach adds students to batches.  
        2. The system displays a usage counter showing the number of students out of the maximum allowed (e.g., "4/5 students used").  
        3. When the coach tries to add the 6th student, the system displays a notification:  
            - “You’ve reached your free plan limit. Purchase a block of 15 seats for 500 to continue adding students.”  
    - **Outcome**: The coach is informed about their usage and prompted to upgrade as needed.  

3. **Upgrading to Paid Blocks:**  
    - **Scenario**: The coach decides to purchase additional student seats.  
    - **Steps**:  
        1. The coach clicks on the upgrade notification or selects "Subscription Management" from the dashboard.  
        2. The available blocks are displayed:  
            - **15 Students**: 500/month  
            - **40 Students**: 1000/month  
            - **Custom Plan**: Contact Sales  
        3. The coach selects a block and proceeds to payment.  
        4. A payment link is sent via SMS or WhatsApp.  
        5. The coach completes the payment, and the system updates the student limit in real-time.  
    - **Outcome**: The coach successfully upgrades their plan and can add more students.  

4. **Custom Plan Request:**  
    - **Scenario**: The coach needs to manage more than 40 students.  
    - **Steps**:  
        1. The coach navigates to "Subscription Management" and selects "Contact Sales" under the Custom Plan option.  
        2. The app prompts the coach to fill out a form with:  
            - Name  
            - Email  
            - Number of students needed  
            - Additional requirements (if any)  
        3. The sales team contacts the coach to finalize a custom plan.  
    - **Outcome**: The coach is guided to a personalized solution for their requirements.  

5. **Subscription Renewal:**  
    - **Scenario**: The coach’s subscription is due for renewal.  
    - **Steps**:  
        1. The system sends a renewal reminder via email, SMS, or WhatsApp, including:  
            - Subscription type (e.g., "15 Students - 500/month")  
            - Renewal amount  
            - Due date  
        2. The coach clicks the link in the notification to complete payment.  
        3. The system updates the subscription status upon payment.  
    - **Outcome**: The subscription is renewed without service disruption.  

6. **Notifications and Alerts:**  
    - **Scenario**: The coach needs timely updates on subscription usage and payments.  
    - **Steps**:  
        1. Alerts are sent when:  
            - 80% of the current student limit is reached.  
            - The subscription is nearing its expiration date.  
            - Payment is overdue.  
        2. Notifications include clear upgrade or renewal instructions.  
    - **Outcome**: The coach remains informed and can take action proactively.  

---

### Subscription Management Table  

| **Step**                      | **Description**                                                                                                 |  
|-------------------------------|-----------------------------------------------------------------------------------------------------------------|  
| **Free Plan Onboarding**      | The coach signs up and automatically starts with the free plan, allowing management of up to 5 students.        |  
| **Tracking Student Limit Usage** | The system tracks and displays the number of students used out of the total allowed and prompts for upgrades when needed. |  
| **Upgrading to Paid Blocks**  | The coach selects and purchases additional student blocks through SMS or WhatsApp payment links.                |  
| **Custom Plan Request**       | Coaches exceeding 40 students can contact sales to create a personalized subscription plan.                     |  
| **Subscription Renewal**      | The system sends renewal reminders and processes subscription payments seamlessly.                             |  
| **Notifications and Alerts**  | Automated notifications keep the coach informed about usage, renewals, and overdue payments.                   |  

---

### Additional Notes  

- **Dynamic Pricing Adjustments**: If the pricing model changes, updates can be reflected dynamically in the subscription management section.  
- **Partial Usage Alerts**: Notify coaches at 50% and 80% of their limit to ensure proactive planning.  
- **Payment Methods**: Use UPI, bank transfers, or credit/debit cards via Razorpay, PayU, or Stripe for flexible payment options.  
- **Analytics**: Coaches can view a summary of subscription costs, usage trends, and payment history in their dashboard.  
