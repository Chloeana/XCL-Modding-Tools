// Document ready function
document.addEventListener("DOMContentLoaded", function () {
  
  // Set Default Tab
  document.getElementById("MCF-Tab").style.display = "block";
  document.querySelector(".tablinks").classList.add("active");

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
        document.getElementById('blkBaseGameVersion').value = versionXCL;
        document.getElementById('mcfBaseGameVersion').value = versionXCL;
        document.getElementById('baseGameVersion').value = versionXCL;
      }

      if (versionMCF) {
        document.getElementById('blkMCFVersion').value = versionMCF;
        document.getElementById('mcfMCFVersion').value = versionMCF;
      }

      if (versionBLK) {
        document.getElementById('blkModVersion').value = versionBLK;
      }})

      .catch(error => {
        console.error('Error:', error);
      });
  }

  getVersionNumbers()

  // Create a text input for displaying and editing the slider value
  const sliders = document.querySelectorAll('input[type="range"]');

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

      this.value = value;
      slider.value = value;
    });
  });

  // Add validation for the rhythm field
  const rhythmInput = document.getElementById("rhythm");

  rhythmInput.addEventListener("input", function () {
    const value = parseInt(rhythmInput.value, 10);
    if (isNaN(value) || value < 400 || value > 1400) {
      rhythmInput.setCustomValidity("Rhythm must be between 400 and 1400.");
    } else {
      rhythmInput.setCustomValidity("");
    }
    rhythmInput.reportValidity(); // This will trigger the validity check and show the error message if invalid
  });

  // Section for One-Piece vs Top / Bottom
  const onePieceRadio = document.getElementById("onePiece");
  const twoPieceRadio = document.getElementById("twoPiece");

  function updateOutfitFields() {
    const onePieceField = document.getElementById("onePieceField");
    const twoPieceFields = document.getElementById("twoPieceFields");

    const outfitOnePiece = document.getElementById("outfitOnePiece");
    const outfitTop = document.getElementById("outfitTop");
    const outfitBottom = document.getElementById("outfitBottom");

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
  }

  // Initialize outfit fields
  updateOutfitFields();

  // Add event listeners to the radio buttons
  onePieceRadio.addEventListener("change", updateOutfitFields);
  twoPieceRadio.addEventListener("change", updateOutfitFields);

  // Function to update the displayed number in each slider's input box
  function updateSliderValues() {
    sliders.forEach((slider) => {
      const inputBox = slider.nextElementSibling; // Get the input box next to the slider
      if (inputBox && inputBox.classList.contains("slider-input")) {
        inputBox.value = slider.value; // Update the input box with the slider's value
      }
    });
  }

  function updateSkillDropdown() {
    const selectedType = document.querySelector(
      'input[name="positionType"]:checked'
    ).value;
    const skillSelect = document.getElementById("skill");

    // Reset the skill options
    skillSelect.innerHTML = "";
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
            "Handjob",
          ];

    options.forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option.toLowerCase().replace(" ", "_");
      opt.textContent = option;
      skillSelect.appendChild(opt);
    });
  }

  // Function to update positions based on selected type and subtype
  const positionSelect = document.getElementById("position");
  const subtypes = {
    active: {
      cowgirl: ["cowgirl", "full nelson", "standing fuck"],
      doggy: ["doggystyle", "side fuck"],
      missionary: ["missionary", "pile driver", "side fuck"],
      service: ["69", "blowjob", "handjob", "titfuck"],
    },
    passive: {
      cowgirl: ["cowgirl", "full nelson", "standing fuck"],
      doggy: ["doggystyle", "side fuck"],
      missionary: ["missionary", "pile driver", "side fuck"],
      service: ["cunnilingus", "titfuck", "fingering", "facefuck"],
    },
  };

  function updatePositions() {
    const selectedType = document.querySelector(
      'input[name="positionType"]:checked'
    ).value;
    const selectedSubtype = document.querySelector(
      'input[name="subtype"]:checked'
    ).value;

    const positions = subtypes[selectedType][selectedSubtype];

    positionSelect.innerHTML = "";
    positions.forEach((position) => {
      const option = document.createElement("option");
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

  typeRadios.forEach((radio) => {
    radio.addEventListener("change", updatePositions);
  });

  const subtypeRadios = document.querySelectorAll('input[name="subtype"]');

  subtypeRadios.forEach((radio) => {
    radio.addEventListener("change", updatePositions);
  });

  // Position Tag section
  const addPositionTagButton = document.getElementById("addPositionTagButton");
  const positionTagsContainer = document.getElementById(
    "positionTagsContainer"
  );

  function addPositionTag() {
    const positionTagsInput = document.getElementById("positionTagsInput");
    const positionTagsList = document.getElementById("positionTagsList");
    const tagText = positionTagsInput.value.trim();

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
  }

  addPositionTagButton.addEventListener("click", addPositionTag);

  // Clear position form
  function resetPositionForm() {
    document.getElementById("positionName").value = "";
    document.getElementById("positionFlavor").value = "";
    document.getElementById("active").checked = false;
    document.getElementById("passive").checked = false;
    document.getElementById("cowgirl").checked = false;
    document.getElementById("doggy").checked = false;
    document.getElementById("missionary").checked = false;
    document.getElementById("service").checked = false;

    positionSelect.innerHTML = "";
    sliders.forEach((slider) => {
      slider.value = 5;
    });
    updateSliderValues();
    positionTagsContainer.innerHTML = ""; // Clear tags
    document.getElementById("rhythm").value = "";
    document.getElementById("skill").selectedIndex = 0;
    document.getElementById("skillLevel").value = "";
    document.getElementById("pleasureFactor").selectedIndex = 0;
    document
      .querySelectorAll('input[name="positionLocations"]')
      .forEach((loc) => (loc.checked = false));

    window.scrollTo(0, 0); // Scroll to the top of the page
  }

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
    document.getElementById("outfitOnePiece").value = "";
    document.getElementById("outfitTop").value = "";
    document.getElementById("outfitBottom").value = "";
    document.getElementById("outfitShoes").value = "";
    document.getElementById("pantiesTrue").value = "";
    document.getElementById("braTrue").value = "";
    document.getElementById("onePiece").checked = false;
    document.getElementById("twoPiece").checked = false;
    document.getElementById("braTrue").checked = false;
    document.getElementById("pantiesTrue").checked = false;

    document
      .querySelectorAll('input[name="outfitLocations"]')
      .forEach((loc) => (loc.checked = false));

    outfitTagsContainer.innerHTML = "";
    colorsContainer.innerHTML = "";
    emphasisContainer.innerHTML = "";
    revealsContainer.innerHTML = "";

    updateOutfitFields();

    window.scrollTo(0, 0); // Scroll to the top of the page
  }

  // Adding positions to the list
  const addPositionButton = document.getElementById("addPosition");
  

  function addPosition() {
    // Extracting form values
    const characterName = document
      .getElementById("positionCharacterName")
      .value.toLowerCase();
    const name = document.getElementById("positionName").value;
    const flavor = document.getElementById("positionFlavor").value;
    const type = document.querySelector(
      'input[name="positionType"]:checked'
    ).value;
    const subtype = document.querySelector(
      'input[name="subtype"]:checked'
    ).value;
    const position = document.getElementById("position").value;
    let selectedPositionItem = null;
    const athletics = document.getElementById("athletics").value;
    const roughness = document.getElementById("roughness").value;
    const yourPleasure = document.getElementById("yourPleasure").value;
    const pleasureFactor = document.getElementById("pleasureFactor").value;
    const hisPleasure = document.getElementById("hisPleasure").value;
    const hisSatisfaction = document.getElementById("hisSatisfaction").value;
    const rhythm = document.getElementById("rhythm").value;
    const skill = document.getElementById("skill").value;
    const skillLevel = document.getElementById("skillLevel").value;
    const locations = Array.from(
      document.querySelectorAll('input[name="positionLocations"]:checked')
    ).map((loc) => loc.value);
    const tags = Array.from(positionTagsContainer.querySelectorAll(".tag")).map((tag) =>
        tag.textContent.replace("x", "").trim());

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
      selectedPosition.dataset.position = JSON.stringify(newPosition);
      selectedPosition.textContent = `${name} (${subtype} - ${position})`;
      delete addPositionButton.dataset.editing;
      addPositionButton.textContent = "Add Position"; // Change back to "Add Position"

      // Deselect the position after saving
      selectedPosition.classList.remove("selected");
      selectedPositionItem = null;
    } else {
      // Check for duplicate positions
      const existingPositions = Array.from(
        document.getElementById("positionsList").children
      );
      let positionExists = false;
      existingPositions.forEach((pos) => {
        const posData = JSON.parse(pos.dataset.position);
        if (
          posData.name === newPosition.name &&
          posData.type === newPosition.type &&
          posData.subtype === newPosition.subtype
        ) {
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

      positionItem.addEventListener("click", function () {
        if (positionItem.classList.contains("selected")) {
          positionItem.classList.remove("selected");
          resetPositionForm();
        } else {
          addPositionButton.textContent = "Save Position"; // Change button text
          addPositionButton.dataset.editing = "true"; // Mark as editing
          document
            .querySelectorAll("li")
            .forEach((item) => item.classList.remove("selected"));
          positionItem.classList.add("selected");

          // Update the form fields with the selected position's data
          const pos = JSON.parse(positionItem.dataset.position);
          document.getElementById("positionCharacterName").value =
            pos.characterName;
          document.getElementById("positionName").value = pos.name;
          document.getElementById("positionFlavor").value = pos.flavor;
          document.querySelector(
            `input[name="positionType"][value="${pos.type}"]`
          ).checked = true;
          document.querySelector(
            `input[name="subtype"][value="${pos.subtype}"]`
          ).checked = true;
          updatePositions(); // Ensure the position dropdown is updated based on type/subtype
          document.getElementById("position").value = pos.position;
          document.getElementById("athletics").value = pos.athletics;
          document.getElementById("roughness").value = pos.roughness;
          document.getElementById("yourPleasure").value = pos.yourPleasure;
          document.getElementById("pleasureFactor").value = pos.pleasureFactor;
          document.getElementById("hisPleasure").value = pos.hisPleasure;
          document.getElementById("hisSatisfaction").value =
            pos.hisSatisfaction;
          document.getElementById("rhythm").value = pos.rhythm;
          document.getElementById("skill").value = pos.skill;
          document.getElementById("skillLevel").value = pos.skillLevel;
          document
            .querySelectorAll('input[name="positionLocations"]')
            .forEach((loc) => {
              loc.checked = pos.locations.includes(loc.value);
            });

          // Update tags
          positionTagsContainer.innerHTML = "";
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

          // Update slider displayed numbers
          updateSliderValues();

          // Store the currently selected position
          selectedPositionItem = positionItem;
        }
      });

      // Remove Position
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

      document.getElementById("positionsList").appendChild(positionItem);
    }

    resetPositionForm(); // Reset the form fields after adding or saving
  }

  addPositionButton.addEventListener("click", addPosition);

  // ----- Outfit array sections -----
  // Color tags
  const addColorButton = document.getElementById("addColorButton");
  const colorsContainer = document.getElementById("colorsContainer");

  function addOutfitColors() {
    const colorsInput = document.getElementById("colorsInput");
    const outfitColors = document.getElementById("outfitColors");
    const tagText = colorsInput.value.trim();

    if (tagText) {
      // Check if the tag already exists
      const existingTags = Array.from(
        colorsContainer.getElementsByClassName("tag")
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
        colorsContainer.appendChild(tagSpan);

        // Clear the input
        colorsInput.value = "";

        // Handle tag removal
        removeBtn.addEventListener("click", function () {
          tagSpan.remove();
        });
      }
    }
  }

  addColorButton.addEventListener("click", addOutfitColors);

  // Emphasis tags
  const addEmphasisButton = document.getElementById("addEmphasisButton");
  const emphasisContainer = document.getElementById("emphasisContainer");

  function addOutfitEmphasis() {
    const emphasisInput = document.getElementById("emphasisInput");
    const outfitEmphasis = document.getElementById("outfitEmphasis");
    const tagText = emphasisInput.value.trim();

    if (tagText) {
      // Check if the tag already exists
      const existingTags = Array.from(
        emphasisContainer.getElementsByClassName("tag")
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
        emphasisContainer.appendChild(tagSpan);

        // Clear the input
        emphasisInput.value = "";

        // Handle tag removal
        removeBtn.addEventListener("click", function () {
          tagSpan.remove();
        });
      }
    }
  }

  addEmphasisButton.addEventListener("click", addOutfitEmphasis);

  // Reveals tags
  const addRevealsButton = document.getElementById("addRevealsButton");
  const revealsContainer = document.getElementById("revealsContainer");

  function addOutfitReveals() {
    const revealsInput = document.getElementById("revealsInput");
    const outfitReveals = document.getElementById("outfitReveals");
    const tagText = revealsInput.value.trim();

    if (tagText) {
      // Check if the tag already exists
      const existingTags = Array.from(
        revealsContainer.getElementsByClassName("tag")
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
        revealsContainer.appendChild(tagSpan);

        // Clear the input
        revealsInput.value = "";

        // Handle tag removal
        removeBtn.addEventListener("click", function () {
          tagSpan.remove();
        });
      }
    }
  }

  addRevealsButton.addEventListener("click", addOutfitReveals);

  // Outfit tags
  const addOutfitTagsButton = document.getElementById("addOutfitTagsButton");
  const outfitTagsContainer = document.getElementById("outfitTagsContainer");

  function addOutfitOutfitTags() {
    const outfitTagsInput = document.getElementById("outfitTagsInput");
    const outfitTags = document.getElementById("outfitTags");
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
  }

  addOutfitTagsButton.addEventListener("click", addOutfitOutfitTags);

  // Add outfit to the list
  const addOutfitButton = document.getElementById("addOutfit");

  function addOutfit() {
    // Extracting form values
    const characterName = document
      .getElementById("outfitCharacterName")
      .value.toLowerCase();
    const category = document.getElementById("outfitCategory").value;
    const name = document.getElementById("outfitName").value;
    const flavor = document.getElementById("outfitFlavor").value;
    const description = document.getElementById("outfitDescription").value;
    const price = document.getElementById("outfitPrice").value;
    const type = document.getElementById("outfitType").value;
    const sluttiness = document.getElementById("outfitSluttiness").value;
    const comfort = document.getElementById("outfitComfort").value;
    const durability = document.getElementById("outfitDurability").value;
    const style = document.getElementById("outfitStyle").value;
    const tags = Array.from(outfitTagsContainer.querySelectorAll(".tag")).map((tag) =>
        tag.textContent.replace("x", "").trim());
    const colors = Array.from(colorsContainer.querySelectorAll(".tag")).map((tag) =>
        tag.textContent.replace("x", "").trim());
    const emphasizes = Array.from(emphasisContainer.querySelectorAll(".tag")).map((tag) =>
        tag.textContent.replace("x", "").trim());
    const reveals = Array.from(revealsContainer.querySelectorAll(".tag")).map((tag) =>
        tag.textContent.replace("x", "").trim());
    const braUnder = document.getElementById("braTrue").checked ? "true" : "false";
    const pantiesUnder = document.getElementById("pantiesTrue").checked ? "true" : "false";
    const breastSupport = document.getElementById("outfitBreastSupport").value;
    const locations = Array.from(
        document.querySelectorAll('input[name="outfitLocations"]:checked')
      ).map((loc) => loc.value);
    const onepiece = document.getElementById("outfitOnePiece").value;
    const top = document.getElementById("outfitTop").value;
    const bottom = document.getElementById("outfitBottom").value;
    const shoes = document.getElementById("outfitShoes").value;
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

    console.log(newOutfit);

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
            document.getElementById("outfitCharacterName").value = out.characterName;
            document.getElementById("outfitCategory").value = out.category;
            document.getElementById("outfitName").value = out.name;
            document.getElementById("outfitFlavor").value = out.flavor;
            document.getElementById("outfitDescription").value = out.description;
            document.getElementById("outfitPrice").value = out.price;
            document.getElementById("outfitType").value = out.type;
            document.getElementById("outfitSluttiness").value = out.sluttiness;
            document.getElementById("outfitComfort").value = out.comfort;
            document.getElementById("outfitDurability").value = out.durability;
            document.getElementById("outfitStyle").value = out.style;
            document.getElementById("braTrue").checked = out.braUnder === "true";
            document.getElementById("pantiesTrue").checked = out.pantiesUnder === "true";
            document.getElementById("outfitBreastSupport").value = out.breastSupport;
            document.querySelector(`input[name="outfitDescType"][value="${out.descType}"]`).checked = true;
            document.getElementById("outfitOnePiece").value = out.onepiece;
            document.getElementById("outfitTop").value = out.top;
            document.getElementById("outfitBottom").value = out.bottom;
            document.getElementById("outfitShoes").value = out.shoes;
            document
            .querySelectorAll('input[name="outfitLocations"]')
            .forEach((loc) => {
              loc.checked = out.locations.includes(loc.value);
            });

            updateOutfitFields()

            // Update form arrays with selected outfit data
            outfitTagsContainer.innerHTML = "";
            colorsContainer.innerHTML = "";
            emphasisContainer.innerHTML = "";
            revealsContainer.innerHTML = "";

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
              colorsContainer.appendChild(tagSpan);
  
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
              emphasisContainer.appendChild(tagSpan);
  
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
              revealsContainer.appendChild(tagSpan);
  
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
  }

  addOutfitButton.addEventListener("click", addOutfit);

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


  // Auto expand tag fields dynamically
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
}


  // Auto expand tag fields for Transactional Doggy
  document.getElementById('blkDoggyTransVid').addEventListener('input', generateTransDoggyFields);

  function generateTransDoggyFields() {
    const container = document.getElementById('containerTransDoggy');
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
}

  
}); // End of DOM

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

function generatePositionsFile() {
  const positions = Array.from(
    document.getElementById("positionsList").children
  ).map((pos) => JSON.parse(pos.dataset.position));

  if (positions.length === 0) {
    alert("No positions to generate.");
    return;
  }

  // JavaScript content string
  let jsContent = "";

  // Start with character initialization
  positions.forEach((position) => {
    const initLine = `init_character_for_position("${position.characterName}");\n`;
    if (!jsContent.includes(initLine)) {
      jsContent += initLine;
    }

    jsContent += `positions("${position.characterName}", "${position.type}", "${position.subtype}", {\n`;
    jsContent += `  "name": "${position.name}",\n`;
    jsContent += `  "flavor": "${position.flavor}",\n`;
    jsContent += `  "athletics": ${position.athletics},\n`;
    jsContent += `  "roughness": ${position.roughness},\n`;
    jsContent += `  "yourPleasure": ${position.yourPleasure},\n`;
    jsContent += `  "pleasureFactor": "${position.pleasureFactor}",\n`;
    jsContent += `  "hisPleasure": ${position.hisPleasure},\n`;
    jsContent += `  "hisSatisfaction": ${position.hisSatisfaction},\n`;
    jsContent += `  "rhythm": ${position.rhythm},\n`;
    jsContent += `  "skill": "${position.skill}",\n`;
    jsContent += `  "skillLevel": ${position.skillLevel},\n`;
    jsContent += `  "locations": [${position.locations
      .map((loc) => `"${loc}"`)
      .join(", ")}],\n`;
    jsContent += `  "tags": [${position.tags
      .map((tag) => `"${tag}"`)
      .join(", ")}]\n`;
    jsContent += `});\n\n`;
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

function generateMetaFile() {
  // Collect input values from the form
  const name = document.getElementById('metaName').value;
  const version = document.getElementById('metaVersion').value;
  const author = document.getElementById('metaAuthor').value;
  const baseGameVersion = document.getElementById('baseGameVersion').value;

  // Required Mods
  const requiredMods = Array.from(document.getElementById('requiredModsContainer').children).map(mod => JSON.parse(mod.dataset.mod));

  // Incompatible Mods
  const incompatibleMods = Array.from(document.getElementById('incompatibleModsContainer').children).map(mod => JSON.parse(mod.dataset.mod));

  // Compatible Mods
  const compatibleMods = Array.from(document.getElementById('compatibleModsContainer').children).map(mod => JSON.parse(mod.dataset.mod));

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

// ----- BLACKED Functions -----

let blkzip = '' // default value for BLACKED Zip var

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
  const version = document.getElementById('blkYourModBLKVersion').value;
  const author = document.getElementById('blkModAuthor').value;
  const baseGameVersion = document.getElementById('blkBaseGameVersion').value;
  const MCFVersion = document.getElementById('blkMCFVersion').value;
  const BLKVersion = document.getElementById('blkModVersion').value;
  const MCFModName = document.getElementById('blkYourModName').value;
  const MCFModVersion = document.getElementById('blkYourModVersion').value;

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

function generateBlackedFolders() {
  gatherBlackedDirectories();
  generateBlackedZip();
}


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
