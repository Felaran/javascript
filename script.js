"use strict";

var money = +prompt("Ваш бюждет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var statRashody = +prompt("Введите обязательную статью расходов в этом месяце");
var sumRashody = +prompt("Во сколько обойдется?");

var appData = {
        budget: money,
        timeData: time,
        expenses: {
                statRashody: sumRashody
        },
        optionalExpenses: {

        },
        income: [

        ],
        savings: false
};



//var oneDay = (money/30) - (sumRashody/30);

var oneDayBud = (appData.budget/30) - (appData.sumRashody/30);

alert("Ваш бюджет на  " + appData.timeData + " " + oneDayBud);