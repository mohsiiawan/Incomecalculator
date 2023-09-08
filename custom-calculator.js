        const amountInput = document.getElementById("amount");
        const rangeInput = document.getElementById("rente");
        const min = rangeInput.min;
		const max = rangeInput.max;
		const value = rangeInput.value;
        rangeInput.style.background = `linear-gradient(to right, #1fffb6 0%, #5FFFB2 ${(value-min)/(max-min)*100}%, #5F7F81 ${(value-min)/(max-min)*100}%, #5F7F81 100%)`

        rangeInput.oninput = function() {
  			this.style.background = `linear-gradient(to right, #5FFFB2 0%, #5FFFB2 ${(this.value-this.min)/(this.max-this.min)*100}%, #5F7F81 ${(this.value-this.min)/(this.max-		this.min)*100}%,   #5F7F81 100%)`
			};

        const annualReturnSpan = document.getElementById("annualreturn");
        const monthlyGrossSpan = document.getElementById("monthlygross");
        const monthlyNetIncomeSpan = document.getElementById("monthlynetincome");
        const reimbursementGrossSpan = document.getElementById("reimbursementgross");
        const reimbursementNetIncomeSpan = document.getElementById("reimbursementnetincome");
        const totalGrossSpan = document.getElementById("totalgross");
        const totalNetIncomeSpan = document.getElementById("totalnetincome");

        function updateValues() {
            const amount = parseFloat(amountInput.value);
            const rangeValue = parseFloat(rangeInput.value);
		if (rangeValue === 1){
            const annualReturn = "8%";
            annualReturnSpan.textContent = annualReturn;

            const monthlyGross = Math.round((amount * 0.08) / 12);
            monthlyGrossSpan.textContent = monthlyGross.toLocaleString("de-DE");

            const monthlyNetIncome = Math.round((amount * 0.08) / 12 * 0.7);
            monthlyNetIncomeSpan.textContent = monthlyNetIncome.toLocaleString("de-DE");

            const reimbursementGross = 0;
            reimbursementGrossSpan.textContent = reimbursementGross;

            const reimbursementNetIncome = 0;
            reimbursementNetIncomeSpan.textContent = reimbursementNetIncome;

            const totalGross = Math.round(amount * 0.4);
            totalGrossSpan.textContent = totalGross.toLocaleString("de-DE");

            const totalNetIncome = Math.round(amount * 0.28);
            totalNetIncomeSpan.textContent = totalNetIncome.toLocaleString("de-DE");
            document.querySelector('.valuebox1').style.backgroundColor= '#5FFFB2';
            document.querySelector('.valuebox2').style.backgroundColor= '#5F7F81';
            document.querySelector('.valuebox3').style.backgroundColor= '#5F7F81';
            document.querySelector('.valuebox4').style.backgroundColor= '#5F7F81';
            document.querySelector('.valuebox5').style.backgroundColor= '#5F7F81';
						}
		   else if (rangeValue === 2){
            const annualReturn = "9%";
            annualReturnSpan.textContent = annualReturn;

            const monthlyGross = Math.round((amount * 0.06) / 12);
            monthlyGrossSpan.textContent = monthlyGross.toLocaleString("de-DE");

            const monthlyNetIncome = Math.round((amount * 0.06) / 12 * 0.7);
            monthlyNetIncomeSpan.textContent = monthlyNetIncome.toLocaleString("de-DE");

            const reimbursementGross = Math.round(amount * 0.15);
            reimbursementGrossSpan.textContent = reimbursementGross.toLocaleString("de-DE");

            const reimbursementNetIncome = Math.round(amount * 0.105);
            reimbursementNetIncomeSpan.textContent = reimbursementNetIncome.toLocaleString("de-DE");

            const totalGross = Math.round(amount * 0.45);
            totalGrossSpan.textContent = totalGross.toLocaleString("de-DE");

            const totalNetIncome = Math.round(amount * 0.315);
            totalNetIncomeSpan.textContent = totalNetIncome.toLocaleString("de-DE");
            document.querySelector('.valuebox1').style.backgroundColor= '#5FFFB2';
            document.querySelector('.valuebox2').style.backgroundColor= '#5FFFB2';
            document.querySelector('.valuebox3').style.backgroundColor= '#5F7F81';
            document.querySelector('.valuebox4').style.backgroundColor= '#5F7F81';
            document.querySelector('.valuebox5').style.backgroundColor= '#5F7F81';
						}
		else if (rangeValue === 3){
            const annualReturn = "10%";
            annualReturnSpan.textContent = annualReturn;

            const monthlyGross = Math.round((amount * 0.04) / 12);
            monthlyGrossSpan.textContent = monthlyGross.toLocaleString("de-DE");

            const monthlyNetIncome = Math.round((amount * 0.04) / 12 * 0.7);
            monthlyNetIncomeSpan.textContent = monthlyNetIncome.toLocaleString("de-DE");

            const reimbursementGross = Math.round(amount * 0.3);
            reimbursementGrossSpan.textContent = reimbursementGross.toLocaleString("de-DE");

            const reimbursementNetIncome = Math.round(amount * 0.21);
            reimbursementNetIncomeSpan.textContent = reimbursementNetIncome.toLocaleString("de-DE");

            const totalGross = Math.round(amount * 0.5);
            totalGrossSpan.textContent = totalGross.toLocaleString("de-DE");

            const totalNetIncome = Math.round(amount * 0.35);
            totalNetIncomeSpan.textContent = totalNetIncome.toLocaleString("de-DE");
            document.querySelector('.valuebox1').style.backgroundColor= '#5FFFB2';
            document.querySelector('.valuebox2').style.backgroundColor= '#5FFFB2';
            document.querySelector('.valuebox3').style.backgroundColor= '#5FFFB2';
            document.querySelector('.valuebox4').style.backgroundColor= '#5F7F81';
            document.querySelector('.valuebox5').style.backgroundColor= '#5F7F81';
						}
		else if (rangeValue === 4){
            const annualReturn = "11%";
            annualReturnSpan.textContent = annualReturn;

            const monthlyGross = Math.round((amount * 0.02) / 12);
            monthlyGrossSpan.textContent = monthlyGross.toLocaleString("de-DE");

            const monthlyNetIncome = Math.round((amount * 0.02) / 12 * 0.7);
            monthlyNetIncomeSpan.textContent = monthlyNetIncome.toLocaleString("de-DE");

            const reimbursementGross = Math.round(amount * 0.45);
            reimbursementGrossSpan.textContent = reimbursementGross.toLocaleString("de-DE");

            const reimbursementNetIncome = Math.round(amount * 0.315);
            reimbursementNetIncomeSpan.textContent = reimbursementNetIncome.toLocaleString("de-DE");

            const totalGross = Math.round(amount * 0.55);
            totalGrossSpan.textContent = totalGross.toLocaleString("de-DE");

            const totalNetIncome = Math.round(amount * 0.385);
            totalNetIncomeSpan.textContent = totalNetIncome.toLocaleString("de-DE");
            document.querySelector('.valuebox1').style.backgroundColor= '#5FFFB2';
            document.querySelector('.valuebox2').style.backgroundColor= '#5FFFB2';
            document.querySelector('.valuebox3').style.backgroundColor= '#5FFFB2';
            document.querySelector('.valuebox4').style.backgroundColor= '#5FFFB2';
            document.querySelector('.valuebox5').style.backgroundColor= '#5F7F81';
						}
		else if (rangeValue === 5){
            const annualReturn = "12%";
            annualReturnSpan.textContent = annualReturn;

            const monthlyGross = amount * 0;
            monthlyGrossSpan.textContent = monthlyGross.toLocaleString("de-DE");

            const monthlyNetIncome = amount * 0;
            monthlyNetIncomeSpan.textContent = monthlyNetIncome.toLocaleString("de-DE");

            const reimbursementGross = Math.round(amount * 0.6);
            reimbursementGrossSpan.textContent = reimbursementGross.toLocaleString("de-DE");

            const reimbursementNetIncome = Math.round(amount * 0.42);
            reimbursementNetIncomeSpan.textContent = reimbursementNetIncome.toLocaleString("de-DE");

            const totalGross = Math.round(amount * 0.6);
            totalGrossSpan.textContent = totalGross.toLocaleString("de-DE");

            const totalNetIncome = Math.round(amount * 0.42);
            totalNetIncomeSpan.textContent = totalNetIncome.toLocaleString("de-DE");
            document.querySelector('.valuebox1').style.backgroundColor= '#5FFFB2';
            document.querySelector('.valuebox2').style.backgroundColor= '#5FFFB2';
            document.querySelector('.valuebox3').style.backgroundColor= '#5FFFB2';
            document.querySelector('.valuebox4').style.backgroundColor= '#5FFFB2';
            document.querySelector('.valuebox5').style.backgroundColor= '#5FFFB2';
						}
        };

        amountInput.addEventListener("input", updateValues);
        rangeInput.addEventListener("input", updateValues);

        // Initial update
        updateValues();