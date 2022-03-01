const button = document.querySelector("button");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const title = document.querySelector("#title");
const otherJobRole = document.querySelector("#other-job-role");
const size = document.querySelector("#size");
const design = document.querySelector("#design");
const color = document.querySelector("#color");
const activitiesBox = document.querySelector("#activities-box");
const activitiesHint = document.querySelector("#activities-hint");
const activitiesCost = document.querySelector("#activities-cost");
const payment = document.querySelector("#payment");
const creditCard = document.querySelector("#credit-card");
const paypal = document.querySelector("#paypal");
const bitcoin = document.querySelector("#bitcoin");
const expMonth = document.querySelector("#exp-month");
const expYear = document.querySelector("#exp-year");
const ccNum = document.querySelector("#cc-num");
const ccHint = document.querySelector("#cc-hint");
const zip = document.querySelector("#zip");
const zipHint = document.querySelector("#zip-hint");
const cvv = document.querySelector("#cvv");
const cvvHint = document.querySelector("#cvv-hint");
let totalCost = 0;
let cost;

title.addEventListener("click", function () {
    if (title.value == "other") {
        otherJobRole.style.display = "block"
    } else {
        otherJobRole.style.display = "none"
    }
});



activitiesBox.addEventListener("click", function (e) {
    const checkBox = e.target;
    const value = Number(checkBox.getAttribute("data-cost"));
    if (checkBox.checked == true && value != null) {

        totalCost += value;
        activitiesCost.textContent = `Total : $${totalCost}`
    } else if (checkBox.checked == false && value != null) {

        totalCost -= value;
        activitiesCost.textContent = `Total : $${totalCost}`
    }
    if (totalCost == 600) {
        totalCost -= 60;
        activitiesCost.textContent = `Total : $${totalCost}`

    }
    //    console.log(totalCost);
});




if (payment.value == "select method") {
    creditCard.style.display = "none"
    paypal.style.display = "none"
    bitcoin.style.display = "none"
}

payment.addEventListener("click", function () {

    if (payment.value == "paypal") {
        paypal.style.display = "block"
        creditCard.style.display = "none"

        bitcoin.style.display = "none"

    } else if (payment.value == "bitcoin") {
        bitcoin.style.display = "block"
        creditCard.style.display = "none"
        paypal.style.display = "none"


    } else if (payment.value == "credit-card") {
        creditCard.style.display = "block"

        paypal.style.display = "none"
        bitcoin.style.display = "none"

    }
})



button.addEventListener("click", function (e) {
    e.preventDefault();

    //! Name validation start
    if (name.value == "") {
        name.className = "name error"
        name.parentNode.querySelector("#name-hint").style.display = "block"
    } else {
        name.className = "name success"
        name.parentNode.querySelector("#name-hint").style.display = "none"
        console.log(`Name : ${name.value}`);
    }
    //! Name validation end

    //! Email validation start
    if (email.value.match(/\S+@\S+\.\S+/)) {
        email.className = "name success"
        email.parentNode.querySelector("#email-hint").style.display = "none"
        console.log(`Email : ${email.value}`);
    } else {
        email.className = "name error"
        email.parentNode.querySelector("#email-hint").style.display = "block"
    }
    //! Email validation end

    //! Title validation start
    if (title.value == "Select Job Role") {
        title.value = "other"
        console.log(`Job Role : ${title.value}`);
    } else {
        if (title.value == "other") {
            if (otherJobRole.value != "") {
                console.log(`Job Role : ${otherJobRole.value}`);
            } else {
                console.log(`Job Role : ${title.value}`);
            }
        } else {
            console.log(`Job Role : ${title.value}`);
        }
    }
    //! Title validation end

    //! Size
    console.log(`Size : ${size.value}`);

    //! Design
    if (design.value == "Select Theme") {
        design.value = "heart js"
        console.log(`Design : ${design.value}`);

    } else {
        console.log(`Design : ${design.value}`);

    }

    //! Color
    if (color.value == "Select a design theme above") {
        color.value = "cornflowerblue"
        console.log(`Color : ${color.value}`);

    } else {
        console.log(`Color : ${color.value}`);

    }
    //! Check Box validation
    if (totalCost == 0) {
        activitiesHint.style.display = "block";
        activitiesBox.classList.add("not-valid");
    } else {
        activitiesHint.style.display = "none";
        activitiesBox.classList.remove("not-valid");
        console.log(`Total Cost : ${totalCost}`);


    }

    //! Payment Info
    if (payment.value == "credit-card") {

        if (expMonth.value == "Select Date") {
            expMonth.classList.add("not-valid")
        } else {
            expMonth.classList.remove("not-valid")

        }

        if (expYear.value == "Select Year") {
            expYear.classList.add("not-valid")
        } else {
            expYear.classList.remove("not-valid")

        }

        if (ccNum.value.match((/^(?=.*[0-9])[a-zA-Z0-9]{13,16}$/))) {
            if (ccNum.value.match((/^(?=.*[!@#$%^&*])[!@#$%^&*]$/))) {
                ccNum.classList.add("not-valid")
                ccHint.style.display = "block"


            } else {

                ccNum.classList.remove("not-valid")
                ccHint.style.display = "none"

            }
        } else {
            ccNum.classList.add("not-valid")
            ccHint.style.display = "block"


        }

        if (zip.value.match((/^(?=.*[0-9])[0-9]{5,5}$/))) {
            if (zip.value.match((/^(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]$/))) {
                zip.classList.add("not-valid")
                zipHint.style.display = "block"


            } else {

                zip.classList.remove("not-valid")
                zipHint.style.display = "none"

            }
        } else {
            zip.classList.add("not-valid")
            zipHint.style.display = "block"


        }

        if (cvv.value.match((/^(?=.*[0-9])[0-9]{3,3}$/))) {
            if (cvv.value.match((/^(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]$/))) {
                cvv.classList.add("not-valid")
                cvvHint.style.display = "block"


            } else {

                cvv.classList.remove("not-valid")
                cvvHint.style.display = "none"

            }
        } else {
            cvv.classList.add("not-valid")
            cvvHint.style.display = "block"


        }



    }
});