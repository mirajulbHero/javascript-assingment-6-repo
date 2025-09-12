
// heart countincresing

function heartValueIncrese(id){
    document.getElementById(id).addEventListener('click', function(){
        let heartCount = document.getElementById('heartCount');
        let heartCountValue = parseInt(heartCount.innerText);
        let heartNewCountValue = heartCountValue + 1;
        heartCount.innerText = heartNewCountValue;
    });
}
heartValueIncrese('nationalLoveButton')
heartValueIncrese('policeLoveButton')
heartValueIncrese('fireLoveButton')
heartValueIncrese('ambulanceLoveButton')
heartValueIncrese('womenLoveButton')
heartValueIncrese('corruptionLoveButton')
heartValueIncrese('electricityLoveButton')
heartValueIncrese('bracLoveButton')
heartValueIncrese('railwayLoveButton')

// call button function feature

// alert meassage feature
function nationAlertMeassage(){
    alert('calling National Emergency service 999...');
;}
function policeAlertMeassage(){
    alert('calling Police Emergency service 999...');
};
function fireAlertMeassage() {
    alert('calling Fire Emergency service 999...');
};
function ambulanceAlertMeassage() {
    alert('calling Ambulance Emergency service 1994-999999...');
};
function womenAlertMeassage() {
    alert('calling Ambulance Emergency service 109...');
};
function CorruptionAlertMeassage() {
    alert('calling Ambulance Emergency service 106...');
};
function electricityAlertMeassage() {
    alert('calling Ambulance Emergency service 16216...');
};
function bracAlertMeassage() {
    alert('calling Brac Emergency service 16445...');
};
function railwayAlertMeassage() {
    alert('calling Railway Emergency service 163...');
};

function makeCall (id){
    document.getElementById(id).addEventListener('click', function(){
    let takaCount = document.getElementById('taka');
    let takaCountValue = parseInt(taka.innerText);

    if (takaCountValue >= 20) {
        takaCountValue  -= 20;
        takaCount.innerText = takaCountValue;
      }
       else {
        alert("Not enough taka to make a call!");
      }

    
})
}
makeCall ('nationCallBtn')
makeCall ('policeCallBtn')
makeCall ('fireCallBtn')
makeCall ('ambulanceCallBtn')
makeCall ('womenCallBtn')
makeCall ('corruptionCallBtn')
makeCall ('electricityCallBtn')
makeCall ('bracCallBtn')
makeCall ('railwayCallBtn')


// // show time function
// function showTime(id){
//     let time = new Date();
//     document.getElementById(id).innerText =time.toLocaleTimeString();
// }
// showTime('nationClock');
// showTime('policeClock');
// showTime('fireClock');
// showTime('ambulanceClock');
// showTime('womenClock');
// showTime('corruptionClock');
// showTime('electricityClock');
// showTime('bracClock');
// showTime('railwayClock');

// call history item show area
function getElement (id){
    const element = document.getElementById(id);
    return element
}

const cartButtons = document.getElementsByClassName ('cartbtn');

for(const cartButton of cartButtons){
    cartButton.addEventListener('click', function(){
        const cardTitle = cartButton.parentNode.parentNode.children[0].innerText;
        const cardNumber = cartButton.parentNode.parentNode.children[2].innerText;
        let time = new Date();
        let nowTime = document.getElementById('Clock').innerText = time.toLocaleTimeString();

        const clockContainer = getElement('callDesAll');
        const newClockitem = document.createElement('div');
        newClockitem.innerHTML = `
            <div class="call-description">
                <div  id="callItemOne"  class="call-area">
                    <div class="call-left">
                        <p>${cardTitle}</p>
                        <span>${cardNumber}</span>
                    </div>
                    <div class="call-right">
                        <p id="Clock">${nowTime}</p>
                    </div>
                </div>
            </div>
        `;
        clockContainer.append(newClockitem);
        let takaCount = document.getElementById('taka');
        if (takaCount<= 0) {
            newClockitem.innerHTML = '';
        }
    })
}

// delete all feature

document.getElementById('clearBtn').addEventListener('click',function(){
    const clockContainer = getElement('callDesAll');
    clockContainer.innerHTML = '';
    console.log('clear btn click')
})

// copy but function feature
const copyButtons = document.getElementsByClassName('copy-btn');
for(const copyButton of copyButtons){
    copyButton.addEventListener('click', function(){
        const cardNumber = copyButton.parentNode.parentNode.children[2].innerText;
        navigator.clipboard.writeText(cardNumber);
        alert("Copied Number: " + cardNumber);
        const copyCount = document.getElementById('copyCount');
        const copyCountValue = parseInt(copyCount.innerText);
        const newCopyCountValue = copyCountValue + 1;
        copyCount.innerText = newCopyCountValue;

    })
}






