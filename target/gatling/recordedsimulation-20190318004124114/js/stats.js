var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "9300",
        "ok": "3967",
        "ko": "5333"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "121"
    },
    "maxResponseTime": {
        "total": "43015",
        "ok": "43015",
        "ko": "10078"
    },
    "meanResponseTime": {
        "total": "6979",
        "ok": "3033",
        "ko": "9914"
    },
    "standardDeviation": {
        "total": "5937",
        "ok": "7393",
        "ko": "780"
    },
    "percentiles1": {
        "total": "10001",
        "ok": "959",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "10001",
        "ok": "1416",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "10006",
        "ok": "10214",
        "ko": "10004"
    },
    "percentiles4": {
        "total": "40264",
        "ok": "42576",
        "ko": "10006"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1710,
        "percentage": 18
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 947,
        "percentage": 10
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1310,
        "percentage": 14
    },
    "group4": {
        "name": "failed",
        "count": 5333,
        "percentage": 57
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "132.857",
        "ok": "56.671",
        "ko": "76.186"
    }
},
contents: {
"req_reactiverequest-80553": {
        type: "REQUEST",
        name: "reactiveRequest",
path: "reactiveRequest",
pathFormatted: "req_reactiverequest-80553",
stats: {
    "name": "reactiveRequest",
    "numberOfRequests": {
        "total": "9300",
        "ok": "3967",
        "ko": "5333"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "121"
    },
    "maxResponseTime": {
        "total": "43015",
        "ok": "43015",
        "ko": "10078"
    },
    "meanResponseTime": {
        "total": "6979",
        "ok": "3033",
        "ko": "9914"
    },
    "standardDeviation": {
        "total": "5937",
        "ok": "7393",
        "ko": "780"
    },
    "percentiles1": {
        "total": "10001",
        "ok": "959",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "10001",
        "ok": "1416",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "10006",
        "ok": "10214",
        "ko": "10004"
    },
    "percentiles4": {
        "total": "40264",
        "ok": "42576",
        "ko": "10006"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1710,
        "percentage": 18
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 947,
        "percentage": 10
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1310,
        "percentage": 14
    },
    "group4": {
        "name": "failed",
        "count": 5333,
        "percentage": 57
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "132.857",
        "ok": "56.671",
        "ko": "76.186"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
