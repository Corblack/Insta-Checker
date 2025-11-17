
const fs = require('fs');



//followers
// 2. "Lis le fichier 'followers.json'. Mets son contenu (en texte) dans une boîte scellée 'followersText'."
const followersText = fs.readFileSync('followers_1.json', 'utf-8');
// 3. "Prends le texte de 'followersText', transforme-le en objet JS. Mets cet objet dans une boîte scellée 'followersData'."
const followersData = JSON.parse(followersText);
// On crée une boîte (une liste vide) qui va pouvoir être modifiée
let followerNames = [];

for (const follower of followersData){followerNames.push(follower.string_list_data[0].value)};
console.log(followerNames);




//following
const followingText = fs.readFileSync('following.json', 'utf-8');
const followingData = JSON.parse(followingText);

let followingNames = [];

for (const following of followingData.relationships_following){followingNames.push(following.title)};
console.log(followingNames);


//verification
let NotFollowingBack = [];
for (const names of followingNames){
    const isFollowing = followerNames.includes(names) 
    if (isFollowing === false){NotFollowingBack.push(names)} 
};
console.log(NotFollowingBack);