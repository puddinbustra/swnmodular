// import {ClassFeatures} from "./classFeatures.js"

// Namespace Configuration Values
export const SWNPRETTY = {};

// ASCII Artwork
SWNPRETTY.ASCII = `_______________________________
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
SWNPRETTY.abilities = {
  "str": "SWNPRETTY.AbilityStr",
  "dex": "SWNPRETTY.AbilityDex",
  "con": "SWNPRETTY.AbilityCon",
  "int": "SWNPRETTY.AbilityInt",
  "wis": "SWNPRETTY.AbilityWis",
  "cha": "SWNPRETTY.AbilityCha"
};

SWNPRETTY.abilityAbbreviations = {
  "str": "SWNPRETTY.AbilityStrAbbr",
  "dex": "SWNPRETTY.AbilityDexAbbr",
  "con": "SWNPRETTY.AbilityConAbbr",
  "int": "SWNPRETTY.AbilityIntAbbr",
  "wis": "SWNPRETTY.AbilityWisAbbr",
  "cha": "SWNPRETTY.AbilityChaAbbr"
};

SWNPRETTY.attackSkills = {
  "pun": "SWNPRETTY.SkillPer",
  "sht": "SWNPRETTY.SkillPrc",
  "stb": "SWNPRETTY.SkillRel"
};

/* -------------------------------------------- */
/**
 * The set of saves used within the system, added by Lofty
 * @type {Object}
 */
  SWNPRETTY.saves = {
    "psave": "SWNPRETTY.pSave",
    "esave": "SWNPRETTY.eSave",
    "msave": "SWNPRETTY.mSave"
  }


/* -------------------------------------------- */
/**
 * Character alignment options
 * @type {Object}
 */
SWNPRETTY.alignments = {
  'lg': "SWNPRETTY.AlignmentLG",
  'ng': "SWNPRETTY.AlignmentNG",
  'cg': "SWNPRETTY.AlignmentCG",
  'ln': "SWNPRETTY.AlignmentLN",
  'tn': "SWNPRETTY.AlignmentTN",
  'cn': "SWNPRETTY.AlignmentCN",
  'le': "SWNPRETTY.AlignmentLE",
  'ne': "SWNPRETTY.AlignmentNE",
  'ce': "SWNPRETTY.AlignmentCE"
};

/* -------------------------------------------- */


/**
 * NPC attitude options
 * @type {Object}
 */
SWNPRETTY.attitudes = {
  'unknown': "SWNPRETTY.AttitudeUnknown",
  'hostile': "SWNPRETTY.AttitudeHostile",
  'negative': "SWNPRETTY.AttitudeNegative",
  'neutral': "SWNPRETTY.AttitudeNeutral",
  'positive': "SWNPRETTY.AttitudePositive",
  'friendly': "SWNPRETTY.AttitudeFriendly",
};

/* -------------------------------------------- */
/**
 * An enumeration of item attunement types
 * @enum {number}
 */
SWNPRETTY.attunementTypes = {
  NONE: 0,
  REQUIRED: 1,
  ATTUNED: 2,
}

/**
 * An enumeration of item attunement states
 * @type {{"0": string, "1": string, "2": string}}
 */
SWNPRETTY.attunements = {
  0: "SWNPRETTY.AttunementNone",
  1: "SWNPRETTY.AttunementRequired",
  2: "SWNPRETTY.AttunementAttuned"
};

/* -------------------------------------------- */


SWNPRETTY.weaponProficiencies = {
  // "bows": "SWNPRETTY.BowsProf"
};

SWNPRETTY.toolProficiencies = {
  "bows": "SWNPRETTY.BowsProf",
  "vehicle": "SWNPRETTY.ToolVehicle"
};


/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur
 * @type {Object}
 */
SWNPRETTY.timePeriods = {
  "inst": "SWNPRETTY.TimeInst",
  "turn": "SWNPRETTY.TimeTurn",
  "round": "SWNPRETTY.TimeRound",
  "minute": "SWNPRETTY.TimeMinute",
  "hour": "SWNPRETTY.TimeHour",
  "day": "SWNPRETTY.TimeDay",
  "month": "SWNPRETTY.TimeMonth",
  "year": "SWNPRETTY.TimeYear",
  "perm": "SWNPRETTY.TimePerm",
  "spec": "SWNPRETTY.Special"
};


/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
SWNPRETTY.abilityActivationTypes = {
  "none": "SWNPRETTY.None",
  "action": "SWNPRETTY.Action",
  "move": "SWNPRETTY.MoveAction",
  "onturn": "SWNPRETTY.OnTurnAction",
  "instant": "SWNPRETTY.InstantAction",
  "minute": SWNPRETTY.timePeriods.minute,
  "hour": SWNPRETTY.timePeriods.hour,
  "day": SWNPRETTY.timePeriods.day,
  "special": SWNPRETTY.timePeriods.spec,
  // "legendary": "SWNPRETTY.LegAct",
  // "lair": "SWNPRETTY.LairAct",
  "crew": "SWNPRETTY.VehicleCrewAction"
};

/* -------------------------------------------- */


SWNPRETTY.abilityConsumptionTypes = {
  "ammo": "SWNPRETTY.ConsumeAmmunition",
  "attribute": "SWNPRETTY.ConsumeAttribute",
  "material": "SWNPRETTY.ConsumeMaterial",
  "charges": "SWNPRETTY.ConsumeCharges"
};


/* -------------------------------------------- */

// Creature Sizes
SWNPRETTY.actorSizes = {
  "tiny": "SWNPRETTY.SizeTiny",
  "sm": "SWNPRETTY.SizeSmall",
  "med": "SWNPRETTY.SizeMedium",
  "lg": "SWNPRETTY.SizeLarge",
  "huge": "SWNPRETTY.SizeHuge",
  "grg": "SWNPRETTY.SizeGargantuan"
};

SWNPRETTY.tokenSizes = {
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
SWNPRETTY.itemActionTypes = {
  "mwak": "SWNPRETTY.ActionMWAK",
  "rwak": "SWNPRETTY.ActionRWAK",
  // "msak": "SWNPRETTY.ActionMSAK",
  // "rsak": "SWNPRETTY.ActionRSAK",
  "abil": "SWNPRETTY.ActionAbil",
  "save": "SWNPRETTY.ActionSave",
  "heal": "SWNPRETTY.ActionHeal",
  "util": "SWNPRETTY.ActionUtil",
  "other": "SWNPRETTY.ActionOther"
};

/* -------------------------------------------- */

SWNPRETTY.itemCapacityTypes = {
  "items": "SWNPRETTY.ItemContainerCapacityItems",
  "weight": "SWNPRETTY.ItemContainerCapacityWeight"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
SWNPRETTY.limitedUsePeriods = {
  "sr": "SWNPRETTY.ShortRest",
  "lr": "SWNPRETTY.LongRest",
  "day": "SWNPRETTY.Day",
  "charges": "SWNPRETTY.Charges"
};


/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can ber worn by the character
 * @type {Object}
 */
SWNPRETTY.equipmentTypes = {
  // "light": "SWNPRETTY.EquipmentLight",
  // "medium": "SWNPRETTY.EquipmentMedium",
  // "heavy": "SWNPRETTY.EquipmentHeavy",
  "bonus": "SWNPRETTY.EquipmentBonus",
  "natural": "SWNPRETTY.EquipmentNatural",
  "shield": "SWNPRETTY.EquipmentShield",
  "clothing": "SWNPRETTY.EquipmentClothing",
  "trinket": "SWNPRETTY.EquipmentTrinket",
  "vehicle": "SWNPRETTY.EquipmentVehicle"
};


/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
SWNPRETTY.armorProficiencies = {

};


/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
SWNPRETTY.consumableTypes = {
  "ammo": "SWNPRETTY.ConsumableAmmunition",
  "drug": "SWNPRETTY.ConsumablePotion",
  // "poison": "SWNPRETTY.ConsumablePoison",
  "food": "SWNPRETTY.ConsumableFood",
  // "scroll": "SWNPRETTY.ConsumableScroll",
  // "wand": "SWNPRETTY.ConsumableWand",
  // "rod": "SWNPRETTY.ConsumableRod",
  "trinket": "SWNPRETTY.ConsumableTrinket"
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the 5e system
 * @type {Object}
 */
SWNPRETTY.currencies = {
  "credits": "SWNPRETTY.CurrencyCredits",
};


/**
 * Define the upwards-conversion rules for registered currency types
 * @type {{string, object}}
 */
SWNPRETTY.currencyConversion = {
  credits: {into: "credits", each: 1},
};

/* -------------------------------------------- */


// Damage Types
SWNPRETTY.damageTypes = {
  "acid": "SWNPRETTY.DamageAcid",
  "electrical": "SWNPRETTY.DamageElectrical",
  "cold": "SWNPRETTY.DamageCold",
  "heat": "SWNPRETTY.DamageHeat",
  "physical": "SWNPRETTY.DamagePhysical",
  "psychic": "SWNPRETTY.DamagePsychic",
};

// Damage Resistance Types
SWNPRETTY.damageResistanceTypes = mergeObject(duplicate(SWNPRETTY.damageTypes), {
  "physical": "SWNPRETTY.DamagePhysical"
});


/* -------------------------------------------- */

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
SWNPRETTY.movementTypes = {
  "burrow": "SWNPRETTY.MovementBurrow",
  "climb": "SWNPRETTY.MovementClimb",
  "drive": "SWNPRETTY.MovementDrive",
  "fly": "SWNPRETTY.MovementFly",
  "swim": "SWNPRETTY.MovementSwim",
  "walk": "SWNPRETTY.MovementWalk",
}

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @type {Object<string,string>}
 */
SWNPRETTY.movementUnits = {
  "ft": "SWNPRETTY.DistFt",
  "mi": "SWNPRETTY.DistMi",
  "m": "DND5E.DistM",
  "km": "DND5E.DistKm"
}

/**
 * The valid units of measure for the range of an action or effect.
 * This object automatically includes the movement units from SWNPRETTY.movementUnits
 * @type {Object<string,string>}
 */
SWNPRETTY.distanceUnits = {
  "none": "SWNPRETTY.None",
  "self": "SWNPRETTY.DistSelf",
  "touch": "SWNPRETTY.DistTouch",
  "spec": "SWNPRETTY.Special",
  "any": "SWNPRETTY.DistAny"
};
for ( let [k, v] of Object.entries(SWNPRETTY.movementUnits) ) {
  SWNPRETTY.distanceUnits[k] = v;
}

/* -------------------------------------------- */


/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules
 * @type {Object}
 */
SWNPRETTY.encumbrance = {
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
SWNPRETTY.targetTypes = {
  "none": "SWNPRETTY.None",
  "self": "SWNPRETTY.TargetSelf",
  "creature": "SWNPRETTY.TargetCreature",
  "ally": "SWNPRETTY.TargetAlly",
  "enemy": "SWNPRETTY.TargetEnemy",
  "object": "SWNPRETTY.TargetObject",
  "space": "SWNPRETTY.TargetSpace",
  "radius": "SWNPRETTY.TargetRadius",
  "sphere": "SWNPRETTY.TargetSphere",
  "cylinder": "SWNPRETTY.TargetCylinder",
  "cone": "SWNPRETTY.TargetCone",
  "square": "SWNPRETTY.TargetSquare",
  "cube": "SWNPRETTY.TargetCube",
  "line": "SWNPRETTY.TargetLine",
  "wall": "SWNPRETTY.TargetWall"
};


/* -------------------------------------------- */


/**
 * Map the subset of target types which produce a template area of effect
 * The keys are SWNPRETTY target types and the values are MeasuredTemplate shape types
 * @type {Object}
 */
SWNPRETTY.areaTargetTypes = {
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
SWNPRETTY.healingTypes = {
  "healing": "SWNPRETTY.Healing",
  "temphp": "SWNPRETTY.HealingTemp"
};


/* -------------------------------------------- */


/**
 * Enumerate the denominations of hit dice which can apply to classes
 * @type {Array.<string>}
 */
SWNPRETTY.hitDieTypes = ["d6", "d8", "d10", "d12"];


/* -------------------------------------------- */

/**
 * The set of possible sensory perception types which an Actor may have
 * @type {object}
 */
SWNPRETTY.senses = {
  "heatvision": "SWNPRETTY.SenseHeatvision",
  "darkvision": "SWNPRETTY.SenseDarkvision",
  "tremorsense": "SWNPRETTY.SenseTremorsense",
  "truesight": "SWNPRETTY.SenseTruesight"
};

/* -------------------------------------------- */

/**
 * The set of skill which can be trained
 * @type {Object}
 */
SWNPRETTY.skills = {
  "acr": "SWNPRETTY.SkillAcr",
  "dec": "SWNPRETTY.SkillDec",
  "ani": "SWNPRETTY.SkillAni",
  "arc": "SWNPRETTY.SkillArc",
  "ath": "SWNPRETTY.SkillAth",
  "his": "SWNPRETTY.SkillHis",
  "ins": "SWNPRETTY.SkillIns",
  "itm": "SWNPRETTY.SkillItm",
  "inv": "SWNPRETTY.SkillInv",
  "med": "SWNPRETTY.SkillMed",
  "nat": "SWNPRETTY.SkillNat",
  "prc": "SWNPRETTY.SkillPrc",
  "prf": "SWNPRETTY.SkillPrf",
  "per": "SWNPRETTY.SkillPer",
  "rel": "SWNPRETTY.SkillRel",
  "slt": "SWNPRETTY.SkillSlt",
  "ste": "SWNPRETTY.SkillSte",
  "sur": "SWNPRETTY.SkillSur",
  "wor": "SWNPRETTY.SkillWor"
};


/* -------------------------------------------- */

SWNPRETTY.spellPreparationModes = {
  "prepared": "SWNPRETTY.SpellPrepPrepared",
  // "pact": "SWNPRETTY.PactMagic",
  "always": "SWNPRETTY.SpellPrepAlways",
  "atwill": "SWNPRETTY.SpellPrepAtWill",
  "innate": "SWNPRETTY.SpellPrepInnate"
};

SWNPRETTY.spellUpcastModes = ["always", "pact", "prepared"];

SWNPRETTY.spellProgression = {
  "none": "SWNPRETTY.SpellNone",
  "half": "SWNPRETTY.SpellProgHalf",
  "full": "SWNPRETTY.SpellProgFull"
  // "third": "SWNPRETTY.SpellProgThird",
  // "pact": "SWNPRETTY.SpellProgPact",
  // "artificer": "SWNPRETTY.SpellProgArt"
};

/* -------------------------------------------- */

/**
 * The available choices for how spell damage scaling may be computed
 * @type {Object}
 */
SWNPRETTY.spellScalingModes = {
  "none": "SWNPRETTY.SpellNone",
  // "cantrip": "SWNPRETTY.SpellCantrip",
  "level": "SWNPRETTY.SpellLevel"
};

/* -------------------------------------------- */

/**
 * Define the set of locations an item can be stored -Lofty
 * @type {Object}
 */
SWNPRETTY.equipmentLocation = {
  "readied": "SWNPRETTY.Readied",
  "carried": "SWNPRETTY.Carried",
  "stored": "SWNPRETTY.Stored",
};

/* -------------------------------------------- */

/**
 * Define the set of types which a weapon item can take
 * @type {Object}
 */
SWNPRETTY.weaponTypes = {
  "simpleM": "SWNPRETTY.WeaponSimpleM",
  "simpleR": "SWNPRETTY.WeaponSimpleR"
  // "siege": "SWNPRETTY.WeaponSiege"
};


/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * Lofty has moved imrpov and natural from weaponTypes to weaponProperties
 * @type {Object}
 */
SWNPRETTY.weaponProperties = {
  // "ada": "SWNPRETTY.WeaponPropertiesAda",
  "amm": "SWNPRETTY.WeaponPropertiesAmm",
  "bur": "SWNPRETTY.WeaponPropertiesBur",
  // "fin": "SWNPRETTY.WeaponPropertiesFin",
  // "fir": "SWNPRETTY.WeaponPropertiesFir",
  // "foc": "SWNPRETTY.WeaponPropertiesFoc",
  // "hvy": "SWNPRETTY.WeaponPropertiesHvy",
  "imp": "SWNPRETTY.WeaponImprov",
  // "lgt": "SWNPRETTY.WeaponPropertiesLgt",
  // "lod": "SWNPRETTY.WeaponPropertiesLod",
  // "mgc": "SWNPRETTY.WeaponPropertiesMgc",
  "nat": "SWNPRETTY.WeaponNatural",
  // "rch": "SWNPRETTY.WeaponPropertiesRch",
  "rel": "SWNPRETTY.WeaponPropertiesRel",
  "ret": "SWNPRETTY.WeaponPropertiesRet",
  "sil": "SWNPRETTY.WeaponPropertiesSil",
  "spc": "SWNPRETTY.WeaponPropertiesSpc",
  // "thr": "SWNPRETTY.WeaponPropertiesThr",
  "two": "SWNPRETTY.WeaponPropertiesTwo",
  "ver": "SWNPRETTY.WeaponPropertiesVer"
};


// Spell Components
SWNPRETTY.spellComponents = {
  "V": "SWNPRETTY.ComponentVerbal",
  "S": "SWNPRETTY.ComponentSomatic",
  "M": "SWNPRETTY.ComponentMaterial"
};

// Spell Schools
SWNPRETTY.spellSchools = {
  // "abj": "SWNPRETTY.SchoolAbj",
  // "con": "SWNPRETTY.SchoolCon",
  // "div": "SWNPRETTY.SchoolDiv",
  // "enc": "SWNPRETTY.SchoolEnc",
  // "evo": "SWNPRETTY.SchoolEvo",
  // "ill": "SWNPRETTY.SchoolIll",
  // "nec": "SWNPRETTY.SchoolNec",
  // "trs": "SWNPRETTY.SchoolTrs"
  "bio": "SWNPRETTY.SchoolBio",
  "met": "SWNPRETTY.SchoolMet",
  "pre": "SWNPRETTY.SchoolPre",
  "tek": "SWNPRETTY.SchoolTek",
  "tep": "SWNPRETTY.SchoolTap",
  "tor": "SWNPRETTY.SchoolTep"
};

// Spell Levels
SWNPRETTY.spellLevels = {
  0: "SWNPRETTY.SpellLevel0",
  1: "SWNPRETTY.SpellLevel1",
  2: "SWNPRETTY.SpellLevel2",
  3: "SWNPRETTY.SpellLevel3",
  4: "SWNPRETTY.SpellLevel4"
  // 5: "SWNPRETTY.SpellLevel5",
  // 6: "SWNPRETTY.SpellLevel6",
  // 7: "SWNPRETTY.SpellLevel7",
  // 8: "SWNPRETTY.SpellLevel8",
  // 9: "SWNPRETTY.SpellLevel9"
};

// Spell Scroll Compendium UUIDs
SWNPRETTY.spellScrollIds = {
  0: 'Compendium.swnpretty.items.rQ6sO7HDWzqMhSI3',
  1: 'Compendium.swnpretty.items.9GSfMg0VOA2b4uFN',
  2: 'Compendium.swnpretty.items.XdDp6CKh9qEvPTuS',
  3: 'Compendium.swnpretty.items.hqVKZie7x9w3Kqds',
  4: 'Compendium.swnpretty.items.DM7hzgL836ZyUFB1',
  5: 'Compendium.swnpretty.items.wa1VF8TXHmkrrR35',
  6: 'Compendium.swnpretty.items.tI3rWx4bxefNCexS',
  7: 'Compendium.swnpretty.items.mtyw4NS1s7j2EJaD',
  8: 'Compendium.swnpretty.items.aOrinPg7yuDZEuWr',
  9: 'Compendium.swnpretty.items.O4YbkJkLlnsgUszZ'
};

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the spell slot progression for a full spell-caster.
 * @type {Array[]}
 */
SWNPRETTY.SPELL_SLOT_TABLE = [
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
SWNPRETTY.polymorphSettings = {
  keepPhysical: 'SWNPRETTY.PolymorphKeepPhysical',
  keepMental: 'SWNPRETTY.PolymorphKeepMental',
  keepSaves: 'SWNPRETTY.PolymorphKeepSaves',
  keepSkills: 'SWNPRETTY.PolymorphKeepSkills',
  mergeSaves: 'SWNPRETTY.PolymorphMergeSaves',
  mergeSkills: 'SWNPRETTY.PolymorphMergeSkills',
  keepClass: 'SWNPRETTY.PolymorphKeepClass',
  keepFeats: 'SWNPRETTY.PolymorphKeepFeats',
  keepSpells: 'SWNPRETTY.PolymorphKeepSpells',
  keepItems: 'SWNPRETTY.PolymorphKeepItems',
  keepBio: 'SWNPRETTY.PolymorphKeepBio',
  keepVision: 'SWNPRETTY.PolymorphKeepVision'
};

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
SWNPRETTY.proficiencyLevels = {
  0: "SWNPRETTY.NotProficient",
  1: "SWNPRETTY.Proficient",
  0.5: "SWNPRETTY.HalfProficient",
  2: "SWNPRETTY.Expertise"
};

/* -------------------------------------------- */

/**
 * The amount of cover provided by an object.
 * In cases where multiple pieces of cover are
 * in play, we take the highest value.
 */
SWNPRETTY.cover = {
  0: 'SWNPRETTY.None',
  .5: 'SWNPRETTY.CoverHalf',
  .75: 'SWNPRETTY.CoverThreeQuarters',
  1: 'SWNPRETTY.CoverTotal'
};

/* -------------------------------------------- */


// Condition Types
SWNPRETTY.conditionTypes = {
  "blinded": "SWNPRETTY.ConBlinded",
  "deafened": "SWNPRETTY.ConDeafened",
  "frightened": "SWNPRETTY.ConFrightened",
  "invisible": "SWNPRETTY.ConInvisible",
  "stunned": "SWNPRETTY.ConStunned",
  "unconscious": "SWNPRETTY.ConUnconscious"
};

// Languages
SWNPRETTY.languages = {
  "english": "SWNPRETTY.LanguagesEnglish",
  "spanish": "SWNPRETTY.LanguagesSpanish",
  "japanese": "SWNPRETTY.LanguagesJapanese",
  "chinese": "SWNPRETTY.LanguagesChinese",
  "arabic": "SWNPRETTY.LanguagesArabic",
  "swahili": "SWNPRETTY.LanguagesSwahili",
  "signlanguage": "SWNPRETTY.LanguagesSignLanguage",
  "prisonspeak": "SWNPRETTY.LanguagesPrisonSpeak"
};

// Character Level XP Requirements
SWNPRETTY.CHARACTER_EXP_LEVELS =  [
  0, 20, 60, 100, 180, 260, 420, 740, 1060, 1700, 2340, 2980];

// Challenge Rating XP Levels
SWNPRETTY.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

// Character Features Per Class And Level
// SWNPRETTY.classFeatures = ClassFeatures;

// Configure Optional Character Flags
SWNPRETTY.characterFlags = {
  // "initiativeAdv": {
  //   name: "SWNPRETTY.FlagsInitiativeAdv",
  //   hint: "SWNPRETTY.FlagsInitiativeAdvHint",
  //   section: "Feats",
  //   type: Boolean
  // },
  // "weaponCriticalThreshold": {
  //   name: "SWNPRETTY.FlagsWeaponCritThreshold",
  //   hint: "SWNPRETTY.FlagsWeaponCritThresholdHint",
  //   section: "Feats",
  //   type: Number,
  //   placeholder: 20
  // },
  // "spellCriticalThreshold": {
  //   name: "SWNPRETTY.FlagsSpellCritThreshold",
  //   hint: "SWNPRETTY.FlagsSpellCritThresholdHint",
  //   section: "Feats",
  //   type: Number,
  //   placeholder: 20
  // },
  // "meleeCriticalDamageDice": {
  //   name: "SWNPRETTY.FlagsMeleeCriticalDice",
  //   hint: "SWNPRETTY.FlagsMeleeCriticalDiceHint",
  //   section: "Feats",
  //   type: Number,
  //   placeholder: 0
  // },
};

// Configure allowed status flags
SWNPRETTY.allowedActorFlags = ["isPolymorphed", "originalActor"].concat(Object.keys(SWNPRETTY.characterFlags));
