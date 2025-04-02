## BMI Tool User Story
![Ready](https://img.shields.io/badge/Status-Ready-brightgreen)
### Feature: BMI Tool  
**As a** coach,  
**I want** to have a simple and effective way to calculate and track the BMI (Body Mass Index) of my students,  
**So that** I can monitor their fitness levels, give appropriate health feedback, and adjust training programs accordingly.

---

### User Flow & Detailed Steps

1. **Accessing the BMI Tool:**
    - **Scenario**: The coach logs into the app and navigates to the "BMI Tool" section.
    - **Steps**:
        1. The coach clicks on the "BMI Tool" tab.
        2. The app displays options to calculate BMI for individual students or view BMI records for all students in a batch.
    - **Outcome**: The coach can choose to calculate BMI for a new entry or review historical data.

2. **Calculating BMI for a Student:**
    - **Scenario**: The coach wants to calculate the BMI of a student during a training session.
    - **Steps**:
        1. The coach selects a student from the list or searches for the student's name.
        2. The app prompts the coach to enter the following details:
            - Height (in cm or inches)
            - Weight (in kg or lbs)
        3. The coach enters the values and clicks "Calculate BMI."
        4. The app calculates the BMI using the formula:  
            \[
                \text{BMI} = \frac{\text{Weight (kg)}}{\text{Height (m)}^2}
            \]
        5. The app displays the calculated BMI along with a health status category:
            - Underweight
            - Normal weight
            - Overweight
            - Obesity
    - **Outcome**: The BMI result is displayed, and the coach can save the record for future reference.

3. **Reviewing BMI Records:**
    - **Scenario**: The coach wants to track a student’s BMI progress over time.
    - **Steps**:
        1. The coach clicks on "BMI Records" and selects a student.
        2. The app shows a history of BMI measurements, including:
            - Date of each entry
            - Height, weight, and calculated BMI
            - Health status category for each entry
        3. The coach can view the BMI trend graph to analyze the student's fitness progress.
    - **Outcome**: The coach can assess whether a student’s BMI is improving, stable, or getting worse and take appropriate action.

4. **Setting BMI Goals:**
    - **Scenario**: The coach wants to set BMI-related goals for a student.
    - **Steps**:
        1. The coach clicks on "Set BMI Goal" for a student.
        2. The app prompts the coach to enter a target BMI and a timeline for achieving it.
        3. The coach adds notes about diet recommendations, training plans, or lifestyle changes to help achieve the goal.
        4. The goal is saved, and the app tracks progress toward achieving it.
    - **Outcome**: The student’s BMI goal is set, and the coach can monitor progress over time.

5. **Generating BMI Reports:**
    - **Scenario**: The coach wants to generate a report summarizing BMI data for a batch or individual student.
    - **Steps**:
        1. The coach clicks on "Generate BMI Report."
        2. The coach selects options such as:
            - Individual student or entire batch
            - Date range for the report
        3. The report includes BMI history, health status over time, and any notes or recommendations made.
        4. The report can be downloaded as a PDF or shared with parents.
    - **Outcome**: The coach has a detailed report that provides insights into student health and fitness.

6. **BMI Notifications & Alerts:**
    - **Scenario**: The coach wants to be notified if a student’s BMI falls into an unhealthy range.
    - **Steps**:
        1. The coach sets up BMI alerts, specifying thresholds for underweight or overweight categories.
        2. If a student’s BMI crosses the set threshold, the app sends an alert to the coach with recommended actions or notes.
        3. The coach can choose to notify the student’s parents about the health concern.
    - **Outcome**: The coach and parents are alerted about potential health risks, allowing timely intervention.

7. **Health Tips & Recommendations:**
    - **Scenario**: The coach wants to give personalized health tips based on a student’s BMI.
    - **Steps**:
        1. The coach clicks on "Health Tips" after calculating a student’s BMI.
        2. The app provides general health recommendations, such as:
            - Nutrition advice
            - Suggested physical activities
            - Lifestyle changes to maintain a healthy BMI
        3. The coach can customize these recommendations and share them with the student and their parents.
    - **Outcome**: The student receives tailored health guidance, promoting overall wellness.

---

### BMI Tool Table

| **Step**                        | **Description**                                                                                                                                        |
|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Accessing the BMI Tool**      | The coach navigates to the BMI Tool section to calculate BMI for students or review historical BMI records.                                             |
| **Calculating BMI**             | The coach inputs height and weight to calculate BMI, and the app displays the result along with a health status category (e.g., Underweight, Normal).  |
| **Reviewing BMI Records**       | The coach views a student’s BMI history and trend graph to analyze fitness progress and assess overall health.                                         |
| **Setting BMI Goals**           | The coach sets a target BMI for a student, adds notes about diet and training, and tracks progress toward achieving the goal.                          |
| **Generating BMI Reports**      | The coach generates a detailed BMI report for an individual student or batch, which can be downloaded or shared with parents.                          |
| **BMI Notifications & Alerts**  | The coach sets alerts for unhealthy BMI ranges, and the app notifies the coach and parents if a student’s BMI crosses these thresholds.               |
| **Health Tips & Recommendations** | The coach provides or customizes health tips for students based on their BMI, including nutrition and activity recommendations.                        |
