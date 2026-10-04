// ==============================
// STUDY SESSIONS DATA
// ==============================

const studySessions = [
  {
    id: 1,
    subject: "JavaScript",
    topic: "DOM",
    duration: 60,
    priority: "high",
    completed: false,
  },
  {
    id: 2,
    subject: "HTML",
    topic: "Forms",
    duration: 45,
    priority: "medium",
    completed: false,
  },
  {
    id: 3,
    subject: "CSS",
    topic: "Flexbox",
    duration: 30,
    priority: "low",
    completed: true,
  },
];

let editingSessionId = null;
// ==============================
// LOCAL STORAGE
// ==============================

function saveSessions() {
  localStorage.setItem("studySessions", JSON.stringify(studySessions));
}

const savedSessions = localStorage.getItem("studySessions");

if (savedSessions) {
  const storedSessions = JSON.parse(savedSessions);

  studySessions.length = 0;

  storedSessions.forEach(function (session) {
    studySessions.push(session);
  });
}

// ==============================
// FORM
// ==============================

const sessionForm = document.querySelector("#session-form");

sessionForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const subjectInput = document.querySelector("#subject");
  const topicInput = document.querySelector("#topic");
  const durationInput = document.querySelector("#duration");
  const priorityInput = document.querySelector("#priority");

  const subject = subjectInput.value.trim();
  const topic = topicInput.value.trim();
  const duration = Number(durationInput.value);

  // ==============================
  // VALIDATION
  // ==============================

  if (subject === "") {
    alert("Please enter a subject.");
    subjectInput.focus();
    return;
  }

  if (topic === "") {
    alert("Please enter a topic.");
    topicInput.focus();
    return;
  }

  if (!duration || duration <= 0) {
    alert("Please enter a valid duration greater than 0.");
    durationInput.focus();
    return;
  }

  // ==============================
  // CREATE / UPDATE SESSION
  // ==============================

  const newSession = {
    id: Date.now(),
    subject: subject,
    topic: topic,
    duration: duration,
    priority: priorityInput.value,
    completed: false,
  };

  if (editingSessionId !== null) {
    const sessionToEdit = studySessions.find(function (session) {
      return session.id === editingSessionId;
    });

    if (sessionToEdit) {
      sessionToEdit.subject = newSession.subject;
      sessionToEdit.topic = newSession.topic;
      sessionToEdit.duration = newSession.duration;
      sessionToEdit.priority = newSession.priority;
    }
  } else {
    studySessions.push(newSession);
  }

  saveSessions();

  // Re-render using current search/filter
  filterSessions();

  updateDashboard();

  // Reset form
  sessionForm.reset();

  editingSessionId = null;

  document.querySelector("#session-form button").textContent = "Add Session";
});

// ==============================
// RENDER SESSIONS
// ==============================

function renderSessions(sessions) {
  const sessionList = document.querySelector("#session-list");

  sessionList.innerHTML = "";

  sessions.forEach(function (session) {
    const card = document.createElement("div");

    card.classList.add("session-card");

    if (session.priority === "high") {
      card.classList.add("high-priority");
    } else if (session.priority === "medium") {
      card.classList.add("medium-priority");
    } else {
      card.classList.add("low-priority");
    }

    // Subject
    const subject = document.createElement("h3");
    subject.textContent = session.subject;

    // Topic
    const topic = document.createElement("p");
    topic.textContent = session.topic;

    // Duration
    const duration = document.createElement("p");
    duration.textContent = session.duration + " minutes";

    // Priority
    const priority = document.createElement("p");
    priority.textContent = "Priority: " + session.priority;

    // Completed status
    const completed = document.createElement("p");

    if (session.completed) {
      completed.textContent = "Completed";
    } else {
      completed.textContent = "Not Completed";
    }

    // Complete button
    const completeButton = document.createElement("button");

    if (session.completed) {
      completeButton.textContent = "Completed ✓";
      completeButton.disabled = true;
    } else {
      completeButton.textContent = "Mark Complete";

      completeButton.addEventListener("click", function () {
        session.completed = true;

        saveSessions();

        filterSessions();
        updateDashboard();
      });
    }

    // Edit Button
    const editButton = document.createElement("button");

    editButton.textContent = "Edit";

    editButton.addEventListener("click", function () {
      document.querySelector("#subject").value = session.subject;
      document.querySelector("#topic").value = session.topic;
      document.querySelector("#duration").value = session.duration;
      document.querySelector("#priority").value = session.priority;

      editingSessionId = session.id;

      document.querySelector("#session-form button").textContent =
        "Update Session";

      document.querySelector("#session-form").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    // Delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
      const updatedSessions = studySessions.filter(function (item) {
        return item.id !== session.id;
      });

      studySessions.length = 0;

      updatedSessions.forEach(function (item) {
        studySessions.push(item);
      });

      saveSessions();

      filterSessions();
      updateDashboard();
    });

    // Add everything to card
    card.append(
      subject,
      topic,
      duration,
      priority,
      completed,
      completeButton,
      editButton,
      deleteButton,
    );

    sessionList.append(card);
  });
}

