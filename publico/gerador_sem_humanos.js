const socket = io()

const male = 'male'
const female = 'female'
const neutral = 'neutral'

const testSwear=function(nm){
  const name=nm.toLowerCase();
  const index = ["alah","allah","anal","anilingus","anus","apeshit","arse","arsehole","ass","asshole","assmunch","autoerotic","babeland","balls","ballsack","bangbros","bareback","barenaked","bastard","bastardo","bastinado","beaner","beaners","bestiality","biatch","bigtits","bimbos","birdlock","bitch","bitches","black","bloody","blowjob","blumpkin","bollock","bollocks","bollok","bondage","boner","boob","boobs","bugger","bukkake","bulldyke","bullshit","bum","bunghole","busty","butt","buttcheeks","butthole","buttplug","cameltoe","camgirl","camslut","camwhore","clit","clitbeard","clitoris","cloaka","clusterfuck","cock","cocks","coon","coons","cornhole","crap","creampie","crystalnight","crystal night","cum","cumming","cunt","damn","darkie","daterape","deepthroat","dick","dildo","doggy","dolcett","domination","dominatrix","dommes","dryhump","dyke","ecchi","ejaculation","erotic","erotism","escort","eunuch","fag","fags","fagget","faggets","faggit","faggits","faggot","faggots","faggut","faghet","faghit","faghot","faghut","fecal","feck","felch","felching","fellate","fellatio","feltch","femdom","fetish","figging","fingerbang","fingering","fisting","flange","footjob","frotting","fuck","fuckin","fucking","fucktard","fucktards","fudgepacker","futanari","gangbang","gaysex","genitals","goatcx","goatse","god","goddamn","gokkun","goodpoop","googirl","gook","goregasm","grope","groupsex","guro","handjob","hardcore","hell","hentai","homo","homoerotic","honkey","hooker","humping","incest","intercourse","jackoff","jailbait","jerk","jerkoff","jigaboo","jiggaboo","jiggerboo","jizz","juggs","kike","kinbaku","kinkster","kinky","knobbing","knobend","kum","labia","lmao","lmfao","lolita","maleass","masturbate","milf","muff","nambla","nawashi","nazi","neeger","neegger","negger","negro","neonazi","nieger","niegger","niga","nigar","niger","nigga","niggar","niggas","niggaz","nigger","niggers","nigges","niggir","niggis","niggor","niggos","niggur","niggus","niggrer","niggret","nigher","nighes","nignog","nigra","nimphomania","nipple","nipples","nude","nudity","nympho","nymphomania","obama","octopussy","omg","omorashi","oral","orgasm","orgy","paedo","paki","panties","panty","pedo","pegging","penis","pis","piss","pissing","pisspig","playboy","ponyplay","poof","poon","poontang","poop","porn","porno","prick","pube","pubes","punany","pussy","queaf","queef","queer","quim","raghead","rape","raping","rapist","rectum","rimjob","rimming","sadism","santorum","scat","schlong","scissoring","scrotum","semen","sex","sexo","sexy","sexx","sexxy","sexei","sexxei","shaved","shemale","shibari","shit","shitblimp","shitty","shota","shrimping","skeet","slanteye","slut","smegma","smut","snatch","sodomize","sodomy","spic","splooge","spooge","spunk","squaw","strapon","suck","sucks","suicide","sultry","swastika","swinger","threesome","throating","tiits","tit","tits","titties","titty","topless","tosser","towelhead","trani","tranie","tranni","trannie","tranny","trany","trennie","tubgirl","turd","tushy","twat","twink","twinkie","upskirt","urethra","urophilia","vagina","vibrator","voyeur","vulva","wank","wetback","whore","wtf","yaoi","yiffy"].indexOf(name);
  if(index===-1){
    return name;
  }else{
    nMs="";
  }
};


const goblin = {}
goblin.name = function (type){
  const nm1 = ["","","","","","","","b","c","d","f","g","h","j","k","l","p","r","t","v","w","x","z","br","bl","cr","cl","ch","dr","fr","gr","gl","gn","kr","kl","pr","pl","str","st","sr","sl","tr","vr","wr","zr"];
  const nm2 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","y","ia","io","ee","aa","ui","ie","ea","oi"];
  const nm3 = ["b","d","g","h","k","l","m","n","r","s","t","v","z","b","d","g","h","k","l","m","n","r","s","t","v","z","b","d","g","h","k","l","m","n","r","s","t","v","z","b","d","g","h","k","l","m","n","r","s","t","v","z","bb","bd","bh","bl","bk","bn","br","bs","bt","bz","db","dd","df","dh","dl","dn","dr","ds","dv","dz","","gg","gb","gd","gh","gk","gl","gm","gn","gr","gs","gt","gz","hd","hb","hk","hn","hz","kl","kn","kz","kv","kk","lb","ld","lg","lk","ll","lr","ls","lt","lv","lz","mr","mv","mz","mt","nr","nv","nz","nt","rb","rd","rg","rk","rl","rm","rn","rr","rs","rt","rv","rz","sb","sd","sh","sk","sm","sn","sr","str","st","sv","sz","ss","tb","tl","tm","tn","tr","tv","tz","tt","vl","vn","vr","vz","zb","zd","zg","zl","zm","zn","zt"];
  const nm4 = ["c","g","k","l","q","r","t","x","z","nk","ld","rd","s","sz","zz","ng","kz","lb","rm","sb","bs","ts","cs","ct","gs","gz","kt","kx","lk","lx","rk","rt","rd","rx"];
  const nm5 = ["","","","","","","","b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","bh","br","bl","cr","cl","ch","fr","fl","gr","gl","gn","kh","kl","ph","pr","sh","st","sr","sl","sw","th","thr","tr","vr","wr"];
  const nm6 = ["b","f","g","h","k","l","m","n","p","r","s","t","v","b","f","g","h","k","l","m","n","p","r","s","t","v","b","f","g","h","k","l","m","n","p","r","s","t","v","b","f","g","h","k","l","m","n","p","r","s","t","v","bb","bd","bh","bl","bk","bn","br","bs","bt","bz","fb","fl","fm","fn","fs","ft","gg","gb","gd","gh","gk","gl","gm","gn","gr","gs","gt","gz","hd","hb","hk","hn","hz","kl","kn","kz","kv","kk","lb","ld","lg","lk","ll","lr","ls","lt","lv","lz","mr","mv","mz","mt","nr","nv","nz","nt","ph","pf","pl","pn","pm","pr","ps","pt","pv","rb","rd","rg","rk","rl","rm","rn","rr","rs","rt","rv","rz","sb","sd","sh","sk","sm","sn","sr","str","st","sv","sz","ss","tb","tl","tm","tn","tr","tv","tz","tt","vl","vn","vr","vz"];
  const nm7 = ["h","f","g","l","n","q","s","x","z","ls","nk","zz","ld","sh","sz","ss","gs","sx","lx","hx","th","rx","rt","ft","fs","fz","lm","lk","lt","ng","nx","ns","nq"];
  const nm8 = ["e","i","ee","ia","ea","a","ai","","","","","","","","","","","","",""];
  const tp = type;
  for(i = 0; i < 1; i++){
    rnd2 = Math.floor(Math.random() * nm2.length);
    rnd2b = Math.floor(Math.random() * nm2.length);
    switch (tp) {
      case 'male':
        rnd5 = Math.floor(Math.random() * nm1.length);
        rnd7 = Math.floor(Math.random() * nm4.length);
        if(i < 5){
          names = nm1[rnd5] + nm2[rnd2] + nm4[rnd7];
        }else{
          rnd3 = Math.floor(Math.random() * nm3.length);
          names = nm1[rnd5] + nm2[rnd2] + nm3[rnd3] + nm2[rnd2b] + nm4[rnd7];
        }

        break;
      case 'female':
        rnd5 = Math.floor(Math.random() * nm5.length);
        rnd7 = Math.floor(Math.random() * nm7.length);
        rnd8 = Math.floor(Math.random() * nm8.length);
        if(i < 5){
          names = nm5[rnd5] + nm2[rnd2] + nm7[rnd7] + nm8[rnd8];
        }else{
          rnd6 = Math.floor(Math.random() * nm6.length);
          names = nm5[rnd5] + nm2[rnd2] + nm6[rnd6] + nm2[rnd2b] + nm7[rnd7] + nm8[rnd8];
        }

        break;
      default:
        // statements_def
        break;
    }
  }
  return names
}
goblin.male = function () {return this.name(male)}
goblin.female = function () {return this.name(female)}

