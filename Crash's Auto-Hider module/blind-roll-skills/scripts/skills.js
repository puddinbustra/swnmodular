export function getSkillAbbreviations() {
  let skills = [];
  if(game.settings.get("blind-roll-skills", "hideAdminister")){ skills.push("adm");}
  if(game.settings.get("blind-roll-skills", "hideConnect")){ skills.push("con");}
  if(game.settings.get("blind-roll-skills", "hideExert")){ skills.push("exe");}
  if(game.settings.get("blind-roll-skills", "hideFix")){ skills.push("fix");}
  if(game.settings.get("blind-roll-skills", "hideHeal")){ skills.push("hea");}
  if(game.settings.get("blind-roll-skills", "hideKnow")){ skills.push("kno");}
  if(game.settings.get("blind-roll-skills", "hideLead")){ skills.push("lea");}
  if(game.settings.get("blind-roll-skills", "hideNotice")){ skills.push("not");}
  if(game.settings.get("blind-roll-skills", "hidePilot")){ skills.push("pil");}
  if(game.settings.get("blind-roll-skills", "hideProgram")){ skills.push("pro");}
  if(game.settings.get("blind-roll-skills", "hidePunch")){ skills.push("pun");}
  if(game.settings.get("blind-roll-skills", "hidePerformance")){ skills.push("per");}
  if(game.settings.get("blind-roll-skills", "hideShoot")){ skills.push("sho");}
  if(game.settings.get("blind-roll-skills", "hideSneak")){ skills.push("sne");}
  if(game.settings.get("blind-roll-skills", "hideStab")){ skills.push("stb");}
  if(game.settings.get("blind-roll-skills", "hideSurvive")){ skills.push("sur");}
  if(game.settings.get("blind-roll-skills", "hideTalk")){ skills.push("tal");}
  if(game.settings.get("blind-roll-skills", "hideTrade")){ skills.push("trd");}
  if(game.settings.get("blind-roll-skills", "hideWork")){ skills.push("wor");}
  return skills;
}

export function getSkillNames() {
  let skills = [];
  if(game.settings.get("blind-roll-skills", "hideAdminister")){ skills.push(CONFIG.SWNPRETTY.skills["adm"]);}
  if(game.settings.get("blind-roll-skills", "hideExert")){ skills.push(CONFIG.SWNPRETTY.skills["exe"]);}
  if(game.settings.get("blind-roll-skills", "hideFix")){ skills.push(CONFIG.SWNPRETTY.skills["fix"]);}
  if(game.settings.get("blind-roll-skills", "hideHeal")){ skills.push(CONFIG.SWNPRETTY.skills["hea"]);}
  if(game.settings.get("blind-roll-skills", "hideConnect")){ skills.push(CONFIG.SWNPRETTY.skills["con"]);}
  if(game.settings.get("blind-roll-skills", "hideKnow")){ skills.push(CONFIG.SWNPRETTY.skills["kno"]);}
  if(game.settings.get("blind-roll-skills", "hideLead")){ skills.push(CONFIG.SWNPRETTY.skills["lea"]);}
  if(game.settings.get("blind-roll-skills", "hideNotice")){ skills.push(CONFIG.SWNPRETTY.skills["not"]);}
  if(game.settings.get("blind-roll-skills", "hideTrade")){ skills.push(CONFIG.SWNPRETTY.skills["trd"]);}
  if(game.settings.get("blind-roll-skills", "hidePilot")){ skills.push(CONFIG.SWNPRETTY.skills["pil"]);}
  if(game.settings.get("blind-roll-skills", "hideProgram")){ skills.push(CONFIG.SWNPRETTY.skills["pro"]);}
  if(game.settings.get("blind-roll-skills", "hidePunch")){ skills.push(CONFIG.SWNPRETTY.skills["pun"]);}
  if(game.settings.get("blind-roll-skills", "hidePerformance")){ skills.push(CONFIG.SWNPRETTY.skills["per"]);}
  if(game.settings.get("blind-roll-skills", "hideShoot")){ skills.push(CONFIG.SWNPRETTY.skills["sho"]);}
  if(game.settings.get("blind-roll-skills", "hideSneak")){ skills.push(CONFIG.SWNPRETTY.skills["sne"]);}
  if(game.settings.get("blind-roll-skills", "hideStab")){ skills.push(CONFIG.SWNPRETTY.skills["stb"]);}
  if(game.settings.get("blind-roll-skills", "hideSurvive")){ skills.push(CONFIG.SWNPRETTY.skills["sur"]);}
  if(game.settings.get("blind-roll-skills", "hideTalk")){ skills.push(CONFIG.SWNPRETTY.skills["tal"]);}
  if(game.settings.get("blind-roll-skills", "hideWork")){ skills.push(CONFIG.SWNPRETTY.skills["wor"]);}
  return skills;
}
