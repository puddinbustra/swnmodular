import {ClassFeatures} from "./classFeatures.js"

// Namespace Configuration Values
export const SWNMODULAR = {};

// ASCII Artwork
SWNMODULAR.ASCII = `_______________________________
______      ______ _____ _____
|  _  \\___  |  _  \\  ___|  ___|
| | | ( _ ) | | | |___ \\| |__
| | | / _ \\/\\ | | |   \\ \\  __|
| |/ / (_>  < |/ //\\__/ / |___
|___/ \\___/\\/___/ \\____/\\____/
_______________________________`;


/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
SWNMODULAR.abilities = {
  "str": "SWNMODULAR.AbilityStr",
  "dex": "SWNMODULAR.AbilityDex",
  "con": "SWNMODULAR.AbilityCon",
  "int": "SWNMODULAR.AbilityInt",
  "wis": "SWNMODULAR.AbilityWis",
  "cha": "SWNMODULAR.AbilityCha"
};

SWNMODULAR.abilityAbbreviations = {
  "str": "SWNMODULAR.AbilityStrAbbr",
  "dex": "SWNMODULAR.AbilityDexAbbr",
  "con": "SWNMODULAR.AbilityConAbbr",
  "int": "SWNMODULAR.AbilityIntAbbr",
  "wis": "SWNMODULAR.AbilityWisAbbr",
  "cha": "SWNMODULAR.AbilityChaAbbr"
};

/* -------------------------------------------- */
/**
 * The set of saves used within the system, added by Lofty
 * @type {Object}
 */
  SWNMODULAR.saves = {
    "psave": "SWNMODULAR.pSave",
    "esave": "SWNMODULAR.eSave",
    "msave": "SWNMODULAR.mSave"
  }


/* -------------------------------------------- */
/**
 * Character alignment options
 * @type {Object}
 */
SWNMODULAR.alignments = {
  'lg': "SWNMODULAR.AlignmentLG",
  'ng': "SWNMODULAR.AlignmentNG",
  'cg': "SWNMODULAR.AlignmentCG",
  'ln': "SWNMODULAR.AlignmentLN",
  'tn': "SWNMODULAR.AlignmentTN",
  'cn': "SWNMODULAR.AlignmentCN",
  'le': "SWNMODULAR.AlignmentLE",
  'ne': "SWNMODULAR.AlignmentNE",
  'ce': "SWNMODULAR.AlignmentCE"
};

/* -------------------------------------------- */

/**
 * An enumeration of item attunement types
 * @enum {number}
 */
SWNMODULAR.attunementTypes = {
  NONE: 0,
  REQUIRED: 1,
  ATTUNED: 2,
}

/**
 * An enumeration of item attunement states
 * @type {{"0": string, "1": string, "2": string}}
 */
SWNMODULAR.attunements = {
  0: "SWNMODULAR.AttunementNone",
  1: "SWNMODULAR.AttunementRequired",
  2: "SWNMODULAR.AttunementAttuned"
};

/* -------------------------------------------- */


SWNMODULAR.weaponProficiencies = {

};

SWNMODULAR.toolProficiencies = {

  "vehicle": "SWNMODULAR.ToolVehicle"
};


/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur
 * @type {Object}
 */
SWNMODULAR.timePeriods = {
  "inst": "SWNMODULAR.TimeInst",
  "turn": "SWNMODULAR.TimeTurn",
  "round": "SWNMODULAR.TimeRound",
  "minute": "SWNMODULAR.TimeMinute",
  "hour": "SWNMODULAR.TimeHour",
  "day": "SWNMODULAR.TimeDay",
  "month": "SWNMODULAR.TimeMonth",
  "year": "SWNMODULAR.TimeYear",
  "perm": "SWNMODULAR.TimePerm",
  "spec": "SWNMODULAR.Special"
};


/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
SWNMODULAR.abilityActivationTypes = {
  "none": "SWNMODULAR.None",
  "action": "SWNMODULAR.Action",
  "bonus": "SWNMODULAR.BonusAction",
  "reaction": "SWNMODULAR.Reaction",
  "minute": SWNMODULAR.timePeriods.minute,
  "hour": SWNMODULAR.timePeriods.hour,
  "day": SWNMODULAR.timePeriods.day,
  "special": SWNMODULAR.timePeriods.spec,
  "legendary": "SWNMODULAR.LegAct",
  "lair": "SWNMODULAR.LairAct",
  "crew": "SWNMODULAR.VehicleCrewAction"
};

