// Document ready function
document.addEventListener('DOMContentLoaded', function () {

  // Show the 'Position' tab by default
  document.getElementById("PositionTab").style.display = "block";
  document.querySelector(".tablinks").classList.add("active");

  // Create a text input for displaying and editing the slider value
  const sliders = document.querySelectorAll('input[type="range"]');

  sliders.forEach(slider => {
    const inputBox = document.createElement('input');
    inputBox.type = 'number';
    inputBox.value = slider.value;
    inputBox.className = 'slider-input';
    inputBox.min = slider.min;
    inputBox.max = slider.max;
    slider.parentNode.insertBefore(inputBox, slider.nextSibling);

    // Update the text box when the slider is moved
    slider.addEventListener('input', function () {
      inputBox.value = this.value;
    });

    // Update the slider when the text box value is changed
    inputBox.addEventListener('input', function () {
      let value = parseInt(this.value, 10);

      // Ensure the value is within the slider's min/max range
      if (value < parseInt(slider.min)) value = slider.min;
      if (value > parseInt(slider.max)) value = slider.max;

      this.value = value;
      slider.value = value;
    });
  });

  // Add validation for the rhythm field
  const rhythmInput = document.getElementById('rhythm');

  rhythmInput.addEventListener('input', function () {
    const value = parseInt(rhythmInput.value, 10);
    if (isNaN(value) || value < 400 || value > 1400) {
      rhythmInput.setCustomValidity('Rhythm must be between 400 and 1400.');
    } else {
      rhythmInput.setCustomValidity('');
    }
    rhythmInput.reportValidity(); // This will trigger the validity check and show the error message if invalid
  });

  // Section for One-Piece vs Top / Bottom
  const onePieceRadio = document.getElementById('onePiece');
  const twoPieceRadio = document.getElementById('twoPiece');

  function updateOutfitFields() {
    const onePieceField = document.getElementById('onePieceField');
    const twoPieceFields = document.getElementById('twoPieceFields');

    const outfitOnePiece = document.getElementById("outfitOnePiece");
    const outfitTop = document.getElementById("outfitTop");
    const outfitBottom = document.getElementById("outfitBottom");

    if (onePieceRadio.checked) {
      onePieceField.style.display = 'block';
      twoPieceFields.style.display = 'none';

      outfitOnePiece.disabled = false;
      outfitTop.disabled = true;
      outfitBottom.disabled = true;

      outfitTop.value = '';
      outfitBottom.value = '';

    } else if (twoPieceRadio.checked) {
      onePieceField.style.display = 'none';
      twoPieceFields.style.display = 'block';

      outfitOnePiece.disabled = true;
      outfitTop.disabled = false;
      outfitBottom.disabled = false;

      outfitOnePiece.value = '';
    }
  }

  // Initialize outfit fields
  updateOutfitFields();

  // Add event listeners to the radio buttons
  onePieceRadio.addEventListener("change", updateOutfitFields);
  twoPieceRadio.addEventListener("change", updateOutfitFields);

  // Function to update the displayed number in each slider's input box
  function updateSliderValues() {
    sliders.forEach(slider => {
      const inputBox = slider.nextElementSibling; // Get the input box next to the slider
      if (inputBox && inputBox.classList.contains('slider-input')) {
        inputBox.value = slider.value; // Update the input box with the slider's value
      }
    });
  }

  function updateSkillDropdown() {
    const selectedType = document.querySelector('input[name="positionType"]:checked').value;
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
  const positionSelect = document.getElementById('position');
  const subtypes = {
    active: {
      cowgirl: ['cowgirl', 'full nelson', 'standing fuck'],
      doggy: ['doggystyle', 'side fuck'],
      missionary: ['missionary', 'pile driver', 'side fuck'],
      service: ['69', 'blowjob', 'handjob', 'titfuck']
    },
    passive: {
      cowgirl: ['cowgirl', 'full nelson', 'standing fuck'],
      doggy: ['doggystyle', 'side fuck'],
      missionary: ['missionary', 'pile driver', 'side fuck'],
      service: ['cunnilingus', 'titfuck', 'fingering', 'facefuck']
    }
  };

  function updatePositions() {
    const selectedType = document.querySelector('input[name="positionType"]:checked').value;
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

  updatePositions();

  // Event listeners for type and subtype changes
  const typeRadios = document.querySelectorAll('input[name="positionType"]');

  typeRadios.forEach(radio => {
    radio.addEventListener('change', updatePositions);
  });

  const subtypeRadios = document.querySelectorAll('input[name="subtype"]');

  subtypeRadios.forEach(radio => {
    radio.addEventListener('change', updatePositions);
  });

  // Position Tag section
  const addPositionTagButton = document.getElementById('addPositionTagButton');
  const positionTagsContainer = document.getElementById('positionTagsContainer');

  function addPositionTag() {
    const tagText = positionTagsInput.value.trim();
    const positionTagsInput = document.getElementById('positionTagsInput');
    const positionTagsList = document.getElementById('positionTagsList');

    if (tagText) {
        // Check if the tag already exists
        const existingTags = Array.from(positionTagsContainer.getElementsByClassName('tag'));
        let tagExists = existingTags.some(tag => tag.textContent.replace('x', '').trim() === tagText);

        if (!tagExists) {
            // Create a new option in the datalist if it doesn't already exist
            let optionExists = Array.from(positionTagsList.options).some(option => option.value === tagText);
            if (!optionExists) {
                const newOption = document.createElement('option');
                newOption.value = tagText;
                positionTagsList.appendChild(newOption);
            }

            // Add the tag to the container
            const tagSpan = document.createElement('span');
            tagSpan.textContent = tagText;
            tagSpan.className = 'tag';

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'x';
            removeBtn.className = 'remove-tag';
            tagSpan.appendChild(removeBtn);
            positionTagsContainer.appendChild(tagSpan);

            positionTagsInput.value = '';

            removeBtn.addEventListener('click', function () {
                tagSpan.remove();
            });
        }
    }
};

addPositionTagButton.addEventListener('click', addPositionTag);


  // Clear position form
  function resetForm() {
    document.getElementById('positionName').value = '';
    document.getElementById('positionFlavor').value = '';
    document.querySelector('input[name="positionType"]:checked').checked = false;
    document.querySelector('input[name="subtype"]:checked').checked = false;
    positionSelect.innerHTML = '';
    sliders.forEach(slider => {
      slider.value = 5;
    });
    updateSliderValues();
    positionTagsContainer.innerHTML = ''; // Clear tags
    document.getElementById('rhythm').value = '';
    document.getElementById('skill').selectedIndex = 0;
    document.getElementById('skillLevel').value = '';
    document.getElementById('pleasureFactor').selectedIndex = 0;
    document.querySelectorAll('input[name="positionLocations"]').forEach(loc => loc.checked = false);

    window.scrollTo(0, 0); // Scroll to the top of the page
  }


  // Adding positions to the list
  const addPositionButton = document.getElementById('addPosition');
  let selectedPositionItem = null;

  function addPosition() {
    // Extracting form values
    const positionCharacterName = document.getElementById('positionCharacterName').value.toLowerCase();
    const positionName = document.getElementById('positionName').value;
    const positionFlavor = document.getElementById('positionFlavor').value;
    const positionType = document.querySelector('input[name="positionType"]:checked').value;
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
    const positionLocations = Array.from(document.querySelectorAll('input[name="positionLocations"]:checked')).map(loc => loc.value);

    // Validation: Ensure all fields are filled out
    if (!positionCharacterName || !positionName || !positionFlavor || !positionType || !subtype || !position || !athletics || !roughness || !yourPleasure || !pleasureFactor || !hisPleasure || !hisSatisfaction || !rhythm || !skill || !skillLevel || positionLocations.length === 0) {
      alert("All fields must be filled out.");
      return;
    }

    const newPosition = {
      positionCharacterName,
      positionName,
      positionFlavor,
      positionType,
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
      positionLocations,
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
        if (posData.positionName === newPosition.positionName
          && posData.positionType === newPosition.positionType
          && posData.subtype === newPosition.subtype) {
          positionExists = true;
        }
      });

      if (positionExists) {
        alert('This position already exists in the list.');
        return;
      }

      // Add the new position
      const positionItem = document.createElement('li');
      positionItem.textContent = `${positionName} (${positionType} - ${subtype})`;
      positionItem.dataset.position = JSON.stringify(newPosition);

      positionItem.addEventListener('click', function () {
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
          document.getElementById('positionCharacterName').value = pos.positionCharacterName;
          document.getElementById('positionName').value = pos.positionName;
          document.getElementById('positionFlavor').value = pos.positionFlavor;
          document.querySelector(`input[name="positionType"][value="${pos.positionType}"]`).checked = true;
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
          document.querySelectorAll('input[name="positionLocations"]').forEach(loc => {
            loc.checked = pos.positionLocations.includes(loc.value);
          });

          // Update tags
          positionTagsContainer.innerHTML = '';
          pos.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.textContent = tag;
            tagSpan.className = 'tag';

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'x';
            removeBtn.className = 'remove-tag';
            tagSpan.appendChild(removeBtn);
            positionTagsContainer.appendChild(tagSpan);

            removeBtn.addEventListener('click', function () {
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

      removeBtn.addEventListener('click', function (e) {
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


  // ----- Outfit array section -----
  // Color tags
  const addColorButton = document.getElementById('addColorButton');
  const colorsContainer = document.getElementById('colorsContainer');

  function addOutfitColors() {
    const tagText = colorsInput.value.trim();
    const colorsInput = document.getElementById('colorsInput');
    const outfitColors = document.getElementById('outfitColors');
    
    if (tagText) {
      // Check if the tag already exists
      const existingTags = Array.from(colorsContainer.getElementsByClassName('tag'));
      let tagExists = existingTags.some(tag => tag.textContent.replace('x', '').trim() === tagText);

      if (!tagExists) {
        // Create a new option in the datalist if it doesn't already exist
        let optionExists = Array.from(outfitColors.options).some(option => option.value === tagText);
        if (!optionExists) {
          const newOption = document.createElement('option');
          newOption.value = tagText;
          outfitColors.appendChild(newOption);
        }

        // Add the tag to the container
        const tagSpan = document.createElement('span');
        tagSpan.textContent = tagText;
        tagSpan.className = 'tag';

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'x';
        removeBtn.className = 'remove-tag';
        tagSpan.appendChild(removeBtn);
        colorsContainer.appendChild(tagSpan);

        // Clear the input
        colorsInput.value = '';

        // Handle tag removal
        removeBtn.addEventListener('click', function () {
          tagSpan.remove();
        });
      }
    }
  };


  addColorButton.addEventListener('click', addOutfitColors);

});

// Function to handle tab switching
function openTool(evt, toolName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");

    // Hide all tab content
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all buttons
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab content and add an active class to the clicked button
    document.getElementById(toolName).style.display = "block";
    evt.currentTarget.className += " active";
}

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
    const initLine = `init_character_for_position("${position.positionCharacterName}");\n`;
    if (!jsContent.includes(initLine)) {
      jsContent += initLine;
    }

    jsContent += `positions("${position.positionCharacterName}", "${position.positionType}", "${position.subtype}", {\n`;
    jsContent += `  name: "${position.positionName}",\n`;
    jsContent += `  flavor: "${position.positionFlavor}",\n`;
    jsContent += `  athletics: ${position.athletics},\n`;
    jsContent += `  roughness: ${position.roughness},\n`;
    jsContent += `  yourPleasure: ${position.yourPleasure},\n`;
    jsContent += `  pleasureFactor: "${position.pleasureFactor}",\n`;
    jsContent += `  hisPleasure: ${position.hisPleasure},\n`;
    jsContent += `  hisSatisfaction: ${position.hisSatisfaction},\n`;
    jsContent += `  rhythm: ${position.rhythm},\n`;
    jsContent += `  skill: "${position.skill}",\n`;
    jsContent += `  skillLevel: ${position.skillLevel},\n`;
    jsContent += `  locations: [${position.positionLocations.map(loc => `"${loc}"`).join(', ')}],\n`;
    jsContent += `  tags: [${position.tags.map(tag => `"${tag}"`).join(', ')}]\n`;
    jsContent += `});\n\n`;
  });

  // Create a blob and a download link
  const blob = new Blob([jsContent], {
    type: 'text/javascript'
  });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'positions.js';

  // Append link to the document and click it programmatically
  document.body.appendChild(link);
  link.click();

  // Remove the link from the document
  document.body.removeChild(link);
}
