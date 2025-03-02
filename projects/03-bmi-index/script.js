const submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
    let userHeight = document.querySelector(".user-height").value;
    let userWeight = document.querySelector(".user-weight").value;

    if (!userHeight.trim() || !userWeight.trim())
        return alert("Enter valid input");

    userHeight = parseInt(userHeight);
    userWeight = parseFloat(userWeight);

    if (userHeight.toString() == "NaN" || userWeight.toString() == "NaN")
        return alert("Enter valid input");

    document.querySelector(".show-bmi-index").textContent = (
        userWeight /
        (userHeight * userHeight * 0.0001)
    ).toFixed(2);

    document.querySelector(".user-height").value = "";
    document.querySelector(".user-weight").value = "";
});
