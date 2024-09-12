// Fetching data// Fetching data// Fetching data

getData();
let allMobile;

async function getData() {
  const res = await fetch("./data.json");
  const data = await res.json();
  allMobile = data.mobiles;
  filterData(allMobile);
}
// Fetching data// Fetching data// Fetching data****

// mobile rendering to DOM// mobile rendering to DOM
const rightMain = document.querySelector("#rightMain");
function showAllMobile(mobiles) {
  mobiles.forEach((mobile) => {
    rightMain.innerHTML += `
                    <div class="mobile">
                        <div class="mobile-in">
                            <div class="mobile-img-container">
                                <div class="mobile-img">
                                    <img src="${mobile.mobImg}" alt="" class="mobImage">
                                </div>
                                <div class="addTo">
                                    <input type="checkbox">
                                    <label>Add to Compare</label>
                                </div>
                            </div>
                            <div class="mobile-details">
                                <div class="mobile-det-left">
                                    <div class="phoneName">${mobile.mobName}</div>
                                    <div class="star-rating">
                                        <div class="green-star">
                                            ${mobile.star} <img src="img/star.svg" alt="rating">
                                        </div>
                                        <div class="ratings"><span>${mobile.rating} Ratings & ${mobile.reviews} Reviews</span></div>
                                    </div>
                                    <div class="full-details">
                                        <ul>
                                            <li>${mobile.rom}</li>
                                            <li>${mobile.display}</li>
                                            <li>${mobile.camera}</li>
                                            <li>${mobile.battery}</li>
                                            <li>${mobile.chip}</li>
                                            <li>${mobile.warranty}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="mobile-det-right">
    
                                    <div class="price-det">
                                        <div class="rate">
                                            <div class="dis-rate">₹${mobile.disRate}</div>
                                            <div class="ret-price">₹${mobile.retRate}</div>
                                            <div class="off">${mobile.off}</div>
                                        </div>
                                        <div class="free">Free delivery</div>
                                    </div>
                                    <div class="f-plus"><img src="${mobile.assured}" alt="" height="20px"></div>
                                    <div class="upto-main">
                                        <div class="upto">Upto</div>
                                        <div class="ex-rate">₹${mobile.exchange}</div>
                                        <div class="upto">Off on Exchange</div>
                                    </div>
                                    <div class="emi">
                                        <span>No cost EMI from ₹${mobile.emi}/month</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
        `;
  });
}
// mobile rendering to DOM// mobile rendering to DOM****

// filtering the Data and Manupulating DOM// filtering the Data and Manupulating DOM
const checkBoxes = document.querySelectorAll("input[type='checkbox']");

let arrayCheck = [];
let mob = [];
let isAssure = true;

