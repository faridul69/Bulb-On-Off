function bulbOnOff(){
    let b=document.getElementById('lightBulb');
    let s=document.getElementById('SwitchID');

    if((b.src.match('BulbOff'))&&(s.src.match('SwitchOff'))){
        b.src='img/BulbOn.jpg';
        s.src='img/SwitchOn.jpg';
        document.getElementById('send_text').textContent="😮😮😮ওয়াও! বাল্বটি জ্বলতেছে😮😮😮";
    } else{
        b.src='img/BulbOff.jpg';
        s.src='img/SwitchOff.jpg';
        document.getElementById('send_text').textContent="😭😭😭ইসস! বাল্বটি নিভে গেল😭😭😭";
    }
}