import React from "react";
import ReactDOM from "react-dom/client";
import {CustomerForm} from "./CustomerForm";
// import { AppointmentsDayView } from "./AppointmentDayView";
// import { sampleAppointments } from "./sampleData";

ReactDOM.createRoot(
    document.getElementById("root")
).render(
    // <AppointmentsDayView appointments={sampleAppointments} />
    <CustomerForm original={{}} onSubmit={() => {}} />
);