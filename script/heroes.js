$(document).ready(function () {
    $("#heroOracle").click(function () {
        $("#Oracle").toggleClass("expand");
        $(".heroBackFilter").toggleClass("expand");
    });
});

$(document).ready(function () {
    $("#heroLuna").click(function () {
        $("#Luna").toggleClass("expand");
        $(".heroBackFilter").toggleClass("expand");
    });
});

$(document).ready(function () {
    $("#heroDoom").click(function () {
        $("#Doom").toggleClass("expand");
        $(".heroBackFilter").toggleClass("expand");
    });
});

$(document).ready(function () {
    $("#heroTimbersaw").click(function () {
        $("#Timbersaw").toggleClass("expand");
        $(".heroBackFilter").toggleClass("expand");
    });
});

$(document).ready(function () {
    $("#heroInvoker").click(function () {
        $("#Invoker").toggleClass("expand");
        $(".heroBackFilter").toggleClass("expand");
    });
});

$(document).ready(function () {
    $("#heroSpectre").click(function () {
        $("#Spectre").toggleClass("expand");
        $(".heroBackFilter").toggleClass("expand");
    });
});

// NEXT
$(document).ready(function () {
    $("#skill1Doom").click(function () {
        var ans = checkSkill("#skills1Doom", "#skills2Doom", "#skills3Doom", "#skills4Doom");
        if (ans != "#skills1Doom") $("#skills1Doom").toggleClass("expand");
    });
    $("#skill2Doom").click(function () {
        var ans = checkSkill("#skills1Doom", "#skills2Doom", "#skills3Doom", "#skills4Doom");
        if (ans != "#skills2Doom") $("#skills2Doom").toggleClass("expand");
    });
    $("#skill3Doom").click(function () {
        var ans = checkSkill("#skills1Doom", "#skills2Doom", "#skills3Doom", "#skills4Doom");
        if (ans != "#skills3Doom") $("#skills3Doom").toggleClass("expand");
    });
    $("#skill4Doom").click(function () {
        var ans = checkSkill("#skills1Doom", "#skills2Doom", "#skills3Doom", "#skills4Doom");
        if (ans != "#skills4Doom") $("#skills4Doom").toggleClass("expand");
    });
})

$(document).ready(function () {
    $("#skill1Luna").click(function () {
        var ans = checkSkill("#skills1Luna", "#skills2Luna", "#skills3Luna", "#skills4Luna");
        if (ans != "#skills1Luna") $("#skills1Luna").toggleClass("expand");
    });
    $("#skill2Luna").click(function () {
        var ans = checkSkill("#skills1Luna", "#skills2Luna", "#skills3Luna", "#skills4Luna");
        if (ans != "#skills2Luna") $("#skills2Luna").toggleClass("expand");
    });
    $("#skill3Luna").click(function () {
        var ans = checkSkill("#skills1Luna", "#skills2Luna", "#skills3Luna", "#skills4Luna");
        if (ans != "#skills3Luna") $("#skills3Luna").toggleClass("expand");
    });
    $("#skill4Luna").click(function () {
        var ans = checkSkill("#skills1Luna", "#skills2Luna", "#skills3Luna", "#skills4Luna");
        if (ans != "#skills4Luna") $("#skills4Luna").toggleClass("expand");
    });
})

$(document).ready(function () {
    $("#skill1Oracle").click(function () {
        var ans = checkSkill("#skills1Oracle", "#skills2Oracle", "#skills3Oracle", "#skills4Oracle");
        if (ans != "#skills1Oracle") $("#skills1Oracle").toggleClass("expand");
    });
    $("#skill2Oracle").on("click", function () {
        var ans = checkSkill("#skills1Oracle", "#skills2Oracle", "#skills3Oracle", "#skills4Oracle");
        if (ans != "#skills2Oracle") $("#skills2Oracle").toggleClass("expand");
    });
    $("#skill3Oracle").on("click", function () {
        var ans = checkSkill("#skills1Oracle", "#skills2Oracle", "#skills3Oracle", "#skills4Oracle");
        if (ans != "#skills3Oracle") $("#skills3Oracle").toggleClass("expand");
    });
    $("#skill4Oracle").click(function () {
        var ans = checkSkill("#skills1Oracle", "#skills2Oracle", "#skills3Oracle", "#skills4Oracle");
        if (ans != "#skills4Oracle") $("#skills4Oracle").toggleClass("expand");
    });
})