/* -------------------------------------------- */


SWNMODULAR.abilityConsumptionTypes = {
  "ammo": "SWNMODULAR.ConsumeAmmunition",
  "attribute": "SWNMODULAR.ConsumeAttribute",
  "material": "SWNMODULAR.ConsumeMaterial",
  "charges": "SWNMODULAR.ConsumeCharges"
};


/* -------------------------------------------- */

// Creature Sizes
SWNMODULAR.actorSizes = {
  "tiny": "SWNMODULAR.SizeTiny",
  "sm": "SWNMODULAR.SizeSmall",
  "med": "SWNMODULAR.SizeMedium",
  "lg": "SWNMODULAR.SizeLarge",
  "huge": "SWNMODULAR.SizeHuge",
  "grg": "SWNMODULAR.SizeGargantuan"
};

SWNMODULAR.tokenSizes = {
  "tiny": 1,
  "sm": 1,
  "med": 1,
  "lg": 2,
  "huge": 3,
  "grg": 4
};

/* -------------------------------------------- */

/**
 * Classification types for item action types
 * @type {Object}
 */
SWNMODULAR.itemActionTypes = {
  "mwak": "SWNMODULAR.ActionMWAK",
  "rwak": "SWNMODULAR.ActionRWAK",
  "msak": "SWNMODULAR.ActionMSAK",
  "rsak": "SWNMODULAR.ActionRSAK",
  "save": "SWNMODULAR.ActionSave",
  "heal": "SWNMODULAR.ActionHeal",
  "abil": "SWNMODULAR.ActionAbil",
  "util": "SWNMODULAR.ActionUtil",
  "other": "SWNMODULAR.ActionOther"
};

/* -------------------------------------------- */

