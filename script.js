document.addEventListener("DOMContentLoaded", function () {

  // #region ----- Variables -----

  // #region --- Vars - General
  const sliders = document.querySelectorAll('input[type="range"]'); // Refers to all Sliders
  const tabcontent = document.getElementsByClassName("tabcontent");
  const tablinks = document.getElementsByClassName("tablinks");

  // #endregion --- Vars - General

  // #region --- Vars - MCF ---
  const mcfBaseGameVersion = document.getElementById("mcfBaseGameVersion");
  const mcfMCFVersion = document.getElementById("mcfMCFVersion");
  const mcfYourModVersion = document.getElementById("mcfYourModVersion");
  const mcfModAuthor = document.getElementById("mcfModAuthor");
  const generateMCFDirectoriesButton = document.getElementById("generateMCFDirectoriesButton"); 
  const mcfCharacterName = document.getElementById("mcfCharacterName");

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
  const outfitsList = document.getElementById("outfitsList");
  const addOutfitButton = document.getElementById("addOutfit");
  const generateOutfitsFileButton = document.getElementById("generateOutfitsFileButton");


  // Div for hiding or showing fields based on radio check
  const onePieceField = document.getElementById("onePieceField"); 
  const twoPieceFields = document.getElementById("twoPieceFields");
  const onePieceRadio = document.getElementById("onePieceRadio");
  const twoPieceRadio = document.getElementById("twoPieceRadio");

  // Tags section
  const addOutfitTagsButton = document.getElementById("addOutfitTagsButton");
  const outfitTagsContainer = document.getElementById("outfitTagsContainer");
  const outfitTagsList = document.getElementById("outfitTagsList");
  const outfitTagsInput = document.getElementById("outfitTagsInput");

  const addColorButton = document.getElementById("addColorButton");
  const outfitColorsContainer = document.getElementById("outfitColorsContainer");
  const outfitColorsList = document.getElementById("outfitColorsList");
  const outfitColorsInput = document.getElementById("outfitColorsInput");

  const addRevealsButton = document.getElementById("addRevealsButton");
  const outfitRevealsContainer = document.getElementById("outfitRevealsContainer");
  const outfitRevealsList = document.getElementById("outfitRevealsList");
  const outfitRevealsInput = document.getElementById("outfitRevealsInput");

  const addEmphasisButton = document.getElementById("addEmphasisButton");
  const outfitEmphasisContainer = document.getElementById("outfitEmphasisContainer");
  const outfitEmphasisList = document.getElementById("outfitEmphasisList");
  const outfitEmphasisInput = document.getElementById("outfitEmphasisInput");
  
  // #endregion --- Outfits ---

  // #region --- Vars - BLACKED ---
  const blkCharacterName = document.getElementById("blkCharacterName")
  const blkYourModBLKVersion = document.getElementById("blkYourModBLKVersion");
  const blkModAuthor = document.getElementById("blkModAuthor");
  const blkBaseGameVersion = document.getElementById("blkBaseGameVersion");
  const blkMCFVersion = document.getElementById("blkMCFVersion");
  const blkModVersion = document.getElementById("blkModVersion");
  const blkYourModName = document.getElementById("blkYourModName");
  const blkYourModVersion = document.getElementById("blkYourModVersion");
  const generateBlackedFoldersButton = document.getElementById("generateBlackedFoldersButton");
  const generateBlackedFilesButton = document.getElementById("generateBlackedFilesButton");

  const blkTransDoggyContainer = document.getElementById("blkTransDoggyContainer");
  const blkTransDoggyPath = document.getElementById("blkTransDoggyPath");
  const blkTransDoggyVid = document.getElementById("blkTransDoggyVid");
  const blkTransDoggyVidPrefix = document.getElementById("blkTransDoggyVidPrefix");
  const blkTransDoggyInsertImg = document.getElementById("blkTransDoggyInsertImg");
  const blkTransDoggyInsertImgPrefix = document.getElementById("blkTransDoggyInsertImgPrefix");
  const blkTransDoggyMoanImg = document.getElementById("blkTransDoggyMoanImg");
  const blkTransDoggyMoanImgPrefix = document.getElementById("blkTransDoggyMoanImgPrefix");
  

  let blkzip = '' // default value for BLACKED Zip var
  // #endregion --- BLACKED ---

  // #region --- Vars - Bar Girl ---
  // #endregion --- Bar Girl ---

  // #region --- Vars - MetaMaker ---
  const metaName = document.getElementById("metaName");
  const metaVersion = document.getElementById("metaVersion");
  const metaAuthor = document.getElementById("metaAuthor");
  const metaGameVersion = document.getElementById("metaGameVersion");
  const metaRequiredMods = document.getElementById("metaRequiredModsContainer");
  const metaIncompatibleMods = document.getElementById("metaIncompatibleModsContainer");
  const metaCompatibleMods = document.getElementById("metaCompatibleModsContainer");
  const generateMetaFileButton = document.getElementById("generateMetaFileButton");
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

  // Function to handle tab switching
  function openTool(evt, toolName) {

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

  // Helper function to check if a field is empty
  function isEmpty(input) {
    return input.trim() === "";
  };

  // Reusable function to handle tagging events
  function handleTagInput(inputElement, datalistElement, addTagFunction) {
    inputElement.addEventListener('input', function () {
      const inputValue = inputElement.value.trim();
      const options = Array.from(datalistElement.options);
      const matchingOption = options.find(option => option.value === inputValue);

      // If the input matches an option from the datalist, automatically add the tag
      if (matchingOption) {
        addTagFunction(inputValue); // Call the respective add function
        inputElement.value = ''; // Clear the input field
      }
    });
  };

  // Add Tags to a Tag Container
  function addTag(tagInput, tagContainer, tagList) {
    let tagText;
  
    // Check if tagInput is a string or an element
    if (typeof tagInput === "string") {
      tagText = tagInput.trim(); // Use the string directly
    } else {
      tagText = tagInput.value.trim(); // Use the input element's value
    }
  
    if (tagText) {
      // Check if the tag already exists
      const existingTags = Array.from(tagContainer.getElementsByClassName("tag"));
      let tagExists = existingTags.some(
        (tag) => tag.textContent.replace("x", "").trim() === tagText
      );
  
      if (!tagExists) {
        // Create a new option in the datalist if it doesn't already exist
        let optionExists = Array.from(tagList.options).some(
          (option) => option.value === tagText
        );
        if (!optionExists) {
          const newOption = document.createElement("option");
          newOption.value = tagText;
          tagList.appendChild(newOption);
        }
  
        // Add the tag to the container
        const tagSpan = document.createElement("span");
        tagSpan.textContent = tagText;
        tagSpan.className = "tag";
  
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "x";
        removeBtn.className = "remove-tag";
        tagSpan.appendChild(removeBtn);
        tagContainer.appendChild(tagSpan);
  
        // Clear the input
        tagInput.value = "";
  
        // Handle tag removal
        removeBtn.addEventListener("click", function () {
          tagSpan.remove();
        });
      }
    }
  };

  // Import Tags (from File) to a Tag Container
  function importTags(tagsArray, tagContainer) {
    tagContainer.innerHTML = '';
    tagsArray.forEach((tag) => {
        const tagSpan = document.createElement("span");
        tagSpan.textContent = tag;
        tagSpan.className = "tag";

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "x";
        removeBtn.className = "remove-tag";
        tagSpan.appendChild(removeBtn);
        tagContainer.appendChild(tagSpan);

        removeBtn.addEventListener("click", function () {
            tagSpan.remove();
        });
    });
  };

  // Collect tags from dynamic video sections
  function collectTags(tagContainer) {
    const container = document.getElementById(tagContainer);
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

  // Build video tagging fields dynamically
  function generateTagFields(videoCount, tagContainer, tagOptions = []) {
    const container = document.getElementById(tagContainer);
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
  function generateMCFDirectories(){
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
  };

  // Helper for clearing position tag input
  function clearPositionTagInput(){
    positionTagsInput.value = "";
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

  // Adds tags to position container for tags
  function addPositionTag(tagText) {
    addTag(tagText, positionTagsContainer, positionTagsList);
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
    if (
      !characterName || 
      !name || 
      !flavor || 
      !type || 
      !subtype || 
      !position || 
      !athletics || 
      !roughness || 
      !yourPleasure || 
      !pleasureFactor || 
      !hisPleasure || 
      !hisSatisfaction || 
      !rhythm || 
      !skill || 
      !skillLevel || 
      locations.length === 0
    ) {
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
            selectedPositionItem = null; // changed from selectedPositionItem
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
    importTags(pos.tags, positionTagsContainer);
  };

  // Function to update position statistics
  function updatePositionStats() {
    const positionList = Array.from(positionsList.children);
    
    // Calculate total, active, and passive counts
    const countTotalPositions = positionList.length;
    const countActivePositions = positionList.filter(pos => JSON.parse(pos.dataset.position).type === 'active').length;
    const countPassivePositions = positionList.filter(pos => JSON.parse(pos.dataset.position).type === 'passive').length;
    
    // Update the HTML elements
    document.getElementById("countTotalPositions").textContent = countTotalPositions;
    document.getElementById("countActivePositions").textContent = countActivePositions;
    document.getElementById("countPassivePositions").textContent = countPassivePositions;
  };

  // Generate Position File
  function generatePositionsFile() {
    const positions = Array.from(positionsList.children)
        .map((pos) => JSON.parse(pos.dataset.position));
    const countActivePositions = positions.filter(pos => pos.type === 'active').length;

    if (positions.length === 0) {
        alert("No positions to generate.");
        return;
    }

    if (countActivePositions < 3) {
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
    outfitCategory.selectedIndex = 0;
    outfitName.value = "";
    outfitFlavor.value = "";
    outfitDescription.value = "";
    outfitPrice.value = "";
    outfitType.value = "";
    outfitStyle.value = "";
    outfitOnePiece.value = "";
    outfitTop.value = "";
    outfitBottom.value = "";
    onePieceRadio.checked = false;
    twoPieceRadio.checked = false;
    outfitBraTrue.checked = false;
    outfitPantiesTrue.checked = false;

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
  function addOutfitColors(tagText) {
    addTag(tagText, outfitColorsContainer, outfitColorsList);
  };

  // Add Emphasis tags
  function addOutfitEmphasis(tagText) {
    addTag(tagText, outfitEmphasisContainer, outfitEmphasisList);
  };

  // Add Reveals tags
  function addOutfitReveals(tagText) {
    addTag(tagText, outfitRevealsContainer, outfitRevealsList);
  };

  // Add Outfit tags
  function addOutfitTags(tagText) {
    addTag(tagText, outfitTagsContainer, outfitTagsList);
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
      const selectedOutfit = document.querySelector("li.selected");
      if (selectedOutfit) {
        selectedOutfit.dataset.outfit = JSON.stringify(newOutfit);
        selectedOutfit.textContent = `${category} - ${name}`;

        // Re-add the remove button if missing
        let existingRemoveBtn = selectedOutfit.querySelector(".remove-outfit");
        if (!existingRemoveBtn) {
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "x";
            removeBtn.className = "remove-outfit";
            selectedOutfit.appendChild(removeBtn);

            removeBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                selectedOutfit.remove();
                addOutfitButton.textContent = "Add Outfit"; // Reset button text
                delete addOutfitButton.dataset.editing;
                resetOutfitForm(); // Clear the form after removal
            });
        }

        // Reset button state
        delete addOutfitButton.dataset.editing;
        addOutfitButton.textContent = "Add Outfit";
        selectedOutfit.classList.remove("selected");
        selectedOutfitItem = null;
      }

    } else {
    // Check for duplicate outfits
    const existingOutfits = Array.from(outfitsList.children);
      let outfitExists = false;
      existingOutfits.forEach((out) => {
          const outData = JSON.parse(out.dataset.outfit);
          if (outData.name === newOutfit.name && outData.type === newOutfit.type && outData.subtype === newOutfit.subtype) {
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

      // Add event listener for outfit clicks
      outfitItem.addEventListener("click", handleOutfitClick);

      // Add the remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "x";
      removeBtn.className = "remove-outfit";
      outfitItem.appendChild(removeBtn);

      removeBtn.addEventListener("click", function (e) {
          e.stopPropagation();
          outfitItem.remove();
          addOutfitButton.textContent = "Add Outfit"; // Reset button text
          delete addOutfitButton.dataset.editing;
          resetOutfitForm()(); // Clear the form after removal
      });

      outfitsList.appendChild(outfitItem);
      
    }
    resetOutfitForm(); // Reset the form fields after adding or saving
  };

  // Handling outfit selection
  function handleOutfitClick(event) {
    const outfitItem = event.currentTarget;

    if (outfitItem.classList.contains("selected")) {
        // Deselect the outfit
        outfitItem.classList.remove("selected");
        resetOutfitForm();
        addOutfitButton.textContent = "Add Outfit"; // Reset button text
        selectedOutfitItem = null; // Clear the reference to the selected outfit
    } else {
        // Select the outfit
        addOutfitButton.textContent = "Save Outfit"; // Change button text
        addOutfitButton.dataset.editing = "true"; // Mark as editing
        document.querySelectorAll("li").forEach((item) => item.classList.remove("selected"));
        outfitItem.classList.add("selected");

        const out = JSON.parse(outfitItem.dataset.outfit);
        loadOutfitIntoForm(out);

        // Store the currently selected outfit
        selectedOutfitItem = outfitItem;
    }
  };

  // Handling removing outfit
  function handleOutfitRemove(outfitItem) {
    outfitItem.remove();
    addOutfitButton.textContent = "Add Outfit"; // Reset button text
    delete addOutfitButton.dataset.editing;
    resetOutfitForm(); // Clear the form after removal
  };

  // Parse imported outfit file
  function parseOutfitsFromJS(content) {

    // Updated regex to capture booleans (true/false), strings, and objects
    const regex = /outfits\("([^"]+)", "([^"]+)",\s*((?:\{[\s\S]*?\})(?:,\s*\{[\s\S]*?\})*)\s*\)/g;

    let match;
    const outfits = [];

    while ((match = regex.exec(content)) !== null) {
        const characterName = match[1].trim();
        const category = match[2].trim();
        const outfitsBlock = match[3].trim();

        // Split outfitsBlock by each outfit object (splitting by '} , {')
        const outfitObjects = outfitsBlock.split(/\}\s*,\s*\{/);

        outfitObjects.forEach((outfitObj, index) => {
            // Cleanup braces and parse each outfit object individually
            const cleanedOutfitObj = (index === 0 ? outfitObj + '}' : '{' + outfitObj + '}').trim();

            // Updated extraction to handle unquoted booleans (true/false)
            const outfitData = extractOutfitObject(cleanedOutfitObj);

            const newOutfit = {
                characterName,
                category,
                ...outfitData
            };
            outfits.push(newOutfit);

            console.log("Extracted outfit: ", newOutfit); // Debugging output
        });
    }

    if (outfits.length > 0) {
        populateOutfitsList(outfits); // Populate list if outfits exist
    } else {
        alert("No outfits imported.");
    }
  };

  // Extract outfit details from imported outfit and assign values
  function extractOutfitObject(blockContent) {
    const outfit = {};
    const fieldNameMapping = {
      "panties under": "pantiesUnder",
      "bra under": "braUnder",
      "breast support": "breastSupport"
    };

    // Regex to match key-value pairs, handling strings, arrays, numbers, booleans, and objects
    const regex = /["']([\w\s]+)["']\s*:\s*(?:"([^"]*)"|'([^']*)'|\[(.*?)\]|\{(.*?)\}|(\d+(\.\d+)?)|(true|false|null))/g;

    let match;

    while ((match = regex.exec(blockContent)) !== null) {
        const key = match[1].trim();
        let value = match[2] || match[3]; // Extract string value if available

        // Handle non-string values
        if (value === undefined) {
            if (match[4]) { // Array
                value = match[4].split(',').map(item => item.trim().replace(/["']/g, ''));
            } else if (match[5]) { // Object
                value = extractOutfitObject(match[5]); // Recursively extract nested objects
            } else if (match[6]) { // Number
                value = parseFloat(match[6]);
            } else if (match[8]) { // Boolean
                value = match[8] === 'true'; // Ensure boolean is properly interpreted
            }
        }

        // Apply field name mapping
        const mappedKey = fieldNameMapping[key] || key;

        // Assign the processed value to the outfit object
        outfit[mappedKey] = value;

        // Debugging output

    }

    return outfit;
  };

  // Populate Outfit List from extracted Object
  function populateOutfitsList(outfits) {
    outfitsList.innerHTML = ""; // Clear existing items

    if (outfits.length > 0) {
      // Set the character name before looping through outfits
      outfitCharacterName.value = outfits[0].characterName;
  }

    outfits.forEach((outfit) => {
        const outfitItem = document.createElement("li");
        outfitItem.textContent = `${outfit.category} - ${outfit.name}`;
        outfitItem.dataset.outfit = JSON.stringify(outfit);

        // Add click event listener
        outfitItem.addEventListener("click", handleOutfitClick);

        // Add remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "x";
        removeBtn.className = "remove-outfit";
        outfitItem.appendChild(removeBtn);

        // Event listener for remove button
        removeBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            outfitItem.remove();
            addOutfitButton.textContent = "Add Outfit"; // Reset button text
            delete addOutfitButton.dataset.editing;
            resetOutfitForm(); // Clear the form after removal
        });

        // Append outfit item to list
        outfitsList.appendChild(outfitItem);
    });
  };

  // Populate Outfit Form with Selected Outfit's details
  function loadOutfitIntoForm(out) {

    // Set inputs
    outfitCharacterName.value = out.characterName;
    outfitName.value = out.name;
    outfitFlavor.value = out.flavor;
    outfitDescription.value = out.description;
    outfitCategory.value = out.category.toLowerCase();
    outfitType.value = out.type.toLowerCase();
    outfitStyle.value = out.style.toLowerCase();
    outfitShoes.value = out.shoes !== undefined ? out.shoes : 'none'; // if out.shoes is undefined, set to 'none'
    outfitPrice.value = out.price;

    outfitOnePiece.value = out.onepiece || '';  // Set the value or default to an empty string
    outfitTop.value = out.top || '';            // Same for top
    outfitBottom.value = out.bottom || '';      // Same for bottom

    // Check which outfit type is selected and set radio button accordingly
    if (outfitOnePiece.value !== '') {
        document.querySelector(`input[id="onePieceRadio"]`).checked = true;
    } else {
        document.querySelector(`input[id="twoPieceRadio"]`).checked = true;
    }

    updateOutfitFields();

    // Set checkboxes for braUnder and pantiesUnder
    document.querySelector(`input[id="outfitBraTrue"]`).checked = out.braUnder === true;
    document.querySelector(`input[id="outfitPantiesTrue"]`).checked = out.pantiesUnder === true;

    // updateOutfitType();

    // Set sliders
    outfitSluttiness.value = out.sluttiness;
    outfitComfort.value = out.comfort;
    outfitDurability.value = out.durability;
    outfitBreastSupport.value = out.breastSupport !== undefined ? out.breastSupport : 0; // if out.breastSupport is undefined, set to 0

    // Update slider displayed numbers
    updateSliderValues();
    
    // set checkboxes
    const locations = Array.isArray(out.locations) ? out.locations : [];
    document.querySelectorAll('input[name="outfitLocations"]').forEach((loc) => {
        loc.checked = locations.includes(loc.value);
    });

    // Handle tags
    importTags(out.tags, outfitTagsContainer);
    importTags(out.reveals, outfitRevealsContainer);
    importTags(out.emphasizes, outfitEmphasisContainer);
    importTags(out.colors, outfitColorsContainer);

  };

  // Function to update outfit statistics
  function updateOutfitStats() {
    const outfitList = Array.from(outfitsList.children);
    
    // Calculate total, active, and passive counts
    const countTotalOutfits = outfitList.length;
    const countBeachOutfits = outfitList.filter(out => JSON.parse(out.dataset.outfit).category === 'beach').length;
    const countCasualOutfits = outfitList.filter(out => JSON.parse(out.dataset.outfit).category === 'casual').length;
    const countFetishOutfits = outfitList.filter(out => JSON.parse(out.dataset.outfit).category === 'fetish').length;
    const countGymOutfits = outfitList.filter(out => JSON.parse(out.dataset.outfit).category === 'gym').length;
    const countLingerieOutfits = outfitList.filter(out => JSON.parse(out.dataset.outfit).category === 'lingerie').length;
    const countLoungeOutfits = outfitList.filter(out => JSON.parse(out.dataset.outfit).category === 'lounge').length;
    const countOfficeOutfits = outfitList.filter(out => JSON.parse(out.dataset.outfit).category === 'office').length;
    const countStylishOutfits = outfitList.filter(out => JSON.parse(out.dataset.outfit).category === 'stylin').length;
    
    // Update the HTML elements
    document.getElementById("countTotalOutfits").textContent = countTotalOutfits;
    document.getElementById("countBeachOutfits").textContent = countBeachOutfits;
    document.getElementById("countCasualOutfits").textContent = countCasualOutfits;
    document.getElementById("countFetishOutfits").textContent = countFetishOutfits;
    document.getElementById("countGymOutfits").textContent = countGymOutfits;
    document.getElementById("countLingerieOutfits").textContent = countLingerieOutfits;
    document.getElementById("countLoungeOutfits").textContent = countLoungeOutfits;
    document.getElementById("countOfficeOutfits").textContent = countOfficeOutfits;
    document.getElementById("countStylishOutfits").textContent = countStylishOutfits;
  };

  function generateOutfitsFile() {
    const outfits = Array.from(document.getElementById("outfitsList").children)
        .map((out) => JSON.parse(out.dataset.outfit));

    if (outfits.length === 0) {
        alert("No outfits to generate.");
        return;
    }

    // Track initialized characters
    const initializedCharacters = new Set();

    // Group outfits by characterName and category
    const groupedOutfits = {};
    outfits.forEach((outfit) => {
        const key = `${outfit.characterName}-${outfit.category}`;
        if (!groupedOutfits[key]) {
            groupedOutfits[key] = [];
        }
        groupedOutfits[key].push(outfit);
    });

    // JavaScript content string
    let jsContent = "";

    // Add init_character for each unique character at the top
    outfits.forEach((outfit) => {
        if (!initializedCharacters.has(outfit.characterName)) {
            // Generate init_character only once per character
            const categoryCounts = outfits.reduce((acc, currOutfit) => {
                if (currOutfit.characterName === outfit.characterName) {
                    acc[currOutfit.category] = (acc[currOutfit.category] || 0) + 1;
                }
                return acc;
            }, {});
            
            let initLine = `init_character("${outfit.characterName}", {\n`;
            Object.keys(categoryCounts).forEach((category, index, array) => {
                initLine += `  "${category}": ${categoryCounts[category]}`;
                if (index < array.length - 1) {
                    initLine += ",";
                }
                initLine += "\n";
            });
            initLine += `});\n\n`;

            jsContent += initLine;
            initializedCharacters.add(outfit.characterName);
        }
    });

    // Loop through grouped outfits and create the outfit block
    Object.keys(groupedOutfits).forEach((groupKey) => {
        const [characterName, category] = groupKey.split("-");
        const group = groupedOutfits[groupKey];

        // Add outfits for this group
        jsContent += `outfits("${characterName}", "${category}",\n`;

        group.forEach((outfit, index) => {
            jsContent += `  {\n`;
            jsContent += `    "name": "${outfit.name}",\n`;
            jsContent += `    "flavor": "${outfit.flavor}",\n`;
            jsContent += `    "description": "${outfit.description}",\n`;
            jsContent += `    "price": ${outfit.price},\n`;
            jsContent += `    "type": "${outfit.type}",\n`;
            jsContent += `    "sluttiness": ${outfit.sluttiness},\n`;
            jsContent += `    "comfort": ${outfit.comfort},\n`;
            jsContent += `    "durability": ${outfit.durability},\n`;
            jsContent += `    "style": "${outfit.style}",\n`;

            // Optional fields with default values
            jsContent += `    "breast support": ${outfit.breastSupport !== undefined ? outfit.breastSupport : 0},\n`;
            jsContent += `    "bra under": ${outfit.braUnder !== undefined ? outfit.braUnder : false},\n`;
            jsContent += `    "panties under": ${outfit.pantiesUnder !== undefined ? outfit.pantiesUnder : false},\n`;
            jsContent += `    "shoes": "${outfit.shoes !== undefined ? outfit.shoes : "none"}",\n`;

            // Conditional logic based on descType
            if (outfit.descType === "onePiece") {
                jsContent += `    "onepiece": "${outfit.onepiece}",\n`;
            } else if (outfit.descType === "twoPiece") {
                jsContent += `    "top": "${outfit.top}",\n`;
                jsContent += `    "bottom": "${outfit.bottom}",\n`;
            }

            jsContent += `    "locations": [${(outfit.locations || [outfit.category]).map((loc) => `"${loc}"`).join(", ")}],\n`;
            jsContent += `    "tags": [${(outfit.tags || []).map((tag) => `"${tag}"`).join(", ")}],\n`;
            jsContent += `    "colors": [${(outfit.colors || []).map((color) => `"${color}"`).join(", ")}],\n`;
            jsContent += `    "emphasizes": [${(outfit.emphasizes || []).map((emphasize) => `"${emphasize}"`).join(", ")}],\n`;
            jsContent += `    "reveals": [${(outfit.reveals || []).map((reveal) => `"${reveal}"`).join(", ")}]\n`;

            jsContent += `  }`;

            // Add a comma for all but the last outfit in the group
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
    link.download = `${outfits[0].characterName}_outfits.js`;

    // Append link to the document and click it programmatically
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  // #endregion --- Functions - Outfits

  // #region --- Functions - Blacked

  // Set up Default Values
  function setBlkDefaultValues() {
    const name = blkCharacterName.value;

    blkTransDoggyVidPrefix.value = "transactional"
    blkTransDoggyInsertImgPrefix.value = "transactional insert"
    blkTransDoggyMoanImgPrefix.value = "moan"
  };

  // Add Character name into directories
  function setBlkDefaultDirectories() {
    const name = blkCharacterName.value;

    blkTransDoggyPath.value = `${name}/sex/doggy/bbc/`
 
  };


  // Generate Blacked Zip
  function generateBlackedZip(){
    const characterName = document.getElementById('blkCharacterName').value;

    blkzip.generateAsync({ type: "blob" }).then(function (content) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = `BLACKED_${characterName}.zip`;
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
      console.error("Character Name is required.");
      alert("Please enter a character name.");
      return;
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

    // Collect input values from forms
    const characterName = blkCharacterName.value;
    const version = blkYourModBLKVersion.value;
    const author = blkModAuthor.value;
    const baseGameVersion = blkBaseGameVersion.value;
    const MCFVersion = blkMCFVersion.value;
    const BLKVersion = blkModVersion.value;
    const MCFModName = blkYourModName.value;
    const MCFModVersion = blkYourModVersion.value;

    // Transactional Doggy
    const blkTransDoggyVidInt = parseInt(blkTransDoggyVid.value);
    const blkTransDoggyInsertImgInt = parseInt(blkTransDoggyInsertImg.value);
    const blkTransDoggyMoanImgInt = parseInt(blkTransDoggyMoanImg.value);
    const tagsTransDoggy = [];
    const rhythmTransDoggy = [];


    // Field validation
    if (!characterName) {
      console.error("Character Name is required.");
      alert("Please enter a character name.");
      return;
    }

    if (!version || !author || !baseGameVersion || !MCFVersion || !BLKVersion || !MCFModName || !MCFModVersion) {
      alert("All meta fields are required. Please fill out the fields.");
      return; 
    }

    if (!blkTransDoggyVidInt || !blkTransDoggyInsertImgInt || !blkTransDoggyMoanImgInt) {
      console.error("Transactional Doggy fields are required."); 
      alert("Transactional Doggy fields are required.");
      return;
    }

    
    // Collect tag data from each video
    for (let i = 1; i <= blkTransDoggyVidInt; i++) {
      // Collect tags from dropdowns
      const transDoggyTagLocation = blkTransDoggyContainer.querySelector(`#location_tag_${i}`)?.value || '';
      const additionalTagsTransDoggyElements = [
        blkTransDoggyContainer.querySelector(`#tag_${i}_1`),
        blkTransDoggyContainer.querySelector(`#tag_${i}_2`),
        blkTransDoggyContainer.querySelector(`#tag_${i}_3`)
    ];
      // Extract and filter tags
      const additionalTagsTransDoggy = additionalTagsTransDoggyElements
      .map(tag => tag ? tag.value.trim() : '')  // Get values and trim whitespace
      .filter(tag => tag); // Filter out empty values

      // Combine location tag with additional tags
      const tagArrayTransDoggy = [transDoggyTagLocation, ...additionalTagsTransDoggy].filter(tag => tag); // Filter out empty strings

      // Format tags for Twee
      tagsTransDoggy.push(`"${characterName}/sex/doggy/bbc/transactional ${i}", (a:"${tagArrayTransDoggy.join('","')}")`);
      rhythmTransDoggy.push(`"${characterName}/sex/doggy/bbc/transactional ${i}",500`);
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
    
    // twee building section
    let tweeContent = `:: blacked compatibility [around]\n{(display:_around)\n(set:$blacked_compatible_list to it + (dm:"${characterName}",1))}\n\n`;

    // Transactional Doggy
    tweeContent += `:: sex doggy transactional ${characterName} [around]\n`;
    tweeContent += `{\n(if:(checkdm: $npc, "race", "is", "black"))[\n`;
    tweeContent += `(set:$img to "${characterName}/sex/doggy/bbc/transactional " + (text:(twist:1,${blkTransDoggyVidInt}))) \n`;
    tweeContent += `(set:$doggy_pic to "<img class='greyborder' src='img/scenes/characters/${characterName}/sex/doggy/bbc/transactional insert " + (text:(twist:1,${imgTransDoggy})) + ".jpg' width=100% height=auto>") \n`;
    tweeContent += `(set:$doggy_moan_pic to "<img class='greyborder' src='img/scenes/characters/${characterName}/sex/doggy/bbc/moan " + (text:(twist:1,${imgTransDoggyMoan})) + ".jpg' width=100% height=auto>")\n`;
    tweeContent += `(set:$doggy_rhythm to $img of (dm:${rhythmTransDoggy.join(',')}))\n`;
    tweeContent += `(set:$text to $img of (dm:${tagsTransDoggy.join(',')}))\n`;
    tweeContent += `](else:)[(display:_around)]\n}\n\n`;

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
    blkTransDoggyContainer.innerHTML = ''; // Clear any existing fields

    const numVideos = parseInt(blkTransDoggyVid.value) || 0;

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

      blkTransDoggyContainer.appendChild(tagField);
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
  };
  // #endregion --- Functions - MetaMaker
  
  // #endregion ----- Functions Section -----


  // #region ----- Event Listeners -----

  // #region --- Listeners - General

  // Handle tab switching
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function (event) {
      const toolName = this.getAttribute("data-tool");
      openTool(event, toolName);
    });
  };
  // #endregion --- Listeners - General

  // #region --- Listeners - MCF

  // Generate MCF Directories Only
  generateMCFDirectoriesButton.addEventListener("click", generateMCFDirectories);
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
    clearPositionTagInput();
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

  // Generate Outfits File
  generateOutfitsFileButton.addEventListener("click", generateOutfitsFile);

  // Adds listeners for outfit list handling
  document.querySelectorAll('#outfitsList li').forEach((outfitItem) => {
    outfitItem.addEventListener("click", () => handleOutfitClick(outfitItem));
    outfitItem.querySelector('.remove-outfit')?.addEventListener("click", (e) => {
        e.stopPropagation();
        handleOutfitRemove(outfitItem);
    });
  });

  // Import existing outfit file
  document.getElementById('importOutfitsButton').addEventListener('click', function () {
    const fileInput = document.getElementById('importOutfits');
    const file = fileInput.files[0];
    if (!file) {
        alert('No file selected.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const fileContent = event.target.result;

        try {
            parseOutfitsFromJS(fileContent);
        } catch (error) {
            console.error("Error parsing outfits: ", error);
            alert("Error parsing outfits.");
        }
    };

    reader.readAsText(file);
  });

  // Attach a MutationObserver to the positionsList
  const outfitObserver = new MutationObserver(() => {
    updateOutfitStats(); // Update stats whenever the list is changed
  });

  // Configure the observer to watch for changes in child elements
  outfitObserver.observe(outfitsList, { childList: true });

  // #endregion --- Listeners - Outfits

  // #region --- Listeners - Blacked

  // Set up Blacked Defaults after Character Input
  blkCharacterName.addEventListener("input", setBlkDefaultDirectories);

  // Generate Blacked Directories Only
  generateBlackedFoldersButton.addEventListener("click", generateBlackedFolders);

  // Generate Blacked Files and Directories
  generateBlackedFilesButton.addEventListener("click", generateBlackedFiles);

  // Build tag fields for BLACKED - Transactional Doggy
  document.getElementById('blkTransDoggyVid').addEventListener('input', generateBLKTransDoggyFields);
  // #endregion --- Listeners - Blacked

  // #region --- Listeners - Bar Girl
  // #endregion --- Listeners - Bar Girl

  // #region --- Listeners - MetaMaker

  // Generate Meta File
  generateMetaFileButton.addEventListener("click", generateMetaFile);

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

  // Set up Blacked defaults
  setBlkDefaultDirectories();
  setBlkDefaultValues();

  // Sets up tagging sections
  handleTagInput(positionTagsInput, positionTagsList, addPositionTag);
  handleTagInput(outfitColorsInput, outfitColorsList, addOutfitColors);
  handleTagInput(outfitTagsInput, outfitTagsList, addOutfitTags);
  handleTagInput(outfitEmphasisInput, outfitEmphasisList, addOutfitEmphasis);
  handleTagInput(outfitRevealsInput, outfitRevealsList, addOutfitReveals);

  // Tooltips
  tippy.setDefaultProps({
    theme: 'xcl',
    animation: 'scale',
    arrow: true,
    placement: 'right',
    allowHTML: true,
  });

  tippy([blkCharacterName, outfitCharacterName, positionCharacterName, mcfCharacterName], {
    content: 'This is also the "id" for your character. It is usually their first name, in all lowercase. <br><br>It could be "lauren", for example.',
  })

  tippy([metaVersion, blkYourModBLKVersion, mcfYourModVersion],{
    content: 'This is the version of your mod. You will need to increase it when you release updates. <br><br>Recommend semantic versioning (major.minor.patch).<br> Example: "0.2.1" for 0 major / 2 minor / 1 patch.'
  })

  tippy([mcfModAuthor, blkModAuthor, metaAuthor],{
    content: 'You! <br>You can put your @handle, your name or nickname. However you would like people to know you.<br><br> Example: "Chloe"'
  })

  tippy([blkYourModVersion],{
    content: 'This is the version of YOUR MCF mod, for the girl that you are making. <br><br>Example: If your MCF mod is for "Bonnie", then whatever version "Bonnie" is on, will go in this box.'
  })

  tippy([blkYourModName],{
    content: "This is the name of YOUR MCF mod. Usually it is the girl's name. <br><b>It should match exactly what is in your mod's meta</b>. <br><br>Example: Bonnie"
  })

  tippy([positionName],{
    content: 'This is the name of the position that will show up in game. It must match the file name. <br>It is not case sensitive, however formatting in the game defaults to "Proper Case" for this. <br><br> This means that: "wHaT aRe YoU dOiNg StEpDaD" will get normalized out to "What Are You Doing Stepdad".'
  })

  tippy([positionFlavor],{
    content: "This is the flavor text that shows up under the position. It can be descriptive, informative, 90's song lyrics or movie quotes... whatever you want it to say."
  })

  /*
  tippy([],{
    content: ''
  })
  */

  

  // #endregion ----- Initialization -----
}); // DOM End Line
