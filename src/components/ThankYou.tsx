import Button from "@/components/Button";
import {ThankYouType} from "@/types";

export default function ThankYou(props: ThankYouType) {
  return <div className="box ty">
    <img src="/icon-success.svg" style={{width: '3.3rem', height: '3.3rem', display: 'block'}} alt=""/>
    <h1>Thanks for subscribing!</h1>
    <p>
      A confirmation email has been sent to <b>{props.email}</b>. Please open it and click the button inside to confirm your subscription.
    </p>
    {props.button}
  </div>
}
