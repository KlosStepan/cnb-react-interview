import { Row } from 'reactstrap';
function TRow(currency: any) {
    console.log(currency.currency)
    return (<tr>
        <td>{currency.currency.at(0)}</td>
        <td>{currency.currency.at(1)}</td>
        <td>{currency.currency.at(2)}</td>
        <td>{currency.currency.at(3)}</td>
        <td>{currency.currency.at(4)}</td>
    </tr>)
}
export default TRow