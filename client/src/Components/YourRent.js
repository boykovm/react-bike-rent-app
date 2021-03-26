import React, {Component} from "react";
import {RentedBike} from './RentedBike'

class YourRent extends Component{
    constructor() {
        super();

        this.state = {
            bikes: [],
            total: 0,
        }
    }

    componentDidMount() {
        // console.log(this.props)
        this.setState({...this.props})

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.bikes.length != this.props.bikes.length) {
            this.setState({...this.props})
        }
    }

    totalRentedPrice = () => {
        let total = 0;
        this.state.bikes.map(bike => {
            let timeNow = Date.parse(new Date())
            let rentStarted = Date.parse(bike.rentStarted)
            let dif = timeNow - rentStarted
            // console.log(timeNow)
            // console.log(rentStarted)
            // console.log(dif)
            if (dif >= 72000000) {
                total += +(bike.price / 2).toFixed(2)
            } else {
                total += bike.price
            }
        })
        return total
    }

    render() {
        const {
            bikes,
            cancelRent,
        } = this.state

        const total = +this.totalRentedPrice().toFixed(2)

        return (
            <div className="my-3">
                <h4>
                    &#129321; Your rent { bikes.length ? <span>(Total ${total})</span> : null }
                </h4>

                {bikes.length ? bikes.map(bike => (
                    <RentedBike key={bike._id} bike={bike} cancelRent={cancelRent} />
                    )) : <h4>You have not rented bikes</h4>}
            </div>
        )
    }
};

export {YourRent};