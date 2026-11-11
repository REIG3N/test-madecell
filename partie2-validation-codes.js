function computeCheckChar(code3) {
  // code3 : exactement 3 caractères [A-Z0-9]
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    const c = code3[i];
    const val =
      c >= "0" && c <= "9" ? c.charCodeAt(0) - 48 : c.charCodeAt(0) - 55;
    sum += val * (i + 1);
  }
  const mod = sum % 36;
  return mod < 10 ? String(mod) : String.fromCharCode(55 + mod);
}

function isValidProductCode(full) {
  /* Cette function refuse les espaces et les minuscules */
  if (full[0] == "=" && full.length == 5) {
    let code3 = "";
    for (let i = 1; i < 4; i++) {
      let curr = full[i];
      if ((curr >= "0" && curr <= "9") || (curr >= "A" && curr <= "Z")) {
        code3 += curr;
      } else return false;
    }
    return full[4] == computeCheckChar(code3);
  }
  return false;
}

function formatProductCode(code3) {
  if (code3.length == 3) {
    for (let i = 0; i < 3; i++) {
      if (
        (code3[i] >= "0" && code3[i] <= "9") ||
        (code3[i] >= "A" && code3[i] <= "Z")
      ) {
        return `=${code3}${computeCheckChar(code3)}`
      } else return null;
    }
  }
  return null
}

export { isValidProductCode, formatProductCode };
