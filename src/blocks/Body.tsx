import { Row, Table } from 'reactstrap';
import TRow from '../components/TRow';
function Body() {
    return (<Row>
        <span>|body|</span>
        <Table striped hover size="sm">
            <thead>
                <tr>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                </tr>
            </thead>
            <tbody>
                <TRow />
                <TRow />
                <TRow />
                <TRow />
                <TRow />
            </tbody>
        </Table>
    </Row>)
}
export default Body