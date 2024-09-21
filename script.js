document.addEventListener("DOMContentLoaded", function () {

  // #region ----- Variables -----

  // #region --- Vars - General
  const sliders = document.querySelectorAll('input[type="range"]'); // Refers to all Sliders
  // #endregion --- Vars - General

  // #region --- Vars - MCF ---
  const mcfBaseGameVersion = document.getElementById('mcfBaseGameVersion'); // XCL Version on MCF Tab
  const mcfMCFVersion = document.getElementById('mcfMCFVersion'); // MCF Version on MCF Tab
  // #endregion --- MCF ---
  
  // #region --- Vars - Positions ---
  const positionCharacterName = document.getElementById("positionCharacterName");
  const positionName = document.getElementById("positionName");
  const positionFlavor = document.getElementById("positionFlavor");
  const positionTypeRadios = document.querySelectorAll('input[name="positionType"]');
  const positionSubtypeRadios = document.querySelectorAll('input[name="subtype"]');
  const positionType = document.querySelector('input[name="positionType"]:checked');
  const positionSubType = document.querySelector('input[name="subtype"]:checked');
  const positionSubtypeOptions = {
    active: {
        cowgirl: ["Cowgirl", "Full Nelson", "Standing Fuck"],
        doggy: ["Doggystyle", "Side Fuck", "Standing Fuck"],
        missionary: ["Missionary", "Pile Driver", "Side Fuck"],
        service: ["69", "Blowjob", "Handjob", "Titfuck"],
    },
    passive: {
        cowgirl: ["Cowgirl", "Full Nelson", "Standing Fuck"],
        doggy: ["Doggystyle", "Side Fuck", "Standing Fuck"],
        missionary: ["Missionary", "Pile Driver", "Side Fuck"],
        service: ["Cunnilingus", "Titfuck", "Fingering", "Facefuck"],
    },};
  const positionDropdown = document.getElementById("position");
  const positionRhythmInput = document.getElementById("rhythm");
  const positionAthletics = document.getElementById("athletics");
  const positionRoughness = document.getElementById("roughness");
  const positionYourPleasure = document.getElementById("yourPleasure");
  const positionPleasureFactor = document.getElementById("pleasureFactor");
  const positionHisPleasure = document.getElementById("hisPleasure");
  const positionHisSatisfaction = document.getElementById("hisSatisfaction");
  const positionSkillType = document.getElementById("skill");
  const positionSkillLevel = document.getElementById("skillLevel");
  const positionsList = document.getElementById("positionsList");
  const addPositionButton = document.getElementById("addPosition");
  const generatePositionsFileButton = document.getElementById("generatePositionsFileButton");

  // Position Tag section
  const addPositionTagButton = document.getElementById("addPositionTagButton");
  const positionTagsInput = document.getElementById("positionTagsInput");
  const positionTagsList = document.getElementById("positionTagsList");
  const positionTagsContainer = document.getElementById("positionTagsContainer");  
  // #endregion --- Positions ---

  // #region --- Vars - Outfits ---
  const addOutfitButton = document.getElementById("addOutfit");
  const outfitCharacterName = document.getElementById("outfitCharacterName");
  const outfitCategory = document.getElementById("outfitCategory");
  const outfitName = document.getElementById("outfitName");
  const outfitFlavor = document.getElementById("outfitFlavor");
  const outfitDescription = document.getElementById("outfitDescription");
  const outfitPrice = document.getElementById("outfitPrice");
  const outfitType = document.getElementById("outfitType");
  const outfitSluttiness = document.getElementById("outfitSluttiness");
  const outfitComfort = document.getElementById("outfitComfort");
  const outfitDurability = document.getElementById("outfitDurability");
  const outfitStyle = document.getElementById("outfitStyle");
  const outfitBraTrue = document.getElementById("outfitBraTrue");
  const outfitPantiesTrue = document.getElementById("outfitPantiesTrue");
  const outfitBreastSupport = document.getElementById("outfitBreastSupport");
  const outfitShoes = document.getElementById("outfitShoes");

  const outfitOnePiece = document.getElementById("outfitOnePiece");
  const outfitTop = document.getElementById("outfitTop");
  const outfitBottom = document.getElementById("outfitBottom");


  // Div for hiding or showing fields based on radio check
  const onePieceField = document.getElementById("onePieceField"); 
  const twoPieceFields = document.getElementById("twoPieceFields");
  const onePieceRadio = document.getElementById("onePiece");
  const twoPieceRadio = document.getElementById("twoPiece");

  // Tags section
  const addOutfitTagsButton = document.getElementById("addOutfitTagsButton");
  const outfitTagsContainer = document.getElementById("outfitTagsContainer");
  const outfitTags = document.getElementById("outfitTags");
  const outfitTagsInput = document.getElementById("outfitTagsInput");

  const addColorButton = document.getElementById("addColorButton");
  const outfitColorsContainer = document.getElementById("outfitColorsContainer");
  const outfitColors = document.getElementById("outfitColors");
  const outfitColorsInput = document.getElementById("outfitColorsInput");

  const addRevealsButton = document.getElementById("addRevealsButton");
  const outfitRevealsContainer = document.getElementById("outfitRevealsContainer");
  const outfitReveals = document.getElementById("outfitReveals");
  const outfitRevealsInput = document.getElementById("outfitRevealsInput");

  const addEmphasisButton = document.getElementById("addEmphasisButton");
  const outfitEmphasisContainer = document.getElementById("outfitEmphasisContainer");
  const outfitEmphasis = document.getElementById("outfitEmphasis");
  const outfitEmphasisInput = document.getElementById("outfitEmphasisInput");
  
  // #endregion --- Outfits ---

  // #region --- Vars - BLACKED ---
  const blkYourModBLKVersion = document.getElementById('blkYourModBLKVersion');
  const blkModAuthor = document.getElementById('blkModAuthor');
  const blkBaseGameVersion = document.getElementById('blkBaseGameVersion');
  const blkMCFVersion = document.getElementById('blkMCFVersion');
  const blkModVersion = document.getElementById('blkModVersion');
  const blkYourModName = document.getElementById('blkYourModName');
  const blkYourModVersion = document.getElementById('blkYourModVersion');
  let blkzip = '' // default value for BLACKED Zip var
  // #endregion --- BLACKED ---

  // #region --- Vars - Bar Girl ---
  // #endregion --- Bar Girl ---

  // #region --- Vars - MetaMaker ---
  const metaName = document.getElementById('metaName');
  const metaVersion = document.getElementById('metaVersion');
  const metaAuthor = document.getElementById('metaAuthor');
  const metaGameVersion = document.getElementById('metaGameVersion');
  const metaRequiredMods = document.getElementById('metaRequiredModsContainer');
  const metaIncompatibleMods = document.getElementById('metaIncompatibleModsContainer');
  const metaCompatibleMods = document.getElementById('metaCompatibleModsContainer');
  // #endregion --- MetaMaker ---
  // #endregion ----- Variables -----


  // #region ----- Functions -----

  // #region --- Functions - General
  // Fetch Version Numbers for metas 
  function getVersionNumbers() {
    const webAppUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=UR7cvhaujbJPZe9WbnDqjz8tVHak5en5A6mcaYAsXn1A09QxmxhxPxrKKtwU8hD26_ZPUWg0iYGOL6kZ7c5ZXsaXI6lzHkwtm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAWTw6kYokAIz4fycZZWSzAHvP7q-ER84ut9p1BWsq6RCS-rRKOkYb1ghPP07pcvbnWnLM9fL-5ZyGd_kpYI3Q1kf6558cMJ4Q&lib=MNyQexcowBhR9-0f5LCn7B5-XeAFfSkpW';

    fetch(webAppUrl)
      .then(response => response.json())
      .then(data => {
        const versionXCL = data['XCL'];
        const versionMCF = data['MCF'];
        const versionBLK = data['BLK'];
      
      // Update fields with looked up mod versions
      if (versionXCL) {
        metaGameVersion.value = versionXCL;
        mcfBaseGameVersion.value = versionXCL;
        blkBaseGameVersion.value = versionXCL;
      }

      if (versionMCF) {
        blkMCFVersion.value = versionMCF;
        mcfMCFVersion.value = versionMCF;
      }

      if (versionBLK) {
        blkModVersion.value = versionBLK;
      }})

      .catch(error => {
        console.error('Error:', error);
      });
  };

  // Force update displayed number in each slider's input box (Used after slider gets set by means other than input)
  function updateSliderValues() {
    sliders.forEach((slider) => {
      const inputBox = slider.nextElementSibling; // Get the input box next to the slider
      if (inputBox && inputBox.classList.contains("slider-input")) {
        inputBox.value = slider.value; // Update the input box with the slider's value
      }
    });
  };

  // Function to checking input characters
  function sanitizeInput(input) {
    const allowedCharacters = /^[a-zA-Z0-9_\-.~*\s()!'?,]+$/; // must allow markdown characters
    return allowedCharacters.test(input);
  };

  // Function to checking filename for valid characters
  function sanitizeFilename(input) {
    const allowedCharacters = /^[a-zA-Z0-9_\-.()\s]+$/; // restricted to only characters allowed in filenames
    return allowedCharacters.test(input);
  };

  // Function to check if a field is empty
  function isEmpty(input) {
    return input.trim() === "";
  };

  // Collect tags from dynamic tag sections
  function collectTags(containerId) {
    const container = document.getElementById(containerId);
    const tagFields = container.querySelectorAll('input[type="text"], select');
    const tags = [];

    tagFields.forEach(field => {
        if (field.type === 'text' && field.value) {
            tags.push(field.value.split(',').map(tag => tag.trim()));
        } else if (field.tagName === 'SELECT') {
            tags.push(field.value);
        }
    });

    return tags;
  }

  // Build tagging fields dynamically
  function generateTagFields(videoCount, containerId, tagOptions = []) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear any existing fields

    for (let i = 1; i <= videoCount; i++) {
        const tagField = document.createElement('div');
        tagField.className = 'form-single-line';
        
        // Create label for the tags
        const label = document.createElement('label');
        label.textContent = `Tags for Video ${i}:`;

        // Create dropdowns for tag options
        for (let j = 0; j < 3; j++) {
            const dropdown = document.createElement('select');
            dropdown.id = `tag_${i}_${j}`;
            
            // Add a default option for the dropdown
            const defaultOption = document.createElement('option');
            defaultOption.textContent = `Select tag ${j + 1}`;
            dropdown.appendChild(defaultOption);

            // Add options to the dropdown
            tagOptions.forEach(tag => {
                const optionElement = document.createElement('option');
                optionElement.value = tag;
                optionElement.textContent = tag;
                dropdown.appendChild(optionElement);
            });

            tagField.appendChild(dropdown);
        }

        // Optionally add a text input for additional tags
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `additional_tags_${i}`;
        input.placeholder = `Enter additional tags for video ${i} (comma separated)`;

        tagField.appendChild(input);
        container.appendChild(tagField);
    }
  };
  // #endregion --- Functions - General

  // #region --- Functions - MCF

  // Generate MCF directories
  function generateMCFZIP(){
    var zip = new JSZip();

    const characterName = document.getElementById('mcfCharacterName').value;

    // Add directories to the ZIP
    zip.folder(`metas`)
    zip.folder(`aud/se/sex/loops/bj`)
    zip.folder(`aud/se/sex/loops/bj rough`)
    zip.folder(`aud/se/sex/loops/doggy`)
    zip.folder(`aud/se/sex/loops/fondling`)
    zip.folder(`aud/se/sex/loops/licking`)
    zip.folder(`aud/se/sex/loops/masturbate`)
    zip.folder(`aud/se/sex/loops/missionary`)
    zip.folder(`aud/se/sex/loops/riding`)
    zip.folder(`aud/se/sex/orgasm`)
    zip.folder(`aud/se/sex/orgasm/cum`)
    zip.folder(`aud/se/sex/orgasm/cum/dynamic`)
    zip.folder(`aud/se/sex/orgasm/orgasm`)
    zip.folder(`aud/se/sex/penetration`)
    zip.folder(`aud/se/sex/penetration/pre`)
    zip.folder(`img/characters/bimbo`)
    zip.folder(`img/characters/bj/bwc`)
    zip.folder(`img/characters/cum`)
    zip.folder(`img/characters/dream`)
    zip.folder(`img/characters/emotion/bimbo`)
    zip.folder(`img/characters/emotion/reject`)
    zip.folder(`img/characters/emotion/surprise`)
    zip.folder(`img/characters/face`)
    zip.folder(`img/characters/female`)
    zip.folder(`img/characters/male`)
    zip.folder(`img/characters/nude/body`)
    zip.folder(`img/characters/nude/boobs`)
    zip.folder(`img/characters/nude/bust`)
    zip.folder(`img/characters/nude/butt`)
    zip.folder(`img/characters/nude/present`)
    zip.folder(`img/characters/nude/pussy`)
    zip.folder(`img/characters/nude/${characterName}/butt`)
    zip.folder(`img/characters/nude/${characterName}/pussy`)
    zip.folder(`img/characters/nude/${characterName}/tits`)
    zip.folder(`img/characters/outfits/${characterName}/beach`)
    zip.folder(`img/characters/outfits/${characterName}/casual`)
    zip.folder(`img/characters/outfits/${characterName}/fetish`)
    zip.folder(`img/characters/outfits/${characterName}/gym`)
    zip.folder(`img/characters/outfits/${characterName}/lingerie`)
    zip.folder(`img/characters/outfits/${characterName}/lounge`)
    zip.folder(`img/characters/outfits/${characterName}/office`)
    zip.folder(`img/characters/outfits/${characterName}/stylin`)
    zip.folder(`img/characters/pregnancy/${characterName}`)
    zip.folder(`img/characters/sex/doggy`)
    zip.folder(`img/characters/sex/doggy/moan`)
    zip.folder(`img/characters/sex/insert`)
    zip.folder(`img/characters/sex/missionary/moan`)
    zip.folder(`img/placed/club/dancers`)
    zip.folder(`img/scenes/characters/${characterName}/bj`)
    zip.folder(`img/scenes/characters/${characterName}/chores`)
    zip.folder(`img/scenes/characters/${characterName}/cum`)
    zip.folder(`img/scenes/characters/${characterName}/cum/creampie`)
    zip.folder(`img/scenes/characters/${characterName}/foreplay`)
    zip.folder(`img/scenes/characters/${characterName}/oral`)
    zip.folder(`img/scenes/characters/${characterName}/sex/doggy`)
    zip.folder(`img/scenes/characters/${characterName}/sex/active/cowgirl`)
    zip.folder(`img/scenes/characters/${characterName}/sex/active/doggy`)
    zip.folder(`img/scenes/characters/${characterName}/sex/active/missionary`)
    zip.folder(`img/scenes/characters/${characterName}/sex/active/service`)
    zip.folder(`img/scenes/characters/${characterName}/sex/passive/cowgirl`)
    zip.folder(`img/scenes/characters/${characterName}/sex/passive/doggy`)
    zip.folder(`img/scenes/characters/${characterName}/sex/passive/missionary`)
    zip.folder(`img/scenes/characters/${characterName}/sex/passive/service`)
    zip.folder(`img/scenes/characters/${characterName}/solo`)
    zip.folder(`img/scenes/characters/${characterName}/tg`)

    // Hairstyle section
    zip.folder(`img/characters/hairstyle/`)
    
    // Generate the ZIP file and trigger the download
    zip.generateAsync({ type: "blob" }).then(function (content) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = `${characterName}.zip`; // Name of the ZIP file
      link.click();
    });
  }
  // #endregion --- Function - MCF

  // #region --- Functions - Positions

  // Validate that position form is filled out and doesn't contain special characters
  function validatePositionForm() {
    const positionNameValue = positionName.value;
    const otherFields = [
      document.getElementById("positionCharacterName").value,
      positionFlavor.value,
      document.getElementById("position").value,
      // Add other fields here
    ];

    // Check if fields are empty
    if (isEmpty(positionNameValue)) {
      alert("Position Name cannot be empty.");
      return false;
    }

    for (const field of otherFields) {
      if (isEmpty(field)) {
        alert("All fields must be filled out.");
        return false;
      }
    }
  
    // Check if positionName or any other field contains invalid characters
    if (!sanitizeFilename(positionNameValue)) {
      alert("Position name contains invalid characters.");
      return false;
    }
  
    for (const field of otherFields) {
      if (!sanitizeInput(field)) {
        alert("One or more fields contain invalid characters.");
        return false;
      }
    }
  
    return true; // Form is valid
  };

  // Helper for clearing position tags
  function clearPositionTags(){
    positionTagsContainer.innerHTML = "";
  }

  // Adds tags to position container for tags
  function addPositionTag(tagText) {
    tagText = tagText.trim();
  
    if (tagText) {
      // Check if the tag already exists
      const existingTags = Array.from(
        positionTagsContainer.getElementsByClassName("tag")
      );
      let tagExists = existingTags.some(
        (tag) => tag.textContent.replace("x", "").trim() === tagText
      );
  
      if (!tagExists) { 
        // Create a new option in the datalist if it doesn't already exist
        let optionExists = Array.from(positionTagsList.options).some(
          (option) => option.value === tagText
        );
        if (!optionExists) {
          const newOption = document.createElement("option");
          newOption.value = tagText;
          positionTagsList.appendChild(newOption);
        }

        // Add the tag to the container
        const tagSpan = document.createElement("span");
        tagSpan.textContent = tagText;
        tagSpan.className = "tag";
  
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "x";
        removeBtn.className = "remove-tag";
        tagSpan.appendChild(removeBtn);
        positionTagsContainer.appendChild(tagSpan);

        positionTagsInput.value = "";
  
        removeBtn.addEventListener("click", function () {
          tagSpan.remove();
        });
      }
    }
  };

  // Clear position form
  function resetPositionForm() {
    positionName.value = "";
    positionFlavor.value = "";
    document.getElementById("active").checked = false;
    document.getElementById("passive").checked = false;
    document.getElementById("cowgirl").checked = false;
    document.getElementById("doggy").checked = false;
    document.getElementById("missionary").checked = false;
    document.getElementById("service").checked = false;

    positionDropdown.innerHTML = "";
    sliders.forEach((slider) => {
      slider.value = 5;
    });
    positionRhythmInput.value = "";
    positionSkillType.selectedIndex = 0;
    positionSkillLevel.value = 3;
    positionPleasureFactor.selectedIndex = 0;
    document
      .querySelectorAll('input[name="positionLocations"]')
      .forEach((loc) => (loc.checked = false));

    updateSliderValues();
    clearPositionTags();
    addPositionButton.textContent = "Add Position"; // Reset button text
    delete addPositionButton.dataset.editing; // Remove editing state

    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  // Adding positions to the list
  function addPosition() {
    // Extracting form values
    const characterName = positionCharacterName.value.toLowerCase();
    const name = positionName.value;
    const flavor = positionFlavor.value;
    const type = positionType.value;
    const subtype = positionSubType.value;
    const position = positionDropdown.value;
    const athletics = positionAthletics.value;
    const roughness = positionRoughness.value;
    const yourPleasure = positionYourPleasure.value;
    const pleasureFactor = positionPleasureFactor.value;
    const hisPleasure = positionHisPleasure.value;
    const hisSatisfaction = positionHisSatisfaction.value;
    const rhythm = positionRhythmInput.value;
    const skill = positionSkillType.value;
    const skillLevel = positionSkillLevel.value;
    const locations = Array.from(document.querySelectorAll('input[name="positionLocations"]:checked')).map((loc) => loc.value);
    const tags = Array.from(positionTagsContainer.querySelectorAll(".tag")).map((tag) => tag.textContent.replace("x", "").trim());

    // Validation: Ensure all fields are filled out
    if (!characterName || !name || !flavor || !type || !subtype || !position || !athletics || !roughness || !yourPleasure || !pleasureFactor || !hisPleasure || !hisSatisfaction || !rhythm || !skill || !skillLevel || locations.length === 0) {
        alert("All fields must be filled out.");
        return;
    }

    const newPosition = {
        characterName,
        name,
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
        tags,
    };


    if (addPositionButton.dataset.editing === "true") {
        // Update the existing position
        const selectedPosition = document.querySelector("li.selected");
        if (selectedPosition) {
            selectedPosition.dataset.position = JSON.stringify(newPosition);
            selectedPosition.textContent = `${name} (${type} - ${subtype})`;

            // Re-add the remove button if missing
            let existingRemoveBtn = selectedPosition.querySelector(".remove-position");
            if (!existingRemoveBtn) {
                const removeBtn = document.createElement("button");
                removeBtn.textContent = "x";
                removeBtn.className = "remove-position";
                selectedPosition.appendChild(removeBtn);

                removeBtn.addEventListener("click", function (e) {
                    e.stopPropagation();
                    selectedPosition.remove();
                    addPositionButton.textContent = "Add Position"; // Reset button text
                    delete addPositionButton.dataset.editing;
                    resetPositionForm(); // Clear the form after removal
                });
            }

            // Reset button state
            delete addPositionButton.dataset.editing;
            addPositionButton.textContent = "Add Position";
            selectedPosition.classList.remove("selected");
            selectedPosition = null; // changed from selectedPositionItem
        }
    } else {
        // Check for duplicate positions
        const existingPositions = Array.from(positionsList.children);
        let positionExists = false;
        existingPositions.forEach((pos) => {
            const posData = JSON.parse(pos.dataset.position);
            if (posData.name === newPosition.name && posData.type === newPosition.type && posData.subtype === newPosition.subtype) {
                positionExists = true;
            }
        });

        if (positionExists) {
            alert("This position already exists in the list.");
            return;
        }

        // Add the new position
        const positionItem = document.createElement("li");
        positionItem.textContent = `${name} (${type} - ${subtype})`;
        positionItem.dataset.position = JSON.stringify(newPosition);

        // Add event listener for position clicks
        positionItem.addEventListener("click", handlePositionClick);

        // Add the remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "x";
        removeBtn.className = "remove-position";
        positionItem.appendChild(removeBtn);

        removeBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            positionItem.remove();
            addPositionButton.textContent = "Add Position"; // Reset button text
            delete addPositionButton.dataset.editing;
            resetPositionForm(); // Clear the form after removal
        });

        positionsList.appendChild(positionItem);
    }

    resetPositionForm(); // Reset the form fields after adding or saving
  };

  // Updates Skill Dropdown based on Type and Subtype selected
  function updateSkillDropdown() {
    const selectedType = document.querySelector(
      'input[name="positionType"]:checked'
    ).value;

    // Reset the skill options
    positionSkillType.innerHTML = "";
    const options =
      selectedType === "active"
      ? [
            "Active Sex",
            "Blowjob",
            "Gag Reflex",
            "Titfuck",
            "Female Masturbation",
            "Handjob",
      ]
    : [
            "Passive Sex",
            "Blowjob",
            "Gag Reflex",
            "Titfuck",
            "Female Masturbation",
            "Orgasm Control",
            "Handjob",
      ];

    options.forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option.toLowerCase();
      opt.textContent = option;
      positionSkillType.appendChild(opt);
      });
  };

  // Function to update Position Dropdown based on selected type and subtype
  function updatePositions() {
    const selectedType = document.querySelector(
      'input[name="positionType"]:checked'
    ).value;
    const selectedSubtype = document.querySelector(
      'input[name="subtype"]:checked'
    ).value;

      const positions = positionSubtypeOptions[selectedType][selectedSubtype];

    positionDropdown.innerHTML = "";
    positions.forEach((position) => {
      const option = document.createElement("option");
      option.value = position.toLowerCase();
      option.textContent = position;
      positionDropdown.appendChild(option);
    });

    // Update Skill dropdown based on Type
    updateSkillDropdown();
    setDefaultsByPosition();
  };

  // Update values based on position
  function setDefaultsByPosition() {
    if (addPositionButton.dataset.editing !== "true") {
      const selectedPosition = positionDropdown.value.toLowerCase();
      clearPositionTags();

      // Set defaults in case position changes
      positionPleasureFactor.value = 'both'; 
      positionYourPleasure.value = 5; 
      positionHisPleasure.value = 5;
      positionHisSatisfaction.value = 5;
      updateSkillDropdown();

      if (selectedPosition === 'titfuck') {
        positionPleasureFactor.value = 'none';
        positionYourPleasure.value = 0;
        positionSkillType.value = 'titfuck';
        addPositionTag('titfuck');
        addPositionTag('close to crotch');
      }
      else if (selectedPosition === 'facefuck') {
        positionPleasureFactor.value = 'none';
        positionYourPleasure.value = 0;
        positionSkillType.value = 'gag reflex';
        addPositionTag('facefuck');
        addPositionTag('close to crotch');
      }
      else if (selectedPosition === 'handjob') {
        positionPleasureFactor.value = 'none';
        positionYourPleasure.value = 0;
        positionSkillType.value = 'handjob';
        addPositionTag('handjob');
      }
      else if (selectedPosition === 'blowjob') {
        positionPleasureFactor.value = 'none';
        positionYourPleasure.value = 0;
        positionSkillType.value = 'blowjob';
        addPositionTag('blowjob');
        addPositionTag('close to crotch');
      }
      else if (selectedPosition === '69') {
        positionPleasureFactor.value = 'oral';
        positionSkillType.value = 'blowjob';
        addPositionTag('69');
        addPositionTag('close to crotch');
      }
      else if (selectedPosition === 'cunnilingus') {
        positionPleasureFactor.value = 'oral';
        positionHisPleasure.value = 0;
        positionHisSatisfaction.value = 0;
        positionSkillType.value = 'orgasm control';
        addPositionTag('licking');
      }
      else if (selectedPosition === 'fingering') {
        positionPleasureFactor.value = 'oral';
        positionHisPleasure.value = 0;
        positionHisSatisfaction.value = 0;
        positionSkillType.value = 'orgasm control';
        addPositionTag('fingering');
      }
      else if (selectedPosition === 'standing fuck') {
        addPositionTag('standing');
      }
      else if (selectedPosition === 'side fuck') {
        addPositionTag('side fuck');
      }
      else if (selectedPosition === 'cowgirl') {
        addPositionTag('cowgirl');
      }
      else if (selectedPosition === 'doggystyle') {
        addPositionTag('doggy');
      }
      else if (selectedPosition === 'missionary') {
        addPositionTag('missionary');
      }
      else if (selectedPosition === 'full nelson') {
        addPositionTag('nelson');
      }

      // Update the displayed values next to sliders
      updateSliderValues();
    }
  };

  // Handling position selection
  function handlePositionClick(event) {
    const positionItem = event.currentTarget;

    if (positionItem.classList.contains("selected")) {
        // Deselect the position
        positionItem.classList.remove("selected");
        resetPositionForm();
        addPositionButton.textContent = "Add Position"; // Reset button text
        selectedPositionItem = null; // Clear the reference to the selected position
    } else {
        // Select the position
        addPositionButton.textContent = "Save Position"; // Change button text
        addPositionButton.dataset.editing = "true"; // Mark as editing
        document.querySelectorAll("li").forEach((item) => item.classList.remove("selected"));
        positionItem.classList.add("selected");

        const pos = JSON.parse(positionItem.dataset.position);
        loadPositionIntoForm(pos);

        // Store the currently selected position
        selectedPositionItem = positionItem;
    }
  };

  // Handling removing position
  function handlePositionRemove(positionItem) {
    positionItem.remove();
    addPositionButton.textContent = "Add Position"; // Reset button text
    delete addPositionButton.dataset.editing;
    resetPositionForm(); // Clear the form after removal
  };

  // Parse imported position file
  function parsePositionsFromJS(content) {
    // Regular expression to match the positions() call with one or more position objects
    const regex = /positions\("([^"]+)", "([^"]+)", "([^"]+)",\s*((?:\{[\s\S]*?\})(?:,\s*\{[\s\S]*?\})*)\s*\)/g;
    let match;
    const positions = [];

    while ((match = regex.exec(content)) !== null) {
        const characterName = match[1].trim();
        const type = match[2].trim();
        const subtype = match[3].trim();
        const positionsBlock = match[4].trim();

        // Split positionsBlock by each position object (splitting by '} , {')
        const positionObjects = positionsBlock.split(/\}\s*,\s*\{/);

        positionObjects.forEach((positionObj, index) => {
            // Cleanup braces and parse each position object individually
            const cleanedPositionObj = (index === 0 ? positionObj + '}' : '{' + positionObj + '}').trim();
            const positionData = extractPositionObject(cleanedPositionObj);

            const newPosition = {
                characterName,
                type,
                subtype,
                ...positionData
            };
            positions.push(newPosition);
            /*
            console.log("Extracted position: ", newPosition); // Debugging output
            */
        });
    }

    if (positions.length > 0) {
        populatePositionsList(positions); // Populate list if positions exist
    } else {
        alert("No positions imported.");
    }
  };

  // Extract position details from imported position and assign values
  function extractPositionObject(blockContent) {
    const position = {};
    const fieldNameMapping = {
      "pleasure factor": "pleasureFactor",
      "your pleasure": "yourPleasure",
      "his pleasure": "hisPleasure",
      "his satisfaction": "hisSatisfaction",
      "skill level": "skillLevel"
    };

    // Improved regex to match key-value pairs, handling strings, arrays, numbers, booleans, and objects
    const regex = /["']([\w\s]+)["']\s*:\s*(?:"([^"]*)"|'([^']*)'|\[(.*?)\]|\{(.*?)\}|(\d+(\.\d+)?)|(true|false|null))/g;
    let match;

    while ((match = regex.exec(blockContent)) !== null) {
        const key = match[1].trim();
        let value = match[2] || match[3]; // Extract string value if available

        // If value is undefined, check for arrays, objects, numbers, booleans, or null
        if (value === undefined) {
            if (match[4]) {  // Array
                value = match[4].split(',').map(item => item.trim().replace(/["']/g, '')); // Clean array items
            } else if (match[5]) {  // Object
                value = extractPositionObject(match[5]); // Recursively extract nested objects
            } else if (match[6]) {  // Number
                value = parseFloat(match[6]);
            } else if (match[8]) {  // Boolean or null
                value = JSON.parse(match[8]);
            }
        }

        // Apply the field name mapping
        const mappedKey = fieldNameMapping[key] || key;

        // Assign the processed value to the position object
        position[mappedKey] = value;
    }

    return position;
  };

  // Populate Position List from extracted Object
  function populatePositionsList(positions) {
    positionsList.innerHTML = ""; // Clear existing items

    if (positions.length > 0) {
      // Set the character name before looping through positions
      positionCharacterName.value = positions[0].characterName;
  }

    positions.forEach((position) => {
        const positionItem = document.createElement("li");
        positionItem.textContent = `${position.name} (${position.type} - ${position.subtype})`;
        positionItem.dataset.position = JSON.stringify(position);

        // Add click event listener
        positionItem.addEventListener("click", handlePositionClick);

        // Add remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "x";
        removeBtn.className = "remove-position";
        positionItem.appendChild(removeBtn);

        // Event listener for remove button
        removeBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            positionItem.remove();
            addPositionButton.textContent = "Add Position"; // Reset button text
            delete addPositionButton.dataset.editing;
            resetPositionForm(); // Clear the form after removal
        });

        // Append position item to list
        positionsList.appendChild(positionItem);
    });
  };

  // Populate Position Form with Selected Position's details
  function loadPositionIntoForm(pos) {
    // Update the form fields with the selected position's data
    positionCharacterName.value = pos.characterName;
    positionName.value = pos.name;
    positionFlavor.value = pos.flavor;

    // Set type and subtype
    document.querySelector(`input[name="positionType"][value="${pos.type}"]`).checked = true;
    document.querySelector(`input[name="subtype"][value="${pos.subtype}"]`).checked = true;

    // Update the position dropdown after setting type and subtype
    updatePositions();

    // Continue setting other fields
    positionDropdown.value = pos.position;
    positionPleasureFactor.value = pos.pleasureFactor;
    positionRhythmInput.value = pos.rhythm;
    positionSkillType.value = pos.skill;
    
    // Set sliders
    positionAthletics.value = pos.athletics;
    positionRoughness.value = pos.roughness;
    positionYourPleasure.value = pos.yourPleasure;
    positionHisPleasure.value = pos.hisPleasure;
    positionHisSatisfaction.value = pos.hisSatisfaction;
    positionSkillLevel.value = pos.skillLevel;

    // Update slider displayed numbers
    updateSliderValues();
    
    // Ensure pos.locations is an array before using .includes()
    const locations = Array.isArray(pos.locations) ? pos.locations : [];
    document.querySelectorAll('input[name="positionLocations"]').forEach((loc) => {
        loc.checked = locations.includes(loc.value);
    });

    // Handle tags
    clearPositionTags();
    pos.tags.forEach((tag) => {
        const tagSpan = document.createElement("span");
        tagSpan.textContent = tag;
        tagSpan.className = "tag";

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "x";
        removeBtn.className = "remove-tag";
        tagSpan.appendChild(removeBtn);
        positionTagsContainer.appendChild(tagSpan);

        removeBtn.addEventListener("click", function () {
            tagSpan.remove();
        });
    });
  };

  // Function to update position statistics
  function updatePositionStats() {
    const positionList = Array.from(positionsList.children);
    
    // Calculate total, active, and passive counts
    const totalPositions = positionList.length;
    const activePositions = positionList.filter(pos => JSON.parse(pos.dataset.position).type === 'active').length;
    const passivePositions = positionList.filter(pos => JSON.parse(pos.dataset.position).type === 'passive').length;
    
    // Update the HTML elements
    document.getElementById("totalPositions").textContent = totalPositions;
    document.getElementById("activePositions").textContent = activePositions;
    document.getElementById("passivePositions").textContent = passivePositions;
  };

  // Generate Position File
  function generatePositionsFile() {
    const positions = Array.from(positionsList.children)
        .map((pos) => JSON.parse(pos.dataset.position));
    const activePositions = positions.filter(pos => pos.type === 'active').length;

    if (positions.length === 0) {
        alert("No positions to generate.");
        return;
    }

    if (activePositions < 3) {
      const proceed = confirm("Warning: A character should include at least 3 active positions for the file to work properly. Do you want to proceed?");
      if (!proceed) {
        return; // Stop the process if the user clicks "Cancel"
      }
    }

    // Track initialized characters
    const initializedCharacters = new Set();

    // Group positions by characterName, type, and subtype
    const groupedPositions = {};
    positions.forEach((position) => {
        const key = `${position.characterName}-${position.type}-${position.subtype}`;
        if (!groupedPositions[key]) {
            groupedPositions[key] = [];
        }
        groupedPositions[key].push(position);
    });

    // JavaScript content string
    let jsContent = "";

    // Add init_character_for_position for each unique character at the top
    positions.forEach((position) => {
        if (!initializedCharacters.has(position.characterName)) {
            jsContent += `init_character_for_position("${position.characterName}")\n\n`;
            initializedCharacters.add(position.characterName);
        }
    });

    // Loop through grouped positions and create the position
    Object.keys(groupedPositions).forEach((groupKey) => {
        const [characterName, type, subtype] = groupKey.split("-");
        const group = groupedPositions[groupKey];

        // Add positions for this group
        jsContent += `positions("${characterName}", "${type}", "${subtype}",\n`;

        group.forEach((position, index) => {
            jsContent += `    {\n`;
            jsContent += `        "name": "${position.name}",\n`;
            jsContent += `        "flavor": "${position.flavor}",\n`;
            jsContent += `        "type": "${position.type}",\n`;
            jsContent += `        "subtype": "${position.subtype}",\n`;
            jsContent += `        "position": "${position.position}",\n`;
            jsContent += `        "athletics": ${position.athletics},\n`;
            jsContent += `        "roughness": ${position.roughness},\n`;
            jsContent += `        "your pleasure": ${position.yourPleasure},\n`;
            jsContent += `        "pleasure factor": "${position.pleasureFactor}",\n`;
            jsContent += `        "his pleasure": ${position.hisPleasure},\n`;
            jsContent += `        "his satisfaction": ${position.hisSatisfaction},\n`;
            jsContent += `        "rhythm": ${position.rhythm},\n`;
            jsContent += `        "tags": [${position.tags.map((tag) => `"${tag}"`).join(", ")}],\n`;
            jsContent += `        "skill": "${position.skill}",\n`;
            jsContent += `        "skill level": ${position.skillLevel},\n`;
            jsContent += `        "locations": [${position.locations.map((loc) => `"${loc}"`).join(", ")}]\n`;
            jsContent += `    }`;

            // Add a comma for all but the last position in the group
            if (index < group.length - 1) {
                jsContent += `,\n`;
            } else {
                jsContent += `\n`;
            }
        });

        jsContent += `);\n\n`;
    });

    // Create a blob and a download link
    const blob = new Blob([jsContent], {
      type: "text/javascript",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${positions[0].characterName}_positions.js`;

    // Append link to the document and click it programmatically
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  // #endregion --- Functions - Positions

  // #region --- Functions - Outfits

  // Clear outfit form
  function resetOutfitForm() {
    sliders.forEach((slider) => {
      slider.value = 5;
    });
    updateSliderValues();
    document.getElementById("outfitCategory").selectedIndex = 0;
    document.getElementById("outfitName").value = "";
    document.getElementById("outfitFlavor").value = "";
    document.getElementById("outfitDescription").value = "";
    document.getElementById("outfitPrice").value = "";
    document.getElementById("outfitType").value = "";
    document.getElementById("outfitStyle").value = "";
    outfitOnePiece.value = "";
    outfitTop.value = "";
    outfitBottom.value = "";
    document.getElementById("outfitShoes").value = "";
    document.getElementById("outfitPantiesTrue").value = "";
    document.getElementById("outfitBraTrue").value = "";
    document.getElementById("onePiece").checked = false;
    document.getElementById("twoPiece").checked = false;
    document.getElementById("outfitBraTrue").checked = false;
    document.getElementById("outfitPantiesTrue").checked = false;

    document
      .querySelectorAll('input[name="outfitLocations"]')
      .forEach((loc) => (loc.checked = false));

    outfitTagsContainer.innerHTML = "";
    outfitColorsContainer.innerHTML = "";
    outfitEmphasisContainer.innerHTML = "";
    outfitRevealsContainer.innerHTML = "";

    updateOutfitFields();

    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  // Showing/Hiding One-Piece or Top + Bottom Fields
  function updateOutfitFields() {

    onePieceField.style.display = "none";
    twoPieceFields.style.display = "none";

    if (onePieceRadio.checked) {
      onePieceField.style.display = "block";
      twoPieceFields.style.display = "none";

      outfitOnePiece.disabled = false;
      outfitTop.disabled = true;
      outfitBottom.disabled = true;

      outfitTop.value = "";
      outfitBottom.value = "";
    } else if (twoPieceRadio.checked) {
      onePieceField.style.display = "none";
      twoPieceFields.style.display = "block";

      outfitOnePiece.disabled = true;
      outfitTop.disabled = false;
      outfitBottom.disabled = false;

      outfitOnePiece.value = "";
    }
  };

  // Add Colors tags
  function addOutfitColors() {
    const tagText = outfitColorsInput.value.trim();

    if (tagText) {
      // Check if the tag already exists
      const existingTags = Array.from(
        outfitColorsContainer.getElementsByClassName("tag")
      );
      let tagExists = existingTags.some(
        (tag) => tag.textContent.replace("x", "").trim() === tagText
      );

      if (!tagExists) {
        // Create a new option in the datalist if it doesn't already exist
        let optionExists = Array.from(outfitColors.options).some(
          (option) => option.value === tagText
        );
        if (!optionExists) {
          const newOption = document.createElement("option");
          newOption.value = tagText;
          outfitColors.appendChild(newOption);
        }

        // Add the tag to the container
        const tagSpan = document.createElement("span");
        tagSpan.textContent = tagText;
        tagSpan.className = "tag";

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "x";
        removeBtn.className = "remove-tag";
        tagSpan.appendChild(removeBtn);
        outfitColorsContainer.appendChild(tagSpan);

        // Clear the input
        outfitColorsInput.value = "";

        // Handle tag removal
        removeBtn.addEventListener("click", function () {
          tagSpan.remove();
        });
      }
    }
  };

  // Add Emphasis tags
  function addOutfitEmphasis() {
    const tagText = outfitEmphasisInput.value.trim();

    if (tagText) {
      // Check if the tag already exists
      const existingTags = Array.from(
        outfitEmphasisContainer.getElementsByClassName("tag")
      );
      let tagExists = existingTags.some(
        (tag) => tag.textContent.replace("x", "").trim() === tagText
      );

      if (!tagExists) {
        // Create a new option in the datalist if it doesn't already exist
        let optionExists = Array.from(outfitEmphasis.options).some(
          (option) => option.value === tagText
        );
        if (!optionExists) {
          const newOption = document.createElement("option");
          newOption.value = tagText;
          outfitEmphasis.appendChild(newOption);
        }

        // Add the tag to the container
        const tagSpan = document.createElement("span");
        tagSpan.textContent = tagText;
        tagSpan.className = "tag";

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "x";
        removeBtn.className = "remove-tag";
        tagSpan.appendChild(removeBtn);
        outfitEmphasisContainer.appendChild(tagSpan);

        // Clear the input
        outfitEmphasisInput.value = "";

        // Handle tag removal
        removeBtn.addEventListener("click", function () {
          tagSpan.remove();
        });
      }
    }
  };

  // Add Reveals tags
  function addOutfitReveals() {
    const tagText = outfitRevealsInput.value.trim();

    if (tagText) {
      // Check if the tag already exists
      const existingTags = Array.from(
        outfitRevealsContainer.getElementsByClassName("tag")
      );
      let tagExists = existingTags.some(
        (tag) => tag.textContent.replace("x", "").trim() === tagText
      );

      if (!tagExists) {
        // Create a new option in the datalist if it doesn't already exist
        let optionExists = Array.from(outfitReveals.options).some(
          (option) => option.value === tagText
        );
        if (!optionExists) {
          const newOption = document.createElement("option");
          newOption.value = tagText;
          outfitReveals.appendChild(newOption);
        }

        // Add the tag to the container
        const tagSpan = document.createElement("span");
        tagSpan.textContent = tagText;
        tagSpan.className = "tag";

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "x";
        removeBtn.className = "remove-tag";
        tagSpan.appendChild(removeBtn);
        outfitRevealsContainer.appendChild(tagSpan);

        // Clear the input
        outfitRevealsInput.value = "";

        // Handle tag removal
        removeBtn.addEventListener("click", function () {
          tagSpan.remove();
        });
      }
    }
  };

  // Add Outfit tags
  function addOutfitTags() {
    const tagText = outfitTagsInput.value.trim();

    if (tagText) {
      // Check if the tag already exists
      const existingTags = Array.from(
        outfitTagsContainer.getElementsByClassName("tag")
      );
      let tagExists = existingTags.some(
        (tag) => tag.textContent.replace("x", "").trim() === tagText
      );

      if (!tagExists) {
        // Create a new option in the datalist if it doesn't already exist
        let optionExists = Array.from(outfitTags.options).some(
          (option) => option.value === tagText
        );
        if (!optionExists) {
          const newOption = document.createElement("option");
          newOption.value = tagText;
          outfitTags.appendChild(newOption);
        }

        // Add the tag to the container
        const tagSpan = document.createElement("span");
        tagSpan.textContent = tagText;
        tagSpan.className = "tag";

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "x";
        removeBtn.className = "remove-tag";
        tagSpan.appendChild(removeBtn);
        outfitTagsContainer.appendChild(tagSpan);

        // Clear the input
        outfitTagsInput.value = "";

        // Handle tag removal
        removeBtn.addEventListener("click", function () {
          tagSpan.remove();
        });
      }
    }
  };

  // Add outfit to the list
  function addOutfit() {
    // Extracting form values
    const characterName = outfitCharacterName.value.toLowerCase();
    const category = outfitCategory.value;
    const name = outfitName.value;
    const flavor = outfitFlavor.value;
    const description = outfitDescription.value;
    const price = outfitPrice.value;
    const type = outfitType.value;
    const sluttiness = outfitSluttiness.value;
    const comfort = outfitComfort.value;
    const durability = outfitDurability.value;
    const style = outfitStyle.value;
    const tags = Array.from(outfitTagsContainer.querySelectorAll(".tag")).map((tag) =>
        tag.textContent.replace("x", "").trim());
    const colors = Array.from(outfitColorsContainer.querySelectorAll(".tag")).map((tag) =>
        tag.textContent.replace("x", "").trim());
    const emphasizes = Array.from(outfitEmphasisContainer.querySelectorAll(".tag")).map((tag) =>
        tag.textContent.replace("x", "").trim());
    const reveals = Array.from(outfitRevealsContainer.querySelectorAll(".tag")).map((tag) =>
        tag.textContent.replace("x", "").trim());
    const braUnder = outfitBraTrue.checked ? "true" : "false";
    const pantiesUnder = outfitPantiesTrue.checked ? "true" : "false";
    const breastSupport = outfitBreastSupport.value;
    const locations = Array.from(
        document.querySelectorAll('input[name="outfitLocations"]:checked')
      ).map((loc) => loc.value);
    const onepiece = outfitOnePiece.value;
    const top = outfitTop.value;
    const bottom = outfitBottom.value;
    const shoes = outfitShoes.value;
    const descType = document.querySelector('input[name="outfitDescType"]:checked').value;
    let selectedOutfitItem = null;

    // Validation: Ensure fields are filled out
    if (
      !characterName ||
      !name ||
      !flavor ||
      !type ||
      !category ||
      !description ||
      !price ||
      !sluttiness ||
      !comfort ||
      !durability ||
      !style ||
      !breastSupport ||
      !descType ||
      locations.length === 0
    ) {
      alert("All fields above Underwear must be filled out.");
      return;
    }

    const newOutfit = {
      characterName,
      category,
      name,
      flavor,
      description,
      price,
      type,
      sluttiness,
      comfort,
      durability,
      style,
      tags,
      colors,
      emphasizes,
      reveals,
      braUnder,
      pantiesUnder,
      breastSupport,
      descType,
      onepiece,
      top,
      bottom,
      shoes,
      locations,
    };

    if (addOutfitButton.dataset.editing === "true") {
      // Update the existing outfit
      const selectedOutfit = outfitsList.querySelector("li.selected");
      selectedOutfit.dataset.outfit = JSON.stringify(newOutfit);
      selectedOutfit.textContent = `${category} - ${name}`;
      delete addOutfitButton.dataset.editing;
      addOutfitButton.textContent = "Add Outfit";

      // Deselect the outfit after saving
      selectedOutfit.classList.remove("selected");
      selectedOutfitItem = null;
    } else {
      // Check for duplicate outfits
      const existingOutfits = Array.from(
        document.getElementById("outfitsList").children
      );
      let outfitExists = false;
      existingOutfits.forEach((out) => {
        const outData = JSON.parse(out.dataset.outfit);
        if (
          outData.category === newOutfit.category &&
          outData.name === newOutfit.name
        ) {
          outfitExists = true;
        }
      });

      if (outfitExists) {
        alert("This outfit already exists in the list.");
        return;
      }

      // Add the new outfit
      const outfitItem = document.createElement("li");
      outfitItem.textContent = `${category} - ${name}`;
      outfitItem.dataset.outfit = JSON.stringify(newOutfit);

      outfitItem.addEventListener("click", function () {
        if (outfitItem.classList.contains("selected")) {
          outfitItem.classList.remove("selected");
          resetOutfitForm();
        } else {
          addOutfitButton.textContent = "Save Outfit"; // Change button text
          addOutfitButton.dataset.editing = "true"; // Mark as editing
          outfitsList
            .querySelectorAll("li")
            .forEach((item) => item.classList.remove("selected"));
            outfitItem.classList.add("selected");

            // Update the form fields with the selected outfit's data
            const out = JSON.parse(outfitItem.dataset.outfit);
            outfitCharacterName.value = out.characterName;
            outfitCategory.value = out.category;
            outfitName.value = out.name;
            outfitFlavor.value = out.flavor;
            outfitDescription.value = out.description;
            outfitPrice.value = out.price;
            outfitType.value = out.type;
            outfitSluttiness.value = out.sluttiness;
            outfitComfort.value = out.comfort;
            outfitDurability.value = out.durability;
            outfitStyle.value = out.style;
            outfitBraTrue.checked = out.braUnder === "true";
            outfitPantiesTrue.checked = out.pantiesUnder === "true";
            outfitBreastSupport.value = out.breastSupport;
            document.querySelector(`input[name="outfitDescType"][value="${out.descType}"]`).checked = true;
            outfitOnePiece.value = out.onepiece;
            outfitTop.value = out.top;
            outfitBottom.value = out.bottom;
            outfitShoes.value = out.shoes;
            document.querySelectorAll('input[name="outfitLocations"]')
            .forEach((loc) => {
              loc.checked = out.locations.includes(loc.value);
            });

            updateOutfitFields()

            // Update form arrays with selected outfit data
            outfitTagsContainer.innerHTML = "";
            outfitColorsContainer.innerHTML = "";
            outfitEmphasisContainer.innerHTML = "";
            outfitRevealsContainer.innerHTML = "";

            out.tags.forEach((tag) => {
              const tagSpan = document.createElement("span");
              tagSpan.textContent = tag;
              tagSpan.className = "tag";
  
              const removeBtn = document.createElement("button");
              removeBtn.textContent = "x";
              removeBtn.className = "remove-tag";
              tagSpan.appendChild(removeBtn);
              outfitTagsContainer.appendChild(tagSpan);
  
              removeBtn.addEventListener("click", function () {
                tagSpan.remove();
              });
            });

            out.colors.forEach((tag) => {
              const tagSpan = document.createElement("span");
              tagSpan.textContent = tag;
              tagSpan.className = "tag";
  
              const removeBtn = document.createElement("button");
              removeBtn.textContent = "x";
              removeBtn.className = "remove-tag";
              tagSpan.appendChild(removeBtn);
              outfitColorsContainer.appendChild(tagSpan);
  
              removeBtn.addEventListener("click", function () {
                tagSpan.remove();
              });
            });

            out.emphasizes.forEach((tag) => {
              const tagSpan = document.createElement("span");
              tagSpan.textContent = tag;
              tagSpan.className = "tag";
  
              const removeBtn = document.createElement("button");
              removeBtn.textContent = "x";
              removeBtn.className = "remove-tag";
              tagSpan.appendChild(removeBtn);
              outfitEmphasisContainer.appendChild(tagSpan);
  
              removeBtn.addEventListener("click", function () {
                tagSpan.remove();
              });
            });

            out.reveals.forEach((tag) => {
              const tagSpan = document.createElement("span");
              tagSpan.textContent = tag;
              tagSpan.className = "tag";
  
              const removeBtn = document.createElement("button");
              removeBtn.textContent = "x";
              removeBtn.className = "remove-tag";
              tagSpan.appendChild(removeBtn);
              outfitRevealsContainer.appendChild(tagSpan);
  
              removeBtn.addEventListener("click", function () {
                tagSpan.remove();
              });
            });

            // Update slider displayed numbers
          updateSliderValues();

          // Store the currently selected outfit
          selectedOutfitItem = outfitItem;
        }
      });

      // Remove Outfit
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "x";
      removeBtn.className = "remove-outfit";
      outfitItem.appendChild(removeBtn);

      removeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        outfitItem.remove();
        addOutfitButton.textContent = "Add Outfit"; // Reset button text
        delete addOutfitButton.dataset.editing;
        resetOutfitForm(); // Clear the form after removal
      });

      document.getElementById("outfitsList").appendChild(outfitItem);
    }
    resetOutfitForm(); // Reset the form fields after adding or saving
  };

  // Generate Outfits File
  function generateOutfitsFile() {
    const outfits = Array.from(
      document.getElementById("outfitsList").children
    ).map((out) => JSON.parse(out.dataset.outfit));

    if (outfits.length === 0) {
      alert("No outfits to generate.");
      return;
    }

    // Object to store category counts
    const categoryCounts = {};
    
    // Populate categoryCounts with the number of outfits per category
    outfits.forEach((outfit) => {
      const category = outfit.category;
      if (categoryCounts[category]) {
        categoryCounts[category] += 1;
      } else {
        categoryCounts[category] = 1;
      }
    });

    // Create the init_character line
    let initLine = `init_character("${outfits[0].characterName}", {\n`;

    Object.keys(categoryCounts).forEach((category, index, array) => {
      initLine += `  "${category}": ${categoryCounts[category]}`;
      if (index < array.length - 1) {
        initLine += ",";
      }
      initLine += "\n";
    });

    initLine += `});\n`;

    let jsContent = initLine;

    // Generate the outfits JavaScript content
    outfits.forEach((outfit) => {
      jsContent += `outfits("${outfit.characterName}", "${outfit.category}", {\n`;
      jsContent += `  "name": "${outfit.name}",\n`;
      jsContent += `  "flavor": "${outfit.flavor}",\n`;
      jsContent += `  "description": "${outfit.description}",\n`;
      jsContent += `  "price": ${outfit.price},\n`;
      jsContent += `  "type": "${outfit.type}",\n`;
      jsContent += `  "sluttiness": ${outfit.sluttiness},\n`;
      jsContent += `  "comfort": ${outfit.comfort},\n`;
      jsContent += `  "durability": ${outfit.durability},\n`;
      jsContent += `  "style": "${outfit.style}",\n`;
      jsContent += `  "breast support": ${outfit.breastSupport},\n`;
      jsContent += `  "bra under": ${outfit.braUnder},\n`;
      jsContent += `  "panties under": ${outfit.pantiesUnder},\n`;
      jsContent += `  "shoes": "${outfit.shoes}",\n`;

      // Conditional logic based on descType
      if (outfit.descType === "onePiece") {
        jsContent += `  "onepiece": "${outfit.onepiece}",\n`;
      } else if (outfit.descType === "twoPiece") {
        jsContent += `  "top": "${outfit.top}",\n`;
        jsContent += `  "bottom": "${outfit.bottom}",\n`;
      }

      jsContent += `  "locations": [${(function() {
        // If locations are not provided or empty, default to outfit.category
        let locations = outfit.locations && outfit.locations.length > 0 ? outfit.locations : [outfit.category];
    
        // Ensure outfit.category is in the locations list without duplication
        if (!locations.includes(outfit.category)) {
          locations.push(outfit.category);
        }
    
        // Return the formatted locations array
        return locations.map((loc) => `"${loc}"`).join(", ");
      })()}],\n`;
    

      jsContent += `  "tags": [${(outfit.tags || [])
        .map((tag) => `"${tag}"`)
        .join(", ")}],\n`;

      jsContent += `  "colors": [${(outfit.colors || [])
        .map((color) => `"${color}"`)
        .join(", ")}],\n`;

      jsContent += `  "emphasizes": [${(outfit.emphasizes || [])
        .map((emphasize) => `"${emphasize}"`)
        .join(", ")}],\n`;

      jsContent += `  "reveals": [${(outfit.reveals || [])
        .map((reveal) => `"${reveal}"`)
        .join(", ")}],\n`;

      jsContent += `});\n\n`;
    });

    // Create a blob and a download link
    const blob = new Blob([jsContent], {
      type: "text/javascript",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${outfits[0].characterName}_outfits.js`;

    // Append link to the document and click it programmatically
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  // #endregion --- Functions - Outfits

  // #region --- Functions - Blacked

  // Generate Blacked Zip
  function generateBlackedZip(){
    const characterName = document.getElementById('blkCharacterName').value;

    blkzip.generateAsync({ type: "blob" }).then(function (content) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = `BLACKED_${characterName}.zip`; // Name of the ZIP file
      link.click();
    });
  }

  // Generate BLACKED directories to blkzip
  function gatherBlackedDirectories(){
    if (!blkzip) {
      blkzip = new JSZip();
    } 

    // Collect input values from the form
    const characterName = document.getElementById('blkCharacterName').value;

    if (!characterName) {
      console.error("Character Name is required."); // Log an error to the console
      alert("Please enter a character name."); // Alert the user
      return; // Stop further execution if character name is missing
    }
    
    // Add directories to the ZIP
    blkzip.folder(`metas`)
    blkzip.folder(`img/characters/bj/bbc`)
    blkzip.folder(`img/characters/sex/doggy/bbc`)
    blkzip.folder(`img/characters/sex/doggy/moan/bbc`)
    blkzip.folder(`img/characters/sex/insert/bbc`)
    blkzip.folder(`img/characters/sex/missionary/moan/bbc`)
    blkzip.folder(`img/scenes/characters/${characterName}/bj/bbc`)
    blkzip.folder(`img/scenes/characters/${characterName}/cum/bbc`)
    blkzip.folder(`img/scenes/characters/${characterName}/cum/bbc/creampie`)
    blkzip.folder(`img/scenes/characters/${characterName}/foreplay/bbc`)
    blkzip.folder(`img/scenes/characters/${characterName}/oral/bbc`)
    blkzip.folder(`img/scenes/characters/${characterName}/sex/doggy/bbc`)
    blkzip.folder(`img/scenes/characters/${characterName}/sex/active/cowgirl`)
    blkzip.folder(`img/scenes/characters/${characterName}/sex/active/doggy`)
    blkzip.folder(`img/scenes/characters/${characterName}/sex/active/missionary`)
    blkzip.folder(`img/scenes/characters/${characterName}/sex/active/service`)
    blkzip.folder(`img/scenes/characters/${characterName}/sex/passive/cowgirl`)
    blkzip.folder(`img/scenes/characters/${characterName}/sex/passive/doggy`)
    blkzip.folder(`img/scenes/characters/${characterName}/sex/passive/missionary`)
    blkzip.folder(`img/scenes/characters/${characterName}/sex/passive/service`)
  }

  // Generate BLACKED Files
  function generateBlackedFiles(){
    if (!blkzip) {
      gatherBlackedDirectories();
    } 

    // Collect meta input values from the form
    const version = blkYourModBLKVersion.value;
    const author = blkModAuthor.value;
    const baseGameVersion = blkBaseGameVersion.value;
    const MCFVersion = blkMCFVersion.value;
    const BLKVersion = blkModVersion.value;
    const MCFModName = blkYourModName.value;
    const MCFModVersion = blkYourModVersion.value;

    if (!version || !author || !baseGameVersion || !MCFVersion || !BLKVersion || !MCFModName || !MCFModVersion) {
      alert("All meta fields are required. Please fill out the fields.");
      return; // Stop execution if any field is empty
    }

    // Create the meta content string
    let metaContent = `metaVersion: 1\n`;
    metaContent += `name: "${MCFModName} - BLACKED"\n`;
    metaContent += `version: "${version}"\n`;
    metaContent += `author: "${author}"\n`;
    metaContent += `baseGameVersion:\n  atLeast: "${baseGameVersion}"\n`;
    metaContent += `requiredMods:\n`;
    metaContent += `   - name: "MultipleCharacters"\n    version:\n      atLeast: "${MCFVersion}"\n`;
    metaContent += `   - name: "${MCFModName}"\n    version:\n      atLeast: "${MCFModVersion}"\n`;
    metaContent += `   - name: "BLACKED"\n    version:\n      atLeast: "${BLKVersion}"\n`;
    
    // Collect remaining input values
    const characterName = document.getElementById('blkCharacterName').value;

    if (!characterName) {
      console.error("Character Name is required.");
      alert("Please enter a character name.");
      return;
    }

    // twee building
    let tweeContent = `:: blacked compatibility [around]\n{(display:_around)\n(set:$blacked_compatible_list to it + (dm:"${characterName}",1))}\n\n`;
    
    // Transactional Doggy
    const containerTransDoggy = document.getElementById('containerTransDoggy');
    const vidsTransDoggy = parseInt(document.getElementById('blkDoggyTransVid').value);
    const imgTransDoggy = parseInt(document.getElementById('blkDoggyTransInsImg').value);
    const imgTransDoggyMoan = parseInt(document.getElementById('blkDoggyTransMoanImg').value);
    const tagsTransDoggy = [];
    const rhythmTransDoggy = [];

    if (!vidsTransDoggy || !imgTransDoggy || !imgTransDoggyMoan) {
      console.error("Transactional Doggy fields are required."); 
      alert("Transactional Doggy fields are required.");
      return;
    }

    // Collect tag data from each video
    for (let i = 1; i <= vidsTransDoggy; i++) {
      // Collect tags from dropdowns
      const tagLocationTransDoggy = containerTransDoggy.querySelector(`#location_tag_${i}`)?.value || '';
      const additionalTagsTransDoggyElements = [
        containerTransDoggy.querySelector(`#tag_${i}_1`),
        containerTransDoggy.querySelector(`#tag_${i}_2`),
        containerTransDoggy.querySelector(`#tag_${i}_3`)
    ];
      // Extract and filter tags
      const additionalTagsTransDoggy = additionalTagsTransDoggyElements
      .map(tag => tag ? tag.value.trim() : '')  // Get values and trim whitespace
      .filter(tag => tag); // Filter out empty values

      // Combine location tag with additional tags
      const tagArrayTransDoggy = [tagLocationTransDoggy, ...additionalTagsTransDoggy].filter(tag => tag); // Filter out empty strings

      // Format tags for Twee
      tagsTransDoggy.push(`"${characterName}/sex/doggy/bbc/transactional ${i}", (a:"${tagArrayTransDoggy.join('","')}")`);
      rhythmTransDoggy.push(`"${characterName}/sex/doggy/bbc/transactional ${i}",500`);
    }

    // Add to twee
    tweeContent += `:: sex doggy transactional ${characterName} [around]\n`;
    tweeContent += `{(if:(dm-names:$npc) contains "race")[(if:($npc's "race" is "black"))[\n`;
    tweeContent += `(set:$img to "${characterName}/sex/doggy/bbc/transactional " + (text:(twist:1,${vidsTransDoggy}))) \n`;
    tweeContent += `(set:$doggy_pic to "<img class='greyborder' src='img/scenes/characters/${characterName}/sex/doggy/bbc/transactional insert " + (text:(twist:1,${imgTransDoggy})) + ".jpg' width=100% height=auto>") \n`;
    tweeContent += `(set:$doggy_moan_pic to "<img class='greyborder' src='img/scenes/characters/${characterName}/sex/doggy/bbc/moan " + (text:(twist:1,${imgTransDoggyMoan})) + ".jpg' width=100% height=auto>")\n`;
    tweeContent += `(set:$doggy_rhythm to $img of (dm:${rhythmTransDoggy.join(',')}))\n`;
    tweeContent += `(set:$text to $img of (dm:${tagsTransDoggy.join(',')}))\n`;
    tweeContent += `](else:)[(display:_around)]](else:)[(display:_around)]}\n\n`

    // Add directories to the ZIP
    blkzip.folder("metas").file(`${characterName}.meta`, metaContent);
    blkzip.file(`${characterName}.twee`, tweeContent);
    
    generateBlackedZip();
  }

  // Generate BLACKED Directories AND Files
  function generateBlackedFolders() {
    gatherBlackedDirectories();
    generateBlackedZip();
  }

  // Build tag fields for BLACKED - Transactional Doggy
  function generateBLKTransDoggyFields() {
    const container = document.getElementById('containerBLKTransDoggy');
    container.innerHTML = ''; // Clear any existing fields

    const numVideos = parseInt(document.getElementById('blkDoggyTransVid').value) || 0;

    // Define the location options for the first tag
    const locationOptions = ["bed", "couch", "desk", "floor", "wall", "standing"];

    // Define the additional tag options
    const tagOptions = [
      "grab neck", "grab arms", "grab shoulders", "grab boobs", "grab face",
      "grab head", "grab butt", "grab waist", "pull hair", "mount", "stabilize",
      "spank", "lean against you", "cover mouth", "look back", "leg up", "tits clap",
      "push down", "standing", "tits rub", "big thrusts", "eyes roll", "nelson",
      "balls smacking"
    ];

    for (let i = 1; i <= numVideos; i++) {
      const tagField = document.createElement('div');
      tagField.className = 'form-single-line';
      
      // Create label for tags
      const label = document.createElement('label');
      label.for = `tags_${i}`;
      label.textContent = `Tags for Video ${i}:`;

      // Create a dropdown for the first tag (location)
      const dropdownLocation = document.createElement('select');
      dropdownLocation.id = `location_tag_${i}`;
      
      locationOptions.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        dropdownLocation.appendChild(optionElement);
      });

      tagField.appendChild(label);
      tagField.appendChild(dropdownLocation);

      // Create additional dropdowns for each tag in tagOptions
      for (let j = 1; j <= 3; j++) { // Adjust this to the number of additional tags you want
        const dropdownTag = document.createElement('select');
        dropdownTag.id = `tag_${i}_${j}`; // Unique ID for each tag dropdown
        
        const emptyOption = document.createElement('option');
        emptyOption.value = '';
        emptyOption.textContent = 'Select a tag';
        dropdownTag.appendChild(emptyOption);

        tagOptions.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option;
          optionElement.textContent = option;
          dropdownTag.appendChild(optionElement);
        });

        tagField.appendChild(dropdownTag);
      }

      container.appendChild(tagField);
    }
  };
  // #endregion --- Functions - Blacked

  // #region --- Functions - Bar Girl
  // #endregion --- Functions - Bar Girl

  // #region --- Functions - MetaMaker
  // Generate Meta File
  function generateMetaFile() {
    // Collect input values from the form
    const name = metaName.value;
    const version = metaVersion.value;
    const author = metaAuthor.value;
    const baseGameVersion = metaGameVersion.value;

    // Required Mods
    const requiredMods = Array.from(metaRequiredMods.children).map(mod => JSON.parse(mod.dataset.mod));

    // Incompatible Mods
    const incompatibleMods = Array.from(metaIncompatibleMods.children).map(mod => JSON.parse(mod.dataset.mod));

    // Compatible Mods
    const compatibleMods = Array.from(metaCompatibleMods.children).map(mod => JSON.parse(mod.dataset.mod));

    // Create the content string
    let metaContent = `metaVersion: 1\n`;
    metaContent += `name: "${name}"\n`;
    metaContent += `version: "${version}"\n`;
    metaContent += `author: "${author}"\n`;
    metaContent += `baseGameVersion:\n  atLeast: "${baseGameVersion}"\n`;

    // Append Required Mods
    if (requiredMods.length > 0) {
        metaContent += `requiredMods:\n`;
        requiredMods.forEach(mod => {
            metaContent += `  - name: "${mod.name}"\n`;
            metaContent += `    version:\n      atLeast: "${mod.version}"\n`;
        });
    }

    // Append Incompatible Mods
    if (incompatibleMods.length > 0) {
      metaContent += `incompatibleMods:\n`;
      incompatibleMods.forEach(mod => {
          metaContent += `  - name: "${mod.name}"\n`;
          metaContent += `    version:\n      atMost: "${mod.version}"\n`;
      });
    }

    // Append Compatible Mods
    if (compatibleMods.length > 0) {
        metaContent += `compatibleMods:\n`;
        compatibleMods.forEach(mod => {
            metaContent += `  - name: "${mod.name}"\n`;
            metaContent += `    version:\n      atLeast: "${mod.version}"\n`;
            metaContent += `    loadMyMod: "${mod.loadOrder}"\n`;
        });
    }

    // Create the metas directory and add the .meta file
    const zip = new JSZip();
    zip.folder("metas").file(`${name}.meta`, metaContent);

    // Generate the ZIP file and trigger the download
    zip.generateAsync({ type: "blob" }).then(function (content) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = `${name}_meta.zip`; // Name of the ZIP file
      link.click();
    });
  }
  // #endregion --- Functions - MetaMaker

  // #endregion ----- Functions Section -----


  // #region ----- Event Listeners -----

  // #region --- Listeners - General
  // #endregion --- Listeners - General

  // #region --- Listeners - MCF
  // #endregion --- Listeners - MCF

  // #region --- Listeners - Positions

  // Generate Positions File
  generatePositionsFileButton.addEventListener("click", generatePositionsFile);

  // Add validation for the rhythm field
  positionRhythmInput.addEventListener("input", function () {
    const value = parseInt(positionRhythmInput.value, 10);
    if (isNaN(value) || value < 400 || value > 1400) {
      positionRhythmInput.setCustomValidity("Rhythm must be between 400 and 1400.");
    } else {
      positionRhythmInput.setCustomValidity("");
    }
    positionRhythmInput.reportValidity(); // This will trigger the validity check and show the error message if invalid
  });

  // Manually add position tag to container
  addPositionTagButton.addEventListener("click", function() {
    addPositionTag(positionTagsInput.value);
  });

  // Adds position tag if clicked from list or typed (and matches)
  positionTagsInput.addEventListener('input', function() {
    const inputValue = positionTagsInput.value.trim();
    const options = Array.from(positionTagsList.options);
    const matchingOption = options.find(option => option.value === inputValue);

    // If the input matches an option from the datalist, automatically add the tag
    if (matchingOption) {
        addPositionTag(inputValue); // Call the existing function to add the tag
    }
  });

  // Clicking add position button
  addPositionButton.addEventListener("click", function () {
    if (validatePositionForm()) {
      addPosition();
    }
  });

  // Listen for position type changes
  positionTypeRadios.forEach((radio) => {
    radio.addEventListener("change", updateSkillDropdown);
  });

  // Listen for position subtype changes
  positionSubtypeRadios.forEach((radio) => {
    radio.addEventListener("change", updatePositions);
  });

  // Populate skill (and other) values when position changes
  positionDropdown.addEventListener('change', setDefaultsByPosition);

  // Adds listeners for position list handling
  document.querySelectorAll('#positionsList li').forEach((positionItem) => {
    positionItem.addEventListener("click", () => handlePositionClick(positionItem));
    positionItem.querySelector('.remove-position')?.addEventListener("click", (e) => {
        e.stopPropagation();
        handlePositionRemove(positionItem);
    });
  });

  // Import existing position file
  document.getElementById('importPositionsButton').addEventListener('click', function () {
    const fileInput = document.getElementById('importPositions');
    const file = fileInput.files[0];
    if (!file) {
        alert('No file selected.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const fileContent = event.target.result;

        try {
            parsePositionsFromJS(fileContent);
        } catch (error) {
            console.error("Error parsing positions: ", error);
            alert("Error parsing positions.");
        }
    };

    reader.readAsText(file);
  });

  // Attach a MutationObserver to the positionsList
  const positionObserver = new MutationObserver(() => {
    updatePositionStats(); // Update stats whenever the list is changed
  });

  // Configure the observer to watch for changes in child elements
  positionObserver.observe(positionsList, { childList: true });
  // #endregion --- Listeners - Positions

  // #region --- Listeners - Outfits

  // Show/Hide One Piece or Top + Bottom fields, based on radio
  onePieceRadio.addEventListener("change", updateOutfitFields);
  twoPieceRadio.addEventListener("change", updateOutfitFields);

  // Click for Adding Outfit
  addOutfitButton.addEventListener("click", addOutfit);

  // Click for Adding Outfit Color
  addColorButton.addEventListener("click", addOutfitColors);

  // Click for Adding Outfit Emphasis
  addEmphasisButton.addEventListener("click", addOutfitEmphasis);

  // Click for Adding Outfit Reveals
  addRevealsButton.addEventListener("click", addOutfitReveals);

  // Click for Adding Outfit Tags
  addOutfitTagsButton.addEventListener("click", addOutfitTags);
  // #endregion --- Listeners - Outfits

  // #region --- Listeners - Blacked

  // Build tag fields for BLACKED - Transactional Doggy
  document.getElementById('blkDoggyTransVid').addEventListener('input', generateBLKTransDoggyFields);
  // #endregion --- Listeners - Blacked

  // #region --- Listeners - Bar Girl
  // #endregion --- Listeners - Bar Girl

  // #region --- Listeners - MetaMaker

  // Adding Required Mods
  document.getElementById('addRequiredMod').addEventListener('click', function() {
    const modName = document.getElementById('requiredModName').value.trim();
    const modVersion = document.getElementById('requiredModVersion').value.trim();

    if (modName && modVersion) {
        const modContainer = document.getElementById('requiredModsContainer');
        const modItem = document.createElement('li');
        modItem.textContent = `${modName} - v ${modVersion}`;
        modItem.dataset.mod = JSON.stringify({ name: modName, version: modVersion });

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'x';
        removeBtn.className = 'remove-tag';
        modItem.appendChild(removeBtn);

        modContainer.appendChild(modItem);

        removeBtn.addEventListener('click', function() {
            modItem.remove();
        });

        // Clear input fields
        document.getElementById('requiredModName').value = '';
        document.getElementById('requiredModVersion').value = '';
      } else {
          alert("Please enter both mod name and version.");
      }
  });

  // Adding Compatible Mods
  document.getElementById('addCompatibleMod').addEventListener('click', function() {
      const modName = document.getElementById('compatibleModName').value.trim();
      const modVersion = document.getElementById('compatibleModVersion').value.trim();
      const modOrder = document.getElementById('compatibleModOrder').value.trim();

      if (modName && modVersion && modOrder) {
          const modContainer = document.getElementById('compatibleModsContainer');
          const modItem = document.createElement('li');
          modItem.textContent = `${modName} - v ${modVersion} (${modOrder})`;
          modItem.dataset.mod = JSON.stringify({ name: modName, version: modVersion, loadOrder: modOrder });

          const removeBtn = document.createElement('button');
          removeBtn.textContent = 'x';
          removeBtn.className = 'remove-tag';
          modItem.appendChild(removeBtn);

          modContainer.appendChild(modItem);

          removeBtn.addEventListener('click', function() {
              modItem.remove();
          });

          // Clear input fields
          document.getElementById('compatibleModName').value = '';
          document.getElementById('compatibleModVersion').value = '';
          document.getElementById('compatibleModOrder').value = '';
      } else {
          alert("Please enter mod name, version, and load order.");
      }
  });

  // Adding Incompatible Mods
  document.getElementById('addIncompatibleMod').addEventListener('click', function() {
      const modName = document.getElementById('incompatibleModName').value.trim();
      const modVersion = document.getElementById('incompatibleModVersion').value.trim();

      if (modName && modVersion) {
          const modContainer = document.getElementById('incompatibleModsContainer');
          const modItem = document.createElement('li');
          modItem.textContent = `${modName} - v ${modVersion}`;
          modItem.dataset.mod = JSON.stringify({ name: modName, version: modVersion });

          const removeBtn = document.createElement('button');
          removeBtn.textContent = 'x';
          removeBtn.className = 'remove-tag';
          modItem.appendChild(removeBtn);

          modContainer.appendChild(modItem);

          removeBtn.addEventListener('click', function() {
              modItem.remove();
          });

          // Clear input fields
          document.getElementById('incompatibleModName').value = '';
          document.getElementById('incompatibleModVersion').value = '';
      } else {
          alert("Please enter both mod name and version.");
      }
  });
  // #endregion --- Listeners - MetaMaker

  // #endregion ----- Event Listeners -----


  // #region ----- Initialization -----

  // Set Default Tab to MCF
  document.getElementById("MCF-Tab").style.display = "block";
  document.querySelector(".tablinks").classList.add("active");

  // Fetch Version numbers from Lovers Lab
  getVersionNumbers()

  // Set up slider input boxes next to all sliders
  sliders.forEach((slider) => {
    const inputBox = document.createElement("input");
    inputBox.type = "number";
    inputBox.value = slider.value;
    inputBox.className = "slider-input";
    inputBox.min = slider.min;
    inputBox.max = slider.max;
    slider.parentNode.insertBefore(inputBox, slider.nextSibling);

    // Update the text box when the slider is moved
    slider.addEventListener("input", function () {
      inputBox.value = this.value;
    });

    // Update the slider when the text box value is changed
    inputBox.addEventListener("input", function () {
      let value = parseInt(this.value, 10);

      // Ensure the value is within the slider's min/max range
      if (value < parseInt(slider.min)) value = slider.min;
      if (value > parseInt(slider.max)) value = slider.max;

      slider.value = this.value;
    });
  });

  // Set up Position Dropdown
  updatePositions();

  // Call updatePositionStats() initially to populate the stats on load
  updatePositionStats();

  // Set up outfit fields
  updateOutfitFields();

  // #endregion ----- Initialization -----
}); // DOM End Line


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
};
