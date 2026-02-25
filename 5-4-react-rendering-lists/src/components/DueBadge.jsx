// src/components/DueBadge.jsx
function daysUntil(dateStr) {
  const today = new Date();
  const due = new Date(dateStr + "T00:00:00");
  today.setHours(0, 0, 0, 0);
  due.setHours(0, 0, 0, 0);
  const diff = Math.round((due - today) / (1000 * 60 * 60 * 24));
  return diff;
}

export default function DueBadge({ dueDate }) {
  /* =========================================================
     TASK 3 — Simple Conditional Rendering (ONLY && in other files)
     ---------------------------------------------------------
     GOAL:
     Show one label based on daysUntil(dueDate):

       - "Overdue"        (if past)
       - "Due today"      (if today)
       - "Due in X days"  (if future)

     STEPS:
     1) const d = daysUntil(dueDate)
     2) Decide the label based on d
     3) Return: <span className="badge">{label}</span>
     ========================================================= */

  // TODO (TASK 3): implement DueBadge label logic

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dueDate = new Date(due);
  dueDate.setHours(0, 0, 0, 0);

  const msPerDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round((dueDate - today) / msPerDay);

  let label = "";
  let variant = "soon";

  if (diffDays < 0) {
    label = "Overdue";
    variant = "late";
  } else if (diffDays === 0) {
    label = "Due today";
    variant = "today";
  } else {
    label = `Due in ${diffDays} day${diffDays === 1 ? "" : "s"}`;
    variant = "soon";
  }

  return <span className={`due ${variant}`}>{label}</span>;
}