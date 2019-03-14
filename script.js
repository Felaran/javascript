"use strict";

var money = +prompt("Ваш бюждет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");


var appData = {
        budget: money,
        timeData: time,
        expenses: {
        },
        optionalExpenses: {
        },
        income: [
        ],
        savings: false
};


for (var i = 0; i < 2; i++) {
        var statRashody = prompt("Введите обязательную статью расходов в этом месяце");
        var sumRashody = prompt("Во сколько обойдется?");

        if( (typeof(statRashody)) === 'string' && (typeof(statRashody)) != null && (typeof(sumRashody)) != null
                && statRashody != '' && sumRashody != '' && statRashody.length < 50){
                        appData.expenses[statRashody] = sumRashody;
                };

};




appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет " + appData.moneyPerDay);


