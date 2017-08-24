
let getNumber = require('cli-interact').getNumber;
let question = require('cli-interact').question;

let addStudent = require("./addStudent");
let showResults = require("./showResults");

const addMessage = '请输入学生信息（格式：姓名, 学号, 班级, 学科: 成绩, ...），按回车提交：';
const wrongStudentFormat = '请按正确的格式输入（格式：姓名, 学号, 班级, 学科: 成绩, ...）：';
const transcriptMessage = "请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：";
const wrongTranscriptFormat = '请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：';

function showMenu() {
    return `
        1. 添加学生
        2. 生成成绩单
        3. 退出
        请输入你的选择（1～3）：`;
}


function main() {
    let info = [];
    while (true) {
        switch (getNumber(showMenu())) {
            case 1:
                info = addStudent(question(addMessage));
                while (info === -1) {
                    info = addStudent(question(wrongStudentFormat))
                }
                break;
            case 2:
                let showInfo = showResults(info,question(transcriptMessage));
                while (showInfo=== -1) {
                    showInfo = question(wrongTranscriptFormat);
                }
                question(showInfo+ `\n按任意键继续`);
                break;
            case 3:
                return;
            default :
                break;
        }
    }
}

module.export = main();