// ==============================
// DASHBOARD
// ==============================

function updateDashboard() {
  const totalSessionsElement = document.querySelector("#total-sessions");

  const completedSessionsElement = document.querySelector(
    "#completed-sessions",
  );

  const studyTimeElement = document.querySelector("#study-time");

  // Count completed sessions
  const completedCount = studySessions.filter(function (session) {
    return session.completed;
  }).length;

  // Calculate total study time
  const totalStudyTime = studySessions.reduce(function (total, session) {
    return total + session.duration;
  }, 0);

  // Update dashboard
  totalSessionsElement.textContent = studySessions.length;

  completedSessionsElement.textContent = completedCount;

  studyTimeElement.textContent = totalStudyTime + " min";
}

// ==============================
// SEARCH + PRIORITY FILTER
// ==============================

const searchInput = document.querySelector("#search-input");

const priorityFilter = document.querySelector("#priority-filter");

function filterSessions() {
  const searchText = searchInput.value.toLowerCase();

  const priority = priorityFilter.value;

  const filteredSessions = studySessions.filter(function (session) {
    // Search condition
    const searchMatches =
      session.subject.toLowerCase().includes(searchText) ||
      session.topic.toLowerCase().includes(searchText);

    // Priority condition
    const priorityMatches = priority === "all" || session.priority === priority;

    // Both conditions must be true
    return searchMatches && priorityMatches;
  });

  renderSessions(filteredSessions);
}

// Search
searchInput.addEventListener("input", filterSessions);

// Priority
priorityFilter.addEventListener("change", filterSessions);

// ==============================
// INITIAL RENDER
// ==============================

renderSessions(studySessions);

updateDashboard();

// ==============================
// STUDY TIMER
// ==============================

let timerSeconds = 25 * 60;
let timerInterval = null;
let totalFocusSeconds = 0;

const savedFocusTime = localStorage.getItem("totalFocusSeconds");

if (savedFocusTime) {
  totalFocusSeconds = Number(savedFocusTime);
}

const timerDisplay = document.querySelector("#timer-display");
const timerDurationInput = document.querySelector("#timer-duration");
const timerMessage = document.querySelector("#timer-message");
const focusTimeDisplay = document.querySelector("#focus-time");

function updateTimerDisplay() {
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;

  timerDisplay.textContent =
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}

function startTimer() {
  if (timerInterval !== null) {
    return;
  }

  timerMessage.textContent = "";

  timerInterval = setInterval(function () {
    if (timerSeconds > 0) {
      timerSeconds--;
      totalFocusSeconds++;

      localStorage.setItem("totalFocusSeconds", totalFocusSeconds);

      updateTimerDisplay();
      updateFocusTimeDisplay();
    }

    if (timerSeconds === 0) {
      clearInterval(timerInterval);
      timerInterval = null;

      timerMessage.textContent = "Time's up! Great work! 🎉";
    }
  }, 1000);
}

document.querySelector("#start-timer").addEventListener("click", function () {
  if (timerInterval !== null) {
    return;
  }

  if (timerSeconds <= 0) {
    timerSeconds = Number(timerDurationInput.value) * 60;
    updateTimerDisplay();
  }

  startTimer();
});

document.querySelector("#pause-timer").addEventListener("click", function () {
  clearInterval(timerInterval);
  timerInterval = null;
});

document.querySelector("#reset-timer").addEventListener("click", function () {
  clearInterval(timerInterval);

  timerInterval = null;
  timerSeconds = Number(timerDurationInput.value) * 60;

  updateTimerDisplay();
  timerMessage.textContent = "";
});

timerDurationInput.addEventListener("input", function () {
  const duration = Number(timerDurationInput.value);

  if (timerInterval === null && duration > 0) {
    timerSeconds = duration * 60;

    updateTimerDisplay();

    timerMessage.textContent = "";
  }
});

function updateFocusTimeDisplay() {
  const minutes = Math.floor(totalFocusSeconds / 60);
  const seconds = totalFocusSeconds % 60;

  focusTimeDisplay.textContent = minutes + " min " + seconds + " sec";
}

updateTimerDisplay();
updateFocusTimeDisplay();

// ==============================
// DARK / LIGHT MODE
// ==============================

const themeButton = document.querySelector("#theme-btn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeButton.textContent = "🌙";
}

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    themeButton.textContent = "☀️";
    localStorage.setItem("theme", "light");
  }
});
