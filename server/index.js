const express = require("express");
const connection = require("./Configs/db");
const Beauty = require("./Models/beauty");
const Men = require("./Models/mens");
const Women = require("./Models/womens");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/beauties", async (req, res) => {
  try {
    const data = await Beauty.find();
    return res.status(201).send(data);
  } catch (err) {
    res.json({ message: err.message });
  }
});
app.post("/beauties",(req,res)=>{
  Beauty.insertMany([{"image_url":"https://www.bergdorfgoodman.com/product_assets/C/1/4/4/M/BGC144M_mz.jpg","brand":"DIOR","href":"https://www.nordstrom.com/s/trish-mcevoy-66-cream-blender-brush/3260886?utm_source=rakuten&utm_medium=affiliate&utm_campaign=z1KL9yrNyf4&utm_content=1&utm_term=772859&utm_channel=low_nd_affiliates&sp_source=rakuten&sp_campaign=z1KL9yrNyf4","title":"beuty booster conditioner","price":61,"offprice":91},{"image_url":"https://cdn.modesens.com/product/20950740_22?w=400&","brand":"SISLEY PARIS","href":"https://www.nordstrom.com/s/sisley-triple-oil-balm-makeup-remover-cleanser/5539171?siteid=z1KL9yrNyf4-Hx4DK..JpdxfnSUaMRqX3g&utm_source=rakuten&utm_medium=affiliate&utm_campaign=z1KL9yrNyf4&utm_content=1&utm_term=772859&utm_channel=low_nd_affiliates&sp_source=rakuten&sp_campaign=z1KL9yrNyf4#modesens=1","title":"Sisley-paris Triple-oil Balm Make-up Remover & Cleanser 4.4 Oz. In Multi","price":19,"offprice":132},{"image_url":"https://cdn.modesens.com/product/6678166_58?w=400&","brand":"SISLEY PARIS","href":"https://www.nordstrom.com/s/sisley-paris-sislea-essential-skin-care-lotion/3943088?siteid=z1KL9yrNyf4-Jm_raT2197rOc84ZZDKqkA&utm_source=rakuten&utm_medium=affiliate&utm_campaign=z1KL9yrNyf4&utm_content=1&utm_term=772859&utm_channel=low_nd_affiliates&sp_source=rakuten&sp_campaign=z1KL9yrNyf4#modesens=1","title":"5.0 Oz. Sisleya Essential Skin Care Lotion In White","price":130,"offprice":250,"__v":0},{"image_url":"https://cdn.modesens.com/product/6291076_15?w=400&","brand":"SISLEY PARIS","href":"https://www.nordstrom.com/s/sisley-paris-instant-eclat-instant-glow-primer/4718506?siteid=z1KL9yrNyf4-q5nBhUonn0pkgpd2N67eIQ&utm_source=rakuten&utm_medium=affiliate&utm_campaign=z1KL9yrNyf4&utm_content=1&utm_term=772859&utm_channel=low_nd_affiliates&sp_source=rakuten&sp_campaign=z1KL9yrNyf4#modesens=1","title":"Instant Eclat Instant Glow Primer 30ml In White","price":70,"offprice":100,"__v":0},{"image_url":"https://cdn.modesens.com/product/6711226_43?w=400&","brand":"SHISEIDO","href":"https://www.harrods.com/en-us/shopping/shis-fslx-concentrated-softener-170ml-17-15182533?utm_source=ran_us&utm_medium=affiliate&utm_campaign=3261841_ModeSens&utm_content=1067290&ranMID=42684&ranEAID=z1KL9yrNyf4&ranSiteID=z1KL9yrNyf4-0OwNVCTWdqT0qqD1QwTvMw#modesens=1","title":"Future Solution Lx Concentrated Balancing Softener 5.7 oz/ 170 ml In N,a","price":98,"offprice":146,"__v":0},{"image_url":"https://cdn.modesens.com/product/6288523_25?w=400&","brand":"SISLEY PARIS","href":"https://www.saksfifthavenue.com/product/sisley-paris-eau-du-soir-perfumed-bath-and-shower-gel-0446257016362.html?ranMID=13816&ranEAID=z1KL9yrNyf4&ranSiteID=z1KL9yrNyf4-M_aAE5uR0rOugwtiI7MsuQ&site_refer=AFF001&mid=13816&siteID=z1KL9yrNyf4-M_aAE5uR0rOugwtiI7MsuQ&LSoid=778411&LSlinkid=10&LScreativeid=1#modesens=1","title":"Sisley-paris Eau Du Soir Perfumed Bath And Shower Gel In White","price":63,"offprice":120,"__v":0},{"image_url":"https://cdn.modesens.com/product/14248266_49?w=400&","brand":"SHISEIDO","href":"https://www.saksfifthavenue.com/product/shiseido-complete-cleansing-microfoam-0400011229699.html?ranMID=13816&ranEAID=z1KL9yrNyf4&ranSiteID=z1KL9yrNyf4-HyWDNB45_FP685YqAs5VJg&site_refer=AFF001&mid=13816&siteID=z1KL9yrNyf4-HyWDNB45_FP685YqAs5VJg&LSoid=778411&LSlinkid=10&LScreativeid=1#modesens=1","title":"Complete Cleansing Microfoam 6.0 oz/ 180 ml In N,a","price":45,"offprice":110,"__v":0},{"image_url":"https://cdn.modesens.com/product/10681758_49?w=400&","brand":"BOBBI BROWN","href":"https://www.nordstrom.com/s/vitamin-enriched-face-base-priming-moisturizer/2813487?siteid=z1KL9yrNyf4-KIn4nfc3WzeuxhPWVmRi3Q&utm_source=rakuten&utm_medium=affiliate&utm_campaign=z1KL9yrNyf4&utm_content=1&utm_term=772859&utm_channel=low_nd_affiliates&sp_source=rakuten&sp_campaign=z1KL9yrNyf4#modesens=1","title":"Vitamin Enriched Face Base Priming Moisturizer 1.7 oz/ 50 ml In White","price":160,"offprice":200,"__v":0},{"image_url":"https://cdn.modesens.com/product/6940843_3?w=400&","brand":"KIEHL'S SINCE 1851","href":"https://www.harveynichols.com/int/brand/kiehls/825131-ultimate-strength-hand-salve-150ml/p3923253/?utm_source=ModeSens&utm_medium=affiliates&utm_campaign=1&ranMID=44787&ranEAID=z1KL9yrNyf4&ranSiteID=z1KL9yrNyf4-KstEK0SZ9XG_2sl7XBV93A#modesens=1","title":"1851 Ultimate Strength Hand Salve 5 oz/ 150 ml In White","price":20,"offprice":29,"__v":0},{"image_url":"https://cdn.modesens.com/product/23325743_16?w=400&","brand":"TOM FORD","href":"https://www.farfetch.com/shopping/beauty/tom-ford-beauty-bitter-peach-eau-de-parfum-item-18286398.aspx?fsb=1&clickref=1011lvUth2dA&utm_source=modesens&utm_medium=affiliate&utm_campaign=PHUS&utm_term=USNetwork&pid=performancehorizon_int&c=modesens&clickid=1011lvUth2dA&af_siteid=1100l16177&af_sub_siteid=1011l270&af_cost_model=CPA&af_channel=affiliate&is_retargeting=true#modesens=1","title":"Bitter Peach Eau De Parfum 1.7 oz/ 50 ml Eau De Parfum Spray In Multi","price":260,"offprice":375,"__v":0},{"image_url":"https://cdn.modesens.com/product/23325743_16?w=400&","brand":"TOM FORD","href":"https://www.farfetch.com/shopping/beauty/tom-ford-beauty-bitter-peach-eau-de-parfum-item-18286398.aspx?fsb=1&clickref=1011lvUth2dA&utm_source=modesens&utm_medium=affiliate&utm_campaign=PHUS&utm_term=USNetwork&pid=performancehorizon_int&c=modesens&clickid=1011lvUth2dA&af_siteid=1100l16177&af_sub_siteid=1011l270&af_cost_model=CPA&af_channel=affiliate&is_retargeting=true#modesens=1","title":"Bitter Peach Eau De Parfum 1.7 oz/ 50 ml Eau De Parfum Spray In Multi","price":260,"offprice":375,"__v":0}])
// console.log("data added")
res.send("data added")
})
app.get("/mens", async (req, res) => {
  try {
    const data = await Men.find();
    return res.status(201).send(data);
  } catch (err) {
    res.json({ message: err.message });
  }
});

app.get("/womens", async (req, res) => {
  try {
    const data = await Women.find();
    return res.status(201).send(data);
  } catch (err) {
    res.json({ message: err.message });
  }
});

const PORT = 8080;
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connection established");
  } catch (err) {
    console.log({ message: err.message });
  }

  console.log("listening on port" + PORT);
});
