const getSleepHours = (day) => {
    switch (day) {
        case "Monday":
            return 8;
            break;
        case "Thuesday":
            return 8;
            break;
        case "Wednesday":
            return 8;
            break;
        case "Thursday":
            return 8;
            break;
        case "Friday":
            return 8;
            break;
        case "Saturday":
            return 8;
            break;
        case "Sunday":
            return 8;
            break;
        default:
            console.log("Huston we have a problem *bip*");
    }
};

const getActualSleepHours = () => {
	const week = ["Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	let hourSleep = 0;
	for (let i = 0; i < week.length; i++) {
		hourSleep += getSleepHours(week[i]);
	}
	return hourSleep;
}

const getIdealSleepHours = () => {
    let idealHours = 7;
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        return 'You have a PERFECT sleep time !' + `\nYour sleep : ${actualSleepHours}\nSleep Goal : ${idealSleepHours}`;
    } else if (actualSleepHours < idealSleepHours) {
        return "You need more sleep" + `\nYour sleep : ${actualSleepHours}\nSleep Goal : ${idealSleepHours}`;
    } else if (actualSleepHours > idealSleepHours) {
        return 'You sleep more than your goal' + `\nYour sleep : ${actualSleepHours}\nSleep Goal : ${idealSleepHours}`;
    }
}

/*
console.log(getSleepHours("Monday"));
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
*/
console.log(calculateSleepDebt());
