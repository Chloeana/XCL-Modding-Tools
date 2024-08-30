// Function to handle tab switching
function openTool(evt, toolName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab content and add an active class to the clicked button
    document.getElementById(toolName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    const addPositionButton = document.getElementById('addPosition');
    const positionList = document.getElementById('positionsList');
    const addTagButton = document.getElementById('addTagButton');
    const tagsInput = document.getElementById('tagsInput');
    const tagsList = document.getElementById('tagsList');
    const tagsContainer = document.getElementById('tagsContainer');
    const positionSelect = document.getElementById('position');
    const typeRadios = document.querySelectorAll('input[name="type"]');
    const subtypeRadios = document.querySelectorAll('input[name="subtype"]');
    const sliders = document.querySelectorAll('input[type="range"]');
    const rhythmInput = document.getElementById('rhythm');
    let selectedPositionItem = null; // Track the currently selected position

    const subtypes = {
        active: {
            cowgirl: ['cowgirl', 'full nelson', 'standing fuck'],
            doggy: ['doggystyle'],
            missionary: ['missionary', 'pile driver', 'side fuck'],
            service: ['69', 'blowjob', 'handjob', 'cunnilingus', 'titfuck', 'fingering']
        },
        passive: {
            cowgirl: ['cowgirl', 'full nelson', 'standing fuck'],
            doggy: ['doggystyle'],
            missionary: ['missionary', 'pile driver', 'side fuck'],
            service: ['69', 'blowjob', 'handjob', 'cunnilingus', 'titfuck', 'fingering']
        }
    };

    // Example: Show the 'Position' tab by default
    document.getElementById("Position").style.display = "block";
    document.querySelector(".tablinks").classList.add("active");

    // Add validation for the rhythm field
    rhythmInput.addEventListener('input', function() {
        const value = parseInt(rhythmInput.value, 10);
        if (isNaN(value) || value < 400 || value > 1400) {
            rhythmInput.setCustomValidity('Rhythm must be between 400 and 1400.');
        } else {
            rhythmInput.setCustomValidity('');
        }
        rhythmInput.reportValidity(); // This will trigger the validity check and show the error message if invalid
    });

    // Create a text input for displaying and editing the slider value
    sliders.forEach(slider => {
        const inputBox = document.createElement('input');
        inputBox.type = 'number';
        inputBox.value = slider.value;
        inputBox.className = 'slider-input';
        inputBox.min = slider.min;
        inputBox.max = slider.max;
        slider.parentNode.insertBefore(inputBox, slider.nextSibling);

        slider.addEventListener('input', function() {
            displaySpan.textContent = this.value;
        });

        // Update the text box when the slider is moved
        slider.addEventListener('input', function() {
            inputBox.value = this.value;
        });

        // Update the slider when the text box value is changed
        inputBox.addEventListener('input', function() {
            let value = parseInt(this.value, 10);

            // Ensure the value is within the slider's min/max range
            if (value < parseInt(slider.min)) value = slider.min;
            if (value > parseInt(slider.max)) value = slider.max;

            this.value = value;
            slider.value = value;
        });
    });

    function updateValue(inputId, value) {
        const inputElement = document.getElementById(inputId);
        inputElement.value = value;
    }

    // Function to update the displayed number in each slider's input box
    function updateSliderValues() {
        const sliders = document.querySelectorAll('input[type="range"]');

        sliders.forEach(slider => {
            const inputBox = slider.nextElementSibling; // Get the input box next to the slider
            if (inputBox && inputBox.classList.contains('slider-input')) {
                inputBox.value = slider.value; // Update the input box with the slider's value
            }
        });
    }


    // Clear form
    function resetForm() {
        document.getElementById('positionName').value = '';
        document.getElementById('flavor').value = '';
        document.querySelector('input[name="type"]:checked').checked = false;
        document.querySelector('input[name="subtype"]:checked').checked = false;
        positionSelect.innerHTML = '';
        sliders.forEach(slider => {
            slider.value = 5;
        });
        updateSliderValues();
        tagsContainer.innerHTML = ''; // Clear tags
        document.getElementById('rhythm').value = '';
        document.getElementById('skill').selectedIndex = 0;
        document.getElementById('skillLevel').value = '';
        document.getElementById('pleasureFactor').selectedIndex = 0;
        document.querySelectorAll('input[name="locations"]').forEach(loc => loc.checked = false);

        window.scrollTo(0, 0); // Scroll to the top of the page
    }

    function updateSkillDropdown() {
        const selectedType = document.querySelector('input[name="type"]:checked').value;
        const skillSelect = document.getElementById('skill');

        // Reset the skill options
        skillSelect.innerHTML = '';
        const options = selectedType === 'active' 
            ? ['Active Sex', 'Blowjob', 'Gag Reflex', 'Titfuck', 'Female Masturbation', 'Handjob']
            : ['Passive Sex', 'Blowjob', 'Gag Reflex', 'Titfuck', 'Female Masturbation', 'Handjob'];
        
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.toLowerCase().replace(' ', '_');
            opt.textContent = option;
            skillSelect.appendChild(opt);
        });
    }

    // Function to update positions based on selected type and subtype
    function updatePositions() {
        const selectedType = document.querySelector('input[name="type"]:checked').value;
        const selectedSubtype = document.querySelector('input[name="subtype"]:checked').value;

        const positions = subtypes[selectedType][selectedSubtype];

        positionSelect.innerHTML = '';
        positions.forEach(position => {
            const option = document.createElement('option');
            option.value = position.toLowerCase();
            option.textContent = position;
            positionSelect.appendChild(option);
        });

        // Update Skill dropdown based on Type
        updateSkillDropdown();
    }

    // Event listeners for type and subtype changes
    typeRadios.forEach(radio => {
        radio.addEventListener('change', updatePositions);
    });

    subtypeRadios.forEach(radio => {
        radio.addEventListener('change', updatePositions);
    });

    // Initial update of positions based on default type and subtype
    updatePositions();

    // Tag section
    addTagButton.addEventListener('click', function() {
        const tagText = tagsInput.value.trim();

        if (tagText) {
            // Check if the tag already exists
            const existingTags = Array.from(tagsContainer.getElementsByClassName('tag'));
            let tagExists = existingTags.some(tag => tag.textContent.replace('x', '').trim() === tagText);

            if (!tagExists) {
                // Create a new option in the datalist if it doesn't already exist
                let optionExists = Array.from(tagsList.options).some(option => option.value === tagText);
                if (!optionExists) {
                    const newOption = document.createElement('option');
                    newOption.value = tagText;
                    tagsList.appendChild(newOption);
                }

                // Add the tag to the container
                const tagSpan = document.createElement('span');
                tagSpan.textContent = tagText;
                tagSpan.className = 'tag';

                const removeBtn = document.createElement('button');
                removeBtn.textContent = 'x';
                removeBtn.className = 'remove-tag';
                tagSpan.appendChild(removeBtn);
                tagsContainer.appendChild(tagSpan);

                // Clear the input
                tagsInput.value = '';

                // Handle tag removal
                removeBtn.addEventListener('click', function() {
                    tagSpan.remove();
                });
            }
        }
    });


    // Adding positions to the list
    function addPosition() {
        // Extracting form values
        const characterName = document.getElementById('characterName').value.toLowerCase();
        const positionName = document.getElementById('positionName').value;
        const flavor = document.getElementById('flavor').value;
        const type = document.querySelector('input[name="type"]:checked').value;
        const subtype = document.querySelector('input[name="subtype"]:checked').value;
        const position = document.getElementById('position').value;
        const athletics = document.getElementById('athletics').value;
        const roughness = document.getElementById('roughness').value;
        const yourPleasure = document.getElementById('yourPleasure').value;
        const pleasureFactor = document.getElementById('pleasureFactor').value;
        const hisPleasure = document.getElementById('hisPleasure').value;
        const hisSatisfaction = document.getElementById('hisSatisfaction').value;
        const rhythm = document.getElementById('rhythm').value;
        const skill = document.getElementById('skill').value;
        const skillLevel = document.getElementById('skillLevel').value;
        const locations = Array.from(document.querySelectorAll('input[name="locations"]:checked')).map(loc => loc.value);
    
        // Validation: Ensure all fields are filled out
        if (!characterName || !positionName || !flavor || !type || !subtype || !position || !athletics || !roughness || !yourPleasure || !pleasureFactor || !hisPleasure || !hisSatisfaction || !rhythm || !skill || !skillLevel || locations.length === 0) {
            alert("All fields must be filled out.");
            return;
        }
    
        const newPosition = {
            characterName,
            positionName,
            flavor,
            type,
            subtype,
            position,
            athletics,
            roughness,
            yourPleasure,
            pleasureFactor,
            hisPleasure,
            hisSatisfaction,
            rhythm,
            skill,
            skillLevel,
            locations,
            tags: Array.from(document.querySelectorAll('.tag')).map(tag => tag.textContent.replace('x', '').trim())
        };
    
        if (addPositionButton.dataset.editing === 'true') {
            // Update the existing position
            const selectedPosition = document.querySelector('li.selected');
            selectedPosition.dataset.position = JSON.stringify(newPosition);
            selectedPosition.textContent = `${positionName} (${subtype} - ${position})`;
            delete addPositionButton.dataset.editing;
            addPositionButton.textContent = 'Add Position'; // Change back to "Add Position"
    
            // Deselect the position after saving
            selectedPosition.classList.remove('selected');
            selectedPositionItem = null;
        } else {
            // Check for duplicate positions
            const existingPositions = Array.from(document.getElementById('positionsList').children);
            let positionExists = false;
            existingPositions.forEach(pos => {
                const posData = JSON.parse(pos.dataset.position);
                if (posData.positionName === newPosition.positionName && 
                    posData.type === newPosition.type && 
                    posData.subtype === newPosition.subtype) {
                    positionExists = true;
                }
            });
    
            if (positionExists) {
                alert('This position already exists in the list.');
                return;
            }
    
            // Add the new position
            const positionItem = document.createElement('li');
            positionItem.textContent = `${positionName} (${type} - ${subtype})`;
            positionItem.dataset.position = JSON.stringify(newPosition);
    
            positionItem.addEventListener('click', function() {
                if (positionItem.classList.contains('selected')) {
                    positionItem.classList.remove('selected');
                    resetForm();
                } else {
                    addPositionButton.textContent = 'Save Position'; // Change button text
                    addPositionButton.dataset.editing = 'true'; // Mark as editing
                    document.querySelectorAll('li').forEach(item => item.classList.remove('selected'));
                    positionItem.classList.add('selected');
    
                    // Update the form fields with the selected position's data
                    const pos = JSON.parse(positionItem.dataset.position);
                    document.getElementById('characterName').value = pos.characterName;
                    document.getElementById('positionName').value = pos.positionName;
                    document.getElementById('flavor').value = pos.flavor;
                    document.querySelector(`input[name="type"][value="${pos.type}"]`).checked = true;
                    document.querySelector(`input[name="subtype"][value="${pos.subtype}"]`).checked = true;
                    updatePositions(); // Ensure the position dropdown is updated based on type/subtype
                    document.getElementById('position').value = pos.position;
                    document.getElementById('athletics').value = pos.athletics;
                    document.getElementById('roughness').value = pos.roughness;
                    document.getElementById('yourPleasure').value = pos.yourPleasure;
                    document.getElementById('pleasureFactor').value = pos.pleasureFactor;
                    document.getElementById('hisPleasure').value = pos.hisPleasure;
                    document.getElementById('hisSatisfaction').value = pos.hisSatisfaction;
                    document.getElementById('rhythm').value = pos.rhythm;
                    document.getElementById('skill').value = pos.skill;
                    document.getElementById('skillLevel').value = pos.skillLevel;
                    document.querySelectorAll('input[name="locations"]').forEach(loc => {
                        loc.checked = pos.locations.includes(loc.value);
                    });
    
                    // Update tags
                    tagsContainer.innerHTML = '';
                    pos.tags.forEach(tag => {
                        const tagSpan = document.createElement('span');
                        tagSpan.textContent = tag;
                        tagSpan.className = 'tag';
    
                        const removeBtn = document.createElement('button');
                        removeBtn.textContent = 'x';
                        removeBtn.className = 'remove-tag';
                        tagSpan.appendChild(removeBtn);
                        tagsContainer.appendChild(tagSpan);
    
                        removeBtn.addEventListener('click', function() {
                            tagSpan.remove();
                        });
                    });
    
                    // Update slider displayed numbers
                    updateSliderValues();
    
                    // Store the currently selected position
                    selectedPositionItem = positionItem;
                }
            });
    
            // Remove Position
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'x';
            removeBtn.className = 'remove-position';
            positionItem.appendChild(removeBtn);
    
            removeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                positionItem.remove();
                addPositionButton.textContent = 'Add Position'; // Reset button text
                delete addPositionButton.dataset.editing;
                resetForm(); // Clear the form after removal
            });
    
            document.getElementById('positionsList').appendChild(positionItem);
        }
    
        resetForm(); // Reset the form fields after adding or saving
    }
    

    addPositionButton.addEventListener('click', addPosition);

    // Ensure the position is saved properly
    document.getElementById('savePositions').addEventListener('click', function() {
        if (!selectedPositionItem) {
            alert('No position selected.');
            return;
        }

        const positions = Array.from(positionList.children).map(pos => JSON.parse(pos.dataset.position));
        console.log(JSON.stringify(positions));

        alert('Positions saved successfully.');
    });

    
});