const elf = {}
elf.name = function (type) {
  const nm1=["Abarat","Adamar","Adorellan","Adresin","Aelrindel","Aerendyl","Aeson","Afamrail","Agandaur","Agis","Aias","Aiduin","Aien","Ailas","Ailduin","Ailen","Ailluin","Ailmar","Ailmer","Ailmon","Ailre","Ailred","Ailuin","Ailwin","Aimar","Aimer","Aimon","Airdan","Aire","Aired","Aithlin","Aiwin","Akkar","Alabyran","Alaion","Alas","Alen","Alinar","Alluin","Almar","Almer","Almon","Alok","Alosrin","Alre","Alred","Althidon","Alwin","Amrynn","Andrathath","Anfalen","Anlyth","Aolis","Aquilan","Arathorn","Arbane","Arbelladon","Ardreth","Ardryll","Arel","Arlen","Arun","Ascal","Athtar","Aubron","Aumanas","Aumrauth","Avourel","Ayas","Ayduin","Ayen","Ayluin","Aymar","Aymer","Aymon","Ayre","Ayred","Aywin","Belanor","Beldroth","Bellas","Beluar","Biafyndar","Bialaer","Braern","Cailu","Camus","Castien","Chathanglas","Cohnal","Conall","Connak","Cornaith","Corym","Cyran","Dain","Dakath","Dalyor","Darcassan","Darfin","Darthoridan","Darunia","Deldrach","Delmuth","Delsaran","Devdan","Drannor","Druindar","Durlan","Durothil","Dyffros","Edwyrd","Edyrm","Ehlark","Ehrendil","Eilauver","Elaith","Elandorr","Elas","Elashor","Elauthin","Eldaerenth","Eldar","Eldrin","Elduin","Elen","Elephon","Elidyr","Elion","Elkhazel","Ellisar","Elluin","Elmar","Elmer","Elmon","Elnaril","Elorshin","Elpharae","Elre","Elred","Eltaor","Elwin","Elyon","Emmyth","Entrydal","Erendriel","Eriladar","Erlan","Erlareo","Erlathan","Eroan","Erolith","Estelar","Ethlando","Ettrian","Evindal","Faelar","Faelyn","Faeranduil","Falael","Felaern","Fenian","Feno","Feyrith","Fhaornik","Filarion","Filvendor","Filverel","Flardryn","Flinar","Folas","Folduin","Folen","Folluin","Folmar","Folmer","Folmon","Folre","Folred","Folwin","Fylson","Gaeleath","Gaelin","Galaeron","Galan","Galather","Ganamede","Gantar","Garrik","Garynnon","Giullis","Glanduil","Glarald","Glorandal","Goras","Gorduin","Goren","Gorluin","Gormar","Gormer","Gormon","Gorre","Gorred","Gorwin","Grathgor","Haemir","Hagas","Hagduin","Hagen","Hagluin","Hagmar","Hagmer","Hagre","Hagred","Hagwin","Haladavar","Halafarin","Halamar","Haldir","Halflar","Halueth","Halueve","Hamon","Haryk","Hastios","Hatharal","Horith","Hubys","Iefyr","Ievis","Ilbryen","Ilimitar","Iliphar","Illianaro","Illithor","Illitran","Ilphas","Ilrune","Ilthuryn","Ilvisar","Inchel","Inialos","Intevar","Iolas","Iolrath","Itham","Ivaran","Ivasaar","Iymbryl","Iyrandrar","Jandar","Jannalor","Jaonos","Jassin","Jhaan","Jhaartael","Jhaeros","Jonik","Jorildyn","Kailu","Katar","Katyr","Kellam","Kelvhan","Kendel","Kerym","Keryth","Kesefeon","Kharis","Khatar","Khidell","Khiiral","Khilseith","Khuumal","Khyrmin","Kieran","Kiirion","Kindroth","Kivessin","Klaern","Kolvar","Kuskyn","Kymil","Kyrenic","Kyrtaar","Laeroth","Lafarallin","Laiex","Lamruil","Larongar","Larrel","Lathai","Lathlaeril","Lhoris","Lianthorn","Llarm","Llewel","Lorsan","Luirlan","Luthais","Luvon","Lyari","Lyklor","Lysanthir","Maeral","Maiele","Malgath","Malon","Maradeim","Marikoth","Marlevaur","Melandrach","Merellien","Merith","Methild","Mhaenal","Mitalar","Mihangyl","Miirphys","Mirthal","Mlartlar","Mnementh","Morthil","Myrdin","Myriil","Myrin","Mythanar","Naertho","Naeryndam","Naesala","Narbeth","Nardual","Nasir","Navarre","Nelaeryn","Neldor","Neremyn","Nesterin","Nevarth","Nhamashal","Nieven","Nindrol","Ninleyn","Ninthalor","Niossae","Nuvian","Nylian","Nym","Nyvorlas","Olaurae","Onas","Oncith","Onvyr","Orist","Ornthalas","Orrian","Orym","Otaehryn","Othorion","Paeral","Paeris","Pelleas","Phaendar","Pharom","Phraan","Pirphal","Purtham","Pyrravyn","Pywaln","Qildor","Raeran","Raibyn","Ralnor","Ranaeril","Rathal","Reluraun","Reluvethel","Rennyn","Reptar","Respen","Revalor","Rhalyf","Rhangyl","Rhistel","Rhothomir","Rhys","Rilitar","Riluaneth","Rolim","Rothilion","Ruehnar","Ruith","Ruvaen","Ruven","Ruvyn","Rychell","Rydel","Ryfon","Ryo","Ryul","Saelethil","Saevel","Saleh","Samblar","Sanev","Scalanis","Selanar","Sharian","Shaundyl","Shyrrik","Sihnion","Silvyr","Simimar","Sinaht","Siveril","Sontar","Sudryal","Sundamar","Sylvar","Sythaeryn","Taegen","Taenaran","Taeral","Taerentym","Taleasin","Tamnaeth","Tanithil","Tannatar","Tannivh","Tannyll","Tanyl","Tanyth","Taranath","Tarathiel","Taredd","Tarron","Tasar","Tassarion","Tathaln","Thalanil","Thallan","Theodas","Theodemar","Theoden","Theodluin","Theodmer","Theodmon","Theodre","Theodred","Thuridan","Tiarsus","Tolith","Tordynnar","Toross","Traeliorn","Travaran","Triandal","Ualiar","Uevareth","Uldreyin","Urdusin","Usunaar","Uthorim","Vaalyun","Vaeril","Vamir","Varitan","Velethuil","Venali","Vesryn","Vesstan","Virion","Volodar","Voron","Vuduin","Vulas","Vulen","Vulluin","Vulmar","Vulmer","Vulmon","Vulre","Vulred","Vulwin","Wirenth","Wistari","Wyn","Wyninn","Wyrran","Yalathanil","Yesanith","Yhendorn","Ylyndar","Zaos","Zelphar","Zeno","Zhoron"];
  const nm2=["Aelrie","Aelua","Aelynthi","Aenwyn","Aerilaya","Aerith","Ahrendue","Ahshala","Aila","Alagossa","Alais","Alanis","Alasse","Alavara","Alea","Aleesia","Alenia","Aleratha","Allannia","Allisa","Alloralla","Allynna","Almedha","Almithara","Alvaerelle","Alyndra","Amara","Amaranthae","Amarille","Amedee","Ameria","Amisra","Amnestria","Amra","Anarzee","Aneirin","Anhaern","Annallee","Ara","Arasne","Aravae","Arcaena","Ariawyn","Arilemna","Arlayna","Arnarra","Arryn","Arthion","Artin","Ashera","Ashryn","Aurae","Ava","Axilya","Ayda","Ayla","Azariah","Baerinda","Bellaluna","Bemere","Bonaluria","Burolia","Caeda","Caerthynna","Calarel","Celaena","Cellica","Chaenath","Chalia","Chalsarda","Chamylla","Chandrelle","Chasianna","Ciliren","Ciradyl","Cithrel","Clanire","Cremia","Daethie","Daratrine","Darshee","Darunia","Dasyra","Delimira","Delsanra","Dessielle","Deulara","Dilya","Dirue","Ealirel","Ecaeris","Edea","Edraele","Eirina","Elanalue","Elanil","Elasha","Elenaril","Eletha","Elincia","Elisen","Eliyen","Ellarian","Elmyra","Eloimaya","Elora","Elyon","Ena","Enania","Eshenesra","Esiyae","Essaerae","Esta","Falenas","Faraine","Farryn","Faunalyn","Fayeth","Faylen","Fhaertala","Filaurel","Filauria","Fildarae","Finnea","Gaelira","Gaerradh","Gaylia","Geminara","Ghilanna","Glynnii","Gweyir","Gwynnestri","Gylledhia","Haciathra","Haera","Halaema","Halanaestra","Hamalitia","Haramara","Helartha","Holone","Huethea","Hycis","Ialantha","Ikeshia","Ildilyntra","Ilmadia","Ilsevel","Ilyana","Ilyrana","Ilythyrra","Imizael","Immianthe","Imra","Imryll","Ioelena","Irhaal","Isarrel","Isilynor","Ithronel","Itireae","Itylara","Jastira","Jeardra","Jhaerithe","Jhanandra","Jhilsara","Kali","Kasula","Kavrala","Kaylessa","Kaylin","Keenor","Keerla","Keishara","Kenia","Kethryllia","Keya","Kilyn","Kylantha","Kythaela","Laamtora","Laerdya","Lazziar","Leena","Leilatha","Lenna","Lensa","Lethhonel","Lierin","Liluth","Lithoniel","Lixiss","Llamiryl","Llorva","Loreleia","Lura","Lusha","Lusserina","Lyeecia","Lyeneru","Lymseia","Lyndis","Lyra","Lyrei","Lythienne","Madris","Maelyrra","Maeralya","Maescia","Makaela","Malonne","Malruthiia","Mariona","Mathienne","Maylin","Meira","Melarue","Meorise","Merethyl","Merialeth","Meriel","Merlara","Mhoryga","Micaiah","Minuvae","Muelara","Myantha","Mylaela","Mylaerla","Myriani","Myrrh","Nabeora","Naesala","Naevys","Naexi","Nakiasha","Nalaea","Nambra","Namys","Nanthaliene","Neia","Nephinae","Nimeroni","Nimue","Nithenoel","Nithroel","Nuala","Nueleth","Nuovis","Nushala","Nyana","Nylathria","Ochilysse","Omylia","Osonia","Penelo","Phaerille","Phelorna","Phinara","Phyrra","Pyria","Qamara","Radelia","Raenisa","Rallientha","Rania","Ratha","Rathiain","Renestrae","Renna","Rina","Riniya","Rophalin","Rosanhi","Rosaniya","Roshia","Rubarae","Ryllae","Saelihn","Saida","Sakaala","Salihn","Sana","Saphielle","Saria","Sariandi","Sarya","Seldanna","Selphie","Selussa","Shael","Shaerra","Shalaevar","Shalana","Shalendra","Shalheira","Shalia","Shanaera","Shandalar","Shanyrria","Shelara","Shenarah","Sillavana","Sionia","Siora","Siphanien","Siraye","Solana","Soliana","Sorisana","Sumina","Syllia","Sylmare","Symania","Syndra","Syvis","Taenya","Talanashta","Talindra","Tanelia","Tanila","Tanulia","Tarasynora","Tehlarissa","Tephysea","Teriani","Thaciona","Thalia","Thaola","Thasinia","Thessalia","Tialha","Tinesi","Tiriana","Tisha","Tsarra","Tyrael","Ulesse","Umilythe","Uneathen","Urricea","Usamea","Vaeri","Valindra","Vanya","Vasati","Velatha","Verrona","Vestele","Vianola","Viessa","Wynather","Yaereene","Yalanue","Yathanae","Ygannea","Ynaselle","Yralissa","Yrathea","Yrneha","Ysildea","Yumanea","Yunaesa","Zaleria","Zentha","Zestari","Zilyana"];
  const nm3=["Ad","Ae","Ara","Bal","Bei","Bi","Bry","Cai","Car","Chae","Cra","Da","Dae","Dor","Eil","El","Ela","En","Er","Fa","Fae","Far","Fen","Gen","Gil","Glyn","Gre","Hei","Hele","Her","Hola","Ian","Iar","Ili","Ina","Jo","Kea","Kel","Key","Kris","Leo","Lia","Lora","Lu","Mag","Mia","Mira","Mor","Nae","Neri","Nor","Ola","Olo","Oma","Ori","Pa","Per","Pet","Phi","Pres","Qi","Qin","Qui","Ralo","Rava","Rey","Ro","Sar","Sha","Syl","The","Tor","Tra","Tris","Ula","Ume","Uri","Va","Val","Ven","Vir","Waes","Wran","Wyn","Wysa","Xil","Xyr","Yel","Yes","Yin","Ylla","Zin","Zum","Zyl"];
  const nm4=["balar","banise","bella","beros","can","caryn","ceran","cyne","dan","di","dithas","dove","faren","fiel","fina","fir","geiros","gella","golor","gwyn","hana","harice","hice","horn","jeon","jor","jyre","kalyn","kas","kian","krana","lamin","lana","lar","lee","len","leth","lynn","maer","maris","menor","moira","myar","mys","na","nala","nan","neiros","nelis","norin","peiros","petor","phine","phyra","qen","qirelle","quinal","ra","ralei","ran","rel","ren","ric","rie","rieth","ris","ro","rona","rora","roris","salor","sandoral","satra","stina","sys","thana","thyra","toris","tris","tumal","valur","varis","ven","vyre","warin","wenys","wraek","wynn","xalim","xidor","xina","xisys","yarus","ydark","ynore","yra","zana","zeiros","zorwyn","zumin"];
  const nm5=["Adorellan","Adresin","Aelrindel","Aenwyn","Aerendyl","Aerith","Aien","Ailen","Ailre","Aimer","Aire","Aithlin","Alaion","Alais","Alanis","Alasse","Alosrin","Amra","Amrynn","Aneirin","Anfalen","Anhaern","Anlyth","Arbane","Ardreth","Arel","Ariawyn","Arryn","Arthion","Artin","Ashryn","Aubron","Avourel","Axilya","Ayen","Aymer","Ayre","Aywin","Azariah","Bellas","Bemere","Bialaer","Caeda","Calarel","Chaenath","Ciliren","Ciradyl","Cithrel","Cohnal","Conall","Cornaith","Cyran","Dain","Darunia","Ehlark","Ehrendil","Elaith","Elandorr","Elanil","Elas","Elauthin","Eldaerenth","Eldrin","Elen","Elidyr","Elion","Elisen","Ellisar","Elluin","Elnaril","Elpharae","Elred","Elyon","Emmyth","Erendriel","Eroan","Estelar","Faelyn","Falael","Falenas","Farryn","Felaern","Feno","Filaurel","Filverel","Folen","Folre","Fylson","Gaeleath","Gaelin","Gaerradh","Galan","Goras","Goren","Gweyir","Haemir","Halaema","Halamar","Haldir","Halueth","Halueve","Hamon","Horith","Hycis","Iefyr","Ilbryen","Iliphar","Ilphas","Imizael","Inchel","Irhaal","Isarrel","Isilynor","Ithronel","Ivasaar","Jandar","Jassin","Jhaan","Jorildyn","Kailu","Katar","Keenor","Kelvhan","Kendel","Keryth","Kharis","Khidell","Khiiral","Khyrmin","Kilyn","Kindreth","Kymil","Laeroth","Larrel","Lathlaeril","Lazziar","Lethonel","Lhoris","Lierin","Llewel","Lorsan","Lyari","Lysanthir","Maeral","Maiele","Malon","Malonne","Merellien","Meriel","Merith","Methild","Micaiah","Mirthal","Mnementh","Myrdin","Myriil","Myrin","Myrrh","Naesala","Naevys","Namys","Narbeth","Nasir","Navarre","Nelaeryn","Neremyn","Nesterin","Nhamashal","Nieven","Nithenoel","Nueleth","Nuovis","Nym","Orym","Paeral","Paeris","Pelleas","Phraan","Rathiain","Rennyn","Rhalyf","Riluaneth","Rolim","Ruehnar","Ruvaen","Ruven","Ruvyn","Ryllae","Ryo","Saelethil","Saelihn","Saevel","Saida","Saleh","Sanev","Selanar","Shalaevar","Shandalar","Sharian","Sinaht","Sylmare","Sylvar","Syvis","Taenaran","Taeral","Tamnaeth","Tanathil","Tannatar","Tannyll","Tanyl","Tanyth","Taranth","Tarathiel","Thalanil","Thallan","Tyrael","Uneathen","Vaeril","Vamir","Venali","Virion","Vulen","Vulmar","Vulmer","Vulwin","Wirenth","Wynather","Yesanith","Zeno"];
  const tp=type;
  for(i=0;i<1;i++) {
    rnd2=Math.random()*nm3.length|0;
    rnd3=Math.random()*nm4.length|0;
    nameLast=nm3[rnd2]+nm4[rnd3];
    switch (type) {
      case 'female':
        rnd=Math.random()*nm2.length|0;names=nm2[rnd]+" "+nameLast;
        break;
      case 'male':
        rnd=Math.random()*nm1.length|0;names=nm1[rnd]+" "+nameLast;
        break;
      case 'neutral':
        rnd=Math.random()*nm5.length|0;names=nm5[rnd]+" "+nameLast;
        break;
      default:
        break;
    }
  }
  return names
}
elf.male = function () {return this.name(male)}
elf.female = function () {return this.name(female)}
elf.neutral = function () {return this.name(neutral)}
// half elf

