// Function to toggle the visibility of the Skills section
var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
var skillsSection = document.getElementById('skillsSection');
if (toggleSkillsBtn && skillsSection) { // Check if elements exist
    toggleSkillsBtn.addEventListener('click', function () {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
}
// Function to toggle the visibility of the Experience section
var toggleExperienceBtn = document.getElementById('toggleExperienceBtn');
var experienceSection = document.getElementById('experienceSection');
if (toggleExperienceBtn && experienceSection) { // Check if elements exist
    toggleExperienceBtn.addEventListener('click', function () {
        if (experienceSection.style.display === 'none' || experienceSection.style.display === '') {
            experienceSection.style.display = 'block';
        }
        else {
            experienceSection.style.display = 'none';
        }
    });
}