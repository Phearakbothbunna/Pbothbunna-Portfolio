// form submission (client-side)
// wait for DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    const cmtInput = document.getElementById("cmtInput");
    const cmtList = document.getElementById("cmtList");
    const submitBtn = document.getElementById("submitBtn");
    // get the user click
    submitBtn.addEventListener('click', () => {
        // get input value
        const cmtText = cmtInput.value;
        if (cmtText) {
            // create new list item
            const newCmt = document.createElement('li');
            newCmt.textContent = cmtText;
            cmtList.append(newCmt);
            cmtInput.value = '';
        }
    })
})