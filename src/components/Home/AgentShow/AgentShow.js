import React from 'react';

const AgentShow = (props) => {
    console.log(props)
    const {name, img, position}=props.agent;
    return (
        <div className="col-md-12 p-1 mt-2 card shadow-lg" style={{borderRadius:'0.85rem'}}>
            <div className="row">
                <div className="col-md-3 col-sm-3">
                    <img src={img} className="img-fluid"/>
                </div>
                <div className="col-md-9 col-sm-9">
                    <h4 className="mt-1">{name}</h4>
                    <div className="">
                        <p className="me-1 my-0">+8801234</p>
                        <p className="ms-1 my-0">agent@agent.com</p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default AgentShow;