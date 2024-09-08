// Function to toggle the visibility of the Skills section
    const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
    const skillsSection = document.getElementById('skillsSection') as HTMLDivElement;

    if (toggleSkillsBtn && skillsSection) {  // Check if elements exist
        toggleSkillsBtn.addEventListener('click', () => {
            if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
                skillsSection.style.display = 'block';
            } else {
                skillsSection.style.display = 'none';
            }
        });
    }

    // Function to toggle the visibility of the Experience section
    const toggleExperienceBtn = document.getElementById('toggleExperienceBtn') as HTMLButtonElement;
    const experienceSection = document.getElementById('experienceSection') as HTMLDivElement;

    if (toggleExperienceBtn && experienceSection) {  // Check if elements exist
        toggleExperienceBtn.addEventListener('click', () => {
            if (experienceSection.style.display === 'none' || experienceSection.style.display === '') {
                experienceSection.style.display = 'block';
            } else {
                experienceSection.style.display = 'none';
            }
        });
    }
