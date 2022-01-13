import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function MyDialog() {
  let [isOpen, setIsOpen] = useState(true)

  return (
    <div>
        <button className="
            bg-orange-500 rounded-md text-white border-0    
            hover:bg-orange-700 px-4" 
            onClick={e=>{e.preventDefault 
                setIsOpen(!isOpen)}}
        >
        Open Dialog
        </button>
        <Dialog 
            open={isOpen} onClose={() => setIsOpen(false)}
            className="fixed inset-0 m-auto bg-green-400 w-8/12 h-36 p-4 border-8 border-red-300"
        >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30"/>

        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
        This will permanently deactivate your account
        </Dialog.Description>

        <p>
        Are you sure you want to deactivate your account? All of your data will
        be permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
    </Dialog>
    </div>
      

      
  )
}