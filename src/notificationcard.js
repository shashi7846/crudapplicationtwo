import React from "react";
function NotificationCard(props){

    return(
        <>
        <div class="col-xl-3 col-md-6 mb-4" onClick={()=>props.handleCard(props.data.price)}>
                            
                            <div class={`card shadow h-100 py-2 border-left-${props.data.color}`}>
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class={`text-xs font-weight-bold text-primary text-uppercase mb-1 text-${props.data.color}`}>
                                                {props.data.cardName}</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{props.data.currency}{props.data.price}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class={`fas  fa-2x text-gray-300 ${props.data.icon}`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}
export default NotificationCard;