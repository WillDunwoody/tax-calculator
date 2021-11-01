
let submit = document.getElementById('submitButton')

submit.addEventListener('click', function() {
    calculateTotal()
})

function calculateTotal() {
    {
        let amount = document.getElementById('inputAmount').value
        let parseAmount = parseFloat(amount)
        let calculatedOutput = document.getElementById('calculatedOutput')

        let lordo = parseAmount + (parseAmount * 0.04)

        let inpgiFour = lordo * 0.04
        let tax = lordo * 0.78 * 0.15
        let netto = lordo - tax
        let inpgiTwelve = netto * 0.12
    
        let taxToPay = inpgiFour + tax + inpgiTwelve 
    
        let outCome = lordo - taxToPay

        

        calculatedOutput.textContent = outCome.toFixed(2)
    
    }
}



