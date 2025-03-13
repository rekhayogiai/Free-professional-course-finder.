document.getElementById("find-course-btn").addEventListener("click", function() {
  let selectedCategory = document.getElementById("category-select").value;
  
  if (selectedCategory === "F") {
    alert("Please select a course category!");
    return;
  }
  
  // सभी कोर्स दिखाने के लिए "All" का ऑप्शन सेट करें
  if (selectedCategory === "") {
    selectedCategory = "All";
  }
  
  // Local Storage में Category सेव करें
  localStorage.setItem("selectedCategory", selectedCategory);
  
  // Next Page (courses.html) पर Redirect करें
  window.location.href = "courses.html";
});