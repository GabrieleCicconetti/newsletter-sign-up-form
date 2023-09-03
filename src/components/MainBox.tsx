import {MainBoxType} from "@/types";


export default function MainBox(props: MainBoxType) {
  return <div className="box main-box flex-between">
    <div className="left">
      <h1>Stay updated!</h1>
      <p>
        Join 60,000+ product managers receiving mothly updates on:
      </p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
      {props.input}
    </div>
    <div className="right">
      <div className="img"></div>
    </div>
  </div>
}