function half_elf(type){
  const nm1=["Aal","Abe","Ad","Ada","Ade","Al","An","Ar","Arn","Aro","Aud","Ave","Bal","Bar","Bel","Ber","Bri","Char","Chris","Cler","Col","Con","Cor","Cra","Cris","Dan","Dav","Der","Don","Dor","Dra","Ed","Eir","El","Eli","Em","Eme","Eng","Er","Ever","Fal","Far","Fara","Fer","Fran","Fred","Fril","Ful","Ga","Gab","Gaer","Gal","Gale","Gar","Gef","Geof","Ger","Gib","Gil","Gir","God","Gra","Greg","Ha","Hal","Ham","Han","Har","Have","Hem","Hen","Hewe","Hig","Hil","Hor","Hu","Hum","Ian","Ilo","Im","Ing","Ingel","Isem","Ivo","Iz","Jac","Jam","Jame","Jaqu","Jar","Jef","Jen","Jer","Jere","Jor","Jose","Kev","Kri","Lam","Lan","Lance","Laun","Leo","Lor","Mal","Malcu","Mar","Maug","Mei","Mer","Mic","Mich","Mik","Nic","Nich","Nig","Nige","Nik","Nil","Nor","Nyco","Ori","Os","Pan","Per","Perci","Pet","Pete","Pier","Quo","Rad","Raf","Raim","Rain","Ran","Raw","Ray","Raym","Reim","Rem","Ren","Rey","Reyn","Ri","Ric","Rich","Rob","Rod","Rog","Roge","Rol","Rot","Sal","Sala","Sam","San","Sar","Sim","Sten","Steph","Syl","Tan","Ted","Teod","Ter","Thi","Thom","Tib","To","Tob","Tra","Tris","Tyb","Tyr","Uan","Ul","Um","Ur","Val","Van","Vic","Vil","Wal","War","Wat","Wi","Wil","Wim","Wis","Wy","Wym","Xan","Xav","Yen","Yor","Ysem","Zan","Zyl"];
  const nm2=["amar","arat","alath","avor","bane","ben","borin","byran","coril","craes","dal","dar","deyr","dil","dithas","dorr","driel","dryn","duil","duin","dyr","ellan","elor","enas","endyl","esin","faelor","faerd","falen","farin","fin","finas","fire","fyndar","fyr","gotin","gretor","homin","horn","idon","indel","is","kas","kath","koris","ladar","ladon","lael","laer","laeril","laern","laeron","laith","lamar","lamir","lan","lanann","lando","lanor","lar","lareo","las","lathan","lather","leath","len","lidyr","linar","lion","lis","lisar","lith","luar","luin","lumin","manas","mar","mede","mer","meron","minar","mir","mitar","mon","morn","mus","naith","nall","nalor","nan","nar","naril","nas","neak","neiros","nian","nik","nor","nos","orin","osrin","ovar","parin","phanis","phar","phon","qarim","qinor","rach","rath","rauth","reak","red","rel","reth","rian","ridan","ril","rion","rith","ron","ros","roth","ruil","rune","ryll","rym","ryn","rynn","rynnon","san","saran","sariph","seith","shor","sin","staer","tael","taor","tar","telar","tevar","tharal","thath","thil","thin","thor","thorn","tien","torin","trydal","tumil","uin","valor","vendor","verel","voril","warith","win","word","xian","xiron","yeras","ynor","zaphir","zaren"];
  const nm3=["Aal","Aan","Ad","Ade","Adel","Ael","Al","Ale","Ali","Alu","Aly","Am","Ame","Amel","An","Ar","Ari","Ath","Athe","Aub","Av","Ave","Avi","Avil","Beat","Bel","Ber","Bi","Bran","Bren","Bri","Brid","Brun","Byn","Car","Ced","Chris","Clar","Co","Cris","Dar","Del","Eb","Ed","Ede","Edel","El","Eli","Elin","Elis","Eliz","Elye","Elyen","Elys","Em","Emel","Emil","Es","Esa","Eve","Evel","Eza","Fae","Fha","Ga","Gab","Gaen","Gal","Gen","Gene","Gif","Gis","Gise","Gisel","Glo","Glor","Gon","Gre","Gres","Gwen","Ha","Had","Haly","Har","Haw","He","Hege","Heil","Hel","Her","Herme","Hil","Ho","Hos","Ib","Ile","Ima","In","Ioh","Iro","Is","Isa","Ise","Isel","Ismen","Iso","Isol","Issa","Isso","Ive","Jac","Jan","Jana","Jean","Jeh","Jeha","Jen","Jene","Jes","Jessi","Jil","Jin","Jis","Joan","Joh","Joha","Joy","Jul","Kri","Kys","Les","Lib","Lil","Lili","Lin","Lis","Liz","Lora","MAde","Ma","Maal","Mad","Maer","Mag","Mah","Mal","Man","Mar","Mare","Mari","Math","Maud","Mel","Meli","Mer","Mere","Mil","Mili","Mir","Mol","Myl","Na","Nan","Neri","Ni","Nin","Nor","Ol","Ophi","Or","Ori","Phaye","Pri","Qi","Que","Rel","Res","Roh","Rosa","Rose","Sa","Sael","Saf","Sal","Sar","Sara","Sel","Seph","Sera","Sul","Sus","Syl","Ta","Tam","Tef","Teph","Thef","Ther","Tif","Tyl","Una","Uri","Ven","Vic","Vyl","Win","Wol","Xil","Xyr","Yes","Yll","Ysa","Yv","Zel","Zin"];
  const nm4=["aerys","anys","atha","bellis","brae","bwynn","caena","caiah","cerys","charis","cia","daerae","dalar","danna","dee","delia","diane","dis","dove","dris","due","dyl","elor","enyphe","faen","farrel","fine","galyn","gwynn","hala","hana","hava","heira","hera","here","hophe","kaala","kaela","kaen","kiasha","kilia","laela","laema","laena","laerla","laevar","lahne","lais","lana","lanae","lanil","lanis","lanna","lantha","lara","larel","lartha","larue","latha","laurel","laya","layna","ledha","lee","lei","leia","lena","lenas","lendra","leria","lessa","lesse","leth","letha","li","lia","liana","liania","lica","lihn","lila","lin","lira","lisa","litia","livren","lon","lone","lora","lorna","lossa","luna","lurie","luth","lya","lyn","lynn","lynna","lynor","lynthi","lyrra","madia","mae","malis","manda","mara","maya","medha","mere","mia","micca","mylla","myra","mythe","na","naestra","nalore","nalue","nalyn","nandra","naril","narra","nastha","nath","nee","nesia","nesra","nia","niel","niya","noa","noel","nor","nora","nys","ona","phenee","phira","pisys","qarin","qwyn","radyl","rae","raele","raera","raine","rainne","ralla","rana","ranthae","rathla","ravae","reene","rele","relle","ria","riah","riani","riara","riel","rien","rika","rila","rin","rina","rindra","riona","ris","rissa","rith","rithe","rolia","rona","ronyn","rora","rue","runia","ryl","ryll","ryn","sala","salia","sarda","saria","sario","seris","sevel","shara","shee","shera","shia","sia","sianna","star","stele","stine","sula","synora","syra","sys","tala","talia","tarzah","tha","thae","thaela","thana","thara","theris","thion","thyl","tihne","tora","trana","tria","trine","vae","vara","viel","vis","vyre","walyn","wana","waris","wyn","xaris","xipha","yana","yaries","yeth","yra","zael","zee","zenya","ziar","zira"];
  const nm5=["Ad","Ae","Ara","Bal","Bei","Bi","Bry","Cai","Car","Chae","Cra","Da","Dae","Dor","Eil","El","Ela","En","Er","Fa","Fae","Far","Fen","Gen","Gil","Glyn","Gre","Hei","Hele","Her","Hola","Ian","Iar","Ili","Ina","Jo","Kea","Kel","Key","Kris","Leo","Lia","Lora","Lu","Mag","Mia","Mira","Mor","Nae","Neri","Nor","Ola","Olo","Oma","Ori","Pa","Per","Pet","Phi","Pres","Qi","Qin","Qui","Ralo","Rava","Rey","Ro","Sar","Sha","Syl","The","Tor","Tra","Tris","Ula","Ume","Uri","Va","Val","Ven","Vir","Waes","Wran","Wyn","Wysa","Xil","Xyr","Yel","Yes","Yin","Ylla","Zin","Zum","Zyl"];
  const nm6=["balar","banise","bella","beros","can","caryn","ceran","cyne","dan","di","dithas","dove","faren","fiel","fina","fir","geiros","gella","golor","gwyn","hana","harice","hice","horn","jeon","jor","jyre","kalyn","kas","kian","krana","lamin","lana","lar","lee","len","leth","lynn","maer","maris","menor","moira","myar","mys","na","nala","nan","neiros","nelis","norin","peiros","petor","phine","phyra","qen","qirelle","quinal","ra","ralei","ran","rel","ren","ric","rie","rieth","ris","ro","rona","rora","roris","salor","sandoral","satra","stina","sys","thana","thyra","toris","tris","tumal","valur","varis","ven","vyre","warin","wenys","wraek","wynn","xalim","xidor","xina","xisys","yarus","ydark","ynore","yra","zana","zeiros","zorwyn","zumin"];
  const tp=type;
  for(i=0;i<1;i++){
    rnd3=Math.floor(Math.random()*nm5.length);
    rnd4=Math.floor(Math.random()*nm6.length);
    nameLast=nm5[rnd3]+nm6[rnd4];
    if(tp===1){
      rnd=Math.floor(Math.random()*nm3.length);
      rnd2=Math.floor(Math.random()*nm4.length);
      names=nm3[rnd]+nm4[rnd2]+" "+nameLast;
    }else{
      rnd=Math.floor(Math.random()*nm1.length);
      rnd2=Math.floor(Math.random()*nm2.length);
      names=nm1[rnd]+nm2[rnd2]+" "+nameLast;
    }
  }
  return names
}

