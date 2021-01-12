document.addEventListener('DOMContentLoaded', () => {
    const dialogBox = document.getElementById('dialog-box');
    const query = {active: true, currentWindow: true};

    chrome.tabs.query(query, () => {
        document.getElementById('dialog-box').appendChild(getImage());
        document.getElementById('dialog-box').append(getText());
    });
});

const getDay = () => {
    var d = new Date();
    var n = d.getDay();
    return n;
}

function getImage() { 
    var img = document.createElement('img'); 

    switch(getDay()) {
        case 2: {
            img.src = "https://i.imgur.com/6ftDUXw.png"
            break
        }
        case 3: {
            img.src = "https://i.imgur.com/rAwFgrn.png"
            break
        }
        case 4: {
            img.src = "https://i.imgur.com/1lxuqMV.png"
            break
        }
        default: {
            img.src = "https://i.imgur.com/ais8zgq.jpeg"
            break
        }
    }
    return img;
}  

function getText() { 
    var text = ""; 

    switch(getDay()) {
        case 2: {
            text = "Sooooooon"
            break
        }
        case 3: {
            text = "IT IS WEDNESDAY MY DUDES"
            break
        }
        case 4: {
            text = "It was yesterday dude"
            break
        }
        default: {
            text = "It is not :("
        }
    }
    
    return text;
}  
