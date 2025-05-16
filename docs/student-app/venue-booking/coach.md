# 9. Academy-Side Slot Management (Fantopark Coach App)
![Draft](https://img.shields.io/badge/Status-Draft-yellow)

The **Academy-Side Slot Management** feature allows academies (via coaches or admins) to create, manage, and monitor slot availability, pricing, and bookings for courts or grounds within the Fantopark Coach App, catering to a broad user base.

### 9.1 Purpose
To enable academies to define and manage booking slots for courts or grounds, set pricing, and track bookings, syncing with the Parents App to facilitate open access for all users (parents, individuals, groups).

### 9.2 Detailed Functionality
- **Slot Creation**:
    - Academies create slots for specific courts or grounds, specifying:
        - Venue details: Name (e.g., “Sportizo Cricket Ground”), location (Google Maps link), type (e.g., cricket pitch, football field, badminton court).
        - Date, time (e.g., 6:00 PM–7:00 PM), duration (e.g., 1 hour, 2 hours).
        - Capacity: Maximum users or teams (e.g., 11 for cricket,22 for football, 2 for badminton).
        - Price per slot: Base price (e.g., ₹1000/hour), varying by venue type, time (peak vs. off-peak), or day (weekend vs. weekday).
        - Restrictions: Optional (e.g., “Adult teams only,” “No equipment provided”).
    - Recurring slots: Set daily/weekly/monthly patterns (e.g., every Sunday 10:00 AM).
- **Slot Management**:
    - Edit slot details (e.g., time, price, restrictions) up to 24 hours before the session.
    - Cancel slots, triggering automatic notifications (updates/changes) and refunds.
    - Mark slots as “Closed” when fully booked, unavailable, or reserved (e.g., for academy events).
    - View booking status (e.g., “4/10 slots booked”) and booker details (name, contact, purpose).
- **Pricing and Payments**:
    - Academies set base price; platform fee (20% + 18% GST) auto-added (e.g., ₹1000 slot + ₹200 fee + ₹36 GST = ₹1236 total).
    - Payments via Razorpay Route (no card saving):
        - Academy receives base price (e.g., ₹1000).
        - Fantopark receives platform fee (e.g., ₹236).
        - Funds routed to academy’s RazorpayX-linked account (T+3 days); platform fee settles in T+1 day.
    - Transparent pricing displayed to users.
- **Integration with Parents App**:
    - Slots sync to Parents App in real-time via webhooks.
    - Booking confirmations and cancellations trigger notifications (4-month lifespan).
    - Academies see booker details, including linked parents for child-related bookings.
- **Edge Cases**:
    - **Overbooking**: Prevented by locking slots at capacity.
    - **Late Cancellations**: Within 24 hours, 50% refund; full refund 24+ hours.
    - **Invalid Venue Data**: Validate location, capacity, and restrictions on creation.
    - **Recurring Conflicts**: Detect overlapping slots and prompt resolution.

### 9.3 User Flow
1. Coach/admin navigates to “Venue Management” tab.
2. Creates or edits slot (venue, date, price, restrictions).
3. Saves slot, syncing to Parents App.
4. Monitors bookings and manages cancellations.
5. Receives payment confirmations via Razorpay Route.

### 9.4 UI/UX Considerations
- **Slot Creation Form**: Collapsible sections (venue, schedule, pricing), with validation (e.g., “Price must be > ₹100”).
- **Slot List**: Calendar view with filters (date, venue, type) and status (e.g., “Booked 4/10”).
- **Booking Details**: Modal with Contact Details (name, contact, purpose) prefilled with current user info.
- **Notifications**: In-app alerts for bookings/cancellations (updates/changes).

### 9.5 Summary Table

| Feature | Description | UI/UX Notes |
|---------|-------------|---------------------|
| Slot Creation | Define court/ground slots | Collapsible form, validation |
| Management | Edit, cancel, monitor |  Calendar view, status indicators |
| Payments | Razorpay Route, platform fee | Booking details modal |
| Integration | Sync with Parents App | Notifications for updates/changes |

---