// half orc


function half_orc(type){
  const nm1=["","","","b","br","c","cr","d","dr","g","gr","gn","h","hr","k","kr","kh","l","m","n","s","t","th","tr","thr","z"];
  const nm2=["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","a","o","o","aa","au","oa","ia","ai","uu"];
  const nm3=["br","b","d","dh","dr","dz","g","gr","gd","gh","k","kh","kt","kd","kr","lgr","ltr","ldr","lr","lkr","nd","ng","ngr","ndr","nv","r","rv","rg","rdr","st","sd","str","tr","v","zr","zz","zv","zvr"];
  const nm4=["","","","ch","d","g","k","l","ll","m","n","r","rg","rk","rm","rs","s","sh","t","th"];
  const nm3b=["b","d","dh","g","k","l","n","r","v","z"];
  const nm5=["","","","","","b","br","c","d","f","g","h","k","m","n","p","r","rh","s","sh","t","th","v","w","z"];
  const nm6=["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","a","o","o","ay","ou","ai","uo"];
  const nm7=["b","br","bl","c","cl","cr","d","dl","dr","g","gh","gr","gl","hg","hk","hr","jk","l","ljk","ll","ln","lr","lt","m","mr","mg","ml","n","ng","nl","nc","r","rg","rl","rd","s","sl","sr","t","tt","tr","v","vr","z","zr"];
  const nm8=["","","","","","","","","","","","","","","","h","l","n","sh","th","x"];
  const nm7b=["b","c","d","g","gh","l","m","n","r","s","t","v","z"];
  const nm9=["","","","","b","br","c","d","g","h","k","m","n","r","s","t","th","v","z"];
  const nm10=["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","aa","ay","ou","ai","ia","uo"];
  const nm11=["b","br","c","cl","d","dr","g","gr","gh","gl","k","kh","kt","l","lh","lgr","ll","ln","lr","lt","m","n","nd","ng","ndr","ngr","nl","r","rv","rg","rr","rs","s","ss","sl","sd","str","st","t","th","thr","v","vr","z","zr"];
  const nm12=["","","","","","","","","l","n","m","r","rs","rd","s","sh","t","th","x"];
  const nm11b=["b","c","d","g","k","l","ll","m","n","r","s","t","th","v","z"];

  const tp=type;
  for(i=0;i<10;i++){
    if(tp===1){
      nameFem();
      while(names===""){
        nameFem();
      }
    }else if(tp===2){
      nameNeu();
      while(names===""){
        nameNeu();
      }
    }else{
      nameMas();
      while(names===""){
        nameMas();
      }
    }
  }
  return names

  function nameMas(){
    nTp=Math.random()*8|0;
    rnd=Math.random()*nm1.length|0;
    rnd2=Math.random()*nm2.length|0;
    rnd5=Math.random()*nm4.length|0;
    if(nTp<2){
      while(nm1[rnd]===""){
        rnd=Math.random()*nm1.length|0;
      }
      while(nm4[rnd5]===""){
        rnd5=Math.random()*nm4.length|0;
      }
    names=nm1[rnd]+nm2[rnd2]+nm4[rnd5];
    }else{
      rnd3=Math.random()*nm3.length|0;
      rnd4=Math.random()*nm2.length|0;
      while(nm3[rnd3]===nm1[rnd]||nm3[rnd3]===nm4[rnd5]){
        rnd3=Math.random()*nm3.length|0;
      }
      if(nTp<6){
        names=nm1[rnd]+nm2[rnd2]+nm3[rnd3]+nm2[rnd4]+nm4[rnd5];
      }else{
        rnd6=Math.random()*nm3b.length|0;
        rnd7=Math.random()*nm2.length|0;
        if(nTp===6){
          names=nm1[rnd]+nm2[rnd2]+nm3b[rnd6]+nm2[rnd7]+nm3[rnd3]+nm2[rnd4]+nm4[rnd5];
        }else{
          names=nm1[rnd]+nm2[rnd2]+nm3[rnd3]+nm2[rnd4]+nm3b[rnd6]+nm2[rnd7]+nm4[rnd5];
        }
      }
    }
    testSwear(names);
  }
  function nameFem(){
    nTp=Math.random()*8|0;
    rnd=Math.random()*nm5.length|0;
    rnd2=Math.random()*nm6.length|0;
    rnd5=Math.random()*nm8.length|0;
    if(nTp<2){
      while(nm5[rnd]===""){
        rnd=Math.random()*nm5.length|0;
      }
      while(nm8[rnd5]===""){
        rnd5=Math.random()*nm8.length|0;
      }
      names=nm5[rnd]+nm6[rnd2]+nm8[rnd5];
    }else{
      rnd3=Math.random()*nm7.length|0;
      rnd4=Math.random()*nm6.length|0;
      while(nm7[rnd3]===nm5[rnd]||nm7[rnd3]===nm8[rnd5]){
        rnd3=Math.random()*nm7.length|0;
      }
      if(nTp<6){
        names=nm5[rnd]+nm6[rnd2]+nm7[rnd3]+nm6[rnd4]+nm8[rnd5];
      }else{
        rnd6=Math.random()*nm7b.length|0;rnd7=Math.random()*nm6.length|0;
        if(nTp===6){
          names=nm5[rnd]+nm6[rnd2]+nm7[rnd3]+nm6[rnd4]+nm7b[rnd6]+nm6[rnd7]+nm8[rnd5];
        }else{
            names=nm5[rnd]+nm6[rnd2]+nm7b[rnd6]+nm6[rnd7]+nm7[rnd3]+nm6[rnd4]+nm8[rnd5];
          }
      }
    }
    testSwear(names);
  }

  function nameNeu(){
    nTp=Math.random()*8|0;
    rnd=Math.random()*nm9.length|0;
    rnd2=Math.random()*nm10.length|0;
    rnd5=Math.random()*nm12.length|0;
    if(nTp<2){
      while(nm9[rnd]===""){
      rnd=Math.random()*nm9.length|0;
      }
      while(nm12[rnd5]===""){
        rnd5=Math.random()*nm12.length|0;
      }
      names=nm9[rnd]+nm10[rnd2]+nm12[rnd5];
    }else{
      rnd3=Math.random()*nm11.length|0;
      rnd4=Math.random()*nm10.length|0;
      while(nm11[rnd3]===nm9[rnd]||nm11[rnd3]===nm12[rnd5]){
        rnd3=Math.random()*nm11.length|0;
      }
      if(nTp<6){
        names=nm9[rnd]+nm10[rnd2]+nm11[rnd3]+nm10[rnd4]+nm12[rnd5];
      }else{
          rnd6=Math.random()*nm11b.length|0;
          rnd7=Math.random()*nm10.length|0;
          if(nTp===6){
          names=nm9[rnd]+nm10[rnd2]+nm11b[rnd6]+nm10[rnd7]+nm11[rnd3]+nm10[rnd4]+nm12[rnd5];
        }else{
          names=nm9[rnd]+nm10[rnd2]+nm11[rnd3]+nm10[rnd4]+nm11b[rnd6]+nm10[rnd7]+nm12[rnd5];
        }
      }
    }
    testSwear(names);
  }
}

