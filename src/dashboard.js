
import React, { useState } from 'react';
import NotificationCard from "./notificationcard";
function Dashboard(){
    let notificationcard=[
        {
        cardName:"earing monthly",
        price:4000,
         currency:"$",
        color:"primary",
        icon:"fa-calendar",
        isProgress:false
    },
    {
        cardName:"earning annual",
        price:21000,
        currency:"$",
        color:"success",
        icon:" fa-dollar-sign",
        isProgress:false
    },
    {
        cardName:"Tasks",
        price:50,
        color:"info",
       
        icon:"fa-clipboard-list",
        isProgress:false

    },
    {
        cardName:"Pending requests",
        price:10,
        color:"warning",
       
        icon:"fa-comments",
        isProgress:false
    }

    ]
    const [currentCard,setCurrentCard] = useState("None")
    
    let handleCardclick = (price)=>{
    setCurrentCard(price)
    }
    
    return(
    <>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                   < div class="row">
                       {
                           notificationcard.map((card)=>{
                               return<NotificationCard data={card} handleCard={handleCardclick}></NotificationCard>
                           })
                       }</ div>
                       {currentCard}
                       </>  
    )
                    }        
   
    

export default Dashboard;