$(document).ready(function () {
    $("#skill1Timbersaw").click(function () {
        var ans = checkSkill("#skills1Timbersaw", "#skills2Timbersaw", "#skills3Timbersaw", "#skills4Timbersaw");
        if (ans != "#skills1Timbersaw") $("#skills1Timbersaw").toggleClass("expand");
    });
    $("#skill2Timbersaw").on("click", function () {
        var ans = checkSkill("#skills1Timbersaw", "#skills2Timbersaw", "#skills3Timbersaw", "#skills4Timbersaw");
        if (ans != "#skills2Timbersaw") $("#skills2Timbersaw").toggleClass("expand");
    });
    $("#skill3Timbersaw").on("click", function () {
        var ans = checkSkill("#skills1Timbersaw", "#skills2Timbersaw", "#skills3Timbersaw", "#skills4Timbersaw");
        if (ans != "#skills3Timbersaw") $("#skills3Timbersaw").toggleClass("expand");
    });
    $("#skill4Timbersaw").click(function () {
        var ans = checkSkill("#skills1Timbersaw", "#skills2Timbersaw", "#skills3Timbersaw", "#skills4Timbersaw");
        if (ans != "#skills4Timbersaw") $("#skills4Timbersaw").toggleClass("expand");
    });
})

$(document).ready(function () {
    $("#skill1Invoker").click(function () {
        var ans = checkSkill("#skills1Invoker", "#skills2Invoker", "#skills3Invoker", "#skills4Invoker");
        if (ans != "#skills1Invoker") $("#skills1Invoker").toggleClass("expand");
    });
    $("#skill2Invoker").click(function () {
        var ans = checkSkill("#skills1Invoker", "#skills2Invoker", "#skills3Invoker", "#skills4Invoker");
        if (ans != "#skills2Invoker") $("#skills2Invoker").toggleClass("expand");
    });
    $("#skill3Invoker").click(function () {
        var ans = checkSkill("#skills1Invoker", "#skills2Invoker", "#skills3Invoker", "#skills4Invoker");
        if (ans != "#skills3Invoker") $("#skills3Invoker").toggleClass("expand");
    });
    $("#skill4Invoker").click(function () {
        var ans = checkSkill("#skills1Invoker", "#skills2Invoker", "#skills3Invoker", "#skills4Invoker");
        if (ans != "#skills4Invoker") $("#skills4Invoker").toggleClass("expand");
    });
})

$(document).ready(function () {
    $("#skill1Spectre").click(function () {
        var ans = checkSkill("#skills1Spectre", "#skills2Spectre", "#skills3Spectre", "#skills4Spectre");
        if (ans != "#skills1Spectre") $("#skills1Spectre").toggleClass("expand");
    });
    $("#skill2Spectre").on("click", function () {
        var ans = checkSkill("#skills1Spectre", "#skills2Spectre", "#skills3Spectre", "#skills4Spectre");
        if (ans != "#skills2Spectre") $("#skills2Spectre").toggleClass("expand");
    });
    $("#skill3Spectre").on("click", function () {
        var ans = checkSkill("#skills1Spectre", "#skills2Spectre", "#skills3Spectre", "#skills4Spectre");
        if (ans != "#skills3Spectre") $("#skills3Spectre").toggleClass("expand");
    });
    $("#skill4Spectre").click(function () {
        var ans = checkSkill("#skills1Spectre", "#skills2Spectre", "#skills3Spectre", "#skills4Spectre");
        if (ans != "#skills4Spectre") $("#skills4Spectre").toggleClass("expand");
    });
})

// NEXT
function checkSkill(first, second, third, fourth) {
    var s1M = $(first).hasClass("expand");
    var s2M = $(second).hasClass("expand");
    var s3M = $(third).hasClass("expand");
    var s4M = $(fourth).hasClass("expand");
    if (s1M) {
        $(first).toggleClass("expand");
        return first;
    }
    if (s2M) {
        $(second).toggleClass("expand");
        return second;
    }
    if (s3M) {
        $(third).toggleClass("expand");
        return third;
    }
    if (s4M) {
        $(fourth).toggleClass("expand");
        return fourth;
    }
    return false;
}

