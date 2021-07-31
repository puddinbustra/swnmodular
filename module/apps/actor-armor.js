/**
 * Interface for managing a character's armor calculation.
 *
 * @extends {DocumentSheet}
 */
export default class ActorArmorConfig extends DocumentSheet {

  /** @inheritdoc */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "actor-armor-config",
      classes: ["SWNPRETTY", "actor-armor-config"],
      template: "systems/SWNPRETTY/templates/apps/actor-armor.html",
      width: 320,
      height: "auto"
    });
  }

  /* -------------------------------------------- */

  /** @inheritdoc */
  get title() {
    return `${game.i18n.localize("SWNPRETTY.ArmorConfig")}: ${this.document.name}`;
  }

  /* -------------------------------------------- */

  /** @inheritdoc */
  async getData() {
    const actorData = foundry.utils.deepClone(this.object.data.data);
    const data = {
      config: CONFIG.SWNPRETTY,
      ac: foundry.utils.getProperty(actorData, "attributes.ac"),
      preview: this.object._computeArmorClass(actorData, { ignoreFlat: true }).value,
      formulaDisabled: false
    };

    if ( data.ac.calc !== "custom" ) {
      data.ac.formula = CONFIG.SWNPRETTY.armorClasses[data.ac.calc]?.formula || "";
      data.formulaDisabled = true;
    }

    return data;
  }

  /* -------------------------------------------- */

  /** @inheritdoc */
  async _updateObject(event, formData) {
    const data = foundry.utils.expandObject(formData).ac;
    return this.object.update({"data.attributes.ac": data});
  }

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers                */
  /* -------------------------------------------- */

  /** @inheritdoc */
  async _onChangeInput(event) {
    await super._onChangeInput(event);
    const calc = this.form["ac.calc"].value;
    this.form["ac.formula"].disabled = calc !== "custom";
    if ( calc !== "custom" ) this.form["ac.formula"].value = CONFIG.SWNPRETTY.armorClasses[calc]?.formula || "";
    const data = mergeObject(this.object.toObject(false), {
      'data.attributes.ac': {calc, formula: this.form["ac.formula"].value}
    });
    this.form["ac.flat"].placeholder = this.object._computeArmorClass(data.data, { ignoreFlat: true }).value;
  }
}
