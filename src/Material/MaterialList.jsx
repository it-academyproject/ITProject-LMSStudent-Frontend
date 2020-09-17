import React from 'react';
import './Material.scss';
import MaterialItem from './MaterialItem.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const MaterialList = (props) => {
    let { teachingMaterial, student } = props;

    const material = teachingMaterial.map((material, i) => {
        return (
            <MaterialItem
                key={i}
                material={material}
                student={student}
            />
        )
    })

    return (
        <Row className="d-flex justify-content-center">
            <Col xs={12} lg={10}>
                <Table className="mb-0" striped>
                    <thead>
                        <tr>
                            <th className="py-2 table-border-right">Name</th>
                            <th className="py-2 table-border-right">Topic</th>
                            <th className="py-2 table-border-right">Type</th>
                            <th className="py-2 table-border-right">Link</th>
                            {student ? <th className="text-center py-2">Check</th> : <th className="text-center py-2">Delete</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {material}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}

export default MaterialList;