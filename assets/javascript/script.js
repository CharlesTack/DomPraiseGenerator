function techPhrases() {
    var phrases1 = ["amazing", "awesome", "brilliant", "exciting", "fantastic", "innovative", "inspiring", "mind-blowing", "revolutionary", "sensational", "spectacular", "stunning", "terrific", "unbelievable", "unforgettable", "unreal"];
    var phrases2 = ["member of this team", "collaborator", "contributor", "employee", "team player"];
    var phrases3 = ["excels", "adapts", "manages", "performs"];
    var phrases4 = ["excellently", "exceptionally", "extraordinarily", "fantastically", "flawlessly", "impeccably", "incredibly", "magnificently", "outstandingly", "perfectly", "remarkably", "splendidly", "superbly", "supremely", "wonderfully"];
    var phrases5 = ["valued", "respected", "trusted", "appreciated", "admired", "recognized", "acknowledged", "celebrated", "applauded", "commended", "praised", "applauded", "lauded", "esteemed", "honored", "revered", "venerated", "cherished", "treasured"];
    var phrases6 = ["mighty", "powerful", "strong", "potent", "forceful", "vigorous", "robust", "sturdy", "stalwart", "tough", "tireless", "unstoppable", "unyielding", "unwavering", "unshakeable", "unbreakable", "unbeatable", "invincible", "indomitable", "formidable", "fearsome", "dauntless", "intrepid", "valiant", "heroic", "bold", "brave", "courageous", "gallant", "daring", "undaunted", "unflinching", "unafraid", "unfazed", "unperturbed", "unruffled","unflappable", "unshaken"];
    
    var random1 = Math.floor(Math.random() * phrases1.length);
    var random2 = Math.floor(Math.random() * phrases2.length);
    var random3 = Math.floor(Math.random() * phrases3.length);
    var random4 = Math.floor(Math.random() * phrases4.length);
    var random5 = Math.floor(Math.random() * phrases5.length);
    var random6 = Math.floor(Math.random() * phrases6.length);
    
    var phrase = "You are an " + phrases1[random1] + " " + phrases2[random2] + " who " + phrases3[random3] + " " + phrases4[random4] + ". You are " + phrases5[random5] + " by Dom the " + phrases6[random6] +".";
    return phrase;
}

document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('button');
    var jargonDiv = document.getElementById('jargon');
    var jargonText = document.getElementById('jargon-text');
    button.addEventListener('click', function() {
        var phrase = techPhrases();
        jargonText.textContent = phrase; // Insert the generated phrase into the speech bubble
    });
});