let users = [{
    username: "Andreas", 
    email: "antrikos@gmail.com",
    password:"1234", 
    subscriptionStatus: "VIP",
    discordId: "andreas#007", 
    lessonsCompleted: [0, 1] 
},
{
    username: "Matt", 
    email: "matt@gmail.com",
    password:"1434", 
    subscriptionStatus: "VIP",
    discordId: "matt#007", 
    lessonsCompleted: [0, 1] 
},
{   username: "gio", 
    email: "gio@gmail.com",
    password:"15234", 
    subscriptionStatus: "VIP",
    discordId: "gior#007", 
    lessonsCompleted: [0, 1] 
}
]

function register  (user) {
    users.push (user);
}
   
register ({
username: "Andreas", 
email: "antrikos@gmail.com",
 password: "1234",
 subscriptionStatus: "VIP",
 discordId: "andreas#006",
 lessonsCompleted: [0, 1] 
});

 console.log (users);