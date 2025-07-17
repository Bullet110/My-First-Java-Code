/*If hour is 6am-12pm: Good morning
  If hour is between 12pm-6pm: Good afternoon
  Otherwise: Good evening
*/
    let hour = new Date().getHours();

if (hour >= 6 && hour < 12) {
   document.getElementById("H11").textContent = `TOP O' DA MORNIN' TO YA`;
   document.getElementById("P1").textContent = `Good morning :)`;
}
else if (hour >= 12 && hour < 18) {
    document.getElementById("H12").textContent = `TOP O' DA AFTERNOONIN' TO YA`;
    document.getElementById("P2").textContent = `Good afternoon :)`;
}
else {
    document.getElementById("H13").textContent = `TOP O' DA EVENIN' TO YA`;
    document.getElementById("P3").textContent = `Good evening :)`;
}