import { useEffect, useRef, useState } from 'react';
import {
    Col, Container,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Modal, ModalBody, ModalHeader,
    Input, Row, Table
} from 'reactstrap';
import TableCurrencies from '../components/TableCurrencies';
import TRow from '../components/TRow';
import { useSelector } from 'react-redux';
import Currency from '../ts/Currency';
function Body() {
    //Modal stuff
    const [isOpen, setIsOpen] = useState(false)

    //Dropdowns
    const [ddOneFrom, setDdOneFrom] = useState("CZK")
    //const [isDdOneOpen, setIsDdOneOpen] = useState(false)
    const [ddTwoTo, setDdTwoTo] = useState("To Currency")
    const [isDdTwoOpen, setIsDdTwoOpen] = useState(false)

    //Calculation variables
    const [amount, setAmount] = useState(0);
    const [rate, setRate] = useState(0);
    const [result, setResult] = useState(0);
    function calculatePrice() {
        console.log("CZK to " + ddTwoTo)
        console.log("retrieving rate, setRate()")
        console.log("calculating price amount*rate, setResult()")
    }

    //Data from Redux 
    const date = useSelector((state: any) => state.currencies.date)
    const header = useSelector((state: any) => state.currencies.header)
    const table = useSelector((state: any) => state.currencies.table)
    useEffect(() => {
        console.log("useEffect()")
    }, [])
    return (<Row className={'itemWrapper'}>
        <span>|BODY|</span>
        <span>
            <h1 style={{ 'display': 'inline' }}>{date}</h1>
            <span>&nbsp;</span>
            <span className={'btnStyle'} onClick={() => { setIsOpen(true); }}>FX Calc.</span>
        </span>
        <Modal isOpen={isOpen}
            toggle={() => setIsOpen(!isOpen)}
            modalTransition={{ timeout: 200 }}>
            <ModalHeader>
                <span>Forein Exchange Calculator</span>
            </ModalHeader>
            <ModalBody>
                <Container>
                    <Row>
                        <Col className="bg-light border"><b>FROM</b> </Col ><Col className="bg-light border"><b>TO</b></Col>
                    </Row>
                    <Row>
                        <Col className="bg-light border">
                            <div>{ddOneFrom} (fixed here)</div>
                            {/*<Dropdown isOpen={isDdOneOpen} toggle={() => { setIsDdOneOpen(!isDdOneOpen) }}>
                                <DropdownToggle caret>
                                    {ddOneFrom} &nbsp;
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => { setDdOneFrom("CZK") }}>CZK</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>*/}
                        </Col>
                        <Col className="bg-light border">
                            <Dropdown isOpen={isDdTwoOpen} toggle={() => { setIsDdTwoOpen(!isDdTwoOpen) }}>
                                <DropdownToggle caret>
                                    {ddTwoTo} &nbsp;
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => { setDdTwoTo("USD") }}>USD</DropdownItem>
                                    <DropdownItem onClick={() => { setDdTwoTo("CAD") }}>CAD</DropdownItem>
                                    <DropdownItem onClick={() => { setDdTwoTo("BGL") }}>BGL</DropdownItem>
                                    <DropdownItem onClick={() => { setDdTwoTo("EUR") }}>EUR</DropdownItem>
                                    <DropdownItem onClick={() => { setDdTwoTo("HUF") }}>HUF</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="bg-light border">
                            <Input
                                value={(amount) ? amount : 0}
                                onChange={(e: any) => { setAmount(e.target.value); console.log(e.target.value) }} />
                        </Col>
                        <Col className="bg-light border">
                            <span className={'btnStyle'} onClick={() => { calculatePrice(); }}>Calc. -&#62;</span>
                            <span>&nbsp;</span>
                            <span>{result}</span>
                        </Col>
                    </Row>
                </Container>
            </ModalBody>
        </Modal>
        <TableCurrencies header={header} table={table} />
    </Row>)
}
export default Body