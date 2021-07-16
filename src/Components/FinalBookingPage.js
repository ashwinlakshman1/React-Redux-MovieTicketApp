import QRCode from "qrcode.react"
import React, { Component } from 'react';
import {Card} from 'react-bootstrap'
import { format } from 'date-fns'

/***** Final Booking Confirmation Page *****/


class FinalBookingPage extends Component{
    constructor (props) {
        super(props)
        this.state= { ticketData: {}}
    }

    componentDidMount(){
        console.log('in final',this.props.location.state)
              }

    render(){
        const ticketData = this.props.location.state.input
        const ticketDataString = JSON.stringify(ticketData)
        // console.log(ticketDataString)
        const time1 = ticketData.date
        const dateDisplay = format(time1, 'MM/dd/YYY')

    return(
        <div>
            <h2 style={{color:'white', fontSize:'30px'}}className={"text-center"}>Your booking is confirmed!</h2>
            <Card style={{ width: '60rem',height:'40rem',float:'center', flexDirection:'row'}}
                border="dark" >
                <Card.Body>
                    <Card.Title style={{color:'white', fontSize:'20px'}}>
                        Scan QR Code</Card.Title>
                    <Card.Text style={{color:'white', fontSize:'12px'}}>
                            <QRCode value = {ticketDataString} ></QRCode>
                    </Card.Text>
                    <br/>
                    <Card.Title style={{color:'white', fontSize:'20px'}}>
                        Your Ticket Details</Card.Title>
                    <Card.Text style = {{color:'white',fontSize:'15px'}}>
                        Movie : {ticketData.movie}
                        <br />
                        Time : {ticketData.time}
                        <br />
                        Number of tickets : {ticketData.tickets}
                        <br />
                        Date : {dateDisplay}
                        {// <br />
                        // {ticketDataString}
                      }
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
  }
}

export default FinalBookingPage