const gnome = {}
gnome.name = function (type){
  const nm1=["b","c","cl","d","fr","g","gn","h","j","kn","kl","l","m","n","p","r","sc","sl","sn","sm","t","w","z"];
  const nm2=["a","e","i","o","u","a","e","i","a","e","i","o","u","a","e","i","a","e","i","o","u","a","e","i","a","e","i","o","u","a","e","i","a","e","i","o","u","a","e","i","y","y","y","oo","ee","aa","ie","ai"];
  const nm3=["bbn","bk","bn","bbr","db","dd","ddw","dn","ddn","gn","gb","k","km","kn","kp","kw","lk","lb","llb","lv","mb","mj","mm","mp","mt","mw","mz","md","nb","nj","nk","nkk","nsb","nsm","nsn","nz","nzb","ngn","pn","pp","pr","r","rk","rb","rw","v"];
  const nm4=["c","ck","g","m","p","r","rt","ss","st","t"];
  const nm5=["","","","","bl","c","cl","f","fl","fn","g","gl","gn","h","l","m","n","p","ph","sh","sl","sn","sm","t","th","w"];
  const nm6=["bbl","bbn","bn","bl","db","dd","ddl","dl","dw","ddw","dn","ddn","gn","gb","gl","km","kn","kw","lk","lm","lw","lb","llb","llm","ln","lln","lv","mb","mm","mw","md","nb","nk","nkl","nsm","nsn","ngl","ngn","pn","pp","pw","pr","r","rb","rw","v"];
  const nm7=["","","","l","ll","m","n","p","r","s","ss","t","th"];
  const nm8=["","","","","b","bl","c","cl","d","f","fl","fn","g","gl","gn","h","j","kl","kn","l","m","n","p","ph","r","sc","sh","sl","sn","sm","t","th","w","z"];
  const nm9=["bbl","bbn","bk","bn","bl","bbr","db","dd","ddl","dl","dw","ddw","dn","ddn","gn","gb","gl","k","kl","km","kn","kp","kw","lk","lm","lw","lb","llb","llm","ln","lln","lv","mb","mj","mm","mp","mt","mw","mz","md","nb","nj","nk","nkk","nkl","nsb","nsm","nsn","nz","nzb","ngl","ngn","pn","pp","pw","pr","r","rk","rb","rw","v"];
  const nm10=["","","","","c","ck","g","l","ll","m","n","p","r","rt","s","ss","st","t"];
  const nm11=["b","c","d","g","k","m","n","r","v"];
  const nm12=["b","d","f","h","l","m","n","s","v","w"];
  const nm13=["b","c","d","f","g","h","k","l","m","n","r","s","v","w"];

  const tp=type;

  for(i=0;i<1;i++){
    switch (type) {
      case 'female':
        nMs = ""
        while(nMs===""){
          rnd=Math.random()*nm5.length|0
          rnd2=Math.random()*nm2.length|0
          rnd3=Math.random()*nm6.length|0
          rnd4=Math.random()*nm2.length|0
          rnd5=Math.random()*nm7.length|0
          if(i<5){
            while(rnd<4){
              rnd=Math.random()*nm5.length|0;
            }
            nMs=nm5[rnd]+nm2[rnd2]+nm6[rnd3]+nm2[rnd4]+nm7[rnd5];
          }else if(i<7){
            rnd6=Math.random()*nm12.length|0
            rnd7=Math.random()*nm2.length|0
            nMs=nm5[rnd]+nm2[rnd2]+nm6[rnd3]+nm2[rnd4]+nm12[rnd6]+nm2[rnd7]+nm7[rnd5];
          }else{
            rnd6=Math.random()*nm12.length|0
            rnd7=Math.random()*nm2.length|0
            nMs=nm5[rnd]+nm2[rnd2]+nm12[rnd6]+nm2[rnd7]+nm6[rnd3]+nm2[rnd4]+nm7[rnd5];
          }
          testSwear(nMs);
        }

        break;
      case 'neutral':
        nMs = ""
        while(nMs===""){
          rnd=Math.random()*nm8.length|0
          rnd2=Math.random()*nm2.length|0
          rnd3=Math.random()*nm9.length|0
          rnd4=Math.random()*nm2.length|0
          rnd5=Math.random()*nm10.length|0
          if(i<5){
            while(rnd<4){rnd=Math.random()*nm8.length|0;
            }
            nMs=nm8[rnd]+nm2[rnd2]+nm9[rnd3]+nm2[rnd4]+nm10[rnd5];
          }else if(i<7){
            rnd6=Math.random()*nm13.length|0
            rnd7=Math.random()*nm2.length|0
            nMs=nm8[rnd]+nm2[rnd2]+nm9[rnd3]+nm2[rnd4]+nm13[rnd6]+nm2[rnd7]+nm10[rnd5]
          }else{
            rnd6=Math.random()*nm12.length|0
            rnd7=Math.random()*nm2.length|0
            nMs=nm8[rnd]+nm2[rnd2]+nm12[rnd6]+nm2[rnd7]+nm9[rnd3]+nm2[rnd4]+nm10[rnd5];
          }
          testSwear(nMs);
        }

        break;
      case 'male':
        nMs = ""
        while(nMs===""){
          rnd=Math.random()*nm1.length|0;
          rnd2=Math.random()*nm2.length|0;
          rnd3=Math.random()*nm3.length|0;
          rnd4=Math.random()*nm2.length|0;
          rnd5=Math.random()*nm4.length|0;
          if(i<5){
            nMs=nm1[rnd]+nm2[rnd2]+nm3[rnd3]+nm2[rnd4]+nm4[rnd5];
          }else if(i<7){
            rnd6=Math.random()*nm11.length|0;
            rnd7=Math.random()*nm2.length|0;
            nMs=nm1[rnd]+nm2[rnd2]+nm3[rnd3]+nm2[rnd4]+nm11[rnd6]+nm2[rnd7]+nm4[rnd5];
          }else{
            rnd6=Math.random()*nm12.length|0;
            rnd7=Math.random()*nm2.length|0;
            nMs=nm1[rnd]+nm2[rnd2]+nm12[rnd6]+nm2[rnd7]+nm3[rnd3]+nm2[rnd4]+nm4[rnd5];
          }
          testSwear(nMs);
        }

        break;
      default:
        break;
    }
    rnd2=Math.random()*nm3.length|0;
    return nMs

  }
}
gnome.male = function () {return this.name(male)}
gnome.female = function () {return this.name(female)}
gnome.neutral = function () {return this.name(neutral)}

