import Currency from '../ts/Currency';
import { Table } from 'reactstrap';
import TRow from './TRow';

function TableCurrencies(props: any) {
    //console.log("props")
    //console.log(props)
    return (<Table striped hover>
        <thead>
            <tr>
                {(typeof (props.header) !== 'undefined' && props.header !== null)
                    ? props.header.map((hTxt: string) => <th>{hTxt}</th>)
                    : <td>zadna hlavicka</td>}
            </tr>
        </thead>
        <tbody>
            {(typeof (props.table) !== 'undefined' && props.table !== null)
                ? props.table.map((currency: Currency) => <TRow {...currency} />) :
                <tr><td>zadne vysledky</td></tr>}
        </tbody>
    </Table>)
}
export default TableCurrencies