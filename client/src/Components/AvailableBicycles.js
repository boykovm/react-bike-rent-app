import React, {Component} from "react";
import {AvailableBike} from "./AvailableBike";

export default class AvailableBicycles extends Component{
    constructor(props) {
        super(props);

        this.state = {
            bikes: []
        }
    }

    componentDidMount() {
        this.setState({bikes: this.props, ...this.props})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.bikes.length != this.props.bikes.length) {
            this.setState({...this.props})
        }
        // console.log(prevProps)
        // console.log(this.props)

        // if (prevProps === prevState && prevProps === this.props) {
        //     return
        // } else {
        //     this.setState({bikes: ...this.props.bikes})
        // }

        // console.log('did update')
        // console.log(this.state)
        // this.setState({bikes: this.props.bikes})
        // console.
        // this.setState({...this.props})
        // console.log(this.props)
        // this.setState({...this.props.bikes})
    }


    render() {
        // console.log(this.props.bikes)

        const {
            bikes,
            deleteBike,
            rentBike,
        } = this.state

        // console.log(this.props)
        // console.log(bikes)

        return (
            <div className="my-3">
                <h4>&#128690; Available bicycles {bikes ? <span>({bikes.length})</span> : null}</h4>

                {bikes.length ? bikes.map(bike => (
                <AvailableBike key={bike._id} bike={bike} deleteBike={deleteBike} rentBike={rentBike} />
                )) : <h4>We have not bikes for rent</h4>}
            </div>
        )
    }
}

// export {AvailableBicycles}