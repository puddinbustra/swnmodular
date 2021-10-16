export function getBrSaveNames() {
  let saves = [];
  if(game.settings.get("blind-roll-skills", "hideSaves")){
    saves.push(CONFIG.SWNPRETTY.abilities["str"] + " " + game.i18n.localize("br5e.chat.save"));
    saves.push(CONFIG.SWNPRETTY.abilities["dex"] + " " + game.i18n.localize("br5e.chat.save"));
    saves.push(CONFIG.SWNPRETTY.abilities["con"] + " " + game.i18n.localize("br5e.chat.save"));
    saves.push(CONFIG.SWNPRETTY.abilities["int"] + " " + game.i18n.localize("br5e.chat.save"));
    saves.push(CONFIG.SWNPRETTY.abilities["wis"] + " " + game.i18n.localize("br5e.chat.save"));
    saves.push(CONFIG.SWNPRETTY.abilities["cha"] + " " + game.i18n.localize("br5e.chat.save"));
  }
  return saves;
}
