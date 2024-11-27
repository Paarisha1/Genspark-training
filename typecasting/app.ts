
const data: (string | number)[] = [101, "Rahul", 102, "Rohan", "Riya", 103];

function processData(data: (string | number)[]) {
    const userIDs: number[] = [];
    const usernames: string[] = [];

    data.forEach(item => {
     
        if (typeof item === "number") {
            userIDs.push(item as number); 
        } else {
            usernames.push(item as string); 
        }
    });

    return { userIDs, usernames };
}


const result = processData(data);
console.log("User IDs:", result.userIDs);       
console.log("Usernames:", result.usernames);     
