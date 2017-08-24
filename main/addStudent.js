let studentList = [];

function splitResult(resultsInformation) {
    studentList.push({
        "name": resultsInformation.split(",")[0],
        "no": resultsInformation.split(",")[1],
        "klass": resultsInformation.split(",")[2],
        "score": resultsInformation.split(",").slice(3, resultsInformation.split(",").length).toString(),
    });


    console.log(`\n学生${resultsInformation.split(",")[0]}的成绩被添加\n`);

    return studentList;
}

function determineTheQuantity(resultsInformation) {
    return resultsInformation.split(",") >= 4;
}

function judgmentScoreFormat(resultsInformation) {
    return resultsInformation.split(":").length - 1 === resultsInformation.split(",").length - 3;
}

function judgmentFormat(resultsInformation) {
    return determineTheQuantity(resultsInformation) && judgmentScoreFormat(resultsInformation);
}

function addStudent(resultsInformation) {
    if (resultsInformation === null) {
        return studentList;
    }
    if (!judgmentFormat(resultsInformation)) {
        return splitResult(resultsInformation);
    } else {
        return -1;
    }

}



module.exports = addStudent;