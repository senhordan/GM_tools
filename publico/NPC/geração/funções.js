function random_number(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const random = (array)=>{
  return array[random_number(0, array.length)]
};

const male = 'male'
const female = 'female'
const neutral = 'neutral'

const gender = (type, masc_function, fem_function)=>{
  if (type == male) {
    masc_function()
  } else if (type == female) {
    fem_function()
  }
}

const query = (selector)=>{
    const elements = document.querySelectorAll(selector)
    if (elements.length == 1) {
        return elements[0]
    } else {
        return elements
    }
}

const toTitleCase = (string)=>{
  const array = []
  const splitted_string = string.split(' ')
  splitted_string.forEach(word=>{
    const first_letter = word[0].toUpperCase()
    const other_letters = word.slice(1)
    array.push(`${first_letter}${other_letters}`)
  })
  return array.join(' ')
}

const testSwear = function(nm) {
  const name = nm.toLowerCase();
  const index = ["alah", "allah", "anal", "anilingus", "anus", "apeshit", "arse", "arsehole", "ass", "asshole", "assmunch", "autoerotic", "babeland", "balls", "ballsack", "bangbros", "bareback", "barenaked", "bastard", "bastardo", "bastinado", "beaner", "beaners", "bestiality", "biatch", "bigtits", "bimbos", "birdlock", "bitch", "bitches", "black", "bloody", "blowjob", "blumpkin", "bollock", "bollocks", "bollok", "bondage", "boner", "boob", "boobs", "bugger", "bukkake", "bulldyke", "bullshit", "bum", "bunghole", "busty", "butt", "buttcheeks", "butthole", "buttplug", "cameltoe", "camgirl", "camslut", "camwhore", "clit", "clitbeard", "clitoris", "cloaka", "clusterfuck", "cock", "cocks", "coon", "coons", "cornhole", "crap", "creampie", "crystalnight", "crystal night", "cum", "cumming", "cunt", "damn", "darkie", "daterape", "deepthroat", "dick", "dildo", "doggy", "dolcett", "domination", "dominatrix", "dommes", "dryhump", "dyke", "ecchi", "ejaculation", "erotic", "erotism", "escort", "eunuch", "fag", "fags", "fagget", "faggets", "faggit", "faggits", "faggot", "faggots", "faggut", "faghet", "faghit", "faghot", "faghut", "fecal", "feck", "felch", "felching", "fellate", "fellatio", "feltch", "femdom", "fetish", "figging", "fingerbang", "fingering", "fisting", "flange", "footjob", "frotting", "fuck", "fuckin", "fucking", "fucktard", "fucktards", "fudgepacker", "futanari", "gangbang", "gaysex", "genitals", "goatcx", "goatse", "god", "goddamn", "gokkun", "goodpoop", "googirl", "gook", "goregasm", "grope", "groupsex", "guro", "handjob", "hardcore", "hell", "hentai", "homo", "homoerotic", "honkey", "hooker", "humping", "incest", "intercourse", "jackoff", "jailbait", "jerk", "jerkoff", "jigaboo", "jiggaboo", "jiggerboo", "jizz", "juggs", "kike", "kinbaku", "kinkster", "kinky", "knobbing", "knobend", "kum", "labia", "lmao", "lmfao", "lolita", "maleass", "masturbate", "milf", "muff", "nambla", "nawashi", "nazi", "neeger", "neegger", "negger", "negro", "neonazi", "nieger", "niegger", "niga", "nigar", "niger", "nigga", "niggar", "niggas", "niggaz", "nigger", "niggers", "nigges", "niggir", "niggis", "niggor", "niggos", "niggur", "niggus", "niggrer", "niggret", "nigher", "nighes", "nignog", "nigra", "nimphomania", "nipple", "nipples", "nude", "nudity", "nympho", "nymphomania", "obama", "octopussy", "omg", "omorashi", "oral", "orgasm", "orgy", "paedo", "paki", "panties", "panty", "pedo", "pegging", "penis", "pis", "piss", "pissing", "pisspig", "playboy", "ponyplay", "poof", "poon", "poontang", "poop", "porn", "porno", "prick", "pube", "pubes", "punany", "pussy", "queaf", "queef", "queer", "quim", "raghead", "rape", "raping", "rapist", "rectum", "rimjob", "rimming", "sadism", "santorum", "scat", "schlong", "scissoring", "scrotum", "semen", "sex", "sexo", "sexy", "sexx", "sexxy", "sexei", "sexxei", "shaved", "shemale", "shibari", "shit", "shitblimp", "shitty", "shota", "shrimping", "skeet", "slanteye", "slut", "smegma", "smut", "snatch", "sodomize", "sodomy", "spic", "splooge", "spooge", "spunk", "squaw", "strapon", "suck", "sucks", "suicide", "sultry", "swastika", "swinger", "threesome", "throating", "tiits", "tit", "tits", "titties", "titty", "topless", "tosser", "towelhead", "trani", "tranie", "tranni", "trannie", "tranny", "trany", "trennie", "tubgirl", "turd", "tushy", "twat", "twink", "twinkie", "upskirt", "urethra", "urophilia", "vagina", "vibrator", "voyeur", "vulva", "wank", "wetback", "whore", "wtf", "yaoi", "yiffy"].indexOf(name);
  if (index === -1) {
    return name;
  } else {
    name = "";
  }
};