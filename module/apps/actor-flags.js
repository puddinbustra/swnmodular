/**
 * An application class which provides advanced configuration for special character flags which modify an Actor
 * @implements {BaseEntitySheet}
 */
export default class ActorSheetFlags extends BaseEntitySheet {
  static get defaultOptions() {
    const options = super.defaultOptions;
    return mergeObject(options, {
      id: "actor-flags",
	    classes: ["swnpretty"],
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
    data.flags = this._getFlags();
    data.bonuses = this._getBonuses();
    return data;
  }

  /* -------------------------------------------- */

  /**
   * Prepare an object of flags data which groups flags by section
   * Add some additional data for rendering
   * @return {object}
   */
  _getFlags() {
    const flags = {};
    const baseData = this.entity._data;
    for ( let [k, v] of Object.entries(CONFIG.SWNPRETTY.characterFlags) ) {
      if ( !flags.hasOwnProperty(v.section) ) flags[v.section] = {};
      let flag = duplicate(v);
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
      {name: "data.bonuses.mwak.attack", label: "SWNPRETTY.BonusMWAttack"},
      {name: "data.bonuses.mwak.damage", label: "SWNPRETTY.BonusMWDamage"},
      {name: "data.bonuses.rwak.attack", label: "SWNPRETTY.BonusRWAttack"},
      {name: "data.bonuses.rwak.damage", label: "SWNPRETTY.BonusRWDamage"},
      {name: "data.bonuses.msak.attack", label: "SWNPRETTY.BonusMSAttack"},
      {name: "data.bonuses.msak.damage", label: "SWNPRETTY.BonusMSDamage"},
      {name: "data.bonuses.rsak.attack", label: "SWNPRETTY.BonusRSAttack"},
      {name: "data.bonuses.rsak.damage", label: "SWNPRETTY.BonusRSDamage"},
      {name: "data.bonuses.abilities.check", label: "SWNPRETTY.BonusAbilityCheck"},
      {name: "data.bonuses.abilities.save", label: "SWNPRETTY.BonusAbilitySave"},
      {name: "data.bonuses.abilities.skill", label: "SWNPRETTY.BonusAbilitySkill"},
      {name: "data.bonuses.spell.dc", label: "SWNPRETTY.BonusSpellDC"}
    ];
    for ( let b of bonuses ) {
      b.value = getProperty(this.object._data, b.name) || "";
    }
    return bonuses;
  }

  /* -------------------------------------------- */

  /** @override */
  async _updateObject(event, formData) {
    const actor = this.object;
    let updateData = expandObject(formData);

    // Unset any flags which are "false"
    let unset = false;
    const flags = updateData.flags.swnpretty;
    for ( let [k, v] of Object.entries(flags) ) {
      if ( [undefined, null, "", false, 0].includes(v) ) {
        delete flags[k];
        if ( hasProperty(actor._data.flags, `swnpretty.${k}`) ) {
          unset = true;
          flags[`-=${k}`] = null;
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
