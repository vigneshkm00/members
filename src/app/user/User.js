import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { userLists } from './list/list'

import "./user.css"

function User(props) {
    const filteredData = userLists.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
    return (
        <div>
            {
                filteredData.map((user) => {
                    return (
                        <Card className="border-0">
                            <Card.Body>
                                <Row>
                                    <Col xs={2}>
                                        <img style={{maxWidth:"140%"}} src={user.profile} alt="" />
                                    </Col>
                                    <Col xs={8} className="mt-3 ps-4">
                                        <p className="fw-bold user-detail">{user.name} - <span className="text-muted">{user.role}</span></p>
                                        <p className="text-muted user-detail">{user.mail}</p>
                                    </Col>
                                    <Col xs={2} className="text-end">
                                        <Form.Check className="mt-2" />
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default User;