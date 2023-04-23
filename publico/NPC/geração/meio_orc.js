const meio_orc = {}
meio_orc.name = function (type) {
  const nm1 = ["", "", "", "b", "br", "c", "cr", "d", "dr", "g", "gr", "gn", "h", "hr", "k", "kr", "kh", "l", "m", "n", "s", "t", "th", "tr", "thr", "z"];
  const nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "a", "o", "o", "aa", "au", "oa", "ia", "ai", "uu"];
  const nm3 = ["br", "b", "d", "dh", "dr", "dz", "g", "gr", "gd", "gh", "k", "kh", "kt", "kd", "kr", "lgr", "ltr", "ldr", "lr", "lkr", "nd", "ng", "ngr", "ndr", "nv", "r", "rv", "rg", "rdr", "st", "sd", "str", "tr", "v", "zr", "zz", "zv", "zvr"];
  const nm4 = ["", "", "", "ch", "d", "g", "k", "l", "ll", "m", "n", "r", "rg", "rk", "rm", "rs", "s", "sh", "t", "th"];
  const nm3b = ["b", "d", "dh", "g", "k", "l", "n", "r", "v", "z"];
  const nm5 = ["", "", "", "", "", "b", "br", "c", "d", "f", "g", "h", "k", "m", "n", "p", "r", "rh", "s", "sh", "t", "th", "v", "w", "z"];
  const nm6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "a", "o", "o", "ay", "ou", "ai", "uo"];
  const nm7 = ["b", "br", "bl", "c", "cl", "cr", "d", "dl", "dr", "g", "gh", "gr", "gl", "hg", "hk", "hr", "jk", "l", "ljk", "ll", "ln", "lr", "lt", "m", "mr", "mg", "ml", "n", "ng", "nl", "nc", "r", "rg", "rl", "rd", "s", "sl", "sr", "t", "tt", "tr", "v", "vr", "z", "zr"];
  const nm8 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "h", "l", "n", "sh", "th", "x"];
  const nm7b = ["b", "c", "d", "g", "gh", "l", "m", "n", "r", "s", "t", "v", "z"];
  const nm9 = ["", "", "", "", "b", "br", "c", "d", "g", "h", "k", "m", "n", "r", "s", "t", "th", "v", "z"];
  const nm10 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "aa", "ay", "ou", "ai", "ia", "uo"];
  const nm11 = ["b", "br", "c", "cl", "d", "dr", "g", "gr", "gh", "gl", "k", "kh", "kt", "l", "lh", "lgr", "ll", "ln", "lr", "lt", "m", "n", "nd", "ng", "ndr", "ngr", "nl", "r", "rv", "rg", "rr", "rs", "s", "ss", "sl", "sd", "str", "st", "t", "th", "thr", "v", "vr", "z", "zr"];
  const nm12 = ["", "", "", "", "", "", "", "", "l", "n", "m", "r", "rs", "rd", "s", "sh", "t", "th", "x"];
  const nm11b = ["b", "c", "d", "g", "k", "l", "ll", "m", "n", "r", "s", "t", "th", "v", "z"];

  if (type == female) {
    nameFem();
    while (names === "") {
      nameFem();
    }
  } else if (type == neutral) {
    nameNeu();
    while (names === "") {
      nameNeu();
    }
  } else {
    nameMas();
    while (names === "") {
      nameMas();
    }
  }

  return ['meio_orc', names]

  function nameMas() {
    nTp = Math.random() * 8 | 0;
    rnd = Math.random() * nm1.length | 0;
    rnd2 = Math.random() * nm2.length | 0;
    rnd5 = Math.random() * nm4.length | 0;
    if (nTp < 2) {
      while (nm1[rnd] === "") {
        rnd = Math.random() * nm1.length | 0;
      }
      while (nm4[rnd5] === "") {
        rnd5 = Math.random() * nm4.length | 0;
      }
      names = nm1[rnd] + nm2[rnd2] + nm4[rnd5];
    } else {
      rnd3 = Math.random() * nm3.length | 0;
      rnd4 = Math.random() * nm2.length | 0;
      while (nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm4[rnd5]) {
        rnd3 = Math.random() * nm3.length | 0;
      }
      if (nTp < 6) {
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
      } else {
        rnd6 = Math.random() * nm3b.length | 0;
        rnd7 = Math.random() * nm2.length | 0;
        if (nTp === 6) {
          names = nm1[rnd] + nm2[rnd2] + nm3b[rnd6] + nm2[rnd7] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
        } else {
          names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3b[rnd6] + nm2[rnd7] + nm4[rnd5];
        }
      }
    }
    testSwear(names);
  }

  function nameFem() {
    nTp = Math.random() * 8 | 0;
    rnd = Math.random() * nm5.length | 0;
    rnd2 = Math.random() * nm6.length | 0;
    rnd5 = Math.random() * nm8.length | 0;
    if (nTp < 2) {
      while (nm5[rnd] === "") {
        rnd = Math.random() * nm5.length | 0;
      }
      while (nm8[rnd5] === "") {
        rnd5 = Math.random() * nm8.length | 0;
      }
      names = nm5[rnd] + nm6[rnd2] + nm8[rnd5];
    } else {
      rnd3 = Math.random() * nm7.length | 0;
      rnd4 = Math.random() * nm6.length | 0;
      while (nm7[rnd3] === nm5[rnd] || nm7[rnd3] === nm8[rnd5]) {
        rnd3 = Math.random() * nm7.length | 0;
      }
      if (nTp < 6) {
        names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5];
      } else {
        rnd6 = Math.random() * nm7b.length | 0;
        rnd7 = Math.random() * nm6.length | 0;
        if (nTp === 6) {
          names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7b[rnd6] + nm6[rnd7] + nm8[rnd5];
        } else {
          names = nm5[rnd] + nm6[rnd2] + nm7b[rnd6] + nm6[rnd7] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5];
        }
      }
    }
    testSwear(names);
  }

  function nameNeu() {
    nTp = Math.random() * 8 | 0;
    rnd = Math.random() * nm9.length | 0;
    rnd2 = Math.random() * nm10.length | 0;
    rnd5 = Math.random() * nm12.length | 0;
    if (nTp < 2) {
      while (nm9[rnd] === "") {
        rnd = Math.random() * nm9.length | 0;
      }
      while (nm12[rnd5] === "") {
        rnd5 = Math.random() * nm12.length | 0;
      }
      names = nm9[rnd] + nm10[rnd2] + nm12[rnd5];
    } else {
      rnd3 = Math.random() * nm11.length | 0;
      rnd4 = Math.random() * nm10.length | 0;
      while (nm11[rnd3] === nm9[rnd] || nm11[rnd3] === nm12[rnd5]) {
        rnd3 = Math.random() * nm11.length | 0;
      }
      if (nTp < 6) {
        names = nm9[rnd] + nm10[rnd2] + nm11[rnd3] + nm10[rnd4] + nm12[rnd5];
      } else {
        rnd6 = Math.random() * nm11b.length | 0;
        rnd7 = Math.random() * nm10.length | 0;
        if (nTp === 6) {
          names = nm9[rnd] + nm10[rnd2] + nm11b[rnd6] + nm10[rnd7] + nm11[rnd3] + nm10[rnd4] + nm12[rnd5];
        } else {
          names = nm9[rnd] + nm10[rnd2] + nm11[rnd3] + nm10[rnd4] + nm11b[rnd6] + nm10[rnd7] + nm12[rnd5];
        }
      }
    }
    testSwear(names);
  }
}
meio_orc.male = function() {return this.name(male)}
meio_orc.female = function() {return this.name(female)}
meio_orc.neutral = function() {return this.name(neutral)}