var users=[
    {
        "name":"jhon dow",
        "gender":"male",
        "image":"/images/john.png"
    },
    {
        "name":"jane dow",
        "gender":"female",
        "image":"/images/jane.png"

    }
]
var curId=0;

function toggle(){
    // toggle card from 0 ->1 & 1 ->0

    curId=(curId+1)%2;
    // toggle the rendered user details

    // image
    var user=users[curId];
    document.getElementById("user-img").src=user.image;
    document.getElementById("user-name").innerText=user.name;
    document.getElementById("user-gender").innerText=user.gender;


}