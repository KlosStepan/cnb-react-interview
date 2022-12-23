import { Row, Table } from 'reactstrap';
import TRow from '../components/TRow';
import { useSelector } from 'react-redux';
function Body() {
    const date = useSelector((state: any) => state.currencies.date);
    const header = useSelector((state: any) => state.currencies.header);
    const table = useSelector((state: any) => state.currencies.table);
    return (<Row>
        <span>|body|</span>
        <span>{date}</span>
        <Table striped hover>
            <thead>
                <tr>
                    {(header.length !== 0) ?
                        header.map((h: string) => <th>{h}</th>) :
                        <td>zadne vysledky</td>}
                </tr>
            </thead>
            <tbody>
                {/*(body.length !== 0) ?
                    <span>x</span> :
                    <span>y</span>*/}
                {(table.length !== 0) ?
                    table.map((currency: any) => <TRow currency={currency} />) :
                    <tr><td>zavne vysledky</td></tr>}
                {/*<TRow />
                <TRow />
                <TRow />
                <TRow />
                <TRow />*/}
            </tbody>
        </Table>
    </Row>)
}
export default Body