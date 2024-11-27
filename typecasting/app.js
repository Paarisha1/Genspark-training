var data = [101, "Rahul", 102, "Rohan", "Riya", 103];
function processData(data) {
    var userIDs = [];
    var usernames = [];
    data.forEach(function (item) {
        if (typeof item === "number") {
            userIDs.push(item);
        }
        else {
            usernames.push(item);
        }
    });
    return { userIDs: userIDs, usernames: usernames };
}
var result = processData(data);
console.log("User IDs:", result.userIDs);
console.log("Usernames:", result.usernames);
