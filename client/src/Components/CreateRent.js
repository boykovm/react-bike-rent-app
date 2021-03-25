import React, {Component} from "react";

export default class CreateRent extends Component{
    constructor(props) {
        super();

        this.state = {
            ...props,
            bikeName: '',
            bikeType: 'custom',
            price: false,
        }
    }

    submitRent = () => {
        if (this.state.bikeName && this.state.bikeType && this.state.price) {
            this.props.addBikeToAvailable({
                name: this.state.bikeName,
                type: this.state.bikeType,
                price: +this.state.price,
                available: true,

            })

            this.setState({
                bikeName: '',
                bikeType: 'custom',
                price: false,
            })
            // console.log(this.state)
        } else {
            alert('All fields must be filled')
        }
    }

    handleChange = (event) => {
        this.setState(() => ({[event.target.name]: event.target.value}))
    }

    render() {
        const {
            bikeName,
            bikeType,
            price,
        } = this.state

        return (
            <div className="my-3">
                <h4>&#129297; Create new rent</h4>
                <div className="mt-3 border d-flex flex-row justify-content-between container-fluid main focus py-2 px-4">
                    <div className="col-3 d-flex flex-column px-1">
                        <h6>Bike name</h6>
                        <input
                            type="text"
                            name="bikeName"
                            placeholder="Ex. Cannondale 56"
                            value={bikeName}
                            onChange={this.handleChange}
                            className="border-0 rounded-1"
                        />
                    </div>
                    <div className="col-3 mx-0 px-1 d-flex flex-column">
                        <h6>Bike type</h6>
                        <select
                            className="border-0 rounded-1"
                            name='bikeType'
                            value={bikeType}
                            onChange={this.handleChange}
                        >
                            <option value="custom">Custom</option>
                            <option value="road">Road</option>
                            <option value="mountain">Mountain</option>
                            <option value="fix">Fix</option>
                            <option value="hybrid">Hybrid</option>
                            <option value="cyclocross">Cyclocross</option>
                            <option value="electric">Electric</option>
                            <option value="touring">Touring</option>
                            <option value="women">Women</option>
                        </select>
                    </div>
                    <div className="col-2 mx-0 px-1 d-flex flex-column">
                        <h6>Price</h6>
                        <input
                            type="number"
                            name="price"
                            placeholder="99.00"
                            value={price}
                            min={0}
                            className="border-0 rounded-1"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-2 mx-0 px-1 d-flex flex-column-reverse">
                        <button
                            className="btn bg-success rounded-1 px-0 py-1"
                            onClick={() => this.submitRent()}
                        >
                            <h6 className="pb-0 my-auto text-white">Submit rent</h6>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

// export {CreateRent}