// Document ready function
document.addEventListener("DOMContentLoaded", function () {
  // Show the 'Position' tab by default
  document.getElementById("PositionTab").style.display = "block";
  document.querySelector(".tablinks").classList.add("active");

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
}

function generatePositionJS() {
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
  link.download = "positions.js";

  // Append link to the document and click it programmatically
  document.body.appendChild(link);
  link.click();

  // Remove the link from the document
  document.body.removeChild(link);
}

function generateOutfitsJS() {
  const outfits = Array.from(
    document.getElementById("outfitsList").children
  ).map((out) => JSON.parse(out.dataset.outfit));

  if (outfits.length === 0) {
    alert("No outfits to generate.");
    return;
  }

  // JavaScript content string
  let jsContent = "";

  // Start with character initialization
  outfits.forEach((outfit) => {
    const initLine = `init_character("${outfit.characterName}");\n`;
    if (!jsContent.includes(initLine)) {
      jsContent += initLine;
    }

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

    jsContent += `  "locations": [${(outfit.locations || [])
      .map((loc) => `"${loc}"`)
      .join(", ")}],\n`;

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
  link.download = "outfits.js";

  // Append link to the document and click it programmatically
  document.body.appendChild(link);
  link.click();

  // Remove the link from the document
  document.body.removeChild(link);
}
