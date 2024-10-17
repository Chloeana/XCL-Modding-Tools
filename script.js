document.addEventListener("DOMContentLoaded", function () {

  // #region ----- Variables -----

  // #region --- Vars - General
  const sliders = document.querySelectorAll('input[type="range"]'); // Refers to all Sliders
  const tabcontent = document.getElementsByClassName("tabcontent");
  const tablinks = document.getElementsByClassName("tablinks");

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
  const mcfCharacterTagline = document.getElementById("mcfCharacterTagline");
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
  const mcfCharacterTagOld = document.getElementById("mcfCharacterTagOld");
  const mcfCharacterTagNew = document.getElementById("mcfCharacterTagNew");
  const mcfStepSisShowerTeaseInput = document.getElementById("mcfStepSisShowerTeaseInput");
  const mcfStepSisShowerTeaseButton = document.getElementById("mcfStepSisShowerTeaseButton");
  const mcfStepSisShowerTeaseContainer = document.getElementById("mcfStepSisShowerTeaseContainer");
  const mcfMakeupPath = document.getElementById("mcfMakeupPath");
  const mcfShowerPrefix = document.getElementById("mcfShowerPrefix");
  const mcfShowerVid = document.getElementById("mcfShowerVid");
  const mcfBathroomPrefix = document.getElementById("mcfBathroomPrefix");
  const mcfBathroomVid = document.getElementById("mcfBathroomVid");
  const mcfCleaningPrefix = document.getElementById("mcfCleaningPrefix");
  const mcfCleaningVid = document.getElementById("mcfCleaningVid");
  const mcfMasturbatePath = document.getElementById("mcfMasturbatePath");
  const mcfMasturbatePrefix = document.getElementById("mcfMasturbatePrefix");
  const mcfMasturbateVid = document.getElementById("mcfMasturbateVid");
  const mcfGymOptionInput = document.getElementById("mcfGymOptionInput");
  const mcfGymOptionButton = document.getElementById("mcfGymOptionButton");
  const mcfGymOptionContainer = document.getElementById("mcfGymOptionContainer");
  const mcfGymType = document.getElementById("mcfGymType");
  const mcfCoworkerReactInput = document.getElementById("mcfCoworkerReactInput");
  const mcfCoworkerReactButton = document.getElementById("mcfCoworkerReactButton");
  const mcfCoworkerReactContainer = document.getElementById("mcfCoworkerReactContainer");
  const mcfEventShopComment = document.getElementById("mcfEventShopComment");
  const mcfEventShopThought = document.getElementById("mcfEventShopThought");
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
  const mcfPregnancy2ndCheckInput = document.getElementById("mcfPregnancy2ndCheckInput");
  const mcfPregnancyPrenatalInput = document.getElementById("mcfGymcfPregnancyPrenatalInputmType");
  const mcfCallFatherShowInput = document.getElementById("mcfCallFatherShowInput");
  const mcfCallFatherBJInput = document.getElementById("mcfCallFatherBJInput");
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
  const mcfGropeRadio = document.getElementById("mcfGropeRadio");
  const mcfGropeDiv = document.getElementById("mcfGropeDiv");
  const mcfGropeTits = document.getElementById("mcfGropeTits");
  const mcfGropeAss = document.getElementById("mcfGropeAss");
  const mcfGropeBoth = document.getElementById("mcfGropeBoth");
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
  const mcfSECumMoan = document.getElementById("mcfSECumMoan");
  const mcfSEMasturbate = document.getElementById("mcfSEMasturbate");
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
  const mcfInsertTiming1 = document.getElementById("mcfInsertTiming1");
  const mcfInsertTiming2 = document.getElementById("mcfInsertTiming2");
  const mcfInsertTiming3 = document.getElementById("mcfInsertTiming3");
  const mcfPenetrationTiming = document.getElementById("mcfPenetrationTiming");

  const mcfDoggyHelp = document.getElementById("mcfDoggyHelp");
  const mcfBJHelp = document.getElementById("mcfBJHelp");
  const mcfFacefuckHelp = document.getElementById("mcfFacefuckHelp");
  const mcfOralHelp = document.getElementById("mcfOralHelp");
  const mcfCumHelp = document.getElementById("mcfCumHelp");
  const mcfPullOutHelp = document.getElementById("mcfPullOutHelp");
  const mcfSoundHelp = document.getElementById("mcfSoundHelp");

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

  // Example suggestions
  const exampleDescribeButt = ["big", "round", "peachy", "thick", "fat", "jiggling", "dump-truck", "juicy", "pale", "bimbo-sized", "mega-size", "cute", "tight", "perky", "premi-*yum*", "fantASStic", "nice", "humongous", "beautiful"]
  const exampleDescribeBody = ["sensual", "slender", "womanly", "feminine", "breedable", "fully-stacked", "bouncy", "jiggly", "curvy", "voluptuous", "fertile", "curvaceous", "juicy", "petite", "sexy", "exotic", "pleasing", "bottom-heavy", "elegant", "picture-perfect", "tight", "hourglass-shaped", "oversexed", "hypersexual", "hyper-feminine", "all-natural", "busty", "perky"]
  const exampleDescribeBoobs = ["tits", "boobs", "milkers", "udders", "bazongas", "cow-tits", "bee stings", "massive milkers", "itty-bitties", "pancakes", "mosquito bites"]
  const exampleDescribeTransformation = ["You feel a LOT lighter.","Wow, you're a stunner now...","Fuck... you look like such a horny, depraved slut.","You run your hands over your breedable body.","Is it over?","Your body feels so different - you can feel a huge amount of weight and fat redistributed your breasts and ass.","You look like some kind of perfect bimbo - a girl who every guy would fall for.","A perfect hourglass figure, this might get you into some trouble..."]
  const exampleExamineSelfReluctant = ["You press your thighs together, feeling the slick emptiness, and the distinct absence of something that once hung between them.","Running your fingers along the curve of your waist, you can't deny the sensuality of your new hourglass figure, but the sensation makes you blush.","Your once broad and barrel-shaped ribcage has become narrower and more delicate, making you feel a bit more fragile than before.","Your nipples are so sensitive, brushing against your arms makes you shudder.","Once full of definition, your arms now look beautifully toned in a feminine way, match up with your hourglass body.","You look down at your pussy, your cheeks burning. It still feels weird to see it, to know it's yours.","Every time you see your reflection, your sexy face surprises you."]
  const exampleExamineSelfConfident = ["You pucker and pout in the mirror, feeling playful and flirty — you're gorgeous, and you know it.", "Feeling your pussy between your legs is no longer a shock, but something comforting, a constant reminder of your femininity.", "Admiring your sensual curves and captivating eyes in the mirror, you enjoy the newfound confidence that comes from embracing your body.", "Glancing at your reflection, you strike a pose and wink at your gorgeous female form, finding excitement and happiness in embracing your new body.", "Running delicate finger over the smooth expanse of bare skin under the hem of skirt reminds you how much you love being a woman.", "You feel a sense of pride as you catch a glimpse of your shapely, rounded ass in the mirror, knowing that your stepdad, stepsister, and your male friend Hollis see you as the confident woman you've become."]
  const exampleThoughtClothes = ["are not made to flatter your female body shape.", "are pretty tight around your $butt.", "don't exactly compliment your frame.", "fit you a bit awkwardly.", "look a bit comical on your female body.", "feel way too big for you."]
  const exampleStepSisShowerTease = ["That girl-next-door body could make a lotta guys happy, just sayin'...", "We totally look like sisters now, haha.", "Them's some dick-suckin lips, haha.", "You're making me jealous...", "All the guys are gonna wanna bang you, lol.", "You look like a slut! Hahaha."]
  const exampleCatcallBody = []
  const exampleCatcallFace = []
  const exampleCatcallDirty = []
  const exampleCatcallRace = []

  // #endregion --- MCF ---
  
  // #region --- Vars - Positions ---
  const positionCharacterName = document.getElementById("positionCharacterName");
  const positionName = document.getElementById("positionName");
  const positionFlavor = document.getElementById("positionFlavor");
  const positionTypeRadios = document.querySelectorAll('input[name="positionType"]');
  const positionSubtypeRadios = document.querySelectorAll('input[name="subtype"]');
  const positionType = document.querySelector('input[name="positionType"]:checked');
  const positionTypeActive = document.getElementById('active');
  const positionTypePassive = document.getElementById('passive');
  const positionSubType = document.querySelector('input[name="subtype"]:checked');
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
        const versionBLK = data['BLK'];
      
      // Update fields with looked up mod versions
      if (versionXCL) {
        metaGameVersion.value = versionXCL;
        mcfBaseGameVersion.value = versionXCL;
        blkBaseGameVersion.value = versionXCL;
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

  // #endregion --- Functions - General

  // #region --- Functions - MCF

   // Build video tagging fields dynamically
   function generateTagFields(vidCountField, vidPrefixField, tagContainer, tagOptions = [], tagFieldCount = 1, hasRhythmField = false) {
    const container = tagContainer;
    const videoCount = parseInt(vidCountField.value) || 0;
    const vidPrefix = vidPrefixField.value || "Video";
    container.innerHTML = ''; // Clear any existing fields

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
        }

        container.appendChild(tagField);
    }
  };

  // Build video tagging fields for Doggy Transactional (different because one tag is location)
  function generateDoggyTagFields(vidCountField, vidPrefixField, tagContainer) {
    const container = tagContainer;
    const videoCount = parseInt(vidCountField.value) || 0;
    const vidPrefix = vidPrefixField.value || "Video";
    container.innerHTML = ''; // Clear any existing fields

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
      }

      const rhythmInput = document.createElement("input");
      rhythmInput.type = "number";
      rhythmInput.id = `${vidPrefix}_rhythm_${i}`;
      rhythmInput.placeholder = "Rhythm";
      rhythmInput.min = 400;
      rhythmInput.max = 1400;

      tagField.appendChild(rhythmInput);

      container.appendChild(tagField);
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
    const name = mcfCharacterName.value.trim() || "character_id";

    mcfShowerPrefix.value = "shower"
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
  };

  // Add Character name into directories
  function setmcfDefaultDirectories() {
    const name = mcfCharacterName.value.trim() || "character_id";

    mcfDoggyPath.value = `${name}/sex/doggy/`
    mcfBJPath.value = `${name}/bj/`
    mcfFacefuckPath.value = `${name}/bj/`
    mcfOralPath.value = `${name}/oral/`
    mcfCumPath.value = `${name}/cum/`
    mcfMasturbatePath.value = `${name}/solo/`
  };

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

  // Generate MCF Meta
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
    const characterName = mcfCharacterName.value;

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
    mcfzip.folder(`img/scenes/characters/${mcfBJPath}`)
    mcfzip.folder(`img/scenes/characters/${characterName}/chores`)
    mcfzip.folder(`img/scenes/characters/${mcfCumPath}`)
    mcfzip.folder(`img/scenes/characters/${characterName}/foreplay`)
    mcfzip.folder(`img/scenes/characters/${mcfOralPath}`)
    mcfzip.folder(`img/scenes/characters/${mcfDoggyPath}`)
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
    const characterName = mcfCharacterName.value;

    // Paths
    const doggyPath = mcfDoggyPath.value;
    const bjPath = mcfBJPath.value;
    const facefuckPath = mcfFacefuckPath.value;
    const oralPath = mcfOralPath.value;
    const cumPath = mcfCumPath.value;

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
    const bigLoadInts = [];
    const unwillingLoadInts = [];

    console.log({
      doggyVidInt,
      doggyInsertImgInt,
      doggyMoanImgInt,
      bjVidInt,
      facefuckVidInt,
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
    blkzip.folder(`img/scenes/characters/${blkBJPath}`)
    blkzip.folder(`img/scenes/characters/${blkCumPath}`)
    blkzip.folder(`img/scenes/characters/${blkForeplayPath}`)
    blkzip.folder(`img/scenes/characters/${blkOralPath}`)
    blkzip.folder(`img/scenes/characters/${blkDoggyPath}`)
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
    const characterName = blkCharacterName.value;

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
      doggyLines.push(`\n            "${doggyPath}${doggyVidPrefix} ${videoIndex}", (a:"${tagsString}")`);
      doggyRhythmLines.push(`\n            "${doggyPath}${doggyVidPrefix} ${videoIndex}", ${rhythm}`);
      })
    tagArrayDoggy.push(doggyLines.join(', '));
    rhythmArrayDoggy.push(doggyRhythmLines.join(', '));    


    // Collect tag data from Facefuck
    const facefuckTags  = collectTags(blkFacefuckContainer, blkFacefuckVidPrefix);

    facefuckTags.forEach(({ videoIndex, tags }) => {
        const tagsString = tags.join('","'); 
        facefuckLines.push(`\n            "${facefuckPath}${facefuckPrefix} ${videoIndex}", "${tagsString}"`);
    });
    tagArrayFacefuck.push(facefuckLines.join(', '));
    
    // Collect tag data from Oral
    const oralTags = collectTags(blkOralContainer, blkOralVidPrefix);
    
    oralTags.forEach(({ videoIndex, tags, rhythm }) => {
      const tagsString = tags.join('","'); 
      oralLines.push(`\n            "scenes/characters/${oralPath}${oralPrefix} ${videoIndex}.mp4", "${tagsString}"`);
      oralRhythmLines.push(`\n            "scenes/characters/${oralPath}${oralPrefix} ${videoIndex}.mp4", ${rhythm}`)
    });
    tagArrayOral.push(oralLines.join(', '));
    rhythmArrayOral.push(oralRhythmLines.join(', '));

    // Collect tag data from Mouth
    if (mouthVidInt > 0) {
      const mouthTags = collectTags(blkMouthContainer, blkMouthVidPrefix);

      mouthTags.forEach(({ videoIndex, tags }) => {
          const tagsString = tags.join('","'); 
          mouthLines.push(`\n                "/characters/${cumPath}${mouthPrefix} ${videoIndex}", (a:"${tagsString}")`);
      });
      tagArrayMouth.push(mouthLines.join(', '));
    }
    
    // Collect tag data from Facials
    if (facialVidInt > 0) {
      const facialTags = collectTags(blkFacialContainer, blkFacialVidPrefix);

      facialTags.forEach(({ videoIndex, tags }) => {
        const tagsString = tags.join('","'); 
        facialLines.push(`\n            "/characters/${cumPath}${facialPrefix} ${videoIndex}", (a:"${tagsString}")`);
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
        
        pulloutBodyLines.push(`\n            "/characters/${cumPath}${pulloutBodyPrefix} ${videoIndex}", (a:"body","${tagsString}")`);
      });
      tagArrayPullout.push(pulloutBodyLines.join(', '));
    }
    
    if (pulloutButtVidInt > 0) {
      const pulloutButtTags  = collectTags(blkPullOutButtContainer, blkPullOutButtVidPrefix);
      
      pulloutButtTags.forEach(({ videoIndex, tags }) => {
        const tagsString = tags.join('","'); 
        pulloutButtLines.push(`\n            "/characters/${cumPath}${pulloutButtPrefix} ${videoIndex}", (a:"butt","${tagsString}")`);
      });
      tagArrayPullout.push(pulloutButtLines.join(', '));
    }

    if (pulloutTitsVidInt > 0) {
      const pulloutTitsTags  = collectTags(blkPullOutTitsContainer, blkPullOutTitsVidPrefix);

      pulloutTitsTags.forEach(({ videoIndex, tags }) => {
        const tagsString = tags.join('","'); 
        pulloutTitsLines.push(`\n            "/characters/${cumPath}${pulloutTitsPrefix} ${videoIndex}", (a:"tits","${tagsString}")`);
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
        tweeContent += `    (if:$load is "big")[(set:$img to "/characters/${cumPath}${facialPrefix} " + (twirl:${tagArrayBigLoad}))]\n`
      }
      if (tagArrayUnwilling.length > 0 && tagArrayUnwilling[0] !== "") {
          tweeContent += `    (if:$load is "unwilling")[(set:$img to "/characters/${cumPath}${facialPrefix} " + (twirl:${tagArrayUnwilling}))]\n`
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

  // Height/Weight Conversions
  mcfCharacterWeightLB.addEventListener("input", () => convertWeight('lbs'));
  mcfCharacterWeightKG.addEventListener("input", () => convertWeight('kg'));
  mcfCharacterHeightIN.addEventListener("input", () => convertHeight('inches'));
  mcfCharacterHeightCM.addEventListener("input", () => convertHeight('cm'));

  // Set up MCF Defaults after Character Input
  mcfCharacterName.addEventListener("input", setmcfDefaultDirectories);

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


  // #endregion --- Listeners - MCF

  // #region --- Listeners - Positions

  // Generate Positions File
  generatePositionsFileButton.addEventListener("click", generatePositionsFile);

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
      const modOrder = document.getElementById("compatibleModOrder").value.trim();

      if (modName && modVersion && modOrder) {
          const modContainer = document.getElementById("compatibleModsContainer");
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
          const modContainer = document.getElementById("incompatibleModsContainer");
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

  // Set Default Tab to MCF
  document.getElementById("MCF-Tab").style.display = "block";
  document.querySelector(".tablinks").classList.add("active");

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

  // Set up MCF defaults
  setmcfDefaultValues();
  setmcfDefaultDirectories();

  // Set up Position Dropdown
  updatePositions();

  // Call updatePositionStats() initially to populate the stats on load
  updatePositionStats();

  // Set up outfit fields
  updateOutfitFields();

  // Set up Blacked defaults
  setBlkDefaultValues();
  setBlkDefaultDirectories();

  // Sets up tagging sections
  handleTagInput(positionTagsInput, positionTagsList, addPositionTag);
  handleTagInput(outfitColorsInput, outfitColorsList, addOutfitColors);
  handleTagInput(outfitTagsInput, outfitTagsList, addOutfitTags);
  handleTagInput(outfitEmphasisInput, outfitEmphasisList, addOutfitEmphasis);
  handleTagInput(outfitRevealsInput, outfitRevealsList, addOutfitReveals);

  // Tooltips
  tippy.setDefaultProps({
    theme: "xcl",
    animation: "scale",
    arrow: false,
    placement: "right",
    allowHTML: true,
  });

  tippy([blkCharacterName, outfitCharacterName, positionCharacterName, mcfCharacterName], {
    content: "This is also the <i>id</i> for your character. It is <i>usually</i> their first name, in all lowercase. <br><br>It could be 'bonnie', for example."
  })

  tippy([metaVersion, blkYourModBLKVersion, mcfYourModVersion],{
    content: "This is the version of your mod. You will need to increase it when you release updates. <br><br>Recommend semantic versioning (major.minor.patch).<br> Example: <i>0.2.1</i> for 0 major / 2 minor / 1 patch."
  })

  tippy([mcfModAuthor, blkModAuthor, metaAuthor],{
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
    content: "This section is for 'Transactional' sex (non-bedroom sexual encounters, like a bar or club hookups), which are doggystyle.<br><br> Set the path to the exact location where the images and videos are located, or move your media files into the location specified.<br><br> Set the prefixes to match exactly what the files are named.<br> Example: For 'doggy insert 1.jpg' and 'doggy insert 2.jpg', your prefix would be 'doggy insert'."
  })

  tippy([blkDoggyInsertImgPrefix,mcfDoggyInsertImgPrefix],{
    content: "Insert images are where the cock is being just inserted at the beginning of the sexual encounter."
  })

  tippy([blkDoggyMoanImgPrefix, mcfDoggyMoanImgPrefix],{
    content: "Moan images play during an orgasm."
  })

  tippy([blkBJHelp, mcfBJHelp],{
    content: "This transactional section is for Blowjobs.<br><br>Set the path to the exact location where the videos are located, or move your media files into the location specified.<br> Set the prefixes to match exactly what the files are named.<br> Example: For 'bj 1.jpg' and 'bj 2.jpg', your prefix would be 'bj'."
  })

  tippy([blkFacefuckHelp, mcfFacefuckHelp],{
    content: "Same as blowjobs, but for facefucking (or rough blowjobs). Usually in the same location with the 'rough' prefix, but this is customizable."
  })

  tippy([blkOralHelp, mcfOralHelp],{
    content: "This section is for when your partner goes down on female you. The tag is for which position you are in."
  })

  tippy([blkForeplayHelp],{
    content: "This section is for groping and kissing. You need to have at least 1 kiss video and either an ass or tits grope.<br> You can have multiples of each.<br><br>This path is hardcoded for character_id/foreplay/bbc. Please ensure your media files are in this location."
  })

  tippy([blkCumHelp, mcfCumHelp],{
    content: "This is the cum section, where there are only happy endings.<br> Facial and Mouth can by similar and ultimately your choice, just name appropiately."
  })

  tippy([blkPullOutHelp, mcfPullOutHelp],{
    content: "For pull outs, Body is usually a missionary or riding (cowgirl) position where he just pulls out and cums on your pelvis/belly. Technically could be a backshot if it were doggy. <br>It would be tits if he gets off and aims for your tits. <br> And butt for doggy, where he just pulls out and cums."
  })

  tippy('.suggestExample',{
    content: "Give me an example!"
  })

  tippy([],{
    content: ""
  })

  tippy([],{
    content: ""
  })

  tippy([],{
    content: ""
  })

  tippy([],{
    content: ""
  })

  tippy([],{
    content: ""
  })
  

  /*
  tippy([],{
    content: ""
  })
  */

  // #endregion ----- Initialization -----
}); // DOM End Line
