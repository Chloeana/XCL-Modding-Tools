document.addEventListener("DOMContentLoaded", function () {

  // #region ----- Variables -----

  // #region --- Vars - General
  const sliders = document.querySelectorAll('input[type="range"]'); // Refers to all Sliders
  const tabcontent = document.getElementsByClassName("tabcontent");
  const tablinks = document.querySelectorAll(".tablinks");

  // Used in both MCF and BLACKED
  const doggyTagOptions = [
    "grab neck", "grab arms", "grab shoulders", "grab boobs", "grab face",
    "grab head", "grab butt", "grab waist", "pull hair", "mount", "stabilize",
    "spank", "lean against you", "cover mouth", "look back", "leg up", "tits clap",
    "push down", "standing", "tits rub", "big thrusts", "eyes roll", "nelson",
    "balls smacking"
  ]; 
  const locationTagOptions = [
    "bed", "floor", "couch", "desk", "chair", "standing", "counter", "table"
  ];
  const facialTagOptions = [
    "spurt", "spray", "ooze", "cumdump", "runny", "spatter", "big load", "unwilling",
    "jerk", "gag", "nose", "forehead", "cheek", "tongue", "upper lip", "hair",
    "chin", "lips", "tits", "neck", "held", "open mouth", "lying", "close eyes" 
  ];
  const mouthTagOptions = [
    "internal", "external", "direct", "kneeling", "lying", "pulsating", "no mess", 
    "messy", "spit", "held", "in mouth", "tongue", "chin", "clothes", "nose", "lick", "jerk"
  ];
  const bigLoadOptions = ["big load", "cumdump"];
  const unwillingLoadOptions = ["unwilling", "gag"];

  const petNames = ["fucktoy", "bimbo", "slut", "walking fleshlight", "set of holes"];

  const hairRed = [
    "flowing red hair", 
    "fiery red locks", 
    "lush auburn waves", 
    "crimson curls", 
    "bright copper mane", 
    "intense scarlet tresses", 
    "deep cherry waves", 
    "spicy red highlights", 
    "burnished cinnamon strands", 
    "vivid sunset-red curls"
  ];
  
  const hairBlonde = [
    "golden blonde hair", 
    "silky blonde tresses", 
    "platinum blonde curls", 
    "sun-kissed blonde waves", 
    "honey blonde locks", 
    "buttery blonde strands", 
    "creamy gold mane", 
    "pale flaxen hair", 
    "sandy blonde highlights", 
    "shimmering champagne waves"
  ];
  
  const hairBlack = [
    "sleek black hair", 
    "inky black mane", 
    "raven curls", 
    "jet-black waves", 
    "glossy ebony strands", 
    "midnight-black locks", 
    "obsidian-colored hair", 
    "smooth coal-black tresses", 
    "deep onyx curls", 
    "shadowy black waves"
  ];
  
  const hairBrown = [
    "chestnut brown hair", 
    "rich chocolate locks", 
    "warm caramel waves", 
    "deep brown tresses", 
    "soft mocha curls", 
    "honeyed brown strands", 
    "dark coffee-colored mane", 
    "earthy umber hair", 
    "mahogany-toned waves", 
    "velvety sable curls"
  ];
  
  const hairGray = [
    "silvery-gray hair", 
    "ash-gray strands", 
    "steel-gray locks", 
    "frosty silver waves", 
    "stormy gray curls", 
    "smoky silver highlights", 
    "platinum-gray tresses", 
    "pewter-colored hair", 
    "cool slate-gray waves", 
    "soft dove-gray curls"
  ];
  
  const hairColored = [
    "strikingly vivid hair", 
    "boldly dyed locks", 
    "eye-catching alternative waves", 
    "rebellious punk strands", 
    "brightly hued curls", 
    "vibrantly colored mane", 
    "edgy and unnatural hair", 
    "fantastically tinted tresses", 
    "dramatically dyed hair", 
    "wild and vibrant locks"
  ];
  
  const boobsSmall = [
    "perky little breasts",
    "small but perfectly shaped tits",
    "a cute and petite chest",
    "modest bee-stings that fit just right",
    "tiny but perky cleavage",
    "petite and firm boobs",
    "cute little handfuls",
    "small but shapely mounds",
    "dainty and delicate breasts",
    "perky and youthful tits"
  ];
  
  const boobsMedium = [
    "full and round breasts",
    "sexy, well-proportioned knockers",
    "delicious medium-sized melons",
    "perfect handful tits",
    "all-natural C-cups",
    "well-rounded and firm boobs",
    "ample but not overwhelming cleavage",
    "curvy and balanced breasts",
    "a perfect blend of size and perkiness",
    "naturally beautiful bust"
  ];
  
  const boobsBig = [
    "massive, eye-catching breasts",
    "huge, bouncy knockers",
    "gigantic jugs that beg for attention",
    "enormous and luscious tits",
    "massive, heavy melons",
    "a jaw-dropping bust",
    "incredibly full and round boobs",
    "huge and tantalizing breasts",
    "voluptuous, gravity-defying cleavage",
    "a bust that can’t be ignored"
  ];
  
  const buttSlim = [
    "a tight, petite booty",
    "a cute little butt that's just the right size",
    "a slender and perky rear",
    "a small but firm peach",
    "a narrow and smooth behind",
    "a tiny but well-formed bottom",
    "a compact and athletic derriere",
    "a tight and toned butt",
    "a sleek and petite backside",
    "a small but shapely rear"
  ];
  
  const buttBubble = [
    "a perfect, round, bubble butt",
    "a perfectly heart-shaped booty",
    "a juicy, perky behind",
    "a bouncy, round bottom",
    "a firm and peachy rear",
    "a delightfully plump backside",
    "a round and eye-catching butt",
    "a curvaceous and perky bottom",
    "a squeezable, round derriere",
    "a tight but juicy booty"
  ];
  
  const buttBig = [
    "a huge, round booty",
    "a big, jiggling behind",
    "a massive and curvaceous bottom",
    "a thick and juicy backside",
    "an enormous, eye-catching derriere",
    "a voluptuous and full rear",
    "a stunningly large butt",
    "a broad and shapely backside",
    "a booty that just won't quit",
    "a gigantic and attention-grabbing bottom"
  ];
  
  const bodySlim = [
    "a slim and sleek figure",
    "a delicate and petite body",
    "a sensually slender frame",
    "a light and nimble form",
    "an elegantly slim physique",
    "a graceful and thin build",
    "a lean and athletic silhouette",
    "a lightweight and agile figure",
    "a delicate but sexy shape",
    "a svelte and chic body"
  ];
  
  const bodyAvg = [
    "a balanced and curvy body",
    "an average but beautifully proportioned figure",
    "a naturally sexy silhouette",
    "a well-rounded and healthy form",
    "a classic girl-next-door build",
    "a lovely, average-sized figure",
    "a gently curved and inviting shape",
    "a well-proportioned and attractive body",
    "a charmingly everyday physique",
    "a pleasantly ordinary but appealing build"
  ];
  
  const bodyVol = [
    "a voluptuous hourglass shape",
    "a curvy and seductive figure",
    "a full and lush curves",
    "a body that screams sex appeal",
    "a beautifully thick frame",
    "a generously proportioned silhouette",
    "a sensually rounded figure",
    "a figure that’s curvy in all the right places",
    "a juicy and full-figured shape",
    "a strikingly voluptuous physique"
  ];
  
  const raceWhite = [
    "a snow-white beauty",
    "a classic all-American babe",
    "an elegant porcelain-skinned goddess",
    "a fair-skinned enchantress",
    "a soft and delicate ivory beauty",
    "a pale-skinned temptress",
    "a cool and refined white vixen",
    "a charming white girl-next-door",
    "a dazzling fair-skinned babe",
    "a sophisticated white beauty"
  ];
  
  const raceBlack = [
    "an ebony-skinned queen",
    "a caramel-toned goddess",
    "a dark-skinned seductress",
    "a rich chocolate beauty",
    "a stunning ebony enchantress",
    "a deep-toned African princess",
    "a captivating black bombshell",
    "a glowing dark-skinned beauty",
    "a luscious chocolate temptress",
    "a strikingly beautiful black woman"
  ];
  
  const raceLatin = [
    "a spicy Latina bombshell",
    "a sultry caramel beauty",
    "a sexy brown-skinned Latina",
    "an alluring Latina with a curvy body",
    "a sultry Latina temptress",
    "a fiery Latin seductress",
    "a captivating Latina beauty",
    "a hot and spicy Latin queen",
    "a luscious caramel-skinned Latina",
    "a vibrant and curvy Latina bombshell"
  ];
  
  const raceAsian = [
    "an exotic Asian beauty",
    "a petite and seductive Asian doll",
    "an alluring Asian goddess",
    "a delicate porcelain-skinned Asian",
    "a captivating jade-skinned goddess",
    "a dainty but dangerous Asian cutie",
    "a strikingly beautiful Asian woman",
    "a graceful and elegant Asian beauty",
    "a hot and petite Asian charmer",
    "a breathtaking Asian seductress"
  ];
  

  // #endregion --- Vars - General

  // #region --- Vars - MCF ---
  const mcfBaseGameVersion = document.getElementById("mcfBaseGameVersion");
  const mcfYourModVersion = document.getElementById("mcfYourModVersion");
  const mcfModAuthor = document.getElementById("mcfModAuthor");
  const generateMCFFoldersButton = document.getElementById("generateMCFFoldersButton");
  const generateMCFMetaButton = document.getElementById("generateMCFMetaButton");
  const generateMCFFilesOnlyButton = document.getElementById("generateMCFFilesOnlyButton");
  const generateMCFAllFilesButton = document.getElementById("generateMCFAllFilesButton");
  const mcfCharacterName = document.getElementById("mcfCharacterName");
  const mcfCharacterRace = document.getElementById("mcfCharacterRace");
  const mcfCharacterBodyType = document.getElementById("mcfCharacterBodyType");
  const mcfCharacterBreasts = document.getElementById("mcfCharacterBreasts");
  const mcfCharacterButt = document.getElementById("mcfCharacterButt");
  const mcfCharacterHairColor = document.getElementById("mcfCharacterHairColor");
  const mcfCharacterEyeColor = document.getElementById("mcfCharacterEyeColor");
  const mcfCharacterBust = document.getElementById("mcfCharacterBust");
  const mcfCharacterHeightIN = document.getElementById("mcfCharacterHeightIN");
  const mcfCharacterHeightCM = document.getElementById("mcfCharacterHeightCM");
  const mcfCharacterWeightLB = document.getElementById("mcfCharacterWeightLB");
  const mcfCharacterWeightKG = document.getElementById("mcfCharacterWeightKG");
  const mcfDescribeButtInput = document.getElementById("mcfDescribeButtInput");
  const mcfDescribeButtButton = document.getElementById("mcfDescribeButtButton");
  const mcfDescribeButtContainer = document.getElementById("mcfDescribeButtContainer");
  const mcfDescribeBoobsInput = document.getElementById("mcfDescribeBoobsInput");
  const mcfDescribeBoobsButton = document.getElementById("mcfDescribeBoobsButton");
  const mcfDescribeBoobsContainer = document.getElementById("mcfDescribeBoobsContainer");
  const mcfDescribeBodyInput = document.getElementById("mcfDescribeBodyInput");
  const mcfDescribeBodyButton = document.getElementById("mcfDescribeBodyButton");
  const mcfDescribeBodyContainer = document.getElementById("mcfDescribeBodyContainer");
  const mcfDescribeHairColorInput = document.getElementById("mcfDescribeHairColorInput");
  const mcfDescribeHairColorButton = document.getElementById("mcfDescribeHairColorButton");
  const mcfDescribeHairColorContainer = document.getElementById("mcfDescribeHairColorContainer");
  const mcfDescribeHairTextureInput = document.getElementById("mcfDescribeHairTextureInput");
  const mcfDescribeHairTextureButton = document.getElementById("mcfDescribeHairTextureButton");
  const mcfDescribeHairTextureContainer = document.getElementById("mcfDescribeHairTextureContainer");
  const mcfDescribeTransformationInput = document.getElementById("mcfDescribeTransformationInput");
  const mcfDescribeTransformationButton = document.getElementById("mcfDescribeTransformationButton");
  const mcfDescribeTransformationContainer = document.getElementById("mcfDescribeTransformationContainer");
  const mcfHairstylesInput = document.getElementById("mcfHairstylesInput");
  const mcfHairstylesButton = document.getElementById("mcfHairstylesButton");
  const mcfHairstylesContainer = document.getElementById("mcfHairstylesContainer");
  const mcfCharacterTaglineInput = document.getElementById("mcfCharacterTaglineInput");
  const mcfCharacterTaglineButton = document.getElementById("mcfCharacterTaglineButton");
  const mcfCharacterTaglineContainer = document.getElementById("mcfCharacterTaglineContainer");
  const mcfCharacterTagOldInput = document.getElementById("mcfCharacterTagOldInput");
  const mcfCharacterTagOldButton = document.getElementById("mcfCharacterTagOldButton");
  const mcfCharacterTagOldContainer = document.getElementById("mcfCharacterTagOldContainer");
  const mcfCharacterTagNewInput = document.getElementById("mcfCharacterTagNewInput");
  const mcfCharacterTagNewButton = document.getElementById("mcfCharacterTagNewButton");
  const mcfCharacterTagNewContainer = document.getElementById("mcfCharacterTagNewContainer");
  const mcfStepSisShowerTeaseInput = document.getElementById("mcfStepSisShowerTeaseInput");
  const mcfStepSisShowerTeaseButton = document.getElementById("mcfStepSisShowerTeaseButton");
  const mcfStepSisShowerTeaseContainer = document.getElementById("mcfStepSisShowerTeaseContainer");
  const mcfMakeupPath = document.getElementById("mcfMakeupPath");
  const mcfShowerPrefix = document.getElementById("mcfShowerPrefix");
  const mcfShowerVid = document.getElementById("mcfShowerVid");
  const mcfMorningPrefix = document.getElementById("mcfMorningPrefix");
  const mcfMorningVid = document.getElementById("mcfMorningVid");
  const mcfBathroomPrefix = document.getElementById("mcfBathroomPrefix");
  const mcfBathroomVid = document.getElementById("mcfBathroomVid");
  const mcfCleaningPrefix = document.getElementById("mcfCleaningPrefix");
  const mcfCleaningVid = document.getElementById("mcfCleaningVid");
  const mcfMasturbatePath = document.getElementById("mcfMasturbatePath");
  const mcfMasturbatePrefix = document.getElementById("mcfMasturbatePrefix");
  const mcfMasturbateVid = document.getElementById("mcfMasturbateVid");
  const mcfGymType = document.getElementById("mcfGymType");
  const mcfEventShopCommentInput = document.getElementById("mcfEventShopCommentInput");
  const mcfEventShopCommentButton = document.getElementById("mcfEventShopCommentButton");
  const mcfEventShopCommentContainer = document.getElementById("mcfEventShopCommentContainer");
  const mcfEventShopThoughtInput = document.getElementById("mcfEventShopThoughtInput");
  const mcfEventShopThoughtButton = document.getElementById("mcfEventShopThoughtButton");
  const mcfEventShopThoughtContainer = document.getElementById("mcfEventShopThoughtContainer");
  const mcfCatcallBodyInput = document.getElementById("mcfCatcallBodyInput");
  const mcfCatcallBodyButton = document.getElementById("mcfCatcallBodyButton");
  const mcfCatcallBodyContainer = document.getElementById("mcfCatcallBodyContainer");
  const mcfCatcallFaceInput = document.getElementById("mcfCatcallFaceInput");
  const mcfCatcallFaceButton = document.getElementById("mcfCatcallFaceButton");
  const mcfCatcallFaceContainer = document.getElementById("mcfCatcallFaceContainer");
  const mcfCatcallDirtyInput = document.getElementById("mcfCatcallDirtyInput");
  const mcfCatcallDirtyButton = document.getElementById("mcfCatcallDirtyButton");
  const mcfCatcallDirtyContainer = document.getElementById("mcfCatcallDirtyContainer");
  const mcfCatcallRaceInput = document.getElementById("mcfCatcallRaceInput");
  const mcfCatcallRaceButton = document.getElementById("mcfCatcallRaceButton");
  const mcfCatcallRaceContainer = document.getElementById("mcfCatcallRaceContainer");
  const mcfExamineSelfReluctantInput = document.getElementById("mcfExamineSelfReluctantInput");
  const mcfExamineSelfReluctantButton = document.getElementById("mcfExamineSelfReluctantButton");
  const mcfExamineSelfReluctantContainer = document.getElementById("mcfExamineSelfReluctantContainer");
  const mcfExamineSelfConfidentInput = document.getElementById("mcfExamineSelfConfidentInput");
  const mcfExamineSelfConfidentButton = document.getElementById("mcfExamineSelfConfidentButton");
  const mcfExamineSelfConfidentContainer = document.getElementById("mcfExamineSelfConfidentContainer");
  const mcfThoughtClothesInput = document.getElementById("mcfThoughtClothesInput");
  const mcfThoughtClothesButton = document.getElementById("mcfThoughtClothesButton");
  const mcfThoughtClothesContainer = document.getElementById("mcfThoughtClothesContainer");
  const mcfPregnancyWeeksInput = document.getElementById("mcfPregnancyWeeksInput");
  const mcfPregnancyWeeksButton = document.getElementById("mcfPregnancyWeeksButton");
  const mcfPregnancyWeeksContainer = document.getElementById("mcfPregnancyWeeksContainer");
  const mcfPregnancy1stCheckInput = document.getElementById("mcfPregnancy1stCheckInput");
  const mcfPregnancy1stCheckButton = document.getElementById("mcfPregnancy1stCheckButton");
  const mcfPregnancy1stCheckContainer = document.getElementById("mcfPregnancy1stCheckContainer");
  const mcfPregnancy2ndCheckInput = document.getElementById("mcfPregnancy2ndCheckInput");
  const mcfPregnancy2ndCheckButton = document.getElementById("mcfPregnancy2ndCheckButton");
  const mcfPregnancy2ndCheckContainer = document.getElementById("mcfPregnancy2ndCheckContainer");
  const mcfPregnancyPrenatalInput = document.getElementById("mcfPregnancyPrenatalInput");
  const mcfPregnancyPrenatalButton = document.getElementById("mcfPregnancyPrenatalButton");
  const mcfPregnancyPrenatalContainer = document.getElementById("mcfPregnancyPrenatalContainer");
  const mcfCallFatherShowInput = document.getElementById("mcfCallFatherShowInput");
  const mcfCallFatherShowButton = document.getElementById("mcfCallFatherShowButton");
  const mcfCallFatherShowContainer = document.getElementById("mcfCallFatherShowContainer");
  const mcfCallFatherBJInput = document.getElementById("mcfCallFatherBJInput");
  const mcfCallFatherBJButton = document.getElementById("mcfCallFatherBJButton");
  const mcfCallFatherBJContainer = document.getElementById("mcfCallFatherBJContainer");
  const mcfBruceTFInput = document.getElementById("mcfBruceTFInput");
  const mcfBruceTFButton = document.getElementById("mcfBruceTFButton");
  const mcfBruceTFContainer = document.getElementById("mcfBruceTFContainer");
  const mcfDoggyPath = document.getElementById("mcfDoggyPath");
  const mcfDoggyVid = document.getElementById("mcfDoggyVid");
  const mcfDoggyVidPrefix = document.getElementById("mcfDoggyVidPrefix");
  const mcfDoggyInsertImg = document.getElementById("mcfDoggyInsertImg");
  const mcfDoggyInsertImgPrefix = document.getElementById("mcfDoggyInsertImgPrefix");
  const mcfDoggyMoanImg = document.getElementById("mcfDoggyMoanImg");
  const mcfDoggyMoanImgPrefix = document.getElementById("mcfDoggyMoanImgPrefix");
  const mcfDoggyContainer = document.getElementById("mcfDoggyContainer");
  const mcfBJPath = document.getElementById("mcfBJPath");
  const mcfBJVid = document.getElementById("mcfBJVid");
  const mcfBJVidPrefix = document.getElementById("mcfBJVidPrefix");
  const mcfFacefuckPath = document.getElementById("mcfFacefuckPath");
  const mcfFacefuckVid = document.getElementById("mcfFacefuckVid");
  const mcfFacefuckVidPrefix = document.getElementById("mcfFacefuckVidPrefix");
  const mcfFacefuckContainer = document.getElementById("mcfFacefuckContainer");
  const mcfOralPath = document.getElementById("mcfOralPath");
  const mcfOralVid = document.getElementById("mcfOralVid");
  const mcfOralVidPrefix = document.getElementById("mcfOralVidPrefix");
  const mcfOralContainer = document.getElementById("mcfOralContainer");
  const mcfCumPath = document.getElementById("mcfCumPath");
  const mcfCreampieVid = document.getElementById("mcfCreampieVid");
  const mcfCreampieVidPrefix = document.getElementById("mcfCreampieVidPrefix");
  const mcfFacialVid = document.getElementById("mcfFacialVid");
  const mcfFacialVidPrefix = document.getElementById("mcfFacialVidPrefix");
  const mcfMouthVid = document.getElementById("mcfMouthVid");
  const mcfMouthVidPrefix = document.getElementById("mcfMouthVidPrefix");
  const mcfFacialContainer = document.getElementById("mcfFacialContainer");
  const mcfMouthContainer = document.getElementById("mcfMouthContainer");
  const mcfPullOutBodyVid = document.getElementById("mcfPullOutBodyVid");
  const mcfPullOutBodyVidPrefix = document.getElementById("mcfPullOutBodyVidPrefix");
  const mcfPullOutBodyContainer = document.getElementById("mcfPullOutBodyContainer");
  const mcfPullOutButtVid = document.getElementById("mcfPullOutButtVid");
  const mcfPullOutButtVidPrefix = document.getElementById("mcfPullOutButtVidPrefix");
  const mcfPullOutButtContainer = document.getElementById("mcfPullOutButtContainer");
  const mcfPullOutTitsVid = document.getElementById("mcfPullOutTitsVid");
  const mcfPullOutTitsVidPrefix = document.getElementById("mcfPullOutTitsVidPrefix");
  const mcfPullOutTitsContainer = document.getElementById("mcfPullOutTitsContainer");
  const mcfSEMasturbate = document.getElementById("mcfSEMasturbate");
  const mcfSECumMoan = document.getElementById("mcfSECumMoan");
  const mcfSEFondle = document.getElementById("mcfSEFondle");
  const mcfSEOrgasmSolo = document.getElementById("mcfSEOrgasmSolo");
  const mcfSELicking = document.getElementById("mcfSELicking");
  const mcfSEOrgasm = document.getElementById("mcfSEOrgasm");
  const mcfSEBJ = document.getElementById("mcfSEBJ");
  const mcfSEBJRough = document.getElementById("mcfSEBJRough");
  const mcfSEDoggy = document.getElementById("mcfSEDoggy");
  const mcfSEMissionary = document.getElementById("mcfSEMissionary");
  const mcfSERiding = document.getElementById("mcfSERiding");
  const mcfSEPenetration = document.getElementById("mcfSEPenetration");
  const mcfSECumDynamic = document.getElementById("mcfSECumDynamic");
  const mcfSECumPullOut = document.getElementById("mcfSECumPullOut");
  const mcfSECumCreampie = document.getElementById("mcfSECumCreampie");
  const mcfSECumTits = document.getElementById("mcfSECumTits");
  const mcfSECumMouth = document.getElementById("mcfSECumMouth");
  const mcfSECumFace = document.getElementById("mcfSECumFace");
  const mcfInsertTiming1 = document.getElementById("mcfInsertTiming1");
  const mcfInsertTiming2 = document.getElementById("mcfInsertTiming2");
  const mcfInsertTiming3 = document.getElementById("mcfInsertTiming3");
  const mcfPenetrationTimingContainer = document.getElementById("mcfPenetrationTimingContainer");

  // Tooltips
  const mcfDoggyHelp = document.getElementById("mcfDoggyHelp");
  const mcfBJHelp = document.getElementById("mcfBJHelp");
  const mcfFacefuckHelp = document.getElementById("mcfFacefuckHelp");
  const mcfOralHelp = document.getElementById("mcfOralHelp");
  const mcfCumHelp = document.getElementById("mcfCumHelp");
  const mcfPullOutHelp = document.getElementById("mcfPullOutHelp");
  const mcfSoundHelp = document.getElementById("mcfSoundHelp");
  const mcfCatcallHelp = document.getElementById("mcfCatcallHelp");
  const mcfForeplayHelp = document.getElementById("mcfForeplayHelp");

  // Example Buttons
  const exampleDescribeButtButton = document.getElementById("exampleDescribeButtButton");
  const exampleDescribeBodyButton = document.getElementById("exampleDescribeBodyButton");
  const exampleDescribeBoobsButton = document.getElementById("exampleDescribeBoobsButton");
  const exampleDescribeTransformationButton = document.getElementById("exampleDescribeTransformationButton");
  const exampleExamineSelfReluctantButton = document.getElementById("exampleExamineSelfReluctantButton");
  const exampleExamineSelfConfidentButton = document.getElementById("exampleExamineSelfConfidentButton");
  const exampleThoughtClothesButton = document.getElementById("exampleThoughtClothesButton");
  const exampleStepSisShowerTeaseButton = document.getElementById("exampleStepSisShowerTeaseButton");
  const exampleCatcallBodyButton = document.getElementById("exampleCatcallBodyButton");
  const exampleCatcallFaceButton = document.getElementById("exampleCatcallFaceButton");
  const exampleCatcallDirtyButton = document.getElementById("exampleCatcallDirtyButton");
  const exampleCatcallRaceButton = document.getElementById("exampleCatcallRaceButton");
  const exampleEventShopCommentButton = document.getElementById("exampleEventShopCommentButton");
  const exampleEventShopThoughtButton = document.getElementById("exampleEventShopThoughtButton");
  const exampleTaglineButton = document.getElementById("exampleTaglineButton");
  const exampleTagOldButton = document.getElementById("exampleTagOldButton");
  const exampleTagNewButton = document.getElementById("exampleTagNewButton");
  const examplePregnancy1stCheckButton = document.getElementById("examplePregnancy1stCheckButton");
  const examplePregnancy2ndCheckButton = document.getElementById("examplePregnancy2ndCheckButton");
  const examplePregnancyPrenatalButton = document.getElementById("examplePregnancyPrenatalButton");
  const exampleCallFatherShowButton = document.getElementById("exampleCallFatherShowButton");
  const exampleCallFatherBJButton = document.getElementById("exampleCallFatherBJButton");
  const exampleHairColorButton = document.getElementById("exampleHairColorButton");
  const exampleHairTextureButton = document.getElementById("exampleHairTextureButton");
  const exampleBruceTFButton = document.getElementById("exampleBruceTFButton");

  // Remove Buttons
  const clearDescribeButt = document.getElementById("clearDescribeButt");
  const clearDescribeBoobs = document.getElementById("clearDescribeBoobs");
  const clearDescribeBody = document.getElementById("clearDescribeBody");
  const clearDescribeTransformation = document.getElementById("clearDescribeTransformation");
  const clearThoughtClothes = document.getElementById("clearThoughtClothes");
  const clearExamineSelfReluctant = document.getElementById("clearExamineSelfReluctant");
  const clearExamineSelfConfident = document.getElementById("clearExamineSelfConfident");
  const clearStepSisShowerTease = document.getElementById("clearStepSisShowerTease");
  const clearEventShopComment = document.getElementById("clearEventShopComment")
  const clearEventShopThought = document.getElementById("clearEventShopThought")
  const clearCatcallBody = document.getElementById("clearCatcallBody");
  const clearCatcallFace = document.getElementById("clearCatcallFace");
  const clearCatcallDirty = document.getElementById("clearCatcallDirty");
  const clearCatcallRace = document.getElementById("clearCatcallRace");
  const clearDescribeHairColor = document.getElementById("clearDescribeHairColor");
  const clearDescribeHairTexture = document.getElementById("clearDescribeHairTexture");
  const clearHairstyles = document.getElementById("clearHairstyles");
  const clearPregnancyWeeks = document.getElementById("clearPregnancyWeeks");
  const clearPregnancy1stCheck = document.getElementById("clearPregnancy1stCheck");
  const clearPregnancy2ndCheck = document.getElementById("clearPregnancy2ndCheck");
  const clearPregnancyPrenatal = document.getElementById("clearPregnancyPrenatal");
  const clearCallFatherShow = document.getElementById("clearCallFatherShow");
  const clearCallFatherBJ = document.getElementById("clearCallFatherBJ");
  const clearTagline = document.getElementById("clearTagline");
  const clearTagOld = document.getElementById("clearTagOld");
  const clearTagNew = document.getElementById("clearTagNew");
  const clearBruceTF = document.getElementById("clearBruceTF");
  
  // Example suggestions
  const exampleDescribeButtSlim = [
    "peachy", "slender", "dump-truck", "juicy", "cute", "tight", 
    "perky", "premi-*yum*", "fantASStic", "nice", "beautiful", 
    "delicate", "petite", "sleek", "smooth", "lean", "compact", 
    "grabbable", "toned", "trim", "firm", "dainty"
  ];

  const exampleDescribeButtBubble = [
    "round", "peachy", "fat", "heart-shaped", "dump-truck", "juicy", 
    "bimbo-sized", "cute", "tight", "perky", "premi-*yum*", "fantASStic", 
    "nice", "beautiful", "plump", "squeezable", "bouncy", "curvy", 
    "shapely", "alluring", "cushiony", "voluptuous", "mouthwatering"
  ];

  const exampleDescribeButtBig = [
    "big", "round", "peachy", "thick", "fat", "jiggling", "juicy", 
    "bimbo-sized", "mega-size", "premi-*yum*", "fantASStic", "nice", 
    "humongous", "beautiful", "massive", "lush", "hefty", "overflowing", 
    "gigantic", "sumptuous", "immense", "heaving", "plush", "cushion-like"
  ];

  const exampleDescribeBodySlim = [
    "sensual", "slender", "womanly", "feminine", "breedable", "fertile", 
    "juicy", "petite", "sexy", "exotic", "pleasing", "elegant", 
    "picture-perfect", "tight", "oversexed", "hypersexual", "hyper-feminine", 
    "all-natural", "perky", "svelte", "lithe", "graceful", "delicate", 
    "toned", "willowy", "nimble", "light-framed", "trim", "supple"
  ];

  const exampleDescribeBodyAvg = [
    "sensual", "womanly", "feminine", "breedable", "bouncy", 
    "jiggly", "fertile", "juicy", "sexy", "exotic", "pleasing", 
    "bottom-heavy", "elegant", "picture-perfect", "tight", "hourglass-shaped", 
    "oversexed", "hypersexual", "hyper-feminine", "all-natural", "busty", 
    "perky", "well-proportioned", "balanced", "shapely", "classic beauty", 
    "soft curves", "inviting", "kissable", "full-figured", "lush"
  ];

  const exampleDescribeBodyVol = [
    "sensual", "womanly", "feminine", "breedable", "fully-stacked", 
    "bouncy", "jiggly", "curvy", "voluptuous", "fertile", "curvaceous", 
    "juicy", "sexy", "exotic", "pleasing", "bottom-heavy", "elegant", 
    "picture-perfect", "hourglass-shaped", "oversexed", "hypersexual", 
    "hyper-feminine", "all-natural", "busty", "perky", "ample", 
    "generously-proportioned", "thick", "lush", "full-bodied", "eye-catching", 
    "luxuriant", "opulent", "seductive", "fleshy", "sumptuous"
  ];

  const exampleDescribeBoobsSmall = [
    "bee stings", "itty-bitties", "pancakes", 
    "mosquito bites", "handfuls", "cuties", "tiny tits", "perky nubs", 
    "little cherries", "petite breasts", "small handfuls", "adorable buds", 
    "cute peaks", "mini-mounds", "sweet lumps", "cute pair", "neat nubs"
  ];

const exampleDescribeBoobsMedium = [
    "knockers", "mounds", "melons", "perky tits", 
    "bouncy pair", "rounders", "handfuls", "soft pillows", "lovely peaks", 
    "full breasts", "plush tits", "moderate handfuls", "lush orbs", 
    "heavenly pair", "ripe melons", "tempting swells", "perfect handfuls", 
    "squeezeable pair"
  ];

  const exampleDescribeBoobsBig = [
    "juggs", "udders", "bazongas", "cow-tits", 
    "massive milkers", "huge honkers", "overfilled balloons", "melons", 
    "pillows", "huge rack", "shelf-busting breasts", "giant orbs", 
    "swinging pair", "overflowing globes", "gargantuan mounds", 
    "soft mountains", "bouncing boulders", "heavy hooters"
  ];

  const exampleDescribeTransformation = ["Wow, you're a stunner now...",
    "Fuck... you look like such a horny, depraved slut.",
    "You run your hands over your breedable body.",
    "Is it over?",
    "You feel a throbbing emptiness between your legs",
    "Your body feels so different - you can feel a huge amount of weight and fat redistributed into your breasts and ass.",
    "You feel a LOT lighter.",
    "Your proportions have changed so dramatically, your male clothes hang off you suggestively.",
    "You look like some kind of perfect bimbo - a girl who every guy would fall for.",
    "A perfect hourglass figure, this might get you into some trouble...",
    "You can't help but stare, your new curves scream for attention.",
    "A grin spreads across your face as you admire your slutty new reflection.",
    "Your fingers instinctively trace the new lines of your body, lingering on your sensitive breasts.",
    "You look so soft and inviting, your body practically begging to be touched.",
    "Damn... it's like you're built to seduce.",
    "Your eyes wander down to your full, rounded hips—so different, but so right.",
    "You twist and turn, catching sight of the way your ass jiggles with each movement.",
    "Your reflection is all soft lips and curves, radiating a raw, undeniable sexuality.",
    "You look like every man's wet dream, a picture of erotic perfection.",
    "You barely recognize yourself, but the throbbing heat between your legs tells you this new body is *hungry*.",
    "There's no denying it—you look like a perfect plaything now.",
    "You run your hands over your curves, every inch feels like it's begging for attention.",
    "Your hips sway with every step, it's impossible not to move sensually in this new body.",
    "You catch sight of your plush lips, now so kissable and inviting.",
    "God, you look like the kind of girl who knows exactly how to make a guy beg.",
    "Your chest heaves, full and heavy—it's almost hard to look away from your own cleavage.",
    "You feel... sexy. Unapologetically, irresistibly sexy.",
    "You can't believe how delicate your hands look now, yet they look perfect for teasing and pleasing.",
    "You're a bombshell now, the kind of girl who turns heads and leaves them wanting more.",
    "Your body looks sinful—every curve, every inch is temptation incarnate.",
    "You tilt your head and wink at your reflection... and damn, you look *good* doing it.",
    "Your gaze locks onto your round, luscious ass—built to be admired, touched, and worshipped.",
    "Everything about you feels... erotic. Your new form radiates pleasure in ways you never imagined.",
    "There's a mischievous glint in your eye now, like your body knows all the naughty things it's capable of."
  ];

  const exampleExamineSelfReluctant = [
    "You press your thighs together, feeling the slick emptiness, and the distinct absence of something that once hung between them.",
    "Running your fingers along the curve of your waist, you can't deny the sensuality of your new hourglass figure, but the sensation makes you blush.",
    "Your once broad and barrel-shaped ribcage has become narrower and more delicate, making you feel a bit more fragile than before.",
    "Your nipples are so sensitive, brushing against your arms makes you shudder.",
    "Once full of definition, your arms now look beautifully toned in a feminine way, matching up with your hourglass body.",
    "You look down at your pussy, your cheeks burning. It still feels weird to see it, to know it's yours.",
    "Your thick lips seem to pout naturally, as if your face was just made for it.",
    "Your balance feels off, the extra weight on your chest making you lean back a bit.",
    "Your voice is so much higher now - it sounds sultry, sexy but kind of vacuous.",
    "Every time you see your reflection, your sexy face surprises you.",
    "You catch a glimpse of your reflection, half expecting to see your old self, but instead, there's this stunningly feminine stranger staring back.",
    "Your hips are so much wider than you're used to; they sway naturally when you move, and it's unsettling how easy it feels.",
    "You reach up to touch your collarbone—it's so much more prominent now, accentuating the delicate lines of your new neckline.",
    "Your breasts are undeniably there, soft and heavy, and even if you try to ignore them, their presence is impossible to deny.",
    "You can't believe how soft your skin feels, almost like it's begging to be touched.",
    "You turn slightly, catching the curve of your backside in the mirror. It's...rounder than you ever imagined it could be.",
    "You tilt your head and bite your lip out of nervous habit, only to realize how sexy the gesture looks with your new features.",
    "Brushing a lock of hair behind your ear, you can't help but feel strange—it's so much longer and thicker than anything you ever had before.",
    "You lean in closer to the mirror, running a hand down your cheek. Your skin looks so smooth, almost glowing.",
    "The weight of your breasts feels unfamiliar, but you can't help but notice how they create an inviting cleavage.",
    "Your legs seem endless now, long and shapely, and you feel a strange mix of pride and embarrassment seeing them.",
    "Your eyes, once familiar, now look bigger and more innocent—yet there's a sensuality in them that you can't quite place.",
    "You wrap your arms around yourself, feeling your own curves—it's a confusing mix of vulnerability and strange confidence.",
    "Your waist is so much slimmer, accentuating the fullness of your hips, and you have to admit... it's a striking silhouette.",
    "You catch yourself standing with one hip cocked to the side—a pose you never would have struck before—and the realization makes your face flush.",
    "You run a hand through your hair, feeling its volume and weight... and for a moment, you almost like it."
  ];
  
  const exampleExamineSelfConfident = [
  "You pucker and pout in the mirror, feeling playful and flirty — you're gorgeous, and you know it.",
  "Feeling your pussy between your legs is no longer a shock, but something comforting, a constant reminder of your femininity.",
  "Admiring your sensual curves and captivating eyes in the mirror, you enjoy the newfound confidence that comes from embracing your body.",
  "Glancing at your reflection, you strike a pose and wink at your gorgeous female form, finding excitement and happiness in embracing your new body.",
  "You're used to your ass sticking out, it makes you feel feminine and sexy.",
  "You love how your thighs rub together when you walk, it's a sensual reminder of your feminine body.",
  "Feeling your kitty between your legs is no longer a shock, but something comforting, a constant reminder of your femininity.",
  "You're so proud of your hourglass figure - you turn heads wherever you go.",
  "Running a delicate finger over the smooth expanse of bare skin under the hem of your skirt reminds you how much you love being a woman.",
  "You feel a sense of pride as you catch a glimpse of your shapely, rounded ass in the mirror, knowing that your stepdad, stepsister, and your male friend Hollis see you as the confident woman you've become.",
  "You run your fingers through your hair, flipping it over your shoulder with a smile — it feels like such a natural, feminine gesture now.",
  "You love how effortlessly your hips sway with each step, drawing attention without even trying.",
  "You trace the curve of your cleavage with a finger, appreciating how your body fills out a tight top so perfectly.",
  "Your makeup skills have gotten better, and you admire the way your full lips look with a coat of gloss — the perfect finishing touch to your feminine look.",
  "You find yourself wearing shorter skirts and tighter clothes, enjoying how they hug every curve and show off the confidence you've gained.",
  "Your fingers slide over your smooth, flat stomach, appreciating how your feminine form has become second nature to you.",
  "Looking in the mirror, you smirk at how naturally flirtatious your expressions have become — it's as if you've always known how to tease with a look.",
  "The swing of your hips feels like second nature now, and you love the way it accentuates your curvy figure.",
  "You revel in the way your clothes fit — every dress, skirt, and top now chosen to flaunt your assets and highlight your femininity.",
  "The weight of your breasts feels right, comfortable, and you're not shy about showing them off with a low-cut blouse anymore.",
  "You turn around to get a look at your ass, smiling at the way it fills out your jeans — you've definitely learned to appreciate it.",
  "You run a hand along your thigh, enjoying the softness of your skin and the way your muscles feel firm yet feminine beneath.",
  "You smile at your reflection, knowing you've truly become the woman everyone envies — and the confidence feels incredible.",
  "You run a finger over your pouty lips, enjoying how they look full and kissable, even without makeup.",
  "You can’t help but admire your own hourglass silhouette, loving the feminine power it makes you feel.",
  "You twirl in front of the mirror, watching your skirt flare out and settle perfectly around your hips — it makes you feel irresistibly girly.",
  "Your lingerie drawer is full of lace and satin now, and you love the thrill of picking out something sexy to wear underneath your clothes."
  ];

  const exampleThoughtClothes = [
    "are not made to flatter your female body shape.",
    "are pretty tight around your $butt.",
    "don't exactly compliment your frame.",
    "fit you a bit awkwardly.",
    "look a bit comical on your female body.",
    "feel way too big for you.",
    "seem to sag in all the wrong places.",
    "cling uncomfortably to your new curves, emphasizing your chest.",
    "make you look like you're playing dress-up in someone else's clothes.",
    "are loose in some places and embarrassingly tight in others.",
    "hang awkwardly off your more delicate shoulders.",
    "make you feel self-conscious, as they squeeze your chest uncomfortably.",
    "are stretched tightly across your hips, leaving little to the imagination.",
    "feel strange, pressing against curves you didn't have before.",
    "ride up over your thighs, pulling in ways they never did before.",
    "don't do anything to hide the unmistakably feminine silhouette of your body.",
    "seem to highlight how different your body feels now.",
    "feel bulky and ill-fitting, almost making you look like a child playing dress-up.",
    "squeeze in some areas, while hanging loose in others — it's almost embarrassing.",
    "feel rough against your softer, more sensitive skin.",
    "pull tight around your bust, reminding you how much has changed.",
    "are loose around the waist, but tight around your chest and hips.",
    "seem to make your feminine body stand out even more with how badly they fit.",
    "drape awkwardly over your hourglass shape, unable to hide your new curves.",
    "are uncomfortably tight in unexpected places, pressing against unfamiliar softness.",
    "make you feel strangely exposed, even though you're fully clothed.",
    "highlight just how much you've changed — they barely fit anymore.",
    "bunch up around your curves, making you more aware of your new shape.",
    "emphasize just how much weight you've lost in some areas, but gained in others.",
    "hang off you loosely in places they once fit snugly, and stretch tight where they never did before."
  ];

  const exampleStepSisShowerTease = [
    "That girl-next-door body could make a lotta guys happy, just sayin'...",
    "We totally look like sisters now, haha.",
    "Them's some dick-suckin' lips, haha.",
    "You're making me jealous...",
    "All the guys are gonna wanna bang you, lol.",
    "You look like a slut! Hahaha.",
    "Wow, those curves really suit you... we should go to the mall later and get outfits to show 'em off!",
    "Guess I can’t call you 'bro' anymore, huh? More like 'babe'!",
    "Did you always have that... ass? Because I don't remember it looking like that!",
    "I never thought I'd say this, but you might actually pull off the whole 'femme fatale' look.",
    "Just wait until the guys at work see you now. They won't know what hit 'em!",
    "You’re giving me some serious competition here, should I be worried?",
    "You got all that body from a pill? Damn, is there one that can make my tits grow?",
    "Those thighs could crush a watermelon, but I bet they’d feel good wrapped around a guy’s head.",
    "Looks like you've been practicing your 'feminine wiles' without me knowing, huh?",
    "Hope you know how to handle all that attention you're gonna get!"
  ];

  const exampleCatcallBody = [
    "Damn girl, I love your body. Everything about you... mmm.",
    "$greeting that pornstar bod is driving me crazy.",
    "$greeting everything about you is perfect, that body, that face, mmm.",
    "$greeting your body is practically made for sex.",
    "$greeting I love fucking girls with your body type.",
    "$greeting you really got a beautiful body.",
    "$greeting those curves are something else... can I get a closer look?",
    "I can't help but notice how amazing your body looks in that outfit.",
    "$greeting your hips could make a straight guy question his preferences.",
    "Is it just me, or is your body begging for some attention tonight?",
    "$greeting that silhouette is to die for. I can't stop staring.",
    "Your body is like a work of art, and I'm here to admire it.",
    "$greeting I can tell you work hard for that body; it's impressive!",
    "I don't mean to be forward, but your figure is absolutely stunning.",
    "$greeting I bet you turn heads everywhere you go, huh?",
    "$greeting that ass should come with a warning label—too hot to handle!",
  ];

  const exampleCatcallFace = [
    "You're so freaking gorgeous! Can I have your number?",
    "$greeting your eyes are fucking *orgasmic.*",
    "You look like you're a lot of fun.",
    "$greeting you're such a genuine beauty.",
    "$greeting you're such a goddess!",
    "With looks like yours, you could easily be the sugar baby of a billionaire.",
    "$greeting those lips are just begging to be kissed.",
    "I can't believe how stunning you are; it's like you walked straight out of a dream.",
    "$greeting your smile could light up the darkest room.",
    "You have the kind of beauty that makes people stop in their tracks.",
    "$greeting I've seen a lot of pretty faces, but yours is something special.",
    "That flawless skin of yours should be illegal; it's mesmerizing!",
    "$greeting I’d get lost in those eyes any day.",
    "You must be a magician because every time I look at you, everyone else disappears.",
    "$greeting your beauty is absolutely captivating.",
    "Are you a model? Because you look like you belong on the cover of a magazine.",
  ];

  const exampleCatcallDirty = [
    "I would dive in that pussy so deep I'd need scuba gear.",
    "$greeting you're so sexy. Any guy would be so lucky to have you sit on his face.",
    "$greeting I'd love to cum all over your cute, pretty face.",
    "My god, the things I would do to *you*.",
    "Would you like to help drain my balls?",
    "Girls like you need to be *spanked*. Just saying.",
    "$greeting I hope you brought soap, we're gonna need it after all the dirty things I'm gonna do to you.",
    "If you keep looking at me like that, I might just have to take you home and fuck your brains out.",
    "$greeting I’d love to find out just how many positions we can try tonight.",
    "You look like you’d be a lot of fun in the bedroom... wanna test that theory?",
    "$greeting do you believe in love at first sight, or should I pull my cock out and walk by again?",
    "I can’t help but imagine how good you’d look with your legs wrapped around me.",
    "You have that freaky look in your eyes that says you’re down for anything. Am I right?",
    "$greeting I could get lost in that body... but I’d rather get lost inside it.",
    "You’d be the perfect distraction for a long, wild night.",
  ];

  const exampleCatcallRace = [
    "I'd love to see your _race pussy stretched around this dick.",
    "$greeting I don't typically go for _race girls... but DAYUM.",
    "With a body and face like yours! Fuck. We'd make some cute biracial babies.",
    "$greeting I've always had a thing for _race girls!",
    "$greeting you're so hot for a _race girl. Goddamn.",
    "I don't normally go for _race girls, but you're HOT!",
    "$greeting there's just something about a _race girl that drives me wild.",
    "That _race body of yours is like a magnet for trouble... and I’m feeling *very* attracted.",
    "$greeting you know, they say _race girls are the wildest in bed. Care to prove them right?",
    "I’ve always wanted to see how a _race girl would handle someone like me.",
    "$greeting damn, you’re the finest _race girl I’ve ever seen. Period.",
    "They say _race girls have the softest lips... mind if I find out?",
    "I don’t usually chase after _race girls, but you’re making me reconsider my type.",
    "$greeting I bet you know exactly how to use that _race body of yours.",
    "I heard _race girls have the best curves... and you’re definitely proving that true!",
  ];

  const exampleEventShopComment = [
    "Whoa, that pill did *not* disappoint! Look at you, a total knockout.",
    "Holy hell, you went from zero to a hundred real quick. Those tits are insane!",
    "Damn, you were just a regular guy, but now... you're a smoking hot babe. Come here, gorgeous.",
    "Fuck, that transformation was wild. You’ve got curves in all the right places now.",
    "Damn, look at those Dick Sucking Lips. They look even better on you now, c'mere baby.",
    "Wow, from a guy to a certified hottie... those hips were made to drive men wild.",
    "I knew X-Change was good, but I didn’t think you’d turn out *this* good. Time to keep your promise.",
    "Holy shit! Those TITS weren’t there a second ago. You look good enough to eat.",
    "Damn, you went from being just another dude to a *total babe.* That face is perfection.",
    "Fuck me, that ass is out of this world. Let’s not waste any more time, sweetheart.",
    "Now that's what I call a *real* transformation... now down to the business, on your knees.",
    "Look at you, a proper little sex kitten now... and I'm not about to let you off the hook.",
    "Those curves weren't there a second ago... and now they're impossible to ignore.",
    "You went from an average Joe to a bombshell babe... I bet you’ll know exactly what to do with that mouth.",
    "Damn, I wasn't expecting *that* transformation. Alright, let’s get to the fun part, shall we?",
  ];

  const exampleEventShopThought = [
    "*What a pig...*",
    "*Geez, he's a jerk.*",
    "*What an asshole!*",
    "*What a tool.*",
    "*What a piece of shit! He's not wrong though... and that thing looks massive!*",
    "*Ugh that's really rude. Why would he say something like that?*",
    "*Is he seriously saying that out loud?*",
    "*Wow, way to make a girl feel cheap...*",
    "*Does he seriously think I'd go for that?*",
    "*Ugh, what a creep... but why is my body reacting this way?*",
    "*God, he's disgusting... but he's not entirely wrong.*",
    "*He’s such a sleaze... and yet, there's a thrill in his gaze.*",
    "*I can't believe he just said that. What a douchebag!*",
    "*Ugh, this guy has no shame... but I can't deny he’s got a point.*",
    "*I knew he'd be bad, but not this bad... Why does this excite me?*",
  ];

  const examplePregnancy1stCheck = [
    "You're not that far along yet... your belly is still mostly flat... for now.",
    "You stare at yourself in the mirror, barely noticing any difference, but your breasts feel fuller, and your body is already starting to feel different.",
    "Your jeans fit a little snugger than usual, and you can't help but wonder if it's just in your head.",
    "There isn't a visible bump yet, but you catch yourself feeling a little more bloated, and your nipples seem more sensitive.",
    "You touch your belly, feeling a strange sense of anticipation, but for now, you still look like your old self.",
    "Your stomach looks the same, but you've noticed your appetite shifting, and your emotions feel a little closer to the surface.",
    "You press down gently on your lower abdomen, wondering if you’re imagining the slight firmness beneath the surface.",
    "It’s only been a few weeks, but you already feel a strange heaviness in your lower belly that wasn't there before.",
    "Your breasts feel heavier, and you've been feeling tired more often, but there’s nothing visible on your stomach yet.",
    "You can’t see anything yet, but the soreness in your chest and the slight nausea in the mornings are hard to ignore."
  ];

  const examplePregnancy2ndCheck = [
    "You can't deny it, you're definitely starting to show. It feels so weird... the top of your stomach is hard, and the bottom is squishy.",
    "There's no hiding it now—your belly has a small but noticeable curve. You find yourself running your hand over it absentmindedly.",
    "Your clothes are getting tight around the waist, and you can feel a subtle firmness beneath your skin when you press down gently.",
    "You've got a small bump, not enough for anyone else to notice yet, but you definitely feel it.",
    "You look at your reflection, feeling both excited and uneasy as the changes become more apparent.",
    "Your lower belly has taken on a distinct roundness, a visible sign of the life growing inside you.",
    "Your favorite jeans refuse to button, forcing you to wear looser clothing that hides the early signs.",
    "You notice a stranger in the mirror—a slight roundness forming just below your navel, making everything feel more real.",
    "Your breasts are heavier, and your stomach is starting to protrude, making it impossible to ignore the physical changes.",
    "A gentle, almost unnoticeable bump has started to form, but you can feel it every time you touch your abdomen."
  ];

  const examplePregnancyPrenatal = [
    "You're already quite visibly pregnant. You have difficulty imagining how you'll look if you continue with the pregnancy.",
    "The doctor measures your belly, noting that you're right on track. You can't help but stare at the ultrasound, seeing the undeniable proof of your pregnancy.",
    "Your bump is obvious now, and the doctor reassures you that everything looks normal, but you can't help feeling overwhelmed as the reality sets in.",
    "Your clothes have been replaced with maternity-friendly outfits, and seeing your reflection in the clinic's mirror sends a shiver down your spine.",
    "The prenatal visit makes everything feel more real, and the doctor’s calm reassurance contrasts with your racing thoughts as you watch the monitor.",
    "The medical exam confirms what your body has been telling you—you are unmistakably pregnant, and there's no going back.",
    "You watch the ultrasound screen with a mix of wonder and fear as the doctor points out the small but undeniable movements.",
    "The sound of the heartbeat echoes in your mind as you stare at the gentle swell of your stomach, realizing just how much your life has changed.",
    "Your body is no longer just your own, and the growing bump makes it clear that you are well into the first trimester.",
    "The doctor smiles as they measure your expanding belly, while you find yourself nervously adjusting your maternity clothes."
  ];

  const exampleCallFatherShow = [
    "You're gorgeous. I wonder how those tits'll look once they're full of milk, haha.",
    "Your body is fucking incredible, there's no denying it. You've taken such good care of your body, too bad my kid's gonna come along and WRECK it! Haha.",
    "I loved breeding that pussy, but your ass is damn good, too.",
    "Damn, I bet you didn't expect to get knocked up, did you? But hey, at least it gave me another excuse to see that hot body of yours.",
    "You were stupid enough to let me fuck you raw, but I've got to admit, watching you try to look sexy while carrying my kid is kind of hot.",
    "Let’s see that perfect body one more time before it’s ruined. Come on, show me what I'm paying for.",
    "You look incredible, even with my kid in there. Can't wait to see how you move with that belly getting bigger.",
    "I bet you never thought you'd be begging me like this, huh? Too bad, it’s the only way you’re getting my money.",
    "Let’s face it, sweetheart, you're only good for one thing. And from where I'm standing, you still look like you'd be damn good at it.",
    "Seeing you all desperate like this, and still trying to look sexy, is even better than I imagined. Keep it up, and maybe I'll actually help you out."
  ];

  const exampleCallFatherBJ = [
    "You're gorgeous... and you'll look even prettier, sucking dick.",
    "You're absolutely glowing. You'll look much better with those pretty lips wrapped around a cock.",
    "You've always been good at this. Guess being pregnant hasn't slowed you down one bit.",
    "Look at you, on your knees, knowing it's the only way you'll get what you want from me.",
    "I knew you wouldn't turn me down, not when you need my money this bad. Now, show me how much you want it.",
    "Seeing you desperate like this just makes me want to keep you here longer. You're even sexier when you beg.",
    "It’s cute how you’re trying so hard for my help, with my cock in your mouth. Keep going, and I might just reward you.",
    "You've got that pregnant glow, but you still look best on your knees. Keep it up, and we'll see if you're worth my time.",
    "You were always good with that mouth, and now it’s the only thing between you and my wallet.",
    "Suck it like you mean it, sweetheart. You’ve got a baby to think about, right? Better make it worth my while."
  ];

  const exampleHairRed = [
    "auburn", 
    "ginger", 
    "copper", 
    "scarlet", 
    "strawberry", 
    "crimson", 
    "fiery", 
    "burnt orange", 
    "cherry", 
    "rusty"
  ];
  
  const exampleHairBlonde = [
    "honey", 
    "platinum", 
    "golden", 
    "butterscotch", 
    "sandy", 
    "flaxen", 
    "sun-kissed", 
    "champagne", 
    "wheat", 
    "ivory"
  ];
  
  const exampleHairBlack = [
    "raven", 
    "jet-black", 
    "onyx", 
    "midnight", 
    "charcoal", 
    "coal", 
    "ebony", 
    "sable", 
    "ink-colored", 
    "pitch"
  ];
  
  const exampleHairBrown = [
    "chestnut", 
    "hazel", 
    "mahogany", 
    "mocha", 
    "espresso", 
    "cinnamon", 
    "brunette", 
    "maple", 
    "chocolate", 
    "walnut"
  ];
  
  const exampleHairGray = [
    "silver", 
    "ash", 
    "pewter", 
    "platinum", 
    "smoky", 
    "steel", 
    "frost", 
    "slate", 
    "cloudy", 
    "charcoal-gray"
  ];
  
  const exampleHairColored = [
    "neon", 
    "vivid", 
    "pastel", 
    "dyed", 
    "bright", 
    "intense", 
    "muted", 
    "vibrant", 
    "highlighter", 
    "unnatural"
  ];

  const exampleBruceTF = [
    `You catch Bruce’s gaze, a wicked grin spreading across his face as he leans in closer, reveling in the spectacle before him.

    "Look at you, all soft and helpless," Bruce coos mockingly, his voice low and dripping with delight. "Guess those boyish charms are taking a backseat to a nice set of tits, huh? I can’t wait to see how many drinks you’ll need just to keep those new girls in check." He lingers over your blossoming form, eyes glimmering with lust as your hips widen and your chest swells.

    As your transformation concludes, he steps closer, invading your personal space with an unmistakable hunger. "You’re going to make a fine little plaything, sweetheart," he leers, a dark satisfaction in his tone. "I bet all the guys here will be lining up for a taste of that sweet new body."`,

    `Bruce’s eyes widen, and he can’t help but laugh, a sound filled with delight and a hint of malice as he enjoys every moment of your humiliation.

    "Well, well, looks like the new you has a lot more to offer," he sneers, his voice low and sultry. "I hope you’re ready to flaunt those juicy melons because you’re gonna get a lot of attention tonight. Just imagine the stares as you strut around, practically begging for someone to take a bite." His eyes sparkle with mischief as he drinks in the sight of your changing form, reveling in your plight.

    The crowd’s whispers swirl around you, but all you can focus on is Bruce, leaning closer, the warmth of his breath ghosting over your skin. "With those tits, you might want to invest in a support group," he jokes, leering at your breasts. "They’re gonna be hard to keep under wraps — especially when you start getting all the offers."`,

    `Bruce watches intently, a hungry glint in his eyes as he takes in every detail, clearly enjoying the show unfolding before him.

    "Holy shit, those are some serious knockers!" he hollers, his laughter ringing out like a wolf's howl. "Looks like you’re going to need a whole new set of clothes to fit that new chest. Maybe something a bit tighter to showcase those beauties? I mean, damn, they’re practically begging for attention!" His voice oozes with playful derision, a grin plastered on his face as he circles you like a predator.

    "Just imagine the attention you’re going to get," he continues, his voice low and teasing. "I bet you’ll have guys lining up to touch those perfect tits, and who could blame them? You’ve got the goods, darling, and Bruce here is ready to be your biggest fan."`,
    
    `Bruce stands close, his eyes gleaming with excitement as he drinks in your new form, completely unabashed by the spectacle.

    "Damn, look at those bad boys!" he laughs, unabashedly leering at your transformation. "I bet those will give the bar a real show, huh? You’re practically a walking billboard for every guy's fantasy. Just wait until the guys see you — they won’t be able to resist!" His tone drips with both mockery and genuine appreciation for the changes you’re undergoing.

    As you try to regain your composure, Bruce steps closer, his voice low and sultry. "With those curves, sweetheart, you might just want to start practicing your ‘come hither’ look. You’re gonna need it with all the attention you’re about to attract!"`,

    `You catch Bruce’s gaze, a wicked grin spreading across his face as he leans in closer, reveling in the spectacle before him.

    "Look at you, all soft and helpless," Bruce coos mockingly, his voice low and dripping with delight. "Guess those boyish charms are taking a backseat to a nice set of tits, huh? I can’t wait to see how many drinks you’ll need just to keep those new girls in check." He lingers over your blossoming form, eyes glimmering with lust as your hips widen and your chest swells.

    As your transformation concludes, he steps closer, invading your personal space with an unmistakable hunger. "You’re going to make a fine little plaything, sweetheart," he leers, a dark satisfaction in his tone. "I bet all the guys here will be lining up for a taste of that sweet new body."`,

    `Bruce’s predatory gaze never wavers, and he smirks as he watches you morph into a figure of desire.

    "Look at you now! All those masculine features melting away," he drawls, his voice thick with satisfaction. "Those girls you’re sporting are going to get you all kinds of attention tonight, especially when you strut your stuff. You might even want to start practicing that sultry walk!" His laughter is boisterous, ringing through the bar as he leans closer, clearly enjoying your transformation.

    He revels in the scene, leaning in with a devilish grin. "You’d better get used to the compliments, darling," he teases. "With those new assets, you’ll have every guy in the room at your feet, and I can’t wait to see you bask in it."`,

    `Bruce’s eyes are alight with excitement as he observes every inch of your change. 

    "Damn, look at those curves," he drawls, a low chuckle escaping his lips. "You’re not just turning into a woman; you’re becoming a real knockout. I bet those bad boys are gonna turn some heads tonight!" He steps forward, his gaze sweeping over your body with a mix of lust and mockery.

    "Get ready for the attention, sweetheart," Bruce continues, a predatory glint in his eyes. "You’re gonna need it with that body. Everyone’s going to want a piece of the new you, and I plan on making sure you know it."`
  ];
 
  let mcfzip = '';

  // #endregion --- MCF ---
  
  // #region --- Vars - Positions ---
  const positionCharacterName = document.getElementById("positionCharacterName");
  const positionName = document.getElementById("positionName");
  const positionFlavor = document.getElementById("positionFlavor");
  const positionTypeRadios = document.querySelectorAll('input[name="positionType"]');
  const positionSubtypeRadios = document.querySelectorAll('input[name="subtype"]');
  const positionTypeActive = document.getElementById('active');
  const positionTypePassive = document.getElementById('passive');
  const positionSubTypeCowgirl = document.getElementById('cowgirl');
  const positionSubTypeDoggy = document.getElementById('doggy');
  const positionSubTypeMissionary = document.getElementById('missionary');
  const positionSubTypeService = document.getElementById('service');
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
  const positionsLocations = document.getElementById("positionLocationCheckboxes");
  const addPositionButton = document.getElementById("addPosition");
  const generatePositionsFileButton = document.getElementById("generatePositionsFileButton");
  const clearPositionList = document.getElementById("clearPositionList");

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
  const outfitLocationCheckboxes = document.getElementById("outfitLocationCheckboxes");
  const outfitBeach = document.getElementById("beach");
  const outfitOffice = document.getElementById("office");
  const outfitGym = document.getElementById("gym");
  const outfitStylin = document.getElementById("stylin");
  const outfitLounge = document.getElementById("lounge");
  const outfitCasual = document.getElementById("casual");
  const outfitFetish = document.getElementById("fetish");
  const clearOutfitList = document.getElementById("clearOutfitList");
  const generateOutfitsFileButton = document.getElementById("generateOutfitsFileButton");


  // Div for hiding or showing fields based on radio check
  const onePieceField = document.getElementById("onePieceField"); 
  const twoPieceFields = document.getElementById("twoPieceFields");
  const onePieceRadio = document.getElementById("onePieceRadio");
  const twoPieceRadio = document.getElementById("twoPieceRadio");

  // Tags section
  const addColorButton = document.getElementById("addColorButton");
  const outfitColorsContainer = document.getElementById("outfitColorsContainer");
  const outfitColorsList = document.getElementById("outfitColorsList");
  const outfitColorsInput = document.getElementById("outfitColorsInput");

  const addEmphasisButton = document.getElementById("addEmphasisButton");
  const outfitEmphasisContainer = document.getElementById("outfitEmphasisContainer");
  const outfitEmphasisList = document.getElementById("outfitEmphasisList");
  const outfitEmphasisInput = document.getElementById("outfitEmphasisInput");

  const addRevealsButton = document.getElementById("addRevealsButton");
  const outfitRevealsContainer = document.getElementById("outfitRevealsContainer");
  const outfitRevealsList = document.getElementById("outfitRevealsList");
  const outfitRevealsInput = document.getElementById("outfitRevealsInput");

  const addOutfitTagsButton = document.getElementById("addOutfitTagsButton");
  const outfitTagsContainer = document.getElementById("outfitTagsContainer");
  const outfitTagsList = document.getElementById("outfitTagsList");
  const outfitTagsInput = document.getElementById("outfitTagsInput");

  
  
  // #endregion --- Outfits ---

  // #region --- Vars - BLACKED ---
  const blkCharacterName = document.getElementById("blkCharacterName")
  const blkYourModBLKVersion = document.getElementById("blkYourModBLKVersion");
  const blkModAuthor = document.getElementById("blkModAuthor");
  const blkBaseGameVersion = document.getElementById("blkBaseGameVersion");
  const blkModVersion = document.getElementById("blkModVersion");
  const blkYourModName = document.getElementById("blkYourModName");
  const blkYourModVersion = document.getElementById("blkYourModVersion");
  const generateBlackedMetaButton = document.getElementById("generateBlackedMetaButton");
  const generateBlackedFoldersButton = document.getElementById("generateBlackedFoldersButton");
  const generateBlackedFilesOnlyButton = document.getElementById("generateBlackedFilesOnlyButton");
  const generateBlackedAllFilesButton = document.getElementById("generateBlackedAllFilesButton");
  const blkDoggyPath = document.getElementById("blkDoggyPath");
  const blkDoggyVid = document.getElementById("blkDoggyVid");
  const blkDoggyVidPrefix = document.getElementById("blkDoggyVidPrefix");
  const blkDoggyInsertImg = document.getElementById("blkDoggyInsertImg");
  const blkDoggyInsertImgPrefix = document.getElementById("blkDoggyInsertImgPrefix");
  const blkDoggyMoanImg = document.getElementById("blkDoggyMoanImg");
  const blkDoggyMoanImgPrefix = document.getElementById("blkDoggyMoanImgPrefix");
  const blkDoggyContainer = document.getElementById("blkDoggyContainer");
  const blkBJPath = document.getElementById("blkBJPath");
  const blkBJVid = document.getElementById("blkBJVid");
  const blkBJVidPrefix = document.getElementById("blkBJVidPrefix");
  const blkFacefuckPath = document.getElementById("blkFacefuckPath");
  const blkFacefuckVid = document.getElementById("blkFacefuckVid");
  const blkFacefuckVidPrefix = document.getElementById("blkFacefuckVidPrefix");
  const blkFacefuckContainer = document.getElementById("blkFacefuckContainer");
  const blkOralPath = document.getElementById("blkOralPath");
  const blkOralVid = document.getElementById("blkOralVid");
  const blkOralVidPrefix = document.getElementById("blkOralVidPrefix");
  const blkOralContainer = document.getElementById("blkOralContainer");
  const blkForeplayPath = document.getElementById("blkForeplayPath");
  const blkGropeTitsVid = document.getElementById("blkGropeTitsVid");
  const blkGropeTitsVidPrefix = document.getElementById("blkGropeTitsVidPrefix");
  const blkGropeAssVid = document.getElementById("blkGropeAssVid");
  const blkGropeAssVidPrefix = document.getElementById("blkGropeAssVidPrefix");
  const blkKissVid = document.getElementById("blkKissVid");
  const blkKissVidPrefix = document.getElementById("blkKissVidPrefix");
  const blkCumPath = document.getElementById("blkCumPath");
  const blkCreampieVid = document.getElementById("blkCreampieVid");
  const blkCreampieVidPrefix = document.getElementById("blkCreampieVidPrefix");
  const blkFacialVid = document.getElementById("blkFacialVid");
  const blkFacialVidPrefix = document.getElementById("blkFacialVidPrefix");
  const blkMouthVid = document.getElementById("blkMouthVid");
  const blkMouthVidPrefix = document.getElementById("blkMouthVidPrefix");
  const blkFacialContainer = document.getElementById("blkFacialContainer");
  const blkMouthContainer = document.getElementById("blkMouthContainer");
  const blkPullOutBodyVid = document.getElementById("blkPullOutBodyVid");
  const blkPullOutBodyVidPrefix = document.getElementById("blkPullOutBodyVidPrefix");
  const blkPullOutBodyContainer = document.getElementById("blkPullOutBodyContainer");
  const blkPullOutButtVid = document.getElementById("blkPullOutButtVid");
  const blkPullOutButtVidPrefix = document.getElementById("blkPullOutButtVidPrefix");
  const blkPullOutButtContainer = document.getElementById("blkPullOutButtContainer");
  const blkPullOutTitsVid = document.getElementById("blkPullOutTitsVid");
  const blkPullOutTitsVidPrefix = document.getElementById("blkPullOutTitsVidPrefix");
  const blkPullOutTitsContainer = document.getElementById("blkPullOutTitsContainer");
  const blkDoggyHelp = document.getElementById("blkDoggyHelp");
  const blkBJHelp = document.getElementById("blkBJHelp");
  const blkFacefuckHelp = document.getElementById("blkFacefuckHelp");
  const blkOralHelp = document.getElementById("blkOralHelp");
  const blkForeplayHelp = document.getElementById("blkForeplayHelp");
  const blkCumHelp = document.getElementById("blkCumHelp");
  const blkPullOutHelp = document.getElementById("blkPullOutHelp");
  let blkzip = '' // default value for BLACKED Zip var
  // #endregion --- BLACKED ---

  // #region --- Vars - Bar Girl ---
  const bgModAuthor = document.getElementById("bgModAuthor");
  const bgYourModVersion = document.getElementById("bgYourModVersion");
  const bgBaseGameVersion = document.getElementById("bgBaseGameVersion");
  const bgCharacterName = document.getElementById("bgCharacterName");
  const bgCharacterRace = document.getElementById("bgCharacterRace");
  const generateBGFoldersButton = document.getElementById("generateBGFoldersButton");
  const generateBGMetaButton = document.getElementById("generateBGMetaButton");
  const generateBGFilesOnlyButton = document.getElementById("generateBGFilesOnlyButton");
  const generateBGAllFilesButton = document.getElementById("generateBGAllFilesButton");

  const bgPossibleNameInput = document.getElementById("bgPossibleNameInput");
  const bgPossibleNameButton = document.getElementById("bgPossibleNameButton");
  const clearbgPossibleName = document.getElementById("clearbgPossibleName");
  const bgPossibleNameContainer = document.getElementById("bgPossibleNameContainer");

  const bgUnfamiliarNameInput = document.getElementById("bgUnfamiliarNameInput");
  const bgUnfamiliarNameButton = document.getElementById("bgUnfamiliarNameButton");
  const clearbgUnfamiliarName = document.getElementById("clearbgUnfamiliarName");
  const bgUnfamiliarNameContainer = document.getElementById("bgUnfamiliarNameContainer");

  const bgFaveDrink = document.getElementById("bgFaveDrink");
  const bgPartnerRace = document.getElementById("bgPartnerRace");
  const bgSexStyle = document.getElementById("bgSexStyle");
  const bgSexPosition = document.getElementById("bgSexPosition");
  const bgTraits1 = document.getElementById("bgTraits1");
  const bgTraits2 = document.getElementById("bgTraits2");
  const bgTraits3 = document.getElementById("bgTraits3");
  const bgTraits4 = document.getElementById("bgTraits4");
  const bgTraits5 = document.getElementById("bgTraits5");
  const bgTraits6 = document.getElementById("bgTraits6");

  const bbcTag = document.getElementById("bbcTag");
  const bgTraitsHelp = document.getElementById("bgTraitsHelp");

  const bgDanceSuccessInput = document.getElementById("bgDanceSuccessInput");
  const bgDanceSuccessButton = document.getElementById("bgDanceSuccessButton");
  const examplebgDanceSuccessButton = document.getElementById("examplebgDanceSuccessButton");
  const clearbgDanceSuccess = document.getElementById("clearbgDanceSuccess");
  const bgDanceSuccessContainer = document.getElementById("bgDanceSuccessContainer");

  const bgDanceFailInput = document.getElementById("bgDanceFailInput");
  const bgDanceFailButton = document.getElementById("bgDanceFailButton");
  const examplebgDanceFailButton = document.getElementById("examplebgDanceFailButton");
  const clearbgDanceFail = document.getElementById("clearbgDanceFail");
  const bgDanceFailContainer = document.getElementById("bgDanceFailContainer");

  const examplebgDanceSuccess = [
    "Following the rhythm of the club music, you glide your fingers over the smooth bare skin of $her_name's waist, pulling her closer. Her body fits perfectly against yours, her ample chest brushing against you with every swaying move. Her eyes sparkle with delight, making her even more alluring under the club lights.",
    "Your hands on $her_name's slender waist guide her through the rhythm, her body moving in sync with yours. The feeling of her breasts pressing against you is intoxicating, distracting you from everything but her captivating eyes. With every beat, the spark between you grows, fueled by her infectious smile.",
    "The thumping beat of the music fades as your eyes meet $her_name's. The teasing glint in her mesmerizing eyes holds an unspoken promise that sends a shiver up your spine. As you dance together, the heat of her body against yours and her breath mingling with yours create an intimacy that leaves you wanting more.",
    "Your hand holds $her_name close as you guide her through the pulsating rhythm of the music. The soft curves of her body press against you, her breasts pillowed against your chest. Her eyes meet yours, her teasing smile sparking a desire that dances with your racing heartbeat.",
    "As $her_name fits herself against your frame, the scent of her perfume and the heat of her body are intoxicating. You guide her hands to your shoulders, and yours explore the small of her back. Her breasts pressed against you and her eyes looking up at you with calm intensity send a wave of desire coursing through your veins.",
    "Your hand sinfully trails down $her_name's side, appreciating the curves before settling on her waist. She gasps, her grip on you tightening. Her body is warm, firm against yours, each point of contact like a lit fuse. Her body language, shy yet desiring, sends waves of desire through you.",
    "Hands on her waist, you guide her body to the rhythm, her back against your chest. She leans into you, trusting you to lead. And when her firm ass grinds against you, her hands reaching back to stroke your thighs, you know she's enjoying this as much as you are.",
    "Dancing with $her_name feels like floating in a trance. Her eyes are alight with anticipation as she sways with you in perfect rhythm. You feel her breath hitch when you pull her closer, her breasts pressing into you rhythmically.",
    "Feeling the heat of the dance floor, you hold $her_name close, her eyes locked on to yours. There's a pulsating energy between you that grows with the beat. Her chest, fuller than one would expect from her lithe form, heaves against yours in time with the thrilling rhythm.",
    "$her_name giggles as you flawlessly execute a playful dip. Her hands explore your shoulders, her body swaying rhythmically against yours. You can't help but smile at the delighted look on her face.",
    "Your bodies move so close together, it feels like there's no one else in the club. $her_name's hand grips your shoulder as she rides the rhythm, swaying in delight.",
    "$her_name's hips roll against yours as the rhythm intensifies. Her arms slide around your neck, her breath hitching when your hands trace down her back.",
    "Your hands find $her_name's hips, your bodies swaying as one. The copious amount of skin contact has her cheeks flushed. She lets one of your hands drift upwards, cupping her breast over her top. It's a silent agreement, a mutual surrender to the rhythm and each other.",
    "Her back presses into your chest, your hand splaying across her stomach. When your fingers drift upwards to brush against the underside of her breast, she doesn't pull away. Instead, she presses closer, her ass grinding against you in time with the music.",
    "Intoxicated by the pulsating rhythm and the tantalizing closeness of $her_name, you lead her into a sensuous dance. Her lithe body melds into yours, her chest flush against you, setting your nerves on fire. Her eyes are fixed on you, a silent invitation that stirs a dangerous longing within you.",
    "As you move together in perfect sync, $her_name's body is like a natural extension of your own. Her playful smile and the glint in her eye make your heart race as you feel her press closer.",
    "$her_name laughs softly as you twirl her around, her body returning to yours in a seamless flow. The chemistry between you is undeniable, the warmth of her touch setting your skin ablaze.",
    "Every movement feels effortless as she moves with you, her fingers brushing your shoulder and her gaze full of intrigue. She pulls you in, whispering something flirty over the beat.",
    "She lets out a satisfied sigh, her fingers lingering on your arm as you guide her through each turn. Her body molds against yours, the rhythm drawing you both into an intoxicating spell.",
    "Her lips brush your ear as she leans in, swaying to the beat, sending a thrill down your spine. There's a soft intimacy in her touch, her breath mingling with yours.",
    "Her fingers trace lightly over your shoulder as she moves in time with the music, her body pressed against yours. The closeness, the heat, and her breath on your neck all serve to deepen the unspoken connection building between you.",
    "$her_name bites her lip as she follows your lead, her body warm and inviting against yours. Her hand finds yours, entwining your fingers as you sway, the intensity of her gaze sending a thrill up your spine.",
    "Dancing with $her_name feels as natural as breathing. She matches every step, every sway, her gaze locking onto yours with a mixture of challenge and warmth that leaves you breathless.",
    "Her eyes sparkle with mischief as she brushes her lips close to your ear, her voice soft but filled with excitement. Her hands trail down your arms, and her body moves with yours in perfect harmony.",
    "As you pull $her_name closer, she lets out a contented sigh, her body melding into yours. Her hands find their way around your neck, her lips dangerously close to yours, the shared warmth between you growing stronger with every beat."
  ];

const examplebgDanceFail = [
    "With every missed move, every offbeat step, you can see the spark in $her_name's eyes dimming. Her hands rest gingerly on your shoulders, hesitant, as if she no longer trusts you to lead. The rhythm is lost between you, replaced by growing awkwardness.",
    "You misjudge a step and $her_name nearly trips. She laughs it off, but the tension between you is palpable. Her gaze wanders, her movements lack their earlier charm. She glances over your shoulder at the crowd, as if contemplating an escape plan.",
    "As the music speeds up, you lose your footing and stumble against $her_name. An opportunist guy sees his chance and swoops in, placing his hands on her hips while you're trying to regain your balance. Her annoyed glare is obvious, but the guy seems unfazed.",
    "$her_name tries to smile, but it doesn't reach her eyes. As she stumbles to match your erratic rhythm, you can tell she's not enjoying herself. Her gaze keeps drifting over your shoulder, to the other dancers on the floor, her disappointment making you wince.",
    "Every time you step out of rhythm, $her_name's smile dwindles a little more. You can feel her trying to adjust to your bad timing, but it's obvious she's not having fun. You can't help but notice the amused glances being thrown your way by other guys in the club.",
    "You miss a step, nearly tripping over $her_name's foot. With a hasty apology, you try to regain the rhythm, but you can see the disappointment in her eyes. Around you, other men in the club are watching her, their lecherous gazes lingering on her body.",
    "A misstep causes $her_name to falter, her polite smile barely masking her growing discomfort. You can feel her pulling away, her enthusiasm fading with each awkward beat.",
    "Your movements become stiffer as you struggle to find the beat, and you can feel $her_name's body tensing under your hands. Her polite chuckle only masks the awkwardness, and she gently pulls away, her eyes scanning for an exit.",
    "When you accidentally step on $her_name's foot, she lets out a small yelp before offering a strained smile. Her expression says it all—she’s not impressed.",
    "Your offbeat moves only worsen with each passing second, and you catch $her_name rolling her eyes when she thinks you’re not looking. The chemistry between you fizzles, replaced by quiet disappointment.",
    "You stumble through a turn, and $her_name lets out a small sigh, her excitement visibly fading. She pulls back slightly, trying to match your steps, but the moment feels less and less magical.",
    "As you awkwardly misstep again, $her_name’s hands drop from your shoulders, and she glances around with a polite but disappointed smile. You can feel her enthusiasm slipping away.",
    "An attempt at a fancy twirl ends with you bumping into her, and $her_name’s laughter has a forced edge to it. Her eyes scan the crowd, perhaps looking for a way out of the awkward situation.",
    "$her_name politely attempts to keep up with your off-beat rhythm, but you can tell she's struggling to enjoy herself. Her laughter sounds strained, and she glances over at the other couples moving effortlessly.",
    "Another clumsy move causes $her_name to pull away, her expression polite but distant. Her eyes avoid yours, the connection between you growing colder as you fumble with the rhythm.",
    "Your feet tangle, causing $her_name to nearly stumble, and she gives you a polite smile that doesn’t reach her eyes. The chemistry between you feels like it’s slipping through your fingers.",
    "An awkward step forward throws you off balance, and $her_name quickly pulls back, a forced smile plastered on her face. Her glances around the room are becoming more frequent, her patience wearing thin.",
    "You feel the warmth between you dissipate as another mistimed move causes $her_name to pull her hands back. Her polite chuckle only hides her disappointment, and she begins to edge away.",
    "With each misstep, $her_name's energy visibly fades. Her responses become more subdued, her gaze wandering elsewhere as the rhythm between you both breaks down completely.",
    "An attempt to pull her closer results in an awkward bump. $her_name's smile falters, and she quickly regains her distance, her body language shifting from warmth to discomfort.",
    "You try to match the beat, but $her_name’s movements become hesitant, her hands falling from your shoulders. She gives you a quick, tight-lipped smile, clearly less engaged than before.",
    "Your repeated stumbles bring a polite but distant expression to $her_name’s face, her eyes darting to other dancers who seem to have the rhythm down.",
    "After a particularly off-beat step, $her_name's smile fades, and she lets go of your hands. She takes a small step back, her attention drifting to others around you as the connection slips away.",
    "With every awkward step, $her_name becomes more disengaged, her gaze drifting away. She eventually offers you a polite excuse to leave the dance floor, her disinterest obvious.",
    "You attempt to pull her back into sync, but $her_name’s enthusiasm has clearly faded. Her hands drop, and she forces a smile, her disappointment evident in her expression."
  ];

  let bgzip = '';

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
    const webAppUrl = 'https://script.google.com/macros/s/AKfycbzLz98bMKrM8qYWHMMPNTcvMDTnW0-IQXR2DCk1sFgptFy1BsR2ddZ6XJ6RpV_F_658/exec';

    fetch(webAppUrl)
      .then(response => response.json())
      .then(data => {
        const versionXCL = data['XCL'];
        const versionBLK = data['BLK'];
      
      // Update fields with looked up mod versions
      if (versionXCL) {
        metaGameVersion.value = versionXCL;
        mcfBaseGameVersion.value = versionXCL;
        blkBaseGameVersion.value = versionXCL;
        bgBaseGameVersion.value = versionXCL;
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

  // Clear an element
  function clearElement(element) {
    element.innerHTML = '';
  };

  // Function to checking input characters
  function sanitizeInput(input) {
    const allowedCharacters = /^[a-zA-Z0-9_\-.~*\s()!'?,]+$/; // Must allow markdown characters
    if (!allowedCharacters.test(input)) {
      alert(input + " contains invalid characters.");
      return false;
    }
    return true;
  };

  function sanitizeName(input) {
    const allowedCharacters = /^[a-zA-Z'-]+$/;
    if (!allowedCharacters.test(input)) {
        alert("Entry contains invalid characters...\n" + input + "\nEntry must only be one name. To add multiple names, add one name at a time.");
        return false;
    }
    return true;
  };


  // Function to checking tags
  function sanitizeTag(input) {
    const allowedCharacters = /^[a-zA-Z0-9_\-—.’~;*,\s()\$!'?,]+$/; // Must allow markdown characters
    if (!allowedCharacters.test(input)) {
      alert(input + " contains invalid characters.");
      return false;
    }
    return true;
  };

  // Function to checking filename for valid characters
  function sanitizeFilename(input) {
    const allowedCharacters = /^[a-zA-Z0-9_\-.()\s]+$/; // restricted to only characters allowed in filenames
    if (!allowedCharacters.test(input)) {
      alert(input + " contains invalid characters.");
      return false;
    }
    return true;
  };

  // Helper function to check if a field is empty
  function isEmpty(input) {
    return input.trim() === "";
  };

  function toProperCase(name) {
    return name
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  // Generate an array for video filenames based on prefixes and counts
  function getVideoArray(prefix, count) {
    const videos = [];
    for (let i = 1; i <= count; i++) {
        videos.push(`${prefix} ${i}`);
    }
    return videos;
  };

  // Reusable function to handle tagging events
  function handleTagInput(inputElement, datalistElement, addTagFunction) {
    inputElement.addEventListener("input", function () {
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
    clearElement(tagContainer)
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

  // Extract Tags from a Container
  function extractTags(container) {
    const tags = Array.from(container.querySelectorAll(".tag")).map((tag) => {
    // Remove only the trailing "x" if it's present and is part of a remove button
    const textContent = tag.textContent.trim();
    return textContent.endsWith("x") ? textContent.slice(0, -1).trim() : textContent;
  });
  return tags;
  };

  // Add Tags to a Tag Container
  function addLine(tagInput, tagContainer) {
    let tagText;
  
    // Check if tagInput is a string or an element
    if (typeof tagInput === "string") {
      tagText = tagInput.trim(); // Use the string directly
    } else {
      tagText = tagInput.value.trim(); // Use the input element's value
    }

    if (!sanitizeTag(tagText)) {
      return false;
    }
  
    if (tagText) {
      // Check if the tag already exists
      const existingTags = Array.from(tagContainer.getElementsByClassName("tag"));
      let tagExists = existingTags.some((tag) => {
        // Only remove the "x" if it's a removal button within the tag span
        const clonedTag = tag.cloneNode(true);
        const removeButton = clonedTag.querySelector(".remove-tag");
        if (removeButton) {
          removeButton.remove(); // Remove the button text "x" to accurately compare the tag text
        }
        return clonedTag.textContent.trim() === tagText;
      });
  
      if (!tagExists) {  
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

  // Add Paragraphs to a Container Without Trimming Whitespace
  function addParagraph(paragraphInput, paragraphContainer) {
    let paragraphText;

    // Check if paragraphInput is a string or an element
    if (typeof paragraphInput === "string") {
      paragraphText = paragraphInput; // Use the string directly without trimming
    } else {
      paragraphText = paragraphInput.value; // Use the input element's value without trimming
    }

    if (paragraphText) {
      // Check if the paragraph already exists
      const existingParagraphs = Array.from(paragraphContainer.getElementsByClassName("paragraph"));
      let paragraphExists = existingParagraphs.some((paragraph) => {
        // Only remove the "x" if it's a removal button within the paragraph div
        const clonedParagraph = paragraph.cloneNode(true);
        const removeButton = clonedParagraph.querySelector(".remove-paragraph");
        if (removeButton) {
          removeButton.remove(); // Remove the button text "x" to accurately compare the paragraph text
        }
        return clonedParagraph.textContent === paragraphText;
      });

      if (!paragraphExists) {
        // Add the paragraph to the container using a <div>
        const paragraphDiv = document.createElement("div");
        paragraphDiv.textContent = paragraphText;
        paragraphDiv.className = "paragraph";

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "x";
        removeBtn.className = "remove-paragraph";
        paragraphDiv.appendChild(removeBtn);
        paragraphContainer.appendChild(paragraphDiv);

        // Clear the input
        paragraphInput.value = "";

        // Handle paragraph removal
        removeBtn.addEventListener("click", function () {
          paragraphDiv.remove();
        });
      }
    }
  };

  // Extract Paragraph from a Container
  function extractParagraph(container) {
    const paragraphs = Array.from(container.querySelectorAll(".paragraph")).map((paragraph) => {
    // Remove only the trailing "x" if it's present and is part of a remove button
    const textContent = paragraph.textContent.trim();
    return textContent.endsWith("x") ? textContent.slice(0, -1).trim() : textContent;
  });
  return paragraphs;
  };

  function generateExample(exampleList, container) {
    const existingTags = Array.from(container.getElementsByClassName("tag")).map(tag => {
        const tagText = tag.cloneNode(true);
        // Remove the remove button (the "x")
        tagText.removeChild(tagText.querySelector(".remove-tag"));
        return tagText.textContent.trim();
    });

    const availableTags = exampleList.filter(tag => !existingTags.includes(tag));

    if (availableTags.length > 0) {
        const randomTag = availableTags[Math.floor(Math.random() * availableTags.length)];
        addLine(randomTag, container);
        console.log("Added Tag:", randomTag);
    } else {
        console.log("No available tags to add");
    }
  };

  function generateExampleParagraph(exampleList, container) {
    const existingTags = Array.from(container.getElementsByClassName("tag")).map(tag => {
        const tagText = tag.cloneNode(true);
        // Remove the remove button (the "x")
        tagText.removeChild(tagText.querySelector(".remove-tag"));
        return tagText.textContent.trim();
    });

    const availableTags = exampleList.filter(tag => !existingTags.includes(tag));

    if (availableTags.length > 0) {
        const randomTag = availableTags[Math.floor(Math.random() * availableTags.length)];
        addParagraph(randomTag, container);
        console.log("Added Tag:", randomTag);
    } else {
        console.log("No available tags to add");
    }
  };

  function generateTagline(hair, boobs, butt, body, race) {
    // Define options based on player input
    const hairOptions = {
        "red": hairRed,
        "blonde": hairBlonde,
        "black": hairBlack,
        "brown": hairBrown,
        "gray": hairGray,
        "colored": hairColored
    };

    const boobsOptions = {
        "A": boobsSmall,
        "B": boobsSmall,
        "C": boobsMedium,
        "D": boobsMedium,
        "E": boobsBig,
        "F": boobsBig,
        "G": boobsBig
    };

    const buttOptions = {
        "slim": buttSlim,
        "bubble": buttBubble,
        "big": buttBig
    };

    const bodyOptions = {
        "slim": bodySlim,
        "average": bodyAvg,
        "voluptuous": bodyVol
    };

    const raceOptions = {
        "white": raceWhite,
        "black": raceBlack,
        "latin": raceLatin,
        "asian": raceAsian
    };

    // Randomly select based on the player's choices
    const selectedRace = raceOptions[race][Math.floor(Math.random() * raceOptions[race].length)];

    // Randomly choose hair, boobs, butt, or body for variety
    const descriptorType = Math.floor(Math.random() * 4);
    let selectedDescriptor;

    switch (descriptorType) {
      case 0:
        selectedDescriptor = hairOptions[hair][Math.floor(Math.random() * hairOptions[hair].length)];
        break;
      case 1:
        selectedDescriptor = boobsOptions[boobs][Math.floor(Math.random() * boobsOptions[boobs].length)];
        break;
      case 2:
        selectedDescriptor = buttOptions[butt][Math.floor(Math.random() * buttOptions[butt].length)];
        break;
      case 3:
        selectedDescriptor = bodyOptions[body][Math.floor(Math.random() * bodyOptions[body].length)]
    }

    // Construct the tagline
    return ` ${selectedRace} with ${selectedDescriptor}`;
 };

 function generateTagOld(race) {
  const raceOptions = { white: raceWhite, black: raceBlack, latin: raceLatin, asian: raceAsian };
  const selectedRace = raceOptions[race][Math.floor(Math.random() * raceOptions[race].length)];

  // Phrases for how they refer to the previous identity
  const referencePhrases = [
    "he knew you as,",
    "you used to be,",
    "he remembers you as,",
    "he once knew you as,",
    "you were to him as,",
    "he thought of you as,",
    "you once were,"
  ];

  // Randomly select a reference phrase
  const selectedPhrase = referencePhrases[Math.floor(Math.random() * referencePhrases.length)];

  // Generate a concise description
  return `${selectedRace} ${selectedPhrase}`;
  };

  function generateTagNew(body, race) {
    const bodyOptions = {
        "slim": bodySlim,
        "average": bodyAvg,
        "voluptuous": bodyVol
    };

    const raceWhite = [
      "snow-white beauty",
      "total all-American babe",
      "porcelain-skinned goddess",
      "classic white bombshell",
      "fair-skinned enchantress",
      "ivory-skinned doll",
      "angel-faced cutie",
      "radiant pale goddess"
    ];
  
    const raceBlack = [
      "dark-skinned queen",
      "caramel-toned goddess",
      "dark-skinned seductress",
      "rich chocolate beauty",
      "stunning ebony enchantress",
      "radiant black pearl",
      "gorgeous mocha temptress",
      "captivating ebony vision",
      "dazzling midnight beauty",
      "striking dark beauty"
    ];
  
    const raceLatin = [
      "spicy Latina bombshell",
      "sultry caramel beauty",
      "sexy brown-skinned Latina",
      "curvy Latina",
      "sultry Latina temptress",
      "fiery Latina diva",
      "captivating Latina vision",
      "charming Latina darling",
      "radiant Latin enchantress"
    ];
  
    const raceAsian = [
      "captivating Asian beauty",
      "petite and seductive Asian doll",
      "seductive Asian goddess",
      "delicate porcelain-skinned Asian",
      "captivating jade-skinned goddess",
      "charming Asian sweetheart",
      "graceful Asian delight",
      "radiant silk-skinned beauty"
    ];

    const raceOptions = {
        "white": raceWhite,
        "black": raceBlack,
        "latin": raceLatin,
        "asian": raceAsian
    };

    // Randomly select based on the player's choices
    const selectedBody = bodyOptions[body][Math.floor(Math.random() * bodyOptions[body].length)];
    const selectedRace = raceOptions[race][Math.floor(Math.random() * raceOptions[race].length)];

    // Construct the tagline
    return ` ${selectedRace} with ${selectedBody}`;
 };

 function generateExampleForHairColor(hairColor, container) {
  // Organize the hair color options
  const hairColorOptions = {
    red: exampleHairRed,
    blonde: exampleHairBlonde,
    black: exampleHairBlack,
    brown: exampleHairBrown,
    gray: exampleHairGray,
    colored: exampleHairColored
  };

  const exampleList = hairColorOptions[hairColor.toLowerCase()] || [];

  generateExample(exampleList, container);
  };


  function generateExampleForHairTexture(hairColor, container) {
    const hairTextureAdjectives = [
      "naturally curly",
      "silky",
      "bright",
      "wavy",
      "shimmering",
      "flowing",
      "smooth",
      "soft",
      "thick",
      "lustrous"
    ];
  
    // Choose a random adjective and combine with the hair color
    const adjective = hairTextureAdjectives[Math.floor(Math.random() * hairTextureAdjectives.length)];
    const texturedHairExample = `${adjective} ${hairColor}`;
  
    generateExample([texturedHairExample], container);
  };

  // #endregion --- Functions - General

  // #region --- Functions - MCF

   // Build video tagging fields dynamically
   function generateTagFields(vidCountField, vidPrefixField, tagContainer, tagOptions = [], tagFieldCount = 1, hasRhythmField = false) {
    const container = tagContainer;
    const videoCount = parseInt(vidCountField.value) || 0;
    const vidPrefix = vidPrefixField.value || "Video";
    clearElement(container)

    for (let i = 1; i <= videoCount; i++) {
        const tagField = document.createElement("div");
        tagField.className = "containerVideoTags";
        
        // Create label for the tags
        const label = document.createElement("label");
        label.textContent = `${vidPrefix} ${i}:`;
        tagField.appendChild(label);

        // Create dropdowns for tag options
        for (let j = 0; j < tagFieldCount; j++) {
            const dropdown = document.createElement("select");
            dropdown.id = `${vidPrefix}_tag_${i}_${j}`;
            
            // Add a default option for the dropdown
            const defaultOption = document.createElement("option");
            defaultOption.value = '';
            defaultOption.textContent = `Select a tag`;
            dropdown.appendChild(defaultOption);

            // Add options to the dropdown
            tagOptions.forEach(tag => {
                const optionElement = document.createElement("option");
                optionElement.value = tag;
                optionElement.textContent = tag;
                dropdown.appendChild(optionElement);
            });

            tagField.appendChild(dropdown);
        }

        // Optionally add a number input field for rhythm after the last tag field
        if (hasRhythmField) {
            const rhythmInput = document.createElement("input");
            rhythmInput.type = "number";
            rhythmInput.id = `${vidPrefix}_rhythm_${i}`;
            rhythmInput.placeholder = "Rhythm";
            rhythmInput.min = 400;
            rhythmInput.max = 1400;

            tagField.appendChild(rhythmInput);

            tippy(rhythmInput, {
              content: "This is the Beats Per Minute (BPM) of the position, measured in milliseconds. Take 60000 divided by BPM to convert.<br><br>Example: 60 BPM = 1000 rhythm, 120 BPM = 500 rhythm, etc. Generally speaking, rhythm should be between 400 and 1400 bpm.<br><br> Rhythm is used in the minigames."
            });
        }

        container.appendChild(tagField);
    }
  };

  // Build video tagging fields for Doggy Transactional (different because one tag is location)
  function generateDoggyTagFields(vidCountField, vidPrefixField, tagContainer) {
    const container = tagContainer;
    const videoCount = parseInt(vidCountField.value) || 0;
    const vidPrefix = vidPrefixField.value || "Video";
    clearElement(container)

    for (let i = 1; i <= videoCount; i++) {
      const tagField = document.createElement("div");
      tagField.className = "containerVideoTags";
      
      // Create label for tags
      const label = document.createElement("label");
      label.for = `tags_${i}`;
      label.textContent = `${vidPrefix} ${i}:`;

      // Create a dropdown for the first tag (location)
      const dropdownLocation = document.createElement("select");
      dropdownLocation.id = `${vidPrefix}_tag_${i}`;

      // Create and add a default option for the location dropdown
      const defaultLocationOption = document.createElement("option");
      defaultLocationOption.value = '';
      defaultLocationOption.textContent = "Select a location";
      dropdownLocation.appendChild(defaultLocationOption);

      tippy(dropdownLocation, {
        content: "What is the surface of the scene?"
      });

      // Add the other location options
      locationTagOptions.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        dropdownLocation.appendChild(optionElement);
      });

      tagField.appendChild(label);
      tagField.appendChild(dropdownLocation);

      // Create additional dropdowns for each tag in tagOptions
      for (let j = 1; j <= 2; j++) { 
        const dropdownTag = document.createElement("select");
        dropdownTag.id = `${vidPrefix}_tag_${i}_${j}`;
        
        const emptyOption = document.createElement("option");
        emptyOption.value = '';
        emptyOption.textContent = "Select a tag";
        dropdownTag.appendChild(emptyOption);

        doggyTagOptions.forEach(option => {
          const optionElement = document.createElement("option");
          optionElement.value = option;
          optionElement.textContent = option;
          dropdownTag.appendChild(optionElement);
        });

        tagField.appendChild(dropdownTag);

        tippy(dropdownTag, {
          content: "What is happening in the scene?<br><br>Is he grabbing your waist? arms? <br>Is he pulling your hair and spanking you? <br>Are you looking back at him?"
        });
      }

      const rhythmInput = document.createElement("input");
      rhythmInput.type = "number";
      rhythmInput.id = `${vidPrefix}_rhythm_${i}`;
      rhythmInput.placeholder = "Rhythm";
      rhythmInput.min = 400;
      rhythmInput.max = 1400;

      tagField.appendChild(rhythmInput);

      tippy(rhythmInput, {
        content: "This is the Beats Per Minute (BPM) of the position, measured in milliseconds. Take 60000 divided by BPM to convert.<br><br>Example: 60 BPM = 1000 rhythm, 120 BPM = 500 rhythm, etc. Generally speaking, rhythm should be between 400 and 1400 bpm.<br><br> Rhythm is used in the minigames."
      });

      container.appendChild(tagField);
    }
  };

  // Build sound timing fields dynamically
  function generateTimingFields(timingCountField, timingContainer) {
    const timingCount = parseInt(timingCountField.value, 10) || 0;

    if (!timingContainer) {
        console.error(`Timing container is not defined.`);
        return;
    }

    // Clear any existing timing fields
    clearElement(timingContainer);

    // Generate new timing fields based on the value of timingCount
    for (let i = 1; i <= timingCount; i++) {
      const fieldContainer = document.createElement("div");
      fieldContainer.className = "form-single-line";

      const label = document.createElement("label");
      label.textContent = `Penetration Timing ${i}:`;
      label.htmlFor = `penetrationTiming${i}`;

      const input = document.createElement("input");
      input.type = "number";
      input.id = `penetrationTiming${i}`;
      input.name = "penetrationTiming";
      input.min = 3000;
      input.max = 15000;

      fieldContainer.appendChild(label);
      fieldContainer.appendChild(input);
      timingContainer.appendChild(fieldContainer);
    }
  };


  // Collect tags and rhythm from dynamic video sections
  function collectTags(tagContainer, vidPrefix) {
    const prefix = vidPrefix.value;
    const tagFields = tagContainer.querySelectorAll(`select[id^="${prefix}_tag_"], input[id^="${prefix}_rhythm_"]`);
    const tagsByVideo = {};

    tagFields.forEach((field) => {
        // Extract the video index from the ID
        const idParts = field.id.split('_'); // Split by underscore
        const videoIndex = idParts[2]; // This should be the index

        // Ensure we are using a number for indexing
        const numericIndex = parseInt(videoIndex, 10); // Convert to a number

        // Initialize entry for this video index if not already done
        if (!tagsByVideo[numericIndex]) {
            tagsByVideo[numericIndex] = { tags: [], rhythm: null }; // Initialize structure for tags and rhythm
        }

        if (field.tagName === 'SELECT' && field.value) {
            // Collect tags
            tagsByVideo[numericIndex].tags.push(field.value); // Add the tag to the corresponding video index
        } else if (field.tagName === 'INPUT' && field.type === 'number') {
            // Collect rhythm if it's an input of type number
            const rhythmValue = parseInt(field.value, 10) || 500; // Default rhythm value if not provided
            tagsByVideo[numericIndex].rhythm = rhythmValue; // Add the rhythm value to the video index
        }
    });

    // Convert to array of entries [ { videoIndex: 1, tags: [...], rhythm: 500 }, ... ]
    const result = Object.entries(tagsByVideo).map(([videoIndex, { tags, rhythm }]) => ({
        videoIndex: parseInt(videoIndex, 10), // Convert index to number
        tags,
        rhythm: rhythm !== null ? rhythm : 500, // Ensure rhythm is set, default to 500 if not present
    }));

    return result;
  };

  // Collect timings from dynamic timing fields
  function collectTimings(timingContainer) {
    const timingFields = timingContainer.querySelectorAll('input[id^="penetrationTiming"]');
    const timings = [];

    timingFields.forEach((field) => {
        const timingValue = parseInt(field.value, 10);

        if (!isNaN(timingValue) && timingValue >= 3000 && timingValue <= 15000) {
            timings.push(timingValue);
        } else {
            console.warn(`Timing value is out of bounds or invalid: ${field.value}`);
        }
    });

    return timings;
  };

  // add new track mapping
  function mapSoundsToTwee(prefix, path, characterName, soundCount) {
    let soundMappings = "";
    for (let i = 1; i <= soundCount; i++) {
      soundMappings += `    (newtrack:'${prefix} ${characterName} ${i}', '${path}${characterName} ${i}.mp3')\n`;
    }
    return soundMappings;
  };


  // Convert measurements
  function convertHeight(unit) {
    if (unit === 'inches') {
        const inches = parseFloat(mcfCharacterHeightIN.value);
        if (!isNaN(inches)) {
            const cm = Math.round(inches * 2.54);
            mcfCharacterHeightCM.value = cm.toString();
        } else {
            mcfCharacterHeightCM.value = '';
        }
    } else if (unit === 'cm') {
        const cm = parseFloat(mcfCharacterHeightCM.value);
        if (!isNaN(cm)) {
            const inches = Math.round(cm / 2.54);
            mcfCharacterHeightIN.value = inches.toString();
        } else {
            mcfCharacterHeightIN.value = '';
        }
    }
  };

  function convertWeight(unit) {
      if (unit === 'lbs') {
          const lbs = parseFloat(mcfCharacterWeightLB.value);
          if (!isNaN(lbs)) {
              const kg = Math.round(lbs * 0.453592);
              mcfCharacterWeightKG.value = kg.toString();
          } else {
              mcfCharacterWeightKG.value = '';
          }
      } else if (unit === 'kg') {
          const kg = parseFloat(mcfCharacterWeightKG.value);
          if (!isNaN(kg)) {
              const lbs = Math.round(kg / 0.453592);
              mcfCharacterWeightLB.value = lbs.toString();
          } else {
              mcfCharacterWeightLB.value = '';
          }
      }
  };

  function convertHeightToText() {
    const inches = parseInt(mcfCharacterHeightIN.value);

    if (!isNaN(inches) && inches > 0) {
        const feet = Math.floor(inches / 12);
        const remainingInches = inches % 12;

        return `${feet}ft, ${remainingInches}in`;
    }

    return '';
  };

  // Set up Default Values
  function setmcfDefaultValues() {
    const name = mcfCharacterName.value.toLowerCase().trim() || "character_id";

    mcfShowerPrefix.value = "shower"
    mcfMorningPrefix.value = "morning"
    mcfBathroomPrefix.value = "bathroom"
    mcfCleaningPrefix.value = "cleaning"
    mcfMasturbatePrefix.value = "masturbate"
    mcfMakeupPath.value = name
    mcfDoggyVidPrefix.value = "transactional"
    mcfDoggyInsertImgPrefix.value = "transactional insert"
    mcfDoggyMoanImgPrefix.value = "moan"
    mcfBJVidPrefix.value = "transactional"
    mcfFacefuckVidPrefix.value = "rough"
    mcfOralVidPrefix.value = "oral"
    mcfCreampieVidPrefix.value = "creampie"
    mcfFacialVidPrefix.value = "facial"
    mcfMouthVidPrefix.value = "mouth"
    mcfPullOutBodyVidPrefix.value = "body"
    mcfPullOutButtVidPrefix.value = "butt"
    mcfPullOutTitsVidPrefix.value = "tits"

    addLine("tits", mcfDescribeBoobsContainer)
    addLine("boobs", mcfDescribeBoobsContainer)
  };


  // Add Character name into directories
  function setmcfDefaultDirectories() {
    const name = mcfCharacterName.value.toLowerCase().trim() || "character_id";

    tooltipMCFForeplay.setContent(`This section is for groping and kissing. You need to have exactly 1 kiss video (kiss.mp4) and either an ass or tits grope.<br> You CANNOT have multiples of each.<br><br>This path is hardcoded for ${name}/foreplay. Please ensure your media files are in this location and are named 'kiss.mp4', 'grope ass.mp4', and/or 'grope tits.mp4'.`);
    tooltipSEPre1.setContent(`These are the length (in milliseconds) of the 3 sound files in: <u>aud/se/sex/penetration/pre/</u><br><br>They should be simply:<br>${name} 1.mp4<br>${name} 2.mp4<br>${name} 3.mp4`);
    tooltipSEPre2.setContent(`These are the length (in milliseconds) of the 3 sound files in: <u>aud/se/sex/penetration/pre/</u><br><br>They should be simply:<br>${name} 1.mp4<br>${name} 2.mp4<br>${name} 3.mp4`);
    tooltipSEPre3.setContent(`These are the length (in milliseconds) of the 3 sound files in: <u>aud/se/sex/penetration/pre/</u><br><br>They should be simply:<br>${name} 1.mp4<br>${name} 2.mp4<br>${name} 3.mp4`);
    tooltipShower.setContent(`This is the prefix for your Showering videos.<br><br> This goes in the chores folder: img/scenes/characters/${name}/chores/<br><br> If you only have one video, it should still be "${mcfShowerPrefix.value} 1.mp4"`)
    tooltipMorning.setContent(`This is the prefix for your Morning videos. This would be videos that play in the morning. Your character might be getting dressed, making breakfast, etc...<br><br> This goes in the chores folder: img/scenes/characters/${name}/chores/<br><br> If you only have one video, it should still be "${mcfMorningPrefix.value} 1.mp4"`)
    tooltipBathroom.setContent(`This is the prefix for your Bathroom videos. This would be videos that play in the morning when you are in the bathroom, getting dressed or putting on makeup in the mirror, etc...<br><br> This goes in the chores folder: img/scenes/characters/${name}/chores/<br><br> If you only have one video, it should still be "${mcfBathroomPrefix.value} 1.mp4"`)
    tooltipCleaning.setContent(`This is the prefix for your Cleaning videos. This would be for tidying up around the house, washing dishes, doing laundry, etc.<br><br> This goes in the chores folder: img/scenes/characters/${name}/chores/<br><br> If you only have one video, it should still be "${mcfCleaningPrefix.value} 1.mp4"`)
    tooltipSEMasturbate.setContent(`Location: aud/se/sex/loops/masturbate/<br><br>Files: ${name}.mp3<br><br>This is hardcoded, only 1 file and it has to be named like this.`);
    tooltipSECumMoan.setContent(`Location: aud/se/sex/orgasm/cum/<br><br>Files: ${name}.mp3<br><br>This is hardcoded, only 1 file and it has to be named like this.`);
    tooltipSEFondle.setContent(`Location: aud/se/sex/loops/fondling/<br><br>Files: ${name}.mp3<br><br>This is hardcoded, only 1 file and it has to be named like this.`);
    tooltipSEOrgasmSolo.setContent(`Location: aud/se/sex/orgasm/orgasm/<br><br>Files: ${name} solo.mp3<br><br>This is hardcoded, only 1 file and it has to be named like this.`);
    tooltipSELicking.setContent(`Location: aud/se/sex/loops/licking/<br><br>Files: ${name} 1.mp3<br>${name} 2.mp3<br>${name} 3.mp3, etc`);
    tooltipSEBJ.setContent(`Location: aud/se/sex/loops/bj/<br><br>Files: ${name} 1.mp3<br>${name} 2.mp3<br>${name} 3.mp3, etc`);
    tooltipSEBJRough.setContent(`Location: aud/se/sex/loops/bj rough/<br><br>Files: ${name} 1.mp3<br>${name} 2.mp3<br>${name} 3.mp3, etc`);
    tooltipSEDoggy.setContent(`Location: aud/se/sex/loops/doggy/<br><br>Files: ${name} 1.mp3<br>${name} 2.mp3<br>${name} 3.mp3, etc`);
    tooltipSERiding.setContent(`Location: aud/se/sex/loops/riding/<br><br>Files: ${name} 1.mp3<br>${name} 2.mp3<br>${name} 3.mp3, etc`);
    tooltipSEMissionary.setContent(`Location: aud/se/sex/loops/masturbate/<br><br>Files: ${name} 1.mp3<br>${name} 2.mp3<br>${name} 3.mp3, etc`);
    tooltipSEOrgasm.setContent(`Location: aud/se/sex/orgasm/orgasm/<br><br>Files: ${name} 1.mp3<br>${name} 2.mp3<br>${name} 3.mp3, etc`);
    tooltipSEPenetration.setContent(`Location: aud/se/sex/penetration/<br><br>Files: ${name} 1.mp3<br>${name} 2.mp3<br>${name} 3.mp3, etc<br><br>*Note, this total does not include the Pre-Penetration tracks.`);
    tooltipSECumDynamic.setContent(`Location: aud/se/sex/orgasm/cum/dynamic/<br><br>Files: ${name} 1.mp3<br>${name} 2.mp3<br>${name} 3.mp3, etc`);
    tooltipSECumPullOut.setContent(`Location: aud/se/sex/orgasm/cum/dynamic/<br><br>Files: ${name} body 1.mp3<br>${name} body 2.mp3<br>${name} body 3.mp3, etc`);
    tooltipSECumCreampie.setContent(`Location: aud/se/sex/orgasm/cum/dynamic/<br><br>Files: ${name} creampie 1.mp3<br>${name} creampie 2.mp3<br>${name} creampie 3.mp3, etc`);
    tooltipSECumTits.setContent(`Location: aud/se/sex/orgasm/cum/dynamic/<br><br>Files: ${name} tits 1.mp3<br>${name} tits 2.mp3<br>${name} tits 3.mp3, etc`);
    tooltipSECumMouth.setContent(`Location: aud/se/sex/orgasm/cum/dynamic/<br><br>Files: ${name} mouth 1.mp3<br>${name} mouth 2.mp3<br>${name} mouth 3.mp3, etc`);
    tooltipSECumFace.setContent(`Location: aud/se/sex/orgasm/cum/dynamic/<br><br>Files: ${name} face 1.mp3<br>${name} face 2.mp3<br>${name} face 3.mp3, etc`);

    // Update directory paths
    mcfDoggyPath.value = `${name}/sex/doggy/`;
    mcfBJPath.value = `${name}/bj/`;
    mcfFacefuckPath.value = `${name}/bj/`;
    mcfOralPath.value = `${name}/oral/`;
    mcfCumPath.value = `${name}/cum/`;
    mcfMasturbatePath.value = `${name}/solo/`;
    mcfMakeupPath.value = `${name}`;
  }


  // Build tag fields for MCF - Doggy
  function generateMCFDoggyFields() {
    generateDoggyTagFields(mcfDoggyVid, mcfDoggyVidPrefix, mcfDoggyContainer)
  };

  // Build tag fields for MCF - Facefuck
  function generateMCFFacefuckFields() {
    generateTagFields(mcfFacefuckVid, mcfFacefuckVidPrefix, mcfFacefuckContainer, locationTagOptions, 1)
  };

  // Build tag fields for MCF - Oral
  function generateMCFOralFields() {
    generateTagFields(mcfOralVid, mcfOralVidPrefix, mcfOralContainer, ["missionary","doggy"], 1, true)
  };

  // Build tag fields for MCF - Facial
  function generateMCFFacialFields() {
    generateTagFields(mcfFacialVid, mcfFacialVidPrefix, mcfFacialContainer, facialTagOptions, 4)
  };

  // Build tag fields for MCF - Mouth
  function generateMCFMouthFields() {
    generateTagFields(mcfMouthVid, mcfMouthVidPrefix, mcfMouthContainer, mouthTagOptions, 4)
  };

  // Build tag fields for MCF - Pull Out Tits
  function generateMCFPullOutTitsFields() {
    generateTagFields(mcfPullOutTitsVid, mcfPullOutTitsVidPrefix, mcfPullOutTitsContainer, ["lying","kneeling"], 1)
  };

  // Build tag fields for MCF - Pull Out Body
  function generateMCFPullOutBodyFields() {
    generateTagFields(mcfPullOutBodyVid, mcfPullOutBodyVidPrefix, mcfPullOutBodyContainer, locationTagOptions, 1)
  };

  // Build tag fields for MCF - Pull Out Butt
  function generateMCFPullOutButtFields() {
    generateTagFields(mcfPullOutButtVid, mcfPullOutButtVidPrefix, mcfPullOutButtContainer, locationTagOptions, 1)
  };

  // Generate MCF Zip File
  function generateMCFZip(){
    const characterName = mcfCharacterName.value;

    // Check if there are any files in the ZIP before generating
    if (Object.keys(mcfzip.files).length === 0) {
      console.error("No files added to the ZIP. Cannot generate a ZIP file.");
      return;
    }

    mcfzip.generateAsync({ type: "blob" }).then(function (content) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = `${characterName}.zip`;
      link.click();
    });
  };

  // Gather MCF Meta
  function gatherMCFMeta() {

    if (!mcfzip) {
      mcfzip = new JSZip();
    } 

    // Collect input values from forms
    const characterName = mcfCharacterName.value;
    const version = mcfYourModVersion.value;
    const author = mcfModAuthor.value;
    const baseGameVersion = mcfBaseGameVersion.value;

    if (!characterName) {
      console.error("Character Name is required.");
      alert("Please enter a character name.");
      return;
    }

    if (!version || !author || !baseGameVersion) {
      alert("All meta fields are required. Please fill out the fields.");
      return; 
    }

    // Create the meta content string
    let metaContent = `metaVersion: 1\n`;
    metaContent += `name: "${characterName}"\n`;
    metaContent += `version: "${version}"\n`;
    metaContent += `author: "${author}"\n`;
    metaContent += `baseGameVersion:\n  atLeast: "${baseGameVersion}"\n`;

    // Add meta to the ZIP
    mcfzip.folder("metas").file(`${characterName}.meta`, metaContent);
  };

  // Generate MCF Meta file ONLY
  function generateMCFMeta() {
    gatherMCFMeta();
    generateMCFZip();
  };

  // Generate MCF directories
  function gatherMCFDirectories() {
    const characterName = mcfCharacterName.value.toLowerCase();

    if (!mcfzip) {
      mcfzip = new JSZip();
    } 

    if (!characterName) {
      console.error("Character Name is required.");
      alert("Please enter a character name.");
      return;
    }

    // Add directories to the ZIP
    mcfzip.folder(`metas`)
    mcfzip.folder(`aud/se/sex/loops/bj`)
    mcfzip.folder(`aud/se/sex/loops/bj rough`)
    mcfzip.folder(`aud/se/sex/loops/doggy`)
    mcfzip.folder(`aud/se/sex/loops/fondling`)
    mcfzip.folder(`aud/se/sex/loops/licking`)
    mcfzip.folder(`aud/se/sex/loops/masturbate`)
    mcfzip.folder(`aud/se/sex/loops/missionary`)
    mcfzip.folder(`aud/se/sex/loops/riding`)
    mcfzip.folder(`aud/se/sex/orgasm`)
    mcfzip.folder(`aud/se/sex/orgasm/cum`)
    mcfzip.folder(`aud/se/sex/orgasm/cum/dynamic`)
    mcfzip.folder(`aud/se/sex/orgasm/orgasm`)
    mcfzip.folder(`aud/se/sex/penetration`)
    mcfzip.folder(`aud/se/sex/penetration/pre`)
    mcfzip.folder(`img/characters/bimbo`)
    mcfzip.folder(`img/characters/bj/bwc`)
    mcfzip.folder(`img/characters/cum`)
    mcfzip.folder(`img/characters/dream`)
    mcfzip.folder(`img/characters/emotion/bimbo`)
    mcfzip.folder(`img/characters/emotion/reject`)
    mcfzip.folder(`img/characters/emotion/surprise`)
    mcfzip.folder(`img/characters/face`)
    mcfzip.folder(`img/characters/female`)
    mcfzip.folder(`img/characters/male`)
    mcfzip.folder(`img/characters/makeup`)
    mcfzip.folder(`img/characters/nude/body`)
    mcfzip.folder(`img/characters/nude/boobs`)
    mcfzip.folder(`img/characters/nude/bust`)
    mcfzip.folder(`img/characters/nude/butt`)
    mcfzip.folder(`img/characters/nude/present`)
    mcfzip.folder(`img/characters/nude/pussy`)
    mcfzip.folder(`img/characters/nude/${characterName}/butt`)
    mcfzip.folder(`img/characters/nude/${characterName}/pussy`)
    mcfzip.folder(`img/characters/nude/${characterName}/tits`)
    mcfzip.folder(`img/characters/outfits/${characterName}/beach`)
    mcfzip.folder(`img/characters/outfits/${characterName}/casual`)
    mcfzip.folder(`img/characters/outfits/${characterName}/fetish`)
    mcfzip.folder(`img/characters/outfits/${characterName}/gym`)
    mcfzip.folder(`img/characters/outfits/${characterName}/lingerie`)
    mcfzip.folder(`img/characters/outfits/${characterName}/lounge`)
    mcfzip.folder(`img/characters/outfits/${characterName}/office`)
    mcfzip.folder(`img/characters/outfits/${characterName}/stylin`)
    mcfzip.folder(`img/characters/places/beach`)
    mcfzip.folder(`img/characters/pregnancy/${characterName}`)
    mcfzip.folder(`img/characters/sex/doggy`)
    mcfzip.folder(`img/characters/sex/doggy/moan`)
    mcfzip.folder(`img/characters/sex/insert`)
    mcfzip.folder(`img/characters/sex/missionary/moan`)
    mcfzip.folder(`img/places/club/dancers`)
    mcfzip.folder(`img/scenes/characters/${mcfBJPath.value.toLowerCase()}`)
    mcfzip.folder(`img/scenes/characters/${characterName}/chores`)
    mcfzip.folder(`img/scenes/characters/${mcfCumPath.value.toLowerCase()}`)
    mcfzip.folder(`img/scenes/characters/${characterName}/foreplay`)
    mcfzip.folder(`img/scenes/characters/${mcfOralPath.value.toLowerCase()}`)
    mcfzip.folder(`img/scenes/characters/${mcfDoggyPath.value.toLowerCase()}`)
    mcfzip.folder(`img/scenes/characters/${characterName}/sex/active/cowgirl`)
    mcfzip.folder(`img/scenes/characters/${characterName}/sex/active/doggy`)
    mcfzip.folder(`img/scenes/characters/${characterName}/sex/active/missionary`)
    mcfzip.folder(`img/scenes/characters/${characterName}/sex/active/service`)
    mcfzip.folder(`img/scenes/characters/${characterName}/sex/passive/cowgirl`)
    mcfzip.folder(`img/scenes/characters/${characterName}/sex/passive/doggy`)
    mcfzip.folder(`img/scenes/characters/${characterName}/sex/passive/missionary`)
    mcfzip.folder(`img/scenes/characters/${characterName}/sex/passive/service`)
    mcfzip.folder(`img/scenes/characters/${characterName}/solo`)
    mcfzip.folder(`img/scenes/characters/${characterName}/tg`)

    // Hairstyle section
    mcfzip.folder(`img/characters/hairstyle`)
    mcfzip.folder(`img/characters/hairstyle/afro`);
    mcfzip.folder(`img/characters/hairstyle/bangs`);
    mcfzip.folder(`img/characters/hairstyle/beach`);
    mcfzip.folder(`img/characters/hairstyle/blowout`);
    mcfzip.folder(`img/characters/hairstyle/bob`);
    mcfzip.folder(`img/characters/hairstyle/box braids`);
    mcfzip.folder(`img/characters/hairstyle/braided crown half-up`);
    mcfzip.folder(`img/characters/hairstyle/braids`);
    mcfzip.folder(`img/characters/hairstyle/colored bangs`);
    mcfzip.folder(`img/characters/hairstyle/colored waves`);
    mcfzip.folder(`img/characters/hairstyle/cornrow braid`);
    mcfzip.folder(`img/characters/hairstyle/crown braid`);
    mcfzip.folder(`img/characters/hairstyle/curly`);
    mcfzip.folder(`img/characters/hairstyle/double buns and bangs`);
    mcfzip.folder(`img/characters/hairstyle/dreadlock bob`);
    mcfzip.folder(`img/characters/hairstyle/fancy`);
    mcfzip.folder(`img/characters/hairstyle/half updo`);
    mcfzip.folder(`img/characters/hairstyle/half-up pigtails`);
    mcfzip.folder(`img/characters/hairstyle/high ponytail`);
    mcfzip.folder(`img/characters/hairstyle/long and layered`);
    mcfzip.folder(`img/characters/hairstyle/loose curls`);
    mcfzip.folder(`img/characters/hairstyle/messy bun`);
    mcfzip.folder(`img/characters/hairstyle/odango`);
    mcfzip.folder(`img/characters/hairstyle/pigtail buns`);
    mcfzip.folder(`img/characters/hairstyle/pigtails`);
    mcfzip.folder(`img/characters/hairstyle/pigtails and bangs`);
    mcfzip.folder(`img/characters/hairstyle/pixie bob`);
    mcfzip.folder(`img/characters/hairstyle/playful waves`);
    mcfzip.folder(`img/characters/hairstyle/ponytail`);
    mcfzip.folder(`img/characters/hairstyle/sleek waves`);
    mcfzip.folder(`img/characters/hairstyle/solo braid`);
    mcfzip.folder(`img/characters/hairstyle/space buns`);
    mcfzip.folder(`img/characters/hairstyle/straightened`);
    mcfzip.folder(`img/characters/hairstyle/textured bob`);
    mcfzip.folder(`img/characters/hairstyle/tousled pony wave`);
    mcfzip.folder(`img/characters/hairstyle/undercut`);
    mcfzip.folder(`img/characters/hairstyle/updo`);
    mcfzip.folder(`img/characters/hairstyle/volume`);
    mcfzip.folder(`img/characters/hairstyle/wavy`);
  };

  // Generate MCF Directories ONLY
  function generateMCFDirectories() {
    gatherMCFDirectories();
    generateMCFZip();
  };


  // Gather MCF File Values and add to mcfzip
  function gatherMCFFiles() {
    if (!mcfzip) {
      mcfzip = new JSZip();
    } 

    // Collect input values from forms
    const characterName = mcfCharacterName.value.toLowerCase();
    const race = mcfCharacterRace.value;
    const bodyType = mcfCharacterBodyType.value;
    const breasts = mcfCharacterBreasts.value;
    const butt = mcfCharacterButt.value;
    const hairColor = mcfCharacterHairColor.value;
    const eyeColor = mcfCharacterEyeColor.value;
    const bust = mcfCharacterBust.value;
    const heightIN = mcfCharacterHeightIN.value;
    const heightCM = mcfCharacterHeightCM.value;
    const heightText = convertHeightToText();
    const weightLB = mcfCharacterWeightLB.value;
    const weightKG = mcfCharacterWeightKG.value;
    const makeupFile = mcfMakeupPath.value;
    const gymType = mcfGymType.value;
    const grope = document.querySelector('input[name="mcfGropeRadio"]:checked').value;

    // Containers
    const describeTransform = extractTags(mcfDescribeTransformationContainer);
    const examineSelfReluctant = extractTags(mcfExamineSelfReluctantContainer);
    const examineSelfConfident = extractTags(mcfExamineSelfConfidentContainer);
    const thoughtClothes = extractTags(mcfThoughtClothesContainer);
    const describeBoobs = extractTags(mcfDescribeBoobsContainer);
    const describeBody = extractTags(mcfDescribeBodyContainer);
    const describeButt = extractTags(mcfDescribeButtContainer);
    const describeHairColor = extractTags(mcfDescribeHairColorContainer);
    const describeHairTexture = extractTags(mcfDescribeHairTextureContainer);
    const hairstyles = extractTags(mcfHairstylesContainer);
    const stepSisTease = extractTags(mcfStepSisShowerTeaseContainer);
    const tagline = extractTags(mcfCharacterTaglineContainer);
    const tagOld = extractTags(mcfCharacterTagOldContainer);
    const tagNew = extractTags(mcfCharacterTagNewContainer);
    const shopComment = extractTags(mcfEventShopCommentContainer);
    const shopThought = extractTags(mcfEventShopThoughtContainer);
    const catcallBody = extractTags(mcfCatcallBodyContainer);
    const catcallFace = extractTags(mcfCatcallFaceContainer);
    const catcallDirty = extractTags(mcfCatcallDirtyContainer);
    const catcallRace = extractTags(mcfCatcallRaceContainer);
    const pregnancyWeeks = extractTags(mcfPregnancyWeeksContainer);
    const pregnancy1st = extractTags(mcfPregnancy1stCheckContainer);
    const pregnancy2nd = extractTags(mcfPregnancy2ndCheckContainer);
    const pregnancyPrenatal = extractTags(mcfPregnancyPrenatalContainer);
    const fatherShow = extractTags(mcfCallFatherShowContainer);
    const fatherBJ = extractTags(mcfCallFatherBJContainer);
    const bruceTF = extractParagraph(mcfBruceTFContainer);

    // Random Descriptions
    const randomHairTexture = describeHairTexture[Math.floor(Math.random() * describeHairTexture.length)] || "long";
    const randomHairColor = describeHairColor[Math.floor(Math.random() * describeHairColor.length)] || hairColor;
    const randomBodyDescription = describeBody[Math.floor(Math.random() * describeBody.length)] || "sexy, feminine";
    const randomPetName = petNames[Math.floor(Math.random() * petNames.length)];

    // Paths
    const doggyPath = mcfDoggyPath.value;
    const bjPath = mcfBJPath.value;
    const facefuckPath = mcfFacefuckPath.value;
    const oralPath = mcfOralPath.value;
    const cumPath = mcfCumPath.value;
    const masturbatePath = mcfMasturbatePath.value;

    // Prefixes
    const doggyVidPrefix = mcfDoggyVidPrefix.value;
    const doggyInsertPrefix = mcfDoggyInsertImgPrefix.value;
    const doggyMoanPrefix = mcfDoggyMoanImgPrefix.value;
    const bjPrefix = mcfBJVidPrefix.value;
    const facefuckPrefix = mcfFacefuckVidPrefix.value;
    const oralPrefix = mcfOralVidPrefix.value;
    const creampiePrefix = mcfCreampieVidPrefix.value;
    const facialPrefix = mcfFacialVidPrefix.value;
    const mouthPrefix = mcfMouthVidPrefix.value;
    const pulloutBodyPrefix = mcfPullOutBodyVidPrefix.value;
    const pulloutButtPrefix = mcfPullOutButtVidPrefix.value;
    const pulloutTitsPrefix = mcfPullOutTitsVidPrefix.value;
    const showerPrefix = mcfShowerPrefix.value;
    const morningPrefix = mcfMorningPrefix.value;
    const bathroomPrefix = mcfBathroomPrefix.value;
    const cleaningPrefix = mcfCleaningPrefix.value;
    const masturbatePrefix = mcfMasturbatePrefix.value;

    // Arrays
    const tagArrayDoggy = [];
    const rhythmArrayDoggy = [];
    const tagArrayFacefuck = [];
    const tagArrayFacial = [];
    const tagArrayBigLoad = [];
    const tagArrayUnwilling = [];
    const tagArrayMouth = [];
    const tagArrayOral = [];
    const rhythmArrayOral = [];
    const tagArrayPullout = [];
    const timingArrayPenetration = [];

    // Lines
    const doggyLines = [];
    const doggyRhythmLines = [];
    const facefuckLines = [];
    const oralLines = [];
    const oralRhythmLines = [];
    const facialLines = [];
    const mouthLines = [];
    const pulloutBodyLines = [];
    const pulloutButtLines = [];
    const pulloutTitsLines = [];

    // Integers
    const bigLoadInts = [];
    const unwillingLoadInts = [];
    const doggyVidInt = parseInt(mcfDoggyVid.value) || 0;
    const doggyInsertImgInt = parseInt(mcfDoggyInsertImg.value) || 0;
    const doggyMoanImgInt = parseInt(mcfDoggyMoanImg.value) || 0;
    const bjVidInt = parseInt(mcfBJVid.value) || 0;
    const facefuckVidInt = parseInt(mcfFacefuckVid.value) || 0;
    const oralVidInt = parseInt(mcfOralVid.value) || 0;
    const creampieVidInt = parseInt(mcfCreampieVid.value) || 0;
    const facialVidInt = parseInt(mcfFacialVid.value) || 0;
    const mouthVidInt = parseInt(mcfMouthVid.value) || 0;
    const pulloutBodyVidInt = parseInt(mcfPullOutBodyVid.value) || 0;
    const pulloutButtVidInt = parseInt(mcfPullOutButtVid.value) || 0;
    const pulloutTitsVidInt = parseInt(mcfPullOutTitsVid.value) || 0;
    const showerVidInt = parseInt(mcfShowerVid.value) || 0;
    const morningVidInt = parseInt(mcfMorningVid.value) || 0;
    const bathroomVidInt = parseInt(mcfBathroomVid.value) || 0;
    const cleaningVidInt = parseInt(mcfCleaningVid.value) || 0;
    const masturbateVidInt = parseInt(mcfMasturbateVid.value) || 0;
    const seLickingInt = parseInt(mcfSELicking.value) || 0;
    const seOrgasmInt = parseInt(mcfSEOrgasm.value) || 0;
    const seBJInt = parseInt(mcfSEBJ.value) || 0;
    const seBJRoughInt = parseInt(mcfSEBJRough.value) || 0;
    const seDoggyInt = parseInt(mcfSEDoggy.value) || 0;
    const seMissionaryInt = parseInt(mcfSEMissionary.value) || 0;
    const seRidingInt = parseInt(mcfSERiding.value) || 0;
    const sePenetrationInt = parseInt(mcfSEPenetration.value) || 0;
    const seInsert1Int = parseInt(mcfInsertTiming1.value) || 0;
    const seInsert2Int = parseInt(mcfInsertTiming2.value) || 0;
    const seInsert3Int = parseInt(mcfInsertTiming3.value) || 0;
    const seCumDynamic = parseInt(mcfSECumDynamic.value) || 0;
    const seCumPullOut = parseInt(mcfSECumPullOut.value) || 0;
    const seCumCreampie = parseInt(mcfSECumCreampie.value) || 0;
    const seCumTits = parseInt(mcfSECumTits.value) || 0;
    const seCumMouth = parseInt(mcfSECumMouth.value) || 0;
    const seCumFace = parseInt(mcfSECumFace.value) || 0;

    // Sound Mapping
    const orgasmSoundMapping = mapSoundsToTwee('orgasm', 'aud/se/sex/orgasm/orgasm/', characterName, seOrgasmInt);
    const lickingSoundMapping = mapSoundsToTwee('licking loop', 'aud/se/sex/loops/licking/', characterName, seLickingInt);
    const bjSoundMapping = mapSoundsToTwee('bj loop', 'aud/se/sex/loops/bj/', characterName, seBJInt);
    const bjRoughSoundMapping = mapSoundsToTwee('bj rough loop', 'aud/se/sex/loops/bj rough/', characterName, seBJRoughInt);
    const doggySoundMapping = mapSoundsToTwee('doggy loop', 'aud/se/sex/loops/doggy/', characterName, seDoggyInt);
    const missionarySoundMapping = mapSoundsToTwee('missionary loop', 'aud/se/sex/loops/missionary/', characterName, seMissionaryInt);
    const ridingSoundMapping = mapSoundsToTwee('riding loop', 'aud/se/sex/loops/riding/', characterName, seRidingInt);
    const penetrationSoundMapping = mapSoundsToTwee('penetration', 'aud/se/sex/penetration/', characterName, sePenetrationInt);

    // Field validation
    if (!characterName) {
      console.error("Character Name is required.");
      alert("Please enter a character name.");
      return;
    }

    if (!bust || 
      !heightIN || 
      !heightCM || 
      !weightLB || 
      !weightKG
    ) {
      console.error("Character Information fields are required.");
      alert("Character Information fields are required.");
      return;
    }

    if (describeBoobs.length === 0 ||
      describeBody.length === 0 ||
      describeButt.length === 0 ||
      describeTransform.length === 0 ||
      thoughtClothes.length === 0 ||
      examineSelfReluctant.length === 0 ||
      examineSelfConfident.length === 0
    ) {
      console.error("Character Description fields are required.");
      alert("Character Description fields are required.");
      return;
    }

    if (describeHairColor.length === 0 ||
      describeHairTexture.length === 0 ||
      hairstyles.length === 0 
    ) {
      console.error("Character Hair fields are required.");
      alert("Character Hair fields are required.");
      return;
    }

    if (tagline.length === 0 ||
      tagOld.length === 0 ||
      tagNew.length === 0
    ) {
      console.error("New-U fields are required.");
      alert("New-U fields are required.");
      return;
    }

    if (stepSisTease.length === 0 ||
      !makeupFile ||
      showerVidInt === 0 ||
      cleaningVidInt === 0 ||
      bathroomVidInt === 0
    ) {
      console.error("Home fields are required.");
      alert("Home fields are required.");
      return;
    }

    if (masturbateVidInt === 0) {
      console.error("Masturbation fields are required."); 
      alert("Masturbation fields are required.");
      return;
    }

    if (shopComment.length === 0 ||
      shopThought.length === 0
    ) {
      console.error("Pharmacist Event fields are required.");
      alert("Pharmacist Event fields are required.");
      return;
    }

    if (catcallBody.length === 0 ||
      catcallFace.length === 0 ||
      catcallDirty.length === 0 ||
      catcallRace.length === 0
    ) {
      console.error("Catcall fields are required.");
      alert("Catcall fields are required.");
      return;
    }

    if (pregnancyWeeks.lenth === 0 || 
      pregnancy1st.length === 0 ||
      pregnancy2nd.length === 0 ||
      pregnancyPrenatal.length === 0 ||
      fatherShow.length === 0 ||
      fatherBJ.length === 0
    ) {
      console.error("Pregnancy fields are required.");
      alert("Pregnancy fields are required.");
      return;
    }

    if (doggyVidInt === 0 || doggyInsertImgInt === 0 || doggyMoanImgInt === 0) {
      console.error("Doggy fields are required."); 
      alert("Doggy fields are required.");
      return;
    }

    if (bjVidInt === 0) {
      console.error("BJ fields are required."); 
      alert("BJ fields are required.");
      return;
    }

    if (facefuckVidInt === 0) {
      console.error("Facefuck fields are required."); 
      alert("Facefuck fields are required.");
      return;
    }

    if (oralVidInt === 0) {
      console.error("Oral fields are required."); 
      alert("Oral fields are required.");
      return;
    }

    if (facialVidInt === 0) {
      console.error("Facial fields are required."); 
      alert("Facial fields are required.");
      return;
    } 


    // Collect tag data from Transactional Doggy
    const doggyTags = collectTags(mcfDoggyContainer, mcfDoggyVidPrefix);

    doggyTags.forEach(({ videoIndex, tags, rhythm }) => {
      const tagsString = tags.join('","');
      doggyLines.push(`\n        "${doggyPath}${doggyVidPrefix} ${videoIndex}", (a:"${tagsString}")`);
      doggyRhythmLines.push(`\n        "${doggyPath}${doggyVidPrefix} ${videoIndex}", ${rhythm}`);
      })
    tagArrayDoggy.push(doggyLines.join(', '));
    rhythmArrayDoggy.push(doggyRhythmLines.join(', '));    


    // Collect tag data from Facefuck
    const facefuckTags  = collectTags(mcfFacefuckContainer, mcfFacefuckVidPrefix);

    facefuckTags.forEach(({ videoIndex, tags }) => {
        const tagsString = tags.join('","'); 
        facefuckLines.push(`\n        "${facefuckPath}${facefuckPrefix} ${videoIndex}", "${tagsString}"`);
    });
    tagArrayFacefuck.push(facefuckLines.join(', '));
    
    // Collect tag data from Oral
    const oralTags = collectTags(mcfOralContainer, mcfOralVidPrefix);
    
    oralTags.forEach(({ videoIndex, tags, rhythm }) => {
      const tagsString = tags.join('","'); 
      oralLines.push(`\n        "scenes/characters/${oralPath}${oralPrefix} ${videoIndex}.mp4", "${tagsString}"`);
      oralRhythmLines.push(`\n        "scenes/characters/${oralPath}${oralPrefix} ${videoIndex}.mp4", ${rhythm}`)
    });
    tagArrayOral.push(oralLines.join(', '));
    rhythmArrayOral.push(oralRhythmLines.join(', '));

    // Collect tag data from Mouth
    if (mouthVidInt > 0) {
      const mouthTags = collectTags(mcfMouthContainer, mcfMouthVidPrefix);

      mouthTags.forEach(({ videoIndex, tags }) => {
          const tagsString = tags.join('","'); 
          mouthLines.push(`\n            "/characters/${cumPath}${mouthPrefix} ${videoIndex}", (a:"${tagsString}")`);
      });
      tagArrayMouth.push(mouthLines.join(', '));
    }
    
    // Collect tag data from Facials
    if (facialVidInt > 0) {
      const facialTags = collectTags(mcfFacialContainer, mcfFacialVidPrefix);

      facialTags.forEach(({ videoIndex, tags }) => {
        const tagsString = tags.join('","'); 
        facialLines.push(`\n        "/characters/${cumPath}${facialPrefix} ${videoIndex}", (a:"${tagsString}")`);
      });
      tagArrayFacial.push(facialLines.join(','));   
      
      // Loop through the facialTags to determine indices for big load and unwilling tags
      facialTags.forEach(({ videoIndex, tags }) => {
        const hasBigLoad = tags.some(tag => bigLoadOptions.some(searchTerm => tag.includes(searchTerm)));
        if (hasBigLoad) {
            bigLoadInts.push(videoIndex); // Push the video index
        }

        const hasUnwillingLoad = tags.some(tag => unwillingLoadOptions.some(searchTerm => tag.includes(searchTerm)));
        if (hasUnwillingLoad) {
            unwillingLoadInts.push(videoIndex); // Push the video index
        }
      });
      tagArrayBigLoad.push(bigLoadInts.join(','));
      tagArrayUnwilling.push(unwillingLoadInts.join(','));
    }

    // Collect tag data from Pull Out
    if (pulloutBodyVidInt > 0) {
      const pulloutBodyTags  = collectTags(mcfPullOutBodyContainer, mcfPullOutBodyVidPrefix);
      
      pulloutBodyTags.forEach(({ videoIndex, tags }) => {
        const tagsString = tags.join('","'); 
        
        pulloutBodyLines.push(`\n        "/characters/${cumPath}${pulloutBodyPrefix} ${videoIndex}", (a:"body","${tagsString}")`);
      });
      tagArrayPullout.push(pulloutBodyLines.join(', '));
    }
    
    if (pulloutButtVidInt > 0) {
      const pulloutButtTags  = collectTags(mcfPullOutButtContainer, mcfPullOutButtVidPrefix);
      
      pulloutButtTags.forEach(({ videoIndex, tags }) => {
        const tagsString = tags.join('","'); 
        pulloutButtLines.push(`\n        "/characters/${cumPath}${pulloutButtPrefix} ${videoIndex}", (a:"butt","${tagsString}")`);
      });
      tagArrayPullout.push(pulloutButtLines.join(', '));
    }

    if (pulloutTitsVidInt > 0) {
      const pulloutTitsTags  = collectTags(mcfPullOutTitsContainer, mcfPullOutTitsVidPrefix);

      pulloutTitsTags.forEach(({ videoIndex, tags }) => {
        const tagsString = tags.join('","'); 
        pulloutTitsLines.push(`\n        "/characters/${cumPath}${pulloutTitsPrefix} ${videoIndex}", (a:"tits","${tagsString}")`);
      });
      tagArrayPullout.push(pulloutTitsLines.join(', '));
    }

    // Collect tag data from Penetration Sounds
    const penetrationTimings = collectTimings(mcfPenetrationTimingContainer);
    const timingLines = []
    
    penetrationTimings.forEach((timing, index) => {
      timingLines.push(`\n    "penetration ${characterName} ${index + 1}", ${timing}`)
    });

    timingArrayPenetration.push(timingLines.join(', '));

    // Tag Validation
    const isDoggyTagsEmpty = doggyTags.every(tag => tag.tags.length === 0);
    const isFacefuckTagsEmpty = facefuckTags .every(tag => tag.tags.length === 0);
    const isOralTagsEmpty = oralTags.every(tag => tag.tags.length === 0);
    
    if (isDoggyTagsEmpty && isFacefuckTagsEmpty && isOralTagsEmpty) {
      console.error("At least one tag field is required.");
      alert("Please select at least one tag.");
      return;
    }   

    // Collect videos from Morning / Bathroom
    const morningVideos = getVideoArray(morningPrefix, morningVidInt);
    const bathroomVideos = getVideoArray(bathroomPrefix, bathroomVidInt);
    const dayVideos = [...morningVideos, ...bathroomVideos];


    // twee building section
    let tweeContent = `:: add character ${characterName} [add_character]\n`;
    tweeContent += `(set:$character_list to it + (a:"${characterName}"))\n\n`;
    tweeContent += `:: core character add ${characterName} [initialize init_new]\n`;
    tweeContent += `(unless:$core_chars contains "${characterName}")[(set:$core_chars to it + (a:"${characterName}"))]\n\n`;
    
    //  Describe Transformation
    tweeContent += `:: transformation description ${characterName}\n{\n`;
    tweeContent += `    (twirl: "${describeTransform.join('",\n    "')}")\n}\n\n`;

    //  Body Stats
    tweeContent += `:: load character body stats ${characterName}\n{\n`;
    tweeContent += `    (set: $character to $character + (dm:\n`;
    tweeContent += `    "id", "${characterName}",\n`;
    tweeContent += `    "race", "${race}",\n`;
    tweeContent += `    "breasts", "${breasts}",\n`;
    tweeContent += `    "butt", "${butt}",\n`;
    tweeContent += `    "hair", "${hairColor}",\n`;
    tweeContent += `    "body type", "${bodyType}",\n`;
    tweeContent += `    "height", ${heightIN},\n`;
    tweeContent += `    "weight kg", ${weightKG},\n`;
    tweeContent += `    "weight lb", ${weightLB},\n`;
    tweeContent += `    "height cm", ${heightCM},\n`;
    tweeContent += `    "height text", "${heightText}",\n`;
    tweeContent += `    "bra", "${bust}${breasts}",\n`;
    tweeContent += `    "eyes", "${eyeColor}"))\n}\n\n`;
    tweeContent += `:: New-U select body ${characterName}\n{\n`;
    tweeContent += `    (set: $new_stats to (dm:\n`;
    tweeContent += `    "id", "${characterName}",\n`;
    tweeContent += `    "race", "${race}",\n`;
    tweeContent += `    "breasts", "${breasts}",\n`;
    tweeContent += `    "butt", "${butt}",\n`;
    tweeContent += `    "hair", "${hairColor}",\n`;
    tweeContent += `    "body type", "${bodyType}",\n`;
    tweeContent += `    "height", ${heightIN},\n`;
    tweeContent += `    "weight kg", ${weightKG},\n`;
    tweeContent += `    "weight lb", ${weightLB},\n`;
    tweeContent += `    "height cm", ${heightCM},\n`;
    tweeContent += `    "height text", "${heightText}",\n`;
    tweeContent += `    "bra", "${bust}${breasts}",\n`;
    tweeContent += `    "eyes", "${eyeColor}"))\n}\n\n`;
    tweeContent += `:: New-U change back ${characterName}\n`;
    tweeContent += `{(display:"New-U select body ${characterName}")}\n\n`;
    tweeContent += `:: New-U transfortune spin ${characterName}\n`;
    tweeContent += `{(display:"New-U select body ${characterName}")}\n\n`;

    //  Examine Self
    tweeContent += `:: examine yourself ${characterName}\n{\n`;
    tweeContent += `    (if:$character's "reluctance" > 6)[(twirl:\n`;
    tweeContent += `    "${examineSelfReluctant.join('",\n    "')}")\n    ]\n`;
    tweeContent += `    (else:)[(twirl:"${examineSelfConfident.join('",\n    "')}")\n    ]\n}\n\n`;

    //  Thought Clothes
    tweeContent += `:: thought clothes ${characterName}\n{\n`;
    tweeContent += `    (twirl: "${thoughtClothes.join('",\n    "')}")\n}\n\n`;

    tweeContent += `:: pants squeeze ${characterName}\n{} <!-- Deliberately blank -->\n\n`;

    //  Step-sis Shower Tease
    tweeContent += `:: stepsis shower tease chat ${characterName}"\n{\n`;
    tweeContent += `    (set:$line to "cant look at you the same way")(display:"stepsis voice line")\n`;
    tweeContent += `    (twirl: "${stepSisTease.join('",\n    "')}")\n}\n\n`;

    //  Chores
    tweeContent += `:: makeup image ${characterName}\n`;
    tweeContent += `{($pic:"characters/makeup/${makeupFile}.jpg")}\n\n`;

    tweeContent += `:: shower image ${characterName}\n`;
    if (showerVidInt === 1) {
      tweeContent += `{(set:$img to "characters/${characterName}/chores/${showerPrefix} 1")}\n\n`;
    } else {
      tweeContent += `{(set:$img to "characters/${characterName}/chores/${showerPrefix} " + (text:(twist:1,${showerVidInt})))}\n\n`;
    }

    tweeContent += `:: chores image ${characterName}\n{\n`;
    tweeContent += `    (if:$character's "race" is "black")[(set:$img to (twirl:"chores dark 1","chores dark 2"))]\n`;
    tweeContent += `    (else:)[(set:$img to (twirl:"chores light 1","chores light 2","chores light 3","chores light 4","chores 1"))]\n}\n\n`;

    tweeContent += `:: chores image 2 ${characterName}\n{\n`;
    if (cleaningVidInt === 1) {
      tweeContent += `    (set:$img to "/characters/${characterName}/chores/${cleaningPrefix} 1")\n`;
    } else {
      tweeContent += `    (set:$img to "/characters/${characterName}/chores/${cleaningPrefix} " + (text:(twist:1,${cleaningVidInt})))\n`;
    }
    tweeContent += `    ($vid: "scenes/" + $img + ".mp4")\n}\n\n`
    
    tweeContent += `:: bathroom post transform ${characterName}\n{\n`;
    if (bathroomVidInt === 1) {
      tweeContent += `    (set:$img to "/characters/${characterName}/chores/${bathroomPrefix} 1")\n`;
    } else {
      tweeContent += `    (set:$img to "/characters/${characterName}/chores/${bathroomPrefix} " + (text:(twist:1,${bathroomVidInt})))\n`;
    }
    tweeContent += `    ($vid: "scenes/" + $img + ".mp4")\n}\n\n`

    tweeContent += `:: day post transform [around]\n{\n`;
    tweeContent += `    (display:_around)\n`;
    tweeContent += `    (if:$character's "id" is "${characterName}")[\n`;
    tweeContent += `        (if:(is_fem:))[(replace:?screen)[\n`;
    if (bathroomVidInt === 1) {
      tweeContent += `            ($vid:"scenes/characters/${characterName}/chores/${bathroomPrefix} 1.mp4")\n`;
    } else {
      tweeContent += `            ($vid:"scenes/characters/${characterName}/chores/${bathroomPrefix} " + (text:(twist:1,${bathroomVidInt})) + ".mp4")\n`;
    }
    tweeContent += `        (display:"activities")\n    ]]]\n}\n\n`;

    tweeContent += `:: day [around]\n{\n`;
    tweeContent += `    (display:_around)\n`;
    tweeContent += `    (if:$character's "id" is "${characterName}")[\n`;
    tweeContent += `        (if:(is_fem:))[(replace:?screen)[\n`;
    tweeContent += `            (set:$img to (twirl:"${dayVideos.join('", "')}"))\n`;
    tweeContent += `            ($vid:"scenes/characters/${characterName}/chores/" + $img + ".mp4")\n`;
    tweeContent += `        (display:"calculate pregnancy chance")(display:"messages")\n`;
    tweeContent += `        (display:"refresh possible activities")(display:"activities")\n`;
    tweeContent += `        (set:$mall_song to "mall " + (text:(twist:1,8)))\n(set:$beach_song to "beach " + (text:(twist:1,11)))]]]\n}\n\n`

    //  Masturbate
    tweeContent += `:: masturbation setup ${characterName}\n`;
    if (masturbateVidInt === 1) {
      tweeContent += `{(set:$img to "characters/${masturbatePath}${masturbatePrefix}")}\n\n`;
    } else {
      tweeContent += `{(set:$img to "characters/${masturbatePath}${masturbatePrefix} " + (text:(twist:1,${masturbateVidInt})))}\n\n`;
    }
    tweeContent += `:: masturbate shame ${characterName}\n`;
    tweeContent += `{(display:"masturbation setup ${characterName}")}\n\n`;

    //  Gym Options
    tweeContent += `:: gym options ${characterName}\n{\n`;
    tweeContent += `    (set:$type to "${gymType}")\n`;
    tweeContent += `    (set:$gym_options to (cond:\n`;
    tweeContent += `    $type is "yoga", (twirl:"Do some yoga","Attend a yoga class","Stretch","Yoga"),\n`;
    tweeContent += `    $type is "run", (twirl:"Take some laps", "Go for a run", "Start jogging"),\n`;
    tweeContent += `    $type is "treadmill", (twirl:"Use the treadmill","Run on the treadmill"),\n`;
    tweeContent += `    $type is "machines", (twirl:"Use the machines","Use machines","Use the main gym"),\n`;
    tweeContent += `    $type is "pt", (twirl:"High-Intensity Interval Training","Train"),\n`;
    tweeContent += `    (twirl:"Let's Sweat","Workout","Hit the gym")))\n\n`;
    tweeContent += `    (link:$gym_options)[(set:$next to "gym female workout")(display:"change screen")]\n}\n\n`;

    //  Breathing
    tweeContent += `:: breathing ambience ${characterName}\n`;
    tweeContent += `{(set:$var to (twirl:"a","b"))}\n\n`;

    tweeContent += `:: breathing ambience force ${characterName}\n`;
    tweeContent += `{(set:$var to (twirl:"a","b"))}\n\n`;

    //  Pharmacist BJ
    tweeContent += `:: event shop deal accept ${characterName}\n{\n`;
    tweeContent += `    (set:$comment to (twirl:"${shopComment.join('",\n    "')}"))\n`;
    tweeContent += `    (set:$thought to (twirl:"${shopThought.join('",\n    "')}"))\n}\n\n`;

    //  Coworker React
    tweeContent += `:: coworker reacts to your appearance ${characterName}\n{\n`;
    tweeContent += `    (print:(twirl:"${describeBody.join('",\n    "')}")\n` 
    tweeContent += `    + " " + (twirl:"body","bod","figure","physique"))\n}\n\n`;

    //  Descriptions
    tweeContent += `:: transactional sex describe body ${characterName}\n`
    tweeContent += `{(set:$descriptions to (a:"butt","tits","hair"))}\n\n`;

    tweeContent += `:: sex transactional body comment ${characterName}\n{\n`;
    tweeContent += `    (set:$text to (twirl:"${describeBody.join('",\n    "')}"))\n}\n\n`;

    tweeContent += `:: describe butt ${characterName}\n{\n`;
    tweeContent += `    (set:$phat to (twirl:"${describeButt.join('",\n    "')}"))\n}\n\n`;

    tweeContent += `:: sex transactional tits comment ${characterName}\n{\n`;
    tweeContent += `    (set:$tits to (twirl:"${describeBoobs.join('",\n    "')}"))\n}\n\n`;

    tweeContent += `:: transactional sex describe he talks ${characterName}\n`;
    tweeContent += `{(display:"describe butt ${characterName}"){(display:"sex transactional tits comment ${characterName}")}}\n\n`;

    tweeContent += `:: sex transactional comment ${characterName}\n`;
    tweeContent += `{(set:$comments to (a:"butt","body","tits","face"))}\n\n`;

    tweeContent += `:: sex transactional butt comment ${characterName}\n{\n`;
    tweeContent += `    (display:"describe butt ${characterName}")\n`;
    tweeContent += `    "(if:$npc's "generation" is "genz")[(twirl:"Dayum girl","Fuck","Yeesh, $your_name","No cap","Sheesh, $your_name")]\n`;
    tweeContent += `    (else-if:$npc's "generation" is "genx")[(twirl:"Golly","Gee whiz","Holy cow","My goodness","Goodness","Oh mercy","Lord Jesus"), (display:"your pronoun")]\n`;
    tweeContent += `    (else:)[(twirl:"Dayum girl","Shit girl","Fuck, $your_name","Holy shit")]," (display:"npc pronoun") (twirl:"says","whistles","admires you","says","says","grins"). "\n`;
    if (butt === "slim") {
      tweeContent += `    (twirl: "That’s a $phat little $butt you’ve got, fits you perfectly.", "A $phat, tight $butt like that’s got my full attention.", "That $phat little $butt of yours, I can’t look away.")"  (display:"npc pronoun") says.\n`;
    }
    else if (butt === "bubble") {
      tweeContent += `    (twirl: "Now that’s a $phat, peachy $butt I’d love to get my hands on.", "You’ve got that $phat, juicy $butt, perfectly squeezable.", "A $phat, shapely $butt like that—just what every guy dreams of.")"  (display:"npc pronoun") says.\n`;
    }
    else {
      tweeContent += `    (twirl: "With that $phat, voluptuous $butt, you’re every guy’s fantasy.", "A $phat, plump $butt like that? Now you’re really showing off.", "Mmm, that $phat, mouthwatering $butt of yours is hard to ignore.")"  (display:"npc pronoun") says.\n`;
    }
    tweeContent += `    (if:$outfit's "tags" contains "nude")[(print:"<img class='greyborder' src='img/characters/nude/butt/" +  $character's "id" + ".jpg' width='100%' height=auto>")] \n`;
    tweeContent += `    (unless:(datanames:$npc) contains "petname")[\n`;
    tweeContent += `        (set:$npc's petname to (twirl:"little miss fat-ass","my big-assed cutie","my big-assed bombshell","my little dumptruck","my nice slice of cake"))"\n`;
    tweeContent += `        (twirl:"I'm gonna call you","Think I'm gonna call you","Gonna call you") (print:$npc's petname)(twirl:" from now on.",".")"\n`;
    tweeContent += `        (set:$petname to $npc's petname)]\n}\n\n`;

    //  Hair Color, Texture, and Styles
    tweeContent += `:: available hairstyles ${characterName}\n{\n`;
    tweeContent += `    (set:$available_hairstyles to (a:"${hairstyles.join('",\n    "')}"))\n}\n\n`;
    tweeContent += `:: describe hair ${characterName}\n{\n`;
    tweeContent += `    (set:$color to (twirl:"${hairColor}",\n    "${describeHairColor.join('",\n    "')}"))\n`;
    tweeContent += `    (if:$hairdesc is "color")[(set:$hair to $color + " hair")]\n`;
    tweeContent += `    (else-if:$hairdesc is "texture")[\n`;
    tweeContent += `        (if:$hairstyle is 0)[\n`;
    tweeContent += `            (set:$texture to (twirl:"${describeHairTexture.join('",\n            "')}")) \n`;
    tweeContent += `            (set:$hair to $texture + " hair")]\n`;
    tweeContent += `        (else:)[(display:"hairstyle name")(set:$hair to $color + " " + $hairstyle_name)]]\n}\n\n`;

    //  New-U Transformation Description
    
    tweeContent += `:: New-U transformation descriptions ${characterName}\n{\n`;
    tweeContent += `    (set:$description to $description + (a:\n`;
    tweeContent += `    (twirl:"The whole world seems to grow around you as your body morphs considerably. ${randomHairTexture} ${randomHairColor} hair flows from your head over your shoulders and down your back. Your chest burns as it swells, your butt tingles as it expands. You now have a ${randomBodyDescription} body. All of this plus your big ${eyeColor} eyes can only make for one thing... the perfect ${randomPetName}. Everything about your new body says use me however you like.",\n`;
    tweeContent += `    "A strange, tingling warmth spreads through your body as the world around you seems to grow taller. Your muscles soften, and your frame narrows as ${randomHairTexture} ${randomHairColor} hair spills effortlessly over your shoulders, cascading down your back. A tight sensation builds in your chest, and with a sudden release, it swells into soft curves. Your hips shift, widening, while a pleasant tingle dances across your skin as your butt rounds and firms. You look down at your new ${randomBodyDescription} body, taking in the sight of your delicate curves and big ${eyeColor} eyes. Everything about your new form radiates sensuality, leaving no doubt that you've become the perfect ${randomPetName}. Your senses seem sharper, your skin more sensitive—every touch and movement inviting a thrilling new world of sensation. You've transformed into an irresistible fantasy, a body that simply begs to be desired and adored.",\n`;
    tweeContent += `    "A deep shiver runs through you, causing your body to tense before it begins to change. You gasp as ${randomHairTexture} ${randomHairColor} hair spills from your scalp, tickling your neck as it grows longer with every heartbeat. A rush of heat surges into your chest, causing it to swell into full, sensitive curves. Your waist pulls inward, accentuating the new softness of your body as your hips widen, pushing your balance into a new, feminine sway. A tingling warmth pulses through your skin as your ${eyeColor} eyes widen with curiosity and excitement. You're left with a ${randomBodyDescription} figure that feels both foreign and tantalizing. Everything about you screams pleasure, a perfect ${randomPetName} eager to explore this new form and its irresistible allure.",\n`;
    tweeContent += `    "An electric thrill races up your spine as your whole body shudders, transforming from the inside out. You watch in awe as your muscles soften and your body narrows, skin smoothing to a new velvety texture. ${randomHairTexture} ${randomHairColor} hair grows rapidly, falling over your shoulders like a silken curtain. A sharp, almost pleasurable ache blooms in your chest, and with a breathless gasp, you feel it swell outward into soft, inviting curves. Your hips twist wider, and a gentle pressure makes your butt plump and round. You glance at yourself—now a ${randomBodyDescription} beauty with shining ${eyeColor} eyes. It’s as if your whole body radiates invitation, a ${randomPetName} waiting to be desired, every curve begging to be touched and appreciated.",\n`;
    tweeContent += `    "You feel your body ripple as if molded from warm clay, shifting and stretching into a new shape. Your skin prickles with goosebumps as ${randomHairTexture} ${randomHairColor} hair spills down in soft waves. Your shoulders narrow, and a sudden pressure in your chest takes your breath away as it fills out, forming tender, heavy curves. Your legs soften, thighs thickening while your waist draws in, shaping your body into a perfect hourglass. Your ${eyeColor} eyes catch your reflection—what was once familiar is now a ${randomBodyDescription} form, a body built to be admired. A surge of heat pulses through you, and you feel yourself settle into your new shape. There's no denying it—you're now the ultimate ${randomPetName}, a figure of perfect beauty and irresistible allure.",\n`;
    tweeContent += `    "A sensation of warmth spreads through your core, radiating outward as your very shape begins to shift. You watch in wonder as ${randomHairTexture} ${randomHairColor} hair cascades over your shoulders. Your chest tightens, then blooms outward, forming round, soft curves that rise with each breath. Your waist pulls inward, framing the new fullness of your hips as your butt firms up, pressing deliciously against the fabric of your clothes. Your ${eyeColor} eyes are wide, taking in the sight of your transformed body—a ${randomBodyDescription} silhouette that practically oozes sensuality. Everything about you feels different, lighter, more inviting—like you've been reborn as the perfect ${randomPetName}, a body designed to be touched and craved.")))\n}\n\n`;
    tweeContent += `:: New-U bodies update ${characterName}\n{\n`;
    tweeContent += `    (twirl:"${tagline.join('",\n    "')}?")\n}\n\n`;
    tweeContent += `:: invite guy load old ${characterName}\n{\n`;
    tweeContent += `    (twirl:"${tagOld.join('",\n    "')}")\n}\n\n`;
    tweeContent += `:: invite guy load new ${characterName}\n{\n`;
    tweeContent += `    (twirl:"${tagNew.join('",\n    "')}")\n}\n\n`;

    //  Cat call
    tweeContent += `:: catcall id ${characterName}\n{\n`;
    tweeContent += `    (if:$npc's "race" is $character's "race")[(set:$pickup to (twirl:"face","body","dirty"))]\n`;
    tweeContent += `    (else:)[(set:$pickup to (twirl:"face","body","dirty","racial","racial","racial"))]\n\n`;
    tweeContent += `    (set:_girl to (twirl:"girl","girl","girl","beautiful","sexy","gorgeous","doll"))\n\n`;
    tweeContent += `    (set:$greeting to (twirl:"Hey _girl",\n`;
    tweeContent += `    "Ayyy _girl",\n    "Hey there _girl",\n    "Hey there",\n    "Hello there _girl",\n    "Goddamn _girl",\n    "Holy shit _girl",\n    "DAYUM _girl..."))\n\n`;
    tweeContent += `    (if:$pickup is "face")["(twirl: "${catcallFace.join('",\n    "')}")"\n    ]\n\n`;
    tweeContent += `    (if:$pickup is "body")["(twirl: "${catcallBody.join('",\n    "')}")"\n    ]\n\n`;
    tweeContent += `    (if:$pickup is "dirty")[\n`;
    tweeContent += `        (if:(twist:1,2) is 1)[\n`;
    tweeContent += `            (set:$greeting to (twirl:"Don't take this the wrong way...",\n`
		tweeContent += `            "Please don't get offended, but",\n`
		tweeContent += `            "Don't get offended by this, but"))\n        ]\n`;
    tweeContent += `    "(twirl: "${catcallDirty.join('",\n    "')}")"\n    ]\n\n`;
    tweeContent += `    (if:$pickup is "racial")[\n`;
    tweeContent += `        (set:_race to $character's "race")\n`;
    tweeContent += `        (if:(twist:1,2) is 1)[\n`;
    tweeContent += `            (set:$greeting to (twirl:"I'm not racist or anything, but",\n`;
    tweeContent += `            "Not to sound racist... but",\n`
    tweeContent += `            "Don't get offended, this is gonna sound racist..."))\n        ]\n`
    tweeContent += `    "(twirl: "${catcallRace.join('",\n    "')}")"\n    ]\n}\n\n`;

    // Pregnancy
    tweeContent += `:: initialize pregnancy ${characterName}\n`;
    tweeContent += `{(set:$pregnancy's updates to (a:${pregnancyWeeks.join(',')}))}\n\n`;

    tweeContent += `:: 2nd prenatal visit 3 ${characterName}\n`;
    tweeContent += `(display:"initialize pregnancy ${characterName}")\n\n`;

    tweeContent += `:: pregnant 1st check ${characterName}\n{\n`;
    tweeContent += `    (twirl: "${pregnancy1st.join('",\n    "')}")\n}\n\n`;

    tweeContent += `:: pregnant 2nd check ${characterName}\n{\n`;
    tweeContent += `    (twirl: "${pregnancy2nd.join('",\n    "')}")\n}\n\n`;

    tweeContent += `:: 12-week prenatal appointment ${characterName}\n{\n`;
    tweeContent += `    "(twirl: "${pregnancyPrenatal.join('",\n    "')}")"\n}\n\n`;

    tweeContent += `:: pregnancy first lactation ${characterName}\n`;
    if (race === "black") {
      tweeContent += `{($vid:"scenes/generic/pregnancy/vignette/first lactation/scarlit.mp4")}\n\n`;
    } else {
      tweeContent += `{($vid:"scenes/generic/pregnancy/vignette/first lactation/alina.mp4")}\n\n`;
    }

    tweeContent += `:: Milk yourself ${characterName}\n`;
    if (race === "black") {
      tweeContent += `{(set:$video to "scenes/generic/pregnancy/milking/scarlit.mp4")}\n\n`;
    } else if (!["A","B","C"].includes(breasts) && ["brown","black"].includes(hairColor)) {
      tweeContent += `{(set:$video to "scenes/generic/pregnancy/milking/cassidy.mp4")}\n\n`;
    } else if (["A","B","C"].includes(breasts) && hairColor === "red") {
      tweeContent += `{(set:$video to "scenes/generic/pregnancy/milking/lana.mp4")}\n\n`;
    } else if (["A","B","C"].includes(breasts)) {
      tweeContent += `{(set:$video to "scenes/generic/pregnancy/milking/rae.mp4")}\n\n`;
    } else {
      tweeContent += `{(set:$video to "scenes/generic/pregnancy/milking/mia 1.mp4")}\n\n`;
    }

    tweeContent += `:: call father visit show ${characterName}\n{\n`;
    tweeContent += `    "(twirl:"${fatherShow.join('",\n    "')}")"\n}\n\n`;
    
    tweeContent += `:: call father visit bj ${characterName}\n{\n`;
    tweeContent += `    "(twirl:"${fatherBJ.join('",\n    "')}")"\n}\n\n`;

    //  Bruce Bet
    tweeContent += `:: bar bruce xchange bet take pill 2 [around]\n`;
    tweeContent += `    (if:$character's "id" is "${characterName}")[\n`;
    tweeContent += `        (if:$character's "masculinity" > 80)[(set:$character's "reluctance" to 10)](else:)[(display:"reluctance choice")]\n\n`;
    tweeContent += `        [${bruceTF}]\n`;
    tweeContent += `        <div class='options'>(link:"Next.")[(Display:"register reluctance")(if:(pill:"Breeder"))[($cs:"bar bruce xchange bet take pill 3")](else:)[($cs:"bar bruce xchange bet take pill 3 resistance")]]</div>\n`;
    tweeContent += `    ](else:)[(display:_around)]\n\n`;

    //  Transactional Doggy
    tweeContent += `:: sex doggy transactional ${characterName}\n{\n`;
    if (doggyVidInt === 1) {
      tweeContent += `    (set:$img to "${doggyPath}${doggyVidPrefix} 1")\n`;
    } else {
      tweeContent += `    (set:$img to "${doggyPath}${doggyVidPrefix} " + (text:(twist:1,${doggyVidInt})))\n`;
    }
    if (doggyInsertImgInt === 1) {
      tweeContent += `    (set:$doggy_pic to "<img class='greyborder' src='img/scenes/characters/${doggyPath}${doggyInsertPrefix} 1.jpg' width=100% height=auto>")\n`;
    } else {
      tweeContent += `    (set:$doggy_pic to "<img class='greyborder' src='img/scenes/characters/${doggyPath}${doggyInsertPrefix} " + (text:(twist:1,${doggyInsertImgInt})) + ".jpg' width=100% height=auto>")\n`;
    }
    if (doggyMoanImgInt === 1) {
      tweeContent += `    (set:$doggy_moan_pic to "<img class='greyborder' src='img/scenes/characters/${doggyPath}${doggyMoanPrefix} 1.jpg' width=100% height=auto>")\n`;
    } else {
      tweeContent += `    (set:$doggy_moan_pic to "<img class='greyborder' src='img/scenes/characters/${doggyPath}${doggyMoanPrefix} " + (text:(twist:1,${doggyMoanImgInt})) + ".jpg' width=100% height=auto>")\n`;
    }
    tweeContent += `    (set:$doggy_rhythm to $img of\n`;
    tweeContent += `        (dm: ${rhythmArrayDoggy.join(',')}))\n`;
    tweeContent += `    (set:$text to $img of\n`;
    tweeContent += `        (dm: ${tagArrayDoggy.join(',')}))\n}\n\n`;

    tweeContent += `:: sex doggy ${characterName}\n{\n`;
    tweeContent += `    (if:$character's "race" is "black")[(set:$img to "generic/sex/doggy/c 1")]\n`;
    tweeContent += `    (else:)[(set:$img to (either:"generic/sex/doggy/w 1","generic/sex/doggy/w 2"))]\n}\n\n`;

    // Blowjob
    tweeContent += `:: blowjob transactional initialize ${characterName}\n{\n`;
    tweeContent += `    (if:$variant is 1)[\n`
    if (bjVidInt === 1) {
      tweeContent += `        (set:$img to "scenes/characters/${bjPath}${bjPrefix} 1.mp4")\n    ]\n`;
    } else {
      tweeContent += `        (set:$img to "scenes/characters/${bjPath}${bjPrefix} " + (text:(twist:1,${bjVidInt})) + ".mp4")\n    ]\n`;
    }
    tweeContent += `    (else:)[\n`
    tweeContent += `        (if:$character's "race" is "black")[(set:$img to "scenes/generic/sex/bj/dark " + (text:(twist:1,5)) + ".mp4")]\n`
    tweeContent += `        (else:)[(set:$img to "scenes/generic/sex/bj/" + (twirl:"clothed 1","light 1","light 2","light 3","light 4","light 5","light 6","light 7","light 8","light 9","light 10","light 11","light 12","light 13","nude 1","nude 2","nude 3","nude 4") + ".mp4")]]\n}\n\n`

    tweeContent += `:: sex transactional blowjob ${characterName}\n`;
    tweeContent += `{(display:"blowjob transactional initialize ${characterName}")}\n\n`;

    // Facefuck
    tweeContent += `:: blowjob transactional facefuck ${characterName}\n{\n`;
    if (facefuckVidInt === 1) {
      tweeContent += `    (set:$img to "${facefuckPath}${facefuckPrefix} 1")\n`;
    } else {
      tweeContent += `    (set:$img to "${facefuckPath}${facefuckPrefix} " + (text:(twist:1,${facefuckVidInt})))\n`;
    }
    tweeContent += `    (set:$text to $img of\n`;
    tweeContent += `        (dm: ${tagArrayFacefuck.join(',')}))\n}\n\n`;
    
    tweeContent += `:: facefuck transactional ${characterName}\n`
    tweeContent += `{(set:$sex_move to "blowjob rough")(display:"blowjob transactional facefuck ${characterName}")}\n\n`

    // Oral
    tweeContent += `:: sex oral ${characterName}\n{\n`;
    if (oralVidInt === 1) {
      tweeContent += `    (set:$oral_img to "scenes/characters/${oralPath}${oralPrefix} 1.mp4")\n`;
    } else {
      tweeContent += `    (set:$oral_img to "scenes/characters/${oralPath}${oralPrefix} " + (text:(twist:1,${oralVidInt})) + ".mp4")\n\n`;
    }
    tweeContent += `    (set:$oral_rhythm to $oral_img of\n`;
    tweeContent += `        (dm: ${rhythmArrayOral.join(',')}))\n`;
    tweeContent += `    (set:$oral_position to $oral_img of\n`;
    tweeContent += `        (dm: ${tagArrayOral.join(',')}))\n\n`;
    if (seLickingInt === 1) {
      tweeContent += `    (set:$sex_loop to $sex_loop + ${seLickingInt})\n}\n\n`;
    }
    else {
      tweeContent += `    (set:$sex_loop to $sex_loop + (text:(twist:1,${seLickingInt})))\n}\n\n`;
    }

    //  Grope
    tweeContent += `:: sex transactional grope ${characterName}\n`
    if (grope === "both") {
      tweeContent += `{(set:$grope to (twirl:"ass","tits"))}\n\n`
    } else {
      tweeContent += `{(set:$grope to "${grope}")}`
    }

    //  Creampie
    tweeContent += `:: sex creampie image ${characterName}\n`
    if (creampieVidInt === 1) {
      tweeContent += `{(set:$img to "/characters/${cumPath}${creampiePrefix} 1")}\n\n`;
    } else if (creampieVidInt > 1) {
      tweeContent += `{(set:$img to "/characters/${cumPath}${creampiePrefix} " + (text:(twist:1,${creampieVidInt})))}\n\n`;
    } else {
      if (race === "black"){
        tweeContent += `{\n    (set:$img to "/generic/sex/cum/creampie/c/bwc/" + (twirl:"doggy 1", "doggy 2", "missionary 1", "riding 1"))\n}\n\n`;
      } else {
        tweeContent += `{\n    (if:$position is "riding")[(set:$img to "/generic/sex/cum/creampie/c/bwc/riding " + (text:(twist:1,2))]\n`;
        tweeContent += `    (else-if:$position is "missionary")[(set:$img to "/generic/sex/cum/creampie/c/bwc/missionary " + (text:(twist:1,2))]\n`;
        tweeContent += `    (else)[(set:$img to "/generic/sex/cum/creampie/c/bwc/doggy " + (text:(twist:1,17))]\n}\n\n`;
      }
    }

    // Facial
    tweeContent += `:: sex cum on face ${characterName}\n{\n`;

    if (!mcfFacialVid.value) {
      tweeContent += `    (set:$cum_face to (dm:))\n`;
      tweeContent += `    (set:$img to "/generic/sex/cum/facial " + (text:(twist:1,16)))\n`;
    } else {
      if (facialVidInt === 1) {
        tweeContent += `    (set:$img to "/characters/${cumPath}${facialPrefix} 1")\n`;
      } else if (facialVidInt > 1) {
        tweeContent += `    (set:$img to "/characters/${cumPath}${facialPrefix} " + (text:(twist:1,${facialVidInt})))\n`;
      }
      if (tagArrayBigLoad.length > 0 && tagArrayBigLoad[0] !== "") {
        tweeContent += `    (if:$load is "big")[(set:$img to "/characters/${cumPath}${facialPrefix} " + (text:(twirl:${tagArrayBigLoad})))]\n`
      }
      if (tagArrayUnwilling.length > 0 && tagArrayUnwilling[0] !== "") {
          tweeContent += `    (if:$load is "unwilling")[(set:$img to "/characters/${cumPath}${facialPrefix} " + (text:(twirl:${tagArrayUnwilling})))]\n`
      }

      tweeContent += `\n    (set:$cum_face to\n`;
      tweeContent += `        (dm: ${tagArrayFacial.join(',')}))\n\n`;
    } 
    tweeContent += `}\n\n`;

    // Mouth
    tweeContent += `:: sex cum in mouth load ${characterName}\n{\n`;

    if (mouthVidInt < 1 ) {
      tweeContent += `    (if:$character's "race" is "black")[(set:$img to (twirl:"/generic/sex/cum/mouth/1 c","/generic/sex/cum/mouth/2 c","/generic/sex/cum/mouth/3 c"))]\n`;
      tweeContent += `    (else:)[(set:_generic to (twist:1,4))\n`;
      tweeContent += `        (if:_generic is 1)[(set:$img to "/generic/sex/cum/mouth/direct " + (text:(twist:1,2)))]\n`;
      tweeContent += `        (else-if:_generic is 2 or _generic is 4)[(set:$img to "/generic/sex/cum/mouth/mouth " + (text:(twist:1,23)))]\n`;
      tweeContent += `        (else-if:_generic is 3)[(set:$img to "/generic/sex/cum/mouth/finish " + (text:(twist:1,6)))]\n`;
      tweeContent += `        (else:)[(set:$img to (twirl:"/generic/sex/cum/mouth/jerk 1",\n`;
      tweeContent += `        "/generic/sex/cum/mouth/jerk 2",\n`;
			tweeContent += `        "/generic/sex/cum/mouth/jerk 3",\n`;
			tweeContent += `        "/generic/sex/cum/mouth/jerk 5",\n`;
			tweeContent += `        "/generic/sex/cum/mouth/jerk 6",\n`;
			tweeContent += `        "/generic/sex/cum/mouth/jerk 7",\n`;
			tweeContent += `        "/generic/sex/cum/mouth/jerk 8",\n`;
			tweeContent += `        "/generic/sex/cum/mouth/jerk 9",\n`;
			tweeContent += `        "/generic/sex/cum/mouth/jerk 10"))]\n`;
      tweeContent += `    ]\n}\n\n`;
    } else {
      tweeContent += `    (if:(twist:1,4) is not 1)[\n`;
      if (mouthVidInt === 1) {
        tweeContent += `        (set:$img to "/characters/${cumPath}${mouthPrefix} 1")\n`;
      } else {
        tweeContent += `        (set:$img to "/characters/${cumPath}${mouthPrefix} " + (text:(twist:1,${mouthVidInt})))\n`;
      }
      tweeContent += `\n        (set:$cum_mouth to\n`;
      tweeContent += `            (dm: ${tagArrayMouth.join(',')}))]\n`;
      tweeContent += `    (else:)[\n`;
      tweeContent += `        (if:$character's "race" is "black")[(set:$img to (twirl:"/generic/sex/cum/mouth/1 c","/generic/sex/cum/mouth/2 c","/generic/sex/cum/mouth/3 c"))]\n`;
      tweeContent += `        (else:)[(set:_generic to (twist:1,4))\n`;
      tweeContent += `            (if:_generic is 1)[(set:$img to "/generic/sex/cum/mouth/direct " + (text:(twist:1,2)))]\n`;
      tweeContent += `            (else-if:_generic is 2 or _generic is 4)[(set:$img to "/generic/sex/cum/mouth/mouth " + (text:(twist:1,23)))]\n`;
      tweeContent += `            (else-if:_generic is 3)[(set:$img to "/generic/sex/cum/mouth/finish " + (text:(twist:1,6)))]\n`;
      tweeContent += `            (else:)[(set:$img to (twirl:"/generic/sex/cum/mouth/jerk 1",\n`;
      tweeContent += `            "/generic/sex/cum/mouth/jerk 2",\n`;
			tweeContent += `            "/generic/sex/cum/mouth/jerk 3",\n`;
			tweeContent += `            "/generic/sex/cum/mouth/jerk 5",\n`;
			tweeContent += `            "/generic/sex/cum/mouth/jerk 6",\n`;
			tweeContent += `            "/generic/sex/cum/mouth/jerk 7",\n`;
			tweeContent += `            "/generic/sex/cum/mouth/jerk 8",\n`;
			tweeContent += `            "/generic/sex/cum/mouth/jerk 9",\n`;
			tweeContent += `            "/generic/sex/cum/mouth/jerk 10"))]\n`;
      tweeContent += `    ]]\n}\n\n`;
    }

    tweeContent += `:: sex cum in mouth big load ${characterName}\n{\n`;
    tweeContent += `    (set:$img to (twirl:"/generic/sex/cum/mouth/big loads/closed lips 1",\n`;
    tweeContent += `    "/generic/sex/cum/mouth/big loads/grimace 1",\n`;
	  tweeContent += `    "/generic/sex/cum/mouth/big loads/still mouth 1",\n`;
	  tweeContent += `    "/generic/sex/cum/mouth/big loads/still mouth 2",\n`;
	  tweeContent += `    "/generic/sex/cum/mouth/big loads/still mouth 3",\n`;
	  tweeContent += `    "/generic/sex/cum/mouth/big loads/still mouth 4",\n`;
	  tweeContent += `    "/generic/sex/cum/mouth/big loads/still mouth big 1",\n`;
	  tweeContent += `    "/generic/sex/cum/mouth/big loads/still mouth chin 1",\n`;
	  tweeContent += `    "/generic/sex/cum/mouth/big loads/still mouth chin 2",\n`;
	  tweeContent += `    "/generic/sex/cum/mouth/big loads/still mouth chin 3",\n`;
	  tweeContent += `    "/generic/sex/cum/mouth/big loads/still tongue 1",\n`;
	  tweeContent += `    "/generic/sex/cum/mouth/big loads/tongue chin 1"))\n}\n\n`;

    //  Pull out
    tweeContent += `:: sex transactional he pulls out ${characterName}\n`;
    tweeContent += `{(set:$his_choice to "pull out")}\n\n`;

    tweeContent += `:: sex pull out ${characterName}\n{\n`;
    tweeContent += `    (set:$his_choice to "pull out")\n`;
    const imgPaths = [];

    if (mcfPullOutTitsVid.value && pulloutTitsVidInt !== 0) {
      for (let i = 1; i <= pulloutTitsVidInt; i++) {
        imgPaths.push(`/characters/${cumPath}${pulloutTitsPrefix} ${i}`);
      }
    }

    if (mcfPullOutBodyVid.value && pulloutBodyVidInt !== 0) {
      for (let i = 1; i <= pulloutBodyVidInt; i++) {
        imgPaths.push(`/characters/${cumPath}${pulloutBodyPrefix} ${i}`);
      }
    }

    if (mcfPullOutButtVid.value && pulloutButtVidInt !== 0) {
      for (let i = 1; i <= pulloutButtVidInt; i++) {
        imgPaths.push(`/characters/${cumPath}${pulloutButtPrefix} ${i}`);
      }
    }

    if (imgPaths.length > 0) {
      tweeContent += `    (if:(twist:1,4) is not 1)[\n`;
      tweeContent += `        (set:$img to (twirl:\n`;
      imgPaths.forEach((path, index) => {
        tweeContent += `        "${path}"${index < imgPaths.length - 1 ? ',' : ''}\n`;
      });
      tweeContent += `        ))\n`;
      tweeContent += `        (set:$text to $img of\n`;
      tweeContent += `        (dm: ${tagArrayPullout.join(',')}))\n    ]\n`;
      tweeContent += `    (else:)[\n`;
      tweeContent += `        (if:$character's "race" is "black" or $character's "race" is "latin")[\n`;
      tweeContent += `            (if:(twist:1,2) is 1 and $your_choice is "pull out" and $character's "masculinity" < 80 and $orgasms > 0)[(set:$variant to "1")(set: $img to "/generic/sex/cum/pull out/wiggle/doggy " + $variant)(set:$text to (a:"butt","wiggle"))]\n`;
      tweeContent += `            (else:)[(set:$variant to (text:(twist:1,6)))(set: $img to "/generic/sex/cum/pull out/no wiggle/doggy " + $variant)(set:$text to (a:"butt"))]]\n`;
      tweeContent += `        (else:)[\n`;
      tweeContent += `            (if:(twist:1,2) is 1 and $your_choice is "pull out" and $character's "masculinity" < 80 and $orgasms > 0)[(set:$variant to (twirl:"2","3"))(set: $img to "/generic/sex/cum/pull out/wiggle/doggy " + $variant)(set:$text to (a:"butt","wiggle"))]\n`;
      tweeContent += `            (else:)[(set:$variant to (text:(twist:5,12)))(set: $img to "/generic/sex/cum/pull out/no wiggle/doggy " + $variant)(set:$text to (a:"butt"))]]\n    ]\n`;
    } else {
      tweeContent += `    (if:$character's "race" is "black" or $character's "race" is "latin")[\n`;
      tweeContent += `        (if:(twist:1,2) is 1 and $your_choice is "pull out" and $character's "masculinity" < 80 and $orgasms > 0)[(set:$variant to "1")(set: $img to "/generic/sex/cum/pull out/wiggle/doggy " + $variant)(set:$text to (a:"butt","wiggle"))]\n`;
      tweeContent += `        (else:)[(set:$variant to (text:(twist:1,6)))(set: $img to "/generic/sex/cum/pull out/no wiggle/doggy " + $variant)(set:$text to (a:"butt"))]]\n`;
      tweeContent += `    (else:)[\n`;
      tweeContent += `        (if:(twist:1,2) is 1 and $your_choice is "pull out" and $character's "masculinity" < 80 and $orgasms > 0)[(set:$variant to (twirl:"2","3"))(set: $img to "/generic/sex/cum/pull out/wiggle/doggy " + $variant)(set:$text to (a:"butt","wiggle"))]\n`;
      tweeContent += `        (else:)[(set:$variant to (text:(twist:5,12)))(set: $img to "/generic/sex/cum/pull out/no wiggle/doggy " + $variant)(set:$text to (a:"butt"))]]\n`;
    }
    tweeContent += `}\n\n`;

    //  Sounds
    tweeContent += `:: sex orgasm ${characterName}\n`;
    if (seOrgasmInt === 1) {
      tweeContent += `{(set:$se to "orgasm ${characterName} 1")}\n\n`;
    } else {
      tweeContent += `{(set:$se to "orgasm ${characterName} " + (text:(twist:1,${seOrgasmInt})))}\n\n`;
    }

    tweeContent += `:: missionary sounds ${characterName}\n`;
    if (seMissionaryInt === 1) {
      tweeContent += `{(set:$sex_loop to $sex_loop + "1")}\n\n`;
    } else {
      tweeContent += `{(set:$sex_loop to $sex_loop + (text:(twist:1,${seMissionaryInt})))}\n\n`;
    }

    tweeContent += `:: doggy sounds ${characterName}\n`;
    if (seDoggyInt === 1) {
      tweeContent += `{(set:$sex_loop to $sex_loop + "1")}\n\n`;
    } else {
      tweeContent += `{(set:$sex_loop to $sex_loop + (text:(twist:1,${seDoggyInt})))}\n\n`;
    }

    tweeContent += `:: riding sounds ${characterName}\n`;
    if (seRidingInt === 1) {
      tweeContent += `{(set:$sex_loop to $sex_loop + "1")}\n\n`;
    } else {
      tweeContent += `{(set:$sex_loop to $sex_loop + (text:(twist:1,${seRidingInt})))}\n\n`;
    }

    tweeContent += `:: blowjob sounds ${characterName}\n{\n`;
    tweeContent += `    (if:(twist:1,2) is 1)[`;
    if (seBJInt === 1) {
      tweeContent += `(set:$sex_loop to $sex_loop + "1")\n    ]\n`;
    } else {
      tweeContent += `(set:$sex_loop to $sex_loop + (text:(twist:1,${seBJInt})))]\n`;
    }
    tweeContent += `    (else:)[(set:$sex_loop to "bj neutral loop")]\n}\n\n`;

    tweeContent += `:: bj rough sounds ${characterName}\n`;
    if (seBJRoughInt === 1) {
      tweeContent += `{(set:$sex_loop to $sex_loop + "1")}\n\n`;
    } else {
      tweeContent += `{(set:$sex_loop to $sex_loop + (text:(twist:1,${seBJRoughInt})))}\n\n`;
    }

    tweeContent += `:: his cum sounds ${characterName}\n{\n`;
    if (seCumDynamic === 1) {
      tweeContent += `    (unless:(twist:1,4) is 1)[(set:$line to "${characterName} 1")]\n`;
    } else if (seCumDynamic > 1) {
      tweeContent += `    (unless:(twist:1,4) is 1)[(set:$line to "${characterName} " + (text:(twist:1,${seCumDynamic})))]\n`;
    }
    if (seCumPullOut === 1) {
      tweeContent += `    (if:$his_choice is "pull out" and (twist:1,2) is 1)[(set:$line to "${characterName} body 1")]\n`;
    } else if (seCumPullOut > 1) {
      tweeContent += `    (if:$his_choice is "pull out" and (twist:1,2) is 1)[(set:$line to "${characterName} body " + (text:(twist:1,${seCumPullOut})))]\n`;
    }
    if (seCumCreampie === 1) {
      tweeContent += `    (if:$his_choice is "pull out" and (twist:1,2) is 1)[(set:$line to "${characterName} creampie 1")]\n`;
    } else if (seCumCreampie > 1) {
      tweeContent += `    (if:$his_choice is "pull out" and (twist:1,2) is 1)[(set:$line to "${characterName} creampie " + (text:(twist:1,${seCumCreampie})))]\n`;
    }
    if (seCumTits === 1) {
      tweeContent += `    (if:$his_choice is "pull out" and (twist:1,2) is 1)[(set:$line to "${characterName} tits 1")]\n`;
    } else if (seCumTits > 1) {
      tweeContent += `    (if:$his_choice is "pull out" and (twist:1,2) is 1)[(set:$line to "${characterName} tits " + (text:(twist:1,${seCumTits})))]\n`;
    }
    if (seCumMouth === 1) {
      tweeContent += `    (if:$his_choice is "pull out" and (twist:1,2) is 1)[(set:$line to "${characterName} mouth 1")]\n`;
    } else if (seCumMouth > 1) {
      tweeContent += `    (if:$his_choice is "pull out" and (twist:1,2) is 1)[(set:$line to "${characterName} mouth " + (text:(twist:1,${seCumMouth})))]\n`;
    }
    if (seCumFace === 1) {
      tweeContent += `    (if:$his_choice is "pull out" and (twist:1,2) is 1)[(set:$line to "${characterName} face 1")]\n`;
    } else if (seCumFace > 1) {
      tweeContent += `    (if:$his_choice is "pull out" and (twist:1,2) is 1)[(set:$line to "${characterName} face " + (text:(twist:1,${seCumFace})))]\n`;
    }
    tweeContent += `}\n\n`;

    tweeContent += `:: sex transactional insert attempt ${characterName}\n{\n`;
    tweeContent += `    (set:$time_taken to (text:$character's "id" + " " + $variant) of (dm:\n`;
    tweeContent += `    "${characterName} 1",${seInsert1Int},\n`;
    tweeContent += `    "${characterName} 2",${seInsert2Int},\n`;
    tweeContent += `    "${characterName} 3",${seInsert3Int}))\n}\n\n`;

    tweeContent += `:: insertion sounds ${characterName}\n{\n`;
    if (sePenetrationInt === 1) {
      tweeContent += `    (set:$se to "penetration ${characterName} 1")\n`;
    } else {
      tweeContent += `    (set:$se to "penetration ${characterName} " + (text:(twist:1,${sePenetrationInt})))\n`;
    }
    tweeContent += `    (set:$time_taken to $se of (dm:${timingArrayPenetration.join(',')}))\n}\n\n\n`;

    //  Sound Mapping
    tweeContent += `:: sex tracks ${characterName}\n{\n`;
    tweeContent += `    (newtrack:'cum moan ${characterName}','aud/se/sex/orgasm/cum/${characterName}.mp3')\n`;
    tweeContent += `    (newtrack:'orgasm solo ${characterName}','aud/se/sex/orgasm/orgasm/${characterName} solo.mp3')\n`;
    tweeContent += `    (newtrack:'fondle loop ${characterName}','aud/se/sex/loops/fondling/${characterName}.mp3')\n`;
    tweeContent += `    (newtrack:'masturbate loop ${characterName}','aud/se/sex/loops/masturbate/${characterName}.mp3')\n`;
    tweeContent += orgasmSoundMapping;
    tweeContent += lickingSoundMapping;
    tweeContent += bjSoundMapping;
    tweeContent += bjRoughSoundMapping;
    tweeContent += doggySoundMapping;
    tweeContent += missionarySoundMapping;
    tweeContent += ridingSoundMapping;
    tweeContent += penetrationSoundMapping;
    tweeContent += `}\n\n`;


    // Add files to the ZIP
    mcfzip.file(`${characterName}.twee`, tweeContent);
  };

  // Generate MCF Files ONLY
  function generateMCFFiles(){
    gatherMCFFiles();
    generateMCFZip();
  };

  //Generate ALL MCF Files and Directories
  function generateMCFAll(){
    gatherMCFMeta();
    gatherMCFDirectories();
    gatherMCFFiles();
    generateMCFZip();
  };

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
        alert(field + "contains invalid characters.");
        return false;
      }
    }
  
    return true; // Form is valid
  };

  // Helper for clearing position tags
  function clearPositionTags(){
    clearElement(positionTagsContainer);
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

    clearElement(positionDropdown);
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
    const type = document.querySelector(
      'input[name="positionType"]:checked'
    ).value;
    const subtype = document.querySelector(
      'input[name="subtype"]:checked'
    ).value;
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
            selectedPosition.textContent = `${name} (${type} - ${subtype})`;
            selectedPosition.dataset.position = JSON.stringify(newPosition);

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
    clearElement(positionSkillType);
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

      clearElement(positionDropdown);
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

    // Regex to match key-value pairs, handling strings, arrays, numbers, booleans, and objects
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
    clearElement(positionsList); // Clear existing items

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
        return; // Stop the process if the user doesn't confirm
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

    clearElement(outfitTagsContainer);
    clearElement(outfitColorsContainer);
    clearElement(outfitEmphasisContainer);
    clearElement(outfitRevealsContainer);

    updateOutfitFields();

    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  // Showing/Hiding One-Piece or Top + Bottom Fields
  function updateOutfitFields() {

    if (onePieceRadio.checked) {
      onePieceField.classList.remove("hidden");
      twoPieceFields.classList.add("hidden");

      outfitOnePiece.disabled = false;
      outfitTop.disabled = true;
      outfitBottom.disabled = true;

      outfitTop.value = "";
      outfitBottom.value = "";
    } else if (twoPieceRadio.checked) {
      onePieceField.classList.add("hidden");
      twoPieceFields.classList.remove("hidden");

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
      !descType
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
    clearElement(outfitsList)

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
    
    // Calculate total outfit counts
    const countTotalOutfits = outfitList.length;
    const countBeachOutfits = outfitList.filter(out => JSON.parse(out.dataset.outfit).category === "beach").length;
    const countCasualOutfits = outfitList.filter(out => JSON.parse(out.dataset.outfit).category === "casual").length;
    const countFetishOutfits = outfitList.filter(out => JSON.parse(out.dataset.outfit).category === "fetish").length;
    const countGymOutfits = outfitList.filter(out => JSON.parse(out.dataset.outfit).category === "gym").length;
    const countLingerieOutfits = outfitList.filter(out => JSON.parse(out.dataset.outfit).category === "lingerie").length;
    const countLoungeOutfits = outfitList.filter(out => JSON.parse(out.dataset.outfit).category === "lounge").length;
    const countOfficeOutfits = outfitList.filter(out => JSON.parse(out.dataset.outfit).category === "office").length;
    const countStylishOutfits = outfitList.filter(out => JSON.parse(out.dataset.outfit).category === "stylin").length;
    
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
            if (outfit.descType === "onePieceRadio") {
                jsContent += `    "onepiece": "${outfit.onepiece}",\n`;
            } else if (outfit.descType === "twoPieceRadio") {
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
    blkDoggyVidPrefix.value = "transactional"
    blkDoggyInsertImgPrefix.value = "transactional insert"
    blkDoggyMoanImgPrefix.value = "moan"
    blkBJVidPrefix.value = "transactional"
    blkFacefuckVidPrefix.value = "rough"
    blkOralVidPrefix.value = "oral"
    blkGropeTitsVidPrefix.value = "tits"
    blkGropeAssVidPrefix.value = "ass"
    blkKissVidPrefix.value = "kiss"
    blkCreampieVidPrefix.value = "creampie"
    blkFacialVidPrefix.value = "facial"
    blkMouthVidPrefix.value = "mouth"
    blkPullOutBodyVidPrefix.value = "body"
    blkPullOutButtVidPrefix.value = "butt"
    blkPullOutTitsVidPrefix.value = "tits"
  };

  // Add Character name into directories
  function setBlkDefaultDirectories() {
    const name = blkCharacterName.value.trim() || "character_id";

    tooltipBLKForeplay.setContent(`This section is for groping and kissing. You need to have at least 1 kiss video (kiss.mp4) and either an ass or tits grope (or both).<br> You CAN have multiples of each.<br><br>This path is hardcoded for ${name}/foreplay. Please ensure your media files are in this location and are named 'kiss 1.mp4', 'grope ass 1.mp4', 'grope tits 1.mp4', etc.`);

    blkDoggyPath.value = `${name}/sex/doggy/bbc/`
    blkBJPath.value = `${name}/bj/bbc/`
    blkFacefuckPath.value = `${name}/bj/bbc/`
    blkForeplayPath.value = `${name}/foreplay/bbc/`
    blkOralPath.value = `${name}/oral/bbc/`
    blkCumPath.value = `${name}/cum/bbc/`
  };

  // Build tag fields for BLACKED - Doggy
  function generateBLKDoggyFields() {
    generateDoggyTagFields(blkDoggyVid, blkDoggyVidPrefix, blkDoggyContainer)
  };

  // Build tag fields for BLACKED - Facefuck
  function generateBLKFacefuckFields() {
    generateTagFields(blkFacefuckVid, blkFacefuckVidPrefix, blkFacefuckContainer, locationTagOptions, 1)
  };

  // Build tag fields for BLACKED - Oral
  function generateBLKOralFields() {
    generateTagFields(blkOralVid, blkOralVidPrefix, blkOralContainer, ["missionary","doggy"], 1, true)
  };

  // Build tag fields for BLACKED - Facial
  function generateBLKFacialFields() {
    generateTagFields(blkFacialVid, blkFacialVidPrefix, blkFacialContainer, facialTagOptions, 4)
  };

  // Build tag fields for BLACKED - Mouth
  function generateBLKMouthFields() {
    generateTagFields(blkMouthVid, blkMouthVidPrefix, blkMouthContainer, mouthTagOptions, 4)
  };

  // Build tag fields for BLACKED - Pull Out Tits
  function generateBLKPullOutTitsFields() {
    generateTagFields(blkPullOutTitsVid, blkPullOutTitsVidPrefix, blkPullOutTitsContainer, ["lying","kneeling"], 1)
  };

  // Build tag fields for BLACKED - Pull Out Body
  function generateBLKPullOutBodyFields() {
    generateTagFields(blkPullOutBodyVid, blkPullOutBodyVidPrefix, blkPullOutBodyContainer, locationTagOptions, 1)
  };

  // Build tag fields for BLACKED - Pull Out Butt
  function generateBLKPullOutButtFields() {
    generateTagFields(blkPullOutButtVid, blkPullOutButtVidPrefix, blkPullOutButtContainer, locationTagOptions, 1)
  };

  // Generate Blacked Zip
  function generateBlackedZip() {
    const characterName = blkCharacterName.value;

    // Check if there are any files in the ZIP before generating
    if (Object.keys(blkzip.files).length === 0) {
      console.error("No files added to the ZIP. Cannot generate a ZIP file.");
      return;
    }

    blkzip.generateAsync({ type: "blob" }).then(function (content) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = `BLACKED_${characterName}.zip`;
      link.click();
    });
  };

  // Gather BLACKED Meta and add to blkzip
  function gatherBlackedMeta() {

    if (!blkzip) {
      blkzip = new JSZip();
    } 

    // Collect input values from forms
    const characterName = blkCharacterName.value;
    const version = blkYourModBLKVersion.value;
    const author = blkModAuthor.value;
    const baseGameVersion = blkBaseGameVersion.value;
    const BLKVersion = blkModVersion.value;
    const MCFModName = blkYourModName.value;
    const MCFModVersion = blkYourModVersion.value;

    if (!characterName) {
      console.error("Character Name is required.");
      alert("Please enter a character name.");
      return;
    }

    if (!version || !author || !baseGameVersion || !BLKVersion || !MCFModName || !MCFModVersion) {
      alert("All meta fields are required. Please fill out the fields.");
      return; 
    }

    // Create the meta content string
    let metaContent = `metaVersion: 1\n`;
    metaContent += `name: "${MCFModName} - BLACKED"\n`;
    metaContent += `version: "${version}"\n`;
    metaContent += `author: "${author}"\n`;
    metaContent += `baseGameVersion:\n  atLeast: "${baseGameVersion}"\n`;
    metaContent += `requiredMods:\n`;
    metaContent += `   - name: "${MCFModName}"\n    version:\n      atLeast: "${MCFModVersion}"\n`;
    metaContent += `   - name: "BLACKED"\n    version:\n      atLeast: "${BLKVersion}"\n`;

    // Add meta to the ZIP
    blkzip.folder("metas").file(`${characterName}.meta`, metaContent);
  };

  // Generate BLACKED Meta file ONLY
  function generateBlackedMeta() {
    gatherBlackedMeta();
    generateBlackedZip();
  };

  // Gather BLACKED directories and add to blkzip
  function gatherBlackedDirectories() {
    const characterName = blkCharacterName.value;

    if (!blkzip) {
      blkzip = new JSZip();
    } 

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
    blkzip.folder(`img/scenes/characters/${blkBJPath.value}`)
    blkzip.folder(`img/scenes/characters/${blkCumPath.value}`)
    blkzip.folder(`img/scenes/characters/${blkForeplayPath.value}`)
    blkzip.folder(`img/scenes/characters/${blkOralPath.value}`)
    blkzip.folder(`img/scenes/characters/${blkDoggyPath.value}`)
    blkzip.folder(`img/scenes/characters/${characterName}/sex/active/cowgirl`)
    blkzip.folder(`img/scenes/characters/${characterName}/sex/active/doggy`)
    blkzip.folder(`img/scenes/characters/${characterName}/sex/active/missionary`)
    blkzip.folder(`img/scenes/characters/${characterName}/sex/active/service`)
    blkzip.folder(`img/scenes/characters/${characterName}/sex/passive/cowgirl`)
    blkzip.folder(`img/scenes/characters/${characterName}/sex/passive/doggy`)
    blkzip.folder(`img/scenes/characters/${characterName}/sex/passive/missionary`)
    blkzip.folder(`img/scenes/characters/${characterName}/sex/passive/service`)
  };

  // Generate BLACKED Directories ONLY
  function generateBlackedDirectories() {
    gatherBlackedDirectories();
    generateBlackedZip();
  };

  // Gather BLACKED File Values and add to blkzip
  function gatherBlackedFiles() {

    if (!blkzip) {
      blkzip = new JSZip();
    } 

    // Collect input values from forms
    const characterName = blkCharacterName.value.toLowerCase();

    // Paths
    const doggyPath = blkDoggyPath.value;
    const bjPath = blkBJPath.value;
    const facefuckPath = blkFacefuckPath.value;
    const oralPath = blkOralPath.value;
    const cumPath = blkCumPath.value;

    // Prefixes
    const doggyVidPrefix = blkDoggyVidPrefix.value;
    const doggyInsertPrefix = blkDoggyInsertImgPrefix.value;
    const doggyMoanPrefix = blkDoggyMoanImgPrefix.value;
    const bjPrefix = blkBJVidPrefix.value;
    const facefuckPrefix = blkFacefuckVidPrefix.value;
    const gropeTitsPrefix = blkGropeTitsVidPrefix.value;
    const gropeAssPrefix = blkGropeAssVidPrefix.value;
    const kissPrefix = blkKissVidPrefix.value;
    const oralPrefix = blkOralVidPrefix.value;
    const creampiePrefix = blkCreampieVidPrefix.value;
    const facialPrefix = blkFacialVidPrefix.value;
    const mouthPrefix = blkMouthVidPrefix.value;
    const pulloutBodyPrefix = blkPullOutBodyVidPrefix.value;
    const pulloutButtPrefix = blkPullOutButtVidPrefix.value;
    const pulloutTitsPrefix = blkPullOutTitsVidPrefix.value;

    // Containers
    const tagArrayDoggy = [];
    const rhythmArrayDoggy = [];
    const tagArrayFacefuck = [];
    const tagArrayFacial = [];
    const tagArrayBigLoad = [];
    const tagArrayUnwilling = [];
    const tagArrayMouth = [];
    const tagArrayOral = [];
    const rhythmArrayOral = [];
    const tagArrayPullout = [];
    const tagArrayPulloutBody = [];
    const tagArrayPulloutButt = [];
    const tagArrayPulloutTits = [];

    // Lines
    const doggyLines = [];
    const doggyRhythmLines = [];
    const facefuckLines = [];
    const oralLines = [];
    const oralRhythmLines = [];
    const facialLines = [];
    const mouthLines = [];
    const pulloutBodyLines = [];
    const pulloutButtLines = [];
    const pulloutTitsLines = [];

    // Integers
    const doggyVidInt = parseInt(blkDoggyVid.value) || 0;
    const doggyInsertImgInt = parseInt(blkDoggyInsertImg.value) || 0;
    const doggyMoanImgInt = parseInt(blkDoggyMoanImg.value) || 0;
    const bjVidInt = parseInt(blkBJVid.value) || 0;
    const facefuckVidInt = parseInt(blkFacefuckVid.value) || 0;
    const gropeTitsVidInt = parseInt(blkGropeTitsVid.value) || 0;
    const gropeAssVidInt = parseInt(blkGropeAssVid.value) || 0;
    const kissVidInt = parseInt(blkKissVid.value) || 0;
    const oralVidInt = parseInt(blkOralVid.value) || 0;
    const creampieVidInt = parseInt(blkCreampieVid.value) || 0;
    const facialVidInt = parseInt(blkFacialVid.value) || 0;
    const mouthVidInt = parseInt(blkMouthVid.value) || 0;
    const pulloutBodyVidInt = parseInt(blkPullOutBodyVid.value) || 0;
    const pulloutButtVidInt = parseInt(blkPullOutButtVid.value) || 0;
    const pulloutTitsVidInt = parseInt(blkPullOutTitsVid.value) || 0;
    const bigLoadInts = [];
    const unwillingLoadInts = [];

    console.log({
      doggyVidInt,
      doggyInsertImgInt,
      doggyMoanImgInt,
      bjVidInt,
      facefuckVidInt,
      gropeTitsVidInt,
      gropeAssVidInt,
      kissVidInt,
      oralVidInt,
      creampieVidInt,
      facialVidInt,
      mouthVidInt,
      pulloutBodyVidInt,
      pulloutButtVidInt,
      pulloutTitsVidInt
      });
  

    // Field validation
    if (!characterName) {
      console.error("Character Name is required.");
      alert("Please enter a character name.");
      return;
    }

    if (doggyVidInt === 0 || doggyInsertImgInt === 0 || doggyMoanImgInt === 0) {
      console.error("Doggy fields are required."); 
      alert("Doggy fields are required.");
      return;
    }

    if (bjVidInt === 0) {
      console.error("BJ fields are required."); 
      alert("BJ fields are required.");
      return;
    }

    if (facefuckVidInt === 0) {
      console.error("Facefuck fields are required."); 
      alert("Facefuck fields are required.");
      return;
    }

    if (oralVidInt === 0) {
      console.error("Oral fields are required."); 
      alert("Oral fields are required.");
      return;
    }

    if (kissVidInt === 0) {
      console.error("Kiss field are required."); 
      alert("At least one kiss is required.");
      return;
    }

    if (gropeTitsVidInt === 0 && gropeAssVidInt === 0) {
      console.error("Foreplay fields are required."); 
      alert("At least one foreplay field is required. You must have an ass or tits grope, or both.");
      return;
    }
    
    // Collect tag data from Transactional Doggy
    const doggyTags = collectTags(blkDoggyContainer, blkDoggyVidPrefix);

    doggyTags.forEach(({ videoIndex, tags, rhythm }) => {
      const tagsString = tags.join('","');
      doggyLines.push(`\n        "${doggyPath}${doggyVidPrefix} ${videoIndex}", (a:"${tagsString}")`);
      doggyRhythmLines.push(`\n        "${doggyPath}${doggyVidPrefix} ${videoIndex}", ${rhythm}`);
      })
    tagArrayDoggy.push(doggyLines.join(', '));
    rhythmArrayDoggy.push(doggyRhythmLines.join(', '));    


    // Collect tag data from Facefuck
    const facefuckTags  = collectTags(blkFacefuckContainer, blkFacefuckVidPrefix);

    facefuckTags.forEach(({ videoIndex, tags }) => {
        const tagsString = tags.join('","'); 
        facefuckLines.push(`\n        "${facefuckPath}${facefuckPrefix} ${videoIndex}", "${tagsString}"`);
    });
    tagArrayFacefuck.push(facefuckLines.join(', '));
    
    // Collect tag data from Oral
    const oralTags = collectTags(blkOralContainer, blkOralVidPrefix);
    
    oralTags.forEach(({ videoIndex, tags, rhythm }) => {
      const tagsString = tags.join('","'); 
      oralLines.push(`\n        "scenes/characters/${oralPath}${oralPrefix} ${videoIndex}.mp4", "${tagsString}"`);
      oralRhythmLines.push(`\n        "scenes/characters/${oralPath}${oralPrefix} ${videoIndex}.mp4", ${rhythm}`)
    });
    tagArrayOral.push(oralLines.join(', '));
    rhythmArrayOral.push(oralRhythmLines.join(', '));

    // Collect tag data from Mouth
    if (mouthVidInt > 0) {
      const mouthTags = collectTags(blkMouthContainer, blkMouthVidPrefix);

      mouthTags.forEach(({ videoIndex, tags }) => {
          const tagsString = tags.join('","'); 
          mouthLines.push(`\n            "/characters/${cumPath}${mouthPrefix} ${videoIndex}", (a:"${tagsString}")`);
      });
      tagArrayMouth.push(mouthLines.join(', '));
    }
    
    // Collect tag data from Facials
    if (facialVidInt > 0) {
      const facialTags = collectTags(blkFacialContainer, blkFacialVidPrefix);

      facialTags.forEach(({ videoIndex, tags }) => {
        const tagsString = tags.join('","'); 
        facialLines.push(`\n        "/characters/${cumPath}${facialPrefix} ${videoIndex}", (a:"${tagsString}")`);
      });
      tagArrayFacial.push(facialLines.join(','));   
      
      // Loop through the facialTags to determine indices for big load and unwilling tags
      facialTags.forEach(({ videoIndex, tags }) => {
        const hasBigLoad = tags.some(tag => bigLoadOptions.some(searchTerm => tag.includes(searchTerm)));
        if (hasBigLoad) {
            bigLoadInts.push(videoIndex); // Push the video index
        }

        const hasUnwillingLoad = tags.some(tag => unwillingLoadOptions.some(searchTerm => tag.includes(searchTerm)));
        if (hasUnwillingLoad) {
            unwillingLoadInts.push(videoIndex); // Push the video index
        }
      });
      tagArrayBigLoad.push(bigLoadInts.join(','));
      tagArrayUnwilling.push(unwillingLoadInts.join(','));
    }

    // Collect tag data from Pull Out
    if (pulloutBodyVidInt > 0) {
      const pulloutBodyTags  = collectTags(blkPullOutBodyContainer, blkPullOutBodyVidPrefix);
      
      pulloutBodyTags.forEach(({ videoIndex, tags }) => {
        const tagsString = tags.join('","'); 
        
        pulloutBodyLines.push(`\n        "/characters/${cumPath}${pulloutBodyPrefix} ${videoIndex}", (a:"body","${tagsString}")`);
      });
      tagArrayPullout.push(pulloutBodyLines.join(', '));
    }
    
    if (pulloutButtVidInt > 0) {
      const pulloutButtTags  = collectTags(blkPullOutButtContainer, blkPullOutButtVidPrefix);
      
      pulloutButtTags.forEach(({ videoIndex, tags }) => {
        const tagsString = tags.join('","'); 
        pulloutButtLines.push(`\n        "/characters/${cumPath}${pulloutButtPrefix} ${videoIndex}", (a:"butt","${tagsString}")`);
      });
      tagArrayPullout.push(pulloutButtLines.join(', '));
    }

    if (pulloutTitsVidInt > 0) {
      const pulloutTitsTags  = collectTags(blkPullOutTitsContainer, blkPullOutTitsVidPrefix);

      pulloutTitsTags.forEach(({ videoIndex, tags }) => {
        const tagsString = tags.join('","'); 
        pulloutTitsLines.push(`\n        "/characters/${cumPath}${pulloutTitsPrefix} ${videoIndex}", (a:"tits","${tagsString}")`);
      });
      tagArrayPullout.push(pulloutTitsLines.join(', '));
    }

    // Log tags for debugging

    console.log("doggyTags:", doggyTags) 
    console.log("facefuckTags:", facefuckTags)
    console.log("oralTags:", oralTags)
    console.log("tagArrayDoggy:", tagArrayDoggy)
    console.log("rhythmArrayDoggy:", rhythmArrayDoggy)
    console.log("tagArrayFacefuck:", tagArrayFacefuck)
    console.log("tagArrayOral:", tagArrayOral)
    console.log("rhythmArrayOral:", rhythmArrayOral)
    console.log("tagArrayMouth:", tagArrayMouth)
    console.log("tagArrayFacial:", tagArrayFacial) 
    console.log("tagArrayBigLoad:", tagArrayBigLoad) 
    console.log("tagArrayUnwilling:", tagArrayUnwilling)
    console.log("tagArrayPullout:", tagArrayPullout)
    console.log("tagArrayPulloutBody:", tagArrayPulloutBody)
    console.log("tagArrayPulloutButt:", tagArrayPulloutButt)
    console.log("tagArrayPulloutTits:", tagArrayPulloutTits)


    // Tag Validation
    const isDoggyTagsEmpty = doggyTags.every(tag => tag.tags.length === 0);
    const isFacefuckTagsEmpty = facefuckTags .every(tag => tag.tags.length === 0);
    const isOralTagsEmpty = oralTags.every(tag => tag.tags.length === 0);
    
    if (isDoggyTagsEmpty && isFacefuckTagsEmpty && isOralTagsEmpty) {
      console.error("At least one tag field is required.");
      alert("Please select at least one tag.");
      return;
    }
    

    // twee building section
    let tweeContent = `:: blacked compatibility [around]\n{\n(display:_around)\n(set:$blacked_compatible_list to it + (dm:"${characterName}",1))\n}\n\n`;

    // Transactional Doggy
    tweeContent += `:: sex doggy transactional ${characterName} [around]\n`;
    tweeContent += `{\n(if:(checkdm: $npc, "race", "is", "black"))[\n`;
    if (doggyVidInt === 1) {
      tweeContent += `    (set:$img to "${doggyPath}${doggyVidPrefix} 1")\n`;
    } else {
      tweeContent += `    (set:$img to "${doggyPath}${doggyVidPrefix} " + (text:(twist:1,${doggyVidInt})))\n`;
    }
    if (doggyInsertImgInt === 1) {
      tweeContent += `    (set:$doggy_pic to "<img class='greyborder' src='img/scenes/characters/${doggyPath}${doggyInsertPrefix} 1.jpg' width=100% height=auto>")\n`;
    } else {
      tweeContent += `    (set:$doggy_pic to "<img class='greyborder' src='img/scenes/characters/${doggyPath}${doggyInsertPrefix} " + (text:(twist:1,${doggyInsertImgInt})) + ".jpg' width=100% height=auto>")\n`;
    }
    if (doggyMoanImgInt === 1) {
      tweeContent += `    (set:$doggy_moan_pic to "<img class='greyborder' src='img/scenes/characters/${doggyPath}${doggyMoanPrefix} 1.jpg' width=100% height=auto>")\n`;
    } else {
      tweeContent += `    (set:$doggy_moan_pic to "<img class='greyborder' src='img/scenes/characters/${doggyPath}${doggyMoanPrefix} " + (text:(twist:1,${doggyMoanImgInt})) + ".jpg' width=100% height=auto>")\n`;
    }
    tweeContent += `    (set:$doggy_rhythm to $img of\n`;
    tweeContent += `        (dm: ${rhythmArrayDoggy.join(',')}))\n`;
    tweeContent += `    (set:$text to $img of\n`;
    tweeContent += `        (dm: ${tagArrayDoggy.join(',')}))\n`;
    tweeContent += `](else:)[(display:_around)]\n}\n\n`;

    // Facefuck
    tweeContent += `:: blowjob transactional facefuck ${characterName} [around]\n`;
    tweeContent += `{\n(if:(checkdm: $npc, "race", "is", "black"))[\n`;
    if (facefuckVidInt === 1) {
      tweeContent += `    (set:$img to "${facefuckPath}${facefuckPrefix} 1")\n`;
    } else {
      tweeContent += `    (set:$img to "${facefuckPath}${facefuckPrefix} " + (text:(twist:1,${facefuckVidInt})))\n`;
    }
    tweeContent += `    (set:$text to $img of\n`;
    tweeContent += `        (dm: ${tagArrayFacefuck.join(',')}))\n`;
    tweeContent += `](else:)[(display:_around)]\n}\n\n`;

    tweeContent += `:: facefuck transactional ${characterName} [around]\n`; // Only called once, submited merge request to consolidate
    tweeContent += `{\n(if:(checkdm: $npc, "race", "is", "black"))[\n`;
    if (facefuckVidInt === 1) {
      tweeContent += `    (set:$img to "${facefuckPath}${facefuckPrefix} 1")\n`;
    } else {
      tweeContent += `    (set:$img to "${facefuckPath}${facefuckPrefix} " + (text:(twist:1,${facefuckVidInt})))\n`;
    }
    tweeContent += `    (set:$text to $img of\n`;
    tweeContent += `        (dm: ${tagArrayFacefuck.join(',')}))\n`;
    tweeContent += `](else:)[(display:_around)]\n}\n\n`;

    // Blowjob
    tweeContent += `:: blowjob transactional initialize ${characterName} [around]\n`;
    tweeContent += `{\n(if:(checkdm: $npc, "race", "is", "black"))[\n`;
    if (bjVidInt === 1) {
      tweeContent += `    (set:$img to "scenes/characters/${bjPath}${bjPrefix} 1.mp4") \n`;
    } else {
      tweeContent += `    (set:$img to "scenes/characters/${bjPath}${bjPrefix} " + (text:(twist:1,${bjVidInt})) + ".mp4")\n`;
    }
    tweeContent += `](else:)[(display:_around)]\n}\n\n`;

    tweeContent += `:: sex transactional blowjob ${characterName} [around]\n`;
    tweeContent += `{\n(if:(checkdm: $npc, "race", "is", "black"))[\n`;
    if (bjVidInt === 1) {
      tweeContent += `    (set:$img to "scenes/characters/${bjPath}${bjPrefix} 1.mp4") \n`;
    } else {
      tweeContent += `    (set:$img to "scenes/characters/${bjPath}${bjPrefix} " + (text:(twist:1,${bjVidInt})) + ".mp4")\n`;
    }
    tweeContent += `](else:)[(display:_around)]\n}\n\n`;

    // Grope
    tweeContent += `:: sex transactional grope ${characterName} [around]\n`;
    tweeContent += `{\n(if:(checkdm: $npc, "race", "is", "black"))[\n`;
    if (gropeTitsVidInt > 0 && gropeAssVidInt > 0) {
      tweeContent += `    (set:$grope to (twirl:"tits","ass"))\n\n`;
      tweeContent += `    (if:$grope is "tits")[\n`;
      if (gropeTitsVidInt === 1) {
        tweeContent += `        (set:$grope_img to "${gropeTitsPrefix} 1")]\n`;
      } else {
        tweeContent += `        (set:$grope_img to "${gropeTitsPrefix} " + (text:(twist:1,${gropeTitsVidInt})))]\n`;
      }
      tweeContent += `    (else-if:$grope is "ass")[\n`;
      if (gropeAssVidInt === 1) {
        tweeContent += `        (set:$grope_img to "${gropeAssPrefix} 1")]\n`;
      } else {
        tweeContent += `        (set:$grope_img to "${gropeAssPrefix} " + (text:(twist:1,${gropeAssVidInt})))]\n`;
      }
    } else if (gropeTitsVidInt > 0) {
      tweeContent += `    (set:$grope to "tits")\n\n`;
      if (gropeTitsVidInt === 1) {
        tweeContent += `    (set:$grope_img to "${gropeTitsPrefix} 1")\n`
      } else {
        tweeContent += `    (set:$grope_img to "${gropeTitsPrefix} " + (text:(twist:1,${gropeTitsVidInt})))\n`;
      }
    } else if (gropeAssVidInt > 0) {
      tweeContent += `    (set:$grope to "ass")\n\n`;
      if (gropeAssVidInt === 1) {
        tweeContent += `    (set:$grope_img to "${gropeAssPrefix} 1")\n`;
      } else {
        tweeContent += `    (set:$grope_img to "${gropeAssPrefix} " + (text:(twist:1,${gropeAssVidInt})))\n`;
      }
    }
    tweeContent += `](else:)[(display:_around)]\n}\n\n`;

    // Kiss
    tweeContent += `:: sex transactional kiss ${characterName} \n`;
    tweeContent += `{\n(if:(checkdm: $npc, "race", "is", "black"))[\n`;
    if (kissVidInt === 1){
      tweeContent += `    (set:$kiss_variant to "${kissPrefix} 1")\n`;
    } else {
      tweeContent += `    (set:$kiss_variant to "${kissPrefix} " + (text:(twist:1,${kissVidInt})))\n`;
    }
    tweeContent += `](else:)[(display:_around)]\n}\n\n`;
    
    // Oral
    tweeContent += `:: sex oral ${characterName} [around]\n`;
    tweeContent += `{\n(if:(checkdm: $npc, "race", "is", "black"))[\n`;
    if (oralVidInt === 1) {
      tweeContent += `    (set:$oral_img to "scenes/characters/${oralPath}${oralPrefix} 1.mp4")\n`;
    } else {
      tweeContent += `    (set:$oral_img to "scenes/characters/${oralPath}${oralPrefix} " + (text:(twist:1,${oralVidInt})) + ".mp4")\n\n`;
    }
    tweeContent += `    (set:$oral_rhythm to $oral_img of\n`;
    tweeContent += `        (dm: ${rhythmArrayOral.join(',')}))\n`;
    tweeContent += `    (set:$oral_position to $oral_img of\n`;
    tweeContent += `        (dm: ${tagArrayOral.join(',')}))\n\n`;
    tweeContent += `    (set:$sex_loop to $sex_loop + (text:(twist:1,2)))\n`;
    tweeContent += `](else:)[(display:_around)]\n}\n\n`;

    // Creampie
    tweeContent += `:: sex creampie image ${characterName} [around]\n`;
    tweeContent += `{\n(if:(checkdm: $npc, "race", "is", "black"))[\n`;
    if (creampieVidInt === 1) {
      tweeContent += `    (set:$img to "/characters/${cumPath}${creampiePrefix} 1")\n`;
    } else if (creampieVidInt > 1) {
      tweeContent += `    (set:$img to "/characters/${cumPath}${creampiePrefix} " + (text:(twist:1,${creampieVidInt})))\n`;
    } else {
      tweeContent += `    (set:$generic_creampie_variant to 1)\n`;
    }
    tweeContent += `](else:)[(display:_around)]\n}\n\n`;
    
    // Facial
    tweeContent += `:: sex cum on face ${characterName} [around]\n`;
    tweeContent += `{\n(if:(checkdm: $npc, "race", "is", "black"))[\n`;

    if (!blkFacialVid.value) {
      tweeContent += `    (set:$cum_face to (dm:))\n`;
      tweeContent += `    (set:$img to "/generic/sex/cum/bbc facial " + (text:(twist:1,5)))\n`;
    } else {
      if (facialVidInt === 1) {
        tweeContent += `    (set:$img to "/characters/${cumPath}${facialPrefix} 1")\n`;
      } else if (facialVidInt > 1) {
        tweeContent += `    (set:$img to "/characters/${cumPath}${facialPrefix} " + (text:(twist:1,${facialVidInt})))\n`;
      }
      if (tagArrayBigLoad.length > 0 && tagArrayBigLoad[0] !== "") {
        tweeContent += `    (if:$load is "big")[(set:$img to "/characters/${cumPath}${facialPrefix} " + (text:(twirl:${tagArrayBigLoad})))]\n`
      }
      if (tagArrayUnwilling.length > 0 && tagArrayUnwilling[0] !== "") {
          tweeContent += `    (if:$load is "unwilling")[(set:$img to "/characters/${cumPath}${facialPrefix} " + (text:(twirl:${tagArrayUnwilling})))]\n`
      }

      tweeContent += `\n    (set:$cum_face to\n`;
      tweeContent += `        (dm: ${tagArrayFacial.join(',')}))\n\n`;
    } 
    
    tweeContent += `](else:)[(display:_around)]\n}\n\n`;

    // Mouth
    tweeContent += `:: sex cum in mouth load ${characterName} [around]\n`;
    tweeContent += `{\n(if:(checkdm: $npc, "race", "is", "black"))[\n`;
    if (mouthVidInt < 1 ) {
      tweeContent += `    (set:$cum_mouth_generic to 1)\n`
    } else {
      tweeContent += `    (if:(twist:1,4) is 1)[(set:$cum_mouth_generic to 1)]\n    (else:)[\n`
      if (mouthVidInt === 1) {
        tweeContent += `        (set:$img to "/characters/${cumPath}${mouthPrefix} 1")\n`;
      } else {
        tweeContent += `        (set:$img to "/characters/${cumPath}${mouthPrefix} " + (text:(twist:1,${mouthVidInt})))\n`;
      }
      tweeContent += `\n        (set:$cum_mouth to\n`;
      tweeContent += `            (dm: ${tagArrayMouth.join(',')}))]\n`;
    }
    tweeContent += `](else:)[(display:_around)]\n}\n\n`;


    // Pull Out
    tweeContent += `:: sex pull out ${characterName} [around]\n`;
    tweeContent += `{\n(if:(checkdm: $npc, "race", "is", "black"))[\n`;
    const imgPaths = [];

    // Collect Tits
    if (blkPullOutTitsVid.value && pulloutTitsVidInt !== 0) {
      for (let i = 1; i <= pulloutTitsVidInt; i++) {
        imgPaths.push(`/characters/${cumPath}${pulloutTitsPrefix} ${i}`);
      }
    }

    // Collect Body
    if (blkPullOutBodyVid.value && pulloutBodyVidInt !== 0) {
      for (let i = 1; i <= pulloutBodyVidInt; i++) {
        imgPaths.push(`/characters/${cumPath}${pulloutBodyPrefix} ${i}`);
      }
    }

    // Collect Butt
    if (blkPullOutButtVid.value && pulloutButtVidInt !== 0) {
      for (let i = 1; i <= pulloutButtVidInt; i++) {
        imgPaths.push(`/characters/${cumPath}${pulloutButtPrefix} ${i}`);
      }
    }

    if (imgPaths.length > 0) {
      tweeContent += `    (set:$img to (twirl:\n`;
      imgPaths.forEach((path, index) => {
        tweeContent += `        "${path}"${index < imgPaths.length - 1 ? ',' : ''}\n`;
      });
      tweeContent += `    ))\n`;
      tweeContent += `    (set:$text to $img of\n`;
      tweeContent += `        (dm: ${tagArrayPullout.join(',')}))\n`;
    } else {
      tweeContent += `    (set:$pullout_variant to 1)\n`;
    }

    tweeContent += `](else:)[(display:_around)]\n}\n\n`;


    // Add files to the ZIP
    blkzip.file(`${characterName}-BLACKED.twee`, tweeContent);
  };

  // Generate BLACKED Files ONLY
  function generateBlackedFiles(){
    gatherBlackedFiles();
    generateBlackedZip();
  };

  //Generate ALL BLACKED Files and Directories
  function generateBlackedAll(){
    gatherBlackedMeta();
    gatherBlackedDirectories();
    gatherBlackedFiles();
    generateBlackedZip();
  };

  // #endregion --- Functions - Blacked

  // #region --- Functions - Bar Girl

  // Showing/Hiding BBC Only Field
  function toggleBBCTag() {
    if (bgPartnerRace.value === "black") {
      bbcTag.classList.remove("hidden");
      bgTraits6.value = "random"
    } else {
      bbcTag.classList.add("hidden");
      bgTraits6.value = "false"
    }
  };

  // Generate BG Zip File
  function generateBGZip(){
    const characterName = bgCharacterName.value;

    // Check if there are any files in the ZIP before generating
    if (Object.keys(bgzip.files).length === 0) {
      console.error("No files added to the ZIP. Cannot generate a ZIP file.");
      return;
    }

    bgzip.generateAsync({ type: "blob" }).then(function (content) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = `Bar Girl - ${characterName}.zip`;
      link.click();
    });
  };

  // Gather BG Meta
  function gatherBGMeta() {

    if (!bgzip) {
      bgzip = new JSZip();
    } 

    // Collect input values from forms
    const characterName = bgCharacterName.value;
    const version = bgYourModVersion.value;
    const author = bgModAuthor.value;
    const baseGameVersion = bgBaseGameVersion.value;

    if (!characterName) {
      console.error("Character Name is required.");
      alert("Please enter a character name.");
      return;
    }

    if (!version || !author || !baseGameVersion) {
      alert("All meta fields are required. Please fill out the fields.");
      return; 
    }

    // Create the meta content string
    let metaContent = `metaVersion: 1\n`;
    metaContent += `name: "Bar Girl - ${characterName}"\n`;
    metaContent += `version: "${version}"\n`;
    metaContent += `author: "${author}"\n`;
    metaContent += `baseGameVersion:\n  atLeast: "${baseGameVersion}"\n`;

    // Add meta to the ZIP
    bgzip.folder("metas").file(`Bar Girl - ${characterName}.meta`, metaContent);
  };

  // Generate BG Meta file ONLY
  function generateBGMeta() {
    gatherBGMeta();
    generateBGZip();
  };

  // Generate BG directories
  function gatherBGDirectories() {
    const characterName = bgCharacterName.value.toLowerCase();

    if (!bgzip) {
      bgzip = new JSZip();
    } 

    if (!characterName) {
      console.error("Character Name is required.");
      alert("Please enter a character name.");
      return;
    }

    // Add directories to the ZIP
    bgzip.folder(`metas`)
    bgzip.folder(`aud/se/sex/${characterName}/loops/bj`)
    bgzip.folder(`aud/se/sex/${characterName}/loops/doggy`)
    bgzip.folder(`aud/se/sex/${characterName}/loops/licking`)
    bgzip.folder(`aud/se/sex/${characterName}/loops/missionary`)
    bgzip.folder(`aud/se/sex/${characterName}/loops/riding`)
    bgzip.folder(`aud/se/sex/${characterName}/orgasm/cum`)
    bgzip.folder(`aud/se/sex/${characterName}/orgasm/orgasm`)
    bgzip.folder(`aud/se/sex/${characterName}/penetration`)
    bgzip.folder(`img/places/club/dancers`)
    bgzip.folder(`img/npc/girls/${characterName}`)
    bgzip.folder(`img/npc/girls/${characterName}/strip`)
    bgzip.folder(`img/npc/girls/${characterName}/sex/orgasm`)
    bgzip.folder(`img/npc/girls/${characterName}/sex/post`)
    bgzip.folder(`img/npc/girls/${characterName}/sex/bbc`)
    bgzip.folder(`img/npc/girls/${characterName}/sex/bwc`)
  };

  // Generate BG Directories ONLY
  function generateBGDirectories() {
    gatherBGDirectories();
    generateBGZip();
  };

  // Gather BG Values and add to bgzip
  function gatherBGFiles() {
    if (!bgzip) {
      bgzip = new JSZip();
    }

    // Collect input values from forms
    const characterName = bgCharacterName.value.toLowerCase();
    const race = bgCharacterRace.value;
    const drink = bgFaveDrink.value;
    const partnerRace = bgPartnerRace.value;
    const style = bgSexStyle.value;
    const position = bgSexPosition.value;
    const traits1 = bgTraits1.value;
    const traits2 = bgTraits2.value;
    const traits3 = bgTraits3.value;
    const traits4 = bgTraits4.value;
    const traits5 = bgTraits5.value;
    const traits6 = bgTraits6.value;

    const possibleNames = extractTags(bgPossibleNameContainer).map(name => toProperCase(name));
    const unfamiliarNames = extractTags(bgUnfamiliarNameContainer).map(name => toProperCase(name));
    const danceSuccess = extractTags(bgDanceSuccessContainer);
    const danceFail = extractTags(bgDanceFailContainer);

    // Field validation
    if (!characterName,
      possibleNames.length === 0 ||
      unfamiliarNames.length === 0 ||
      danceSuccess.length === 0 ||
      danceFail.length === 0
    ) {
      console.error("All fields are required.");
      alert("All fields are required.");
      return;
    }


    // twee building section
    let tweeContent = `:: add ${characterName} [initialize init_new]\n{\n`;
    tweeContent += `    (unless:(datanames:$npcs) contains "${characterName}")[\n`;
    tweeContent += `        (set:_drinks to (twisted:"tequila","fruity cocktail","whisky","beer","wine"))\n\n`;
    if (drink !== "random") {
      tweeContent += `        (set:_drinks to it - (a:"${drink}"))\n\n`;
    }
    tweeContent += `        (set:_roll10 to (twist: 1,10))\n`;
    tweeContent += `        (set:_racepref to (cond:\n`;
    tweeContent += `            (_roll10 >= 2 and _roll10 <= 5), "white",\n`;
    tweeContent += `            (_roll10 >= 6 and _roll10 <= 9), "black",\n`;
    tweeContent += `            _roll10 is 1, "latin",\n`;
    tweeContent += `            _roll10 is 10, "asian",\n`;
    tweeContent += `            "black"))\n\n`;
    tweeContent += `        (set:$npcs to it + (dm:\n`;
    tweeContent += `        "${characterName}", (dm:\n`;
    tweeContent += `            "id", "${characterName}",\n`;
    tweeContent += `            "race", "${race}",\n`;
    if (possibleNames.length === 1) {
      tweeContent += `            "possible names", "${possibleNames}",\n`;
      tweeContent += `            "name", "${possibleNames}",\n`;
    } else {
      tweeContent += `            "possible names", (twisted:"${possibleNames.join('", "')}"),\n`;
      tweeContent += `            "name", (twirl:"${possibleNames.join('", "')}"),\n`;
    }
    if (unfamiliarNames.length === 1) {
      tweeContent += `            "unfamiliar name", "${unfamiliarNames}",\n`;
    } else {
      tweeContent += `            "unfamiliar name", (twirl:"${unfamiliarNames.join('", "')}"),\n`;
    }
    tweeContent += `            "familiarity male", 0,\n`;
    tweeContent += `            "familiarity female", 0,\n`;
    tweeContent += `            "likes", (a:\n`;
    if (partnerRace === "random") {
      tweeContent += `            _racepref,\n`;
    } else {
      tweeContent += `            "${partnerRace}",\n`;
    }
    if (drink === "random") {
      tweeContent += `            3 of _drinks,\n`;
    } else {
      tweeContent += `            "${drink}",\n`;
    }
    if (style === "random") {
      tweeContent += `            (twirl: "rough sex", "gentle sex"),\n`;
    } else {
      tweeContent += `            "${style}",\n`;
    }
    if (position === "random") {
      tweeContent += `            (twirl: "doggystyle", "riding", "missionary")),\n`;
    } else {
      tweeContent += `            "${position}"),\n`;
    }
    tweeContent += `            "dislikes", (a:\n`;
    if (style === "rough sex") {
      tweeContent += `            "gentle sex",\n`;
    } else if (style === "gentle sex")  {
      tweeContent += `            "rough sex",\n`;
    }
    if (drink === "random") {
      tweeContent += `            (twirl:1, 2, 4, 5) of _drinks),\n`;
    } else {
      tweeContent += `            (twirl:1, 2, 3, 4) of _drinks),\n`;
    }
    tweeContent += `            "traits", (a:\n`;
    if (traits5 === "size queen" || traits5 === "tight") {
      tweeContent += `            "${traits5}",\n`;
    }
    if (traits6 === "only bbc") {
      tweeContent += `            "${traits6}",\n`;
    }
    if (traits1 === "random") {
      tweeContent += `            (twirl: "likes assertive", "feminist"),\n`;
    } else {
      tweeContent += `            "${traits1}",\n`;
    }
    if (traits2 === "random") {
      tweeContent += `            (twirl: "bitch", "kind", "religious", "slut"),\n`;
    } else {
      tweeContent += `            "${traits2}",\n`;
    }
    if (traits3 === "random") {
      tweeContent += `            (twirl: "nerdy", "sporty", "rich", "feminine", "bimbo"),\n`;
    } else {
      tweeContent += `            "${traits3}",\n`;
    }
    if (traits4 === "random") {
      tweeContent += `            (twirl: "pill", "no pill")),\n`;
    } else {
      tweeContent += `            "${traits4}"),\n`;
    }
    tweeContent += `            "events", (a:),\n`;
    tweeContent += `            "topics", (a:),\n`;
    tweeContent += `            "sex positions", (a:),\n`;
    tweeContent += `            "img", "img/npc/girls/${characterName}/portrait_normal.jpg",\n`;
    tweeContent += `            "img dir", "img/npc/girls/${characterName}/portrait_"\n        )))\n\n`;

    if (traits5 === "random") {
      tweeContent += `        (if:_roll10 >= 4 and _roll10 <= 6)[(set:$npcs's "${characterName}"'s traits to it + (a:"size queen"))]\n`;
      tweeContent += `        (else-if:_roll10 = 1 or _roll10 = 10)[(set:$npcs's "${characterName}"'s traits to it + (a:"tight"))]\n\n`;
    } 

    if (traits6 === "random") {
      tweeContent += `        (if:_racepref is "black" and (twist:1,2 is 1))[\n`;
      tweeContent += `            (set:$npc's "${characterName}"'s traits to it + (a:"only bbc"))\n        ]\n\n`;
    }

    tweeContent += `        (set:_temp to 0)\n`;
    tweeContent += `        (set:$relationships's "${characterName}" to (dm:\n`;
    tweeContent += `        "id","${characterName}",\n`;
    tweeContent += `        "name",(text:"name" of $npcs's "${characterName}"),\n`;
    tweeContent += `        "gender","female",\n`;
    tweeContent += `        "respect",_temp,\n`;
    tweeContent += `        "dom",0,\n`;
    tweeContent += `        "friendship",0,\n`;
    tweeContent += `        "attraction",0,\n`;
    tweeContent += `        "tags",(a:),\n`;
    tweeContent += `        "events",(a:)\n        ))\n\n`;

    tweeContent += `        (set:$relationships's "${characterName} while female" to (dm:\n`;
    tweeContent += `        "id","${characterName}",\n`;
    tweeContent += `        "name",(text:"name" of $npcs's "${characterName}"),\n`;
    tweeContent += `        "gender","female",\n`;
    tweeContent += `        "respect",_temp,\n`;
    tweeContent += `        "dom",0,\n`;
    tweeContent += `        "friendship",0,\n`;
    tweeContent += `        "attraction",0,\n`;
    tweeContent += `        "tags",(a:"while on xchange"),\n`;
    tweeContent += `        "events",(a:)\n        ))\n\n`;
    tweeContent += `    ]\n}\n\n`;

    tweeContent += `:: girl sex tracks ${characterName} [initialize init_new]\n{\n`;
    tweeContent += `    (newtrack:'orgasm ${characterName} 1','aud/se/sex/${characterName}/orgasm/orgasm/${characterName} 1.mp3')\n`;
    tweeContent += `    (newtrack:'orgasm ${characterName} 2','aud/se/sex/${characterName}/orgasm/orgasm/${characterName} 2.mp3')\n`;
    tweeContent += `    (newtrack:'riding loop ${characterName} bbc','aud/se/sex/${characterName}/loops/riding/${characterName} bbc.mp3')\n`;
    tweeContent += `    (newtrack:'riding loop ${characterName} bwc','aud/se/sex/${characterName}/loops/riding/${characterName} bwc.mp3')\n`;
    tweeContent += `    (newtrack:'licking loop ${characterName} bbc','aud/se/sex/${characterName}/loops/licking/${characterName} bbc.mp3')\n`;
    tweeContent += `    (newtrack:'licking loop ${characterName} bwc','aud/se/sex/${characterName}/loops/licking/${characterName} bwc.mp3')\n`;
    tweeContent += `    (newtrack:'cum moan ${characterName} bbc','aud/se/sex/${characterName}/orgasm/cum/${characterName} bbc.mp3')\n`;
    tweeContent += `    (newtrack:'cum moan ${characterName} bwc','aud/se/sex/${characterName}/orgasm/cum/${characterName} bwc.mp3')\n`;
    tweeContent += `    (newtrack:'bj loop ${characterName} bbc','aud/se/sex/${characterName}/loops/bj/${characterName} bbc.mp3')\n`;
    tweeContent += `    (newtrack:'bj loop ${characterName} bwc','aud/se/sex/${characterName}/loops/bj/${characterName} bwc.mp3')\n`;
    tweeContent += `    (newtrack:'doggy loop ${characterName} bbc','aud/se/sex/${characterName}/loops/doggy/${characterName} bbc.mp3')\n`;
    tweeContent += `    (newtrack:'doggy loop ${characterName} bwc','aud/se/sex/${characterName}/loops/doggy/${characterName} bwc.mp3')\n`;
    tweeContent += `    (newtrack:'missionary loop ${characterName} bbc','aud/se/sex/${characterName}/loops/missionary/${characterName} bbc.mp3')\n`;
    tweeContent += `    (newtrack:'missionary loop ${characterName} bwc','aud/se/sex/${characterName}/loops/missionary/${characterName} bwc.mp3')\n`;
    tweeContent += `    (newtrack:'penetration ${characterName} bbc','aud/se/sex/${characterName}/penetration/${characterName} bbc.mp3')\n`;
    tweeContent += `    (newtrack:'penetration ${characterName} bwc','aud/se/sex/${characterName}/penetration/${characterName} bwc.mp3')\n}\n`;

    tweeContent += `:: girl cum [around]\n{\n`;
    tweeContent += `    (display:_around)\n`;
    tweeContent += `    (if:$npc's "id" is "${characterName}")[\n`;
    tweeContent += `        (if:$type is "pull out")[\n`;
    tweeContent += `            (replace:?screen)[\n`;
    tweeContent += `                ($vid:"npc/girls/" + $npc's "id" + "/sex/" + (text:$img) + "/pull out.mp4")\n`;
    tweeContent += `                (set:$cum_img to "<video disableRemotePlayback src='img/npc/girls/" + $npc's "id" + "/sex/" + (text:$img) + "/pull out.mp4' autoplay='' loop='' muted='' playsinline/>")`
    tweeContent += `                (display:"register fuck girl")\n`;
    tweeContent += `                (twirl:"You nut","You blow your load","You unload your balls","Groaning loudly, you cum","You cum","You shoot your load","You finally empty your balls","You drain your balls") (twirl:"all over her","all over her beautiful body","all over her tits and stomach","all over her body").\n`;
    tweeContent += `                (nl:1)(if:(twist:1,2) is 1)["(twirl:"Wow, that's a lot...","So much cum...","Oh my god, so *much*...")" she (twirl:"breathes","says","murmurs").]\n`;
    tweeContent += `                <div class='options'>(link:"Next")[($cs:"girl sex aftermath")]</div>\n`;
    tweeContent += `                (set:$today_events to $today_events + (a:"orgasm"))(dec:'action_points')(display:"update action points orgasm")\n`;
    tweeContent += `                (if:$status's "status" is "sexually frustrated" or $status's "status" is "very sexually frustrated" and $character's "arousal" is 0 or $today_events contains "orgasm")[(display:"reset status")]\n`;
    tweeContent += `                ($remember:"cum girl",14,$npc's name,$cum_img,$type,(cond:$type is "creampie" and $npc's traits contains "no pill","unhappy creampie","normal"),...$npc's traits)\n`;
    tweeContent += `            ]]]\n}\n`;

    tweeContent += `:: club dance result text ${characterName}\n{\n`;
    tweeContent += `    (set:$npc_select to "${characterName}")(display:"load relationship")\n`;
    tweeContent += `    (if:$result is "pass")[(set:$gain_attraction to 2)(set:$max_attraction to 10)(set:$gain_friendship to 1)(set:$max_friendship to 10)(set:$max_attraction to 10)(display:"change relationship")\n`;
    if (danceSuccess.length === 1) {
      tweeContent += `        "${danceSuccess}"]\n`;
    } else {
      tweeContent += `        (twirl:"${danceSuccess.join('",\n        "')}")]\n`;
    }
    tweeContent += `    (else:)[\n`;
    tweeContent += `        (set:$gain_attraction to -2)(set:$gain_friendship to -1)(set:$min_friendship to -4)(set:$min_attraction to -10)(display:"change relationship")\n`;
    tweeContent += `        (set:$time_events to $time_events + (a:"date uncomfortable"))\n`;
    if (danceFail.length === 1) {
      tweeContent += `        "${danceFail}"]\n}\n\n`;
    } else {
      tweeContent += `        (twirl:"${danceFail.join('",\n        "')}")]\n}\n\n`;
    }

    // Add files to the ZIP
    bgzip.file(`${characterName}.twee`, tweeContent);
  };

  // Generate BG Files ONLY
  function generateBGFiles(){
    gatherBGFiles();
    generateBGZip();
  };

  //Generate ALL BG Files and Directories
  function generateBGAll(){
    gatherBGMeta();
    gatherBGDirectories();
    gatherBGFiles();
    generateBGZip();
  };




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

          // Hide the landing page when any tab is clicked
          document.getElementById("landingPage").style.display = "none";

          // Show the selected tab content and hide others
          document.querySelectorAll(".tabcontent").forEach(tab => {
              tab.style.display = tab.id === toolName ? "block" : "none";
          });

          // Remove 'active' class from all tablinks and add it to the clicked one
          tablinks.forEach(link => link.classList.remove("active"));
          this.classList.add("active");
      });
  }
  // #endregion --- Listeners - General

  // #region --- Listeners - MCF

  // Height/Weight Conversions
  mcfCharacterWeightLB.addEventListener("input", () => convertWeight('lbs'));
  mcfCharacterWeightKG.addEventListener("input", () => convertWeight('kg'));
  mcfCharacterHeightIN.addEventListener("input", () => convertHeight('inches'));
  mcfCharacterHeightCM.addEventListener("input", () => convertHeight('cm'));

  // Set up MCF Defaults and tooltips after Character Input
  mcfCharacterName.addEventListener("input", setmcfDefaultDirectories);

  // Adding Butt Description Line
  mcfDescribeButtButton.addEventListener("click", function(){
    addLine(mcfDescribeButtInput, mcfDescribeButtContainer)
  });

  // Generate Example - Butt Description
  exampleDescribeButtButton.addEventListener("click", function(){
    if(mcfCharacterButt.value === "slim"){generateExample(exampleDescribeButtSlim, mcfDescribeButtContainer)}
    else if(mcfCharacterButt.value === "bubble"){generateExample(exampleDescribeButtBubble, mcfDescribeButtContainer)}
    else if(mcfCharacterButt.value === "big"){generateExample(exampleDescribeButtBig, mcfDescribeButtContainer)}
  });

  // Clear Butt Description Container
  clearDescribeButt.addEventListener("click", function(){
    clearElement(mcfDescribeButtContainer)
  });

  // Adding Boobs Description Line
  mcfDescribeBoobsButton.addEventListener("click", function(){
    addLine(mcfDescribeBoobsInput, mcfDescribeBoobsContainer)
  });

  // Generate Example - Boobs Description
  exampleDescribeBoobsButton.addEventListener("click", function(){
    if (["A","B"].includes(mcfCharacterBreasts.value)){generateExample(exampleDescribeBoobsSmall, mcfDescribeBoobsContainer)}
    else if (["C","D"].includes(mcfCharacterBreasts.value)){generateExample(exampleDescribeBoobsMedium, mcfDescribeBoobsContainer)}
    else {generateExample(exampleDescribeBoobsBig, mcfDescribeBoobsContainer)}
  });

  // Clear Boobs Description Container
  clearDescribeBoobs.addEventListener("click", function(){
    clearElement(mcfDescribeBoobsContainer)
  });

  // Adding Body Description Line
  mcfDescribeBodyButton.addEventListener("click", function(){
    addLine(mcfDescribeBodyInput, mcfDescribeBodyContainer)
  });

  // Generate Example - Body Description
  exampleDescribeBodyButton.addEventListener("click", function(){
    if(mcfCharacterBodyType.value === "slim"){generateExample(exampleDescribeBodySlim, mcfDescribeBodyContainer)}
    else if(mcfCharacterBodyType.value === "average"){generateExample(exampleDescribeBodyAvg, mcfDescribeBodyContainer)}
    else if(mcfCharacterBodyType.value === "voluptuous"){generateExample(exampleDescribeBodyVol, mcfDescribeBodyContainer)}
  });

  // Clear Body Description Container
  clearDescribeBody.addEventListener("click", function(){
    clearElement(mcfDescribeBodyContainer)
  });

  // Adding Transformation Description
  mcfDescribeTransformationButton.addEventListener("click", function(){
    addLine(mcfDescribeTransformationInput, mcfDescribeTransformationContainer)
  });

  // Generate Example - Transformation Description
  exampleDescribeTransformationButton.addEventListener("click", function(){
    generateExample(exampleDescribeTransformation, mcfDescribeTransformationContainer)
  });

  // Clear Transformation Description Container
  clearDescribeTransformation.addEventListener("click", function(){
    clearElement(mcfDescribeTransformationContainer)
  });

  // Adding Transformation Clothes Thoughts
  mcfThoughtClothesButton.addEventListener("click", function(){
    addLine(mcfThoughtClothesInput, mcfThoughtClothesContainer)
  });

  // Generate Example - Transformation Clothes Thoughts
  exampleThoughtClothesButton.addEventListener("click", function(){
    generateExample(exampleThoughtClothes, mcfThoughtClothesContainer)
  });

  // Clear Transformation Clothes Thoughts Container
  clearThoughtClothes.addEventListener("click", function(){
    clearElement(mcfThoughtClothesContainer)
  });

  // Adding Examine Self - Reluctant
  mcfExamineSelfReluctantButton.addEventListener("click", function(){
    addLine(mcfExamineSelfReluctantInput, mcfExamineSelfReluctantContainer)
  });

  // Generate Example - Examine Self - Reluctant
  exampleExamineSelfReluctantButton.addEventListener("click", function(){
    generateExample(exampleExamineSelfReluctant, mcfExamineSelfReluctantContainer)
  });

  // Clear Examine Self - Reluctant Container
  clearExamineSelfReluctant.addEventListener("click", function(){
    clearElement(mcfExamineSelfReluctantContainer)
  });

  // Adding Examine Self - Confident
  mcfExamineSelfConfidentButton.addEventListener("click", function(){
    addLine(mcfExamineSelfConfidentInput, mcfExamineSelfConfidentContainer)
  });

  // Generate Example - Examine Self - Confident
  exampleExamineSelfConfidentButton.addEventListener("click", function(){
    generateExample(exampleExamineSelfConfident, mcfExamineSelfConfidentContainer)
  });

  // Clear Examine Self - Confident Container
  clearExamineSelfConfident.addEventListener("click", function(){
    clearElement(mcfExamineSelfConfidentContainer)
  });

  // Adding Stepsis Shower Tease
  mcfStepSisShowerTeaseButton.addEventListener("click", function(){
    addLine(mcfStepSisShowerTeaseInput, mcfStepSisShowerTeaseContainer)
  });

  // Generate Example - Stepsis Shower Tease
  exampleStepSisShowerTeaseButton.addEventListener("click", function(){
    generateExample(exampleStepSisShowerTease, mcfStepSisShowerTeaseContainer)
  });

  // Clear Stepsis Shower Tease Container
  clearStepSisShowerTease.addEventListener("click", function(){
    clearElement(mcfStepSisShowerTeaseContainer)
  });

  // Adding Catcall - Body
  mcfCatcallBodyButton.addEventListener("click", function(){
    addLine(mcfCatcallBodyInput, mcfCatcallBodyContainer)
  });

  // Generate Example - Catcall - Body
  exampleCatcallBodyButton.addEventListener("click", function(){
    generateExample(exampleCatcallBody, mcfCatcallBodyContainer)
  });

  // Clear Catcall - Body Container
  clearCatcallBody.addEventListener("click", function(){
    clearElement(mcfCatcallBodyContainer)
  });

  // Adding Catcall - Face
  mcfCatcallFaceButton.addEventListener("click", function(){
    addLine(mcfCatcallFaceInput, mcfCatcallFaceContainer)
  });

  // Generate Example - Catcall - Face
  exampleCatcallFaceButton.addEventListener("click", function(){
    generateExample(exampleCatcallFace, mcfCatcallFaceContainer)
  });

  // Clear Catcall - Face Container
  clearCatcallFace.addEventListener("click", function(){
    clearElement(mcfCatcallFaceContainer)
  });

  // Adding Catcall - Dirty
  mcfCatcallDirtyButton.addEventListener("click", function(){
    addLine(mcfCatcallDirtyInput, mcfCatcallDirtyContainer)
  });

  // Generate Example - Catcall - Dirty
  exampleCatcallDirtyButton.addEventListener("click", function(){
    generateExample(exampleCatcallDirty, mcfCatcallDirtyContainer)
  });

  // Clear Catcall - Dirty Container
  clearCatcallDirty.addEventListener("click", function(){
    clearElement(mcfCatcallDirtyContainer)
  });

  // Adding Catcall - Race
  mcfCatcallRaceButton.addEventListener("click", function(){
    addLine(mcfCatcallRaceInput, mcfCatcallRaceContainer)
  });

  // Generate Example - Catcall - Race
  exampleCatcallRaceButton.addEventListener("click", function(){
    generateExample(exampleCatcallRace, mcfCatcallRaceContainer)
  });

  // Clear Catcall - Race Container
  clearCatcallRace.addEventListener("click", function(){
    clearElement(mcfCatcallRaceContainer)
  });
  
  // Add Hair Color
  mcfDescribeHairColorButton.addEventListener("click", function(){
    addLine(mcfDescribeHairColorInput, mcfDescribeHairColorContainer)
  });

  // Generate Example - Hair Color
  exampleHairColorButton.addEventListener("click", function(){
    generateExampleForHairColor(mcfCharacterHairColor.value, mcfDescribeHairColorContainer)
  });

  // Clear Hair Color
  clearDescribeHairColor.addEventListener("click", function(){
    clearElement(mcfDescribeHairColorContainer)
  });

  // Add Hair Texture
  mcfDescribeHairTextureButton.addEventListener("click", function(){
    addLine(mcfDescribeHairTextureInput, mcfDescribeHairTextureContainer)
  });

  // Generate Example - Hair Texture
  exampleHairTextureButton.addEventListener("click", function(){
    generateExampleForHairTexture(mcfCharacterHairColor.value, mcfDescribeHairTextureContainer);
  });

  // Clear Hair Texture
  clearDescribeHairTexture.addEventListener("click", function(){
    clearElement(mcfDescribeHairTextureContainer)
  });

  // Add Hairstyle to container
  mcfHairstylesButton.addEventListener("click", function(){
    addLine(mcfHairstylesInput, mcfHairstylesContainer)
  });

  // Clear Hairstyles
  clearHairstyles.addEventListener("click", function(){
    clearElement(mcfHairstylesContainer)
  });

  // Add Pregnancy Weeks
  mcfPregnancyWeeksButton.addEventListener("click", function(){
    addLine(mcfPregnancyWeeksInput, mcfPregnancyWeeksContainer)
  });

  // Clear Pregnancy Weeks
  clearPregnancyWeeks.addEventListener("click", function(){
    clearElement(mcfPregnancyWeeksContainer)
  });

  // Generate Example - Pregnancy 1st Video
  examplePregnancy1stCheckButton.addEventListener("click", function(){
    generateExample(examplePregnancy1stCheck, mcfPregnancy1stCheckContainer)
  });

  // Add Pregnancy 1st Video
  mcfPregnancy1stCheckButton.addEventListener("click", function(){
    addLine(mcfPregnancy1stCheckInput, mcfPregnancy1stCheckContainer)
  });

  // Clear Pregnancy 1st Video
  clearPregnancy1stCheck.addEventListener("click", function(){
    clearElement(mcfPregnancy1stCheckContainer)
  });

  // Generate Example - Pregnancy 2nd Video
  examplePregnancy2ndCheckButton.addEventListener("click", function(){
    generateExample(examplePregnancy2ndCheck, mcfPregnancy2ndCheckContainer)
  });

  // Add Pregnancy 2nd Video
  mcfPregnancy2ndCheckButton.addEventListener("click", function(){
    addLine(mcfPregnancy2ndCheckInput, mcfPregnancy2ndCheckContainer)
  });

  // Clear Pregnancy 2nd Video
  clearPregnancy2ndCheck.addEventListener("click", function(){
    clearElement(mcfPregnancy2ndCheckContainer)
  });

  // Generate Example - Pregnancy Prenatal
  examplePregnancyPrenatalButton.addEventListener("click", function(){
    generateExample(examplePregnancyPrenatal, mcfPregnancyPrenatalContainer)
  });

  // Add Pregnancy Prenatal Video
  mcfPregnancyPrenatalButton.addEventListener("click", function(){
    addLine(mcfPregnancyPrenatalInput, mcfPregnancyPrenatalContainer)
  });

  // Clear Pregnancy Prenatal Video
  clearPregnancyPrenatal.addEventListener("click", function(){
    clearElement(mcfPregnancyPrenatalContainer)
  });

  // Generate Example - Call Father Show
  exampleCallFatherShowButton.addEventListener("click", function(){
    generateExample(exampleCallFatherShow, mcfCallFatherShowContainer)
  });

  // Add Pregnancy Prenatal Video
  mcfCallFatherShowButton.addEventListener("click", function(){
    addLine(mcfCallFatherShowInput, mcfCallFatherShowContainer)
  });

  // Clear Pregnancy Prenatal Video
  clearCallFatherShow.addEventListener("click", function(){
    clearElement(mcfCallFatherShowContainer)
  });

  // Generate Example - Call Father BJ
  exampleCallFatherBJButton.addEventListener("click", function(){
    generateExample(exampleCallFatherBJ, mcfCallFatherBJContainer)
  });

  // Add Pregnancy Prenatal Video
  mcfCallFatherBJButton.addEventListener("click", function(){
    addLine(mcfCallFatherBJInput, mcfCallFatherBJContainer)
  });

  // Clear Pregnancy Prenatal Video
  clearCallFatherBJ.addEventListener("click", function(){
    clearElement(mcfCallFatherBJContainer)
  });

  // Generate Example - Event Shop Comment
  exampleEventShopCommentButton.addEventListener("click", function(){
    generateExample(exampleEventShopComment, mcfEventShopCommentContainer)
  });

  // Add Event Shop Comment
  mcfEventShopCommentButton.addEventListener("click", function(){
    addLine(mcfEventShopCommentInput, mcfEventShopCommentContainer)
  });

  // Clear Event Shop Comment
  clearEventShopComment.addEventListener("click", function(){
    clearElement(mcfEventShopCommentContainer)
  });

  // Generate Example - Event Shop Thought
  exampleEventShopThoughtButton.addEventListener("click", function(){
    generateExample(exampleEventShopThought, mcfEventShopThoughtContainer)
  });

  // Add Event Shop Thought
  mcfEventShopThoughtButton.addEventListener("click", function(){
    addLine(mcfEventShopThoughtInput, mcfEventShopThoughtContainer)
  });

  // Clear Event Shop Thought
  clearEventShopThought.addEventListener("click", function(){
    clearElement(mcfEventShopThoughtContainer)
  });

  // Generate Example - Tagline
  exampleTaglineButton.addEventListener("click", function(){
    const tagline = generateTagline(mcfCharacterHairColor.value,mcfCharacterBreasts.value,mcfCharacterButt.value,mcfCharacterBodyType.value,mcfCharacterRace.value)
    addLine(tagline,mcfCharacterTaglineContainer)
  }); 

  // Add Tagline to container
  mcfCharacterTaglineButton.addEventListener("click", function(){
    addLine(mcfCharacterTaglineInput, mcfCharacterTaglineContainer)
  });

  // Clear Tagline
  clearTagline.addEventListener("click", function(){
    clearElement(mcfCharacterTaglineContainer)
  });

  // Generate Example - Tag Old
  exampleTagOldButton.addEventListener("click", function(){
    const tagline = generateTagOld(mcfCharacterRace.value)
    addLine(tagline,mcfCharacterTagOldContainer)
  }); 

  // Add Tag Old to container
  mcfCharacterTagOldButton.addEventListener("click", function(){
    addLine(mcfCharacterTagOldInput, mcfCharacterTagOldContainer)
  });

  // Clear Tagline
  clearTagOld.addEventListener("click", function(){
    clearElement(mcfCharacterTagOldContainer)
  });

  // Generate Example - Tag New
  exampleTagNewButton.addEventListener("click", function(){
    const tagline = generateTagNew(mcfCharacterBodyType.value,mcfCharacterRace.value)
    addLine(tagline,mcfCharacterTagNewContainer)
  }); 

  // Add Tag New to container
  mcfCharacterTagNewButton.addEventListener("click", function(){
    addLine(mcfCharacterTagNewInput, mcfCharacterTagNewContainer)
  });

  // Clear Tagline
  clearTagNew.addEventListener("click", function(){
    clearElement(mcfCharacterTagNewContainer)
  });

  // Generate Example - Bruce Bar Bet
  exampleBruceTFButton.addEventListener("click", function(){
    clearElement(mcfBruceTFContainer)
    generateExampleParagraph(exampleBruceTF, mcfBruceTFContainer)
  }); 

  // Add Bruce Bar Bet
  mcfBruceTFButton.addEventListener("click", function(){
    clearElement(mcfBruceTFContainer)
    addParagraph(mcfBruceTFInput, mcfBruceTFContainer)
  });

  // Clear Bruce Bar Bet
  clearBruceTF.addEventListener("click", function(){
    clearElement(mcfBruceTFContainer)
  });

  // Generate MCF Meta Only
  generateMCFMetaButton.addEventListener("click", generateMCFMeta);

  // Generate MCF Directories Only
  generateMCFFoldersButton.addEventListener("click", generateMCFDirectories);

  // Generate MCF Files Only
  generateMCFFilesOnlyButton.addEventListener("click", generateMCFFiles);

  // Generate All MCF Files and Directories
  generateMCFAllFilesButton.addEventListener("click", generateMCFAll);

  // Build tag fields for MCF - Doggy
  mcfDoggyVid.addEventListener("input", generateMCFDoggyFields);

  // Build tag fields for MCF - Facefuck
  mcfFacefuckVid.addEventListener("input", generateMCFFacefuckFields);

  // Build tag fields for MCF - Oral
  mcfOralVid.addEventListener("input", generateMCFOralFields);

  // Build tag fields for MCF - Facial
  mcfFacialVid.addEventListener("input", generateMCFFacialFields);

  // Build tag fields for MCF - Mouth
  mcfMouthVid.addEventListener("input", generateMCFMouthFields);

  // Build tag fields for MCF - Pull Out Tits
  mcfPullOutTitsVid.addEventListener("input", generateMCFPullOutTitsFields);

  // Build tag fields for MCF - Pull Out Body
  mcfPullOutBodyVid.addEventListener("input", generateMCFPullOutBodyFields);

  // Build tag fields for MCF - Pull Out Butt
  mcfPullOutButtVid.addEventListener("input", generateMCFPullOutButtFields);

  // Build timing fields for MCF - Penetration
  mcfSEPenetration.addEventListener("input", function() {
    generateTimingFields(mcfSEPenetration, mcfPenetrationTimingContainer)
  });

  // #endregion --- Listeners - MCF

  // #region --- Listeners - Positions

  // Generate Positions File
  generatePositionsFileButton.addEventListener("click", generatePositionsFile);

  // Clear Position List
  clearPositionList.addEventListener("click", function(){
    clearElement(positionsList)
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
  positionDropdown.addEventListener("change", setDefaultsByPosition);

  // Adds listeners for position list handling
  document.querySelectorAll("#positionsList li").forEach((positionItem) => {
    positionItem.addEventListener("click", () => handlePositionClick(positionItem));
    positionItem.querySelector(".remove-position")?.addEventListener("click", (e) => {
        e.stopPropagation();
        handlePositionRemove(positionItem);
    });
  });

  // Import existing position file
  document.getElementById("importPositionsButton").addEventListener("click", function () {
    const fileInput = document.getElementById("importPositions");
    const file = fileInput.files[0];
    if (!file) {
        alert("No file selected.");
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

  // Clear Outfits List
  clearOutfitList.addEventListener("click", function(){
    clearElement(outfitsList)
  });

  // Adds listeners for outfit list handling
  document.querySelectorAll("#outfitsList li").forEach((outfitItem) => {
    outfitItem.addEventListener("click", () => handleOutfitClick(outfitItem));
    outfitItem.querySelector(".remove-outfit")?.addEventListener("click", (e) => {
        e.stopPropagation();
        handleOutfitRemove(outfitItem);
    });
  });

  // Import existing outfit file
  document.getElementById("importOutfitsButton").addEventListener("click", function () {
    const fileInput = document.getElementById("importOutfits");
    const file = fileInput.files[0];
    if (!file) {
        alert("No file selected.");
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

  // Generate Blacked Meta Only
  generateBlackedMetaButton.addEventListener("click", generateBlackedMeta);

  // Generate Blacked Directories Only
  generateBlackedFoldersButton.addEventListener("click", generateBlackedDirectories);

  // Generate Blacked Files Only
  generateBlackedFilesOnlyButton.addEventListener("click", generateBlackedFiles);

  // Generate All Blacked Files and Directories
  generateBlackedAllFilesButton.addEventListener("click", generateBlackedAll);

  // Build tag fields for BLACKED - Doggy
  blkDoggyVid.addEventListener("input", generateBLKDoggyFields);

  // Build tag fields for BLACKED - Facefuck
  blkFacefuckVid.addEventListener("input", generateBLKFacefuckFields);

  // Build tag fields for BLACKED - Oral
  blkOralVid.addEventListener("input", generateBLKOralFields);

  // Build tag fields for BLACKED - Facial
  blkFacialVid.addEventListener("input", generateBLKFacialFields);

  // Build tag fields for BLACKED - Mouth
  blkMouthVid.addEventListener("input", generateBLKMouthFields);

  // Build tag fields for BLACKED - Pull Out Tits
  blkPullOutTitsVid.addEventListener("input", generateBLKPullOutTitsFields);

  // Build tag fields for BLACKED - Pull Out Body
  blkPullOutBodyVid.addEventListener("input", generateBLKPullOutBodyFields);

  // Build tag fields for BLACKED - Pull Out Butt
  blkPullOutButtVid.addEventListener("input", generateBLKPullOutButtFields);

  // #endregion --- Listeners - Blacked

  // #region --- Listeners - Bar Girl
 
  // Add Dance Line - Success
  bgDanceSuccessButton.addEventListener("click", function(){
    addLine(bgDanceSuccessInput, bgDanceSuccessContainer)
  });

  // Generate Example - Dance Line - Success
  examplebgDanceSuccessButton.addEventListener("click", function(){
    generateExample(examplebgDanceSuccess, bgDanceSuccessContainer)
  }); 

  // Clear Dance Line - Success
  clearbgDanceSuccess.addEventListener("click", function(){
    clearElement(bgDanceSuccessContainer)
  });

  // Add Dance Line - Fail
  bgDanceFailButton.addEventListener("click", function(){
    addLine(bgDanceFailInput, bgDanceFailContainer)
  });

  // Generate Example - Dance Line - Fail
  examplebgDanceFailButton.addEventListener("click", function(){
    generateExample(examplebgDanceFail, bgDanceFailContainer)
  }); 

  // Clear Dance Line - Fail
  clearbgDanceFail.addEventListener("click", function(){
    clearElement(bgDanceFailContainer)
  });

  // Add Possible Name
  bgPossibleNameButton.addEventListener("click", function(){
    if (sanitizeName(bgPossibleNameInput.value)) {
        addLine(bgPossibleNameInput, bgPossibleNameContainer);
    }
  });

  // Clear Possible Name
  clearbgPossibleName.addEventListener("click", function(){
    clearElement(bgPossibleNameContainer)
  });

  // Add Unfamiliar Name
  bgUnfamiliarNameButton.addEventListener("click", function(){
    addLine(bgUnfamiliarNameInput, bgUnfamiliarNameContainer);
  });

  // Clear Unfamiliar Name
  clearbgUnfamiliarName.addEventListener("click", function(){
    clearElement(bgUnfamiliarNameContainer)
  });

  // Event listener for when bgPartnerRace changes
  bgPartnerRace.addEventListener("change", toggleBBCTag);

  // Generate BG Meta Only
  generateBGMetaButton.addEventListener("click", generateBGMeta);

  // Generate BG Directories Only
  generateBGFoldersButton.addEventListener("click", generateBGDirectories);

  // Generate BG Files Only
  generateBGFilesOnlyButton.addEventListener("click", generateBGFiles);

  // Generate All BG Files and Directories
  generateBGAllFilesButton.addEventListener("click", generateBGAll);

  // #endregion --- Listeners - Bar Girl

  // #region --- Listeners - MetaMaker

  // Generate Meta File
  generateMetaFileButton.addEventListener("click", generateMetaFile);

  // Adding Required Mods
  document.getElementById("addRequiredMod").addEventListener("click", function() {
    const modName = document.getElementById("requiredModName").value.trim();
    const modVersion = document.getElementById("requiredModVersion").value.trim();

    if (modName && modVersion) {
        const modContainer = document.getElementById("metaRequiredModsContainer");
        const modItem = document.createElement("li");
        modItem.textContent = `${modName} - v ${modVersion}`;
        modItem.dataset.mod = JSON.stringify({ name: modName, version: modVersion });

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "x";
        removeBtn.className = "remove-tag";
        modItem.appendChild(removeBtn);

        modContainer.appendChild(modItem);

        removeBtn.addEventListener("click", function() {
            modItem.remove();
        });

        // Clear input fields
        document.getElementById("requiredModName").value = '';
        document.getElementById("requiredModVersion").value = '';
      } else {
          alert("Please enter both mod name and version.");
      }
  });

  // Adding Compatible Mods
  document.getElementById("addCompatibleMod").addEventListener("click", function() {
      const modName = document.getElementById("compatibleModName").value.trim();
      const modVersion = document.getElementById("compatibleModVersion").value.trim();
      const modOrder = document.querySelector('input[name="compatibleModOrder"]:checked').value.trim();

      if (modName && modVersion && modOrder) {
          const modContainer = document.getElementById("metaCompatibleModsContainer");
          const modItem = document.createElement("li");
          modItem.textContent = `${modName} - v ${modVersion} (${modOrder})`;
          modItem.dataset.mod = JSON.stringify({ name: modName, version: modVersion, loadOrder: modOrder });

          const removeBtn = document.createElement("button");
          removeBtn.textContent = "x";
          removeBtn.className = "remove-tag";
          modItem.appendChild(removeBtn);

          modContainer.appendChild(modItem);

          removeBtn.addEventListener("click", function() {
              modItem.remove();
          });

          // Clear input fields
          document.getElementById("compatibleModName").value = '';
          document.getElementById("compatibleModVersion").value = '';
          document.getElementById("compatibleModOrder").value = '';
      } else {
          alert("Please enter mod name, version, and load order.");
      }
  });

  // Adding Incompatible Mods
  document.getElementById("addIncompatibleMod").addEventListener("click", function() {
      const modName = document.getElementById("incompatibleModName").value.trim();
      const modVersion = document.getElementById("incompatibleModVersion").value.trim();

      if (modName && modVersion) {
          const modContainer = document.getElementById("metaIncompatibleModsContainer");
          const modItem = document.createElement("li");
          modItem.textContent = `${modName} - v ${modVersion}`;
          modItem.dataset.mod = JSON.stringify({ name: modName, version: modVersion });

          const removeBtn = document.createElement("button");
          removeBtn.textContent = "x";
          removeBtn.className = "remove-tag";
          modItem.appendChild(removeBtn);

          modContainer.appendChild(modItem);

          removeBtn.addEventListener("click", function() {
              modItem.remove();
          });

          // Clear input fields
          document.getElementById("incompatibleModName").value = '';
          document.getElementById("incompatibleModVersion").value = '';
      } else {
          alert("Please enter both mod name and version.");
      }
  });
  // #endregion --- Listeners - MetaMaker
  
  // #endregion ----- Event Listeners -----


  // #region ----- Initialization -----

  // Initially hide all tab content and show the landing page
  document.querySelectorAll(".tabcontent").forEach(tab => {
    tab.style.display = "none";
  });
  document.getElementById("landingPage").style.display = "block";

  // Fetch Version numbers from Lovers Lab
  getVersionNumbers();

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

  // Dynamic Tooltips
  tippy.setDefaultProps({
    theme: "xcl",
    animation: "scale",
    arrow: false,
    placement: "right",
    allowHTML: true,
    delay: 180,
  });
  let tooltipMCFForeplay = tippy(mcfForeplayHelp, {content: "",});
  let tooltipBLKForeplay = tippy(blkForeplayHelp, {content: "",});
  let tooltipSEPre1 = tippy(mcfInsertTiming1, {content: "",});
  let tooltipSEPre2 = tippy(mcfInsertTiming2, {content: "",});
  let tooltipSEPre3 = tippy(mcfInsertTiming3, {content: "",});
  let tooltipShower = tippy(mcfShowerPrefix, {content: "",});
  let tooltipMorning = tippy(mcfMorningPrefix, {content: "",});
  let tooltipBathroom = tippy(mcfBathroomPrefix, {content: "",});
  let tooltipCleaning = tippy(mcfCleaningPrefix, {content: "",});
  let tooltipSEMasturbate = tippy(mcfSEMasturbate, {content: "",});
  let tooltipSECumMoan = tippy(mcfSECumMoan, {content: "",});
  let tooltipSEFondle = tippy(mcfSEFondle, {content: "",});
  let tooltipSEOrgasmSolo = tippy(mcfSEOrgasmSolo, {content: "",});
  let tooltipSELicking = tippy(mcfSELicking, {content: "",});
  let tooltipSEBJ = tippy(mcfSEBJ, {content: "",});
  let tooltipSEBJRough = tippy(mcfSEBJRough, {content: "",});
  let tooltipSEDoggy = tippy(mcfSEDoggy, {content: "",});
  let tooltipSERiding = tippy(mcfSERiding, {content: "",});
  let tooltipSEMissionary = tippy(mcfSEMissionary, {content: "",});
  let tooltipSEOrgasm = tippy(mcfSEOrgasm, {content: "",});
  let tooltipSEPenetration = tippy(mcfSEPenetration, {content: "",});
  let tooltipSECumDynamic = tippy(mcfSECumDynamic, {content: "",});
  let tooltipSECumPullOut = tippy(mcfSECumPullOut, {content: "",});
  let tooltipSECumCreampie = tippy(mcfSECumCreampie, {content: "",});
  let tooltipSECumTits = tippy(mcfSECumTits, {content: "",});
  let tooltipSECumMouth = tippy(mcfSECumMouth, {content: "",});
  let tooltipSECumFace = tippy(mcfSECumFace, {content: "",});



  // Set up MCF defaults
  setmcfDefaultValues();
  setmcfDefaultDirectories();

  // Set up Position Dropdown
  updatePositions();

  // Call updatePositionStats() initially to populate the stats on load
  updatePositionStats();

  // Set up conditional fields
  updateOutfitFields();
  toggleBBCTag()

  // Set up Blacked defaults
  setBlkDefaultValues();
  setBlkDefaultDirectories();

  // Sets up tagging sections
  handleTagInput(positionTagsInput, positionTagsList, addPositionTag);
  handleTagInput(outfitColorsInput, outfitColorsList, addOutfitColors);
  handleTagInput(outfitTagsInput, outfitTagsList, addOutfitTags);
  handleTagInput(outfitEmphasisInput, outfitEmphasisList, addOutfitEmphasis);
  handleTagInput(outfitRevealsInput, outfitRevealsList, addOutfitReveals);

  // Static Tooltips

  tippy([blkCharacterName, outfitCharacterName, positionCharacterName, mcfCharacterName, bgCharacterName], {
    content: "This is also the <i>id</i> for your character. It is <i>usually</i> their first name, in all lowercase. <br><br>It could be 'bonnie', for example."
  })

  tippy([metaVersion, blkYourModBLKVersion, mcfYourModVersion, bgYourModVersion],{
    content: "This is the version of your mod. You will need to increase it when you release updates. <br><br>Recommend semantic versioning (major.minor.patch).<br> Example: <i>0.2.1</i> for 0 major / 2 minor / 1 patch."
  })

  tippy([mcfModAuthor, blkModAuthor, metaAuthor, bgModAuthor],{
    content: "You! <br>You can put your @handle, your name or nickname. However you would like people to know you.<br><br> Example: 'Chloe'"
  })

  tippy([blkYourModVersion],{
    content: "This is the version of YOUR Playable Character mod, for the girl that you are making. <br><br>Example: If your Playable Character mod is for 'Bonnie', then whatever version 'Bonnie' is on, will go in this box."
  })

  tippy([blkYourModName],{
    content: "This is the name of YOUR Playable Character mod. Usually it is the girl's name. <br><i>It should match exactly what is in your mod's meta</i>. <br><br>Example: Bonnie"
  })

  tippy([positionName],{
    content: "This is the name of the position that will show up in game. It must match the file name. <br>It is not case sensitive, however formatting in the game defaults to <i>Proper Case</i> for this. <br><br> This means that: 'wHaT aRe YoU dOiNg StEpDaD' will get normalized out to 'What Are You Doing Stepdad'."
  })

  tippy([outfitName],{
    content: "This is the name of the outfit that will show up in game. It must match the file name. <br>It is not case sensitive, however formatting in the game defaults to <i>Proper Case</i> for this. <br><br> This means that: 'A fine mASSterpiece' will get normalized out to 'A fine massterpiece'."
  })

  tippy([positionFlavor],{
    content: "This is the flavor text that shows up under the position. It can be descriptive, informative, 90's song lyrics or movie quotes... whatever you want it to say."
  })

  tippy([outfitFlavor],{
    content: "This is the flavor text that shows up under the outfit. It can be descriptive, informative, 90's song lyrics or movie quotes... whatever you want it to say."
  })

  tippy([positionTypeActive],{
    triggerTarget: [positionTypeActive, document.querySelector(`label[for="${positionTypeActive.id}"]`)],
    content: "An <i>ACTIVE</i> position means that your character is the <u>active</u> participant. Meaning they are doing all or most of the work."
  })

  tippy([positionTypePassive],{
    triggerTarget: [positionTypePassive, document.querySelector(`label[for="${positionTypePassive.id}"]`)],
    content: "A <i>PASSIVE</i> position means that your character is the <u>passive</u> participant. Meaning your partner is doing all or most of the work."
  })

  tippy([positionSubTypeCowgirl],{
    triggerTarget: [positionSubTypeCowgirl, document.querySelector(`label[for="${positionSubTypeCowgirl.id}"]`)],
    content: "Where your character is on top of their partner. Can also include standing up.<br><br> It is where you are <i>riding</i> them."
  })

  tippy([positionSubTypeDoggy],{
    triggerTarget: [positionSubTypeDoggy, document.querySelector(`label[for="${positionSubTypeDoggy.id}"]`)],
    content: "Where your character is facing away from their partner. Can include standing or sideways.<br><br> Your partner is behind you."
  })

  tippy([positionSubTypeMissionary],{
    triggerTarget: [positionSubTypeMissionary, document.querySelector(`label[for="${positionSubTypeMissionary.id}"]`)],
    content: "Where your character is lying on their back, facing their partner.<br><br> Classic face-to-face position."
  })

  tippy([positionSubTypeService],{
    triggerTarget: [positionSubTypeService, document.querySelector(`label[for="${positionSubTypeService.id}"]`)],
    content: "Where your character is servicing their partner (or getting serviced by their partner), usually with their mouth or other body parts (like hand, tits, feet, etc)."
  })

  tippy([positionAthletics, positionAthletics.nextElementSibling],{
    content: "In <u>Active</u> positions, Athletics plays a role in calculating the stamina cost⚡ (along with your fitness💪)<br><br>In <u>Passive</u> positions, Athletics determines your partner's eligible positions (along with your partner's fitness)."
  })

  tippy([positionRoughness, positionRoughness.nextElementSibling],{
    content: "Roughness affects the rate at which you gain or lose control. <br><br>In <u>Passive</u> positions, Roughness determines your partner's eligible positions (along with their dominance)."
  })

  tippy([positionPleasureFactor],{
    content: "Pleasure Factor determines the method in which the rate that you gain pleasure is calculated.<br><br>- Oral is based on your partner's oral skill.<br>- Width is based on your partner's cock's girth.<br>- Length is based on your partner's cock's length.<br>- Both is based on your partner's cock's rating.<br>- None means you gain no pleasure."
  })

  tippy([positionYourPleasure, positionYourPleasure.nextElementSibling],{
    content: "Another component of how your pleasure💦 gains happen.<br><br> It is calculated as <i>this number</i> times the number returned by the pleasure factor calculation."
  })

  tippy([positionHisPleasure, positionHisPleasure.nextElementSibling],{
    content: "Affects the rate at which your partner gains pleasure🍾.<br><br> It is <i>this number</i> divided by 2.<br> Example: A position with a 6 in this field would fill up your partner's pleasure bar by 3 (bar is 0-10)."
  })

  tippy([positionHisSatisfaction, positionHisSatisfaction.nextSibling],{
    content: "Affects the rate at which your partner gains satisfaction😋.<br><br> Normal rate is <i>this number</i> divided by 2. Depending on your actions, this can be doubled or halved.<br>His satisfaction is what lets you increase their stats after bedroom sex."
  })

  tippy([positionDropdown],{
    content: "Position may sometimes match the SubType, but can differeniate certain positions within the SubType as well.<br><br>Example: The SubType may be Doggy, but if the couple is standing then the Position would be 'Standing Fuck'."
  })

  tippy([positionRhythmInput],{
    content: "This is the Beats Per Minute (BPM) of the position, measured in milliseconds. Take 60000 divided by BPM to convert.<br><br>Example: 60 BPM = 1000 rhythm, 120 BPM = 500 rhythm, etc. Generally speaking, rhythm should be between 400 and 1400 bpm.<br><br> Rhythm is used in the minigames."
  })

  tippy([positionTagsInput],{
    content: "Tags are used to drive on screen flavor text and descriptions. Some mods may also lean on tags for filtering purposes.<br><br>If you don't see a tag to fit your video, type one out yourself and add it using the 'Add Tag' button!"
  })

  tippy([positionSkillType],{
    content: "This is the type of skill that this position requires. It will also reward experience for using that skill. On skill checks, this is what determines the pass and fail values. <br><br>It is also used independently with skill levels.<br>For example, if the position's skill is 'Blowjob', and you have a skill level of 3 for the blowjob skill, you'll earn experience towards reaching level 4 in blowjob skill, but only in that skill."
  })

  tippy([positionSkillLevel, positionSkillLevel.nextElementSibling],{
    content: "This is the level of skill that this position requires.<br><br>For example, if the position's skill is 'Blowjob' and the skill level is 5, but you have a skill level of 3, you won't be able to earn this position yet. Only once you reach level 5 or higher will this be an eligible position to be learned."
  })

  tippy([positionsLocations],{
    placement: 'top',
    content: "Places where this position can happen. Most positions will have this set to 'bed', but some may include things like 'couch','floor', etc. Locations will have different furniture tagged as well."
  })

  tippy([outfitDescription],{
    content: "This is a very short description of the outfit (a few words). It doesn't show up when you look at the outfit in the store or your wardrobe, but it is used in the game when referring to the outfit.<br><br> For example, you might see this text in game: 'As you walk around the house in your ($outfit's description)'.<br>So something like 'leopard print bikini' or 'pink cutoff'."
  })

  tippy([outfitCategory],{
    content: "This correlates with the 8 locations where the outfit images are stored. It should be considered their main intented use scenario. A bikini for the Beach, for example.<br><br> If an outfit can be worn in multiple scenarios, like say some activeware you could wear at the beach or the gym, make the main category match where the file is actually located, then use the additional categories to add it to the other locations."
  })

  tippy([outfitLocationCheckboxes],{
    placement: 'top',
    content: "This would be used when selecting additional categories for the outfit. A fetish outfit that could also be used as going out (stylish)."
  })

  tippy([outfitBeach],{
    placement: 'bottom',
    triggerTarget: [outfitBeach, document.querySelector(`label[for="${outfitBeach.id}"]`)],
    content: "Outfits that should be worn to the Beach."
  })

  tippy([outfitOffice],{
    placement: 'bottom',
    triggerTarget: [outfitOffice, document.querySelector(`label[for="${outfitOffice.id}"]`)],
    content: "Outfits that should be worn to the Office."
  })

  tippy([outfitGym],{
    placement: 'bottom',
    triggerTarget: [outfitGym, document.querySelector(`label[for="${outfitGym.id}"]`)],
    content: "Outfits that should be worn to the Gym."
  })

  tippy([outfitStylin],{
    placement: 'bottom',
    triggerTarget: [outfitStylin, document.querySelector(`label[for="${outfitStylin.id}"]`)],
    content: "Outfits that should be worn when you go out at night (to the bar, to the club, etc)."
  })

  tippy([outfitLounge],{
    placement: 'bottom',
    triggerTarget: [outfitLounge, document.querySelector(`label[for="${outfitLounge.id}"]`)],
    content: "Outfits that should be worn when lounging around the house."
  })

  tippy([outfitCasual],{
    placement: 'bottom',
    triggerTarget: [outfitCasual, document.querySelector(`label[for="${outfitCasual.id}"]`)],
    content: "Outfits that should be worn during the day time when you leave the house (to the mall, or other afternoon activity)."
  })

  tippy([outfitFetish],{
    placement: 'bottom',
    triggerTarget: [outfitFetish, document.querySelector(`label[for="${outfitFetish.id}"]`)],
    content: "Outfits that should be worn in the bedroom when you invite someone over 😏."
  })

  tippy([outfitType],{
    content: "This classifies the type of outfit. It is used in game to make sure you are dressed in appropriate attire for certain events.<br><br>For example, if you show up to the club in a bikini, you'll be turned away."
  })

  tippy([outfitStyle],{
    content: "This is mostly used in conversations when people are referring to your outfit, and for matching handbag styles.<br><br>Your stepsis jokes with you about your outfit under your bathrobe when you invite someone over:<br>'Is prince charming taking you to the ball?' she jokes at your ($outfit's style) outfit."
  })

  tippy([outfitPrice],{
    content: "How much the outfit will cost when the player goes to buy it."
  })

  tippy([outfitSluttiness, outfitSluttiness.nextElementSibling],{
    content: "Sluttiness👄 affects other's reactions and mainly guides conversations. <br><br>Stat wise, it can also impact affection, sexual reputation at work, etc."
  })

  tippy([outfitComfort, outfitComfort.nextElementSibling],{
    content: "Comfort😌 affects your mood. <br>Comfortable clothes can reduce negative mood stats. <br>Uncomfortable clothes can make your mood worse."
  })

  tippy([outfitBreastSupport, outfitBreastSupport.nextElementSibling],{
    content: "Breast Support👙 affects soreness in characters with cup sizes of C or higher. Having sore breasts can lead to a negative fitness debuff."
  })

  tippy([outfitDurability, outfitDurability.nextElementSibling],{
    content: "Durability affects how easily your clothes can be ripped. Lower durability clothes are more likely to be ripped when being taken off you.<br>Certain npc personalities are more likely to try to rip your outfit on purpose.<br><br>Special note: if the outfit has the 'very fragile' tag, durability gets overwritten and becomes 2. <br>If it has the 'fragile' tag, it gets overwritten to 4."
  })

  tippy([onePieceRadio],{
    placement: 'right-end',
    triggerTarget: [onePieceRadio, document.querySelector(`label[for="${onePieceRadio.id}"]`)],
    content: "This indicates the outfit is one continuous piece, meaning it will have one description.<br><br>Like a swimsuit, a dress, bath robe, romper, etc."
  })

  tippy([twoPieceRadio],{
    placement: 'right-end',
    triggerTarget: [twoPieceRadio, document.querySelector(`label[for="${twoPieceRadio.id}"]`)],
    content: "This is for when an outfit has a top and a bottom, meaning it will have two descriptions.<br><br>A two piece swimsuit, a top with a skirt, sports bra + yoga pants, etc."
  })

  tippy([outfitOnePiece],{
    content: "This is the very short description of the outfit. <br><br>'Sundress', 'Bodysuit', 'Latex Dress', etc"
  })

  tippy([outfitTop],{
    content: "This is the very short description of the top piece of the outfit.<br><br>Example: 'Bikini Top', 'Red Jacket', etc."
  })

  tippy([outfitBottom],{
    content: "This is the very short description of the bottom piece of the outfit.<br><br>Example: 'Bikini Bottom', 'Black Skirt', etc."
  })

  tippy([outfitBraTrue],{
    placement: 'right-end',
    triggerTarget: [outfitBraTrue, document.querySelector(`label[for="${outfitBraTrue.id}"]`)],
    content: "Check this box if the character would be wearing a bra underneath of the outfit. <br><br>This determines if your character has additional layers to remove during sex scenes, as well as sets description values tied to lingerie, and also impacts breast support."
  })

  tippy([outfitPantiesTrue],{
    placement: 'right-end',
    triggerTarget: [outfitPantiesTrue, document.querySelector(`label[for="${outfitPantiesTrue.id}"]`)],
    content: "Check this box if the character would be wearing panties underneath of the outfit. <br><br>This determines if your character has additional layers to remove during sex scenes, as well as sets description values tied to lingerie."
  })

  tippy([outfitShoes],{
    content: "The type of shoes being worn with the outfit. <br><br>Mostly used for descriptive purposes, but the heeled ones can trigger a walking on heels sound effect."
  })

  tippy([outfitColorsInput],{
    content: "Optional. This drives the cum on clothes image. <br>If nothing is specified you'll get an image of cum on black fabric."
  })

  tippy([outfitEmphasisInput],{
    content: "Optional. This drives dialog triggers.<br><br> Example. For 'Asscheeks' it might trigger the thought: 'He's staring at my butt', etc."
  })

  tippy([outfitRevealsInput],{
    content: "Optional. Similar to Emphasizes, this drives dialog.<br><br>Example: If your outfit reveals 'boobs', this might cause your coworkers to say that 'your cleavage is like a sales magnet'."
  })

  tippy([outfitTagsInput],{
    content: "Optional. Tags can impact a lot of things. Stat buffs, sound effects, npc personality, descriptions, actions.<br><br>Refer to the tags in the list for more information."
  })

  tippy([blkDoggyHelp,mcfDoggyHelp],{
    content: "This section is for 'Transactional' sex (non-bedroom sexual encounters, like a bar or club hookups), which are doggystyle.<br><br> Set the path to the exact location where the images and videos are located, or move your media files into the location specified.<br><br> Set the prefixes to match exactly what the files are named.<br> Example: For 'doggy insert 1.jpg' and 'doggy insert 2.jpg', your prefix would be 'doggy insert'.<br><br>If you only have one file, it should still end with 1."
  })

  tippy([blkDoggyInsertImgPrefix,mcfDoggyInsertImgPrefix],{
    content: "Insert images are where the cock is being just inserted at the beginning of the sexual encounter."
  })

  tippy([blkDoggyMoanImgPrefix, mcfDoggyMoanImgPrefix],{
    content: "Moan images play during an orgasm."
  })

  tippy([blkBJHelp, mcfBJHelp],{
    content: "This transactional section is for Blowjobs.<br><br>Set the path to the exact location where the videos are located, or move your media files into the location specified.<br> Set the prefixes to match exactly what the files are named.<br> Example: For 'bj 1.jpg' and 'bj 2.jpg', your prefix would be 'bj'.<br><br>If you only have one file, it should still end with 1."
  })

  tippy([blkFacefuckHelp, mcfFacefuckHelp],{
    content: "Same as blowjobs, but for facefucking (or rough blowjobs). Usually in the same location with the 'rough' prefix, but this is customizable.<br><br>If you only have one file, it should still end with 1."
  })

  tippy([blkOralHelp, mcfOralHelp],{
    content: "This section is for when your partner goes down on female you. The tag is for which position you are in.<br><br>If you only have one file, it should still end with 1."
  })

  tippy([blkCumHelp, mcfCumHelp],{
    content: "This is the cum section, where there are only happy endings.<br> Facial and Mouth can by similar and ultimately your choice, just name appropiately.<br><br>As with the other prefix sections, make sure the file names line up with the prefix.<br><br>If you only have one file, it should still end with 1."
  })

  tippy([blkPullOutHelp, mcfPullOutHelp],{
    content: "For pull outs, Body is usually a missionary or riding (cowgirl) position where he just pulls out and cums on your pelvis/belly. Technically could be a backshot if it were doggy. <br>It would be tits if he gets off and aims for your tits. <br> And butt for doggy, where he just pulls out and cums.<br><br>As with the other prefix sections, make sure the file names line up with the prefix.<br><br>If you only have one file, it should still end with 1."
  })

  tippy('.suggestExample',{
    content: "Give me an example!"
  })

  tippy('.clearTags',{
    content: "Clear all entries from this section!"
  })

  tippy('.addToContainer',{
    content: "You're encouraged to add MULTIPLE entries!! It helps with variety and randomness! Text fields without an 'Add' button will only support a single entry."
  })

  tippy([mcfCharacterBreasts],{
    content: "Note: The game supports single cup sizes only. So DD would become E, etc."
  })

  tippy([mcfDescribeBoobsInput],{
    content: "This is how NPCs will reference your boobs.<br><br> tits, boobs, knockers, etc"
  })

  tippy([mcfDescribeButtInput],{
    content: "An adjective that NPCs will use to describe your butt.<br><br> juicy, round, tight, etc"
  })

  tippy([mcfDescribeBodyInput],{
    content: "An adjective that NPCs will use to describe your body.<br><br> jiggly, petite, sexy, etc"
  })

  tippy([mcfCatcallHelp],{
    content: "This section is where random NPCs will use pickup lines when approaching you. <br><br>You can use <i>$greeting</i> to insert a short introduction, which is a semi-randomized version of like: 'hey girl', 'hi beautiful', 'holy shit girl'... <br>It can vary based on the pickup line type.<br><br> Example:$greeting you're so sexy..."
  })

  tippy([mcfCatcallBodyInput],{
    content: "Enter a pickup line NPCs can use on you. It should be something about your body or tits."
  })

  tippy([mcfCatcallFaceInput],{
    content: "Enter a pickup line NPCs can use on you. It should be something about your face or how beautiful/pretty you are."
  })

  tippy([mcfCatcallDirtyInput],{
    content: "Enter a pickup line NPCs can use on you. It should be something dirty. A freaky nasty line to get into your bed."
  })

  tippy([mcfCatcallRaceInput],{
    content: "Enter a pickup line NPCs can use on you. It should be something about your race. <br><br>In addition to <i>$greeting</i>, you can also use <i>_race</i>, in this field, to insert the character's race. <br><br>Example: $greeting I've always had a thing for _race girls!<br>Which could change into something like: Dayum girl, I've always had a thing for asian girls!"
  })

  tippy([mcfThoughtClothesInput],{
    content: "This is for the first transformation, where you are still wearing your male clothes. It's your thoughts on how those clothes look on your new body. <br>It starts mid-sentence, so it would be like 'These clothes'... then whatever you type.<br><br> An example of what you type might would be: feel way too big for you. <br>So the full line in game might be 'Your guy clothes feel way too big for you.'"
  })

  tippy([mcfDescribeTransformationInput],{
    content: "This is what will show on screen during your transformation. It can be a simple statement or detailed description. <br> Whatever you want it to say about your transformation."
  })

  tippy([mcfExamineSelfReluctantInput, mcfExamineSelfConfidentInput],{
    content: "This is what shows when you examine yourself at home (at night). Generally speaking, these are things your character would think as they look at themselves in the mirror. <br><br>For Reluctant, their thoughts would probably be more reserved or bashful. <br><br>For Confident, their thoughts should reflect being more proud of your feminine body."
  })

  tippy([mcfStepSisShowerTeaseInput],{
    content: "This is for the first time Alexia walks in on you in the shower as a female. It's the line she says if you pick the 'What do you think?' option."
  })

  tippy([mcfDescribeHairColorInput],{
    content: "This is just more ways to express the hair color. <br> red -> auburn, orange, ginger<br>brown -> light brown, brunette, coffee-colored<br>black-> raven-colored, ink-colored, midnight-black"
  })

  tippy([mcfDescribeHairTextureInput],{
    content: "Describe the hair texture. This is used in place of hair color for some descriptions, so you can add color to it if you want.<br><br>naturally curly, silky blonde, shiny, wavy brown, shimmering red, flowing"
  })

  tippy([mcfCharacterTaglineInput],{
    content: "This is the 'tagline' that gets shown for your character at the New-U station. Starts with 'Would you rather become', followed by your choice. The question mark is added automatically, don't include it. <br><br>a fiery red-headed milf<br>a busty Asian goddess<br>an hourglass bimbo with dick-sucking lips"
  })

  tippy([mcfCharacterTagOldInput],{
    content: "This is for describing how one of your flings might remember your old body, after using New-U to change into somebody else. <br><br>the tiny asian chick he knew you as,<br>the tanned, buxom latina,<br>that slender latina beauty you used to be,"
  })

  tippy([mcfCharacterTagNewInput],{
    content: "Similarly to the old descriptor, this is how he would see you now.<br><br>brunette bimbo<br>blonde girl-next-door type<br>redheaded slut with curves in all the right places"
  })

  tippy([mcfEventShopCommentInput],{
    content: "If you take the pharmacist's deal, this is his reaction to your transformation, right before you have to give him a BJ."
  })

  tippy([mcfEventShopThoughtInput],{
    content: "This is your character's thoughts (reaction) to the pharmascist hitting on you.<br><br>It should be wrapped in asterisks, that's how thoughts are coded.<br>*What a jerk!*"
  })
  
  tippy([mcfPregnancyWeeksInput],{
    content: "This will be which weeks you have pregnancy videos for in img/characters/pregnancy/character_id/<br><br>If you can't <i>fake</i> these, and want to use an exiting girl, just go copy their videos into the directory for your character and put those weeks. (also rename them)"
  })

  tippy([mcfPregnancy1stCheckInput],{
    content: "This is the text that goes with the first pregnancy video. If your first video is week 6, then it'll play on the 6th week.<br><br>Example: It's your sixth week of pregnancy. Your belly is still flat... for now."
  })

  tippy([mcfPregnancy2ndCheckInput],{
    content: "This is the text that goes with the second pregnancy video.<br><br>Example: You can't deny it, you're definitely starting to show. It feels so weird... the top of your stomach is hard, and the bottom is squishy."
  })
  
  tippy([mcfPregnancyPrenatalInput],{
    content: "This is for the 12-week checkup. <br><br>Example: For only 12 weeks, your baby bump is *really* showing. You can barely imagine what your body is going to feel and look like over the coming months, if you decide to keep it."
  })

  tippy([mcfCallFatherShowInput],{
    content: "If you call your baby daddy to come pay you, and he convinces you to go put on something sexy for him, this is his reaction when he sees you. <br><br>Example: It's such a shame that my kid is gonna WRECK that body. I can already see the bump starting to show, haha. Damn."
  })

  tippy([mcfCallFatherBJInput],{
    content: "If you call your baby daddy to come pay you, and he convinces you to give him a BJ, this is his response.<br><br>Example: You've got such nice, dick-sucking lips. It would be a shame not to put them to their proper use."
  })
  
  tippy([mcfSoundHelp],{
    content: "This section builds out your track list. It should be all of the sounds in aud/se/sex.<br><br>The mp3 files go with each activity. BJ will be BJ sounds, Orgasm will be Orgasm, etc.<br><br>An easy way to get these is to just extract the sound from your video files when you are doing those."
  })

  tippy([mcfHairstylesInput],{
    content: "This lines up with which hairstyles you are adding for your character.<br><br>The files for each hairstyle will go into their own folder under img/characters/hairstyle/[hairstyle name]/[character_id].jpg<br><br>There isn't really a requirement on how many hairstyles to include, but it looks like most modders are going with about 10.<br>However many you can find or generate for your character."
  })

  tippy([mcfMakeupPath],{
    content: "Ideally this should just remain your character's id."
  })

  tippy([mcfBruceTFInput],{
    placement: "top",
    content: "This is what shows on the screen immediately after your transformation when you lose a bet with Bruce. <br> Part of it describes your transition and the other part is Bruce's reaction and comments to it.<br><br> It's more of a paragraph than just a couple lines."
  })

  tippy([bgPossibleNameInput],{
    content: "These are all the possible names for your bar girl. <br><br> ONLY ENTER ONE NAME AT A TIME. If you are entering multiples, use do them one at a time. <br><br>If you want to force her to be called one specific name, only enter one name."
  })
  
  tippy([bgUnfamiliarNameInput],{
    content: "These are all the possible names for your bar girl to be referred to before you learn her name.<br><br> ONLY ENTER ONE NAME AT A TIME. If you are entering multiples, use do them one at a time.<br><br>It's usually more descriptive, like 'Hot Blonde Girl', 'Goth Girl', etc."
  })

  tippy([bgFaveDrink],{
    content: "Her favorite drink!<br>You gain attraction for buying a girl their favorite drink. "
  })

  tippy([bgPartnerRace],{
    content: "This adds a preferred race to a girl's 'likes'. <br>It can prompt some different lines if you're the race that she likes."
  })
  
  tippy([bgSexStyle],{
    content: "This is the style of sex (rough or gentle). <br>It affects her pleasure gain during sex."
  })

  tippy([bgSexPosition],{
    content: "This is her favorite position. <br>It affects pleasure gain during sex."
  })

  tippy([bgTraitsHelp],{
    content: "Traits play into an intricate system that involves driving dialog, setting correct and incorrect responses, relationship values, and can even affect pleasure gains.<br><br>They are grouped into four sets that seem to be either exclusive or in opposition of one another, along with a separate section for optional traits."
  })
  
  tippy([bgTraits5],{
    content: "This trait specifically affects the pleasure multipier based on your cock length and girth.<br><br> Size queen is going to have a higher multiplier with a longer/thicker cock.<br><br> Tight means she is going to have a lower multipler with a longer/thicker cock."
  })

  tippy([bgTraits6],{
    content: "This trait specifically affects the girl's attraction to you, based on your race. With an 'only bbc' tag, a non-black MC will start off with a negative attraction score after you introduce yourself to her. <br><br> The inverse is true if you are black."
  })

  tippy([bgDanceSuccessInput],{
    content: "This is what shows up on the screen at the club after a successful dance skill check when dancing with this girl."
  })

  tippy([bgDanceFailInput],{
    content: "This is what shows up on the screen at the club after failing dance skill check when dancing with this girl."
  })
  
  /*
  tippy([],{
    content: ""
  })
  */

  // #endregion ----- Initialization -----
}); // DOM End Line
