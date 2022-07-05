const player = {
    name: "younggyun",
    point: 10,
    fat: true
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

console.log(player);
player.fat = false;
console.log(player); // constant의 object는 변경 가능, update

// object 추가
player.lastName = "Lee"
console.log(player);

player.point = player.point + 30;
console.log(player.point);  // 10 + 30 = 40