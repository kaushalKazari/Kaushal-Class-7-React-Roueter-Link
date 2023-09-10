import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import Aside from './Aside'

export default class Layout extends Component {
  render() {
    return (
      <>
      <Container>
            <Header/>
            <Row className='h-100'>
                <Col className='border border-success height-400' sm={4}>
                    <Aside/>
                </Col>
                <Col className='border border-danger height-400' sm={8}>
                  <Outlet/>
                </Col>
            </Row>
            <Footer/>
      </Container>
      </>
    )
  }
}
