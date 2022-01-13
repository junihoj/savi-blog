import { Fragment } from 'react';
import {Menu, Transition, Popover} from '@headlessui/react';
const {Item, Button} = Menu;


const BlogNav = ()=>{


    return (
        <Popover className="bg-white relative">
            <div className="relative max-w-7xl px-4 mx-auto">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-between md:space-x-10">
                    <div><img src={'/logo.jpg'}  width="24" height="24" /></div>
                    <div><img src={'/logo.jpg'}  width="24" height="24" /></div>
                    <div><img src={'/logo.jpg'}  width="24" height="24" /></div>
                    <div><img src={'/logo.jpg'}  width="24" height="24" /></div>
                </div>
            </div>



        </Popover>
    )
}

export default BlogNav;