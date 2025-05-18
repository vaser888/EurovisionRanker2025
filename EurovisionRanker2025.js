window.onload = function() {
    if (localStorage.getItem("countryAndSong2024") == null){
        console.log("hey"); 
        for(i=0; i<runnerList.length; i++){
            createCountyRank(i+1,runnerList[i][0], runnerList[i][1], runnerList[i][2], "rankArea")
        }
    }
    else {
        loadData()
    }
    
    document.querySelectorAll("#rankNumber").forEach((e)=>{
        e.addEventListener("change", function (event){

            var t = document.querySelectorAll(".listItem");

            var currentItem = this.parentElement;
            var destinationValue = this.value;
            console.log(this.parentElement, this.value, t);
            var destinationItem = t[destinationValue];
            console.log(t[destinationValue])
            currentItem.parentNode.insertBefore(currentItem,destinationItem)


            // get value to go to
            let gotoNum = this.value;
            //check number below
            let numBelow = e.parentElement.nextElementSibling.children[0].value

            if(gotoNum >= numBelow){
                for (i = numBelow; i <= gotoNum; i++){
                    //console.log(i);
                }
            }



        })
    })
    
}

function reoderValues() {
    
}


function loadData(){
    var c = localStorage.getItem("countryAndSong2024").split("--==--,");
    var s = localStorage.getItem("aliasName2024").split("--==--,");
    var n = localStorage.getItem("yourNotes2024").split("--==--,");
    //console.log(c,s,n);
    for (i=0; i<runnerList.length; i++){
        c[i] = c[i].replace("--==--", "");
        s[i] = s[i].replace("--==--", "");
        n[i] = n[i].replace("--==--", "");

        createCountyRank(i+1,c[i], s[i], n[i], "rankArea")
    }
}



function createCountyRank(rankNum, country, songName, notes, id){
    var div = document.createElement("div");
    div.setAttribute("class", "listItem");
    //div.setAttribute("value", rankNum)
    var form = document.createElement("form");
    form.setAttribute("onsubmit", "stop(this.parentElement)")
    var div1 = document.createElement("input");
    div1.setAttribute("class", "rankNumber");
    div1.setAttribute("id", "rankNumber");
    div1.setAttribute("autocomplete", "off");
    div1.value = rankNum;
    form.appendChild(div1);

    var div2 = document.createElement("div");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    div2.setAttribute("class", "moveButtons");
    button1.innerText = "^";
    button1.setAttribute("onclick", "up(this.parentElement)");
    button2.innerText = "v";
    button2.setAttribute("onclick", "down(this.parentElement)");
    div2.appendChild(button1);
    div2.appendChild(button2);

    var div3 = document.createElement("div");
    div3.setAttribute("class", "div3")

    var div3_1 = document.createElement("div");
    div3_1.innerHTML = country ;
    div3.appendChild(div3_1);
    var input1 = document.createElement("input");
    input1.setAttribute("class", "alias")
    input1.value = songName;
    
    var textarea = document.createElement("textarea");
 
    textarea.value = notes;
    div3.appendChild(input1);
    div3.appendChild(textarea);

 
    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    //div.appendChild(input);
    document.getElementById(id).appendChild(div);
}

function up(a){
    if(a.parentElement.previousElementSibling){
        var firstNum = a.previousSibling.value
        var secondNum = a.parentElement.previousElementSibling.firstChild.value
        a.parentElement.previousElementSibling.firstChild.value = firstNum;
        a.previousSibling.value = secondNum;
        a.parentElement.parentNode.insertBefore(a.parentElement, a.parentElement.previousElementSibling);
        save();
    }
}

function down(a){
    console.log(a.parentElement);
    console.log(a.parentElement.nextElementSibling);
    if(a.parentElement.nextElementSibling){
        var firstNum = a.previousSibling.value
        var secondNum = a.parentElement.nextElementSibling.firstChild.value
        console.log(firstNum, secondNum);
        a.parentElement.nextElementSibling.firstChild.value = firstNum;
        a.previousSibling.value = secondNum;
        a.parentElement.parentNode.insertBefore(a.parentElement.nextElementSibling, a.parentElement);
        save();
    }
}

function stop(a){
    event.preventDefault();
    //var firstNum = a.previousSibling.value
    //console.log(a, firstNum);
}

var country = [];
var songName = [];
var notes = [];