function checkFilter() {
    var filter1 = $(".str").hasClass("expand");
    var filter2 = $(".agi").hasClass("expand");
    var filter3 = $(".int").hasClass("expand");
    var filter4 = $("#viewStr").hasClass("expand");
    var filter5 = $("#viewAgi").hasClass("expand");
    var filter6 = $("#viewInt").hasClass("expand");
    var ans = "";
    if (filter1) {
        $(".str").toggleClass("expand");
        ans = ".str";
    }
    if (filter2) {
        $(".agi").toggleClass("expand");
        ans = ".agi";
    }
    if (filter3) {
        $(".int").toggleClass("expand");
        ans = ".int";
    }
    if (filter4) {
        $("#viewStr").toggleClass("expand");
    }
    if (filter5) {
        $("#viewAgi").toggleClass("expand");
    }
    if (filter6) {
        $("#viewInt").toggleClass("expand");
    }
    return ans;
}

// NEXT
$(document).ready(function () {
    $(".heroBackFilter").click(function () {
        var Oracle = $("#Oracle").hasClass("expand");
        var Luna = $("#Luna").hasClass("expand");
        var Doom = $("#Doom").hasClass("expand");
        var Timbersaw = $("#Timbersaw").hasClass("expand");
        var Invoker = $("#Invoker").hasClass("expand");
        var Spectre = $("#Spectre").hasClass("expand");
        if (Doom) {
            checkSkill("#skills1Doom", "#skills2Doom", "#skills3Doom", "#skills4Doom");
            $("#Doom").toggleClass("expand");
            $(".heroBackFilter").toggleClass("expand");
        }
        if (Luna) {
            checkSkill("#skills1Luna", "#skills2Luna", "#skills3Luna", "#skills4Luna");
            $("#Luna").toggleClass("expand");
            $(".heroBackFilter").toggleClass("expand");
        }
        if (Oracle) {
            checkSkill("#skills1Oracle", "#skill2Oracle", "#skills3Oracle", "#skills4Oracle");
            $("#Oracle").toggleClass("expand");
            $(".heroBackFilter").toggleClass("expand");
        }
        if (Timbersaw) {
            checkSkill("#skills1Timbersaw", "#skill2Timbersaw", "#skills3Timbersaw", "#skills4Timbersaw");
            $("#Timbersaw").toggleClass("expand");
            $(".heroBackFilter").toggleClass("expand");
        }
        if (Invoker) {
            checkSkill("#skills1Invoker", "#skills2Invoker", "#skills3Invoker", "#skills4Invoker");
            $("#Invoker").toggleClass("expand");
            $(".heroBackFilter").toggleClass("expand");
        }
        if (Spectre) {
            checkSkill("#skills1Spectre", "#skill2Spectre", "#skills3Spectre", "#skills4Spectre");
            $("#Spectre").toggleClass("expand");
            $(".heroBackFilter").toggleClass("expand");
        }
    });
});

// NEXT
$(document).ready(function () {
    $("#viewStr").click(function () {
        var check = checkFilter()
        if (check != ".str") {
            $(".str").toggleClass("expand");
            $("#viewStr").toggleClass("expand");
        }
    });
    $("#viewAgi").click(function () {
        var check = checkFilter()
        if (check != ".agi") {
            $(".agi").toggleClass("expand");
            $("#viewAgi").toggleClass("expand");
        }
    });
    $("#viewInt").click(function () {
        var check = checkFilter()
        if (check != ".int") {
            $(".int").toggleClass("expand");
            $("#viewInt").toggleClass("expand");
        }
    });
});

// NEXT
$(document).ready(function () {
    let hero = sessionStorage.getItem('hero');
    if (hero == "Doom") {
        $("#Doom").toggleClass("expand");
        $(".heroBackFilter").toggleClass("expand");
    } else if (hero == "Luna") {
        $("#Luna").toggleClass("expand");
        $(".heroBackFilter").toggleClass("expand");
    } else if (hero == "Oracle") {
        $("#Oracle").toggleClass("expand");
        $(".heroBackFilter").toggleClass("expand");
    } else if (hero == "Timbersaw") {
        $("#Timbersaw").toggleClass("expand");
        $(".heroBackFilter").toggleClass("expand");
    } else if (hero == "Invoker") {
        $("#Invoker").toggleClass("expand");
        $(".heroBackFilter").toggleClass("expand");
    } else if (hero == "Spectre") {
        $("#Spectre").toggleClass("expand");
        $(".heroBackFilter").toggleClass("expand");
    }
});
