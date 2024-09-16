//Об'єкт profile описує профіль користувача на ігровій платформі. У його
//властивостях зберігається ім'я профілю username та кількість активних годин
//playTime, проведенних у грі.Доповни об'єкт profile методами для роботи з його властивостями.
//Метод changeusername(newname) повинен приймати рядок(нове ім'я) в параметр newname
//та змінювати властивості username на нове нічого не повертає. 
 //Метод updatePlayTime(hours) повине приймати число(кількість годин) 
 //у параметр hours та збільшити  на нього значення властивості playTime.
 //Нічого не повертає.
 //Метод getinfo() має повертати рядок форму <username> has <amount> acctive hours!
 //де <username> - це ім'я профілю, а <amount> - ігрових годин.
 
 
const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"