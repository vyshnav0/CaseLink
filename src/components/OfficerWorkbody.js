import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import '../style/OfficerWork.css'


export default function OfficerWork(){
    return(
        <>
<div className="bd">
<div className="bd-out">

    <div className="bd-element" onClick={() => window.location.href = '/complaintstatus'}>
        <img src="https://cdn-icons-png.flaticon.com/512/2519/2519204.png"/>
    Complaints
    </div>

    <div className="bd-element" onClick={() => window.location.href = '/missingadd'}>
            <img src="/images/search.png"/>
            Add-Missing
    </div>

    <div className="bd-element" onClick={() => window.location.href = '/wantedadd'}>
        <img src="/images/wanted.png"/>
        Add-Wanted
    </div>

    <div className="bd-element" onClick={() => window.location.href = '/Analysis'}>

        <img src="/images/monitoring.png"/>
        Crime Analysis
    </div>
    <div className="bd-element" onClick={() => window.location.href = '/missingtable'}>
        <img src="https://cdn-icons-png.flaticon.com/512/2519/2519204.png"/>
    Missing Data
    </div>
    <div className="bd-element" onClick={() => window.location.href = '/wantedtable'}>
        <img src="https://cdn-icons-png.flaticon.com/512/2519/2519204.png"/>
    Wanted Data
    </div>
</div>



{/* <div className="bd-out">
 <div className="bd-element">
    <div className="bd-element-item" onClick={() => window.location.href = '#'}>
        <img src="https://1.bp.blogspot.com/-CVRuBkTMQTs/X7pjGnuGgaI/AAAAAAAAJWo/o7ffBZqlwG8LD00ZT51-IG_hCsVYefy_ACLcBGAsYHQ/s320/facebook.png"/>
        
    </div>
    <div className="bd-element-item" onClick={() => window.location.href = '#'}>
        <img src="https://1.bp.blogspot.com/-jGqJucyV7cA/X7pjJMXoeeI/AAAAAAAAJXI/bpt-Jw53epQcfsD2OICe6ZY3McAO4yLngCLcBGAsYHQ/s320/whatsapp.png"/>
    </div>
    <div className="bd-element-item" onClick={() => window.location.href = '#'}>
        <img src="https://1.bp.blogspot.com/-FIp_xu0xVWM/X7pjHaKNbbI/AAAAAAAAJWs/q3Xpzq2eNxcY9HhEjafLxPabRZES8HVPACLcBGAsYHQ/s320/instagram.png"/>
    </div>
    <div className="bd-element-item" onClick={() => window.location.href = '#'}>
        <img src="https://1.bp.blogspot.com/-FnbTrQiiJ2A/X7pjImKjfpI/AAAAAAAAJXE/n7v66-2rcNEdPaIJNd_Q8y6nVWL_LxK2QCLcBGAsYHQ/s320/telegram.png"/>
    </div>
   Connect with us
 </div>


 <div className="bd-element" onClick={() => window.location.href = '#'}>

    <img src="https://1.bp.blogspot.com/-UrB0rc_amAA/X7pjIfFMTBI/AAAAAAAAJW8/pEAt1qL-m3IJymGZd1w0Kmz68Yjqa1tTQCLcBGAsYHQ/s320/solution.png"/>
    Solved Question Papers
 </div>
 <div className="bd-element" onClick={() => window.location.href = '#'}>

    <img src="https://1.bp.blogspot.com/-V3Q446p8Ioo/X7pjH3jAv4I/AAAAAAAAJW0/U1n9axShNFgRWQVvpxnq9ne5BQ9CNNgkwCLcBGAsYHQ/s320/online-course.png"/>
    Courses
 </div>

 <div className="bd-element" onClick={() => window.location.href = '#'}>

    <img src="https://1.bp.blogspot.com/-Zl8lCQMgopw/X7pjHidK90I/AAAAAAAAJWw/RKIz_SlLAqYRct4RXNSJPrWZOTEQ-xrJACLcBGAsYHQ/s320/notification.png"/>
    Notifications
 </div>


    </div>*/}
</div>

        </>
    )
}