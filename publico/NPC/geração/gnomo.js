const gnomo = {}
gnomo.name = function(type) {
  const nm1 = ["b", "c", "cl", "d", "fr", "g", "gn", "h", "j", "kn", "kl", "l", "m", "n", "p", "r", "sc", "sl", "sn", "sm", "t", "w", "z"];
  const nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "a", "e", "i", "o", "u", "a", "e", "i", "a", "e", "i", "o", "u", "a", "e", "i", "a", "e", "i", "o", "u", "a", "e", "i", "a", "e", "i", "o", "u", "a", "e", "i", "y", "y", "y", "oo", "ee", "aa", "ie", "ai"];
  const nm3 = ["bbn", "bk", "bn", "bbr", "db", "dd", "ddw", "dn", "ddn", "gn", "gb", "k", "km", "kn", "kp", "kw", "lk", "lb", "llb", "lv", "mb", "mj", "mm", "mp", "mt", "mw", "mz", "md", "nb", "nj", "nk", "nkk", "nsb", "nsm", "nsn", "nz", "nzb", "ngn", "pn", "pp", "pr", "r", "rk", "rb", "rw", "v"];
  const nm4 = ["c", "ck", "g", "m", "p", "r", "rt", "ss", "st", "t"];
  const nm5 = ["", "", "", "", "bl", "c", "cl", "f", "fl", "fn", "g", "gl", "gn", "h", "l", "m", "n", "p", "ph", "sh", "sl", "sn", "sm", "t", "th", "w"];
  const nm6 = ["bbl", "bbn", "bn", "bl", "db", "dd", "ddl", "dl", "dw", "ddw", "dn", "ddn", "gn", "gb", "gl", "km", "kn", "kw", "lk", "lm", "lw", "lb", "llb", "llm", "ln", "lln", "lv", "mb", "mm", "mw", "md", "nb", "nk", "nkl", "nsm", "nsn", "ngl", "ngn", "pn", "pp", "pw", "pr", "r", "rb", "rw", "v"];
  const nm7 = ["", "", "", "l", "ll", "m", "n", "p", "r", "s", "ss", "t", "th"];
  const nm8 = ["", "", "", "", "b", "bl", "c", "cl", "d", "f", "fl", "fn", "g", "gl", "gn", "h", "j", "kl", "kn", "l", "m", "n", "p", "ph", "r", "sc", "sh", "sl", "sn", "sm", "t", "th", "w", "z"];
  const nm9 = ["bbl", "bbn", "bk", "bn", "bl", "bbr", "db", "dd", "ddl", "dl", "dw", "ddw", "dn", "ddn", "gn", "gb", "gl", "k", "kl", "km", "kn", "kp", "kw", "lk", "lm", "lw", "lb", "llb", "llm", "ln", "lln", "lv", "mb", "mj", "mm", "mp", "mt", "mw", "mz", "md", "nb", "nj", "nk", "nkk", "nkl", "nsb", "nsm", "nsn", "nz", "nzb", "ngl", "ngn", "pn", "pp", "pw", "pr", "r", "rk", "rb", "rw", "v"];
  const nm10 = ["", "", "", "", "c", "ck", "g", "l", "ll", "m", "n", "p", "r", "rt", "s", "ss", "st", "t"];
  const nm11 = ["b", "c", "d", "g", "k", "m", "n", "r", "v"];
  const nm12 = ["b", "d", "f", "h", "l", "m", "n", "s", "v", "w"];
  const nm13 = ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "r", "s", "v", "w"];

  if (type == female) {
    names = ""
    while (names === "") {
      rnd = Math.random() * nm5.length | 0
      rnd2 = Math.random() * nm2.length | 0
      rnd3 = Math.random() * nm6.length | 0
      rnd4 = Math.random() * nm2.length | 0
      rnd5 = Math.random() * nm7.length | 0
      while (rnd < 4) {
        rnd = Math.random() * nm5.length | 0;
      }
      names = nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + nm7[rnd5];
      testSwear(names);
    }
  } else if (type == neutral) {
    names = ""
    while (names === "") {
      rnd = Math.random() * nm8.length | 0
      rnd2 = Math.random() * nm2.length | 0
      rnd3 = Math.random() * nm9.length | 0
      rnd4 = Math.random() * nm2.length | 0
      rnd5 = Math.random() * nm10.length | 0
      while (rnd < 4) {
        rnd = Math.random() * nm8.length | 0;
      }
      names = nm8[rnd] + nm2[rnd2] + nm9[rnd3] + nm2[rnd4] + nm10[rnd5];

      testSwear(names);
    }
  } else {
    names = ""
    while (names === "") {
      rnd = Math.random() * nm1.length | 0;
      rnd2 = Math.random() * nm2.length | 0;
      rnd3 = Math.random() * nm3.length | 0;
      rnd4 = Math.random() * nm2.length | 0;
      rnd5 = Math.random() * nm4.length | 0;
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];

      testSwear(names);
    }
  }

  rnd2 = Math.random() * nm3.length | 0;
  return ['gnomo', names]

}
gnomo.male = function() {return this.name(male)}
gnomo.female = function() {return this.name(female)}
gnomo.neutral = function() {return this.name(neutral)}