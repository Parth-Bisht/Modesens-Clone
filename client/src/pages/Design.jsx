import React from "react";
import Styles from "../components/Design/Design.module.css";
import { AiOutlineHeart } from "react-icons/ai";
const Design = () => {
  const Adata = [
    "A",
    "A & M",
    "A A K S",
    "A BATHING APE",
    "A BETTER FEELING",
    "A BY ANABELLE",
    "A CHEVAL PAMPA",
    "A D SUTTON & SONS",
    "A DB",
    "A DICIANNOVENENTITRE",
    "A GOLD E",
    "A HUMMING WAY",
    "A KIND OF GUISE",
    "A KJAERBEDE",
    "À LA GARÇONNE",
    "A LA RUSSE",
    "A MERE CO",
    "A METAL STORY",
    "A MOOD",
    "A NEW YORK THINGS",
    "A PAIR OF SHOES",
    "A PART OF THE ART",
    "A PEA IN THE POD",
    "A PEACE TREATY",
    "A PERFECT NOMAD",
    "A POSTCARD FROM BRIGHTON",
    "A PUNTO B",
    "A SHIRT THING",
    "A SURVRE",
    "A TROIS",
    "A WEATHERD PENNY",
    "A&M COLLECTION",

    "ABARCA",
    "ABATI",
    "ABERCROMBIE",
    "ABERCROMBIE & FITCH",
    "ABITART VANESSA FOGLIA",
    "ABITI LADIESWEAR",
    "ABLE SKINCARE",
    "ABOUND",
    "ABOUT",
    "ABOUT ARIANNE",
    "ABOUT US",
    "ABRA",
    "ABRAMS",
    "ABRAND",
    "ABRO",
    "ABS BY ALLEN SCHWARTZ",
    "ABSENCE OF COLOUR",
    "ABSENCE OF PAPER",
    "ABSENCE OF PAPER X ROY LUWOLT",
    "ABSIDEM",
    "ABSINTHE CULTURE",
    "ABSOLUT CASHMERE",
    "ABSOLUTE APPAREL",
    "ABYSS & HABIDECOR",
    "ABYSSE",
    "ACACIA",
    "ACACIA SWIMWEAR",
    "ACAI",
    "ACALA",
    "ACANTHUS",
    "ACBC",
    "ACCA KAPPA",
    "ACCESS",
    "ACCESS FASHION",
    "ACCESSORIES",
    "ACCESSORIZE",
    "ACCESSORY ST.",
    "ACCESSORY STREET",
    "ACCHITTO",
    "ACCUÀ BY PSR",
    "ACCURIST",
    "ACE & JIG",
    "ACE AND JIG",
    "ACHEVAL PAMPA",
    "ACIDE",
    "ACK",
    "ACL",
    "ACLER",
    "ACLYS",
    "ACNE PAPER",
    "ACNE STUDIOS",
    "ACNEASE",
    "ACNESTUDIOS",
    "ACOLÉ",
    "ACORELLE",
    "ACORN",
    "ACOTÉ",
    "ACQUA DI PARMA",
    "ACQUA DI STRESSA",
    "ACQUAVERDE",
    "ACROBATS OF GOD",
    "ACRONYM",
    "ACS CALZATURE ITALIANE",
    "ACT N1",
    "ACT NDEGREE1",
    "ACT N°1",
    "ACT OF BEING",
    "ACT+ACRE",
    "ACTIONHEAT",
    "ACTIVIST",
    "ACTIVOLOGY",
    "ACTUALEE",
    "ACYNETIC",
    "AD MILANO",
    "AD.SIDE",
    "ADA",
    "ADA COLLECTION",
    "ADA SORRENTINO",
    "ADAM FOSTER FINE JEWELRY",
    "ADAM LEVINE",
    "ADAM LIPPES",

    "ADAM SELMAN SPORT",
    "ADAM TUCKER",
    "ADAMANEVEN",
    "ADAMO",
    "ADAPTATION",
    "ADARA WOMEN",
    "ADAY",
    "ADD",
    "ADDICTED BEAUTY",
    "ADDICTION",
    "ADDICTION NOUVELLE LINGERIE",
    "ADDISON BAY",
    "ADDITION STUDIO",
    "ADE SHOES",
    "ADE",
    "ADEAM",
    "ADEE KAYE",
    "ADEELA SALEHJEE",
    "ADELAIDE CARTA",
    "ADELE DEZOTTI",
    "ADELE FADO QUEEN",
    "ADELYN RAE",
    "ADER",
    "ADER ERROR",
    "ADESI CASHMERE",
    "ADESSE NEW YORK",
    "ADHOC",
  ];

  const Bdata = [
    "B & ME",
    "B BRENTANO",
    "B BRIAN ATWOOD",
    "B COLLECTION BY BOBEAU",
    "B COLLECTION BY BOBEAU CURVY",
    "B DARLIN",
    "B FYNE",

    "B LOVE",
    "B NEW YORK",
    "B O C",
    "B O C BORN CONCEPT",
    "B SIDES",
    "B STORE",
    "B SWIM",
    "B YOGA",
    "BMOR",
    "BS",
    "BESSENTIAL",
    "B AB",
    "B+D",

    "B-LUSH",
    "B-SIX",
    "B-TAL",
    "B. BELT",
    "B. IMMAGINE",
    "B. KAMINS",
    "B. MAKOWSKY",
    "B.A. PRINTED ARTWORKS",
    "B.BEN",
    "B.D.BAGGIES",
    "B.O.C.",
    "B.O.C. BY BORN",
    "B.O.G. COLLECTIVE",
    "B.TAN",
    "B.TEMPTD",
    "B.TEMPTD BY WACOAL",
    "B.YOUNG",
    "B.YU",
    "B2",
    "B3D®",
    "BA&SH",
    "BA&SH X JAY AHR",
    "BAACAL",
    "BAACAL, PLUS SIZE",
    "BABALOO JEWELRY",
    "BABE ACTIVEWEAR",
    "BABE AND TESS",
    "BABE UNIVERSE",
    "BABEL",
    "BABIATORS",
    "BABO BOTANICALS",
    "BABOR",
    "BABY BLING",
    "BABY DIOR",
    "BABY FOOT",
    "BABY PHAT",
    "BABY QUASAR",
    "BABY-G",
    "BABYLISS",
    "BABYLISS FOR MEN",
    "BABYLISS PRO",
    "BABYLISSMEN",
    "BABYLON",
    "BABYWALKER",
    "BACCARAT",
    "BACHCA PARIS",
    "BACI & ABBRACCI",
    "BACK WHEN",
    "BACKES & STRAUSS",
    "BACKGROUND",
    "BACKSTAGE",
    "BACON",
    "BACON CLOTHING",
    "BACTÁ DEI TOI",
    "BAD DEAL",
    "BAD GUYS THREADS",
    "BAD QUEEN",
    "BAD SPIRIT",
    "BADGER SPORTSWEAR",
    "BADGLEY MISCHKA",
    "BADGLEY MISCHKA COUTURE",
    "BADGLEY MISCHKA KIDS",
    "BAEA",
    "BAEO BABY",
    "BAFFIN",
    "BAGATELLE",
    "BAGATELLE NYC",
    "BAGATELLE PLUS",
    "BAGATELLE.CITY",
    "BAGATELLE.NYC",
    "BAGATT",
  ];

  const Cdata = [
    "C",
    "C& M",
    "CCK S",
    "CBATHING APE",
    "CBETTER FEELING",
    "CBY ANABELLE",
    "CCHEVAL PAMPA",
    "CD SUTTON & SONS",
    "CDB",
    "CDICIANNOVENENTITRE",
    "CGOLD E",
    "CHUMMING WAY",
    "CKIND OF GUISE",
    "CKJAERBEDE",
    "À LA GARÇONNE",
    "CLA RUSSE",
    "CMERE CO",
    "CMETAL STORY",
    "CMOOD",
    "CNEW YORK THINGS",
    "CPAIR OF SHOES",
    "CPART OF THE ART",
    "CPEA IN THE POD",
    "CPEACE TREATY",
    "CPERFECT NOMAD",
    "CPOSTCARD FROM BRIGHTON",
    "CPUNTO B",
    "CSHIRT THING",
    "CSURVRE",
    "CTROIS",
    "CWEATHERD PENNY",
    "C&M COLLECTION",
    "CBARCA",
    "CBATI",
    "CBERCROMBIE",
    "CBERCROMBIE & FITCH",
    "CBITART VANESSA FOGLIA",
    "CBITI LADIESWEAR",
    "CBLE SKINCARE",
    "CBOUND",
    "CBOUT",
    "CBOUT ARIANNE",
    "CBOUT US",
    "CBRA",
    "CBRAMS",
    "CBRAND",
    "CBRO",
    "CBS BY ALLEN SCHWARTZ",
    "CBSENCE OF COLOUR",
    "CBSENCE OF PAPER",
    "CBSENCE OF PAPER X ROY LUWOLT",
    "CBSIDEM",
    "CBSINTHE CULTURE",
    "CBSOLUT CASHMERE",
    "CBSOLUTE APPAREL",
    "CBYSS & HABIDECOR",
    "CBYSSE",
    "CCACIA",
    "CCACIA SWIMWEAR",
    "CCAI",
    "CCALA",
    "CCANTHUS",
    "CCBC",
    "CCCA KAPPA",
    "CCCESS",
    "CCCESS FASHION",
    "CCCESSORIES",
    "CCCESSORIZE",
    "CCCESSORY ST.",
    "CCCESSORY STREET",
    "CCCHITTO",
    "CCCUÀ BY PSR",
    "CCCURIST",
    "CCE & JIG",
    "CCE AND JIG",
    "CCHEVAL PAMPA",
    "CCIDE",
    "CCK",
    "CCL",
    "CCLER",
    "CCLYS",
    "CCNE PAPER",
    "CCNE STUDIOS",
    "CCNEASE",
    "CCNESTUDIOS",
    "CCOLÉ",
    "CCORELLE",
    "CCORN",
    "CCOTÉ",
    "CCQUA DI PARMA",
    "CCQUA DI STRESSA",
    "CCQUAVERDE",
    "CCROBATS OF GOD",
    "CCRONYM",
    "CCS CALZATURE ITALIANE",
    "CCT N1",
    "CCT NDEGREE1",
    "CCT N°1",
    "CCT OF BEING",
    "CCT+ACRE",
    "CCTIONHEAT",
    "CCTIVIST",
    "CCTIVOLOGY",
    "CCTUALEE",
    "CCYNETIC",
    "CD MILANO",
    "CD.SIDE",
    "CDA",
    "CDA COLLECTION",
    "CDA SORRENTINO",
    "CDAM FOSTER FINE JEWELRY",
    "CDAM LEVINE",
    "CDAM LIPPES",
    "CDAM SELMAN SPORT",
    "CDAM TUCKER",
    "CDAMANEVEN",
    "CDAMO",
    "CDAPTATION",
    "CDARA WOMEN",
    "CDAY",
    "CDD",
    "CDDICTED BEAUTY",
    "CDDICTION",
    "CDDICTION NOUVELLE LINGERIE",
    "CDDISON BAY",
    "CDDITION STUDIO",
    "CDE SHOES",
    "CDE",
    "CDEAM",
    "CDEE KAYE",
    "CDEELA SALEHJEE",
    "CDELAIDE CARTA",
    "CDELE DEZOTTI",
    "CDELE FADO QUEEN",
    "CDELYN RAE",
    "CDER",
    "CDER ERROR",
    "CDESI CASHMERE",
    "CDESSE NEW YORK",
    "CDHOC",
  ];
  const Ddata = [
    "D",
    "D& M",
    "DDK S",
    "DBATHING APE",
    "DBETTER FEELING",
    "DBY ANABELLE",
    "DCHEVAL PAMPA",
    "DD SUTTON & SONS",
    "DDB",
    "DDICIANNOVENENTITRE",
    "DGOLD E",
    "DHUMMING WAY",
    "DKIND OF GUISE",
    "DKJAERBEDE",
    "À LA GARÇONNE",
    "DLA RUSSE",
    "DMERE CO",
    "DMETAL STORY",
    "DMOOD",
    "DNEW YORK THINGS",
    "DPAIR OF SHOES",
    "DPART OF THE ART",
    "DPEA IN THE POD",
    "DPEACE TREATY",
    "DPERFECT NOMAD",
    "DPOSTCARD FROM BRIGHTON",
    "DPUNTO B",
    "DSHIRT THING",
    "DSURVRE",
    "DTROIS",
    "DWEATHERD PENNY",
    "D&M COLLECTION",
    "DBARCA",
    "DBATI",
    "DBERCROMBIE",
    "DBERCROMBIE & FITCH",
    "DBITART VANESSA FOGLIA",
    "DBITI LADIESWEAR",
    "DBLE SKINCARE",
    "DBOUND",
    "DBOUT",
    "DBOUT ARIANNE",
    "DBOUT US",
    "DBRA",
    "DBRAMS",
    "DBRAND",
    "DBRO",
    "DBS BY ALLEN SCHWARTZ",
    "DBSENCE OF COLOUR",
    "DBSENCE OF PAPER",
    "DBSENCE OF PAPER X ROY LUWOLT",
    "DBSIDEM",
    "DBSINTHE CULTURE",
    "DBSOLUT CASHMERE",
    "DBSOLUTE APPAREL",
    "DBYSS & HABIDECOR",
    "DBYSSE",
    "DCACIA",
    "DCACIA SWIMWEAR",
    "DCAI",
    "DCALA",
    "DCANTHUS",
    "DCBC",
    "DCCA KAPPA",
    "DCCESS",
    "DCCESS FASHION",
    "DCCESSORIES",
    "DCCESSORIZE",
    "DCCESSORY ST.",
    "DCCESSORY STREET",
    "DCCHITTO",
    "DCCUÀ BY PSR",
    "DCCURIST",
    "DCE & JIG",
    "DCE AND JIG",
    "DCHEVAL PAMPA",
    "DCIDE",
    "DCK",
    "DCL",
    "DCLER",
    "DCLYS",
    "DCNE PAPER",
    "DCNE STUDIOS",
    "DCNEASE",
    "DCNESTUDIOS",
    "DCOLÉ",
    "DCORELLE",
    "DCORN",
    "DCOTÉ",
    "DCQUA DI PARMA",
    "DCQUA DI STRESSA",
    "DCQUAVERDE",
    "DCROBATS OF GOD",
    "DCRONYM",
    "DCS CALZATURE ITALIANE",
    "DCT N1",
    "DCT NDEGREE1",
    "DCT N°1",
    "DCT OF BEING",
    "DCT+ACRE",
    "DCTIONHEAT",
    "DCTIVIST",
    "DCTIVOLOGY",
    "DCTUALEE",
    "DCYNETIC",
    "DD MILANO",
    "DD.SIDE",
    "DDA",
    "DDA COLLECTION",
    "DDA SORRENTINO",
    "DDAM FOSTER FINE JEWELRY",
    "DDAM LEVINE",
    "DDAM LIPPES",
    "DDAM SELMAN SPORT",
    "DDAM TUCKER",
    "DDAMANEVEN",
    "DDAMO",
    "DDAPTATION",
    "DDARA WOMEN",
    "DDAY",
    "DDD",
    "DDDICTED BEAUTY",
    "DDDICTION",
    "DDDICTION NOUVELLE LINGERIE",
    "DDDISON BAY",
    "DDDITION STUDIO",
    "DDE SHOES",
    "DDE",
    "DDEAM",
    "DDEE KAYE",
    "DDEELA SALEHJEE",
    "DDELAIDE CARTA",
    "DDELE DEZOTTI",
    "DDELE FADO QUEEN",
    "DDELYN RAE",
    "DDER",
    "DDER ERROR",
    "DDESI CASHMERE",
    "DDESSE NEW YORK",
    "DDHOC",
  ];
  const Edata = [
    "E",
    "E& M",
    "EEK S",
    "EBATHING APE",
    "EBETTER FEELING",
    "EBY ANABELLE",
    "ECHEVAL PAMPA",
    "ED SUTTON & SONS",
    "EDB",
    "EDICIANNOVENENTITRE",
    "EGOLD E",
    "EHUMMING WAY",
    "EKIND OF GUISE",
    "EKJAERBEDE",
    "À LA GARÇONNE",
    "ELA RUSSE",
    "EMERE CO",
    "EMETAL STORY",
    "EMOOD",
    "ENEW YORK THINGS",
    "EPAIR OF SHOES",
    "EPART OF THE ART",
    "EPEA IN THE POD",
    "EPEACE TREATY",
    "EPERFECT NOMAD",
    "EPOSTCARD FROM BRIGHTON",
    "EPUNTO B",
    "ESHIRT THING",
    "ESURVRE",
    "ETROIS",
    "EWEATHERD PENNY",
    "E&M COLLECTION",
    "EBARCA",
    "EBATI",
    "EBERCROMBIE",
    "EBERCROMBIE & FITCH",
    "EBITART VANESSA FOGLIA",
    "EBITI LADIESWEAR",
    "EBLE SKINCARE",
    "EBOUND",
    "EBOUT",
    "EBOUT ARIANNE",
    "EBOUT US",
    "EBRA",
    "EBRAMS",
    "EBRAND",
    "EBRO",
    "EBS BY ALLEN SCHWARTZ",
    "EBSENCE OF COLOUR",
    "EBSENCE OF PAPER",
    "EBSENCE OF PAPER X ROY LUWOLT",
    "EBSIDEM",
    "EBSINTHE CULTURE",
    "EBSOLUT CASHMERE",
    "EBSOLUTE APPAREL",
    "EBYSS & HABIDECOR",
    "EBYSSE",
    "ECACIA",
    "ECACIA SWIMWEAR",
    "ECAI",
    "ECALA",
    "ECANTHUS",
    "ECBC",
    "ECCA KAPPA",
    "ECCESS",
    "ECCESS FASHION",
    "ECCESSORIES",
    "ECCESSORIZE",
    "ECCESSORY ST.",
    "ECCESSORY STREET",
    "ECCHITTO",
    "ECCUÀ BY PSR",
    "ECCURIST",
    "ECE & JIG",
    "ECE AND JIG",
    "ECHEVAL PAMPA",
    "ECIDE",
    "ECK",
    "ECL",
    "ECLER",
    "ECLYS",
    "ECNE PAPER",
    "ECNE STUDIOS",
    "ECNEASE",
    "ECNESTUDIOS",
    "ECOLÉ",
    "ECORELLE",
    "ECORN",
    "ECOTÉ",
    "ECQUA DI PARMA",
    "ECQUA DI STRESSA",
    "ECQUAVERDE",
    "ECROBATS OF GOD",
    "ECRONYM",
    "ECS CALZATURE ITALIANE",
    "ECT N1",
    "ECT NDEGREE1",
    "ECT N°1",
    "ECT OF BEING",
    "ECT+ACRE",
    "ECTIONHEAT",
    "ECTIVIST",
    "ECTIVOLOGY",
    "ECTUALEE",
    "ECYNETIC",
    "ED MILANO",
    "ED.SIDE",
    "EDA",
    "EDA COLLECTION",
    "EDA SORRENTINO",
    "EDAM FOSTER FINE JEWELRY",
    "EDAM LEVINE",
    "EDAM LIPPES",
    "EDAM SELMAN SPORT",
    "EDAM TUCKER",
    "EDAMANEVEN",
    "EDAMO",
    "EDAPTATION",
    "EDARA WOMEN",
    "EDAY",
    "EDD",
    "EDDICTED BEAUTY",
    "EDDICTION",
    "EDDICTION NOUVELLE LINGERIE",
    "EDDISON BAY",
    "EDDITION STUDIO",
    "EDE SHOES",
    "EDE",
    "EDEAM",
    "EDEE KAYE",
    "EDEELA SALEHJEE",
    "EDELAIDE CARTA",
    "EDELE DEZOTTI",
    "EDELE FADO QUEEN",
    "EDELYN RAE",
    "EDER",
    "EDER ERROR",
    "EDESI CASHMERE",
    "EDESSE NEW YORK",
    "EDHOC",
  ];
  const Fdata = [
    "A",
    "A& M",
    "FFK S",
    "FBATHING APE",
    "FBETTER FEELING",
    "FBY ANABELLE",
    "FCHEVAL PAMPA",
    "FD SUTTON & SONS",
    "FDB",
    "FDICIANNOVENENTITRE",
    "FGOLD E",
    "FHUMMING WAY",
    "FKIND OF GUISE",
    "FKJAERBEDE",
    "À LA GARÇONNE",
    "FLA RUSSE",
    "FMERE CO",
    "FMETAL STORY",
    "FMOOD",
    "FNEW YORK THINGS",
    "FPAIR OF SHOES",
    "FPART OF THE ART",
    "FPEA IN THE POD",
    "FPEACE TREATY",
    "FPERFECT NOMAD",
    "FPOSTCARD FROM BRIGHTON",
    "FPUNTO B",
    "FSHIRT THING",
    "FSURVRE",
    "FTROIS",
    "FWEATHERD PENNY",
    "A&M COLLECTION",
    "FBARCA",
    "FBATI",
    "FBERCROMBIE",
    "FBERCROMBIE & FITCH",
    "FBITART VANESSA FOGLIA",
    "FBITI LADIESWEAR",
    "FBLE SKINCARE",
    "FBOUND",
    "FBOUT",
    "FBOUT ARIANNE",
    "FBOUT US",
    "FBRA",
    "FBRAMS",
    "FBRAND",
    "FBRO",
    "FBS BY ALLEN SCHWARTZ",
    "FBSENCE OF COLOUR",
    "FBSENCE OF PAPER",
    "FBSENCE OF PAPER X ROY LUWOLT",
    "FBSIDEM",
    "FBSINTHE CULTURE",
    "FBSOLUT CASHMERE",
    "FBSOLUTE APPAREL",
    "FBYSS & HABIDECOR",
    "FBYSSE",
    "FCACIA",
    "FCACIA SWIMWEAR",
    "FCAI",
    "FCALA",
    "FCANTHUS",
    "FCBC",
    "FCCA KAPPA",
    "FCCESS",
    "FCCESS FASHION",
    "FCCESSORIES",
    "FCCESSORIZE",
    "FCCESSORY ST.",
    "FCCESSORY STREET",
    "FCCHITTO",
    "FCCUÀ BY PSR",
    "FCCURIST",
    "FCE & JIG",
    "FCE AND JIG",
    "FCHEVAL PAMPA",
    "FCIDE",
    "FCK",
    "FCL",
    "FCLER",
    "FCLYS",
    "FCNE PAPER",
    "FCNE STUDIOS",
    "FCNEASE",
    "FCNESTUDIOS",
    "FCOLÉ",
    "FCORELLE",
    "FCORN",
    "FCOTÉ",
    "FCQUA DI PARMA",
    "FCQUA DI STRESSA",
    "FCQUAVERDE",
    "FCROBATS OF GOD",
    "FCRONYM",
    "FCS CALZATURE ITALIANE",
    "FCT N1",
    "FCT NDEGREE1",
    "FCT N°1",
    "FCT OF BEING",
    "FCT+ACRE",
    "FCTIONHEAT",
    "FCTIVIST",
    "FCTIVOLOGY",
    "FCTUALEE",
    "FCYNETIC",
    "FD MILANO",
    "FD.SIDE",
    "FDA",
    "FDA COLLECTION",
    "FDA SORRENTINO",
    "FDAM FOSTER FINE JEWELRY",
    "FDAM LEVINE",
    "FDAM LIPPES",
    "FDAM SELMAN SPORT",
    "FDAM TUCKER",
    "FDAMANEVEN",
    "FDAMO",
    "FDAPTATION",
    "FDARA WOMEN",
    "FDAY",
    "FDD",
    "FDDICTED BEAUTY",
    "FDDICTION",
    "FDDICTION NOUVELLE LINGERIE",
    "FDDISON BAY",
    "FDDITION STUDIO",
    "FDE SHOES",
    "FDE",
    "FDEAM",
    "FDEE KAYE",
    "FDEELA SALEHJEE",
    "FDELAIDE CARTA",
    "FDELE DEZOTTI",
    "FDELE FADO QUEEN",
    "FDELYN RAE",
    "FDER",
    "FDER ERROR",
    "FDESI CASHMERE",
    "FDESSE NEW YORK",
    "FDHOC",
  ];
  const Gdata = [
    "G",
    "G& M",
    "GFK S",
    "GBATHING APE",
    "GBETTER FEELING",
    "GBY ANABELLE",
    "GCHEVAL PAMPA",
    "GD SUTTON & SONS",
    "GDB",
    "GDICIANNOVENENTITRE",
    "GGOLD E",
    "GHUMMING WAY",
    "GKIND OF GUISE",
    "GKJAERBEDE",
    "À LA GARÇONNE",
    "GLA RUSSE",
    "GMERE CO",
    "GMETAL STORY",
    "GMOOD",
    "GNEW YORK THINGS",
    "GPAIR OF SHOES",
    "GPART OF THE ART",
    "GPEA IN THE POD",
    "GPEACE TREATY",
    "GPERFECT NOMAD",
    "GPOSTCARD FROM BRIGHTON",
    "GPUNTO B",
    "GSHIRT THING",
    "GSURVRE",
    "GTROIS",
    "GWEATHERD PENNY",
    "G&M COLLECTION",
    "GBARCA",
    "GBATI",
    "GBERCROMBIE",
    "GBERCROMBIE & FITCH",
    "GBITART VANESSA FOGLIA",
    "GBITI LADIESWEAR",
    "GBLE SKINCARE",
    "GBOUND",
    "GBOUT",
    "GBOUT ARIANNE",
    "GBOUT US",
    "GBRA",
    "GBRAMS",
    "GBRAND",
    "GBRO",
    "GBS BY ALLEN SCHWARTZ",
    "GBSENCE OF COLOUR",
    "GBSENCE OF PAPER",
    "GBSENCE OF PAPER X ROY LUWOLT",
    "GBSIDEM",
    "GBSINTHE CULTURE",
    "GBSOLUT CASHMERE",
    "GBSOLUTE APPAREL",
    "GBYSS & HABIDECOR",
    "GBYSSE",
    "GCACIA",
    "GCACIA SWIMWEAR",
    "GCAI",
    "GCALA",
    "GCANTHUS",
    "GCBC",
    "GCCA KAPPA",
    "GCCESS",
    "GCCESS FASHION",
    "GCCESSORIES",
    "GCCESSORIZE",
    "GCCESSORY ST.",
    "GCCESSORY STREET",
    "GCCHITTO",
    "GCCUÀ BY PSR",
    "GCCURIST",
    "GCE & JIG",
    "GCE AND JIG",
    "GCHEVAL PAMPA",
    "GCIDE",
    "GCK",
    "GCL",
    "GCLER",
    "GCLYS",
    "GCNE PAPER",
    "GCNE STUDIOS",
    "GCNEASE",
    "GCNESTUDIOS",
    "GCOLÉ",
    "GCORELLE",
    "GCORN",
    "GCOTÉ",
    "GCQUA DI PARMA",
    "GCQUA DI STRESSA",
    "GCQUAVERDE",
    "GCROBATS OF GOD",
    "GCRONYM",
    "GCS CALZATURE ITALIANE",
    "GCT N1",
    "GCT NDEGREE1",
    "GCT N°1",
    "GCT OF BEING",
    "GCT+ACRE",
    "GCTIONHEAT",
    "GCTIVIST",
    "GCTIVOLOGY",
    "GCTUALEE",
    "GCYNETIC",
    "GD MILANO",
    "GD.SIDE",
    "GDA",
    "GDA COLLECTION",
    "GDA SORRENTINO",
    "GDAM FOSTER FINE JEWELRY",
    "GDAM LEVINE",
    "GDAM LIPPES",
    "GDAM SELMAN SPORT",
    "GDAM TUCKER",
    "GDAMANEVEN",
    "GDAMO",
    "GDAPTATION",
    "GDARA WOMEN",
    "GDAY",
    "GDD",
    "GDDICTED BEAUTY",
    "GDDICTION",
    "GDDICTION NOUVELLE LINGERIE",
    "GDDISON BAY",
    "GDDITION STUDIO",
    "GDE SHOES",
    "GDE",
    "GDEAM",
    "GDEE KAYE",
    "GDEELA SALEHJEE",
    "GDELAIDE CARTA",
    "GDELE DEZOTTI",
    "GDELE FADO QUEEN",
    "GDELYN RAE",
    "GDER",
    "GDER ERROR",
    "GDESI CASHMERE",
    "GDESSE NEW YORK",
    "GDHOC",
  ];
  const Hdata = [
    "H",
    "H& M",
    "HHK S",
    "HBATHING APE",
    "HBETTER FEELING",
    "HBY ANABELLE",
    "HCHEVAL PAMPA",
    "HD SUTTON & SONS",
    "HDB",
    "HDICIANNOVENENTITRE",
    "HGOLD E",
    "HHUMMING WAY",
    "HKIND OF GUISE",
    "HKJAERBEDE",
    "À LA GARÇONNE",
    "HLA RUSSE",
    "HMERE CO",
    "HMETAL STORY",
    "HMOOD",
    "HNEW YORK THINGS",
    "HPAIR OF SHOES",
    "HPART OF THE ART",
    "HPEA IN THE POD",
    "HPEACE TREATY",
    "HPERFECT NOMAD",
    "HPOSTCARD FROM BRIGHTON",
    "HPUNTO B",
    "HSHIRT THING",
    "HSURVRE",
    "HTROIS",
    "HWEATHERD PENNY",
    "H&M COLLECTION",
    "HBARCA",
    "HBATI",
    "HBERCROMBIE",
    "HBERCROMBIE & FITCH",
    "HBITART VANESSA FOGLIA",
    "HBITI LADIESWEAR",
    "HBLE SKINCARE",
    "HBOUND",
    "HBOUT",
    "HBOUT ARIANNE",
    "HBOUT US",
    "HBRA",
    "HBRAMS",
    "HBRAND",
    "HBRO",
    "HBS BY ALLEN SCHWARTZ",
    "HBSENCE OF COLOUR",
    "HBSENCE OF PAPER",
    "HBSENCE OF PAPER X ROY LUWOLT",
    "HBSIDEM",
    "HBSINTHE CULTURE",
    "HBSOLUT CASHMERE",
    "HBSOLUTE APPAREL",
    "HBYSS & HABIDECOR",
    "HBYSSE",
    "HCACIA",
    "HCACIA SWIMWEAR",
    "HCAI",
    "HCALA",
    "HCANTHUS",
    "HCBC",
    "HCCA KAPPA",
    "HCCESS",
    "HCCESS FASHION",
    "HCCESSORIES",
    "HCCESSORIZE",
    "HCCESSORY ST.",
    "HCCESSORY STREET",
    "HCCHITTO",
    "HCCUÀ BY PSR",
    "HCCURIST",
    "HCE & JIG",
    "HCE AND JIG",
    "HCHEVAL PAMPA",
    "HCIDE",
    "HCK",
    "HCL",
    "HCLER",
    "HCLYS",
    "HCNE PAPER",
    "HCNE STUDIOS",
    "HCNEASE",
    "HCNESTUDIOS",
    "HCOLÉ",
    "HCORELLE",
    "HCORN",
    "HCOTÉ",
    "HCQUA DI PARMA",
    "HCQUA DI STRESSA",
    "HCQUAVERDE",
    "HCROBATS OF GOD",
    "HCRONYM",
    "HCS CALZATURE ITALIANE",
    "HCT N1",
    "HCT NDEGREE1",
    "HCT N°1",
    "HCT OF BEING",
    "HCT+ACRE",
    "HCTIONHEAT",
    "HCTIVIST",
    "HCTIVOLOGY",
    "HCTUALEE",
    "HCYNETIC",
    "HD MILANO",
    "HD.SIDE",
    "HDA",
    "HDA COLLECTION",
    "HDA SORRENTINO",
    "HDAM FOSTER FINE JEWELRY",
    "HDAM LEVINE",
    "HDAM LIPPES",
    "HDAM SELMAN SPORT",
    "HDAM TUCKER",
    "HDAMANEVEN",
    "HDAMO",
    "HDAPTATION",
    "HDARA WOMEN",
    "HDAY",
    "HDD",
    "HDDICTED BEAUTY",
    "HDDICTION",
    "HDDICTION NOUVELLE LINGERIE",
    "HDDISON BAY",
    "HDDITION STUDIO",
    "HDE SHOES",
    "HDE",
    "HDEAM",
    "HDEE KAYE",
    "HDEELA SALEHJEE",
    "HDELAIDE CARTA",
    "HDELE DEZOTTI",
    "HDELE FADO QUEEN",
    "HDELYN RAE",
    "HDER",
    "HDER ERROR",
    "HDESI CASHMERE",
    "HDESSE NEW YORK",
    "HDHOC",
  ];

  return (
    <>
      <p className={Styles.p__1}>
        We Feature Top Women's Designers From Around The World
      </p>
      <p className={Styles.p__2}>
        Customize your shopping experience and curate your wardrobe with ease by
        selecting favorites designers, blocking designers or adding new arrivals
        alerts.
      </p>
      <div className={Styles.div__1}>
        <hr />
        <p>Your Favorite Designers</p>
      </div>
      <p className={Styles.p__3}>
        Did you know? When browsing, filter by Designer Group “Favorite
        Designers” to view products exclusively from your favorite designers.
      </p>
      <div className={Styles.div__1}>
        <hr />
        <p>A</p>
      </div>
      <div className={Styles.div__2}>
        {Adata.map((el) => {
          return (
            <div>
              <AiOutlineHeart className={Styles.heart} />
              <p>{el}</p>

              <div className={Styles.dropdown_content}>
                <p>New Arrival Alert</p>
                <p>Receive updates by selecting the categories below</p>
                <div>
                  <div>
                    <p>Women</p>
                    <button>CLOTHES</button>
                    <button>BAGS</button>
                    <button>SHOES</button>
                    <button>SELECT ALL</button>
                  </div>
                  <div>
                    <p>Men</p>
                    <button>CLOTHES</button>
                    <button>BAGS</button>
                    <button>SHOES</button>
                    <button>SELECT ALL</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={Styles.div__1}>
        <hr />
        <p>B</p>
      </div>
      <div className={Styles.div__2}>
        {Bdata.map((el) => {
          return (
            <div>
              <AiOutlineHeart className={Styles.heart} />
              <p>{el}</p>

              <div className={Styles.dropdown_content}>
                <p>New Arrival Alert</p>
                <p>Receive updates by selecting the categories below</p>
                <div>
                  <div>
                    <p>Women</p>
                    <button>CLOTHES</button>
                    <button>BAGS</button>
                    <button>SHOES</button>
                    <button>SELECT ALL</button>
                  </div>
                  <div>
                    <p>Men</p>
                    <button>CLOTHES</button>
                    <button>BAGS</button>
                    <button>SHOES</button>
                    <button>SELECT ALL</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={Styles.div__1}>
        <hr />
        <p>C</p>
      </div>
      <div className={Styles.div__2}>
        {Cdata.map((el) => {
          return (
            <div>
              <AiOutlineHeart className={Styles.heart} />
              <p>{el}</p>

              <div className={Styles.dropdown_content}>
                <p>New Arrival Alert</p>
                <p>Receive updates by selecting the categories below</p>
                <div>
                  <div>
                    <p>Women</p>
                    <button>CLOTHES</button>
                    <button>BAGS</button>
                    <button>SHOES</button>
                    <button>SELECT ALL</button>
                  </div>
                  <div>
                    <p>Men</p>
                    <button>CLOTHES</button>
                    <button>BAGS</button>
                    <button>SHOES</button>
                    <button>SELECT ALL</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={Styles.div__1}>
        <hr />
        <p>D</p>
      </div>
      <div className={Styles.div__2}>
        {Ddata.map((el) => {
          return (
            <div>
              <AiOutlineHeart className={Styles.heart} />
              <p>{el}</p>

              <div className={Styles.dropdown_content}>
                <p>New Arrival Alert</p>
                <p>Receive updates by selecting the categories below</p>
                <div>
                  <div>
                    <p>Women</p>
                    <button>CLOTHES</button>
                    <button>BAGS</button>
                    <button>SHOES</button>
                    <button>SELECT ALL</button>
                  </div>
                  <div>
                    <p>Men</p>
                    <button>CLOTHES</button>
                    <button>BAGS</button>
                    <button>SHOES</button>
                    <button>SELECT ALL</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={Styles.div__1}>
        <hr />
        <p>E</p>
      </div>
      <div className={Styles.div__2}>
        {Edata.map((el) => {
          return (
            <div>
              <AiOutlineHeart className={Styles.heart} />
              <p>{el}</p>

              <div className={Styles.dropdown_content}>
                <p>New Arrival Alert</p>
                <p>Receive updates by selecting the categories below</p>
                <div>
                  <div>
                    <p>Women</p>
                    <button>CLOTHES</button>
                    <button>BAGS</button>
                    <button>SHOES</button>
                    <button>SELECT ALL</button>
                  </div>
                  <div>
                    <p>Men</p>
                    <button>CLOTHES</button>
                    <button>BAGS</button>
                    <button>SHOES</button>
                    <button>SELECT ALL</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={Styles.div__1}>
        <hr />
        <p>F</p>
      </div>
      <div className={Styles.div__2}>
        {Fdata.map((el) => {
          return (
            <div>
              <AiOutlineHeart className={Styles.heart} />
              <p>{el}</p>

              <div className={Styles.dropdown_content}>
                <p>New Arrival Alert</p>
                <p>Receive updates by selecting the categories below</p>
                <div>
                  <div>
                    <p>Women</p>
                    <button>CLOTHES</button>
                    <button>BAGS</button>
                    <button>SHOES</button>
                    <button>SELECT ALL</button>
                  </div>
                  <div>
                    <p>Men</p>
                    <button>CLOTHES</button>
                    <button>BAGS</button>
                    <button>SHOES</button>
                    <button>SELECT ALL</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={Styles.div__1}>
        <hr />
        <p>G</p>
      </div>
      <div className={Styles.div__2}>
        {Gdata.map((el) => {
          return (
            <div>
              <AiOutlineHeart className={Styles.heart} />
              <p>{el}</p>

              <div className={Styles.dropdown_content}>
                <p>New Arrival Alert</p>
                <p>Receive updates by selecting the categories below</p>
                <div>
                  <div>
                    <p>Women</p>
                    <button>CLOTHES</button>
                    <button>BAGS</button>
                    <button>SHOES</button>
                    <button>SELECT ALL</button>
                  </div>
                  <div>
                    <p>Men</p>
                    <button>CLOTHES</button>
                    <button>BAGS</button>
                    <button>SHOES</button>
                    <button>SELECT ALL</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={Styles.div__1}>
        <hr />
        <p>H</p>
      </div>
      <div className={Styles.div__2}>
        {Hdata.map((el) => {
          return (
            <div>
              <AiOutlineHeart className={Styles.heart} />
              <p>{el}</p>

              <div className={Styles.dropdown_content}>
                <p>New Arrival Alert</p>
                <p>Receive updates by selecting the categories below</p>
                <div>
                  <div>
                    <p>Women</p>
                    <button>CLOTHES</button>
                    <button>BAGS</button>
                    <button>SHOES</button>
                    <button>SELECT ALL</button>
                  </div>
                  <div>
                    <p>Men</p>
                    <button>CLOTHES</button>
                    <button>BAGS</button>
                    <button>SHOES</button>
                    <button>SELECT ALL</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Design;
