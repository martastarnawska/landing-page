'use client'
import { PopupWidget } from "react-calendly";

const CalendlyWidget = () =>  (
  <PopupWidget
      color="#00a2ff"
      text="Schedule free consultation"
      textColor="#ffffff"
      url="https://calendly.com/starnawskamarta/30min"
      rootElement={document.getElementById("root")}
  />
);

export default CalendlyWidget;
