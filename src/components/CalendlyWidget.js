'use client'
import { PopupButton} from "react-calendly";
import "./CalendlyWidget.scss";

const CalendlyWidget = () =>  (
  <PopupButton 
     url="https://calendly.com/starnawskamarta/30min"
     rootElement={document.getElementById("root")}
     text="Schedule a free consultation"
     color="#ED1C24"
     className="calendlyButton"
  />
);

export default CalendlyWidget;
