const saveDonation = () =>{
    const storedArray = []
    const total = 0 + 1;
            const donated = JSON.parse(localStorage.getItem("donateItem"));
            if (!donated) {
                storedArray.push(total);
            localStorage.setItem("donateItem", JSON.stringify(storedArray));
            } 
            else{
                storedArray.push(...donated,total);
            localStorage.setItem("donateItem", JSON.stringify(storedArray));
            }
}

export default saveDonation;