const dwarf = {}
dwarf.name = function (type){
  const nm1=["A","Ara","Alfo","Bari","Be","Bo","Bha","Bu","Ba","Bra","Bro","Brou","Bru","Da","Dalo","Dare","De","Dhu","Dho","Do","Dora","Dwo","Dou","Duri","Du","El","Eri","Fi","Fo","Fo","Ga","Gi","Gla","Glori","Go","Gra","Gro","Groo","Gru","Grou","Ha","Ha","He","He","Ho","Hou","Hu","Ja","Jo","Ka","Khe","Khu","Khou","Ko","Ku","Ki","Kra","Kro","Lo","Lu","Lo","Ma","Mo","Mu","Na","No","Nu","Nora","Nura","Ne","No","O","Ori","Rei","Ra","Ru","Sa","Si","Sna","Sko","Ska","Stro","The","Thi","Tho","Thra","Tha","Tore","Tha","Thra","Thro","Thu","Tu","U","Umi","Va","Vo","Whu","We","Wera","Yu","Yo","Ya"];
  const nm2=["b","br","dd","d","dr","dm","dgr","f","fr","gr","gg","gh","gn","k","kh","kgr","kdr","kk","kh","kr","l","lg","lgr","ldr","lm","md","mn","m","mm","mr","n","nd","ndr","ngr","nm","r","rr","rgr","rdr","rb","rg","rn","rh","rd","rm","rs","rf","s","ss","sdr","sgr","st","str","t","tr","tm","th","tdr","tgr","v","vr","z","zm","zn","zz"];
  const nm3=["ac","aic","aec","ec","eac","ic","oc","oic","ouc","ack","aeck","eck","eack","ick","ock","oick","ouck","uck","uc","ad","aed","ed","ead","id","od","oid","oud","ud","uid","ag","aeg","eg","eag","ig","og","oug","ug","ak","aek","ek","eak","ik","ok","oki","uk","uik","ouk","uki","al","ael","el","eal","il","ol","oli","olin","olim","olir","oul","ul","uli","ulim","ulir","uil","am","ami","amli","amri","aem","em","eam","im","om","omli","omri","omi","oum","um","umi","umir","umin","umli","umlir","umlin","umri","an","aen","en","ean","in","on","onlim","onlir","oun","un","unli","unri","ar","arlum","arlun","arlug","arlig","aer","er","erlum","erlun","erlug","erlig","ear","ir","irlum","irlun","or","orli","orlim","orlum","orlun","orlig","orlug","oir","our","ur","uri","urim","urum","us","as","ous","aes","eas","at","atir","atum","atin","aet","et","eat","it","ot","otir","atin","otum","out","ut","ath","aeth","eth","eath","ith","oth","outh","uth"];
  const nm4=["A","Ara","Alfo","Bari","Be","Bo","Bha","Bu","Ba","Bra","Bro","Brou","Bru","Da","Dalo","Dare","De","Dhu","Dho","Do","Dora","Dwo","Dou","Duri","Du","El","Eri","Fi","Fo","Fo","Ga","Gi","Gla","Glori","Go","Gra","Gro","Groo","Gru","Grou","Ha","Ha","He","He","Ho","Hou","Hu","Ja","Jo","Ka","Khe","Khu","Khou","Ko","Ku","Ki","Kra","Kro","Lo","Lu","Lo","Ma","Mo","Mu","Na","No","Nu","Nora","Nura","Ne","No","O","Ori","Rei","Ra","Ru","Sa","Si","Sna","Sko","Ska","Stro","The","Thi","Tho","Thra","Tha","Tore","Tha","Thra","Thro","Thu","Tu","U","Umi","Va","Vo","Whu","We","Wera","Yu","Yo","Ya"];
  const nm5=["b","br","dd","d","dr","dm","dgr","dw","f","fr","gr","gg","gh","gn","k","kh","kgr","kdr","kk","kw","kh","kr","l","lg","lgr","ldr","lm","md","mw","mn","m","mm","mr","n","nd","ndr","nw","ngr","nm","r","rr","rgr","rdr","rb","rg","rn","rh","rd","rm","rs","rf","s","ss","sdr","sgr","st","str","t","tr","tm","th","tdr","tgr","v","vr","w","z","zm","zn","zz"];
  const nm6=["abelle","aebelle","ebelle","ibelle","obelle","ubelle","alyn","aelyn","elyn","ealyn","ilyn","olyn","oulyn","ulyn","uilyn","alynn","aelynn","elynn","ealynn","ilynn","olynn","oulynn","ulynn","uilynn","abelyn","aebelyn","ebelyn","eabelyn","ibelyn","obelyn","oubelyn","ubelyn","uibelyn","abelynn","aebelynn","ebelynn","eabelynn","ibelynn","obelynn","oubelynn","ubelynn","uibelyn","anelyn","aenelyn","enelyn","eanelyn","inelyn","onelyn","ounelyn","unelyn","uinelyn","anelynn","aenelynn","enelynn","eanelynn","inelynn","onelynn","ounelynn","unelynn","uinelynn","agit","aegit","egit","eagit","igit","ogit","ugit","uigit","agith","aegith","egith","eagith","igith","ogith","ugith","uigith","irgit","irgith","uirgit","uirgith","airgit","airgith","arika","aerika","erika","earika","irika","orika","urika","atain","aetain","etain","eatain","itain","otain","utain","ataine","aetaine","etaine","eataine","itaine","otaine","utaine","ahilda","aehilda","ehilda","eahilda","ohilda","ihilda","uhilda","ahulda","aehulda","ehulda","eahulda","ohulda","ihulda","uhulda","agar","aegar","egar","eagar","igar","ogar","ugar","agaer","egaer","igaer","ogaer","ugaer","atrud","aetrud","etrud","eatrud","itrud","otrud","utrud","atrude","aetrude","etrude","eatrude","itrude","otrude","utrude","ada","aeda","eda","eada","ida","oda","uda","alda","aelda","elda","ealda","ilda","olda","oulda","ulda","alin","aelin","elin","ealin","ilin","olin","oulin","ulin","aline","aeline","eline","ealine","iline","oline","ouline","uline","atalin","aetalin","etalin","eatalin","italin","otalin","outalin","utalin","atalyn","aetalyn","etalyn","eatalyn","italyn","otalyn","outalyn","utalyn","atelin","aetelin","etelin","eatelin","itelin","otelin","outelin","utelin","atelyn","aetelyn","etelyn","eatelyn","itelyn","otelyn","outelyn","utelyn","angrid","aengrid","engrid","eangrid","ingrid","ongrid","oungrid","ungrid","ani","aeni","eni","eani","ini","oni","ouni","uni","ana","aena","ena","eana","ina","ona","ouna","una","alsia","aelsia","elsia","ealsia","ilsia","olsia","oulsia","ulsia","ala","aela","ela","eala","ila","ola","oula","ula","abella","aebella","ebella","eabella","ibella","obella","oubella","ubella","abela","aebela","ebela","eabela","ibela","obela","oubela","ubela","astr","aestr","estr","eastr","istr","ostr","oustr","ustr","abo","aebo","ebo","eabo","ibo","obo","oubo","ubo","abena","aebena","ebena","eabena","ibena","obena","oubena","ubena","abera","aebera","ebera","eabera","ibera","obera","oubera","ubera","adeth","aedeth","edeth","eadeth","ideth","odeth","oudeth","udeth","adrid","aedrid","edrid","eadrid","idrid","odrid","oudrid","udrid","abyrn","aebyrn","ebyrn","eabyrn","ibyrn","obyrn","oubyrn","ubyrn","agrett","aegrett","egrett","eagrett","igrett","ogrett","ougrett","ugrett","agret","aegret","egret","eagret","igret","ogret","ougret","ugret","asli","aesli","esli","easli","isli","osli","ousli","usli","ahilda","aehilda","ehilda","eahilda","ihilda","ohilda","ouhilda","uhilda","ahilde","aehilde","ehilde","eahilde","ihilde","ohilde","ouhilde","uhilde","aginn","aeginn","eginn","eaginn","iginn","oginn","ouginn","uginn","amora","aemora","emora","eamora","imora","omora","oumora","umora","alydd","aelydd","elydd","ealydd","ilydd","olydd","oulydd","ulydd","akara","aekara","ekara","eakara","ikara","okara","oukara","ukara","aren","aeren","eren","earen","iren","oren","ouren","uren","arra","aerra","erra","earra","irra","orra","ourra","urra","are","aere","ere","eare","ire","ore","oure","ure","awynn","aewynn","ewynn","eawynn","iwynn","owynn","ouwynn","uwynn","atryd","aetryd","etryd","eatryd","itryd","otryd","outryd","utryd","athra","aethra","ethra","eathra","ithra","othra","outhra","uthra","aserd","aeserd","eserd","easerd","iserd","oserd","ouserd","userd","tryd"];
  const nm7=["Ale","Amber","Anvil","Ash","Axe","Barbed","Barrel","Battle","Beast","Bone","Beryl","Bitter","Black","Blazing","Blessed","Blood","Blunt","Bone","Bottle","Boulder","Brew","Brick","Bright","Bristle","Broad","Bronze","Brown","Cave","Cask","Chain","Crag","Chaos","Coal","Coin","Copper","Dark","Deep","Dim","Dragon","Drake","Dusk","Earth","Ember","Fiery","Flint","Flask","Flint","Flat","Forge","Frost","Giant","Gold","Golden","Granite","Gravel","Gray","Great","Grey","Grim","Grumble","Hammer","Hard","Heavy","Hill","Honor","Horn","Ice","Ingot","Iron","Jade","Keg","Kobold","Krag","Lead","Large","Lava","Leather","Light","Long","Marble","Magma","Merry","Metal","Mithril","Mine","Mountain","Mud","Night","Noble","Oak","Oaken","Onyx","Opal","Ore","Orc","Plate","Pebble","Red","Rune","Ruby","Sapphire","Shadow","Shatter","Smelt","Silver","Snow","Steel","Storm","Strong","Troll","Thunder","Twilight","Treasure","Under","War","Warm","Whit","Wind","Wold","Wraith","Wyvern"];
  const nm8=["arm","armour","axe","back","bane","beard","basher","belly","belt","bender","blade","born","bow","braid","braids","branch","brand","breaker","brew","brewer","bringer","brow","buckle","buster","chest","chin","cloak","coat","delver","digger","foot","fall","fury","finger","flayer","feet","forge","forged","grog","grip","guard","gut","granite","hand","head","heart","helm","hide","hood","horn","jaw","mace","mail","maker","mantle","mane","master","maul","miner","pike","rock","river","shield","shaper","sword","shoulder","stone","spine","sunder","thane","toe","tank","view"];

  for(i=0;i<1;i++){

    rnd4=Math.floor(Math.random()*nm7.length);
    rnd5=Math.floor(Math.random()*nm8.length)
    switch (type) {
      case 'female':
        rnd2=Math.floor(Math.random()*nm5.length)
        rnd3=Math.floor(Math.random()*nm6.length)
        rnd=Math.floor(Math.random()*nm4.length)
        names=nm4[rnd]+nm5[rnd2]+nm6[rnd3]+" "+nm7[rnd4]+nm8[rnd5]

        break;
      case 'male':
        rnd2=Math.floor(Math.random()*nm2.length)
        rnd3=Math.floor(Math.random()*nm3.length)
        rnd=Math.floor(Math.random()*nm1.length)
        names=nm1[rnd]+nm2[rnd2]+nm3[rnd3]+" "+nm7[rnd4]+nm8[rnd5]

        break;
      default:
        // statements_def
        break;
    }
  }
  return names
}
dwarf.male = function () {return this.name(male)}
dwarf.female = function () {return this.name(female)}

