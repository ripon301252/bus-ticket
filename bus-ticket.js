function busTicketA1(){
    busTicketElementById('A1');
    const availableSeat = 40;
    const selectedSeat = 1;
    const noSeat = 0;
    if(availableSeat > selectedSeat){
        const seatCount = getTextElementValueById('seat-count');
        const updateSeatCount = seatCount + 1;
        setTextElementValueById('seat-count', updateSeatCount); 
    }
    else {
        
    }


    if(selectedSeat > noSeat){
        const seatLeft = getTextElementValueById('seat-left')
        const leftSeat = seatLeft - 1;
        setTextElementValueById('seat-left', leftSeat);
    }
    else{

    }
}  


        
    

function busTicketA2(){
    busTicketElementById('A2');
    busTicketElementById('A1');
    const availableSeat = 40;
    const selectedSeat = 1;
    const noSeat = 0;
    if(availableSeat > selectedSeat){
        const seatCount = getTextElementValueById('seat-count');
        const updateSeatCount = seatCount + 1;
        setTextElementValueById('seat-count', updateSeatCount); 
    }
    else {
        console.log('Nothing')
    }

    if(selectedSeat > noSeat){
        const seatLeft = getTextElementValueById('seat-left')
        const leftSeat = seatLeft - 1;
        setTextElementValueById('seat-left', leftSeat);
    }
    else{
        console.log('Nothing')
    }
}

function busTicketA3(){
    busTicketElementById('A3');
}

function busTicketA4(){
    busTicketElementById('A4');
}

