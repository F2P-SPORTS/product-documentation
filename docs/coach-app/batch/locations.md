# Location/Center Management User Story
![Ready](https://img.shields.io/badge/Status-Ready-brightgreen)

### Feature: Location/Center Management  
**As a** coach,  
**I want** to add and manage multiple locations or centers for my batches,  
**So that** I can assign each batch a specific training location and keep my sessions organized by venue.

---

### User Flow & Detailed Steps

1. **Accessing Location Management:**
    - **Scenario**: The coach logs into the app and navigates to the "Location Management" section.
    - **Steps**:
        1. The coach clicks on the "Location Management" tab.
        2. The app displays a list of saved locations, if any, along with options to add, edit, or delete locations.
    - **Outcome**: The coach can view and manage all existing locations or add new ones.

2. **Adding a New Location:**
    - **Scenario**: The coach wants to add a new training location to be assigned to batches.
    - **Steps**:
        1. The coach clicks on "Add New Location."
        2. The app prompts the coach to enter details, such as:
            - Use google map flow here
            - Location name (e.g., “Downtown Center”)
            - Address and GPS coordinates (optional)
            - Facilities available at the location (e.g., seating, equipment storage)
        3. The coach saves the location, and it appears in the list of available locations.
    - **Outcome**: The new location is saved and can be selected when assigning a batch.

3. **Assigning a Location to a Batch:**
    - **Scenario**: The coach is creating a new batch and needs to assign a location to it.
    - **Steps**:
        1. The coach begins creating a batch and reaches the location field.
        2. If the coach has no locations saved, the app prompts, “Would you like to add a location for this batch?” with options:
            - **Yes**: The coach is redirected to the "Add New Location" form.
            - **No**: The batch creation continues without a location.
        3. If the coach has saved locations, they can select from a dropdown list of existing locations or choose “Add New Location” to create a new one.
    - **Outcome**: The batch is assigned a specific location, helping to organize sessions by venue.

4. **Editing an Assigned Location:**
    - **Scenario**: The coach wants to update the location details for a batch.
    - **Steps**:
        1. The coach selects the batch and navigates to the location section.
        2. The app allows the coach to:
            - Edit details of the assigned location
            - Replace the assigned location with another saved location
        3. If selecting a different location, the coach can choose from the list of saved locations or add a new one.
    - **Outcome**: The batch’s location is updated, ensuring it reflects the correct training venue.

5. **Viewing and Managing Location Details:**
    - **Scenario**: The coach wants to review and manage details of existing locations.
    - **Steps**:
        1. The coach goes to "Location Management" and selects a location from the list.
        2. The app displays location details, including:
            - Address, facilities, and capacity
            - Batches currently assigned to this location
        3. The coach can make updates to the location information or remove it if it’s no longer in use.
    - **Outcome**: The location details are up-to-date and accurate for managing future batch assignments.

---

### Location/Center Management Table

| **Step**                           | **Description**                                                                                                                                      |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Accessing Location Management**  | The coach navigates to Location Management to view, add, edit, or delete saved locations.                                                            |
| **Adding a New Location**          | The coach enters details like name, address and facilities to save a new training location in the system.                                 |
| **Assigning a Location to a Batch**| The coach assigns a saved location to a batch, or if no location exists, the app prompts the coach to add a new location for the batch.             |
| **Editing an Assigned Location**   | The coach can update the assigned location for a batch, selecting from saved locations or creating a new one as needed.                             |
| **Viewing and Managing Locations** | The coach reviews saved location details, including address, facilities, and batches assigned to the location, and makes edits or deletions as needed. |
