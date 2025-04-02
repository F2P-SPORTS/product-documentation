# Student Performance Review User Story
![Ready](https://img.shields.io/badge/Status-Ready-brightgreen)
### Feature: Student Performance Review

**As a** coach,  
**I want** to assess and record performance metrics for each student on a 1 to 10 scale,  
**So that** I can capture incremental improvements accurately and track progress over time.

---

### User Flow & Detailed Steps

1. **Accessing Player Performance Review:**

	- **Scenario**: The coach navigates to a specific batch and views the list of students.
	- **Steps**:
		1. The coach clicks on the batch to see a list of students.
		2. Next to each student’s name, there is a "Review Performance" button.
	- **Outcome**: The coach can select any student and begin a performance review.

2. **Opening the Performance Metrics Matrix:**

	- **Scenario**: The coach wants to review and grade a student’s performance metrics on specific skills.
	- **Steps**:
		1. The coach clicks "Review Performance" for a student.
		2. The app opens a performance metrics matrix tailored to the specific sport, displaying a list of skills or key areas to assess.
			- For example, in a basketball batch, metrics might include “Shooting Accuracy,” “Passing,” “Endurance,” etc.
		3. Each skill has a grading scale from **1 to 10**, where 1 represents minimal ability and 10 represents mastery or excellence.
	- **Outcome**: The coach sees a detailed layout to assign specific scores on a scale of 1 to 10.

3. **Grading Performance Metrics:**

	- **Scenario**: The coach wants to evaluate and assign a score from 1 to 10 for each skill based on the student’s performance.
	- **Steps**:
		1. For each metric, the coach selects a score from 1 to 10, reflecting the student’s current ability in that area.
		2. The coach can add comments to provide feedback, such as “Improving in speed” or “Needs more practice on technique.”
		3. The coach saves the scores, which are recorded as the latest performance review.
	- **Outcome**: The review is saved, with the 1 to 10 scores providing a nuanced view of each student’s performance.

4. **Updating and Saving Regular Performance Reviews:**

	- **Scenario**: The coach wants to conduct regular reviews over time to capture incremental improvements.
	- **Steps**:
		1. Each time the coach updates a review, they can see previous scores in the matrix.
		2. The app allows the coach to create a new session, with each entry dated to track changes over time.
		3. As students improve, their scores on the 1 to 10 scale reflect incremental changes, providing a clear picture of progress.
	- **Outcome**: A timeline of performance reviews is built, capturing subtle improvements based on the coach’s regular assessments.

5. **Generating a Final Performance Report:**

	- **Scenario**: The coach wants a comprehensive report of all performance reviews to summarize the student’s progress.
	- **Steps**:
		1. The coach clicks on "Generate Final Report" in the student’s profile.
		2. The app compiles all performance reviews, showing:
			- Average score across each skill
			- Improvement trends (e.g., from 5 to 8 in Endurance)
			- Feedback highlights
		3. The report includes a summary of strengths, areas for development, and suggested next steps.
	- **Outcome**: The final report provides a thorough analysis of the student’s progress, suitable for sharing with students and parents.

6. **Sharing and Downloading the Performance Report:**
	- **Scenario**: The coach wants to share or download the performance report.
	- **Steps**:
		1. The coach selects the option to download or share the report.
		2. The report can be downloaded as a PDF or shared with parents and students via email.
		3. The coach can add a personalized message, emphasizing key achievements and future goals.
	- **Outcome**: The report is shared with the intended audience, offering a detailed record of the student’s performance and improvements.

---

### Student Performance Review Table 

| **Step**                                | **Description**                                                                                                                                    |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Accessing Player Performance Review** | The coach selects a batch and clicks the "Review Performance" button next to each student to open the performance review process.                  |
| **Opening Performance Metrics Matrix**  | The coach opens a sport-specific metrics matrix with a grading scale of 1 to 10 for key skills or performance areas, like "Shooting" or "Passing." |
| **Grading Performance Metrics**         | The coach assigns scores from 1 to 10 for each metric, capturing nuanced feedback and adding comments for detailed assessment.                     |
| **Updating Regular Reviews**            | The coach can regularly update reviews, with each entry recorded separately to track incremental improvements over time.                           |
| **Generating Final Performance Report** | The coach generates a report summarizing all performance reviews, showing average scores, improvement trends, and feedback highlights.             |
| **Sharing and Downloading Report**      | The coach downloads or shares the report in PDF format with students or parents, including a message about progress and future goals.              |


---

### Sample Weekly Performance Metrics Matrix for Football Player 

| **Day** | **Dribbling** | **Passing** | **Shooting** | **Positioning** | **Stamina** | **Speed** | **Focus** |
|---------|---------------|-------------|--------------|-----------------|-------------|-----------|-----------|
| **Day 1** | 6             | 7           | 5            | 6               | 8           | 7         | 6         |
| **Day 2** | 7             | 6           | 6            | 7               | 8           | 6         | 7         |
| **Day 3** | 7             | 8           | 6            | 7               | 9           | 8         | 7         |
| **Day 4** | 8             | 7           | 5            | 8               | 8           | 7         | 8         |
| **Day 5** | 7             | 8           | 6            | 8               | 9           | 8         | 8         |
| **Day 6** | 8             | 9           | 7            | 9               | 9           | 8         | 9         |
| **Day 7** | 8             | 8           | 7            | 9               | 9           | 9         | 8         |

---

### Sample Data Explanation:

- **Dribbling**: Starts at 6 on Day 1 and improves slightly over the week, reaching 8 by Day 4 and staying consistent.
- **Passing**: Alternates between 7 and 8, peaking at 9 on Day 6, showing solid consistency and minor improvements.
- **Shooting**: Starts lower at 5, improves to 6 and 7 by the end of the week as the player builds accuracy and power.
- **Positioning**: Shows steady improvement, starting at 6 and reaching 9 by Day 6.
- **Stamina**: High from the beginning, ranging from 8 to 9 throughout the week, indicating good endurance.
- **Speed**: Alternates slightly but overall increases from 7 to 9, showing improvement in quickness.
- **Focus**: Improves from 6 on Day 1 to 9 by Day 6, showing increased concentration and mental presence on the field.

---

This filled-in **Weekly Performance Metrics Matrix** provides a snapshot of a player’s daily progress, helping coaches track and analyze performance changes over the course of a week.