SWNMODULAR.itemCapacityTypes = {
  "items": "SWNMODULAR.ItemContainerCapacityItems",
  "weight": "SWNMODULAR.ItemContainerCapacityWeight"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
SWNMODULAR.limitedUsePeriods = {
  "sr": "SWNMODULAR.ShortRest",
  "lr": "SWNMODULAR.LongRest",
  "day": "SWNMODULAR.Day",
  "charges": "SWNMODULAR.Charges"
};


/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can ber worn by the character
 * @type {Object}
 */
SWNMODULAR.equipmentTypes = {
  // "light": "SWNMODULAR.EquipmentLight",
  // "medium": "SWNMODULAR.EquipmentMedium",
  // "heavy": "SWNMODULAR.EquipmentHeavy",
  "bonus": "SWNMODULAR.EquipmentBonus",
  "natural": "SWNMODULAR.EquipmentNatural",
  "shield": "SWNMODULAR.EquipmentShield",
  "clothing": "SWNMODULAR.EquipmentClothing",
  "trinket": "SWNMODULAR.EquipmentTrinket",
  "vehicle": "SWNMODULAR.EquipmentVehicle"
};


/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
SWNMODULAR.armorProficiencies = {

};


/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
SWNMODULAR.consumableTypes = {
  "ammo": "SWNMODULAR.ConsumableAmmunition",
  "potion": "SWNMODULAR.ConsumablePotion",
  "poison": "SWNMODULAR.ConsumablePoison",
  "food": "SWNMODULAR.ConsumableFood",
  "scroll": "SWNMODULAR.ConsumableScroll",
  "wand": "SWNMODULAR.ConsumableWand",
  "rod": "SWNMODULAR.ConsumableRod",
  "trinket": "SWNMODULAR.ConsumableTrinket"
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the 5e system
 * @type {Object}
 */
SWNMODULAR.currencies = {
  "credits": "SWNMODULAR.CurrencyCredits",
};


/**
 * Define the upwards-conversion rules for registered currency types
 * @type {{string, object}}
 */
SWNMODULAR.currencyConversion = {
  credits: {into: "credits", each: 1},
};

/* -------------------------------------------- */


// Damage Types
SWNMODULAR.damageTypes = {
  "acid": "SWNMODULAR.DamageAcid",
  "electrical": "SWNMODULAR.DamageElectrical",
  "cold": "SWNMODULAR.DamageCold",
  "heat": "SWNMODULAR.DamageHeat",
  "physical": "SWNMODULAR.DamagePhysical",
  "psychic": "SWNMODULAR.DamagePsychic",
};

// Damage Resistance Types
SWNMODULAR.damageResistanceTypes = mergeObject(duplicate(SWNMODULAR.damageTypes), {
  "physical": "SWNMODULAR.DamagePhysical"
});


/* -------------------------------------------- */

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
SWNMODULAR.movementTypes = {
  "burrow": "SWNMODULAR.MovementBurrow",
  "climb": "SWNMODULAR.MovementClimb",
  "fly": "SWNMODULAR.MovementFly",
  "swim": "SWNMODULAR.MovementSwim",
  "walk": "SWNMODULAR.MovementWalk",
}

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
SWNMODULAR.movementUnits = {
  "ft": "SWNMODULAR.DistFt",
  "mi": "SWNMODULAR.DistMi"
}

/**
 * The valid units of measure for the range of an action or effect.
 * This object automatically includes the movement units from SWNMODULAR.movementUnits
 * @type {Object<string,string>}
 */
SWNMODULAR.distanceUnits = {
  "none": "SWNMODULAR.None",
  "self": "SWNMODULAR.DistSelf",
  "touch": "SWNMODULAR.DistTouch",
  "spec": "SWNMODULAR.Special",
  "any": "SWNMODULAR.DistAny"
};
for ( let [k, v] of Object.entries(SWNMODULAR.movementUnits) ) {
  SWNMODULAR.distanceUnits[k] = v;
}

/* -------------------------------------------- */


/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules
 * @type {Object}
 */
SWNMODULAR.encumbrance = {
  currencyPerWeight: 0,
  // strMultiplier: 15,
  // vehicleWeightMultiplier: 2000 // 2000 lbs in a ton
  strMultiplier: 1,
  vehicleWeightMultiplier: 1
};

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied
 * @type {Object}
 */
SWNMODULAR.targetTypes = {
  "none": "SWNMODULAR.None",
  "self": "SWNMODULAR.TargetSelf",
  "creature": "SWNMODULAR.TargetCreature",
  "ally": "SWNMODULAR.TargetAlly",
  "enemy": "SWNMODULAR.TargetEnemy",
  "object": "SWNMODULAR.TargetObject",
  "space": "SWNMODULAR.TargetSpace",
  "radius": "SWNMODULAR.TargetRadius",
  "sphere": "SWNMODULAR.TargetSphere",
  "cylinder": "SWNMODULAR.TargetCylinder",
  "cone": "SWNMODULAR.TargetCone",
  "square": "SWNMODULAR.TargetSquare",
  "cube": "SWNMODULAR.TargetCube",
  "line": "SWNMODULAR.TargetLine",
  "wall": "SWNMODULAR.TargetWall"
};


/* -------------------------------------------- */


/**
 * Map the subset of target types which produce a template area of effect
 * The keys are SWNMODULAR target types and the values are MeasuredTemplate shape types
 * @type {Object}
 */
SWNMODULAR.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  line: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray"
};


/* -------------------------------------------- */

// Healing Types
SWNMODULAR.healingTypes = {
  "healing": "SWNMODULAR.Healing",
  "temphp": "SWNMODULAR.HealingTemp"
};


/* -------------------------------------------- */


/**
 * Enumerate the denominations of hit dice which can apply to classes
 * @type {Array.<string>}
 */
SWNMODULAR.hitDieTypes = ["d6", "d8", "d10", "d12"];


/* -------------------------------------------- */

/**
 * The set of possible sensory perception types which an Actor may have
 * @type {object}
 */
SWNMODULAR.senses = {
  "heatvision": "SWNMODULAR.SenseHeatvision",
  "darkvision": "SWNMODULAR.SenseDarkvision",
  "tremorsense": "SWNMODULAR.SenseTremorsense",
  "truesight": "SWNMODULAR.SenseTruesight"
};

/* -------------------------------------------- */

/**
 * The set of skill which can be trained
 * @type {Object}
 */
SWNMODULAR.skills = {
  "acr": "SWNMODULAR.SkillAcr",
  "ani": "SWNMODULAR.SkillAni",
  "arc": "SWNMODULAR.SkillArc",
  "ath": "SWNMODULAR.SkillAth",
  "dec": "SWNMODULAR.SkillDec",
  "his": "SWNMODULAR.SkillHis",
  "ins": "SWNMODULAR.SkillIns",
  "itm": "SWNMODULAR.SkillItm",
  "inv": "SWNMODULAR.SkillInv",
  "med": "SWNMODULAR.SkillMed",
  "nat": "SWNMODULAR.SkillNat",
  "prc": "SWNMODULAR.SkillPrc",
  "prf": "SWNMODULAR.SkillPrf",
  "per": "SWNMODULAR.SkillPer",
  "rel": "SWNMODULAR.SkillRel",
  "slt": "SWNMODULAR.SkillSlt",
  "ste": "SWNMODULAR.SkillSte",
  "sur": "SWNMODULAR.SkillSur",
  "wor": "SWNMODULAR.SkillWor"
};


/* -------------------------------------------- */

SWNMODULAR.spellPreparationModes = {
  "prepared": "SWNMODULAR.SpellPrepPrepared",
  "pact": "SWNMODULAR.PactMagic",
  "always": "SWNMODULAR.SpellPrepAlways",
  "atwill": "SWNMODULAR.SpellPrepAtWill",
  "innate": "SWNMODULAR.SpellPrepInnate"
};

SWNMODULAR.spellUpcastModes = ["always", "pact", "prepared"];

SWNMODULAR.spellProgression = {
  "none": "SWNMODULAR.SpellNone",
  "full": "SWNMODULAR.SpellProgFull",
  "half": "SWNMODULAR.SpellProgHalf",
  "third": "SWNMODULAR.SpellProgThird",
  "pact": "SWNMODULAR.SpellProgPact",
  "artificer": "SWNMODULAR.SpellProgArt"
};

/* -------------------------------------------- */

/**
 * The available choices for how spell damage scaling may be computed
 * @type {Object}
 */
SWNMODULAR.spellScalingModes = {
  "none": "SWNMODULAR.SpellNone",
  "cantrip": "SWNMODULAR.SpellCantrip",
  "level": "SWNMODULAR.SpellLevel"
};

/* -------------------------------------------- */

/**
 * Define the set of locations an item can be stored -Lofty
 * @type {Object}
 */
SWNMODULAR.equipmentLocation = {
  "readied": "SWNMODULAR.Readied",
  "equipped": "SWNMODULAR.Equipped",
  "stored": "SWNMODULAR.Stored",
};

/* -------------------------------------------- */

/**
 * Define the set of types which a weapon item can take
 * @type {Object}
 */
SWNMODULAR.weaponTypes = {
  "simpleM": "SWNMODULAR.WeaponSimpleM",
  "simpleR": "SWNMODULAR.WeaponSimpleR",
  "martialM": "SWNMODULAR.WeaponMartialM",
  "martialR": "SWNMODULAR.WeaponMartialR",
  "natural": "SWNMODULAR.WeaponNatural",
  "improv": "SWNMODULAR.WeaponImprov",
  "siege": "SWNMODULAR.WeaponSiege"
};


/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 */
SWNMODULAR.weaponProperties = {
  "ada": "SWNMODULAR.WeaponPropertiesAda",
  "amm": "SWNMODULAR.WeaponPropertiesAmm",
  "fin": "SWNMODULAR.WeaponPropertiesFin",
  "fir": "SWNMODULAR.WeaponPropertiesFir",
  "foc": "SWNMODULAR.WeaponPropertiesFoc",
  "hvy": "SWNMODULAR.WeaponPropertiesHvy",
  "lgt": "SWNMODULAR.WeaponPropertiesLgt",
  "lod": "SWNMODULAR.WeaponPropertiesLod",
  "mgc": "SWNMODULAR.WeaponPropertiesMgc",
  "rch": "SWNMODULAR.WeaponPropertiesRch",
  "rel": "SWNMODULAR.WeaponPropertiesRel",
  "ret": "SWNMODULAR.WeaponPropertiesRet",
  "sil": "SWNMODULAR.WeaponPropertiesSil",
  "spc": "SWNMODULAR.WeaponPropertiesSpc",
  "thr": "SWNMODULAR.WeaponPropertiesThr",
  "two": "SWNMODULAR.WeaponPropertiesTwo",
  "ver": "SWNMODULAR.WeaponPropertiesVer"
};


// Spell Components
SWNMODULAR.spellComponents = {
  "V": "SWNMODULAR.ComponentVerbal",
  "S": "SWNMODULAR.ComponentSomatic",
  "M": "SWNMODULAR.ComponentMaterial"
};

// Spell Schools
SWNMODULAR.spellSchools = {
  "abj": "SWNMODULAR.SchoolAbj",
  "con": "SWNMODULAR.SchoolCon",
  "div": "SWNMODULAR.SchoolDiv",
  "enc": "SWNMODULAR.SchoolEnc",
  "evo": "SWNMODULAR.SchoolEvo",
  "ill": "SWNMODULAR.SchoolIll",
  "nec": "SWNMODULAR.SchoolNec",
  "trs": "SWNMODULAR.SchoolTrs"
};

// Spell Levels
SWNMODULAR.spellLevels = {
  0: "SWNMODULAR.SpellLevel0",
  1: "SWNMODULAR.SpellLevel1",
  2: "SWNMODULAR.SpellLevel2",
  3: "SWNMODULAR.SpellLevel3",
  4: "SWNMODULAR.SpellLevel4",
  5: "SWNMODULAR.SpellLevel5",
  6: "SWNMODULAR.SpellLevel6",
  7: "SWNMODULAR.SpellLevel7",
  8: "SWNMODULAR.SpellLevel8",
  9: "SWNMODULAR.SpellLevel9"
};

// Spell Scroll Compendium UUIDs
SWNMODULAR.spellScrollIds = {
  0: 'Compendium.swnmodular.items.rQ6sO7HDWzqMhSI3',
  1: 'Compendium.swnmodular.items.9GSfMg0VOA2b4uFN',
  2: 'Compendium.swnmodular.items.XdDp6CKh9qEvPTuS',
  3: 'Compendium.swnmodular.items.hqVKZie7x9w3Kqds',
  4: 'Compendium.swnmodular.items.DM7hzgL836ZyUFB1',
  5: 'Compendium.swnmodular.items.wa1VF8TXHmkrrR35',
  6: 'Compendium.swnmodular.items.tI3rWx4bxefNCexS',
  7: 'Compendium.swnmodular.items.mtyw4NS1s7j2EJaD',
  8: 'Compendium.swnmodular.items.aOrinPg7yuDZEuWr',
  9: 'Compendium.swnmodular.items.O4YbkJkLlnsgUszZ'
};

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the spell slot progression for a full spell-caster.
 * @type {Array[]}
 */
SWNMODULAR.SPELL_SLOT_TABLE = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

/* -------------------------------------------- */

// Polymorph options.
SWNMODULAR.polymorphSettings = {
  keepPhysical: 'SWNMODULAR.PolymorphKeepPhysical',
  keepMental: 'SWNMODULAR.PolymorphKeepMental',
  keepSaves: 'SWNMODULAR.PolymorphKeepSaves',
  keepSkills: 'SWNMODULAR.PolymorphKeepSkills',
  mergeSaves: 'SWNMODULAR.PolymorphMergeSaves',
  mergeSkills: 'SWNMODULAR.PolymorphMergeSkills',
  keepClass: 'SWNMODULAR.PolymorphKeepClass',
  keepFeats: 'SWNMODULAR.PolymorphKeepFeats',
  keepSpells: 'SWNMODULAR.PolymorphKeepSpells',
  keepItems: 'SWNMODULAR.PolymorphKeepItems',
  keepBio: 'SWNMODULAR.PolymorphKeepBio',
  keepVision: 'SWNMODULAR.PolymorphKeepVision'
};

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
SWNMODULAR.proficiencyLevels = {
  0: "SWNMODULAR.NotProficient",
  1: "SWNMODULAR.Proficient",
  0.5: "SWNMODULAR.HalfProficient",
  2: "SWNMODULAR.Expertise"
};

/* -------------------------------------------- */

/**
 * The amount of cover provided by an object.
 * In cases where multiple pieces of cover are
 * in play, we take the highest value.
 */
SWNMODULAR.cover = {
  0: 'SWNMODULAR.None',
  .5: 'SWNMODULAR.CoverHalf',
  .75: 'SWNMODULAR.CoverThreeQuarters',
  1: 'SWNMODULAR.CoverTotal'
};

/* -------------------------------------------- */


// Condition Types
SWNMODULAR.conditionTypes = {
  "blinded": "SWNMODULAR.ConBlinded",
  "deafened": "SWNMODULAR.ConDeafened",
  "frightened": "SWNMODULAR.ConFrightened",
  "invisible": "SWNMODULAR.ConInvisible",
  "stunned": "SWNMODULAR.ConStunned",
  "unconscious": "SWNMODULAR.ConUnconscious"
};

// Languages
SWNMODULAR.languages = {
  "english": "SWNMODULAR.LanguagesEnglish",
  "spanish": "SWNMODULAR.LanguagesSpanish",
  "japanese": "SWNMODULAR.LanguagesJapanese",
  "chinese": "SWNMODULAR.LanguagesChinese",
  "arabic": "SWNMODULAR.LanguagesArabic",
  "swahili": "SWNMODULAR.LanguagesSwahili",
  "signlanguage": "SWNMODULAR.LanguagesSignLanguage",
  "prisonspeak": "SWNMODULAR.LanguagesPrisonSpeak"
};

// Character Level XP Requirements
SWNMODULAR.CHARACTER_EXP_LEVELS =  [
  0, 20, 60, 100, 180, 260, 420, 740, 1060, 1700, 2340, 2980];

// Challenge Rating XP Levels
SWNMODULAR.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

// Character Features Per Class And Level
SWNMODULAR.classFeatures = ClassFeatures;

// Configure Optional Character Flags
SWNMODULAR.characterFlags = {
  "elvenAccuracy": {
    name: "SWNMODULAR.FlagsElvenAccuracy",
    hint: "SWNMODULAR.FlagsElvenAccuracyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "halflingLucky": {
    name: "SWNMODULAR.FlagsHalflingLucky",
    hint: "SWNMODULAR.FlagsHalflingLuckyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "initiativeAdv": {
    name: "SWNMODULAR.FlagsInitiativeAdv",
    hint: "SWNMODULAR.FlagsInitiativeAdvHint",
    section: "Feats",
    type: Boolean
  },
  "initiativeAlert": {
    name: "SWNMODULAR.FlagsAlert",
    hint: "SWNMODULAR.FlagsAlertHint",
    section: "Feats",
    type: Boolean
  },
  "jackOfAllTrades": {
    name: "SWNMODULAR.FlagsJOAT",
    hint: "SWNMODULAR.FlagsJOATHint",
    section: "Feats",
    type: Boolean
  },

  "observantFeat": {
    name: "SWNMODULAR.FlagsObservant",
    hint: "SWNMODULAR.FlagsObservantHint",
    skills: ['prc','inv'],
    section: "Feats",
    type: Boolean
  },

  "powerfulBuild": {
    name: "SWNMODULAR.FlagsPowerfulBuild",
    hint: "SWNMODULAR.FlagsPowerfulBuildHint",
    section: "Racial Traits",
    type: Boolean
  },
  "reliableTalent": {
    name: "SWNMODULAR.FlagsReliableTalent",
    hint: "SWNMODULAR.FlagsReliableTalentHint",
    section: "Feats",
    type: Boolean
  },
  "remarkableAthlete": {
    name: "SWNMODULAR.FlagsRemarkableAthlete",
    hint: "SWNMODULAR.FlagsRemarkableAthleteHint",
    abilities: ['str','dex','con'],
    section: "Feats",
    type: Boolean
  },
  "weaponCriticalThreshold": {
    name: "SWNMODULAR.FlagsWeaponCritThreshold",
    hint: "SWNMODULAR.FlagsWeaponCritThresholdHint",
    section: "Feats",
    type: Number,
    placeholder: 20
  },
  "spellCriticalThreshold": {
    name: "SWNMODULAR.FlagsSpellCritThreshold",
    hint: "SWNMODULAR.FlagsSpellCritThresholdHint",
    section: "Feats",
    type: Number,
    placeholder: 20
  },
  "meleeCriticalDamageDice": {
    name: "SWNMODULAR.FlagsMeleeCriticalDice",
    hint: "SWNMODULAR.FlagsMeleeCriticalDiceHint",
    section: "Feats",
    type: Number,
    placeholder: 0
  },
};

// Configure allowed status flags
SWNMODULAR.allowedActorFlags = ["isPolymorphed", "originalActor"].concat(Object.keys(SWNMODULAR.characterFlags));
