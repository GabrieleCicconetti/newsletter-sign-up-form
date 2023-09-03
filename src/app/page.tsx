'use client'
import Input from "@/components/Input";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import MainBox from "@/components/MainBox";
import ThankYou from "@/components/ThankYou";
import Button from "@/components/Button";

export default function Home() {

  const [mail, setMail] = useState("")
  return (
      <main className={'flex-center'}>
        {
            mail === "" && <motion.div
                initial={{scale: .9, opacity: 0}}
                exit={{scale: .9, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                style={{width: '100%'}}>
                <MainBox
                    input={<Input onSuccess={(mail) => {
                      setMail(mail)
                    }}/>}/>
            </motion.div>
        }
        {
            mail !== "" && <motion.div
                initial={{scale: .9, opacity: 0}}
                exit={{scale: .9, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                style={{width: '100%'}}>
                <ThankYou button={
                  <Button onClick={() => {
                    setMail("")
                  }} text="Dismiss message"/>
                } email={mail}/>
            </motion.div>
        }
      </main>
  )
}