const halfling = {}
halfling.name = function (type){
  const nm1=["An","Ar","Bar","Bel","Con","Cor","Dan","Dav","El","Er","Fal","Fin","Flyn","Gar","Go","Hal","Hor","Ido","Ira","Jan","Jo","Kas","Kor","La","Lin","Mar","Mer","Ne","Nor","Ori","Os","Pan","Per","Pim","Quin","Quo","Ri","Ric","San","Shar","Tar","Te","Ul","Uri","Val","Vin","Wen","Wil","Xan","Xo","Yar","Yen","Zal","Zen"];
  const nm2=["ace","amin","bin","bul","dak","dal","der","don","emin","eon","fer","fire","gin","hace","horn","kas","kin","lan","los","min","mo","nad","nan","ner","orin","os","pher","pos","ras","ret","ric","rich","rin","ry","ser","sire","ster","ton","tran","umo","ver","vias","von","wan","wrick","yas","yver","zin","zor","zu"];
  const nm3=["An","Ari","Bel","Bre","Cal","Chen","Dar","Dia","Ei","Eo","Eli","Era","Fay","Fen","Fro","Gel","Gra","Ha","Hil","Ida","Isa","Jay","Jil","Kel","Kith","Le","Lid","Mae","Mal","Mar","Ne","Ned","Odi","Ora","Pae","Pru","Qi","Qu","Ri","Ros","Sa","Shae","Syl","Tham","Ther","Tryn","Una","Uvi","Va","Ver","Wel","Wi","Xan","Xi","Yes","Yo","Zef","Zen"];
  const nm4=["alyn","ara","brix","byn","caryn","cey","da","dove","drey","elle","eni","fice","fira","grace","gwen","haly","jen","kath","kis","leigh","la","lie","lile","lienne","lyse","mia","mita","ne","na","ni","nys","ola","ora","phina","prys","rana","ree","ri","ris","sica","sira","sys","tina","trix","ula","vira","vyre","wyn","wyse","yola","yra","zana","zira"];
  const nm12=["amber","apple","autumn","barley","big","boulder","bramble","bright","bronze","brush","cherry","cinder","clear","cloud","common","copper","deep","dust","earth","elder","ember","fast","fat","fern","flint","fog","fore","free","glen","glow","gold","good","grand","grass","great","green","haven","heart","high","hill","hog","humble","keen","laughing","lea","leaf","light","little","lone","long","lunar","marble","mild","mist","moon","moss","night","nimble","proud","quick","raven","reed","river","rose","rumble","shadow","silent","silver","smooth","soft","spring","still","stone","stout","strong","summer","sun","swift","tall","tea","ten","thistle","thorn","toss","true","twilight","under","warm","whisper","wild","wise"];
  const nm13=["ace","barrel","beam","belly","berry","bloom","blossom","bluff","bottle","bough","brace","braid","branch","brand","bridge","brook","brush","cheeks","cloak","cobble","creek","crest","dance","dancer","dew","dream","earth","eye","eyes","feet","fellow","finger","fingers","flow","flower","foot","found","gather","glide","grove","hand","hands","hare","heart","hill","hollow","kettle","lade","leaf","man","mane","mantle","meadow","moon","mouse","pot","rabbit","seeker","shadow","shine","sky","song","spark","spell","spirit","step","stride","sun","surge","top","topple","vale","water","whistle","willow","wind","wood","woods"];
  const tp=type;

  for(i=0;i<1;i++){
    if(tp===1){
      nameFem();
      while(nMs===""){
        nameFem();
      }
    }else{
      nameMas();
      while(nMs===""){
        nameMas();
      }
    }
    rnd=Math.random()*nm12.length|0
    rnd2=Math.random()*nm13.length|0
    while(nm12[rnd]===nm13[rnd2]){
      rnd2=Math.random()*nm13.length|0
    }
    nMs=nMs+" "+nm12[rnd]+nm13[rnd2]
    nm12.splice(rnd,1)
    nm13.splice(rnd2,1)
    name = nMs
  }
  return name


  function nameFem(){
    rnd=Math.floor(Math.random()*nm3.length);
    rnd2=Math.floor(Math.random()*nm4.length);
    nMs=nm3[rnd]+nm4[rnd2];
  }
  function nameMas(){
    rnd=Math.floor(Math.random()*nm1.length);
    rnd2=Math.floor(Math.random()*nm2.length);
    nMs=nm1[rnd]+nm2[rnd2];
    testSwear(nMs);
  }
}
halfling.male = function () {return this.name(male)}
halfling.female = function () {return this.name(female)}



