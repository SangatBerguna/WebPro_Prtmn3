const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const satuedit = async () => {
    console.log("Hallo saya satu");
    await delay(2000); 
}

const duaedit = async () => {
    console.log("Hallo saya dua");
    await delay(1000); 
}

const tigaedit = () => {
    console.log("Hallo saya tiga");
}

const empatedit = () => {
    console.log("Hallo saya empat");
}


const main = async () => {
    await satuedit(); 
    await duaedit();  
    tigaedit();       
    empatedit();      
}


main();