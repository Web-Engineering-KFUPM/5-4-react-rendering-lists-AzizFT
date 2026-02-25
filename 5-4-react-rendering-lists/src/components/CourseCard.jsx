// src/components/CourseCard.jsx
import TaskItem from "./TaskItem";
const hasTasks = course.tasks.length > 0;
const allDone = hasTasks && course.tasks.every((t) => t.isDone);

export default function CourseCard({ course, index, onMutateCourse }) {
  /* =========================================================
     TASK 4 — Interactivity (Toggle + Delete ONLY)
     ---------------------------------------------------------
     1) Implement toggleTask(id) using onMutateCourse + .map()
     2) Implement deleteTask(id) using onMutateCourse + .filter()
     ========================================================= */

  function toggleTask(taskId) {
    onMutateCourse(index, {
      ...course,
      tasks: course.tasks.map((t) =>
        t.id === taskId ? { ...t, isDone: !t.isDone } : t
      ),
    });
  }

  function deleteTask(taskId) {
    onMutateCourse(index, {
      ...course,
      tasks: course.tasks.filter((t) => t.id !== taskId),
    });
  }

  // Helpful hints for TASK 3 (optional to use)
  // const hasTasks = course.tasks.length > 0;
  // const allDone = hasTasks && course.tasks.every(t => t.isDone);

  return (
    <article className="course card">
      <header className="cardHeader">
        <h2>{course.title}</h2>

        {allDone && <span className="pill ok">All caught up</span>}
        {!hasTasks && <p className="muted">No tasks yet.</p>}
        {hasTasks && course.tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
      ))}
      </header>

      <section className="tasksSection">

        {/* DISPLAY ONLY: Show a message when there are no tasks */}
        
        <ul className="tasks">
          {course.tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </section>
    </article>
  );
}