function saveDataToLocalStorage(){
    var data = document.getElementById("rankArea")
    var country = [];
    var songName = [];
    var notes = [];
    for (i = 0; i<data.children.length; i++){
        country.push(data.children[i].children[2].children[0].textContent + "--==--")
        songName.push(data.children[i].children[2].children[1].value + "--==--")
        notes.push(data.children[i].children[2].children[2].value + "--==--")
    }
    //console.log(country);
    //console.log(songName);

    localStorage.setItem("countryAndSong2024", country);
    localStorage.setItem("aliasName2024", songName);
    localStorage.setItem("yourNotes2024", notes);
}

function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
};


function save(){
    saveDataToLocalStorage();
}


var runnerList = [
    ["1. 🇳🇴 Norway - Lighter","",""],
    ["2. 🇱🇺 Luxembourg - La poupée monte le son","",""],
    ["3. 🇪🇪 Estonia - Espresso Macchiato","",""],
    ["4. 🇮🇱 Israel - New Day Will Rise","",""],
    ["5. 🇱🇹 Lithuania - Tavo akys","",""],
    ["6. 🇪🇸 Spain - Esa diva","",""],
    ["7. 🇺🇦 Ukraine - Bird of Pray","",""],
    ["8. 🇬🇧 United Kingdom - What the Hell Just Happened?","",""],
    ["9. 🇦🇹 Austria - Wasted Love","",""],
    ["10. 🇮🇸 Iceland - Róa","",""],
    ["11. 🇱🇻 Latvia - Bur man laimi","",""],
    ["12. 🇳🇱 Netherlands - C'est la vie","",""],
    ["13. 🇫🇮 Finland - Ich komme","",""],
    ["14. 🇮🇹 Italy - Volevo essere un duro","",""],
    ["15. 🇵🇱 Poland - Gaja","",""],
    ["16. 🇩🇪 Germany - Baller","",""],
    ["17. 🇬🇷 Greece - Asteromata","",""],
    ["18. 🇦🇲 Armenia - Survivor","",""],
    ["19. 🇨🇭 Switzerland - Voyage","",""],
    ["20. 🇨🇭 Malta - Serving","",""],
    ["21. 🇵🇹 Portugal - Deslocado","",""],
    ["22. 🇩🇰 Denmark - Hallucination","",""],
    ["23. 🇸🇪 Sweden - Bara bada bastu","",""],
    ["24. 🇫🇷 France - Maman","",""],
    ["25. 🇸🇲 San Marino - Tutta l'Italia","",""],
    ["26. 🇦🇱 Albania - Zjerm","",""]
    ];

    /*
var yesnono = [
["1. 🇳🇴 Norway - Lighter","",""],
["2. 🇱🇺 Luxembourg - La poupée monte le son","",""],
["3. 🇪🇪 Estonia - Espresso Macchiato","",""],
["4. 🇮🇱 Israel - New Day Will Rise","",""],
["5. 🇱🇹 Lithuania - Tavo akys","",""],
["6. 🇪🇸 Spain - Esa diva","",""],
["7. 🇺🇦 Ukraine - Bird of Pray","",""],
["8. 🇬🇧 United Kingdom - What the Hell Just Happened?","",""],
["9. 🇦🇹 Austria - Wasted Love","",""],
["10. 🇮🇸 Iceland - Róa","",""],
["11. 🇱🇻 Latvia - Bur man laimi","",""],
["12. 🇳🇱 Netherlands - C'est la vie","",""],
["13. 🇫🇮 Finland - Ich komme","",""],
["14. 🇮🇹 Italy - Volevo essere un duro","",""],
["15. 🇵🇱 Poland - Gaja","",""],
["16. 🇩🇪 Germany - Baller","",""],
["17. 🇬🇷 Greece - Asteromata","",""],
["18. 🇦🇲 Armenia - Survivor","",""],
["19. 🇨🇭 Switzerland - Voyage","",""],
["20. 🇨🇭 Malta - Serving","",""],
["21. 🇵🇹 Portugal - Deslocado","",""],
["22. 🇩🇰 Denmark - Hallucination","",""],
["23. 🇸🇪 Sweden - Bara bada bastu","",""],
["24. 🇫🇷 France - Maman","",""],
["25. 🇸🇲 San Marino - Tutta l'Italia","",""],
["26. 🇦🇱 Albania - Zjerm","",""]
];

*/