function filterData(data) {
  mobiles = data;
  checkBoxes.forEach((checkBox, index) => {
    checkBox.addEventListener("click", (e) => {
      s = e.target.id;

      if (e.target.id == "apple") {
        console.log(s);
        if (e.target.checked) {
          const apple = mobiles.filter((mobile) => mobile.brand == "apple");
          mob.push(apple);
          console.log(mob);
          rightMain.innerHTML = "";
          showAllMobile(mob.flat());
          isAssure = false;
        } else {
          console.log(s);
          isAssure = true;
          mob = mob.flat().filter((item) => item.brand != s);

          console.log("check", mob);
          if (mob.length === 0) {
            console.log("hi");

            rightMain.innerHTML = "";
            showAllMobile(mobiles);
          } else {
            rightMain.innerHTML = "";
            showAllMobile(mob.flat());
          }
        }
      } else if (e.target.id == "samsung") {
        if (e.target.checked) {
          const samsung = mobiles.filter((mobile) => mobile.brand == "samsung");
          mob.push(samsung);
          console.log(mob);
          rightMain.innerHTML = "";
          showAllMobile(mob.flat());
          isAssure = false;
        } else {
          isAssure = true;
          mob = mob.flat().filter((item) => item.brand != s);
          console.log(mob);
          if (mob.length === 0) {
            console.log("hi");

            rightMain.innerHTML = "";
            showAllMobile(mobiles);
          } else {
            rightMain.innerHTML = "";

            showAllMobile(mob.flat());
          }
        }
      } else if (e.target.id == "google") {
        if (e.target.checked) {
          const google = mobiles.filter((mobile) => mobile.brand == "google");
          mob.push(google);
          console.log(mob);
          rightMain.innerHTML = "";
          showAllMobile(mob.flat());
          isAssure = false;
        } else {
          isAssure = true;
          mob = mob.flat().filter((item) => item.brand != s);
          console.log(mob);
          if (mob.length === 0) {
            console.log("hi");

            rightMain.innerHTML = "";
            showAllMobile(mobiles);
          } else {
            rightMain.innerHTML = "";

            showAllMobile(mob.flat());
          }
        }
      } else if (e.target.id == "motorola") {
        if (e.target.checked) {
          const motorola = mobiles.filter(
            (mobile) => mobile.brand == "motorola"
          );
          mob.push(motorola);
          console.log(mob);
          rightMain.innerHTML = "";
          showAllMobile(mob.flat());
          isAssure = false;
        } else {
          isAssure = true;
          mob = mob.flat().filter((item) => item.brand != s);
          console.log(mob);
          if (mob.length === 0) {
            console.log("hi");

            rightMain.innerHTML = "";
            showAllMobile(mobiles);
          } else {
            rightMain.innerHTML = "";

            showAllMobile(mob.flat());
          }
        }
      } else if (e.target.id == "vivo") {
        if (e.target.checked) {
          const vivo = mobiles.filter((mobile) => mobile.brand == "vivo");
          mob.push(vivo);
          console.log(mob);
          rightMain.innerHTML = "";
          showAllMobile(mob.flat());
          isAssure = false;
        } else {
          isAssure = true;
          mob = mob.flat().filter((item) => item.brand != s);
          console.log(mob);
          if (mob.length === 0) {
            console.log("hi");

            rightMain.innerHTML = "";
            showAllMobile(mobiles);
          } else {
            rightMain.innerHTML = "";

            showAllMobile(mob.flat());
          }
        }
      } else if (e.target.id == "oppo") {
        if (e.target.checked) {
          const oppo = mobiles.filter((mobile) => mobile.brand == "oppo");
          mob.push(oppo);
          console.log(mob);
          rightMain.innerHTML = "";
          showAllMobile(mob.flat());
          isAssure = false;
        } else {
          isAssure = true;
          mob = mob.flat().filter((item) => item.brand != s);
          console.log(mob);
          if (mob.length === 0) {
            console.log("hi");

            rightMain.innerHTML = "";
            showAllMobile(mobiles);
          } else {
            rightMain.innerHTML = "";

            showAllMobile(mob.flat());
          }
        }
      } else if (e.target.id == "plusAssured") {
        let u = "img/assured.png";

        if (e.target.checked) {
          if (isAssure) {
            const assured = mobiles.filter((mobile) => mobile.assured == u);
            mob.push(assured);
            rightMain.innerHTML = "";
            showAllMobile(mob.flat());
          } else {
            const assured = mob.flat().filter((mobile) => mobile.assured == u);
            mob = [];
            mob.push(assured);
            console.log(mob.flat());
            rightMain.innerHTML = "";
            showAllMobile(mob.flat());
          }
        } else {
          console.log(mob);

          if (mob.length === 0) {
            console.log("hi");
            rightMain.innerHTML = "";
            showAllMobile(mobiles);
          } else {
            mob = mob
              .flat()
              .filter((item) => item.assured != u || item.assured == u);
            rightMain.innerHTML = "";
            showAllMobile(mob.flat());
          }
        }
      } else {
        showAllMobile(mobiles);
      }

      clickHere(checkBox, e);
    });
  });
  showAllMobile(mobiles);
}

const ClearBtn = document.querySelector(".clear");
function showClearAll() {
  if (arrayCheck.length != 0) {
    console.log(ClearBtn);
    ClearBtn.classList.remove("hide");
  }
}
function removeClearAll() {
  if (arrayCheck.length == 0) {
    ClearBtn.classList.add("hide");
  }
}

ClearBtn.addEventListener("click", () => {
  window.location.reload();
});

// filtering the Data and Manupulating DOM// filtering the Data and Manupulating DOM*****

// Condition for showing Click here Button

function clickHere(checkBox, e) {
  if (checkBox.checked) {
    console.log(e.target.id);
    arrayCheck.push(e.target.id);
    console.log("data is ad", arrayCheck);
    showClearAll();
  } else {
    arrayCheck = arrayCheck.filter((item) => item != e.target.id);
    console.log("data is removed", arrayCheck);
    removeClearAll();
  }
}

// Condition for showing Click here Button*****
