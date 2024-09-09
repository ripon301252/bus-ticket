function busTicketElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-[#1ecc00]');
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}




document.getElementById('copupon-apply').addEventListener('keyup', function(event){
    const text = event.target.value;
     const deleteButton = document.getElementById('btn-apply');
          deleteButton.style.backgroundColor = 'red'
    if(text === 'NEW15'){
        deleteButton.removeAttribute('disabled');
        deleteButton.style.backgroundColor = 'green';
        deleteButton.style.color = 'blue';
    }
    else{
        deleteButton.setAttribute('disabled', true);
    }

    if(text === 'Couple 20'){
        deleteButton.removeAttribute('disabled');
        deleteButton.style.backgroundColor = 'green';
        deleteButton.style.color = 'blue';
    }
    else{
        deleteButton.setAttribute('disabled', true);
    }
})


document.getElementById('btn-apply').addEventListener('click', function(){
    const newAs = document.getElementById('new-15');
    newAs.style.display = 'none'
})

document.getElementById('btn-apply').addEventListener('click', function(){
    const couple = document.getElementById('couple-20');
    couple.style.display = 'none'
})





  
