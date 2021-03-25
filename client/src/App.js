import React, {Component} from "react";
import CreateRent from './Components/CreateRent'
import {YourRent} from './Components/YourRent'
import AvailableBicycles from './Components/AvailableBicycles'

class App extends Component {
    constructor() {
        super();

        this.state = {
            rentedBikes: [],
            availableBikes: [],
            user: {id: localStorage.getItem('user')},
            // user: {
            //     id: null
            // },
        }
    }

    update = () => {
        fetch('http://localhost:5000/bikes/available', {
            method: 'GET',

        })
            .then(response => response.json())
            .then(data => this.setState({availableBikes: data}));

        fetch(`http://localhost:5000/bikes/rent/${this.state.user.id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({rentedBikes: data});
                this.calculateRent()
            })


    }

    componentDidMount() {
        // console.log('component did mount')
        if (!this.state.user.id) {
            fetch('http://localhost:5000/user/current', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: 'user'
                })
            }).then(response => response.json())
                .then(data => {
                    localStorage.setItem('user', data);
                    this.setState({user: {id: data}})
                    console.log(this.state.user.id)
                    this.update()
                })
        } else {
            // fetch(`http://localhost:5000/user/current/${this.state.user.id}`, {
            //     method: 'GET'
            // })
            //     .then(response => response.json())
            //     .then(data => this.setState({availableBikes: data}))
            // // this.update()

            this.update()
        }
        // this.setState()
        // fetch('http://localhost:5000/bikes/available', {
        //     method: 'GET'
        // })
        //     .then(response => response.json())
        //     .then(data => this.setState({availableBikes: data}))
        //
        // fetch('http://localhost:5000/bikes/rent', {
        //     method: 'GET'
        // })
        //     .then(response => response.json())
        //     .then(data => this.setState({rentedBikes: data}))

    }

    addBikeToAvailable = (bike) => {
        fetch('http://localhost:5000/bikes/available', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...bike
            })
        }).then(response => {
            console.log(response);
            this.update()
        })


    }

    deleteBikeFromAvailable = (id) => {
        fetch('http://localhost:5000/delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id
            })
        }).then(response => {
            console.log(response);
            this.update();
        })
    }

    rentBike = (id) => {
        fetch(`http://localhost:5000/rent/${this.state.user.id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id
            })
        }).then(response => response.json())
            .then(data => {
                this.setState({rentedBikes: data});
                this.update();
            })
    }

    cancelRent = (id) => {
        fetch(`http://localhost:5000/cancel/${this.state.user.id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id
            })
        }).then(response => {
            console.log(response);
            this.update()
        })
    }

    calculateRent = () => {
        console.log('calc')
    }

    render() {
        const {
            rentedBikes,
            availableBikes} = this.state

        return (
            <>
                <h3>Awesome Bike Rental</h3>

                <CreateRent addBikeToAvailable={this.addBikeToAvailable} />

                <YourRent bikes={rentedBikes} cancelRent={this.cancelRent} />

                <AvailableBicycles
                    bikes={availableBikes}
                    deleteBike={this.deleteBikeFromAvailable}
                    rentBike={this.rentBike}
                />
            </>
        )
    }
};

export {App};