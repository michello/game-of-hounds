//global
var isNight = true;
var isImageLeft = true;

$(document).ready(function(){
    $('#cloud').hide();
    var timeOfDay = (isNight) ? "night" : "day";
    var introduction = '<div class="' + timeOfDay + ' entries"><p>The following players have joined this session: Donald Trump, Groot, Oprah, and Dyrus</div>';
    $('#content').append(introduction);
    beginNightSession();
});
function getIcon(role){
    //role will be werewolf... mason.. etc
    var iconHtml = '<img src="http://onenightultimate.com/wp-content/uploads/2015/08/' + role.replace(/ /g,'');
    iconHtml += (role == 'mason') ? '.png"/>' : '.jpg"/>';
    return iconHtml;
}
function beginNightSession(){
    var players = ['Donald Trump', 'Oprah', 'Groot', 'Dyrus'];
    addEntry("werewolf","werewolf, please pick a player to learn their role.");
    addEntry("werewolf","Thank you werewolf, please go to sleep");
    addEntry("robber","Robber, please pick a player to steal their card and replace with your own.");
    addEntry("robber","Thank you Robber, please go to sleep");
    addEntry("drunk","Drunk, please pick a card from the three in the middle of the pile.");
    addEntry("drunk","Thank you Drunk, you can look at your card. Please go to sleep");
    addEntry("villager","Villager, Go to sleep. You do nothing.");
//    dayChange();    
    dayEntry(players[0], "Whoever is a werewolf, you will be found and evicted from the country.");
    dayEntry(players[0], "But first you will build my walls.");
    dayEntry(players[2], "Groot groot");
    dayEntry(players[3], "You scrub. You're the werewolf. GG we won.");
    dayEntry(players[1], "Will everyone just please calm down");
    dayEntry(players[0], "Okay I speak the truth, I am the sear and I saw that Groot is a werewolf");
    dayEntry(players[3], "You spelled seer wrong. Kthxbye");
    dayEntry(players[1], "Do you have a defense Groot?");
    dayEntry(players[2], "GROOT");
    dayEntry(players[0], "He is a werewolf");
}
function addEntry(role,text){
    //timeOfDay will be either "night" or "day"
    //text will be each person's text or the game narrating the turns
    var timeOfDay = (isNight) ? "night" : "day";
    var entryHtml = (isImageLeft) ? '<div class="' + timeOfDay + ' entries"><div class="image">' + getIcon(role) + '</div><div class="comments"><p>' + text + '</p></div></div>' : '<div class="' + timeOfDay + ' entries"><div class="comments"><p>' + text + '</p></div><div class="image">' + getIcon(role) + '</div></div>';
    isImageLeft = !isImageLeft;
    $('#content').append(entryHtml);
}
function dayEntry(name,text){
    var entryHtml = '<div class="day entries"><div><p>' + name + '</p></div><div class="comments"><p>' + text + '</p></div></div>';
    isImageLeft = !isImageLeft;
    $('#content').append(entryHtml);
}
function dayChange(){
    //will be called to change all the css regarding day changes
    var changeDiv = "";
    if(isNight){
        var changeDiv = '<div class="dayChange day"><p>It is now day.</p></div>';
        $('#headerImage').html('<img src="sun.png">');
        $('#cloud').show();
    }
    else{
        var changeDiv = '<div class="dayChange night"><p>It is night bruh</p></div>';
        $('#headerImage').html("<img src='moon.png'>");
        $('#cloud').hide();
    }
    console.log($('#headerImage').html());
    $('#content').append(changeDiv);
    $('h1').each(function(){
        if(isNight){
            $(this).removeClass("nightView");
        }
        else{
            $(this).addClass("nightView");
        }
    });
    $('p').each(function(){
        if(isNight){
            $(this).removeClass("nightView");
        }
        else{
            $(this).addClass("nightView");
        }
    });
    $('h4').each(function(){
        if(isNight){
            $(this).removeClass("nightView");
        }
        else{
            $(this).addClass("nightView");
        }
    });
    isNight = !isNight;
    if(isNight){
        $('body').css("background-image","url(night-background.png)");
        $('body').css("background-color","#02023d");
    }
    else{
    //    replace with ur backgrounds pls
        $('body').css("background-image","url(day-background.png)");
        $('body').css("background-color","#deffff");
    }
    isImageLeft = true;
}
function voting(){
    var results = {
        "Donald Trump": 3,
        "Oprah": 0,
        "Groot": 0,
        "Dyrus": 1
    };
}
function showRoles(){
    var players = {
        "Donald Trump": ["werewolf", "werewolf"],
        "Oprah": ["villager", "robber"],
        "Dyrus": ["robber", "villager"],
        "Groot": ["drunk", "minion"]
    };
    var chartHTML = '<ul class="roleList"><li><div><h4>Player Name</h4></div><div><h4>Starting Role</h4></div><div><h4>Ending Role</h4></div></li>';
    //header
    for(var name in players){
        //[0] is the starting role
        //[1] is the ending role
        chartHTML += "<li><div><p>" + name + "</p></div><div><p>" + players[name][0] + "</p></div><div><p>" + players[name][1] + "</p></div></li>";
    }
    chartHTML += "</ul>";
    $('#role_list').html(chartHTML);
}