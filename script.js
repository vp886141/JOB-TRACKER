const form = document.getElementById("jobForm");
const jobList = document.getElementById("jobList");

let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

// Show jobs when page loads
displayJobs();

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const job = {
        company: document.getElementById("company").value,
        role: document.getElementById("role").value,
        date: document.getElementById("date").value,
        status: document.getElementById("status").value
    };

    jobs.push(job);
    localStorage.setItem("jobs", JSON.stringify(jobs));

    displayJobs();
    form.reset();
});

function displayJobs() {
    jobList.innerHTML = "";

    jobs.forEach((job, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${job.company}</td>
            <td>${job.role}</td>
            <td>${job.date}</td>
            <td>${job.status}</td>
            <td>
                <button class="delete-btn" onclick="deleteJob(${index})">Delete</button>
            </td>
        `;

        jobList.appendChild(row);
    });
}

function deleteJob(index) {
    jobs.splice(index, 1);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    displayJobs();
}
