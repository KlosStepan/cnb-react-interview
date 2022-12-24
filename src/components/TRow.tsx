import Currency from '../ts/Currency';

function TRow(currency: Currency) {
    //console.log("currency")
    //console.log(currency)
    return (<tr>
        <td>{currency.country}</td>
        <td>{currency.currency}</td>
        <td>{currency.amount}</td>
        <td>{currency.code}</td>
        <td>{currency.rate}</td>
    </tr>)
}
export default TRow