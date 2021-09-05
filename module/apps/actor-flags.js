/**
 * An application class which provides advanced configuration for special character flags which modify an Actor
 * @implements {DocumentSheet}
 */
export default class ActorSheetFlags extends DocumentSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "actor-flags",
	    classes: ["SWNPRETTY"],
      template: "systems/swnpretty/templates/apps/actor-flags.html",
      width: 500,
      closeOnSubmit: true
    });
  }

  /* -------------------------------------------- */

  /** @override */
  get title() {
    return `${game.i18n.localize('SWNPRETTY.FlagsTitle')}: ${this.object.name}`;
  }

  /* -------------------------------------------- */

  /** @override */
  getData() {
    const data = {};
    data.actor = this.object;
    data.classes = this._getClasses();
    data.flags = this._getFlags();
    data.bonuses = this._getBonuses();
    data.skills = this._getSkills();
    return data;
  }

  /* -------------------------------------------- */

  /**
   * Prepare an object of sorted classes.
   * @return {object}
   * @private
   */
  _getClasses() {
    const classes = this.object.items.filter(i => i.type === "class");
    return classes.sort((a, b) => a.name.localeCompare(b.name)).reduce((obj, i) => {
      obj[i.id] = i.name;
      return obj;
    }, {});
  }

  /* -------------------------------------------- */

  /**
   * Prepare an object of flags data which groups flags by section
   * Add some additional data for rendering
   * @return {object}
   * @private
   */
  _getFlags() {
    const flags = {};
    const baseData = this.document.toJSON();
    for ( let [k, v] of Object.entries(CONFIG.SWNPRETTY.characterFlags) ) {
      if ( !flags.hasOwnProperty(v.section) ) flags[v.section] = {};
      let flag = foundry.utils.deepClone(v);
      flag.type = v.type.name;
      flag.isCheckbox = v.type === Boolean;
      flag.isSelect = v.hasOwnProperty('choices');
      flag.value = getProperty(baseData.flags, `swnpretty.${k}`);
      flags[v.section][`flags.swnpretty.${k}`] = flag;
    }
    return flags;
  }

  /* -------------------------------------------- */

  /**
   * Get the bonuses fields and their localization strings
   * @return {Array<object>}
   * @private
   */
  _getBonuses() {
    const bonuses = [
      {name: "data.bonuses.encumbrance.bonusReadied", label: "SWNPRETTY.BonusReadied"},
      {name: "data.bonuses.encumbrance.bonusCarried", label: "SWNPRETTY.BonusCarried"},
      {name: "data.bonuses.mwak.attack", label: "SWNPRETTY.BonusMWAttack"},
      {name: "data.bonuses.mwak.damage", label: "SWNPRETTY.BonusMWDamage"},
      {name: "data.bonuses.rwak.attack", label: "SWNPRETTY.BonusRWAttack"},
      {name: "data.bonuses.rwak.damage", label: "SWNPRETTY.BonusRWDamage"},
      // {name: "data.bonuses.msak.attack", label: "SWNPRETTY.BonusMSAttack"},
      // {name: "data.bonuses.msak.damage", label: "SWNPRETTY.BonusMSDamage"},
      // {name: "data.bonuses.rsak.attack", label: "SWNPRETTY.BonusRSAttack"},
      // {name: "data.bonuses.rsak.damage", label: "SWNPRETTY.BonusRSDamage"},
      {name: "data.bonuses.abilities.check", label: "SWNPRETTY.BonusAbilityCheck"},
      {name: "data.bonuses.abilities.save", label: "SWNPRETTY.BonusAbilitySave"},
      {name: "data.bonuses.abilities.skill", label: "SWNPRETTY.BonusAbilitySkill"},
      // {name: "data.bonuses.spell.dc", label: "SWNPRETTY.BonusSpellDC"}
    ];
    for ( let b of bonuses ) {
      b.value = getProperty(this.object.data._source, b.name) || "";
    }
    return bonuses;
  }

  /* -------------------------------------------- */

  /**
   * Get the skills fields and their localization strings -Lofty
   * @return {Array<object>}
   * @private
   */
  _getSkills() {
    const bonuses = [
      {name: "data.skills.adm.diceNum", label: "SWNPRETTY.SkillAdm"},
      {name: "data.skills.con.diceNum", label: "SWNPRETTY.SkillCon"},
      {name: "data.skills.exe.diceNum", label: "SWNPRETTY.SkillExe"},
      {name: "data.skills.fix.diceNum", label: "SWNPRETTY.SkillFix"},
      {name: "data.skills.hea.diceNum", label: "SWNPRETTY.SkillHea"},
      {name: "data.skills.kno.diceNum", label: "SWNPRETTY.SkillKno"},
      {name: "data.skills.lea.diceNum", label: "SWNPRETTY.SkillLea"},
      {name: "data.skills.not.diceNum", label: "SWNPRETTY.SkillNot"},
      {name: "data.skills.per.diceNum", label: "SWNPRETTY.SkillPer"},
      {name: "data.skills.pro.diceNum", label: "SWNPRETTY.SkillPro"},
      {name: "data.skills.pun.diceNum", label: "SWNPRETTY.SkillPun"},
      {name: "data.skills.sho.diceNum", label: "SWNPRETTY.SkillSho"},
      {name: "data.skills.stb.diceNum", label: "SWNPRETTY.SkillStb"},
      {name: "data.skills.sur.diceNum", label: "SWNPRETTY.SkillSur"},
      {name: "data.skills.tal.diceNum", label: "SWNPRETTY.SkillTal"},
      {name: "data.skills.trd.diceNum", label: "SWNPRETTY.SkillTrd"},
      {name: "data.skills.wor.diceNum", label: "SWNPRETTY.SkillWor"},
    ];
    // console.log("getSkills is ", bonuses)

    //This seems to connect the actual value
    for ( let b of bonuses ) {
      b.value = getProperty(this.object.data._source, b.name) || "";
    }
    return bonuses;
  }

  /* -------------------------------------------- */

  /** @override */
  async _updateObject(event, formData) {
    const actor = this.object;
    let updateData = expandObject(formData);


    // Unset any flags which are "false"
    // Lofty updating for undefined flag case
    let unset = false;
    let flags = null;
    if (updateData.flags) {
     flags = updateData.flags.swnpretty;

    for ( let [k, v] of Object.entries(flags) ) {
      if ( [undefined, null, "", false, 0].includes(v) ) {
        delete flags[k];
        if ( hasProperty(actor.data._source.flags, `swnpretty.${k}`) ) {
          unset = true;
          flags[`-=${k}`] = null;
        }
      }
    }
    }
    // Clear any bonuses which are whitespace only
    for ( let b of Object.values(updateData.data.bonuses ) ) {
      for ( let [k, v] of Object.entries(b) ) {
        b[k] = v.trim();
      }
    }

    // Diff the data against any applied overrides and apply
    await actor.update(updateData, {diff: false});
  }
}
