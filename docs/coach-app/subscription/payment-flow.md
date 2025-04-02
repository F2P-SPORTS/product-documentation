
### Feature: Payment Integration with Flexible Pricing and Mandates  

![Draft](https://img.shields.io/badge/Status-Draft-yellow)

---

### Objective  
To design a robust payment integration system with flexible pricing options, platform-specific adjustments (web, App Store, Play Store), and a mandate system that includes a buffer to facilitate seamless plan updates and upgrades without creating new mandates.

---

### Key Concepts  

#### 1. **Define Pricing with Buffer**  
- **Base Pricing (P1):**  
    - The starting price for each subscription plan.  
    - Includes a **buffer amount** (e.g., 10-20%) added to the price to allow discounts or offers without requiring mandate adjustments.  
    - Example: If the base price is $10, the buffer-adjusted price is $12, allowing up to a $2 discount.  

- **Buffer Use Case:**  
    - Offers or discounts can be applied by utilizing the buffer within the mandate.  
    - Example: If a coach is on a $10/month plan but the price increases to $11, the mandate remains valid due to the buffer.  

---

#### 2. **Web Pricing (P1)**  
- **Direct Subscription Model:**  
    - Pricing for web purchases is set as **P1**, the base price.  
    - The web channel incurs no additional platform fees, making it the most cost-effective channel.  

- **Customization Options:**  
    - Offer flexible pricing tiers for web users (e.g. promotional discounts).  
    - Discounts applied on the base pricing use the buffer for easy management.  

---

#### 3. **App Store and Play Store Pricing Adjustments**  
- **Apple App Store Pricing:**  
    - App Store charges **30%** for transactions.  
    - Adjusted Pricing: **P1 = P2 - 30% of P2**  
        - Example: If the base price is $10. (P2), the user price in the App Store is calculated as $10 / (1 - 0.30) = $14.29.  

- **Google Play Store Pricing:**  
    - Play Store charges **15%** for most subscriptions.  
    - Adjusted Pricing: **P1 = P3 - 15% of P3**  
        - Example: If the base price is $10. (P3), the user price in the Play Store is calculated as $10 / (1 - 0.15) = $11.76.  

- **Consistency Across Platforms:**  
    - Prices on the App Store and Play Store must include platform fees while maintaining parity in service offerings.  
    - Discounts applied should reflect these adjustments.  

---

#### 4. **Mandate with Buffer**  
- **Mandate Definition:**  
    - A pre-authorized recurring payment setup between the user and the payment gateway to ensure seamless subscription renewals. (We have to implement this on web based payment flow only)

- **Buffer Inclusion in Mandate:**  
    - Add a buffer (e.g., 20%) to the mandate value when created.  
    - Example: If the subscription price is $10, the mandate value is set at $12 to allow price adjustments or offers.  

- **Advantages of Buffer Mandates:**  
    - Eliminates the need to recreate mandates when prices are updated.  
    - Reduces friction for users, avoiding additional authorization steps for price changes.  

- **Scenario:**  
    - Initial mandate created via the web at $10 with a $2 buffer.  
    - When the price is updated to $11, the mandate remains valid as it falls within the buffer.  

---

### User Stories  

1. **As a** system administrator,  
    - **I want** to add a buffer to mandates,  
    - **So that** subscription updates or promotional offers don’t require new mandates, simplifying the process.  

2. **As a** system administrator,  
    - **I want** the app to account for App Store and Play Store fees in pricing,  
    - **So that** I can avoid unexpected charges when user subscribes through different platforms.  

4. **As a** coach,  
    - **I want** web pricing to be the most competitive,  
    - **So that** I’m incentivized to subscribe directly through the website.  

---

### User Flow & Detailed Steps  

#### 1. **Setting Up Pricing with Buffer:**  
- **Scenario:** Admin configures subscription pricing.  
- **Steps:**  
    1. Admin enters the base price (P1) for each plan.  
    2. The system automatically calculates and adds the buffer (e.g., 20%) to the mandate value.  
    3. Platform-specific pricing (App Store and Play Store) is calculated using the base price:  
        - App Store: P1 = P2 / (1 - 0.30)  
        - Play Store: P1 = P3 / (1 - 0.15)  
    4. Prices are displayed to users, accounting for platform fees.  
- **Outcome:** Pricing is consistently set up with a buffer, and platform-specific adjustments are applied.  

---

#### 2. **Mandate Creation:**  
- **Scenario:** A coach subscribes to a plan via the web.  
- **Steps:**  
    1. The coach selects a plan and proceeds to payment.  
    2. The system creates a mandate for the base price + buffer.  
    3. The coach approves the mandate through the payment gateway.  
    4. The subscription is activated without requiring further manual payments.  
- **Outcome:** The mandate includes a buffer, ensuring flexibility for future price updates.  

---

#### 3. **Subscription Updates with Mandate Buffer:**  
- **Scenario:** Admin increases the subscription price or adds an offer.  
- **Steps:**  
    1. Admin updates the base price of a subscription.  
    2. The system checks if the new price falls within the mandate buffer.  
        - If **yes**, the mandate remains valid, and the new price is applied seamlessly.  
        - If **no**, the system prompts the user to authorize a new mandate. (flow will be added in this for user) 
- **Outcome:** Most price updates happen without additional user action, ensuring seamless service continuity.  

---

### Dependencies  

1. **Payment Gateway Integration:**  
    - Razorpay for mandate creation and recurring payments.  

2. **Platform-Specific Adjustments:**  
    - App Store and Play Store APIs to account for platform fees.  

3. **Pricing Database:**  
    - Store base prices, buffers, and adjusted platform-specific pricing.  

---

### Risks & Mitigations  

| **Risk**                          | **Mitigation Strategy**                                                                                      |  
|-----------------------------------|-------------------------------------------------------------------------------------------------------------|  
| User confusion about price differences | Display platform-specific pricing breakdowns clearly on the payment page.                                   |  
| Buffer amount insufficient for large increases | Set buffer percentages high enough to account for foreseeable price adjustments.                          |  
| Mandate rejection for new prices  | Notify users in advance of significant price changes and provide easy options to update mandates if needed.  |  
