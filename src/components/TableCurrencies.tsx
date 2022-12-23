import Currency from '../ts/Currency';
import { Table } from 'reactstrap';
import TRow from './TRow';
function TableCurrencies(props: any) {
    console.log("props")
    console.log(props)
    return (<Table striped hover>
        <thead>
            <tr>
                {(props.header.length !== 'undefined' && props.header.length != null) ?
                    props.header.map((hTxt: string) => <th>{hTxt}</th>) :
                    <td>zadna hlavicka</td>}
            </tr>
        </thead>
        <tbody>
            {(props.table.length !== 'undefined' && props.table.length != null) ?
                props.table.map((currency: Currency) => <TRow {...currency} />) :
                <tr><td>zadne vysledky</td></tr>}
        </tbody>
    </Table>)
}
export default TableCurrencies