// --- global variables ---
var loans = [{
        loan_year: 2020,
        loan_amount: 10000.00,
        loan_int_rate: 0.0453
    },
    {
        loan_year: 2021,
        loan_amount: 10000.00,
        loan_int_rate: 0.0453
    },
    {
        loan_year: 2022,
        loan_amount: 10000.00,
        loan_int_rate: 0.0453
    },
    {
        loan_year: 2023,
        loan_amount: 10000.00,
        loan_int_rate: 0.0453
    },
    {
        loan_year: 2024,
        loan_amount: 10000.00,
        loan_int_rate: 0.0453
    }
];


// --- function: loadDoc() --

function loadDoc() {

    //Check for preexisting data
    if (!localStorage.getItem("loanData")) {
        // pre-fill defaults for first loan year
        var defaultYear = loans[0].loan_year;
        $("#loan_year0" + 1).val(defaultYear++);
        var defaultLoanAmount = loans[0].loan_amount;
        $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2));
        var defaultInterestRate = loans[0].loan_int_rate;
        $("#loan_int0" + 1).val(defaultInterestRate);
        var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
        $("#loan_bal0" + 1).html = toComma(loanWithInterest.toFixed(2));

        // pre-fill defaults for other loan years and int rates

        for (var i = 2; i < 6; i++) {

            //convert prefills to JQuery
            $("#loan_year0" + i).val(defaultYear++);

            $("#loan_int0" + i).val("#loan_int01");
            //setting properties to table
            $("#loan_year0" + i).prop("disabled", true);
            $("#loan_year0" + i).css({
                backgroundColor: "grey"
            });
            $("#loan_year0" + i).css({
                color: "white"
            });
            $("#loan_amt0" + i).val(defaultLoanAmount.toFixed(2));
            $("#loan_int0" + i).val(defaultInterestRate);
            $("#loan_int0" + i).prop("disabled", true);
            $("#loan_int0" + i).css({
                backgroundColor: "gray"
            });
            $("#loan_int0" + i).css({
                color: "white"
            });
            loanWithInterest = (loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate);
            $("#loan_bal0" + i).html(toComma(loanWithInterest.toFixed(2)));
        } // end: "for" loop

        localStorage.setItem("loanData", loans);
    } else {
        loans = localStorage.getItem("loanData");

        for (var i = 2; i < 6; i++) {
            //setting properties to table
            $("#loan_year0" + i).prop("disabled", true);
            $("#loan_year0" + i).css({
                backgroundColor: "grey"
            });
            $("#loan_year0" + i).css({
                color: "white"
            });
            $("#loan_int0" + i).prop("disabled", true);
            $("#loan_int0" + i).css({
                backgroundColor: "gray"
            });
            $("#loan_int0" + i).css({
                color: "white"
            });
        } // end: "for" loop
    }

    // all input fields: select contents on focus (jquery) 
    $("input[type=text]").focus(function() {
        $(this).select();
        $(this).css("background-color", "yellow");
    });
    $("input[type=text]").blur(function() {
        $(this).css("background-color", "white");
    });

    // set focus to first year: messes up codepen
    // $("#loan_year01").focus();

    // Check input and update loans array when exiting input fields (jquery)
    $("#loan_year01").blur(function() {
        let regex = /[0-9]{4}/; //Check for a 4 digit year
        if (regex.test($("#loan_year01").val()) == false) {
            window.alert("Please enter a valid year.");
        }
        updateLoansArray();
    });

    $("#loan_int01").blur(function() {
        let regex = /[0][.][0-9]{4}/; //Check for a decimal interest rate
        if (regex.test($("#loan_int01").val()) == false) {
            window.alert("Please enter a valid interest rate.");
        }
        updateLoansArray();
    });

    $("#loan_amt01").blur(function() {
        let regex = /[0-9]{1,}[.][0-9]{2}/; //Check for a number formatted as dollar amounts
        if (regex.test($("#loan_amt01").val()) == false) {
            window.alert("Please enter a valid loan amount.");
        }
        updateLoansArray();
    });

    $("#loan_amt02").blur(function() {
        let regex = /[0-9]{1,}[.][0-9]{2}/; //Check for a number formatted as dollar amounts
        if (regex.test($("#loan_amt02").val()) == false) {
            window.alert("Please enter a valid loan amount.");
        }
        updateLoansArray();
    });

    $("#loan_amt03").blur(function() {
        let regex = /[0-9]{1,}[.][0-9]{2}/; //Check for a number formatted as dollar amounts
        if (regex.test($("#loan_amt03").val()) == false) {
            window.alert("Please enter a valid loan amount.");
        }
        updateLoansArray();
    });

    $("#loan_amt04").blur(function() {
        let regex = /[0-9]{1,}[.][0-9]{2}/; //Check for a number formatted as dollar amounts
        if (regex.test($("#loan_amt04").val()) == false) {
            window.alert("Please enter a valid loan amount.");
        }
        updateLoansArray();
    });

    $("#loan_amt05").blur(function() {
        let regex = /[0-9]{1,}[.][0-9]{2}/; //Check for a number formatted as dollar amounts
        if (regex.test($("#loan_amt05").val()) == false) {
            window.alert("Please enter a valid loan amount.");
        }
        updateLoansArray();
    });
} // end: function loadDoc()


function toComma(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateLoansArray() {
    //Get values from input
    loans[0].loan_year = parseInt($("#loan_year01").val());
    loans[0].loan_int_rate = parseFloat($("#loan_int01").val());

    //Update amounts
    for (var i = 0; i < 5; i++) {
        loans[i].loan_amount = parseFloat($("#loan_amt0" + (i + 1)).val());
    }

    //Loop to update info
    for (var i = 1; i < 5; i++) {
        //Update years
        loans[i].loan_year = loans[0].loan_year + i;
        $("#loan_year0" + (i + 1)).val(loans[i].loan_year);

        //Update interest rates
        $("#loan_int0" + (i + 1)).val(loans[i].loan_int_rate);
        loans[i].loan_int_rate = loans[0].loan_int_rate;
    }

    //Update YE Bal
    let totalBal = 0;
    for (var i = 0; i < 5; i++) {
        var loanWithInterest = loans[i].loan_amount * (1 + loans[i].loan_int_rate);
        totalBal += loanWithInterest
        $("#loan_bal0" + (i + 1)).text(toComma(totalBal.toFixed(2)));
    }

    //Update interest accrued
    let totalAmt = 0;
    let intAccrued = 0;
    for (var i = 0; i < 5; i++) {
        totalAmt += loans[i].loan_amount;
    }
    intAccrued = totalBal - totalAmt;

    $("#loan_int_accrued").text(toComma(intAccrued.toFixed(2)));

    localStorage.setItem("loanData", loans);
}