function generateJS() {
    const positions = Array.from(document.getElementById('positionsList').children).map(pos => JSON.parse(pos.dataset.position));

    if (positions.length === 0) {
        alert('No positions to generate.');
        return;
    }

    // JavaScript content string
    let jsContent = '';

    // Start with character initialization
    positions.forEach(position => {
        const initLine = `init_character_for_position("${position.characterName}");\n`;
        if (!jsContent.includes(initLine)) {
            jsContent += initLine;
        }

        jsContent += `positions("${position.characterName}", "${position.type}", "${position.subtype}", {\n`;
        jsContent += `  name: "${position.positionName}",\n`;
        jsContent += `  flavor: "${position.flavor}",\n`;
        jsContent += `  athletics: ${position.athletics},\n`;
        jsContent += `  roughness: ${position.roughness},\n`;
        jsContent += `  yourPleasure: ${position.yourPleasure},\n`;
        jsContent += `  pleasureFactor: "${position.pleasureFactor}",\n`;
        jsContent += `  hisPleasure: ${position.hisPleasure},\n`;
        jsContent += `  hisSatisfaction: ${position.hisSatisfaction},\n`;
        jsContent += `  rhythm: ${position.rhythm},\n`;
        jsContent += `  skill: "${position.skill}",\n`;
        jsContent += `  skillLevel: ${position.skillLevel},\n`;
        jsContent += `  locations: [${position.locations.map(loc => `"${loc}"`).join(', ')}],\n`;
        jsContent += `  tags: [${position.tags.map(tag => `"${tag}"`).join(', ')}]\n`;
        jsContent += `});\n\n`;
    });

    // Create a blob and a download link
    const blob = new Blob([jsContent], { type: 'text/javascript' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'positions.js';

    // Append link to the document and click it programmatically
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}
