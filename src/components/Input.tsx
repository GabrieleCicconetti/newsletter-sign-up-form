import Button from "@/components/Button";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const checkEmail = (email: string) => {
  const at = email.split('@')
  if (at.length !== 2) {
    return false
  }
  const domain = at[1].split('.')
  return domain.length === 2;

}

export default function Input() {
  const [val, setVal] = useState("")
  const [error, setError] = useState(false)

  return <div className="">
    <div className="flex-between">
      <label className="label" htmlFor="email">Email address</label>
      <AnimatePresence>
        {
            error && <motion.div
                initial={{x: 20, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                exit={{x: -20, opacity: 0}}
                className="label error-label">Valid email required</motion.div>
        }
      </AnimatePresence>
    </div>
    <input onChange={(e) => {
      if (error) {
        setError(false)
      }
      setVal(e.target.value)
    }} className={(error ? 'error-state' : '')} placeholder="email@company.com" type="text" id="email"/>
    <Button onClick={() => {
      if (!checkEmail(val)) {
        setError(true)
        return
      }
    }} text="Subscribe to monthly newsletter"/>
  </div>
}
