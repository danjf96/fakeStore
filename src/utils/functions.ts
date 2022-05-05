export const formatMoney = (amount:number, decimalCount = 2, decimal = ",", thousands = ".") => {
    try {

        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";
        amount = Number(Math.abs(Number(amount) || 0).toFixed(decimalCount))
        let i = parseInt(amount.toString()).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - Number(i)).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
        return '0,00'
    }
};