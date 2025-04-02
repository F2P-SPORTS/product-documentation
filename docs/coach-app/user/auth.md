# Authentication Module 
![Ready](https://img.shields.io/badge/Status-Ready-brightgreen)
## Overview
The FanToPark Authentication Module for **Coaches** is designed to provide a secure and streamlined experience for coach registration, login, and profile management. This module focuses on mobile-based authentication with OTP (One-Time Password), allowing coaches to easily create and manage their profiles, including uploading certifications and other details.

### Key Features:
- **Mobile Number-Based Authentication**: Coaches log in using their mobile number.
- **OTP Verification**: Secure authentication through OTP sent via SMS.
- **Coach Registration Flow**: Includes personal information, certifications, and other profile details.
- **Role-Based Access Control**: Only coaches can access the app.
- **Profile Completion**: After registration, coaches must complete their profiles by uploading certifications and experience details.
- **Session Management**: Token-based session management with auto-refresh.

---

## Mobile Number Authentication Flow (OTP Based)

### Step 1: Enter Mobile Number
Coaches input their mobile number in the login screen.

### Step 2: Receive OTP
An OTP is sent to the entered mobile number via SMS.

### Step 3: OTP Verification
The coach enters the received OTP to verify their mobile number.

### Step 4: Token-Based Authentication
After successful OTP verification, an authentication token (JWT or similar) is generated and stored on the client side. This token is used for authenticating subsequent requests to secure endpoints.

### Step 5: Profile Completion
Upon first login, the coach is directed to the profile completion page where they must provide:
- Personal Information: Name, contact details, bio.
- Professional Details: Coaching experience, sports expertise.
- Certifications: Upload coaching certificates and other qualifications.
- Profile Photo: Upload a profile picture.

---

## Registration Flow for Coaches

### Step 1: Mobile Number Entry
Coaches register by providing their mobile number.

### Step 2: OTP Verification
An OTP is sent to the mobile number, and the coach verifies their phone by entering the OTP.

### Step 3: Profile Creation
Once OTP verification is successful, the coach proceeds to create their profile, including:
- **Name**: Full name of the coach.
- **Email**: Optional email for notifications and updates.
- **Bio**: A brief introduction about the coach.
- **Coaching Experience**: Number of years in coaching.
- **Sports Expertise**: List of sports they specialize in coaching.
- **Certification Upload**: Coaches upload their coaching certifications and documents.
- **Profile Picture**: Coaches can upload a photo to display on their profile.

### Step 4: KYC Verification (Optional)
If enabled, the coach's details undergo KYC (Know Your Customer) verification to ensure authenticity. This may involve uploading additional documents such as ID proofs.

### Step 5: Subscription Tier Selection
Coaches can choose a subscription tier based on the services and features they need access to within the app.

### Step 6: Dashboard Access
After registration and profile completion, the coach gains access to their dashboard, where they can manage batches, track attendance, communicate with students, and more.

---

## Profile Management

### Step 1: Edit Profile
Coaches can update their profile information, including their bio, coaching experience, and uploaded certifications.

### Step 2: Document Management
Coaches can add, edit, or delete certifications and documents from their profiles at any time.

### Step 3: Profile Visibility
Based on subscription tiers and verification, coaches can control the visibility of their profile to prospective students and parents.

---

## Session Management

- **Token Expiration**: Tokens are configured to expire after a specific period to enhance security. If the token expires, the coach is prompted to log in again.
- **Auto-Refresh**: Tokens are automatically refreshed in the background to ensure a smooth user experience.
- **Logout**: Coaches can log out manually, which revokes the token and ends the session.

---

## Security Considerations
- **OTP Security**: OTPs are time-sensitive and valid for a limited duration to prevent misuse.
- **Token Security**: Authentication tokens are securely stored to prevent unauthorized access.
- **Encryption**: All data exchanges between the app and the server are encrypted using HTTPS.

---

## API Endpoints (Sample)

- **POST /auth/login**  
  Logs in the coach by verifying the mobile number and OTP, returning an authentication token.

- **POST /auth/verify-otp**  
  Verifies the OTP sent to the coach’s mobile number.

- **POST /auth/logout**  
  Logs the coach out, revoking the token and ending the session.

- **POST /auth/complete-profile**  
  Allows the coach to complete their profile by uploading personal information and certifications.

---

## Error Handling

- **Invalid OTP**: If the OTP is incorrect or expired, the coach is prompted to request a new OTP.
- **Token Expiration**: Expired tokens prompt the coach to log in again.
- **Profile Incomplete**: Coaches are unable to access certain features until their profile is fully completed.

---

## Conclusion
The FanToPark Authentication Module for Coaches provides a secure and seamless mobile and OTP-based login system. By focusing on ease of use and profile management, coaches can efficiently manage their certifications and experience, making the onboarding process smooth and secure.

---

## Documentation Table

| Feature/Step           | Description                                                                                       |
|------------------------|---------------------------------------------------------------------------------------------------|
| **Mobile Number Login** | Coaches log in using their mobile number and OTP.                                                  |
| **OTP Verification**    | OTP sent via SMS to the coach's mobile number to verify identity.                                  |
| **Profile Completion**  | Coaches must complete their profile by providing personal info, certifications, and experience.    |
| **Document Upload**     | Coaches can upload coaching certificates and qualifications during profile creation or later.     |
| **Session Management**  | Token-based session handling with expiration and auto-refresh features.                            |
| **KYC Verification**    | Optional KYC process for authenticating the coach's identity and certifications.                  |
| **Subscription Tier**   | Coaches select a subscription tier that determines access to features within the app.             |
| **Profile Visibility**  | Coaches control their profile's visibility based on subscription level and verification status.    |
| **Security**            | Secure OTP process, token storage, and encrypted communication between app and server.            |
| **API Endpoints**       | Various endpoints for registration, OTP verification, profile management, and session handling.   |