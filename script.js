
getData()

let allMobile
async function getData() {
    const res=await fetch("./data.json")
    const data=await res.json()
    allMobile=data.mobiles
    showAllMobile(allMobile)
    filterData(allMobile)

}

function showAllMobile(mobiles){
    const rightMain=document.querySelector("#rightMain")
    mobiles.forEach((mobile) => {       
        rightMain.innerHTML+=`
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
        
        `
        
    });

}

function filterData(datas) {
    removeData(datas)
    let all=[]
    let apple=datas.filter(data=>data.brand=="apple")
    let google=datas.filter(data=>data.brand=="google")
    // all.push(apple,google,)
    // console.log(all);
    showAllMobile(apple)
    
    
   
    
}


function removeData(data) {
    console.log(data);
    
    data.splice(0,data.length)
    console.log(data);
    
}



const checkBoxes=document.querySelectorAll("input[type='checkbox']")
console.log(checkBoxes);

checkBoxes.forEach((checkBox)=>{
    checkBox.addEventListener("click",()=>{
        
        
    })
})