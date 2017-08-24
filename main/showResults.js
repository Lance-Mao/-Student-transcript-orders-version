function judgmentFormatToResult(no) {
    isNaN(Number(no.replace(/,/g, ""))) ? false : true;
}

function splitResults(str) {
    return str.split(",").join(":").toString().split(":");
}

function splitResultsToClass(arr){
    return arr.toString().split(":");
}

function calculateStudentAchievement(scoreInfo, no) {
    let totalStudentAchievement = [];
    let averageStudentPerformance = [];
    splitResults(no).map(noByOne => {
        let allScore = 0;
        scoreInfo.map(item => {
            if (item.no === noByOne) {
                for (let i = 0; i < splitResultsToClass(splitResults(scoreInfo[0].score)).length; i += 2) {
                    allScore += Number(splitResultsToClass(splitResults(scoreInfo[0].score))[i]);
                }
            }
        })
        averageStudentPerformance.push(allScore / (splitResults(scoreInfo[0].score).length) / 2);
        totalStudentAchievement.push(allScore);
    })

    return [averageStudentPerformance, totalStudentAchievement];

}

function calculateTheClassResults(calculateStudentAchievement2) {
    let totalClassResults = calculateStudentAchievement2[1].reduce((a, b) => a + b)

    return [totalClassResults, totalClassResults / calculateStudentAchievement2[1].length];
}

function calculateTheResults(scoreInfo, no) {
    let calculateStudentAchievementToShow = calculateStudentAchievement(scoreInfo, no);  //学生总成绩和平均成绩
    let calculateTheClassResultsToShow = calculateTheClassResults(calculateStudentAchievement(scoreInfo, no));//全班总成绩和平均成绩

    let title = '姓名';
    for (let i = 0; i < splitResultsToClass(splitResults(scoreInfo[0].score)).length; i += 2) {
        title += "|" + splitResultsToClass(splitResults(scoreInfo[0].score))[i];
    }
    title += '|平均分|总分';

    let studentScore = ``;
    scoreInfo.map((item,index) => {
        for (let i = 0; i < splitResultsToClass(splitResults(scoreInfo[0].score)).length; i += 2) {
            studentScore +=(item.name+ "|" + splitResultsToClass(splitResults(scoreInfo[0].score))[i]);
        }
        studentScore += ("|" + calculateStudentAchievementToShow[0][index] + "|" + calculateStudentAchievementToShow[1][index])+`\n`;
    })

    let klassScore = `全班总分平均数：${calculateTheClassResultsToShow[1]}\n`+`全班总分中位数：${calculateTheClassResultsToShow[0]}`;

    console.log(`成绩单
${title}
========================
${studentScore}
========================
${klassScore}`)
}

function showResults(scoreInfo, no) {
    if (!judgmentFormatToResult(no)) {
        return calculateTheResults(scoreInfo, no);
    }

    return -1;
}

module.exports = showResults;