console.log(
`Anão: ${dwarf.male()}
Elfo: ${elf.male()}
Gnomo: ${gnome.male()}
Goblin: ${goblin.male()}
Halfling: ${halfling.male()}
Meio-elfo: ${half_elf(0)}
Meio-orc: ${half_orc(0)}
`
)
const ancestry = {}
ancestry.print = function (arg) {
  switch (arg) {
    case 'male':
      console.log('male')
      // statements_1
      break;
    case 'female':
      console.log('female')
      // statements_1
      break;
    default:
      // statements_def
      break;
  }
}
ancestry.male = function () {this.print(male)}
ancestry.female = function () {this.print(female)}

// {raça}
// Nasci {local_de_nascimento()}
// Cresci {lar_de_infancia(lar_inf)}
// Tive um estilo de vida familiar {estilo_de_vida_familiar()[0]}
// {memorias()}
// Sou um {ant}, {mot}
// {classe}, {subclasse}

// Olhos: {olhos}
// Orelhas: {orelhas}
// Boca: {boca}
// Nariz: {nariz}
// Queixo: {queixo}
// Cabelo: {cabelo}
// Tracos faciais: {tracos_faciais}

// Altura: {altura}
// Corpo: {corpo}
// Mãos: {maos}
// Cicatriz: {cicatriz}
// Tatuagem: {tatuagem}
// Joias: {joias}
// Roupas: {roupas}

// Quando calmo: {quando_calmo}
// Quando estressado: {quando_estressado}
// Humor: {humor}
// Fé: {fe}
// Falha: {falha}


