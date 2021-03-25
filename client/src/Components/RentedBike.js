import React, {Component} from "react";

class RentedBike extends Component{
    constructor(props) {
        super();

        this.state = {
            ...props
        }
    }

    render() {
        const {
            _id,
            name,
            type,
            price,
        } = this.state.bike

        const { cancelRent } = this.state

        return (
            <div className="mt-3 d-flex flex-row justify-content-between container-fluid py-2 px-4 bg-white border rented-bikes">
                <div className="col-7 my-auto d-flex justify-content-between">
                    <div className="container-fluid px-0 mx-o d-flex flex-row justify-content-start title-block">
                        <div className="col-3 py-0 mx-2">
                            <h6 className="pb-0 my-auto d-bloc">
                                {name}
                            </h6>
                        </div>
                        <h6 className="pb-0 py-auto d-block">/</h6>
                        <div className="col-3 py-0 mx-2 text-center">
                            <h6 className="pb-0">
                                {type}
                            </h6>
                        </div>
                        <h6 className="pb-0 py-auto d-block">/</h6>
                        <div className="col-3 py-0 mx-2 d-flex flex-row-reverse">
                            <h6 className="pb-0 my-auto d-bloc">
                                ${price}
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="col-2 mx-0 px-1 d-flex flex-column-reverse">
                    <button
                        className="btn bg-danger rounded-1 px-0 py-1"
                        onClick={() => cancelRent(_id)}
                    >
                        <h6 className="pb-0 my-auto text-white">Cancel rent</h6>
                    </button>
                </div>
            </div>
        )
    }
}

export {RentedBike}